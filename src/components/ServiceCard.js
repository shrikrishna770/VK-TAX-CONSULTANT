import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "./icons";

export default function ServiceCard({ service, delay = 0 }) {
  return (
    <article className="service-card reveal" style={{ "--delay": `${delay}s` }}>
      <div className="service-icon-box">
        <ServiceIcon name={service.icon} size={24} />
      </div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.short}</p>
      <Link href={`/services/${service.slug}`} className="service-btn">
        Learn more<span className="sr-only"> about {service.title}</span> <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </article>
  );
}
