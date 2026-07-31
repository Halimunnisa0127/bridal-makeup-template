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
        <div className="w-full max-w-2xl relative">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-8 md:p-12 backdrop-blur-2xl">
                  <div className="text-center mb-8">
                    <SectionHeading className="text-3xl md:text-4xl mb-3">Reserve Your Date</SectionHeading>
                    <p className="text-zinc-400 font-light text-sm">
                      Share your details, and we'll connect within 24 hours to begin your journey.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-400 uppercase tracking-widest">Name</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors" placeholder="Anjali Reddy" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-400 uppercase tracking-widest">Phone</label>
                        <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors" placeholder="+91 98765 43210" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-400 uppercase tracking-widest">Event Date</label>
                        <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors [color-scheme:dark]" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-zinc-400 uppercase tracking-widest">Location</label>
                        <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors" placeholder="Venue or City" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-400 uppercase tracking-widest">Event Type</label>
                      <select required className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors appearance-none">
                        <option value="" disabled selected className="text-zinc-500">Select event...</option>
                        <option value="bridal" className="bg-slate-900 text-white">Bridal Makeup</option>
                        <option value="engagement" className="bg-slate-900 text-white">Engagement</option>
                        <option value="reception" className="bg-slate-900 text-white">Reception</option>
                        <option value="party" className="bg-slate-900 text-white">Party Makeup</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs text-zinc-400 uppercase tracking-widest">Message</label>
                      <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-300/50 transition-colors resize-none" placeholder="Tell us about your vision..."></textarea>
                    </div>

                    <PrimaryButton type="submit" className="w-full py-4 text-sm mt-4">
                      Submit Inquiry
                    </PrimaryButton>
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
