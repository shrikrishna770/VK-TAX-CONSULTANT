import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

import Seo, { breadcrumbSchema } from "../../components/Seo";
import PageHero from "../../components/PageHero";
import ServiceIcon from "../../components/icons";
import Pricing from "../../components/Pricing";
import { SERVICES } from "../../data/site";

export default function Services() {
  return (
    <div className="services-page">
      <Seo
        title="GST, Income Tax, TDS, Payroll & Accounting Services | VK Tax Consultant"
        description="Explore GST registration & returns, ITR filing, TDS compliance, payroll and accounting services from VK Tax Consultant in Ghaziabad."
        path="/services"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Complete Compliance for <br />
            <span className="accent-text">Growing</span> Businesses.
          </>
        }
      >
        From registrations and regular filings to accounting and payroll — one team for all your tax and compliance
        needs.
      </PageHero>

      <section className="detailed-services">
        <div className="container">
          <div className="services-grid-large">
            {SERVICES.map((s, i) => (
              <article key={s.slug} className="service-item-card reveal" style={{ "--delay": `${i * 0.08}s` }}>
                <div className="icon-box">
                  <ServiceIcon name={s.icon} size={32} />
                </div>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <ul className="service-features">
                  {s.features.slice(0, 4).map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={16} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`} className="service-more">
                  Details &amp; documents <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Pricing />

      <section className="container">
        <div className="cta-banner reveal">
          <h2>Not sure which service you need?</h2>
          <p>Book a free consultation and we will recommend the right plan for your situation.</p>
          <div className="btn-group">
            <Link href="/contact#consultation" className="primary-button">
              Book a Consultation
            </Link>
            <Link href="/resources#checklists" className="secondary-button">
              Document Checklists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
