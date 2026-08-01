import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SlideSection from './SlideSection';
import Container from './Container';
import bride1 from '../assets/images/bride1.png';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles, Star, Award } from 'lucide-react';

const HeroSlide = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 250]);

  // Animation variants - Smooth and minimal
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
      
      {/* Background Luxury Gradients & Image Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/20 via-amber-300/15 to-orange-500/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 right-[10%] w-[450px] h-[450px] bg-amber-400/15 rounded-full blur-[110px]" />
      </div>

      {/* Hero Image Section with Gold Ambient Glow & Soft Curved Edge Blend */}
      <motion.div 
        style={{ y }}
        className="absolute inset-y-0 right-0 w-full lg:w-[62%] z-0 flex items-center justify-center overflow-hidden"
      >
        {/* Glow Aura Ring behind the image */}
        <div className="absolute w-[80%] h-[80%] bg-gradient-to-r from-amber-500/25 via-yellow-400/20 to-amber-600/25 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative w-full h-full">
          <motion.img 
            src={bride1} 
            alt="Luxury South Indian Bridal Portrait"
            animate={{ scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="w-full h-full object-cover object-top origin-top drop-shadow-[0_0_50px_rgba(245,158,11,0.15)]"
          />
          
          {/* Seamless Curved Soft Fade Overlay (No straight lines) */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#0A0A0E] via-[#0A0A0E]/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0A0E] to-transparent z-10 pointer-events-none" />

          {/* Golden floating luxury sparkle particles */}
          <motion.div
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[45%] w-2.5 h-2.5 rounded-full bg-amber-200 shadow-[0_0_12px_#fde047] z-20"
          />
          <motion.div
            animate={{ y: [0, 25, 0], opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[35%] right-[20%] w-3 h-3 rounded-full bg-amber-300 shadow-[0_0_15px_#f59e0b] z-20"
          />
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[45%] right-[10%] w-2 h-2 rounded-full bg-amber-100 shadow-[0_0_10px_#fff] z-20"
          />
        </div>
      </motion.div>

      <Container className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full pt-32 pb-16 lg:pt-20 lg:pb-20">
        {/* Main Content */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <motion.h1 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-3xl md:text-5xl lg:text-[3.5rem] text-white font-light tracking-tight text-balance leading-[1.15] drop-shadow-md"
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
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6"
          >
            {/* Book Appointment: Luxury gold gradient & glow */}
            <motion.a 
              href="#appointment"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] font-medium text-base md:text-lg rounded-full overflow-hidden shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-all duration-300"
            >
              <span className="relative z-10 tracking-wide">Book Appointment</span>
            </motion.a>
            
            {/* WhatsApp: Glass button with icon */}
            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="relative flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md text-white font-medium text-base md:text-lg rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
              <FaWhatsapp className="relative z-10 text-2xl text-green-400 group-hover:text-green-300 transition-colors drop-shadow-md" />
              <span className="relative z-10 tracking-wide">Contact on WhatsApp</span>
            </motion.button>
          </motion.div>

          {/* Trust Badges - Improved Spacing & Icons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8 mt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Star className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-zinc-300 text-xs md:text-sm font-medium uppercase tracking-wider">500+ Happy Brides</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-zinc-300 text-xs md:text-sm font-medium uppercase tracking-wider">Premium Products</span>
            </div>
            
            <div className="hidden sm:block w-px h-6 bg-white/10" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-zinc-300 text-xs md:text-sm font-medium uppercase tracking-wider">Certified Artist</span>
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
