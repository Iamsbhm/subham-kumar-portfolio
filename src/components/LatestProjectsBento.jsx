import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, MessageSquare, Check, ShieldCheck, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function LatestProjectsBento({ onSelectProject }) {
  const { projects } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState(null);

  // Helper for corner crosshairs / screws on cards matching the reference
  const CornerPins = ({ color = "border-slate-300/60" }) => (
    <>
      <span className={`absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full border ${color} opacity-40 pointer-events-none`} />
      <span className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full border ${color} opacity-40 pointer-events-none`} />
      <span className={`absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full border ${color} opacity-40 pointer-events-none`} />
      <span className={`absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full border ${color} opacity-40 pointer-events-none`} />
    </>
  );

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
              Selected Works & Capabilities
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight">
            Latest Projects
          </h2>
        </div>
        <p className="text-slate-500 text-sm sm:text-base max-w-md">
          A high-craft bento showcase of core product systems, fintech trading engines, and interactive design deliverables.
        </p>
      </div>

      {/* Bento Grid Container with warm editorial background */}
      <div className="bg-[#f7f4ed] p-4 sm:p-7 rounded-[36px] border border-[#e8e2d4] shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {/* ========================================================= */}
          {/* COLUMN 1 (LEFT)                                            */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* CARD 1: MEDICARE (REPLACED FROM TRACK PROGRESS) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'medi-care') || projects[2];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[260px] group"
            >
              <CornerPins />

              {/* Uploaded Medicare Image Preview */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3">
                <img
                  src="/projects/medicare.jpg"
                  alt="Medicare Healthcare Application"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                    Medicare App
                  </h3>
                  <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200/60 font-semibold">
                    Healthcare
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Universal healthcare appointment & teleconsultation platform (+50% booking success).
                </p>
              </div>
            </motion.div>

            {/* CARD 2: POPULAR APP INTEGRATIONS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelectProject && onSelectProject(projects[1] || projects[0])}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[290px] group"
            >
              <CornerPins />

              {/* App Icons Cluster on Circuit Layout */}
              <div className="relative w-full h-36 flex flex-col justify-center items-center py-2">
                {/* Subtle top circuit node */}
                <div className="absolute top-1 w-1.5 h-1.5 rounded-full bg-slate-300" />
                <div className="absolute top-2 w-[1px] h-3 bg-slate-200" />

                {/* Row 1 */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  {/* Framer */}
                  <motion.div whileHover={{ scale: 1.15, rotate: -4 }} className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-900">
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                    </svg>
                  </motion.div>

                  {/* Figma */}
                  <motion.div whileHover={{ scale: 1.15, rotate: 6 }} className="w-11 h-11 rounded-full bg-white shadow-[0_6px_16px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] border border-slate-100 flex items-center justify-center p-2.5">
                    <svg viewBox="0 0 38 57" className="w-5 h-5">
                      <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/>
                      <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"/>
                      <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/>
                      <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/>
                      <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/>
                    </svg>
                  </motion.div>

                  {/* Slack */}
                  <motion.div whileHover={{ scale: 1.15, rotate: -6 }} className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#E01E5A" d="M5.04 14.28a2.52 2.52 0 1 1-2.52-2.52h2.52v2.52zm1.26 0a2.52 2.52 0 0 1 2.52-2.52h2.52v5.04a2.52 2.52 0 0 1-2.52 2.52H6.3v-5.04z" />
                      <path fill="#36C5F0" d="M9.72 5.04a2.52 2.52 0 1 1-2.52-2.52v2.52h2.52zm0 1.26a2.52 2.52 0 0 1-2.52 2.52H2.16a2.52 2.52 0 0 1-2.52-2.52V6.3h10.08z" />
                      <path fill="#2EB67D" d="M18.96 9.72a2.52 2.52 0 1 1 2.52 2.52h-2.52V9.72zm-1.26 0a2.52 2.52 0 0 1-2.52 2.52h-2.52V7.2a2.52 2.52 0 0 1 2.52-2.52h2.52v5.04z" />
                      <path fill="#ECB22E" d="M14.28 18.96a2.52 2.52 0 1 1 2.52 2.52v-2.52h-2.52zm0-1.26a2.52 2.52 0 0 1 2.52-2.52h5.04a2.52 2.52 0 0 1 2.52 2.52v2.52H14.28v-2.52z" />
                    </svg>
                  </motion.div>

                  {/* Tailwind/Spark */}
                  <motion.div whileHover={{ scale: 1.15 }} className="w-8 h-8 rounded-full bg-slate-100/80 shadow-xs border border-slate-200/60 flex items-center justify-center p-1.5 opacity-60">
                    <Sparkles size={14} className="text-purple-500" />
                  </motion.div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Apple */}
                  <motion.div whileHover={{ scale: 1.15, rotate: 4 }} className="w-9 h-9 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 170 170" className="w-4 h-4 fill-slate-800">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.6-7.85-11.75-14.42-6.53-10.23-11.72-21.93-15.57-35.1-3.85-13.17-5.78-25.04-5.78-35.6 0-14.8 3.85-26.68 11.55-35.63 7.7-8.95 17.06-13.5 28.08-13.67 4.12 0 9.07 1.17 14.85 3.52 5.78 2.35 9.77 3.58 11.97 3.69 1.63 0 5.75-1.34 12.37-4.02 6.62-2.68 12.06-3.88 16.32-3.6 12.2.65 21.68 5.17 28.43 13.56-10.88 6.53-16.21 15.55-16 27.07.22 9.04 3.73 16.66 10.53 22.86 6.8 6.2 14.85 9.77 24.16 10.7-2.39 7.4-5.49 14.9-9.31 22.5zM119.22 33.15c0-6.9 2.52-13.43 7.56-19.6 5.04-6.17 11.38-10.37 19.02-12.6-1.08 7.02-3.8 13.49-8.16 19.41-4.36 5.92-10.51 9.94-18.42 12.06z"/>
                    </svg>
                  </motion.div>

                  {/* Gmail */}
                  <motion.div whileHover={{ scale: 1.15, rotate: -4 }} className="w-10 h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                      <path fill="#4285F4" d="M22 6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6z" opacity="0.1"/>
                      <path fill="#EA4335" d="M20 18h-2V9.25L12 13.75 6 9.25V18H4V6.5c0-.83.94-1.3 1.6-.8l6.4 4.8 6.4-4.8c.66-.5 1.6-.03 1.6.8V18z"/>
                      <path fill="#4285F4" d="M4 18V7.5L12 13.5 20 7.5V18H4z" opacity="0.2"/>
                    </svg>
                  </motion.div>

                  {/* Dropbox */}
                  <motion.div whileHover={{ scale: 1.15, rotate: 6 }} className="w-9 h-9 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-[#0061FF]">
                      <path d="M6 2l-6 4 6 4 6-4-6-4zm12 0l-6 4 6 4 6-4-6-4zM0 14l6 4 6-4-6-4-6 4zm18-4l-6 4 6 4 6-4-6-4zm-6 5.5l-6 4-3-2v1.5l9 6 9-6V17.5l-3 2-6-4z"/>
                    </svg>
                  </motion.div>

                  {/* Notion */}
                  <motion.div whileHover={{ scale: 1.15, rotate: -3 }} className="w-9 h-9 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center justify-center p-2">
                    <span className="font-serif font-black text-slate-800 text-sm">N</span>
                  </motion.div>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-4 pt-2">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                    Popular App Integrations
                  </h3>
                  <ArrowUpRight size={16} className="text-slate-400 group-hover:text-orange-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed">
                  Seamless connection between popular apps that you like
                </p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (CENTER)                                          */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* CARD 3: ALPHATRADE PRO (REPLACED FROM TEAM INTEGRATION) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelectProject && onSelectProject(projects[0])}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-4 sm:p-5 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[200px] group"
            >
              <CornerPins />

              {/* Uploaded AlphaTrade Pro Project Image */}
              <div className="relative w-full h-28 sm:h-32 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3">
                <img
                  src="/projects/alphatrade-pro.jpg"
                  alt="AlphaTrade Pro"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={13} className="text-slate-900" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-orange-600 transition-colors">
                    AlphaTrade Pro
                  </h3>
                  <span className="text-[10px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60 font-semibold">
                    FinTech
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] sm:text-xs mt-0.5 truncate">
                  High-frequency trading & market intelligence platform
                </p>
              </div>
            </motion.div>

            {/* CARD 4: FAST ITERATIONS */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelectProject && onSelectProject(projects[2] || projects[0])}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[190px] group"
            >
              <CornerPins />

              {/* 3D Glowing Orange Lightning Bolt with Contour Ripple Lines */}
              <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
                {/* Concentric ripple contour lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 stroke-orange-400/50" viewBox="0 0 200 100" fill="none">
                  <path d="M70 20 Q100 5 130 20 Q145 50 130 80 Q100 95 70 80 Q55 50 70 20" strokeWidth="1" />
                  <path d="M55 12 Q100 -5 145 12 Q165 50 145 88 Q100 105 55 88 Q35 50 55 12" strokeWidth="1" />
                  <path d="M40 5 Q100 -15 160 5 Q185 50 160 95 Q100 115 40 95 Q15 50 40 5" strokeWidth="1" />
                </svg>

                {/* Ambient glow */}
                <div className="absolute w-16 h-16 rounded-full bg-orange-500/20 blur-xl pointer-events-none" />

                {/* 3D Glowing Bolt */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-12 h-12 flex items-center justify-center"
                >
                  <svg viewBox="0 0 24 24" className="w-11 h-11 drop-shadow-[0_4px_12px_rgba(255,100,20,0.45)]">
                    <defs>
                      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffa040" />
                        <stop offset="100%" stopColor="#ff4500" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      fill="url(#boltGrad)"
                      stroke="#ff6020"
                      strokeWidth="0.5"
                    />
                  </svg>
                </motion.div>
              </div>

              {/* Text */}
              <div className="mt-2">
                <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                  Fast Iterations
                </h3>
              </div>
            </motion.div>

            {/* CARD 5: CUSTOM SUPPORT */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[170px] group"
            >
              <CornerPins />

              {/* Floating Chat Bubble with Circuit Side Lines */}
              <div className="relative w-full h-16 flex items-center justify-center">
                {/* Circuit Horizontal Lines left and right */}
                <div className="absolute left-0 right-0 flex items-center justify-between px-2 pointer-events-none opacity-40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                    <span className="w-6 h-[1px] bg-slate-300"></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-[1px] bg-slate-300"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  </div>
                </div>

                {/* Floating Beige Card */}
                <div className="relative z-10 bg-[#f4eee2] px-3.5 py-2 rounded-2xl border border-[#e5dccb] shadow-sm flex items-center gap-2.5 max-w-[210px]">
                  <div className="relative shrink-0">
                    <img
                      src="/subham-portrait.jpg"
                      alt="Subham"
                      className="w-7 h-7 rounded-full object-cover border border-white"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-[#f4eee2]"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-bold text-slate-800 leading-tight">Subham Kumar</div>
                    <div className="text-[9px] text-slate-500 truncate">Hey there! How can I assist you today?</div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="mt-2">
                <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                  Custom Support
                </h3>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (RIGHT)                                           */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* CARD 6: FOOD DELIVERY APP (REPLACED FROM TRIAL CARD) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'quickbite') || projects[4];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[260px] group"
            >
              <CornerPins />

              {/* Uploaded Food Delivery App Image Preview */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3">
                <img
                  src="/projects/food-delivery.jpg"
                  alt="Food Delivery App"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                    Food Delivery App
                  </h3>
                  <span className="text-[10px] font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60 font-semibold">
                    Mobile App
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Hyperlocal restaurant discovery & frictionless checkout (+28% user satisfaction).
                </p>
              </div>
            </motion.div>

            {/* CARD 7: FLOWCRM (REPLACED FROM IMPRESSIONS & GROWTH) */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'flowcrm') || projects[3];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[290px] group"
            >
              <CornerPins />

              {/* Uploaded FlowCRM Dashboard Image Preview */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3">
                <img
                  src="/projects/flowcrm.png"
                  alt="FlowCRM - B2B SaaS Dashboard"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                    FlowCRM
                  </h3>
                  <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 font-semibold">
                    SaaS & Dashboard
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  B2B SaaS sales pipeline & analytics dashboard redesign (+35% task speed).
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
