import React from 'react';

export default function Select({ label, error, options = [], className = '', ...props }) {
  return (
    <div className={`flex flex-col space-y-1.5 w-full ${className}`}>
      {label && (
        <label className="text-xs font-bold uppercase tracking-wider text-text-secondary font-sans">
          {label}
        </label>
      )}
      <select
        className={`w-full bg-surface-low border-b-2 ${
          error ? 'border-error' : 'border-outline-variant hover:border-outline'
        } focus:border-primary px-3 py-2.5 text-sm text-text-primary outline-none transition-colors duration-250 cursor-pointer`}
        {...props}
      >
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value} className="bg-background text-text-primary">
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="text-xs text-error font-medium mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
