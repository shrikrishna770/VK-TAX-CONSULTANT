import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import useReveal from "../lib/useReveal";
import { GA_ID, trackPageview } from "../lib/analytics";

import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useReveal([router.asPath]);

  useEffect(() => {
    const onRoute = (url) => trackPageview(url);
    router.events.on("routeChangeComplete", onRoute);
    return () => router.events.off("routeChangeComplete", onRoute);
  }, [router.events]);

  return (
    <div className={`${inter.variable} ${playfair.variable} site`}>
      {GA_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
      <Navbar />
      <main id="main">
        <Component {...pageProps} />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
