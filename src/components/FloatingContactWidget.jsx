import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Calendar, Check, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function FloatingContactWidget() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.9 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pointer-events-auto flex items-center gap-3.5 px-4 py-2 rounded-full floating-glass shadow-xl"
      >
        <div className="flex flex-col text-left pr-1">
          <span className="text-xs font-bold text-slate-900 leading-tight">
            Speak to me
          </span>
          <span className="text-[11px] text-slate-500 leading-tight">
            {copied ? 'Email copied!' : 'Email or book a call'}
          </span>
        </div>

        {/* Email button */}
        <button
          onClick={handleCopyEmail}
          className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 transition-transform active:scale-95 shadow-sm"
          title="Copy Email Address"
          aria-label="Email Subham"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Mail size={14} />}
        </button>

        {/* Calendar button */}
        <a
          href={`mailto:${personal.email}?subject=Product%20Design%20Inquiry%20from%20Portfolio`}
          className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-transform active:scale-95"
          title="Schedule Discussion"
          aria-label="Book Call"
        >
          <Calendar size={14} />
        </a>
      </motion.div>
    </div>
  );
}
