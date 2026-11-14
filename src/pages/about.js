import Image from "next/image";
import Link from "next/link";
import { Shield, Clock, TrendingUp, Lock, Search, Layers, CheckCircle } from "lucide-react";

import Seo, { breadcrumbSchema } from "../components/Seo";
import { SITE, SERVICES } from "../data/site";
import aboutHero from "../../public/about-hero.webp";
import aboutMeeting from "../../public/about-meeting.webp";

const PROCESS = [
  {
    step: "01 / DISCOVERY",
    title: "Review",
    desc: "We review your current tax position, past filings and records to spot gaps and risks.",
    icon: Search,
  },
  {
    step: "02 / PLANNING",
    title: "Plan",
    desc: "A clear compliance calendar and document list tailored to your income or business.",
    icon: Layers,
  },
  {
    step: "03 / EXECUTION",
    title: "File",
    desc: "Accurate, on-time filings with acknowledgements shared and follow-up on any notices.",
    icon: CheckCircle,
  },
];

const VALUES = [
  { icon: Shield, title: "Compliance First", desc: "We keep track of regulatory changes so your filings stay correct." },
  { icon: Clock, title: "On Time", desc: "Due-date tracking and reminders so you avoid late fees and penalties." },
  { icon: TrendingUp, title: "Practical Advice", desc: "Tax planning that fits your business, explained in plain language." },
  { icon: Lock, title: "Confidential", desc: "Your financial information is shared only with people who need it." },
];

export default function About() {
  return (
    <div className="about-page">
      <Seo
        title="About VK Tax Consultant | Tax & Accounting Experts in Ghaziabad"
        description="VK Tax Consultant is a Ghaziabad-based tax and accounting practice offering GST, income tax, TDS, payroll and bookkeeping services since 2024."
        path="/about"
        image="/og-image.jpg"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])}
      />

      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content hero-in">
            <span className="badge">About Us</span>
            <h1 className="about-title">
              Building Financial <br />
              <span className="accent serif-italic">Confidence</span>.
            </h1>
            <p className="hero-desc">
              {SITE.name} is a Ghaziabad-based practice helping individuals, professionals and businesses stay
              compliant with GST, income tax, TDS and payroll requirements — accurately and on time.
            </p>
            <div className="about-hero-footer">
              <div className="founder-sig">
                <div className="sig-line" aria-hidden="true"></div>
                <span>EST. {SITE.foundingYear} · GHAZIABAD</span>
              </div>
            </div>
          </div>

          <div className="about-hero-visual hero-in hero-in-delay">
            <div className="hero-image-wrapper">
              <Image src={aboutHero} alt="Consultant working on tax planning" priority sizes="(min-width: 1024px) 520px, 100vw" placeholder="blur" />
              <div className="image-overlay"></div>
            </div>
            <div className="floating-badge float-anim">
              <div className="badge-inner">
                <span className="year">EST. {SITE.foundingYear}</span>
                <span className="label">GHAZIABAD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="strategic-section">
        <div className="container">
          <div className="strategic-grid">
            <div className="strategic-content reveal">
              <span className="badge">Our Purpose</span>
              <h2>Compliance Without the Stress.</h2>
              <p>
                Tax rules change often and missed deadlines are costly. Our job is to take that burden off you —
                keeping your books in order, filing on time and explaining what each step means for your business.
              </p>
              <div className="stats-row">
                <div className="stat-item">
                  <div className="stat-value">{SERVICES.length}</div>
                  <div className="stat-label">Core Services</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">6 days</div>
                  <div className="stat-label">Open Every Week</div>
                </div>
              </div>
            </div>

            <div className="strategic-image reveal">
              <Image src={aboutMeeting} alt="Team discussing a client's compliance plan" sizes="(min-width: 1024px) 600px, 100vw" placeholder="blur" />
            </div>
          </div>
        </div>
      </section>

      <section className="engineering-section" id="process">
        <div className="container">
          <h2>How We Work.</h2>
          <div className="process-grid">
            {PROCESS.map((item, i) => (
              <div key={item.step} className="process-card reveal" style={{ "--delay": `${i * 0.15}s` }}>
                <span className="step-num">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Why Choose Us</span>
            <h2>What You Can Expect From Us.</h2>
            <p className="hero-desc">Clear communication, careful work and deadlines that are never an afterthought.</p>
          </div>

          <div className="trust-grid">
            {VALUES.map((item, i) => (
              <div key={item.title} className="trust-item reveal" style={{ "--delay": `${i * 0.08}s` }}>
                <div className="icon-box">
                  <item.icon size={32} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <figure className="quote-content reveal">
            <blockquote>
              &ldquo;Precision is the foundation of growth. We don&apos;t just calculate numbers; we build the
              bedrock upon which businesses scale.&rdquo;
            </blockquote>
            <figcaption className="quote-meta">
              <span className="quote-author">{SITE.name.toUpperCase()}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="cta-box reveal">
            <h2>Let&apos;s Talk About Your Compliance.</h2>
            <p>Book a free consultation to review your current position and find out how we can help.</p>
            <div className="cta-actions">
              <Link href="/contact#consultation" className="primary-button">
                Schedule Consultation
              </Link>
              <Link href="/services" className="secondary-button">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
