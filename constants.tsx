import { 
  Stethoscope, 
  Smile, 
  Zap, 
  Sparkles, 
  Baby, 
  Activity 
} from 'lucide-react';
import { ServiceItem, Doctor, Testimonial, NavLink } from './types';

export const BUSINESS_INFO = {
  name: "Glen Dental Care",
  phone: "+91 99997 88058",
  phoneDisplay: "+91 99997 88058",
  address: "Shop No. 6 & 7, Upper Ground Floor, Inderbaba Marg, Rajpur Road, Near Pacific Mall, Jakhan, Dehradun 248001",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Glen+Dental+Care+Dehradun+Rajpur+Road",
  fee: "Consultation starts at ₹300",
  hours: [
    { days: "Mon–Wed, Fri–Sun", time: "10:00 – 14:00 & 16:00 – 19:30" },
    { days: "Thursday", time: "12:00 – 19:30" }
  ]
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'State-of-the-art titanium implants to replace missing teeth and restore function.',
    icon: Stethoscope
  },
  {
    id: 'aesthetic',
    title: 'Aesthetic Dentistry',
    description: 'Veneers, laminates, and smile makeovers designed to boost your confidence.',
    icon: Smile
  },
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Advanced, painless endodontic therapy to save natural teeth.',
    icon: Activity
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional brightening treatments for a radiant, stain-free smile.',
    icon: Sparkles
  },
  {
    id: 'ortho',
    title: 'Orthodontics',
    description: 'Clear aligners and braces to correct misalignment and bite issues.',
    icon: Zap
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle, child-friendly care ensuring oral health from an early age.',
    icon: Baby
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-dixit',
    name: 'Dr. Dixit Arora',
    role: 'Principal Dentist',
    specialty: 'Implantologist',
    bio: 'Dedicated to restoring function and confidence through advanced implantology procedures.',
    image: 'https://picsum.photos/id/1062/400/400' // Placeholder
  },
  {
    id: 'dr-aditi',
    name: 'Dr. Aditi Bhatia Arora',
    role: 'Dental Surgeon',
    specialty: 'Aesthetic Dentist',
    bio: 'Specializing in creating beautiful smiles through cosmetic veneers and smile design.',
    image: 'https://picsum.photos/id/338/400/400' // Placeholder
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Sharma',
    rating: 5,
    text: "The best dental experience I've had in Dehradun. Dr. Dixit explained everything clearly and the implant procedure was painless."
  },
  {
    id: 't2',
    name: 'Anjali Verma',
    rating: 5,
    text: "I visited for a smile makeover. Dr. Aditi is a perfectionist! The clinic is extremely hygienic and the staff is very polite."
  },
  {
    id: 't3',
    name: 'Vikram Singh',
    rating: 5,
    text: "Great location near Pacific Mall. Minimal waiting time and very transparent pricing. Highly recommended."
  }
];