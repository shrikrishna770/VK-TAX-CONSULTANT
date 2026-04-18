// Global styles
import "../styles/globals.css";

// Page and Component styles (Standard CSS)
import "../styles/pages/index.css";
import "../styles/pages/services.css";
import "../styles/pages/about.css";
import "../styles/pages/contact.css";
import "../styles/pages/gsd.css";

import "../styles/components/Navbar.css";
import "../styles/components/ServiceCard.css";
import "../styles/components/Footer.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
