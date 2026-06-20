import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { FiTarget, FiEye, FiHeart, FiStar, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const values = [
    { title: 'Compassion', desc: 'Empathy drives our actions and binds us with the communities we serve.', icon: <FiHeart size={24} /> },
    { title: 'Integrity', desc: 'We act with honesty and transparency in everything we do.', icon: <FiStar size={24} /> },
    { title: 'Collaboration', desc: 'Working together multiplies our impact on society.', icon: <FiUsers size={24} /> },
    { title: 'Excellence', desc: 'We strive to provide the best possible support and services.', icon: <FiAward size={24} /> },
  ];

  const timeline = [
    { year: '2020', title: 'Foundation Started', desc: 'NayePankh Foundation was officially established with a vision to uplift the underprivileged.' },
    { year: '2021', title: 'First Major Campaign', desc: 'Successfully provided food and educational supplies to over 10,000 children.' },
    { year: '2022', title: 'Expansion of Programs', desc: 'Launched women empowerment and environmental sustainability initiatives.' },
    { year: '2023', title: 'National Recognition', desc: 'Recognized as one of the fastest-growing student-led NGOs in India.' },
  ];

  const team = [
    { name: 'Prashant Shukla', role: 'Founder & President', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
    { name: 'Aditi Sharma', role: 'Vice President', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rahul Verma', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-primary text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100 max-w-2xl mx-auto"
          >
            Learn more about our journey, our mission, and the team behind NayePankh Foundation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                <FiTarget size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                To eradicate poverty, hunger, and illiteracy by providing sustainable support systems. We aim to empower marginalized communities through education, skill development, and health awareness.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800"
            >
              <div className="w-14 h-14 bg-accent/10 text-accent dark:bg-green-900/30 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
                <FiEye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                A world where every individual, regardless of their socio-economic background, has access to quality education, healthcare, and equal opportunities to thrive and succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="Our Core Values" subtitle="What Guides Us" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <Card key={index} delay={index * 0.1} className="p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionTitle title="Our Journey" subtitle="How We Evolved" />
          <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-primary text-white font-bold text-xs shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                  {item.year}
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800"
                >
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="Meet Our Team" subtitle="The Faces Behind The Cause" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} delay={index * 0.2} className="overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-primary dark:text-blue-400 font-medium">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
