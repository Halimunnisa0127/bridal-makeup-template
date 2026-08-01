import React from 'react';

const SlideSection = ({ children, className = '', ...props }) => {
  return (
    <section className={`h-[100dvh] min-h-screen snap-start snap-always relative flex flex-col overflow-hidden ${className}`} {...props}>
      {children}
    </section>
  );
};

export default SlideSection;
