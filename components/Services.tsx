import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-700 font-bold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">Comprehensive Dental Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            From routine checkups to complex surgeries, we provide specialized care for every aspect of your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-medical-100"
            >
              <div className="w-12 h-12 bg-medical-50 text-medical-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical-700 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;