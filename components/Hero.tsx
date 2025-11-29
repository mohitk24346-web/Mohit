import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Button from './Button';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-slate-50 pt-10 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-medical-50 text-medical-700 font-semibold text-sm mb-6 border border-medical-100">
               {BUSINESS_INFO.fee}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Advanced Dentistry. <br />
              <span className="text-medical-700">Compassionate Care.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Specialized in Dental Implants, Aesthetic Dentistry, and Root Canal Treatments. Restoring smiles at Rajpur Road, Dehradun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Phone size={20} />
                  Call {BUSINESS_INFO.phoneDisplay}
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                  Our Services
                  <ArrowRight size={20} />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
             {/* Decorative Background Blob */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-medical-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/id/1025/800/600" 
                alt="Modern Dental Clinic Interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">World Class Facilities</p>
                <p className="text-sm opacity-90">Hygienic & Comfortable Environment</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;