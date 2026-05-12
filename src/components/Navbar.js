import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // Prevents mismatch by not rendering on server/first tick

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <div className="logo-wrapper">
          <div className="logo-box">VK</div>
          <span className="logo-text">VK <span className="accent">TAX</span> CONSULTANT</span>
        </div>

        <div className="nav-links">
          <a href="/" className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>Home</a>
          <a href="/services" className={`nav-link ${router.pathname === "/services" ? "active" : ""}`}>Services</a>
          <a href="/about" className={`nav-link ${router.pathname === "/about" ? "active" : ""}`}>About</a>
          <a href="/contact" className={`nav-link ${router.pathname === "/contact" ? "active" : ""}`}>Contact</a>
          <button className="nav-cta">
            Get Started
          </button>
        </div>

        <button className="mobile-toggle">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
