import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { 
  FileCheck, 
  Calculator, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Building2, 
  ScrollText, 
  Clock,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServiceItem = ({ icon: Icon, title, description, features, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="service-item-card"
  >
    <div className="icon-box">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <ul className="service-features">
      {features.map((feature, index) => (
        <li key={index}>
          <CheckCircle2 size={16} />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function Services() {
  const services = [
    {
      icon: FileCheck,
      title: "GST Services",
      description: "End-to-end management of your Goods and Services Tax requirements with absolute precision.",
      features: [
        "GST Registration & Amendments",
        "Monthly GSTR-1 & GSTR-3B filings",
        "Annual GSTR-9 Reconciliation",
        "GST Audit & Departmental Support"
      ],
      delay: 0.1
    },
    {
      icon: Calculator,
      title: "Income Tax (ITR)",
      description: "Advanced tax strategies and compliance designed to legally minimize liabilities and ensure timely filings.",
      features: [
        "ITR Filing for Individuals & Businesses",
        "Corporate Tax Management",
        "Capital Gains Optimization",
        "Advance Tax Computations"
      ],
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: "TDS Compliance",
      description: "Comprehensive withholding tax solutions and support for statutory financial compliance.",
      features: [
        "Quarterly TDS/TCS Returns",
        "TDS Payment & Computation",
        "Tax Audit Report (Form 3CD)",
        "TDS Certificates (Form 16/16A)"
      ],
      delay: 0.3
    },
    {
      icon: Users,
      title: "Payroll Services",
      description: "Streamlined administration of employee benefits and statutory labor law requirements.",
      features: [
        "PF & ESIC Registration & Filings",
        "Professional Tax (PT) Compliance",
        "Payroll Processing & Payslips",
        "Labour Law Advisory"
      ],
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "Accounting Services",
      description: "Virtual CFO and bookkeeping services that provide clear financial insights for your business.",
      features: [
        "Cloud-based Bookkeeping",
        "Financial Statement Preparation",
        "Management Reporting (MIS)",
        "Virtual CFO Advisory"
      ],
      delay: 0.5
    }
  ];

  return (
    <div className="services-page">
      <Head>
        <title>Professional GST, Tax & Accounting Services | VK TAX CONSULTANT</title>
        <meta name="description" content="Explore our expert GST, Income Tax (ITR), TDS, and Payroll services. Tailored financial solutions for enterprises in Ghaziabad and beyond." />
        <meta name="keywords" content="GST Services, ITR Filing, TDS Compliance, Payroll Management, Financial Outsourcing, VK Tax Consultant Services" />
        
        <meta property="og:title" content="Our Services | VK TAX CONSULTANT" />
        <meta property="og:description" content="Comprehensive financial and tax compliance services for modern enterprises." />
        <meta property="og:image" content="https://vktaxconsultant.com/services-hero.png" />
      </Head>

      <Navbar />

      <main>
        {/* Header Section */}
        <section className="services-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-badge">
                Comprehensive Expertise
              </div>
              <h1>
                Precision Solutions for <br />
                <span className="accent-text">Ambitious</span> Enterprises.
              </h1>
              <p>
                From foundational compliance to high-level strategic advisory, we provide the financial safeguards your business needs to scale with confidence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="detailed-services">
          <div className="container">
            <div className="services-grid-large">
              {services.map((service, index) => (
                <ServiceItem key={index} {...service} />
              ))}
            </div>

            {/* CTA Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cta-banner"
            >
              <h2>Ready to secure your financial future?</h2>
              <p>Schedule a confidential consultation with our tax architects today and find the path to absolute compliance.</p>
              <div className="btn-group">
                <a href="/#contact" className="primary-button">
                  Book a Consultation
                </a>
                <a href="/" className="secondary-button">
                  Download Brochure
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
