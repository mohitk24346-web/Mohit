import React from 'react';
import { MapPin, Smile, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Award,
    title: "Advanced Implants",
    desc: "State-of-the-art dental implants by Dr. Dixit Arora tailored for longevity and comfort."
  },
  {
    icon: Smile,
    title: "Aesthetic Makeovers",
    desc: "Veneers, whitening, and complete smile design by Dr. Aditi Bhatia Arora."
  },
  {
    icon: MapPin,
    title: "Central Location",
    desc: "Conveniently located at Jakhan, Rajpur Road near Pacific Mall for easy access."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-12 bg-white -mt-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-50 flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-full flex items-center justify-center text-medical-700 mb-5">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;