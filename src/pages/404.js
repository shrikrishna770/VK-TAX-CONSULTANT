import Link from "next/link";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";

export default function Custom404() {
  return (
    <div className="error-page">
      <Seo title="Page Not Found | VK Tax Consultant" description="The page you are looking for could not be found." path="/404" noindex />
      <div className="container error-container">
        <div className="error-content hero-in">
          <div className="error-icon">
            <AlertCircle size={64} aria-hidden="true" />
          </div>
          <p className="error-code" aria-hidden="true">404</p>
          <h1 className="error-message">Page Not Found</h1>
          <p className="error-description">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="error-actions">
            <Link href="/" className="primary-button">
              <ArrowLeft size={18} aria-hidden="true" /> Back to Home
            </Link>
            <Link href="/contact" className="secondary-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
