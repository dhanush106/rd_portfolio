import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_o3c7rqp', // replace with your EmailJS service ID
        'template_yt6otra', // replace with your EmailJS template ID
        formData,
        '4eGsqcmBL7eHkOJaT' // replace with your EmailJS public key
      )
      .then(() => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          business: '',
          service: '',
          message: '',
        });
      })
      .catch(() => {
        alert('Something went wrong, please try again.');
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-100 p-6 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-800 mb-4 text-center"
      >
        Let’s Build Something Amazing Together
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-gray-600 mb-8 text-center max-w-xl"
      >
        Reach out today and let’s talk strategy, scale, and success.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl space-y-4 bg-white p-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input name="business" placeholder="Business Name" value={formData.business} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input name="service" placeholder="What Service Are You Interested In?" value={formData.service} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea name="message" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-lg transition duration-200">
          Submit
        </button>
      </motion.form>

      <motion.div
        className="mt-8 text-center text-gray-700 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p>📧 Email: hello@youragency.com</p>
        <p>📞 Phone: +1234567890</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-blue-600 hover:text-blue-800">🌐 Facebook</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">🌐 Instagram</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">🌐 LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}