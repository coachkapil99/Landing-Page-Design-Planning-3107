import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

const Footer = () => {
  const contactInfo = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91-9858072491',
      href: 'tel:+919858072491'
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'kapilchawlaml@gmail.com',
      href: 'mailto:kapilchawlaml@gmail.com'
    },
    {
      icon: FiClock,
      label: 'Sessions',
      value: 'By Appointment Only',
      href: null
    }
  ];

  const services = [
    'Past Life Regression',
    'Family Constellation',
    'Hypnotherapy',
    'Relationship Healing',
    'Health Block Clearing',
    'Wealth Block Removal'
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              🧘‍♀️ Past Life Healing
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional Past Life Regression and Family Constellation therapy to help you clear blocks in relationships, health, and wealth. Transform your life by healing the root causes from past lives.
            </p>
            
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  🎯 Research Project Offer
                </div>
                <div className="text-lg text-purple-100 mb-2">
                  Next 10 Clients: 50% OFF
                </div>
                <div className="text-xl font-bold text-white">
                  ₹999 per session
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-lg font-semibold text-white mb-2">Kapil Chawla</div>
              <div className="text-purple-300 text-sm mb-4">
                Certified Family Constellation Facilitator & Hypnotist
              </div>
              <motion.a
                href="tel:+919858072491"
                whileHover={{ scale: 1.05 }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold inline-flex items-center space-x-2 transition-colors duration-200"
              >
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>+91-9858072491</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-purple-300">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4 text-purple-300">Contact Info</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.label} className="flex items-start space-x-3">
                  <SafeIcon icon={info.icon} className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white hover:text-purple-300 transition-colors duration-200 text-sm font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-white text-sm font-medium">{info.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm mb-4">
            © 2024 Kapil Chawla - Past Life Regression Therapy. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Professional healing services • Research project pricing available • Book your transformation session today
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;