import React from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Glen Dental Care</h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Restoring smiles with advanced dentistry and compassionate care in the heart of Dehradun.
            </p>
            <div className="flex space-x-4">
               <a href="#" className="hover:text-medical-600 transition-colors"><Facebook size={20} /></a>
               <a href="#" className="hover:text-medical-600 transition-colors"><Instagram size={20} /></a>
               <a href="#" className="hover:text-medical-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
               <li>{BUSINESS_INFO.phoneDisplay}</li>
               <li>{BUSINESS_INFO.address}</li>
               <li>
                   <a href={`mailto:info@glendental.com`} className="hover:text-white">info@glendental.com</a>
               </li>
            </ul>
          </div>
          
           {/* Hours */}
           <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
                {BUSINESS_INFO.hours.map((h, i) => (
                    <li key={i}>
                        <span className="block text-white font-medium">{h.days}</span>
                        <span>{h.time}</span>
                    </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Glen Dental Care. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             <a href="#" className="hover:text-gray-400">Privacy Policy</a>
             <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;