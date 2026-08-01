import React from 'react';

const SlideProgressIndicator = ({ total, current }) => {
  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-50 pointer-events-none">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-amber-400 scale-125 shadow-[0_0_8px_#f59e0b]' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
};

export default SlideProgressIndicator;
