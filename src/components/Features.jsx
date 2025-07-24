import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiActivity, FiDollarSign, FiClock, FiAward, FiUsers } = FiIcons;

const features = [
  {
    icon: FiHeart,
    title: 'Relationship Healing',
    description: 'Clear deep-rooted patterns affecting your relationships, attract healthy partnerships, and heal family dynamics.',
    color: 'from-red-400 to-pink-500'
  },
  {
    icon: FiActivity,
    title: 'Health & Wellness',
    description: 'Address unexplained health issues, chronic conditions, and emotional blocks manifesting as physical symptoms.',
    color: 'from-green-400 to-blue-500'
  },
  {
    icon: FiDollarSign,
    title: 'Wealth Blocks',
    description: 'Remove limiting beliefs about money, success, and abundance that may stem from past life experiences.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: FiClock,
    title: 'Deep Trauma Healing',
    description: 'Resolve unexplained fears, phobias, and recurring life patterns through past life exploration.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: FiAward,
    title: 'Professional Expertise',
    description: 'Certified Family Constellation Facilitator and experienced Hypnotist with proven results.',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    icon: FiUsers,
    title: 'Family Constellation',
    description: 'Heal generational patterns and family dynamics that influence your current life experiences.',
    color: 'from-teal-400 to-blue-500'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clear Blocks In
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              3 Key Life Areas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through Past Life Regression and Family Constellation therapy, we help you identify and heal 
            the root causes of challenges in your relationships, health, and financial life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;