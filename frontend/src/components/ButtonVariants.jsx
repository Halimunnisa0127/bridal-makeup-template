import React from 'react';

export const PrimaryButton = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`px-8 py-4 rounded-full font-medium text-slate-950 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 hover:scale-[1.02] transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, className = '', ...props }) => {
  return (
    <button 
      className={`px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
