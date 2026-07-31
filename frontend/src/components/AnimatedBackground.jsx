import React from 'react';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]"></div>
      {/* Noise overlay could be added here, e.g. bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay */}
      {children}
    </div>
  );
};

export default AnimatedBackground;
