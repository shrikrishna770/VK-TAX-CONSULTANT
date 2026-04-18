import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GSDPage() {
  return (
    <div className="gsd-wrapper">
      <Head>
        <title>GSD (Get Sh*t Done) | Antigravity Plugin</title>
        <meta name="description" content="Guide for the GSD methodology adapted for Antigravity coding agent." />
      </Head>

      <Navbar />

      <main className="gsd-main">
        <div className="container">
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gsd-hero"
          >
            <div className="purple-bar" />
            <h1 className="gsd-title">01 — GSD (Get Sh*t Done)</h1>
          </motion.section>

          <section className="gsd-section">
            <h2 className="gsd-heading">What It Actually Does</h2>
            <p className="gsd-text">
              GSD takes your sprawling, ambitious project and slices it into small, clearly-scoped tasks — then feeds them to Antigravity one at a time. That single change fixes the two most common AI failure modes: <strong>hallucination</strong> (the model inventing details when it's overwhelmed) and <strong>context overload</strong> (earlier instructions quietly disappearing as the conversation grows).
            </p>
          </section>

          <section className="gsd-section">
            <h2 className="gsd-heading">Why It Matters</h2>
            <div className="gsd-info-box">
              <ul className="gsd-list">
                <li>Breaks massive projects into isolated, manageable steps</li>
                <li>Dramatically improves output accuracy — less hallucination</li>
                <li>Makes long-running projects predictable and stable</li>
                <li>Keeps your workflow clean and auditable</li>
              </ul>
            </div>
          </section>

          <section className="gsd-section">
            <h2 className="gsd-heading">Installation</h2>
            <div className="gsd-repo-link">
              Repository: <a href="https://github.com/toonight/get-shit-done-for-antigravity" target="_blank" rel="noopener noreferrer">github.com/toonight/get-shit-done-for-antigravity</a>
            </div>
            <div className="gsd-info-box accent-box">
              <ol className="gsd-list numbered">
                <li>Clone the repository from GitHub</li>
                <li>Follow the setup instructions in the README</li>
                <li>Register the plugin inside Antigravity as described in the docs</li>
              </ol>
            </div>
          </section>

          <section className="gsd-section">
            <h2 className="gsd-heading">How to Use It</h2>
            <p className="gsd-text dim">
              Start by running <span className="highlight">/new-project</span> to initialize your specification. Follow the prompts to build your SPEC.md and ROADMAP.md.
            </p>
          </section>
        </div>
      </main>

      <footer className="gsd-footer">
        <div className="container footer-content">
          <span>Guide by @aaditya.web</span>
          <span className="dot">•</span>
          <span>Page 1</span>
        </div>
      </footer>
    </div>
  );
}
