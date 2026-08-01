import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const AppointmentSlide = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <SlideSection id="appointment" className="justify-center py-12 sm:py-16 md:py-24 relative overflow-hidden">
      <Container className="h-full flex items-center justify-center w-full">
        <div className="w-full max-w-lg relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-5 sm:p-8 backdrop-blur-2xl">
                  <div className="text-center mb-6">
                    <SectionHeading className="text-2xl sm:text-3xl mb-2">Reserve Your Date</SectionHeading>
                    <p className="text-zinc-400 font-light text-xs sm:text-sm">
                      Share your details, and we'll connect within 24 hours to begin your journey.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Name */}
                      <div className="relative group">
                        <input 
                          required 
                          type="text" 
                          id="name" 
                          autoComplete="name"
                          className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all placeholder-transparent shadow-inner" 
                          placeholder="Anjali Reddy" 
                        />
                        <label htmlFor="name" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text">Name</label>
                      </div>
                      
                      {/* Phone */}
                      <div className="relative group">
                        <input 
                          required 
                          type="tel" 
                          id="phone" 
                          inputMode="tel"
                          autoComplete="tel"
                          className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all placeholder-transparent shadow-inner" 
                          placeholder="+91 98765 43210" 
                        />
                        <label htmlFor="phone" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text">Phone</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      {/* Date */}
                      <div className="relative group">
                        <input 
                          required 
                          type="date" 
                          id="date" 
                          className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all shadow-inner [color-scheme:dark]" 
                        />
                        <label htmlFor="date" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-focus:text-amber-400 cursor-text">Event Date</label>
                      </div>

                      {/* Location */}
                      <div className="relative group">
                        <input 
                          required 
                          type="text" 
                          id="location" 
                          className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all placeholder-transparent shadow-inner" 
                          placeholder="Venue or City" 
                        />
                        <label htmlFor="location" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text">Location</label>
                      </div>
                    </div>

                    {/* Event Type */}
                    <div className="relative group">
                      <select 
                        required 
                        id="event" 
                        defaultValue=""
                        className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-zinc-500">Select event...</option>
                        <option value="bridal" className="bg-[#17171C] text-white">Bridal Makeup</option>
                        <option value="engagement" className="bg-[#17171C] text-white">Engagement</option>
                        <option value="reception" className="bg-[#17171C] text-white">Reception</option>
                        <option value="party" className="bg-[#17171C] text-white">Party Makeup</option>
                      </select>
                      <label htmlFor="event" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-focus:text-amber-400 cursor-pointer">Event Type</label>
                      
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <textarea 
                        id="message" 
                        rows={2} 
                        className="peer w-full bg-[#17171C]/90 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-base md:text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 focus:bg-[#1A1D24] transition-all placeholder-transparent shadow-inner resize-none" 
                        placeholder="Tell us about your vision..."
                      ></textarea>
                      <label htmlFor="message" className="absolute left-4 top-2 text-[10px] text-zinc-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-400 cursor-text">Message</label>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full mt-3 py-3.5 sm:py-4 font-medium text-sm rounded-xl transition-all bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] shadow-[0_0_15px_rgba(245,158,11,0.25)] active:scale-[0.98]"
                    >
                      <span className="relative z-10">Submit Inquiry</span>
                    </button>
                  </form>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center h-full"
              >
                <GlassCard className="p-8 sm:p-12 text-center max-w-md w-full border-amber-300/30">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-amber-400/10 flex items-center justify-center text-amber-300 mb-6">
                    <CalendarCheck size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-white font-medium mb-3">Request Received</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6 leading-relaxed">
                    Thank you for reaching out. Our team is reviewing your availability and will be in touch shortly to confirm your date.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs sm:text-sm text-zinc-400 hover:text-white underline transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </Container>
    </SlideSection>
  );
};

export default AppointmentSlide;
