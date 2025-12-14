import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Icons } from './Icons';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Initialize Dark Mode based on HTML class
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Our Team', page: 'doctors' },
    { label: 'Stories', page: 'testimonials' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-dark-text font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <Icons.Sparkles className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Smile
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => onNavigate(item.page)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      currentPage === item.page
                        ? 'text-primary bg-primary/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {isDarkMode ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg shadow-primary-glow transition-all hover:scale-105"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-slate-200 dark:bg-slate-800 p-2 rounded-md text-slate-500 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <Icons.X className="w-6 h-6" /> : <Icons.Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-panel border-b border-white/10 animate-slide-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.page
                      ? 'text-primary bg-primary/10'
                      : 'text-slate-500 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center justify-between px-3 py-4 border-t border-slate-200 dark:border-slate-700 mt-4">
                <span className="text-slate-500 dark:text-slate-300">Theme</span>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                >
                  {isDarkMode ? <Icons.Sun className="w-5 h-5" /> : <Icons.Moon className="w-5 h-5" />}
                </button>
              </div>
              <button
                onClick={() => {
                  onNavigate('booking');
                  setIsMenuOpen(false);
                }}
                className="w-full text-center bg-primary hover:bg-primary-hover text-white px-5 py-3 rounded-md text-base font-medium mt-2"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icons.Sparkles className="text-white w-5 h-5" />
                </div>
                <span className="text-2xl font-bold text-white">Smile</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Experience the future of dentistry. Advanced technology meets compassionate care in a space designed for your comfort.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => onNavigate('home')} className="hover:text-primary">Home</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-primary">Services</button></li>
                <li><button onClick={() => onNavigate('doctors')} className="hover:text-primary">Our Doctors</button></li>
                <li><button onClick={() => onNavigate('booking')} className="hover:text-primary">Book Now</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <Icons.MapPin className="w-4 h-4 text-primary" />
                  123 Innovation Dr, Tech City
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Phone className="w-4 h-4 text-primary" />
                  +1 (555) 012-3456
                </li>
                <li className="flex items-center gap-2">
                  <Icons.Clock className="w-4 h-4 text-primary" />
                  Mon-Fri: 8am - 8pm
                </li>
              </ul>
            </div>

             <div>
              <h3 className="text-white font-semibold mb-4">Emergency?</h3>
              <p className="text-slate-400 text-sm mb-4">
                We reserve daily slots for urgent care. Don't wait in pain.
              </p>
              <button onClick={() => onNavigate('contact')} className="border border-red-500/50 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-colors text-sm w-full">
                Emergency Contact
              </button>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Smile Dental Clinic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;