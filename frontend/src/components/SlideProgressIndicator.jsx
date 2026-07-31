import React from 'react';

const SlideProgressIndicator = ({ total, current }) => {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <div 
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-125' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
};

export default SlideProgressIndicator;
