import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed lg:absolute top-0 left-0 right-0 z-50 bg-slate-950/80 md:bg-slate-950/60 backdrop-blur-md border-b border-white/10 pt-[env(safe-area-inset-top,0px)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="text-lg sm:text-xl font-medium tracking-tighter text-white flex items-center gap-1.5 focus-visible:outline-none">
          <span>SIRI</span>
          <span className="text-amber-400 font-semibold">MUA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-zinc-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-white transition-colors py-2 focus-visible:outline-none focus-visible:text-amber-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Hamburger Toggle */}
        <div className="flex items-center gap-3">
          <a 
            href="#appointment" 
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm rounded-full font-medium text-slate-950 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 hover:scale-[1.02] active:scale-95 transition-transform duration-300 inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
          >
            <Calendar size={14} className="hidden sm:inline-block" />
            <span>Book Now</span>
          </a>

          {/* Mobile Menu Toggle Button (44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl overflow-hidden px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base text-zinc-200 hover:text-amber-400 py-2.5 border-b border-white/5 flex items-center justify-between active:text-amber-300 transition-colors"
                >
                  <span>{link.name}</span>
                  <Sparkles size={14} className="text-amber-400/50" />
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#appointment"
                  onClick={closeMenu}
                  className="w-full text-center py-3 text-sm font-medium rounded-xl text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 block shadow-lg active:scale-[0.98] transition-transform"
                >
                  Reserve Appointment Date
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
