import Link from "next/link";
import { CheckCircle2, FileText, Users, ArrowLeft } from "lucide-react";

import Seo, { breadcrumbSchema, faqSchema } from "../../components/Seo";
import PageHero from "../../components/PageHero";
import ServiceIcon from "../../components/icons";
import FaqSection from "../../components/FaqSection";
import { SITE, SERVICES, FAQS, getService } from "../../data/site";

export function getStaticPaths() {
  return { paths: SERVICES.map((s) => ({ params: { slug: s.slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default function ServicePage({ slug }) {
  const service = getService(slug);
  const path = `/services/${slug}`;
  const others = SERVICES.filter((s) => s.slug !== slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    areaServed: { "@type": "City", name: "Ghaziabad" },
    provider: { "@id": `${SITE.url}/#business` },
  };

  return (
    <div className="services-page service-detail">
      <Seo
        title={`${service.title} in Ghaziabad | VK Tax Consultant`}
        description={`${service.short} Book a free consultation with VK Tax Consultant, Ghaziabad.`}
        path={path}
        jsonLd={[
          serviceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <PageHero eyebrow={<><ServiceIcon name={service.icon} size={16} /> {service.title}</>} title={`${service.title} in Ghaziabad`}>
        {service.description}
      </PageHero>

      <section className="container detail-grid">
        <div className="detail-main">
          <nav aria-label="Breadcrumb" className="breadcrumb">
            <Link href="/services"><ArrowLeft size={14} aria-hidden="true" /> All services</Link>
          </nav>

          <div className="detail-block reveal">
            <h2>What&apos;s included</h2>
            <ul className="service-features">
              {service.features.map((f) => (
                <li key={f}><CheckCircle2 size={16} aria-hidden="true" /> {f}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block reveal">
            <h2><Users size={20} aria-hidden="true" /> Who it&apos;s for</h2>
            <ul className="service-features">
              {service.whoFor.map((w) => (
                <li key={w}><CheckCircle2 size={16} aria-hidden="true" /> {w}</li>
              ))}
            </ul>
          </div>

          <div className="detail-block reveal">
            <h2><FileText size={20} aria-hidden="true" /> Documents typically required</h2>
            <ul className="service-features">
              {service.documents.map((d) => (
                <li key={d}><CheckCircle2 size={16} aria-hidden="true" /> {d}</li>
              ))}
            </ul>
            <p className="detail-note">Exact requirements depend on your case — we will confirm during the consultation.</p>
          </div>
        </div>

        <aside className="detail-aside">
          <div className="aside-card">
            <h2>Get started with {service.title}</h2>
            <p>Free consultation and a fixed quote before any work begins.</p>
            <Link href={`/contact?service=${service.slug}#consultation`} className="primary-button">
              Book a Consultation
            </Link>
            <a href={`tel:${SITE.phones[0].tel}`} className="secondary-button">
              Call {SITE.phones[0].display}
            </a>
          </div>
          <div className="aside-card">
            <h2>Other services</h2>
            <ul className="aside-links">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/services/${o.slug}`}>{o.title}</Link></li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <FaqSection faqs={FAQS} />
    </div>
  );
}
