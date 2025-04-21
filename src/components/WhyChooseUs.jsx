import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaComments, FaBrain, FaFire } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>

      {/* Feature list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 text-left">
        <motion.div
          className="flex items-start gap-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <FaBullseye className="text-indigo-600 text-3xl" />
          <p className="text-lg text-gray-700">🎯 Hyper-targeted location-based ad strategies</p>
        </motion.div>

        <motion.div
          className="flex items-start gap-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <FaComments className="text-blue-600 text-3xl" />
          <p className="text-lg text-gray-700">💬 Transparent communication & reporting</p>
        </motion.div>

        <motion.div
          className="flex items-start gap-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FaBrain className="text-green-600 text-3xl" />
          <p className="text-lg text-gray-700">🧠 Deep understanding of platform algorithms</p>
        </motion.div>

        <motion.div
          className="flex items-start gap-4"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaFire className="text-red-600 text-3xl" />
          <p className="text-lg text-gray-700">🔥 Scalable campaigns that grow with you</p>
        </motion.div>
      </div>

      {/* CTA Divider */}
      <hr className="border-t border-gray-300 my-10 w-1/2 mx-auto" />

      {/* Final CTA */}
      <motion.h3
        className="text-3xl font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build Your Growth Machine
      </motion.h3>

      <motion.p
        className="text-gray-600 text-lg mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Partner with a team that’s as invested in your success as you are.
      </motion.p>

      <motion.a
        href="#"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-700 transition"
        whileHover={{ scale: 1.05 }}
      >
        Let’s Get Started →
      </motion.a>
    </section>
  );
};

export default WhyChooseUs;
