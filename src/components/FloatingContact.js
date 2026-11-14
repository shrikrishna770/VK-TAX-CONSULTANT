import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappUrl } from "../data/site";
import { trackEvent } from "../lib/analytics";

/** Floating WhatsApp + call buttons, visible on every page. */
export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href={`tel:${SITE.phones[0].tel}`}
        className="fc-btn fc-call"
        aria-label={`Call ${SITE.phones[0].display}`}
        onClick={() => trackEvent("click_call")}
      >
        <Phone size={22} aria-hidden="true" />
      </a>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="fc-btn fc-whatsapp"
        aria-label="Chat on WhatsApp"
        onClick={() => trackEvent("click_whatsapp")}
      >
        <MessageCircle size={24} aria-hidden="true" />
      </a>
    </div>
  );
}
