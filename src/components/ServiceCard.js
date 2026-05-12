import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="service-card"
  >
    <div className="service-icon-box">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <a href="/services" className="service-btn">
      Learn Service Details <ArrowRight className="w-3 h-3" />
    </a>
  </motion.div>
);

export default ServiceCard;
