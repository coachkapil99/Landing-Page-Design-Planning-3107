import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiArrowRight, FiStar, FiHeart, FiDollarSign, FiUsers } = FiIcons;

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-purple-200"
            >
              <SafeIcon icon={FiStar} className="w-4 h-4" />
              <span>🔥 RESEARCH PROJECT - Limited Time Offer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Clear Your
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                Past Life Blocks
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Transform your life by healing deep-rooted blocks in relationships, health, and wealth through professional Past Life Regression therapy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  🎯 Next 10 Clients Get 50% OFF
                </div>
                <div className="text-lg text-gray-700 mb-3">
                  <span className="line-through text-gray-400">₹1,998</span>
                  <span className="text-2xl font-bold text-green-600 ml-3">₹999 per session</span>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Research Project - Limited Slots Available
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="tel:+919858072491"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Now: +91-9858072491</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-300 text-purple-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:border-purple-600 hover:text-purple-600 transition-colors duration-200"
              >
                <span>Learn More</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-3 gap-4 text-center"
            >
              <div className="flex flex-col items-center">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-500 mb-2" />
                <span className="text-sm text-gray-600">Relationships</span>
              </div>
              <div className="flex flex-col items-center">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">Health</span>
              </div>
              <div className="flex flex-col items-center">
                <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-green-500 mb-2" />
                <span className="text-sm text-gray-600">Wealth</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Meditation and Healing"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
            />
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10"
            />

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-10 -left-6 bg-white rounded-full p-3 shadow-lg"
            >
              <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-500" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-6 bg-white rounded-full p-3 shadow-lg"
            >
              <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;