import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop = ({ show }) => {
  const scrollToTop = () => {
    const main = document.querySelector('main');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/10 bg-slate-950/80 backdrop-blur-md flex items-center justify-center text-zinc-300 hover:text-white active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp size={20} className="sm:hidden" />
          <ChevronUp size={24} className="hidden sm:block" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
