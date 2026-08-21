import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="relative pt-32 pb-16 bg-surface-low border-b border-outline-variant/20 overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center space-x-2 text-xs font-medium uppercase tracking-wider text-text-secondary mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <span className="text-outline-variant">/</span>
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-primary transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-primary font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
        
        <h1 className="text-3xl md:text-5xl font-serif text-primary mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
