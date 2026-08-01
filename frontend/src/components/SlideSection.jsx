import React from 'react';

const SlideSection = ({ children, className = '', ...props }) => {
  return (
    <section className={`w-full h-auto lg:h-[100dvh] lg:min-h-screen lg:snap-start lg:snap-always relative flex flex-col overflow-visible lg:overflow-hidden ${className}`} {...props}>
      {children}
    </section>
  );
};

export default SlideSection;
