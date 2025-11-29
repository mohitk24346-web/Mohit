import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Doctor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface NavLink {
  label: string;
  href: string;
}