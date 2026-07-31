import React from 'react';

const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:border-white/20 transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;
