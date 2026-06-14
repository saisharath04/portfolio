import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset scroll for navbar height (approx 64px / 4rem)
      const navbarHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      setIsOpen(false);

      // Defer scroll slightly to allow the mobile menu close to initiate
      // and prevent mobile click event handlers from cancelling the smooth scroll.
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, 100);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => handleScroll('hero')}>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              JVN.
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1 relative">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-md cursor-pointer ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyan-500/10 border-b-2 border-cyan-400 rounded-md"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800/50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B0F19]/95 border-b border-slate-800/80"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleScroll(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all ${
                      isActive 
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-4 border-cyan-400' 
                        : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
