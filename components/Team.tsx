import React from 'react';
import { DOCTORS } from '../constants';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-700 font-bold uppercase tracking-wider text-sm">Expert Care</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Meet Our Doctors</h2>
          <p className="mt-4 text-gray-600">Highly qualified specialists committed to your dental well-being.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-80 overflow-hidden relative group">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-medical-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm font-medium">{doctor.specialty}</p>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-medical-700 font-medium mb-4">{doctor.role}</p>
                <div className="w-12 h-1 bg-medical-200 mb-4 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed text-sm flex-1">
                  {doctor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;