import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: 'weekends',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', skills: '', availability: 'weekends', message: '' });
  };

  const benefits = [
    "Make a real difference in people's lives.",
    "Gain valuable experience and develop new skills.",
    "Be part of a passionate and driven community.",
    "Receive a certificate of appreciation and Letter of Recommendation.",
  ];

  return (
    <div className="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionTitle 
          title="Become a Volunteer" 
          subtitle="Join Our Cause" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          {/* Information Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Why Volunteer With Us?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Volunteering at NayePankh Foundation is not just about giving back to the community; it's also about growing as an individual. You'll have the opportunity to work on meaningful projects, interact with diverse groups of people, and learn about the social sector from the ground up.
            </p>
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Benefits:</h4>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800">
              <p className="text-blue-800 dark:text-blue-300 font-medium italic">
                "Volunteers do not necessarily have the time; they just have the heart."
              </p>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Registration Form</h3>
            
            {submitted ? (
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-6 rounded-xl text-center">
                <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                <p>Your application has been submitted successfully. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Phone *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="+91 XXXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Skills</label>
                  <select name="skills" value={formData.skills} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option value="">Select a skill</option>
                    <option value="teaching">Teaching / Tutoring</option>
                    <option value="marketing">Marketing / PR</option>
                    <option value="content">Content Writing</option>
                    <option value="design">Graphic Design / Video Editing</option>
                    <option value="tech">Web Development / Tech</option>
                    <option value="event">Event Management</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Availability</label>
                  <select name="availability" value={formData.availability} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none">
                    <option value="weekends">Weekends Only</option>
                    <option value="weekdays">Weekdays (Few hours)</option>
                    <option value="fulltime">Full Time / Internship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Why do you want to join us?</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary outline-none" placeholder="Tell us briefly about your motivation..."></textarea>
                </div>
                <Button type="submit" className="w-full" size="lg">Submit Application</Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
