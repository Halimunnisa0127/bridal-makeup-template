import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import { PrimaryButton, SecondaryButton } from './ButtonVariants';
import GlassCard from './GlassCard';
import sareeImage from '../assets/images/saree.jpg';

const HeroSlide = () => {
  const { scrollY } = useScroll();
  // We use scrollY to create a subtle parallax for the hero image
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <SlideSection className="relative overflow-hidden justify-center pt-20 bg-slate-950">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute top-24 right-0 bottom-0 w-full lg:w-[45%] z-0 opacity-30 lg:opacity-100"
      >
        {/* Fade smoothly into the dark background (Left edge fade on desktop) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent z-10 hidden lg:block" />
        {/* Bottom edge fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
        <img 
          src={sareeImage} 
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
