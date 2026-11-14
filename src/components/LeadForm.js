import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Send, CheckCircle2, Phone, MessageCircle } from "lucide-react";
import { SERVICES, SITE, whatsappUrl } from "../data/site";
import { trackEvent } from "../lib/analytics";

/**
 * Consultation / callback form shared by the home and contact pages.
 * `withMessage` shows the free-text message box.
 */
export default function LeadForm({ idPrefix = "lead", withMessage = false, submitLabel = "Request a Callback", defaultService = "" }) {
  const router = useRouter();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");

  const id = (name) => `${idPrefix}-${name}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: data.get("fullName"),
      phone: data.get("phone"),
      email: data.get("email"),
      service: data.get("service"),
      message: data.get("message") || "",
      consent: data.get("consent") === "on",
      company_website: data.get("company_website"),
      page: router.asPath,
    };

    setStatus("sending");
    setErrors({});
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        form.reset();
        trackEvent("generate_lead", { service: payload.service, form: idPrefix });
        return;
      }
      setErrors(json.errors || {});
      setServerMessage(json.message || "Something went wrong.");
      setStatus("error");
    } catch {
      setServerMessage("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="lead-success" role="status">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h3>Thank you — we have received your request.</h3>
        <p>
          Our team will call you back during office hours ({SITE.hours.label}). For anything urgent, call{" "}
          <a href={`tel:${SITE.phones[0].tel}`}>{SITE.phones[0].display}</a>.
        </p>
        <button type="button" className="lead-link-btn" onClick={() => setStatus("idle")}>
          Send another request
        </button>
      </div>
    );
  }

  const fieldProps = (name) => ({
    id: id(name),
    name,
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
  });

  const fieldError = (name) =>
    errors[name] ? (
      <span className="lead-field-error" id={id(`${name}-error`)}>
        {errors[name]}
      </span>
    ) : null;

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="lead-row">
        <div className="lead-field">
          <label htmlFor={id("fullName")}>Full name *</label>
          <input {...fieldProps("fullName")} type="text" autoComplete="name" placeholder="e.g. Rahul Sharma" required minLength={2} maxLength={100} />
          {fieldError("fullName")}
        </div>
        <div className="lead-field">
          <label htmlFor={id("phone")}>Mobile number *</label>
          <input
            {...fieldProps("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="10-digit mobile number"
            required
            pattern="^(\+?91[\s-]?)?0?[6-9]\d{4}[\s-]?\d{5}$"
            title="Enter a valid 10-digit Indian mobile number"
            maxLength={20}
          />
          {fieldError("phone")}
        </div>
      </div>

      <div className="lead-row">
        <div className="lead-field">
          <label htmlFor={id("email")}>Email (optional)</label>
          <input {...fieldProps("email")} type="email" autoComplete="email" placeholder="you@example.com" maxLength={150} />
          {fieldError("email")}
        </div>
        <div className="lead-field">
          <label htmlFor={id("service")}>Service required *</label>
          <select {...fieldProps("service")} required defaultValue={defaultService}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
          {fieldError("service")}
        </div>
      </div>

      {withMessage && (
        <div className="lead-field">
          <label htmlFor={id("message")}>Your message (optional)</label>
          <textarea {...fieldProps("message")} rows={5} maxLength={2000} placeholder="Briefly describe your requirement…" />
        </div>
      )}

      {/* Honeypot — hidden from people, filled by bots */}
      <div className="lead-hp" aria-hidden="true">
        <label htmlFor={id("company_website")}>Leave this field empty</label>
        <input id={id("company_website")} name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="lead-consent">
        <input {...fieldProps("consent")} type="checkbox" required />
        <label htmlFor={id("consent")}>
          I agree to be contacted by {SITE.name} about my enquiry. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        </label>
      </div>
      {fieldError("consent")}

      <button type="submit" className="lead-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : submitLabel}
        <Send size={18} aria-hidden="true" />
      </button>

      {status === "error" && (
        <div className="lead-error" role="alert">
          <p>{serverMessage}</p>
          <p className="lead-fallback">
            You can also reach us directly:{" "}
            <a href={`tel:${SITE.phones[0].tel}`}>
              <Phone size={14} aria-hidden="true" /> Call
            </a>{" "}
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={14} aria-hidden="true" /> WhatsApp
            </a>
          </p>
        </div>
      )}
    </form>
  );
}
