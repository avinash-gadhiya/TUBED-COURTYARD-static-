import React from 'react';

export default function Card({ children, className = '', hoverEffect = true, ...props }) {
  return (
    <div
      className={`bg-surface-low border border-outline-variant/35 rounded-lg p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:border-primary/20 hover:shadow-md' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
