import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] left-4 sm:bottom-6 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-tr from-green-500 to-green-400 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} className="sm:hidden" />
      <MessageCircle size={28} className="hidden sm:block" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
