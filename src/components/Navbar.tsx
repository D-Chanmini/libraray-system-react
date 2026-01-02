import React, { useEffect, useState } from 'react';
import { Moon, Sun, User, Menu, X } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const {
    isDark,
    toggle
  } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Featured',
    href: '#featured'
  }, {
    name: 'New Arrivals',
    href: '#new-arrivals'
  }, {
    name: 'Categories',
    href: '#categories'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <span className="font-serif text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Dinuri's
                <span className="text-blue-500 dark:text-blue-400">.</span>
                Library
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>)}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggle} className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" aria-label="Toggle dark mode">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-0.5">
              <User size={16} />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggle} className="p-2 rounded-full text-slate-600 dark:text-slate-300">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-300">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-lg font-medium text-slate-900 dark:text-white">
                  {link.name}
                </a>)}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-500 text-white font-medium">
                  <User size={18} />
                  <span>Sign In</span>
                </button>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}