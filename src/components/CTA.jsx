import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiCheck, FiClock, FiUsers } = FiIcons;

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 inline-block mb-6">
            <div className="flex items-center space-x-2 text-white">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span className="font-semibold">Limited Time Research Project</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
            <div className="text-3xl font-bold text-white mb-2">
              🔥 Only ₹999 per session (50% OFF)
            </div>
            <div className="text-lg text-purple-100 mb-4">
              Next 10 clients only - Research project pricing
            </div>
            <div className="flex items-center justify-center space-x-6 text-purple-100">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="w-4 h-4" />
                <span>Limited slots</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiClock} className="w-4 h-4" />
                <span>Book today</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.a
              href="tel:+919858072491"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-200 text-lg"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5" />
              <span>Call Kapil: +91-9858072491</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-purple-100"
          >
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiCheck} className="w-6 h-6 mb-2" />
              <span>Certified Family Constellation Facilitator</span>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiCheck} className="w-6 h-6 mb-2" />
              <span>Professional Hypnotist</span>
            </div>
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiCheck} className="w-6 h-6 mb-2" />
              <span>Proven Track Record</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-purple-100 text-lg font-medium">
              Kapil Chawla - Transforming Lives Through Healing
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;