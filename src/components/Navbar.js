import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "../data/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => {
    const close = () => setOpen(false);
    const onKey = (e) => e.key === "Escape" && close();
    router.events.on("routeChangeStart", close);
    window.addEventListener("keydown", onKey);
    return () => {
      router.events.off("routeChangeStart", close);
      window.removeEventListener("keydown", onKey);
    };
  }, [router.events]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? router.pathname === "/" : router.pathname.startsWith(href));

  return (
    <header className={`navbar ${scrolled || open ? "scrolled" : ""}`}>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="container nav-container" aria-label="Main">
        <Link href="/" className="logo-wrapper" aria-label={`${SITE.name} — home`}>
          <Image src="/brand-mark.png" alt="" width={44} height={44} priority className="logo-mark" />
          <Image src="/brand-wordmark.png" alt={SITE.name} width={162} height={40} priority className="logo-wordmark" />
        </Link>

        <div id="primary-nav" className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link ${isActive(l.href) ? "active" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <a href={`tel:${SITE.phones[0].tel}`} className="nav-phone">
            <Phone size={16} aria-hidden="true" />
            {SITE.phones[0].display}
          </a>
          <Link href="/contact#consultation" className="nav-cta">
            Free Consultation
          </Link>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
    </header>
  );
}
