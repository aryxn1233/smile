export type Page = 'home' | 'services' | 'booking' | 'doctors' | 'testimonials' | 'contact';

export interface Doctor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Mapping to icon component
  image: string;
  priceStart: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingData {
  serviceId: string;
  doctorId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}