import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, className = '' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-text-primary/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-background border border-outline-variant/50 rounded-xl shadow-xl w-full max-w-lg p-6 overflow-hidden z-10 transition-transform duration-300 scale-100 ${className}`}>
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-4">
          <h3 className="font-serif text-xl font-medium text-primary">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-low transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
