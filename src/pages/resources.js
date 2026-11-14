import Link from "next/link";
import { CalendarDays, CheckCircle2 } from "lucide-react";

import Seo, { breadcrumbSchema } from "../components/Seo";
import PageHero from "../components/PageHero";
import ServiceIcon from "../components/icons";
import { SERVICES, TAX_CALENDAR } from "../data/site";

export default function Resources() {
  return (
    <div className="services-page resources-page">
      <Seo
        title="Tax Due Date Calendar & Document Checklists | VK Tax Consultant"
        description="Key GST, TDS, PF/ESIC and income tax due dates, plus document checklists for GST registration, ITR filing, TDS, payroll and accounting."
        path="/resources"
        jsonLd={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }])}
      />

      <PageHero eyebrow="Resources" title="Tax Calendar & Checklists">
        Key compliance due dates and the documents you will need — all in one place.
      </PageHero>

      <section className="container resources-section" id="calendar">
        <h2 className="section-heading"><CalendarDays size={28} aria-hidden="true" /> Compliance Due Dates</h2>
        <div className="table-wrap reveal">
          <table className="calendar-table">
            <thead>
              <tr>
                <th scope="col">Due date</th>
                <th scope="col">Compliance</th>
              </tr>
            </thead>
            <tbody>
              {TAX_CALENDAR.map((row) => (
                <tr key={row.what}>
                  <td>{row.when}</td>
                  <td>{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="detail-note">
          Due dates are indicative and may be extended or changed by CBDT / CBIC notifications. Contact us to confirm
          the dates that apply to you.
        </p>
      </section>

      <section className="container resources-section" id="checklists">
        <h2 className="section-heading">Document Checklists</h2>
        <div className="checklist-grid">
          {SERVICES.map((s) => (
            <article key={s.slug} className="service-item-card reveal">
              <div className="icon-box">
                <ServiceIcon name={s.icon} size={28} />
              </div>
              <h3>{s.title}</h3>
              <ul className="service-features">
                {s.documents.map((d) => (
                  <li key={d}><CheckCircle2 size={16} aria-hidden="true" /> {d}</li>
                ))}
              </ul>
              <Link href={`/services/${s.slug}`} className="service-more">About this service →</Link>
            </article>
          ))}
        </div>
        <div className="print-row">
          <button type="button" className="secondary-button" onClick={() => window.print()}>
            Print / Save as PDF
          </button>
        </div>
      </section>
    </div>
  );
}
