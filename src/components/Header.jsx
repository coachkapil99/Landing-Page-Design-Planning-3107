import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiPhone } = FiIcons;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            🧘‍♀️ Past Life Healing
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <div className="font-semibold">Kapil Chawla</div>
              <div className="text-xs">Family Constellation Facilitator</div>
            </div>
            <motion.a
              href="tel:+919858072491"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-medium flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span>Call Now</span>
            </motion.a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            <nav className="flex flex-col space-y-4">
              {['About', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <div className="text-center text-sm text-gray-600">
                  <div className="font-semibold">Kapil Chawla</div>
                  <div className="text-xs">Family Constellation Facilitator</div>
                </div>
                <a
                  href="tel:+919858072491"
                  className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full font-medium text-center"
                >
                  Call +91-9858072491
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;