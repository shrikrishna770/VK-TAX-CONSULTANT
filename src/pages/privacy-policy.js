import Link from "next/link";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { SITE } from "../data/site";

// TODO(client): have this reviewed by the client / a legal advisor before launch.
export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <Seo
        title="Privacy Policy | VK Tax Consultant"
        description="How VK Tax Consultant collects, uses and protects personal information submitted through this website."
        path="/privacy-policy"
      />
      <PageHero eyebrow="Legal" title="Privacy Policy">Last updated: November 2026</PageHero>

      <article className="container legal-body">
        <p>
          {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what personal
          data we collect through this website and how we use it, in line with the Digital Personal Data Protection
          Act, 2023.
        </p>

        <h2>Information we collect</h2>
        <ul>
          <li>Details you submit in our enquiry forms: name, mobile number, email address, the service you are interested in and any message.</li>
          <li>Basic usage data (pages visited, device and browser type) if website analytics are enabled.</li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry and provide the services you request.</li>
          <li>To send you information related to your enquiry or engagement.</li>
          <li>To understand how our website is used so we can improve it.</li>
        </ul>
        <p>We do not sell your personal data. We do not use it for unrelated marketing without your consent.</p>

        <h2>Sharing</h2>
        <p>
          Your data is shared only with service providers that help us operate (for example, email, form storage and
          analytics providers), and with government portals or authorities where required to deliver a service you
          have engaged us for or where required by law.
        </p>

        <h2>Retention</h2>
        <p>
          Enquiry data is kept only as long as needed to respond to you and for any engagement that follows, or as
          required by law.
        </p>

        <h2>Your rights</h2>
        <p>
          You may ask us to access, correct or delete your personal data, or withdraw your consent, by writing to{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          For any privacy questions, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{" "}
          <Link href="/contact">contact us</Link>.
        </p>
      </article>
    </div>
  );
}
