import React from 'react';

const SlideSection = ({ children, className = '' }) => {
  return (
    <section className={`h-[100dvh] min-h-screen snap-start snap-always relative flex flex-col overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default SlideSection;
