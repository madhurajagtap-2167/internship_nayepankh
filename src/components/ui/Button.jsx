import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 shadow-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30",
    secondary: "bg-white text-primary border-2 border-primary hover:bg-blue-50 dark:bg-slate-900 dark:hover:bg-slate-800",
    accent: "bg-accent text-white hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30",
    outline: "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-slate-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
