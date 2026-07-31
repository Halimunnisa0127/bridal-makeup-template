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
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-tr from-green-500 to-green-400 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 transition-all animate-slow-float"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={28} />
    </motion.a>
  );
};

export default FloatingWhatsApp;
