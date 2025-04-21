// src/components/ui/Button.jsx
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseStyles = "px-6 py-3 rounded-2xl font-semibold text-white transition-all duration-300 shadow-md";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
    success: "bg-green-600 hover:bg-green-700",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
};
