import React from 'react';

export default function Textarea({ label, error, className = '', rows = 4, ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`w-full bg-surface-low border-b-2 ${
          error ? 'border-error' : 'border-outline-variant hover:border-outline'
        } focus:border-primary px-3 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/50 outline-none transition-colors duration-250 resize-none`}
        {...props}
      />
      {error && (
        <span className="text-xs text-error font-medium mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
