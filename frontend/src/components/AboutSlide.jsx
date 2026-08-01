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
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="about" className="justify-center py-24 md:py-12 overflow-hidden relative bg-[#0A0A0E]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-[#5C4033]/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="h-full flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 h-full items-center">
          
          {/* Portrait Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, scale: 0.95, x: -20 },
              visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="lg:col-span-5 relative h-[60vh] lg:h-[75vh] rounded-[2rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E]/80 via-[#0A0A0E]/20 to-transparent z-10" />
            <img 
              src={bride3}
              alt="Siri - Lead Makeup Artist"
              className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
              loading="lazy"
            />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <GlassCard className="p-6 backdrop-blur-xl bg-[#0A0A0E]/60 border-white/10 group-hover:border-amber-500/30 transition-all duration-500 shadow-2xl">
                <div className="flex justify-around items-center">
                  <div className="text-center px-2">
                    <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-600 mb-1 tracking-tight">12+</div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-[0.2em] font-medium">Years Exp.</div>
                  </div>
                  <div className="h-12 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <div className="text-center px-2">
                    <div className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-600 mb-1 tracking-tight">500+</div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-[0.2em] font-medium">Happy Brides</div>
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
            className="lg:col-span-7 flex flex-col justify-center space-y-12"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <SectionHeading className="text-4xl lg:text-5xl tracking-tight text-white/90">
                The Artist's <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Journey</span>
              </SectionHeading>
              <p className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed tracking-wide opacity-90 max-w-2xl">
                Hi, I'm Siri. For over a decade, I've dedicated myself to the art of luxury bridal makeup. My approach blends the rich, timeless aesthetics of South Indian heritage with a modern, editorial edge. I believe in enhancing your natural radiance—creating a signature look that feels authentically you.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <motion.div variants={fadeUp} className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl text-white font-medium tracking-wide mb-3">Premium Toolkit</h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Curated luxury products from <span className="text-zinc-200">Charlotte Tilbury, Dior, NARS, Armani,</span> and <span className="text-zinc-200">MAC Cosmetics</span> to ensure a flawless, camera-ready finish.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-amber-500/20 hover:bg-white/[0.05] transition-all duration-500 group">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl text-white font-medium tracking-wide mb-3">Certifications</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-zinc-200 font-medium text-sm">Master MUA</div>
                    <div className="text-zinc-500 text-xs mt-1">London School of Makeup (2018)</div>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <div>
                    <div className="text-zinc-200 font-medium text-sm">Best Bridal Artist</div>
                    <div className="text-zinc-500 text-xs mt-1">South India Beauty Awards (2022)</div>
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
