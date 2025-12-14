import { Doctor, Service, Testimonial } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Elena Rostova',
    role: 'Chief Orthodontist',
    bio: 'With over 15 years of experience transforming smiles, Dr. Rostova specializes in invisible aligners and complex reconstructive surgery.',
    image: 'https://images.pexels.com/photos/5355692/pexels-photo-5355692.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5355692.jpg&fm=jpg', 
    specialties: ['Orthodontics', 'Invisalign', 'Surgery']
  },
  {
    id: 'd2',
    name: 'Dr. James Chen',
    role: 'Cosmetic Specialist',
    bio: 'Dr. Chen combines art and science to create perfectly balanced, natural-looking veneers and whitening treatments.',
    image: 'https://images.pexels.com/photos/6627801/pexels-photo-6627801.jpeg?cs=srgb&dl=pexels-karola-g-6627801.jpg&fm=jpg',
    specialties: ['Veneers', 'Whitening', 'Smile Design']
  },
  {
    id: 'd3',
    name: 'Dr. Sarah Miller',
    role: 'Pediatric Dentist',
    bio: 'Gentle, patient, and fun, Dr. Miller ensures our youngest patients build a lifetime of healthy dental habits.',
    image: 'https://images.pexels.com/photos/5355860/pexels-photo-5355860.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5355860.jpg&fm=jpg',
    specialties: ['Pediatric', 'Preventative', 'Sedation']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Laser Whitening',
    description: 'Advanced laser technology for immediate results up to 8 shades whiter in a single session.',
    iconName: 'Sparkles',
    image: 'https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg?cs=srgb&dl=pexels-shvetsa-3845759.jpg&fm=jpg',
    priceStart: '$299'
  },
  {
    id: 's2',
    title: 'Invisible Aligners',
    description: 'Clear, comfortable aligners to straighten your teeth discreetly without metal brackets.',
    iconName: 'Smile',
    image: 'https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6812561.jpg&fm=jpg',
    priceStart: '$3,500'
  },
  {
    id: 's3',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacements for missing teeth that restore full function.',
    iconName: 'Anchor', // Metaphor for implant
    image: 'https://images.pexels.com/photos/4687360/pexels-photo-4687360.jpeg?cs=srgb&dl=pexels-polina-zimmerman-4687360.jpg&fm=jpg',
    priceStart: '$1,200'
  },
  {
    id: 's4',
    title: 'Root Canal Therapy',
    description: 'Pain-free microscopic endodontics to save infected teeth and relieve pain instantly.',
    iconName: 'Activity',
    image: 'https://images.pexels.com/photos/6812520/pexels-photo-6812520.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6812520.jpg&fm=jpg',
    priceStart: '$600'
  },
  {
    id: 's5',
    title: 'Porcelain Veneers',
    description: 'Custom-crafted ceramic shells to cover imperfections and create a celebrity smile.',
    iconName: 'Gem',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?cs=srgb&dl=pexels-shvetsa-3845653.jpg&fm=jpg',
    priceStart: '$900'
  },
  {
    id: 's6',
    title: 'Comprehensive Exam',
    description: 'Full 3D digital scanning, oral cancer screening, and detailed health planning.',
    iconName: 'Search',
    image: 'https://images.pexels.com/photos/6812456/pexels-photo-6812456.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6812456.jpg&fm=jpg',
    priceStart: '$150'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael Ross',
    rating: 5,
    comment: 'The technology they use is mind-blowing. I saw a 3D model of my teeth in minutes. Painless and professional.',
    image: 'https://images.pexels.com/photos/3845759/pexels-photo-3845759.jpeg?cs=srgb&dl=pexels-shvetsa-3845759.jpg&fm=jpg'
  },
  {
    id: 't2',
    name: 'Jessica Pearson',
    rating: 5,
    comment: 'Dr. Chen changed my life with veneers. I never used to smile in photos, now I can\'t stop!',
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?cs=srgb&dl=pexels-shvetsa-3845625.jpg&fm=jpg'
  },
  {
    id: 't3',
    name: 'Harvey Specter',
    rating: 4,
    comment: 'Efficient, high-end, and respectful of my time. The booking system is seamless and the clinic feels like a spa.',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?cs=srgb&dl=pexels-shvetsa-3845653.jpg&fm=jpg'
  }
];