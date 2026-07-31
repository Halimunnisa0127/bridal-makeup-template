import React from 'react';
import { motion } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import bride2 from "../assets/images/bride2.jpg"
const AboutSlide = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="about" className="justify-center py-24 md:py-6 overflow-hidden relative">
      <Container className="h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full items-center">
          
          {/* Portrait Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="relative h-[50vh] lg:h-[80vh] rounded-3xl overflow-hidden group lg:-mt-3"
          >
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-700 z-10" />
            <img 
              src={bride2}
              alt="Siri - Lead Makeup Artist"
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              loading="lazy"
            />
            
            <div className="absolute bottom-8 left-8 right-8 z-20">
              <GlassCard className="p-2 backdrop-blur-xl bg-slate-950/40 border-white/10 hover:border-white/20">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-3xl text-white font-medium">12+</div>
                    <div className="text-sm text-zinc-400">Years Experience</div>
                  </div>
                  <div className="h-10 w-px bg-gradient-to-b from-transparent via-zinc-400 to-transparent" />
                  <div>
                    <div className="text-3xl text-white font-medium">500+</div>
                    <div className="text-sm text-zinc-400">Happy Brides</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col justify-center space-y-12"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <SectionHeading className="text-4xl md:text-4xl">The Visionary Behind the Brush</SectionHeading>
              <p className="text-md text-zinc-300 font-light leading-relaxed">
                As a certified luxury makeup artist, Siri blends traditional South Indian aesthetics with modern, editorial precision. 
                Her philosophy is simple: enhance, never mask. Every brushstroke is tailored to reflect your unique persona on your most important day.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <h3 className="text-xl text-white font-medium tracking-tight border-b border-white/10 pb-2">Premium Toolkit</h3>
              <div className="flex flex-wrap gap-4 text-zinc-400 text-sm">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Charlotte Tilbury</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Dior Beauty</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">NARS</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">Armani</span>
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5">MAC Cosmetics</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              <h3 className="text-xl text-white font-medium tracking-tight border-b border-white/10 pb-2">Journey</h3>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-500 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                  <div>
                    <div className="text-white font-medium">Master Certification</div>
                    <div className="text-sm text-zinc-400">London School of Makeup (2018)</div>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-500 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                  <div>
                    <div className="text-white font-medium">Awarded Best Bridal MUA</div>
                    <div className="text-sm text-zinc-400">South India Beauty Awards (2022)</div>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default AboutSlide;
