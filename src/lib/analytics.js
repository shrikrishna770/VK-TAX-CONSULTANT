export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/** Sends a GA4 event if Google Analytics is configured. Safe to call anywhere. */
export function trackEvent(name, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function trackPageview(url) {
  if (GA_ID && typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", GA_ID, { page_path: url });
  }
}
