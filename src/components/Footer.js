import Link from "next/link";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { SITE, SERVICES, fullAddress, mapsDirectionsUrl } from "../data/site";

const SOCIAL_LABELS = { facebook: "Facebook", linkedin: "LinkedIn", instagram: "Instagram" };

export default function Footer() {
  const socials = Object.entries(SITE.social).filter(([, url]) => url);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-title">{SITE.name}</p>
            <p className="footer-desc">
              GST, income tax, TDS, payroll and accounting services for individuals and businesses in Ghaziabad and
              across India.
            </p>
            {socials.length > 0 && (
              <ul className="footer-social">
                {socials.map(([key, url]) => (
                  <li key={key}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      {SOCIAL_LABELS[key] || key}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <p className="footer-heading">Services</p>
            <ul className="footer-list">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Company</p>
            <ul className="footer-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/resources">Tax Calendar &amp; Checklists</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Engagement</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-heading">Contact</p>
            <ul className="footer-list contact-list">
              <li>
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="accent-link">{SITE.email}</a>
              </li>
              <li>
                <Phone size={16} aria-hidden="true" />
                <span>
                  {SITE.phones.map((p, i) => (
                    <span key={p.tel}>
                      {i > 0 && ", "}
                      <a href={`tel:${p.tel}`}>{p.display}</a>
                    </span>
                  ))}
                </span>
              </li>
              <li>
                <MapPin size={16} aria-hidden="true" />
                <a href={mapsDirectionsUrl()} target="_blank" rel="noopener noreferrer">{fullAddress()}</a>
              </li>
              <li>
                <Clock size={16} aria-hidden="true" />
                <span>{SITE.hours.label}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright" suppressHydrationWarning>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="footer-copyright">
            Information on this website is general in nature and not a substitute for professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
