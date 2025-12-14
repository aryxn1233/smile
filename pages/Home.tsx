import React, { useState } from 'react';
import { Page } from '../types';
import { Icons } from '../components/Icons';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-6812561.jpg&fm=jpg")' }} 
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent dark:from-slate-950 dark:via-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Accepting New Patients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Your Smile, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Our Priority.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-lg">
              Experience the convergence of luxury, comfort, and cutting-edge dental technology. 
              We redefine what it means to visit the dentist.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onNavigate('booking')}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold text-lg transition-transform hover:scale-105 shadow-lg shadow-primary/40 flex items-center justify-center gap-2"
              >
                Book Appointment
                <Icons.ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate('doctors')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center justify-center"
              >
                Meet the Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling Scroll Section */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Why Choose Smile?</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: 'Activity',
                title: 'Advanced Tech',
                desc: 'From 3D scanning to laser dentistry, we use the latest tools for precise, painless treatments.'
              },
              {
                icon: 'Smile',
                title: 'Patient Comfort',
                desc: 'Noise-canceling headphones, ceiling TVs, and sedation options ensure a relaxing visit.'
              },
              {
                icon: 'Sparkles',
                title: 'Lasting Results',
                desc: 'We focus on long-term oral health and aesthetics, not just quick fixes.'
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  {React.createElement(Icons[item.icon], { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Break / CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?cs=srgb&dl=pexels-shvetsa-3845729.jpg&fm=jpg" 
            alt="Dental Tools" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to transform your smile?
          </h2>
          <button 
            onClick={() => onNavigate('booking')}
            className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/50 transition-all hover:scale-105"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;