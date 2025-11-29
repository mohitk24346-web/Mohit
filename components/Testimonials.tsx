import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-medical-700 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div className="mb-6 md:mb-0">
               <h2 className="text-3xl md:text-4xl font-bold">Patient Stories</h2>
               <p className="text-medical-100 mt-2">See what our patients say about their experience.</p>
           </div>
           <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="font-bold text-xl">4.9</span>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm opacity-80 ml-2">Google Rating</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-medical-800/50 backdrop-blur-sm p-8 rounded-2xl border border-medical-600 relative">
              <Quote className="absolute top-6 right-6 text-medical-500 opacity-20" size={48} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-medical-50 italic mb-6 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-bold text-white">{t.name}</p>
                <p className="text-xs text-medical-200 uppercase tracking-wide">Verified Patient</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;