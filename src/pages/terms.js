import Link from "next/link";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { SITE } from "../data/site";

// TODO(client): have this reviewed by the client / a legal advisor before launch.
export default function Terms() {
  return (
    <div className="legal-page">
      <Seo
        title="Terms of Engagement | VK Tax Consultant"
        description="Terms governing the use of the VK Tax Consultant website and engagement for services."
        path="/terms"
      />
      <PageHero eyebrow="Legal" title="Terms of Engagement">Last updated: November 2026</PageHero>

      <article className="container legal-body">
        <h2>Use of this website</h2>
        <p>
          The information on this website is for general guidance only and does not constitute professional advice.
          Tax laws, rates and due dates change frequently; please consult us before acting on any information here.
        </p>

        <h2>Engagement for services</h2>
        <p>
          Services begin only after the scope, fees and timelines are agreed with you in writing (including by email
          or WhatsApp). Fees quoted are exclusive of government fees, penalties and applicable taxes unless stated
          otherwise.
        </p>

        <h2>Your responsibilities</h2>
        <p>
          You are responsible for providing complete and accurate information and documents on time. Filings are
          prepared based on the information you provide.
        </p>

        <h2>Confidentiality</h2>
        <p>
          We keep your information confidential and use it only to provide the agreed services, except where
          disclosure is required by law. See our <Link href="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          We are not liable for losses arising from incomplete or incorrect information provided to us, delays by
          government portals, or changes in law after advice is given.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </article>
    </div>
  );
}
