import React from 'react';
import { Page } from '../types';
import { DOCTORS } from '../constants';
import { Icons } from '../components/Icons';

interface DoctorsProps {
  onNavigate: (page: Page) => void;
}

const Doctors: React.FC<DoctorsProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Meet The Experts</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Our team consists of industry leaders dedicated to the art and science of your smile.
          </p>
        </div>

        <div className="space-y-12">
          {DOCTORS.map((doctor, idx) => (
            <div 
              key={doctor.id}
              className={`flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 animate-slide-up ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/3 relative group">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 group-hover:rotate-6 transition-transform opacity-20"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full aspect-[3/4] object-cover rounded-2xl relative z-10 shadow-md grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info Section */}
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold dark:text-white mb-2">{doctor.name}</h2>
                  <p className="text-primary font-semibold text-lg">{doctor.role}</p>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {doctor.bio}
                </p>

                <div className="flex flex-wrap gap-2">
                  {doctor.specialties.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => onNavigate('booking')}
                    className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full transition-all shadow-lg shadow-primary/30"
                  >
                    Book with {doctor.name.split(' ')[1]}
                  </button>
                  <button className="p-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-500 hover:text-primary hover:border-primary transition-colors">
                     <Icons.Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;