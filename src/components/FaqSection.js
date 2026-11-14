import { ChevronDown } from "lucide-react";

/** Accessible FAQ list using native <details>. Pair with `faqSchema()` in the page's <Seo>. */
export default function FaqSection({ faqs, title = "Frequently Asked Questions", id = "faq" }) {
  return (
    <section className="faq-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container faq-container">
        <div className="section-head reveal">
          <span className="eyebrow">FAQs</span>
          <h2 id={`${id}-title`} className="section-heading">{title}</h2>
        </div>
        <div className="faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="faq-item reveal">
              <summary>
                <span>{f.q}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
