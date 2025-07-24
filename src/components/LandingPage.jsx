import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;