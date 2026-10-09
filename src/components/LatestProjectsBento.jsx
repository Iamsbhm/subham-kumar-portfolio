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

            {/* CARD 1: MEDICARE APP */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'medi-care') || projects[2];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* Uploaded Medicare Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
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
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
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

            {/* CARD 2: STYLECART E-COMMERCE UX */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'stylecart') || projects[5];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* StyleCart E-Commerce Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
                <img
                  src="/projects/stylecart.jpg"
                  alt="StyleCart E-Commerce Mobile UX"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-rose-600 transition-colors">
                    StyleCart
                  </h3>
                  <span className="text-[10px] font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200/60 font-semibold">
                    E-Commerce UX
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Curated apparel product discovery & 2-click mobile checkout funnel (+38% discovery).
                </p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 2 (CENTER)                                          */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* CARD 3: ALPHATRADE PRO */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => onSelectProject && onSelectProject(projects[0])}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* AlphaTrade Pro Project Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
                <img
                  src="/projects/alphatrade-pro.jpg"
                  alt="AlphaTrade Pro"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-orange-600 transition-colors">
                    AlphaTrade Pro
                  </h3>
                  <span className="text-[10px] font-mono text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/60 font-semibold">
                    Flagship FinTech
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  High-frequency trading engine, modular candlestick charts & risk control (-40% data time).
                </p>
              </div>
            </motion.div>

            {/* CARD 4: SWIFTSBF DESIGN SYSTEM */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'swiftsbf-design-system') || projects[1];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* SwiftSBF Design System Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
                <img
                  src="/projects/swiftsbf-design-system.jpg"
                  alt="SwiftSBF Design System"
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} className="text-slate-900" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-blue-600 transition-colors">
                    SwiftSBF Design System
                  </h3>
                  <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200/60 font-semibold">
                    Design Tokens
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  60+ atomic Figma components, Auto Layout 5.0 & tokenized variables (-30% handoff friction).
                </p>
              </div>
            </motion.div>
          </div>

          {/* ========================================================= */}
          {/* COLUMN 3 (RIGHT)                                           */}
          {/* ========================================================= */}
          <div className="flex flex-col gap-4 sm:gap-5">

            {/* CARD 5: FOOD DELIVERY APP */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'quickbite') || projects[4];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* Uploaded Food Delivery App Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
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
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-amber-600 transition-colors">
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

            {/* CARD 6: FLOWCRM */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                const p = projects.find(it => it.id === 'flowcrm') || projects[3];
                if (onSelectProject && p) onSelectProject(p);
              }}
              className="relative cursor-pointer bg-[#fcfaf6] rounded-[26px] p-5 sm:p-6 border border-[#ebe5d8] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden min-h-[300px] group"
            >
              <CornerPins />

              {/* Uploaded FlowCRM Dashboard Image Preview */}
              <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs mb-3.5">
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
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-lg sm:text-xl group-hover:text-emerald-600 transition-colors">
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
