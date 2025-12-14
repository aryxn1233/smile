import React from 'react';
import { Page } from '../types';
import { SERVICES } from '../constants';
import { Icons } from '../components/Icons';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">World-Class Treatments</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive care tailored to your unique needs, utilizing state-of-the-art technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
                  <div className="p-2 bg-primary/20 backdrop-blur-md rounded-lg">
                    {React.createElement(Icons[service.iconName], { className: "w-5 h-5" })}
                  </div>
                  <span className="font-semibold tracking-wide">{service.title}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-500 uppercase font-bold">Starts at</span>
                    <span className="text-lg font-bold text-primary">{service.priceStart}</span>
                  </div>
                  <button 
                    onClick={() => onNavigate('booking')}
                    className="text-sm font-semibold bg-slate-100 dark:bg-slate-700 hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-colors"
                  >
                    Book This
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

export default Services;