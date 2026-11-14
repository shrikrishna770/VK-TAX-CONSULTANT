import Link from "next/link";
import EmailText from "../components/EmailText";
import { ArrowRight, ShieldCheck, Search, Layers, CheckCircle } from "lucide-react";

import Seo, { businessSchema, faqSchema } from "../components/Seo";
import ServiceCard from "../components/ServiceCard";
import LeadForm from "../components/LeadForm";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FaqSection from "../components/FaqSection";
import ComplianceTracker from "../components/ComplianceTracker";
import { SITE, SERVICES, FAQS } from "../data/site";

const PROCESS = [
  { step: "01", title: "Understand", desc: "A free consultation to understand your income, business and current compliance status.", icon: Search },
  { step: "02", title: "Plan", desc: "A clear list of documents, timelines and a fixed quote — before any work starts.", icon: Layers },
  { step: "03", title: "File & Follow Up", desc: "Accurate, on-time filings with acknowledgements shared, and reminders for upcoming due dates.", icon: CheckCircle },
];

const HIGHLIGHTS = [
  { value: `Since ${SITE.foundingYear}`, label: "Serving Ghaziabad" },
  { value: `${SERVICES.length}`, label: "Core compliance services" },
  { value: "Mon – Sat", label: "Office open 6 days" },
  { value: "Online", label: "Share documents on WhatsApp / email" },
];

export default function Home() {
  return (
    <div className="home-wrapper">
      <Seo
        title="VK Tax Consultant | GST, ITR, TDS & Accounting Services in Ghaziabad"
        description="GST registration & returns, income tax (ITR) filing, TDS, payroll and accounting services in Ghaziabad. Book a free consultation with VK Tax Consultant."
        path="/"
        jsonLd={[businessSchema(), faqSchema(FAQS)]}
      />

      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content hero-in">
            <div className="hero-badge">
              <span className="dot-pulse" aria-hidden="true">
                <span className="ping"></span>
                <span className="dot"></span>
              </span>
              Tax &amp; Compliance Experts in Ghaziabad
            </div>
            <h1 className="hero-title">
              Mastery in <br />
              <span className="serif-italic">Every</span> Ledger.
            </h1>
            <p className="hero-subtitle">
              GST, income tax, TDS, payroll and accounting — handled accurately and on time, so you can focus on
              running your business.
            </p>
            <div className="hero-actions">
              <Link href="#consultation" className="primary-btn">
                Book a Free Consultation
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
              <Link href="#process" className="outline-btn">
                How We Work
              </Link>
            </div>
          </div>

          <div className="hero-visual hero-in hero-in-delay">
            <div className="hero-blob" aria-hidden="true" />
            <ComplianceTracker />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights" aria-label="Highlights">
        <div className="container highlights-grid">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="highlight reveal">
              <div className="highlight-value">{h.value}</div>
              <div className="highlight-label">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="header-row">
            <div className="header-text">
              <h2 className="section-title">
                Financial Services <br />
                <span className="dim">Built for Growth.</span>
              </h2>
              <p className="section-desc">
                Complete tax and compliance support so you can focus on your work while we handle the details.
              </p>
            </div>
            <Link href="/services" className="secondary-button">
              View all services <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div key={s.slug} className={i === 0 ? "featured" : undefined}>
                <ServiceCard service={s} delay={i * 0.08} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-home" id="process">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-heading">Three simple steps</h2>
          </div>
          <div className="process-grid">
            {PROCESS.map((p, i) => (
              <div key={p.step} className="process-card reveal" style={{ "--delay": `${i * 0.1}s` }}>
                <span className="step-num">{p.step}</span>
                <p.icon size={28} aria-hidden="true" className="process-icon" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <FaqSection faqs={FAQS} />

      {/* Consultation form */}
      <section className="form-section" id="consultation">
        <div className="container">
          <div className="form-grid">
            <div className="form-text">
              <h2 className="cta-title">
                Book Your Free <br />
                <span className="accent">Consultation.</span>
              </h2>
              <p className="cta-desc">
                Tell us what you need and we will call you back during office hours to understand your requirement
                and share a clear quote.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">
                    {SITE.phones.map((p) => (
                      <div key={p.tel}>
                        <a href={`tel:${p.tel}`}>{p.display}</a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Email</div>
                  <div className="contact-value small">
                    <a href={`mailto:${SITE.email}`}><EmailText email={SITE.email} /></a>
                  </div>
                </div>
              </div>

              <div className="privacy-badge">
                <div className="icon-box">
                  <ShieldCheck size={20} aria-hidden="true" />
                </div>
                <div>
                  <div className="badge-title">Your information stays confidential</div>
                  <div className="badge-text">
                    Used only to respond to your enquiry. <Link href="/privacy-policy">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3 className="card-title">Request a Callback</h3>
              <p className="card-subtitle">We respond during office hours: {SITE.hours.label}.</p>
              <LeadForm idPrefix="home" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
