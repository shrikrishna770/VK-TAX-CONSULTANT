/**
 * Lead capture endpoint.
 *
 * Delivery channels (configure at least one in production — see .env.example):
 *  - GOOGLE_SCRIPT_URL: Google Apps Script web app that appends a row to a Sheet.
 *  - RESEND_API_KEY + LEAD_NOTIFY_EMAIL: email notification to the business owner.
 *
 * The request succeeds only if at least one channel accepted the lead, so a lead is
 * never silently lost.
 */

import { SERVICES } from "../../data/site";

const MAX = { fullName: 100, email: 150, phone: 20, service: 100, message: 2000, page: 200 };
const ALLOWED_SERVICES = new Set([...SERVICES.map((s) => s.title), "Other / Not sure"]);

// Best-effort, per-instance rate limit (5 submissions / 10 min / IP).
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
}

const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");

function normalisePhone(raw) {
  const digits = raw.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits.replace(/^0/, "");
  return /^[6-9]\d{9}$/.test(local) ? `+91${local}` : null;
}

function validate(body) {
  const lead = {
    fullName: clean(body.fullName, MAX.fullName),
    email: clean(body.email, MAX.email).toLowerCase(),
    phone: clean(body.phone, MAX.phone),
    service: clean(body.service, MAX.service),
    message: clean(body.message, MAX.message),
    page: clean(body.page, MAX.page),
  };
  const errors = {};

  if (lead.fullName.length < 2) errors.fullName = "Please enter your name.";
  const phone = normalisePhone(lead.phone);
  if (!phone) errors.phone = "Please enter a valid 10-digit mobile number.";
  else lead.phone = phone;
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) errors.email = "Please enter a valid email address.";
  if (!ALLOWED_SERVICES.has(lead.service)) errors.service = "Please select a service.";
  if (body.consent !== true) errors.consent = "Please agree to be contacted.";

  return { lead, errors };
}

const escapeHtml = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

async function sendToSheet(lead) {
  const url = process.env.GOOGLE_SCRIPT_URL;
  if (!url || !url.startsWith("https://")) return null;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Sheet responded ${res.status}`);
  return true;
}

async function sendEmail(lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  if (!key || !to) return null;
  const rows = [
    ["Name", lead.fullName],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["Service", lead.service],
    ["Message", lead.message || "—"],
    ["Page", lead.page || "—"],
    ["Received", lead.receivedAt],
  ]
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || "Website <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: lead.email || undefined,
      subject: `New enquiry: ${lead.service} — ${lead.fullName}`,
      html: `<h2>New website enquiry</h2><table>${rows}</table>`,
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`Email responded ${res.status}`);
  return true;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = req.body && typeof req.body === "object" ? req.body : null;
  if (!body) return res.status(400).json({ message: "Invalid request." });

  // Honeypot: real users never fill this hidden field. Pretend success for bots.
  if (body.company_website) return res.status(200).json({ message: "Success" });

  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
  if (rateLimited(ip)) {
    return res.status(429).json({ message: "Too many requests. Please call or WhatsApp us instead." });
  }

  const { lead, errors } = validate(body);
  if (Object.keys(errors).length) {
    return res.status(400).json({ message: "Please correct the highlighted fields.", errors });
  }
  lead.receivedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const results = await Promise.allSettled([sendToSheet(lead), sendEmail(lead)]);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value === true);
  const configured = results.some((r) => r.status === "rejected" || r.value === true);

  results.forEach((r) => {
    if (r.status === "rejected") console.error("Lead delivery failed:", r.reason?.message);
  });

  if (delivered) return res.status(200).json({ message: "Success" });

  if (!configured && process.env.NODE_ENV !== "production") {
    console.info("[dev] No lead channel configured. Lead received:", { ...lead, phone: "***", email: "***" });
    return res.status(200).json({ message: "Success" });
  }

  if (!configured) console.error("No lead delivery channel configured (GOOGLE_SCRIPT_URL or RESEND_API_KEY).");
  return res.status(502).json({ message: "We could not send your request. Please call or WhatsApp us." });
}
