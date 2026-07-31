import React from 'react';

const SectionHeading = ({ children, className = '' }) => {
  return (
    <h2 className={`text-balance font-medium tracking-tight text-white ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
