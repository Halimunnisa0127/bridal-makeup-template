import React from 'react';
import { PrimaryButton } from './ButtonVariants';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <div className="text-xl font-medium tracking-tighter text-white">
          SIRI<span className="text-zinc-500">MUA</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
        </div>
        <PrimaryButton className="px-5 py-2.5 text-sm">
          Book Appointment
        </PrimaryButton>
      </div>
    </motion.nav>
  );
};

export default Navbar;
