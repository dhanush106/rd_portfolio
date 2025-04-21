import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen mt-7 bg-[#f8f9fb] flex items-center justify-center py-20 px-6">
      <motion.div
        className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-3xl p-10 max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          👋 We're Not Just Marketers—
          <br />
          <span className="text-indigo-600">We're Your Growth Partners</span>
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          At <strong>[Your Agency Name]</strong>, we specialize in helping businesses unlock the full potential of digital advertising. With a laser focus on Facebook, Instagram, and Google ads, we craft highly targeted campaigns that connect your brand with the right people, in the right places, at exactly the right time.
        </p>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 text-left px-6 py-4 mb-6 rounded-md shadow-sm">
          <p className="text-indigo-700 italic font-medium">
            “We believe in <strong>data over guesswork</strong>, strategy over trends, and relationships over transactions.”
          </p>
        </div>

        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Whether you’re targeting one neighborhood or going nationwide, we design campaigns that make your brand stand out in competitive markets.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          What sets us apart is our hands-on, transparent approach and our commitment to results. When you work with us, you get more than just an agency—you get a team that treats your goals like our own.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
