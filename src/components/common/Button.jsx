import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-sans text-sm font-semibold tracking-wide rounded transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-sm",
    secondary: "border border-primary text-primary hover:bg-primary/5",
    outline: "border border-outline text-text-primary hover:bg-surface-low",
    ghost: "text-text-primary hover:bg-surface-low",
    danger: "bg-error text-white hover:bg-error/90 focus:ring-error",
  };

  const sizes = "px-6 py-3";

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
