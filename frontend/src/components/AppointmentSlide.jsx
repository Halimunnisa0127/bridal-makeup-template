import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { PrimaryButton } from './ButtonVariants';

const AppointmentSlide = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <SlideSection id="appointment" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex items-center justify-center">
        <div className="w-full max-w-lg relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-6 md:p-8 backdrop-blur-2xl">
                  <div className="text-center mb-6">
                    <SectionHeading className="text-2xl md:text-3xl mb-2">Reserve Your Date</SectionHeading>
                    <p className="text-zinc-400 font-light text-xs">
                      Share your details, and we'll connect within 24 hours to begin your journey.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="relative group">
                        <input required type="text" id="name" className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 placeholder-transparent shadow-inner" placeholder="Anjali Reddy" />
                        <label htmlFor="name" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500/80 cursor-text">Name</label>
                      </div>
                      
                      {/* Phone */}
                      <div className="relative group">
                        <input required type="tel" id="phone" className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 placeholder-transparent shadow-inner" placeholder="+91 98765 43210" />
                        <label htmlFor="phone" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500/80 cursor-text">Phone</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Date */}
                      <div className="relative group">
                        <input required type="date" id="date" className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 shadow-inner [color-scheme:dark]" />
                        <label htmlFor="date" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-focus:text-amber-500/80 cursor-text">Event Date</label>
                      </div>

                      {/* Location */}
                      <div className="relative group">
                        <input required type="text" id="location" className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 placeholder-transparent shadow-inner" placeholder="Venue or City" />
                        <label htmlFor="location" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500/80 cursor-text">Location</label>
                      </div>
                    </div>

                    {/* Event Type */}
                    <div className="relative group">
                      <select required id="event" className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 shadow-inner appearance-none cursor-pointer">
                        <option value="" disabled selected className="text-zinc-500">Select event...</option>
                        <option value="bridal" className="bg-[#17171C] text-white">Bridal Makeup</option>
                        <option value="engagement" className="bg-[#17171C] text-white">Engagement</option>
                        <option value="reception" className="bg-[#17171C] text-white">Reception</option>
                        <option value="party" className="bg-[#17171C] text-white">Party Makeup</option>
                      </select>
                      <label htmlFor="event" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-focus:text-amber-500/80 cursor-pointer">Event Type</label>
                      
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 peer-focus:text-amber-500/80 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative group">
                      <textarea id="message" rows={2} className="peer w-full bg-[#17171C]/80 border border-white/5 rounded-xl px-4 pt-6 pb-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/40 focus:bg-[#1A1D24]/80 transition-all duration-500 placeholder-transparent shadow-inner resize-none" placeholder="Tell us about your vision..."></textarea>
                      <label htmlFor="message" className="absolute left-4 top-2 text-[10px] text-zinc-500 uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-placeholder-shown:text-zinc-500 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-amber-500/80 cursor-text">Message</label>
                    </div>

                    <button type="submit" className="w-full mt-4 py-3.5 font-medium text-sm rounded-xl transition-all duration-500 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:border-amber-400/50 transform hover:-translate-y-1 relative overflow-hidden">
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
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="flex items-center justify-center h-full"
              >
                <GlassCard className="p-12 text-center max-w-md w-full border-amber-300/30">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-20 h-20 mx-auto rounded-full bg-amber-400/10 flex items-center justify-center text-amber-300 mb-6"
                  >
                    <CalendarCheck size={32} />
                  </motion.div>
                  <h3 className="text-3xl text-white font-medium mb-4">Request Received</h3>
                  <p className="text-zinc-400 font-light mb-8">
                    Thank you for reaching out. Our team is reviewing your availability and will be in touch shortly to confirm your date.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
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
