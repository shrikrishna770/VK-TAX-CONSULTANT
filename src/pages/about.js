import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  TrendingUp, 
  Lock, 
  Search, 
  Layers, 
  CheckCircle,
  ArrowRight
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="about-page">
      <Head>
        <title>About VK TAX CONSULTANT | Expert Financial Architects in Ghaziabad</title>
        <meta name="description" content="Learn about VK Tax Consultant's mission to architect financial fortitude for enterprises through precision tax and accounting strategies." />
        <meta name="keywords" content="About VK Tax Consultant, Tax Experts Ghaziabad, Financial Governance, Business Compliance India" />
        
        <meta property="og:title" content="About Us | VK TAX CONSULTANT" />
        <meta property="og:description" content="Architecting financial fortitude for visionary enterprises." />
        <meta property="og:image" content="https://vktaxconsultant.com/about-hero.png" />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container about-hero-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="about-hero-content"
            >
              <span className="badge">Visionary Excellence</span>
              <h1 className="about-title">
                Architecting <br />
                Financial <span className="accent serif-italic">Fortitude</span>.
              </h1>
              <p className="hero-desc">
                Beyond traditional consulting, we engineer strategic financial frameworks that turn tax compliance into a competitive advantage for visionary enterprises.
              </p>
              <div className="about-hero-footer">
                <div className="founder-sig">
                  <div className="sig-line"></div>
                  <span>VK TAX CONSULTANT</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="about-hero-visual"
            >
              <div className="hero-image-wrapper">
                <img src="/about-hero.png" alt="Strategic Architecture" />
                <div className="image-overlay"></div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="floating-badge"
              >
                <div className="badge-inner">
                  <span className="year">EST. 2024</span>
                  <span className="label">GHAZIABAD</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Section */}
        <section className="strategic-section">
          <div className="container">
            <div className="strategic-grid">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="strategic-content"
              >
                <span className="badge">Our Purpose</span>
                <h2>Securing Legacy Through Strategic Precision.</h2>
                <p>
                  Our mission is to help the world's leading brands and start-ups navigate the complexities of the global tax landscape. By blending deep human expertise with digital innovation, we ensure your financial architecture is not just compliant, but optimized for growth.
                </p>
                <div className="stats-row">
                  <div className="stat-item">
                    <div className="stat-value">99.9%</div>
                    <div className="stat-label">Accuracy Rate</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">$500M+</div>
                    <div className="stat-label">Assets Managed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="strategic-image"
              >
                <img src="/about-meeting.png" alt="Strategic Planning" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Success */}
        <section className="engineering-section">
          <div className="container">
            <h2>How We Engineer Success.</h2>
            <div className="process-grid">
              {[
                {
                  step: "01 / DISCOVERY",
                  title: "Deep Audit",
                  desc: "We perform a forensic analysis of your current tax structure to identify inefficiencies and risk areas.",
                  icon: Search
                },
                {
                  step: "02 / ARCHITECTURE",
                  title: "Strategic Mapping",
                  desc: "Designing a customized roadmap that optimizes your tax position while ensuring 100% compliance.",
                  icon: Layers
                },
                {
                  step: "03 / EXECUTION",
                  title: "Precision Filing",
                  desc: "Rigorous execution of tax filings and statutory requirements with micro-level attention to detail.",
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="process-card"
                >
                  <span className="step-num">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Section */}
        <section className="trust-section">
          <div className="container">
            <div className="section-header">
              <span className="badge">The VK Advantage</span>
              <h2>Why the World's Leaders Trust VK.</h2>
              <p className="hero-desc">Building relationships on three pillars: radical transparency, proactive intelligence, and unflinching integrity.</p>
            </div>

            <div className="trust-grid">
              {[
                { icon: Shield, title: "Risk Insulated", desc: "Advanced protocols that ensure your business stays ahead of regulatory changes." },
                { icon: Clock, title: "Zero-Delay", desc: "A commitment to absolute punctuality in every filing and consultation." },
                { icon: TrendingUp, title: "Growth Focused", desc: "Tax strategies that aren't just about saving—they're about reinvesting in your future." },
                { icon: Lock, title: "Digital Fortress", desc: "Top-tier data security protocols to protect your most sensitive financial information." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="trust-item"
                >
                  <div className="icon-box">
                    <item.icon size={32} />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="quote-content"
            >
              <h3>"Precision is the foundation of growth. We don't just calculate numbers; we build the bedrock upon which enterprises scale."</h3>
              <div className="quote-meta">
                <span className="quote-author">VK TAX CONSULTANT</span>
                <span className="quote-title">Excellence in Financial Governance</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cta-box"
            >
              <h2>Secure Your Financial Future.</h2>
              <p>Connect with a senior consultant today for a comprehensive audit of your current position and potential growth paths.</p>
              <div className="cta-actions">
                <a href="/#contact" className="primary-button">Schedule Consultation</a>
                <a href="/services" className="secondary-button">Explore Services</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
