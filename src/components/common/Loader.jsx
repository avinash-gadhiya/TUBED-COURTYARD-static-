import React from 'react';

export default function Loader({ size = 'medium', className = '' }) {
  const sizes = {
    small: 'h-5 w-5 border-2',
    medium: 'h-8 w-8 border-2',
    large: 'h-12 w-12 border-3',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizes[size]} animate-spin rounded-full border-t-primary border-r-transparent border-b-transparent border-l-transparent`}
        style={{ borderWidth: size === 'large' ? '3px' : '2px' }}
      />
    </div>
  );
}
