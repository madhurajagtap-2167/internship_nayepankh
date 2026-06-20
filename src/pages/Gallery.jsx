import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

const Gallery = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1593113589914-07553f1cc427?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', span: 'col-span-2 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  ];

  return (
    <div className="py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Our Gallery" subtitle="Moments of Joy" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className={`${img.span} rounded-2xl overflow-hidden shadow-lg relative group`}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <img 
                src={img.src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
