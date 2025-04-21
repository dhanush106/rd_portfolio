import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaGoogle } from 'react-icons/fa';

const WhatWeDo = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What We Do
      </motion.h2>

      <motion.p
        className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Location-Specific Ad Campaigns That Actually Work. We help brands get seen, get clicks, and get customers.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
        <motion.div
          className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaFacebookF className="text-blue-600 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-700">Facebook Ads Campaigns</h3>
        </motion.div>

        <motion.div
          className="bg-green-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaInstagram className="text-green-600 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-green-700">Instagram Ads Campaigns</h3>
        </motion.div>

        <motion.div
          className="bg-red-50 p-6 rounded-xl shadow hover:shadow-md transition-all"
          whileHover={{ scale: 1.05 }}
        >
          <FaGoogle className="text-red-600 text-3xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-red-700">Google Ads Campaigns</h3>
        </motion.div>
      </div>

      <motion.a
        href="#"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        Explore Services →
      </motion.a>
    </section>
  );
};

export default WhatWeDo;
