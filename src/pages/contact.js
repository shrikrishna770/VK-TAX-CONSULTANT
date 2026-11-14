import Link from "next/link";
import { useRouter } from "next/router";
import EmailText from "../components/EmailText";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

import Seo, { businessSchema, breadcrumbSchema } from "../components/Seo";
import LeadForm from "../components/LeadForm";
import { SITE, SERVICES, getService, fullAddress, mapsEmbedUrl, mapsDirectionsUrl, whatsappUrl } from "../data/site";

export default function Contact() {
  // Service pages link here with ?service=<slug> to preselect the dropdown.
  const { query, isReady } = useRouter();
  const initialService = (isReady && getService(String(query.service || ""))?.title) || "";

  return (
    <div className="contact-page">
      <Seo
        title="Contact VK Tax Consultant | Tax Consultant in Ghaziabad"
        description="Call, WhatsApp or send an enquiry to VK Tax Consultant for GST, ITR, TDS, payroll and accounting services in Ghaziabad. Office open Monday to Saturday."
        path="/contact"
        jsonLd={[businessSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]}
      />

      <div className="container">
        <section className="contact-hero hero-in">
          <span className="hero-pill">Contact Us</span>
          <h1>
            Let&apos;s Start a <br />
            <span className="accent">Conversation.</span>
          </h1>
          <p className="contact-subtitle">
            Share your requirement and we will call you back with the next steps and a clear quote. Prefer to talk now?
            Call or WhatsApp us directly.
          </p>
        </section>

        <section className="contact-grid" id="consultation">
          <div className="contact-form-card reveal">
            <div className="form-header">
              <div className="line" aria-hidden="true"></div>
              <h2>Book a Free Consultation</h2>
            </div>
            <LeadForm key={initialService} idPrefix="contact" withMessage submitLabel="Send Enquiry" defaultService={initialService} />
          </div>

          <div className="contact-sidebar">
            <div className="info-card reveal">
              <h2>Reach Us Directly</h2>
              <ul className="contact-methods">
                <li className="method-item">
                  <div className="method-icon"><Phone size={20} aria-hidden="true" /></div>
                  <div className="method-details">
                    <div className="label">Phone</div>
                    <div className="value">
                      {SITE.phones.map((p) => (
                        <div key={p.tel}><a href={`tel:${p.tel}`}>{p.display}</a></div>
                      ))}
                    </div>
                  </div>
                </li>
                <li className="method-item">
                  <div className="method-icon"><MessageCircle size={20} aria-hidden="true" /></div>
                  <div className="method-details">
                    <div className="label">WhatsApp</div>
                    <div className="value">
                      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Chat with us</a>
                    </div>
                  </div>
                </li>
                <li className="method-item">
                  <div className="method-icon"><Mail size={20} aria-hidden="true" /></div>
                  <div className="method-details">
                    <div className="label">Email</div>
                    <div className="value small"><a href={`mailto:${SITE.email}`}><EmailText email={SITE.email} /></a></div>
                  </div>
                </li>
                <li className="method-item">
                  <div className="method-icon"><MapPin size={20} aria-hidden="true" /></div>
                  <div className="method-details">
                    <div className="label">Office</div>
                    <address className="value">{fullAddress()}</address>
                  </div>
                </li>
                <li className="method-item">
                  <div className="method-icon"><Clock size={20} aria-hidden="true" /></div>
                  <div className="method-details">
                    <div className="label">Office Hours</div>
                    <div className="value">{SITE.hours.label}</div>
                  </div>
                </li>
              </ul>

              <div className="talk-box">
                <p className="talk-title">Prefer to talk right away?</p>
                <p className="talk-text">Call or WhatsApp us during office hours for a quick answer.</p>
                <div className="talk-actions">
                  <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="primary-button">
                    <MessageCircle size={18} aria-hidden="true" /> WhatsApp
                  </a>
                  <a href={`tel:${SITE.phones[0].tel}`} className="secondary-button">
                    <Phone size={18} aria-hidden="true" /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map-card reveal" aria-label="Office location">
          <a className="map-fallback" href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
            <MapPin size={32} />
            <span>Open in Google Maps</span>
          </a>
          <iframe
            title={`Map showing ${SITE.name} office location`}
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="map-overlay">
            <div className="map-location">
              <div className="location-dot" aria-hidden="true"></div>
              <span className="location-name">{fullAddress()}</span>
            </div>
            <a className="directions-btn" href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer">
              <Navigation size={14} aria-hidden="true" /> Directions
            </a>
          </div>
        </section>

        <section className="contact-services reveal" aria-label="Services we can help with">
          <p>We can help with</p>
          <ul>
            {SERVICES.map((svc) => (
              <li key={svc.slug}>
                <Link href={`/services/${svc.slug}`}>{svc.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
