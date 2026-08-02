import React from 'react';
import { motion } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import bride3 from "../assets/images/bride3.jpg";
import { Sparkles, Award } from 'lucide-react';

const AboutSlide = () => {
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="about" className="justify-center py-8 sm:py-12 md:py-16 lg:py-6 xl:py-16 overflow-hidden relative bg-[#0A0A0E]">
      {/* Subtle Background Glow (Desktop optimized) */}
      <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-[#5C4033]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="h-full flex items-center justify-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 xl:gap-16 h-full items-center w-full">
          
          {/* Portrait Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:col-span-5 relative h-[340px] sm:h-[380px] lg:h-[55vh] xl:h-[65vh] max-h-[460px] lg:max-h-[400px] xl:max-h-[480px] rounded-2xl sm:rounded-[2rem] overflow-hidden group shrink-0"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/90 via-[#0A0A0E]/20 to-transparent z-10" />
            <img 
              src={bride3}
              alt="Sri - Lead Makeup Artist"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[center_15%] scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
            />
            
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-6 sm:left-6 sm:right-6 z-20">
              <GlassCard className="py-1 px-3 sm:p-5 lg:p-3 xl:p-5 backdrop-blur-md md:backdrop-blur-xl bg-[#0A0A0E]/85 sm:bg-[#0A0A0E]/70 border-white/10 shadow-2xl">
                <div className="flex justify-around items-center">
                  <div className="text-center px-1">
                    <div className="text-sm sm:text-3xl lg:text-2xl xl:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-600 tracking-tight">12+</div>
                    <div className="text-[8px] sm:text-xs text-zinc-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium">Years Exp.</div>
                  </div>
                  <div className="h-4 sm:h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <div className="text-center px-1">
                    <div className="text-sm sm:text-3xl lg:text-2xl xl:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-600 tracking-tight">500+</div>
                    <div className="text-[8px] sm:text-xs text-zinc-400 uppercase tracking-[0.1em] sm:tracking-[0.2em] font-medium">Happy Brides</div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={stagger}
            className="lg:col-span-7 flex flex-col justify-center space-y-4 sm:space-y-8 lg:space-y-4 xl:space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-2 sm:space-y-4 lg:space-y-2 xl:space-y-4">
              <SectionHeading className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl tracking-tight text-white/90">
                The Artist's <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Journey</span>
              </SectionHeading>
              <p className="text-xs sm:text-base md:text-lg lg:text-xs xl:text-lg text-zinc-300 font-light leading-relaxed tracking-wide opacity-90 max-w-2xl">
                Hi, I'm SriUma. For over a decade, I've dedicated myself to the art of luxury bridal makeup. My approach blends the rich, timeless aesthetics of South Indian heritage with a modern, editorial edge. I believe in enhancing your natural radiance—creating a signature look that feels authentically you.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 lg:gap-4 pt-1">
              <motion.div variants={fadeUp} className="bg-white/[0.03] p-4 sm:p-6 lg:p-4 xl:p-7 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-amber-500/20 transition-all duration-500 group">
                <div className="w-8 h-8 sm:w-11 sm:h-11 lg:w-9 lg:h-9 xl:w-12 xl:h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2 sm:mb-4 lg:mb-2 xl:mb-5">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-xl lg:text-base xl:text-xl text-white font-medium tracking-wide mb-1 sm:mb-2 lg:mb-1 xl:mb-3">Premium Toolkit</h3>
                <p className="text-[11px] sm:text-xs xl:text-sm text-zinc-400 leading-relaxed font-light">
                  Curated luxury products from <span className="text-zinc-200">Charlotte Tilbury, Dior, NARS, Armani,</span> and <span className="text-zinc-200">MAC Cosmetics</span> to ensure a flawless, camera-ready finish.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white/[0.03] p-4 sm:p-6 lg:p-4 xl:p-7 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-amber-500/20 transition-all duration-500 group">
                <div className="w-8 h-8 sm:w-11 sm:h-11 lg:w-9 lg:h-9 xl:w-12 xl:h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-2 sm:mb-4 lg:mb-2 xl:mb-5">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                </div>
                <h3 className="text-base sm:text-xl lg:text-base xl:text-xl text-white font-medium tracking-wide mb-1 sm:mb-2 lg:mb-1 xl:mb-3">Certifications</h3>
                <div className="space-y-2 lg:space-y-1.5 xl:space-y-3">
                  <div>
                    <div className="text-zinc-200 font-medium text-xs sm:text-sm lg:text-xs xl:text-sm">Master MUA</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs mt-0.5">London School of Makeup (2018)</div>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div>
                    <div className="text-zinc-200 font-medium text-xs sm:text-sm lg:text-xs xl:text-sm">Best Bridal Artist</div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs mt-0.5">South India Beauty Awards (2022)</div>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default AboutSlide;
