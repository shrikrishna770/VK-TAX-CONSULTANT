import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/site";

/** Renders nothing until genuine testimonials are added in src/data/site.js. */
export default function Testimonials() {
  if (!TESTIMONIALS.length) return null;
  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Client Stories</span>
          <h2 id="testimonials-title" className="section-heading">What our clients say</h2>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="testimonial-card reveal">
              <Quote size={28} aria-hidden="true" />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.role && <span>{t.role}</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
