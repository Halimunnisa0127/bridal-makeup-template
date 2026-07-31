import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import bride1 from '../assets/images/bride1.png';

const HeroSlide = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1, 
      y: 0,
      transition: { duration: 1, delay: custom * 0.2, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <SlideSection className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0E]">
      
      {/* Background Luxury Gradients (Deep Navy, Soft Black, Warm Brown) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep Navy/Soft Black base is the bg-[#0A0A0E] */}
        {/* Warm Brown / Gold glow near image */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] bg-[#5C4033]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-[#8B6508]/5 rounded-full blur-[120px]" />
        {/* Luxury Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,14,0.7)_100%)] z-10" />
      </div>

      {/* Hero Image with Ken Burns & Gradient Mask */}
      <motion.div 
        style={{ y }}
        className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 overflow-hidden"
      >
        <motion.img 
          src={bride1} 
          alt="Luxury South Indian Bridal Portrait"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          // Object-top helps keep the face visible when zooming out slightly
          className="w-full h-full object-cover object-top scale-100"
        />
        {/* Gradient to smoothly blend the left edge of the image into the background without darkening the whole image */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0A0A0E] to-transparent z-10 pointer-events-none" />        
        {/* Subtle decorative floating sparkle */}
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[30%] left-[30%] w-2 h-2 rounded-full bg-amber-200 blur-[2px] z-20"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[40%] right-[20%] w-1.5 h-1.5 rounded-full bg-amber-100 blur-[1px] z-20"
        />
      </motion.div>

      <Container className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-8">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight text-balance leading-[1.05]"
            >
              Radiance Rooted in <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Tradition.</span>
            </motion.h1>
            
            <motion.p 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base md:text-lg lg:text-xl text-zinc-300 max-w-2xl font-light leading-relaxed tracking-wide opacity-90"
            >
              Elevating South Indian bridal elegance with editorial precision. A signature fusion of timeless Telugu heritage and modern luxury aesthetics.
            </motion.p>
          </div>
          
          <motion.div 
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Book Appointment: Luxury gold gradient */}
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] font-medium text-base md:text-lg rounded-full overflow-hidden shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/40 transition-all duration-300"
            >
              <span className="relative z-10 tracking-wide">Book Appointment</span>
            </motion.button>
            
            {/* WhatsApp: Glass button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-medium text-base md:text-lg rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle border shine animation */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10 tracking-wide">Contact on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 pt-6 mt-4 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm md:text-base">⭐</span>
              <span className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">500+ Happy Brides</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm md:text-base">💄</span>
              <span className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">Premium Products</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-amber-400 text-sm md:text-base">🏆</span>
              <span className="text-zinc-400 text-sm md:text-base font-medium uppercase tracking-wider">Certified Artist</span>
            </div>
          </motion.div>

        </div>
      </Container>

      {/* Shimmer CSS for Glass Button */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(150%);
          }
        }
      `}</style>
    </SlideSection>
  );
};

export default HeroSlide;
