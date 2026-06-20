import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent dark:text-green-400 font-semibold tracking-wider uppercase text-sm mb-2 block"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      {alignment === 'center' && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="h-1 w-20 bg-primary mx-auto rounded-full"
        />
      )}
    </div>
  );
};

export default SectionTitle;
