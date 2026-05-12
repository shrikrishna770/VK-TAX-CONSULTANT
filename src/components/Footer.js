import React from "react";
import { Landmark, ShieldCheck, Globe } from "lucide-react";

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <h3 className="footer-title">VK Tax Consultant</h3>
          <p className="footer-desc">
            Precision in every ledger. Our firm provides specialized tax strategies for growth-focused entities with uncompromising professional integrity.
          </p>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="footer-heading">RESOURCES</h4>
          <ul className="footer-list">
            <li><a href="#">Tax Resources</a></li>
            <li><a href="#">Support & FAQ</a></li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div>
          <h4 className="footer-heading">COMPLIANCE</h4>
          <ul className="footer-list">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Engagement</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="footer-heading">CONTACT</h4>
          <ul className="footer-list contact-list">
            <li><a href="mailto:vktaxconsultants2024@gmail.com" className="accent-link">vktaxconsultants2024@gmail.com</a></li>
            <li className="contact-value">
              <a href="tel:+919873100068" className="footer-tel">+91 9873100068</a>, 
              <a href="tel:+919873108188" className="footer-tel">+91 9873108188</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>© 2024 VK Tax Consultant. Expert guidance for modern enterprise.</span>
        </div>
        <div className="footer-bottom-icons">
          <Landmark size={18} />
          <ShieldCheck size={18} />
          <Globe size={18} />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
