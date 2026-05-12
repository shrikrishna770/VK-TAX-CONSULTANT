import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Custom404() {
  return (
    <div className="error-page">
      <Head>
        <title>Page Not Found | VK TAX CONSULTANT</title>
      </Head>
      
      <Navbar />
      
      <main className="container error-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="error-content"
        >
          <div className="error-icon">
            <AlertCircle size={64} />
          </div>
          <h1 className="error-code">404</h1>
          <h2 className="error-message">Ledger Entry Not Found</h2>
          <p className="error-description">
            The financial path you're looking for doesn't exist or has been moved to a new portfolio.
          </p>
          <Link href="/" className="primary-button">
            <ArrowLeft size={18} style={{ marginRight: '8px' }} />
            Back to Safety
          </Link>
        </motion.div>
      </main>

      <Footer />

      <style jsx>{`
        .error-page {
          background: #020617;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .error-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 100px 20px;
        }
        .error-content {
          max-width: 500px;
        }
        .error-icon {
          color: #2dd4bf;
          margin-bottom: 24px;
          display: flex;
          justify-content: center;
        }
        .error-code {
          font-size: 6rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.05);
          line-height: 1;
          margin-bottom: -20px;
        }
        .error-message {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .error-description {
          color: #94a3b8;
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
}
