import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Briefcase, 
  Play, 
  Sparkles, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Share2, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Zap,
  MessageSquare,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection({ onOpenResume }) {
  const { personal } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('fintech');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'global', name: 'Global & Remote', icon: Globe },
    { id: 'fintech', name: 'FinTech Systems', icon: Briefcase },
    { id: 'system', name: 'Design Systems', icon: Layers },
    { id: 'fulltime', name: 'Full-Time Role', icon: Zap },
    { id: 'wcag', name: 'Accessibility AA', icon: ShieldCheck },
  ];

  const hashtags = ['#FinTech', '#DesignSystems', '#AutoLayout5', '#WCAG2.1', '#HandoffSpecs'];

  const highlightSlides = [
    { 
      tag: "Design System Velocity", 
      metric: "60+ Tokens", 
      desc: "Built unified token library in Figma with Auto Layout 5.0." 
    },
    { 
      tag: "Dev Handoff Acceleration", 
      metric: "-30% Friction", 
      desc: "Zero-friction sprint specs with responsive breakpoints." 
    },
    { 
      tag: "Accessibility Compliance", 
      metric: "WCAG 2.1 AA", 
      desc: "High-contrast palette, accessible touch targets, and keyboard flows." 
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Career Experience & Dossier
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-950 tracking-tight">
            Experience
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            Leading product design and tokenized design systems at SwiftSBF, engineering frictionless developer handoff and scalable architectures.
          </p>
        </div>
      </div>

      {/* Main Bento Layout Container */}
      <div className="bg-[#f8f6f0] p-4 sm:p-7 rounded-[36px] border border-[#e8e2d4] shadow-xs">
        
        {/* ========================================================= */}
        {/* TOP ROW: Large Featured Experience Card + Right Nav Menu   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-4 sm:mb-5">
          
          {/* Large Main Experience Card (Top Left - 9 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-9 bg-white rounded-[28px] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#ebe5d8] flex flex-col md:flex-row gap-6 items-center group"
          >
            {/* Left Image: FinTech & Workstation Preview */}
            <div className="relative w-full md:w-[44%] aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200/60 shadow-inner">
              <img
                src="/projects/alphatrade-pro.jpg"
                alt="SwiftSBF Product Design"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase font-bold text-white tracking-wider">
                  2024 – Present
                </span>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="flex flex-col justify-between flex-1 w-full h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                    Lead UI/UX
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    SwiftSBF
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight leading-snug mb-2.5 group-hover:text-blue-600 transition-colors">
                  UI/UX Designer at SwiftSBF — Designing scalable fintech ecosystems & design systems
                </h3>

                <p className="text-slate-500 text-xs sm:text-[13px] leading-relaxed mb-6">
                  Leading end-to-end product design across flagship fintech apps, multi-asset trading interfaces, and responsive enterprise dashboards. Built our 60+ tokenized component library and reduced dev handoff friction by 30%.
                </p>
              </div>

              {/* Author / Metadata Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-9 px-2.5 rounded-xl bg-[#1591f8] flex items-center justify-center shadow-xs border border-blue-400/30 overflow-hidden">
                    <img
                      src="/logos/swiftsbf.png"
                      alt="SwiftSBF Logo"
                      className="h-5 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      SwiftSBF
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Small Business Finance • Full-Time
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenResume && onOpenResume()}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80 transition-colors"
                >
                  <span>View CV</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Category Filter Pills (Horizontal on Mobile, Column on Desktop) */}
          <div className="lg:col-span-3 bg-white rounded-[24px] sm:rounded-[28px] p-3 sm:p-5 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#ebe5d8] flex flex-col justify-center">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2 px-1">
              Filter Experience
            </span>
            <div className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 lg:w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 bg-slate-50 lg:bg-transparent'
                    }`}
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-white lg:bg-slate-100 text-slate-500'
                    }`}>
                      <Icon size={13} />
                    </div>
                    <span className="whitespace-nowrap">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM ROW: 3 Balanced Cards (4 Cols + 4 Cols + 4 Cols)   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
          
          {/* Card 1: Design System & Tokens (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-4 bg-white rounded-[28px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#ebe5d8] flex flex-col justify-between"
          >
            <div>
              {/* Top Image: Tokenized UI Components */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 mb-4 border border-slate-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop"
                  alt="Design System Architecture"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs text-[10px] font-mono font-bold text-slate-900 border border-slate-200/60 shadow-xs">
                  Figma 5.0
                </div>
              </div>

              <h4 className="font-display font-bold text-slate-900 text-base leading-snug mb-2">
                Engineered 60+ atomic Figma components with strict WCAG tokens
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed">
                Standardized token architecture bridging Figma variables directly to code.
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-4 border-t border-slate-100 mt-4">
              <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
                SK
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-800 block">Subham Kumar</span>
                <span className="text-[10px] text-slate-400 font-mono">Design System Spec</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Interactive Search & Metrics (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-4 bg-white rounded-[28px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#ebe5d8] flex flex-col justify-between"
          >
            <div>
              {/* Search Header */}
              <div className="relative flex items-center gap-2 mb-3">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search design systems, fintech..."
                    className="w-full bg-slate-50/80 border border-slate-200/80 rounded-2xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <button 
                  onClick={() => setSearchQuery('FinTech')}
                  className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors"
                >
                  <Search size={16} />
                </button>
              </div>

              {/* Hashtag Filters */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {hashtags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag.replace('#', ''))}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-600 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Core Impact Metrics */}
              <div className="grid grid-cols-3 gap-2 py-2 px-3 bg-slate-50 rounded-2xl text-center border border-slate-100 mb-3.5">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Experience</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">2+ Yrs</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Tokens</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">60+</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block">Handoff</span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">-30%</span>
                </div>
              </div>

              {/* Extended Skills & Competencies Cluster */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Specialized Skills & Tooling
                </span>
                <div className="flex flex-wrap gap-1.5 max-h-[145px] overflow-y-auto pr-1">
                  {[
                    "Figma Auto Layout 5.0",
                    "Design Tokens & Variables",
                    "FinTech UX Architecture",
                    "SaaS Enterprise Dashboards",
                    "WCAG 2.1 AA Accessibility",
                    "User Research & Journey Mapping",
                    "Interactive Micro-interactions",
                    "Developer Handoff Specs",
                    "Framer Prototyping",
                    "Responsive Breakpoints (8+)",
                    "Design-to-Code Parity"
                  ]
                    .filter(s => searchQuery === '' || s.toLowerCase().includes(searchQuery.toLowerCase()))
                    .map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 text-slate-700 border border-slate-200/70 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <button
              onClick={() => onOpenResume && onOpenResume()}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors text-center shadow-xs"
            >
              Explore Full Resume
            </button>
          </motion.div>

          {/* Card 3: Velocity & Carousel Controls (4 Cols) */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
            className="lg:col-span-4 bg-white rounded-[28px] p-5 sm:p-6 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#ebe5d8] flex flex-col justify-between"
          >
            {/* Top Compact Highlight Card with Play Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400&auto=format&fit=crop"
                  alt="Velocity"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-blue-600 mb-0.5">
                  <Play size={10} className="fill-blue-600" />
                  <span className="text-[9px] font-bold uppercase tracking-wider">Velocity</span>
                </div>
                <h5 className="font-bold text-slate-900 text-xs leading-tight truncate">
                  30% Faster Sprints
                </h5>
                <span className="text-[10px] text-slate-400 font-mono block truncate">
                  SwiftSBF Handoff
                </span>
              </div>
            </div>

            {/* Carousel Content */}
            <div className="min-h-[56px] flex flex-col justify-center text-center px-1 py-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider block">
                    {highlightSlides[activeSlide].tag}
                  </span>
                  <span className="font-display font-bold text-base text-slate-900 block mt-0.5">
                    {highlightSlides[activeSlide].metric}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls & Year Badges */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveSlide((prev) => (prev === 0 ? highlightSlides.length - 1 : prev - 1))}
                  className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors border border-slate-200/60"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={13} />
                </button>
                <button
                  onClick={() => setActiveSlide((prev) => (prev === highlightSlides.length - 1 ? 0 : prev + 1))}
                  className="w-7 h-7 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-colors border border-slate-200/60"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={13} />
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                  FinTech
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200/60 font-semibold">
                  2024
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
