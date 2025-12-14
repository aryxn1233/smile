import React from 'react';
import { Icons } from '../components/Icons';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="animate-slide-up space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4 dark:text-white">Get in Touch</h1>
              <p className="text-slate-600 dark:text-slate-400">
                We are conveniently located in the heart of Tech City, with ample parking and accessibility.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Icons.MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Visit Us</h3>
                  <p className="text-slate-600 dark:text-slate-400">123 Innovation Dr, Suite 100<br/>Tech City, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Icons.Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Call Us</h3>
                  <p className="text-slate-600 dark:text-slate-400">+1 (555) 012-3456</p>
                  <p className="text-slate-500 text-sm mt-1">Mon-Fri, 8am - 8pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <Icons.Send className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg dark:text-white">Email Us</h3>
                  <p className="text-slate-600 dark:text-slate-400">hello@smile.com</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-6 rounded-2xl">
              <h3 className="text-red-600 dark:text-red-400 font-bold flex items-center gap-2 mb-2">
                <Icons.Activity className="w-5 h-5" /> Dental Emergency?
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                If you are experiencing severe pain or trauma, call our emergency line immediately.
              </p>
              <a href="tel:5559999999" className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Map / Form Side */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
               <h3 className="text-xl font-bold mb-6 dark:text-white">Send a Message</h3>
               <form className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <input type="text" placeholder="Name" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary dark:text-white focus:outline-none" />
                   <input type="email" placeholder="Email" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary dark:text-white focus:outline-none" />
                 </div>
                 <input type="text" placeholder="Subject" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary dark:text-white focus:outline-none" />
                 <textarea rows={4} placeholder="Message" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary dark:text-white focus:outline-none resize-none" />
                 <button type="button" className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-hover transition-colors">
                   Send Message
                 </button>
               </form>
            </div>
             
             {/* Fake Map */}
             <div className="mt-8 h-64 w-full bg-slate-200 dark:bg-slate-700 rounded-3xl overflow-hidden relative">
               <img src="https://images.pexels.com/photos/305564/pexels-photo-305564.jpeg?cs=srgb&dl=pexels-fr3nks-305564.jpg&fm=jpg" alt="Map Location" className="w-full h-full object-cover opacity-60 grayscale" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white dark:bg-slate-900 p-3 rounded-full shadow-xl">
                   <Icons.MapPin className="w-8 h-8 text-red-500" />
                 </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;