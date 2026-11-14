import Link from "next/link";
import { Check } from "lucide-react";
import { PRICING } from "../data/site";

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Plans</span>
          <h2 id="pricing-title" className="section-heading">Simple, transparent engagement</h2>
          <p className="section-sub">Every quote is fixed and shared upfront — no surprises.</p>
        </div>
        <div className="pricing-grid">
          {PRICING.map((plan) => (
            <article key={plan.name} className={`pricing-card reveal ${plan.highlighted ? "highlighted" : ""}`}>
              {plan.highlighted && <span className="pricing-tag">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-desc">{plan.description}</p>
              <p className="pricing-price">
                {plan.price ? (
                  <>
                    <span className="from">Starting at</span> {plan.price} <span className="unit">{plan.unit}</span>
                  </>
                ) : (
                  <span className="quote">Custom quote</span>
                )}
              </p>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} aria-hidden="true" /> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact#consultation" className={plan.highlighted ? "primary-button" : "secondary-button"}>
                Get a quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
