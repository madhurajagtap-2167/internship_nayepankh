import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Programs = () => {
  const programsList = [
    {
      id: 1,
      title: 'Education Support',
      desc: 'Providing free education, stationery, and study materials to underprivileged children to ensure they have a bright future.',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Women Empowerment',
      desc: 'Skill development programs, self-defense classes, and vocational training to make women financially and socially independent.',
      image: 'https://images.unsplash.com/photo-1593113589914-07553f1cc427?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Environment Campaigns',
      desc: 'Tree plantation drives, cleanliness campaigns, and awareness programs for a greener and healthier future.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      title: 'Health Awareness',
      desc: 'Organizing free health camps, distributing sanitary pads, and raising awareness about hygiene and sanitation.',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      title: 'Skill Development',
      desc: 'Equipping the youth with modern skills like computer literacy, communication, and vocational trades to enhance employability.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      title: 'Youth Leadership',
      desc: 'Mentoring young minds to take leadership roles and drive positive change in their respective communities.',
      image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Programs" 
          subtitle="Making an Impact" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {programsList.map((program, index) => (
            <Card key={program.id} delay={index * 0.1} className="flex flex-col h-full group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{program.title}</h3>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">{program.desc}</p>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
