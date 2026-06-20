import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      return;
    }
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <div className="bg-primary/10 dark:bg-slate-800/50 py-16 px-4 rounded-3xl text-center max-w-4xl mx-auto my-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Subscribe to our Newsletter
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto">
          Stay updated with our latest programs, events, and stories of impact. Join our community today!
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="px-6 py-3 rounded-full flex-grow border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 focus:outline-none focus:border-primary dark:focus:border-blue-400"
          />
          <Button type="submit" variant="primary">
            Subscribe
          </Button>
        </form>
        {status === 'success' && <p className="text-accent mt-4 text-sm font-medium">Successfully subscribed!</p>}
        {status === 'error' && <p className="text-red-500 mt-4 text-sm font-medium">Please enter a valid email.</p>}
      </motion.div>
    </div>
  );
};

export default Newsletter;
