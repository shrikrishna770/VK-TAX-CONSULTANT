import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Globe, 
  Users, 
  Rss 
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    const formData = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      service: e.target.interest.value,
      message: e.target.message.value,
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
    <div className="contact-page">
      <Head>
        <title>Contact VK TAX CONSULTANT | Get Expert Tax Advice in Ghaziabad</title>
        <meta name="description" content="Reach out to VK Tax Consultant for GST, ITR, and Payroll services in Ghaziabad. Schedule your consultation for professional financial guidance." />
        <meta name="keywords" content="Contact VK Tax Consultant, Tax Consultation Ghaziabad, GST Office Ghaziabad, Hire Accountant Ghaziabad" />
        
        <meta property="og:title" content="Contact Us | VK TAX CONSULTANT" />
        <meta property="og:description" content="Experience high-caliber financial guidance with a personal touch in Ghaziabad." />
        <meta property="og:image" content="https://vktaxconsultant.com/contact-map.png" />
      </Head>

      <Navbar />

      <main className="container">
        <section className="contact-hero">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Let's Start a <br />
              <span className="accent">Conversation.</span>
            </h1>
            <p className="contact-subtitle">
              Experience high-caliber financial guidance with a personal touch. We treat your fiscal health as our own priority, providing clarity in every complex transaction.
            </p>
          </motion.div>
        </section>

        <section className="contact-grid">
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form-card"
          >
            <div className="form-header">
              <div className="line"></div>
              <h2>Send us a Message</h2>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: "24px" }}>
                <label htmlFor="interest">Consultation Interest</label>
                <select id="interest" name="interest" required>
                  <option value="">Select a service</option>
                  <option value="GST Services">GST Services</option>
                  <option value="Income Tax (ITR)">Income Tax (ITR)</option>
                  <option value="TDS Compliance">TDS Compliance</option>
                  <option value="Payroll Services">Payroll Services</option>
                  <option value="Accounting Services">Accounting Services</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows="6" 
                  placeholder="Briefly describe your requirements..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={status === "sending"}>
                {status === "sending" ? "Sending..." : "Send Message"} <Send size={18} />
              </button>

              {status === "success" && (
                <p className="success-msg">Thank you! Your message has been saved.</p>
              )}
              {status === "error" && (
                <p className="error-msg">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Right Column: Info & Map */}
          <div className="contact-sidebar">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="info-card"
            >
              <h2>Direct Communication</h2>
              <div className="contact-methods">
                <div className="method-item">
                  <div className="method-icon">
                    <Phone size={20} />
                  </div>
                  <div className="method-details">
                    <div className="label">Inquiries</div>
                    <div className="value">
                      <a href="tel:+919873100068">+91 9873100068</a>, <br />
                      <a href="tel:+919873108188">+91 9873108188</a>
                    </div>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <Mail size={20} />
                  </div>
                  <div className="method-details">
                    <div className="label">Support</div>
                    <div className="value">
                      <a href="mailto:vktaxconsultants2024@gmail.com">vktaxconsultants2024@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="method-item">
                  <div className="method-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="method-details">
                    <div className="label">Corporate Office</div>
                    <div className="value">Khora Colony, Ghaziabad, Uttar Pradesh</div>
                  </div>
                </div>
              </div>

              <div className="social-presence">
                <span>Social Presence</span>
                <div className="social-icons">
                  <a href="#" className="social-icon"><Globe size={20} /></a>
                  <a href="#" className="social-icon"><Users size={20} /></a>
                  <a href="#" className="social-icon"><Rss size={20} /></a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="map-card"
            >
              <img src="/contact-map.png" alt="Headquarters Map" />
              <div className="map-overlay">
                <div className="map-location">
                  <div className="location-dot"></div>
                  <span className="location-name">Headquarters</span>
                </div>
                <button className="directions-btn">Directions</button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
