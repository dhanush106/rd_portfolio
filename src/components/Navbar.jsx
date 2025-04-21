import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { div } from 'framer-motion/client';

const Navbar = () => {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const tabs = [
    { id: "/", label: "Home" },
    { id: "/about", label: "About" },
    { id: "/services", label: "Services" },
    { id: "/pricing", label: "Pricing" },
    { id: "/contact", label: "Contact" },
  ];

  return (
    <div className='sticky top-1 z-50'>
      <nav className="rounded-2xl bg-blue-50 p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center ">
          <div>
            <img
              className="cursor-pointer"
              src={logo}
              alt="logo"
              width={50}
              height={50}
            />
          </div>

          {/* Desktop nav */}
          <ul className="hidden md:flex space-x-2">
            {tabs.map((tab) => (
              <Tab
                key={tab.id}
                tab={tab}
                location={location}
                hoveredTab={hoveredTab}
                setHoveredTab={setHoveredTab}
              />
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden z-50">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden flex flex-col mt-4 space-y-2 overflow-hidden px-4"
            >
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.id}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full font-medium ${
                    location.pathname === tab.id
                      ? "bg-blue-300 text-black"
                      : "hover:bg-blue-100 text-black"
                  }`}
                >
                  {tab.label}
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

const Tab = ({ tab, location, hoveredTab, setHoveredTab }) => {
  const isActive = location.pathname === tab.id;

  return (
    <motion.li
      onHoverStart={() => setHoveredTab(tab.id)}
      onHoverEnd={() => setHoveredTab(null)}
      className="relative"
    >
      <Link
        to={tab.id}
        className={`px-4 py-2 text-sm font-medium relative rounded-full ${
          isActive ? "text-black bg-blue-300" : "text-black hover:text-black"
        }`}
      >
        {isActive && (
          <motion.span
            layoutId="activeTab"
            className="absolute inset-0 bg-blue-500 rounded-full z-0"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        {hoveredTab === tab.id && !isActive && (
          <motion.span
            layoutId="hoverTab"
            className="absolute inset-0 bg-blue-300 rounded-full z-0"
            transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
          />
        )}
        <span className="relative z-10">{tab.label}</span>
      </Link>
    </motion.li>
  );
};

export default Navbar;
