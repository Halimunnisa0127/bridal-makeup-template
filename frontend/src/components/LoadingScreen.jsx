import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 second luxury load
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl font-medium tracking-widest text-white mb-8"
      >
        SIRI<span className="text-zinc-500">MUA</span>
      </motion.div>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-zinc-400 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
