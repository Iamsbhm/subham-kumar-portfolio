import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Header({ onOpenResume }) {
  const { personal } = portfolioData;

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'About', href: '#about' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto inline-flex items-center gap-4 sm:gap-6 px-3.5 py-1.5 rounded-full floating-glass shadow-md whitespace-nowrap"
      >
        {/* Avatar & Name */}
        <a href="#" className="flex items-center gap-2 group shrink-0 pr-1">
          <img
            src="/subham-portrait.jpg"
            alt="Subham Kumar"
            className="w-7 h-7 rounded-full object-cover border border-slate-200 shadow-xs"
          />
          <span className="font-semibold text-xs sm:text-sm text-slate-900 whitespace-nowrap tracking-tight">
            {personal.shortName}
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-1.5 py-1 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={onOpenResume}
            className="px-1.5 py-1 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
          >
            CV
          </button>
        </div>

        {/* Right Contact Pill Button */}
        <div className="shrink-0">
          <a
            href="#contact"
            className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-900 text-xs font-semibold transition-all border border-slate-200/80"
          >
            Contact
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
