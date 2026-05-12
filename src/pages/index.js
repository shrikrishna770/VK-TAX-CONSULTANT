import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  FileText,
  TrendingUp,
  ShieldCheck,
  Users,
  Computer,
  ArrowRight,
  Globe,
  X
} from "lucide-react";

import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

export default function Home() {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      service: e.target.service.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="home-wrapper">
      <Head>
        <title>VK TAX CONSULTANT | Mastering Financial Governance in Ghaziabad</title>
        <meta name="description" content="Expert GST, Income Tax (ITR), TDS, and Payroll services in Ghaziabad. VK Tax Consultant provides professional accounting and financial governance for modern enterprises." />
        <meta name="keywords" content="GST Services Ghaziabad, Income Tax Filing, ITR, TDS Compliance, Payroll Services, Accounting Services Ghaziabad, VK Tax Consultant" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vktaxconsultant.com/" />
        <meta property="og:title" content="VK TAX CONSULTANT | Mastery in Every Ledger" />
        <meta property="og:description" content="Elevating financial governance with expert tax and accounting solutions in Ghaziabad." />
        <meta property="og:image" content="https://vktaxconsultant.com/hero.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://vktaxconsultant.com/" />
        <meta property="twitter:title" content="VK TAX CONSULTANT | Mastering Financial Governance" />
        <meta property="twitter:description" content="Expert GST, Tax, and Payroll services tailored for modern enterprises." />
        <meta property="twitter:image" content="https://vktaxconsultant.com/hero.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "VK TAX CONSULTANT",
              "image": "https://vktaxconsultant.com/hero.png",
              "@id": "https://vktaxconsultant.com",
              "url": "https://vktaxconsultant.com",
              "telephone": "+919873100068",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Khora Colony",
                "addressLocality": "Ghaziabad",
                "addressRegion": "UP",
                "postalCode": "201001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6186,
                "longitude": 77.3484
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/vktaxconsultant",
                "https://www.linkedin.com/company/vktaxconsultant"
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <div className="hero-badge">
              <span className="dot-pulse">
                <span className="ping"></span>
                <span className="dot"></span>
              </span>
              Established 2024 • Excellence in Compliance
            </div>
            <h1 className="hero-title">
              Mastery in <br />
              <span className="serif-italic">Every</span> Ledger.
            </h1>
            <p className="hero-subtitle">
              Elevating financial governance for India's ambitious enterprises. We blend deep accounting expertise with digital precision to secure your growth.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">
                Consult an Expert
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="outline-btn">
                Our Process
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="image-frame">
              <img src="/hero.png" alt="Digital Finance" />
              <div className="overlay" />
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-card"
            >
              <div className="card-content">
                <div className="icon-circle">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="stat">100%</div>
                  <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Accuracy Guaranteed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="header-row">
            <div className="header-text">
              <h2 className="section-title">
                Financial Services <br />
                <span className="dim">Built for Scale.</span>
              </h2>
              <p className="section-desc">
                Tailored compliance solutions that allow you to focus on innovation while we handle the complexities of the Indian tax landscape.
              </p>
            </div>
            <div className="controls">
              <button className="control-btn">
                <X className="w-5 h-5 rotate-45" />
              </button>
              <button className="control-btn">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="services-grid">
            <div className="featured">
              <ServiceCard
                icon={FileText}
                title="GST Services"
                description="Comprehensive GST management including registrations, monthly returns, GSTR-9 annual filing, and audit reconciliation."
                delay={0.1}
              />
            </div>
            <ServiceCard
              icon={TrendingUp}
              title="Income Tax (ITR)"
              description="Expert Income Tax planning, filing (ITR), and advisory for individuals, businesses, and corporate entities."
              delay={0.2}
            />
            <ServiceCard
              icon={ShieldCheck}
              title="TDS Compliance"
              description="End-to-end TDS management from computation and deposit to quarterly return submissions and certificates."
              delay={0.3}
            />
            <ServiceCard
              icon={Users}
              title="Payroll Services"
              description="Streamlined payroll processing, PF & ESIC compliance, and statutory HR administration for your workforce."
              delay={0.4}
            />
            <ServiceCard
              icon={Computer}
              title="Accounting Services"
              description="Precision bookkeeping and financial reporting using modern cloud-based accounting ecosystems."
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section" id="contact">
        <div className="container">
          <div className="form-grid">
            <div className="form-text">
              <h2 className="cta-title">
                Ready to Audit Your <br />
                <span className="accent">Financial Future?</span>
              </h2>
              <p className="cta-desc">
                Join the ranks of compliant, data-driven businesses. Our first consultation is always focused on identifying your immediate risk areas.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-label">Quick Contact</div>
                  <div className="contact-value">
                    <a href="tel:+919873100068">+91 9873100068</a> <br />
                    <a href="tel:+919873108188">+91 9873108188</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">Email Inquiries</div>
                  <div className="contact-value">
                    <a href="mailto:vktaxconsultants2024@gmail.com">
                      vktaxconsultants2024@<br />gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="privacy-badge">
                <div className="icon-box">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="badge-title">Data Privacy Promise</div>
                  <div className="badge-text">AES-256 encryption & strict non-disclosure protocols.</div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3 className="card-title">Request a Callback</h3>
              <p className="card-subtitle">Expect a response within 2 business hours.</p>

              <form className="main-form" onSubmit={handleSubmit}>
                <div className="field-group">
                  <label htmlFor="fullName" className="field-label">Full Name</label>
                  <input name="fullName" id="fullName" type="text" placeholder="e.g. Rahul Sharma" className="field-input" required />
                </div>
                <div className="field-group">
                  <label htmlFor="email" className="field-label">Business Email</label>
                  <input name="email" id="email" type="email" placeholder="rahul@enterprise.com" className="field-input" required />
                </div>
                <div className="field-group">
                  <label htmlFor="service" className="field-label">Required Expertise</label>
                  <select name="service" id="service" className="field-select">
                    <option>GST Services</option>
                    <option>Income Tax (ITR)</option>
                    <option>TDS Compliance</option>
                    <option>Payroll Services</option>
                    <option>Accounting Services</option>
                  </select>
                </div>

                <button type="submit" className="submit-btn" aria-label="Confirm Inquiry" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Confirm Inquiry"}
                </button>

                {status === "success" && (
                  <p className="success-msg">Thank you! Your inquiry has been saved.</p>
                )}
                {status === "error" && (
                  <p className="error-msg">Something went wrong. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
