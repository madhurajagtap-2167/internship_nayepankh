import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Education Drive',
      date: 'Aug 15, 2026',
      time: '10:00 AM - 4:00 PM',
      location: 'City Center Park',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Women Empowerment Workshop',
      date: 'Sep 05, 2026',
      time: '11:00 AM - 2:00 PM',
      location: 'Community Hall',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
      status: 'Upcoming'
    },
    {
      id: 3,
      title: 'Mega Plantation Drive',
      date: 'Jun 05, 2026',
      time: '8:00 AM - 1:00 PM',
      location: 'Green Belt Area',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      status: 'Past'
    }
  ];

  return (
    <div className="py-20 bg-white dark:bg-slate-950 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <SectionTitle title="Our Events" subtitle="Join The Movement" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {events.map((event, index) => (
            <Card key={event.id} delay={index * 0.1} className="flex flex-col h-full group overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                  event.status === 'Upcoming' ? 'bg-primary text-white' : 'bg-slate-800 text-white'
                }`}>
                  {event.status}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">{event.title}</h3>
                
                <div className="space-y-3 mb-6 text-sm text-slate-600 dark:text-slate-400 flex-grow">
                  <div className="flex items-center gap-3">
                    <FiCalendar className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiClock className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMapPin className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button 
                  variant={event.status === 'Upcoming' ? 'primary' : 'outline'} 
                  className="w-full"
                  disabled={event.status === 'Past'}
                >
                  {event.status === 'Upcoming' ? 'Register Now' : 'View Gallery'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
