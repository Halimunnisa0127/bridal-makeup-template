import React from 'react';

const FloatingBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/10 rounded-full blur-[100px] animate-drift-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-[30rem] h-[30rem] bg-zinc-600/10 rounded-full blur-[120px] animate-drift-slower"></div>
    </div>
  );
};

export default FloatingBlobs;
