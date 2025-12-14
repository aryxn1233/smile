import React, { useState } from 'react';
import { DOCTORS, SERVICES } from '../constants';
import { BookingData } from '../types';
import { Icons } from '../components/Icons';

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    serviceId: '',
    doctorId: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6 animate-fade-in">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icons.Check className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold dark:text-white">Booking Confirmed!</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Thank you, {formData.name}. We have sent a confirmation email to {formData.email}.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-hover transition-colors"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-5 h-full">
          
          {/* Sidebar */}
          <div className="bg-slate-900 p-8 text-white md:col-span-2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Book Your Visit</h2>
              <p className="text-slate-400 text-sm mb-8">Follow the steps to schedule your premium dental experience.</p>
              
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`flex items-center gap-4 ${step >= i ? 'text-primary' : 'text-slate-600'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= i ? 'border-primary bg-primary/10' : 'border-slate-600'}`}>
                      {step > i ? <Icons.Check className="w-4 h-4" /> : i}
                    </div>
                    <span className={`font-medium ${step === i ? 'text-white' : ''}`}>
                      {i === 1 ? 'Service & Doctor' : i === 2 ? 'Date & Time' : 'Your Details'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-0 p-4 bg-slate-800 rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Live Availability</span>
              </div>
              <p className="text-xs text-slate-500">
                Spots for next week are filling up fast.
              </p>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-8 md:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Service</label>
                    <select 
                      name="serviceId" 
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      required
                    >
                      <option value="">Choose a treatment...</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Select Specialist</label>
                    <div className="grid grid-cols-1 gap-3">
                      {DOCTORS.map(d => (
                        <div 
                          key={d.id}
                          onClick={() => setFormData(prev => ({ ...prev, doctorId: d.id }))}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            formData.doctorId === d.id 
                              ? 'border-primary bg-primary/5 ring-1 ring-primary' 
                              : 'border-slate-200 dark:border-slate-700 hover:border-slate-400'
                          }`}
                        >
                          <img src={d.image} alt={d.name} className="w-10 h-10 rounded-full object-cover" />
                          <div>
                            <p className="font-medium dark:text-white text-sm">{d.name}</p>
                            <p className="text-xs text-slate-500">{d.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Preferred Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Preferred Time</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['09:00', '10:30', '13:00', '14:30', '16:00', '17:30'].map(time => (
                         <button
                          type="button"
                          key={time}
                          onClick={() => setFormData(prev => ({ ...prev, time }))}
                          className={`py-2 rounded-lg text-sm font-medium transition-all ${
                            formData.time === time
                              ? 'bg-primary text-white'
                              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      required
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      required
                    />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    required
                  />
                  <textarea 
                    name="notes"
                    placeholder="Any specific concerns? (Optional)"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary dark:text-white resize-none"
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-4">
                {step > 1 ? (
                   <button 
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-2 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < 3 ? (
                  <button 
                    type="button"
                    onClick={() => setStep(step + 1)}
                    disabled={
                      (step === 1 && (!formData.serviceId || !formData.doctorId)) ||
                      (step === 2 && (!formData.date || !formData.time))
                    }
                    className="bg-primary hover:bg-primary-hover disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white px-8 py-3 rounded-full font-medium transition-all"
                  >
                    Next Step
                  </button>
                ) : (
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? 'Processing...' : 'Confirm Booking'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;