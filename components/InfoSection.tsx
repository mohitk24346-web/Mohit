import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Button from './Button';

const InfoSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Contact Details */}
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Us Today</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-medical-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Clinic Address</h4>
                    <p className="text-gray-600 leading-relaxed max-w-xs">{BUSINESS_INFO.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-medical-700">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                    <ul className="text-gray-600 space-y-1">
                      {BUSINESS_INFO.hours.map((h, i) => (
                         <li key={i}><span className="font-medium text-gray-800">{h.days}:</span> {h.time}</li>
                      ))}
                    </ul>
                    <p className="text-xs text-orange-600 mt-2 italic font-medium">
                      *Please confirm appointment timings by phone
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-medical-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Contact</h4>
                    <p className="text-gray-600 text-lg">{BUSINESS_INFO.phoneDisplay}</p>
                    <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="mt-2 inline-block">
                        <span className="text-medical-700 font-semibold hover:underline cursor-pointer text-sm">Call for appointment &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder Area */}
            <div className="relative h-96 lg:h-auto bg-gray-200">
              <img 
                src="https://picsum.photos/id/10/800/800" 
                alt="Map Location Placeholder" 
                className="w-full h-full object-cover grayscale opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="text-center p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg m-4">
                    <p className="font-bold text-gray-900 mb-2">Find us on Google Maps</p>
                    <p className="text-sm text-gray-600 mb-4">Shop No. 6 & 7, Inderbaba Marg, Rajpur Road</p>
                    <a href={BUSINESS_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary">Get Directions</Button>
                    </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;