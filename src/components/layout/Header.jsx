import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { menuConfig } from '../../config/menuConfig';
import logoImg from '../../assets/logo/logo-image.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Determine if header should use light text (when overlaying dark home hero before scroll)
  const isDarkBackground = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'py-3 bg-background/95 shadow-sm border-b border-outline-variant/30 backdrop-blur-md'
          : 'py-5 bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 flex items-center justify-center overflow-hidden rounded-full bg-white/90 transition-transform duration-500 group-hover:rotate-12 shadow-md">
              <img
                src={logoImg}
                alt="Tubed Courtyard Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <span
              className={`font-serif text-xl tracking-tight transition-colors duration-200 ${isDarkBackground
                  ? 'text-white group-hover:text-white/80'
                  : 'text-primary group-hover:text-primary/80'
                }`}
            >
              Tubed Courtyard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuConfig.filter(item => !item.isButton).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-sans text-sm font-medium tracking-wide transition-all duration-200 border-b-2 pb-1 ${isActive
                    ? isDarkBackground
                      ? 'border-white text-white font-semibold'
                      : 'border-primary text-primary font-semibold'
                    : isDarkBackground
                      ? 'border-transparent text-white/70 hover:text-white hover:border-white/40'
                      : 'border-transparent text-text-secondary hover:text-primary hover:border-outline-variant'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            {menuConfig.filter(item => item.isButton).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98] shadow-sm ${isDarkBackground
                    ? 'bg-white text-primary hover:bg-white/95'
                    : 'bg-primary text-white hover:bg-primary-hover'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${isDarkBackground
                  ? 'text-white hover:text-white/80 hover:bg-white/5'
                  : 'text-text-secondary hover:text-primary hover:bg-surface-container'
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Full Screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col">
          {/* Dark backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu panel — slides down from top */}
          <div className="relative z-50 bg-white w-full shadow-2xl pb-8 px-5 flex flex-col gap-2 border-b border-outline-variant/30">
            {/* Panel Header: logo + brand + close */}
            <div className="flex items-center justify-between py-4 border-b border-outline-variant/15 mb-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex items-center justify-center overflow-hidden rounded-full bg-white shadow-md border border-outline-variant/20">
                  <img src={logoImg} alt="Logo" className="h-8 w-8 object-contain" />
                </div>
                <span className="font-serif text-lg text-primary tracking-tight">Tubed Courtyard</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-low transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            {menuConfig.filter(item => !item.isButton).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3.5 rounded-xl font-sans font-semibold text-base transition-colors ${isActive
                    ? 'bg-primary/8 text-primary border-l-4 border-primary pl-3'
                    : 'text-text-secondary hover:text-primary hover:bg-surface-low'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-outline-variant/20">
              {menuConfig.filter(item => item.isButton).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center bg-primary text-white hover:bg-primary/90 py-3.5 rounded-xl text-base font-semibold transition-colors"
                >
                  {item.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
