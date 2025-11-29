import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import Button from './Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Simple Text Logo per requirements, but styled */}
             <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-medical-700 tracking-tight leading-none">
                  Glen Dental Care
                </h1>
                <span className="text-xs text-gray-500 font-medium tracking-wide">ADVANCED DENTISTRY</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-medical-700 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
             <div className="flex flex-col items-end text-sm mr-2">
                <span className="text-gray-500">Book an appointment</span>
                <span className="font-bold text-medical-700">{BUSINESS_INFO.phoneDisplay}</span>
             </div>
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>
                <Button variant="secondary" size="sm" className="rounded-full">
                Book Now
                </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-medical-700 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center shadow-inner">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-medical-700 hover:bg-gray-50 rounded-md w-full text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 w-full">
                 <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="block w-full">
                    <Button variant="secondary" fullWidth className="flex items-center justify-center gap-2">
                        <Phone size={18} />
                        Call Now
                    </Button>
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;