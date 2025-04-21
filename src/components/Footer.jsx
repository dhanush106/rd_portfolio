import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-900 text-white py-10 mt-10 rounded-t-3xl shadow-xl"
    >
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-4 text-sm">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-blue-400">RD Digital Marketing</h4>
          <p className="text-gray-400">
            Smart ads. Real growth. Every click counts.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
          <p className="text-gray-400">support@rddigitalmarketing.com</p>
          <p className="text-gray-400">+91 98765 43210</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} RD Digital Marketing. All rights reserved.
        <br />
        Developed with ❤️ by{' '}
        <a
          href="https://your-portfolio-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white font-semibold transition"
        >
          Your Name
        </a>{' '}
        —
        <a
          href="https://www.linkedin.com/in/dhanussh-shrekar-054836291/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition ml-1"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
      </div>
    </motion.footer>
  )
}

export default Footer
