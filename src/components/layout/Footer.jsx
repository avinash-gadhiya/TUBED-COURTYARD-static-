import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo/logo-image.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-surface-lowest border-t border-outline-variant/30 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Tubed Courtyard Logo" className="h-10 w-10 object-contain rounded-full bg-primary/5 p-1" />
              <h3 className="font-serif text-2xl text-primary tracking-tight">
                Tubed Courtyard
              </h3>
            </div>
            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
              Redefining the architecture of dining through organic forms, mathematical circular booth layouts, and rich botanical heritage.
            </p>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary">
              Explore
            </h4>
            <Link to="/experience" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Experience
            </Link>
            <Link to="/menu" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Menu
            </Link>
            <Link to="/our-story" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Our Story
            </Link>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Botanical Gardens
            </a>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary">
              Connect
            </h4>
            <Link to="/contact" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Contact Us
            </Link>
            <a href="https://www.instagram.com/tubed_courtyardd?igsh=c3UyZnJqM3Awdjlh" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Instagram
            </a>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Careers
            </a>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Press Kit
            </a>
          </div>

          {/* Legal Info */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-primary">
              Legal
            </h4>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
              Accessibility
            </a>
            <div className="pt-4 border-t border-outline-variant/25">
              <p className="text-text-secondary text-xs">
                &copy; {currentYear} Tubed Courtyard. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
