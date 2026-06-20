import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <div className="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Get In Touch" subtitle="Contact Us" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary dark:bg-blue-900/30 rounded-full flex items-center justify-center shrink-0">
                <FiMapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Address</h4>
                <p className="text-slate-600 dark:text-slate-400">Lucknow, Uttar Pradesh, India - 226001</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 text-accent dark:bg-green-900/30 rounded-full flex items-center justify-center shrink-0">
                <FiPhone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phone Number</h4>
                <p className="text-slate-600 dark:text-slate-400">+91 XXXXXXXXXX</p>
              </div>
            </Card>
            <Card className="p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 dark:bg-orange-900/30 rounded-full flex items-center justify-center shrink-0">
                <FiMail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Address</h4>
                <p className="text-slate-600 dark:text-slate-400">contact@nayepankh.com</p>
              </div>
            </Card>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-primary" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-primary" />
                </div>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-primary" />
                <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message" required className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:border-primary"></textarea>
                <Button type="submit" size="lg">Send Message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
