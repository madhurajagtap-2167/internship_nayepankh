import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Counter from '../components/feature/Counter';
import Newsletter from '../components/feature/Newsletter';
import { FiBookOpen, FiHeart, FiGlobe, FiUsers } from 'react-icons/fi';

const Home = () => {
  const stats = [
    { title: 'Volunteers', count: 1500, suffix: '+', icon: <FiUsers className="text-4xl text-primary" /> },
    { title: 'Students Helped', count: 200000, suffix: '+', icon: <FiBookOpen className="text-4xl text-accent" /> },
    { title: 'Projects Completed', count: 120, suffix: '', icon: <FiGlobe className="text-4xl text-blue-500" /> },
  ];

  const programs = [
    {
      title: 'Education Support',
      desc: 'Providing free education and study materials to underprivileged children.',
      icon: <FiBookOpen size={32} />
    },
    {
      title: 'Women Empowerment',
      desc: 'Skill development programs to make women financially independent.',
      icon: <FiHeart size={32} />
    },
    {
      title: 'Environment Campaigns',
      desc: 'Tree plantation drives and cleanliness campaigns for a greener future.',
      icon: <FiGlobe size={32} />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 dark:from-slate-950/90 dark:to-slate-950/70 z-10"></div>
          {/* Using a placeholder image from unspash */}
          <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary dark:text-blue-400 font-bold tracking-wider uppercase mb-4 block">Welcome to NayePankh Foundation</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Empowering Lives, <br/><span className="text-accent dark:text-green-400">Creating Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              Join us in our mission to uplift the underprivileged through education, health care, and environmental sustainability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg">Become a Volunteer</Button>
              <Button variant="outline" size="lg">Donate Now</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
              >
                <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-full shadow-sm">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  <Counter end={stat.count} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Featured Programs" 
            subtitle="What We Do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {programs.map((program, index) => (
              <Card key={index} delay={index * 0.2} className="p-8 text-center group">
                <div className="mx-auto w-16 h-16 bg-primary/10 text-primary dark:bg-blue-900/30 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{program.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">{program.desc}</p>
                <Button variant="outline" size="sm" className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4">
        <Newsletter />
      </section>
    </div>
  );
};

export default Home;
