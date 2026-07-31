import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import { PrimaryButton, SecondaryButton } from './ButtonVariants';
import GlassCard from './GlassCard';
import bride3  from '../assets/images/bride3.jpg';

const HeroSlide = () => {
  const { scrollY } = useScroll();
  // We use scrollY to create a subtle parallax for the hero image
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <SlideSection className="relative overflow-hidden justify-center bg-slate-950">
      {/* Background Champagne Glow / Light Bloom */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-[60%] h-[120%] bg-[#e3cd81]/15 rounded-[100%] blur-[120px] z-0 pointer-events-none" />

      {/* Background Image with Parallax and Soft Mask */}
      <motion.div 
        style={{ 
          y,
          maskImage: 'linear-gradient(to right, transparent, black 30%, black)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%, black)'
        }}
        className="absolute inset-y-0 right-0 w-full lg:w-[50%] z-0"
      >
        <img 
          src={bride3} 
          alt="Luxury South Indian Bridal Portrait"
          className="w-full h-full object-cover object-[center_top]"
        />
      </motion.div>

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight text-balance leading-[1.1]"
          >
            Radiance Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Tradition</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-zinc-300 max-w-2xl font-light"
          >
            Elevating South Indian bridal elegance with editorial precision. A signature fusion of timeless Telugu heritage and modern luxury aesthetics.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <PrimaryButton>Book Appointment</PrimaryButton>
            <SecondaryButton>Contact on WhatsApp</SecondaryButton>
          </motion.div>
        </div>


      </Container>
    </SlideSection>
  );
};

export default HeroSlide;
