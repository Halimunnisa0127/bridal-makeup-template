import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import bride1 from '../assets/images/bride1.png';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles, Star, Award } from 'lucide-react';

const HeroSlide = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  // Animation variants - Smooth and minimal
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.15, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <SlideSection className="relative min-h-[100dvh] flex flex-col justify-end lg:justify-center items-center overflow-hidden bg-[#0A0A0E]">
      
      {/* Background Luxury Gradients & Image Glow (Optimized for performance on mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[5%] w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-orange-500/15 rounded-full blur-[60px] md:blur-[120px] animate-pulse" />
        <div className="hidden sm:block absolute top-1/3 right-[15%] w-[350px] h-[350px] bg-amber-400/20 rounded-full blur-[90px]" />
      </div>

      {/* Hero Image Section (Full background on mobile, right column on desktop) */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 lg:left-auto lg:right-0 w-full lg:w-[50%] h-full z-0 flex items-center justify-center overflow-hidden"
      >
        {/* Glow Aura Ring behind the image */}
        <div className="absolute w-[80%] h-[80%] bg-gradient-to-r from-amber-500/25 via-yellow-400/15 to-amber-600/25 rounded-full blur-[50px] md:blur-[100px] pointer-events-none" />

        <div className="relative w-full h-full overflow-hidden">
          <motion.img 
            src={bride1} 
            alt="Luxury South Indian Bridal Portrait"
            loading="eager"
            decoding="async"
            animate={{ scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-full h-full object-cover object-top origin-top brightness-[1.1] contrast-[1.05] saturate-[1.05] drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]"
          />
          
          {/* Gradient Overlays: Bottom fade on mobile for text readability; Left & Bottom fade on desktop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/60 to-transparent lg:hidden z-10 pointer-events-none" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0A0A0E] via-[#0A0A0E]/60 to-transparent z-10 pointer-events-none" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent z-10 pointer-events-none" />

          {/* Golden floating luxury sparkle particles (desktop only for mobile performance) */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block absolute top-[25%] left-[25%] w-2.5 h-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fde047] z-20"
          />
          <motion.div
            animate={{ y: [0, 25, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:block absolute bottom-[35%] right-[25%] w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_15px_#f59e0b] z-20"
          />
        </div>
      </motion.div>

      <Container className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full pt-28 pb-10 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-20 min-h-[100dvh] lg:min-h-0">
        {/* Main Content (Overlays over image on mobile) */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-6">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white font-light tracking-tight text-balance leading-[1.18] drop-shadow-lg"
            >
              Radiance Rooted in <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Tradition.</span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-200 max-w-2xl font-light leading-relaxed tracking-wide opacity-95 drop-shadow-md"
            >
              Elevating South Indian bridal elegance with editorial precision. A signature fusion of timeless Telugu heritage and modern luxury aesthetics.
            </motion.p>
          </div>
          
          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6"
          >
            {/* Book Appointment CTA */}
            <motion.a 
              href="#appointment"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center min-h-[48px] px-7 py-3.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] font-medium text-base rounded-full shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all duration-300 text-center"
            >
              <span className="relative z-10 tracking-wide">Book Appointment</span>
            </motion.a>
            
            {/* WhatsApp CTA */}
            <motion.a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 min-h-[48px] px-7 py-3.5 bg-black/40 backdrop-blur-md text-white font-medium text-base rounded-full border border-white/20 hover:border-white/40 active:bg-white/10 transition-all duration-300 group overflow-hidden shadow-lg"
            >
              <FaWhatsapp className="relative z-10 text-xl text-green-400 group-hover:text-green-300 transition-colors drop-shadow-md" />
              <span className="relative z-10 tracking-wide">Contact on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3.5 sm:gap-6 lg:gap-8 pt-4 border-t border-white/10 mt-2"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/15 shrink-0 shadow-md">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </div>
              <span className="text-zinc-200 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wider drop-shadow-md">500+ Happy Brides</span>
            </div>
            
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-500/50" />
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/15 shrink-0 shadow-md">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </div>
              <span className="text-zinc-200 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wider drop-shadow-md">Premium Products</span>
            </div>
            
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-amber-500/50" />
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/15 shrink-0 shadow-md">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </div>
              <span className="text-zinc-200 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-wider drop-shadow-md">Certified Artist</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default HeroSlide;