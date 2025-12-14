import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Icons } from '../components/Icons';

const Testimonials: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Patient Stories</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here is what our community says about the Smile experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
             <div 
              key={t.id}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 relative animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="absolute top-8 right-8 text-primary/10">
                <Icons.Sparkles className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star key={i} className={`w-5 h-5 ${i < t.rating ? 'fill-current' : 'text-slate-300 dark:text-slate-600'}`} />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic mb-8 relative z-10">
                "{t.comment}"
              </p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/50" />
                <div>
                  <h4 className="font-bold dark:text-white">{t.name}</h4>
                  <span className="text-xs text-slate-400">Verified Patient</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 p-12 rounded-3xl bg-slate-900 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">Join 2,000+ Happy Smiles</h2>
                <p className="text-slate-400 mb-8">We can't wait to welcome you to the family.</p>
                <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                    Become a Patient
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;