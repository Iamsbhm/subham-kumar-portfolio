import React from 'react';
import { Mail, Linkedin, Github, Globe, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenContact }) {
  const { personal } = portfolioData;

  return (
    <footer id="contact" className="relative w-full bg-slate-950 text-white pt-12 sm:pt-16 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Headline */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-2">
            Let's build what's next.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal">
            Book a call or send an email — I'll get back to you within a day.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-8 border-b border-slate-800/90 text-xs">
          {/* Email */}
          <div className="lg:col-span-4 space-y-1">
            <span className="text-slate-400 font-medium">Email</span>
            <p>
              <a
                href={`mailto:${personal.email}`}
                className="text-xs sm:text-sm font-semibold text-white hover:text-slate-300 transition-colors"
              >
                {personal.email}
              </a>
            </p>
          </div>

          {/* Discovery Call */}
          <div className="lg:col-span-4 space-y-1">
            <span className="text-slate-400 font-medium">Discovery call</span>
            <p>
              <a
                href={`mailto:${personal.email}?subject=Discovery%20Call%20Booking`}
                className="text-xs sm:text-sm font-semibold text-white hover:text-slate-300 inline-flex items-center gap-1 transition-colors"
              >
                <span>Book Now</span>
                <ArrowUpRight size={13} />
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="lg:col-span-4 space-y-1">
            <span className="text-slate-400 font-medium">Social</span>
            <div className="flex items-center gap-2 pt-0.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-105 transition-transform"
                title="LinkedIn"
              >
                <Linkedin size={13} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-105 transition-transform"
                title="Dribbble"
              >
                <Globe size={13} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center hover:scale-105 transition-transform"
                title="GitHub"
              >
                <Github size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Menu & Legal */}
        <div className="grid grid-cols-2 sm:grid-cols-12 gap-4 py-5 text-xs text-slate-400 border-b border-slate-900">
          <div className="sm:col-span-6 space-y-1">
            <span className="font-semibold text-white block mb-1">Menu</span>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="hover:text-white transition-colors">Work</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
            </div>
          </div>

          <div className="sm:col-span-6 space-y-1">
            <span className="font-semibold text-white block mb-1">Legal</span>
            <div className="flex flex-wrap gap-4">
              <span className="hover:text-white transition-colors cursor-pointer">Terms of service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            </div>
          </div>
        </div>

        {/* Compact Watermark Logo Typography */}
        <div className="max-h-20 sm:max-h-28 overflow-hidden select-none pointer-events-none text-center pt-2">
          <span className="font-display font-black text-[14vw] sm:text-[11vw] leading-none tracking-tighter text-white/95 block -mb-4 sm:-mb-6">
            subham
          </span>
        </div>
      </div>
    </footer>
  );
}
