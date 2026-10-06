import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Sparkles, Sliders, TrendingUp, Layers, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FeaturedCaseStudiesSection({ onSelectProject }) {
  const { projects } = portfolioData;

  // Selected flagship case studies to showcase
  const caseStudies = [
    {
      ...projects[0], // AlphaTrade Pro
      highlightTag: "Featured FinTech Case Study",
      highlightColor: "text-blue-600 bg-blue-50 border-blue-200/60",
      accentBg: "from-blue-600/10 to-indigo-600/5",
      impactMetric: "-40% Data Interpretation Time",
      features: [
        "Audited 5+ tier-1 trading platforms benchmarking density vs speed",
        "Engineered modular dockable charting and real-time order routing",
        "Built 50+ tokenized components with WCAG 2.1 AA contrast"
      ]
    },
    {
      ...(projects.find(p => p.id === 'medi-care') || projects[2]), // Medicare
      highlightTag: "Healthcare & Mobile UX",
      highlightColor: "text-emerald-700 bg-emerald-50 border-emerald-200/60",
      accentBg: "from-emerald-600/10 to-teal-600/5",
      impactMetric: "+50% Task Booking Success",
      features: [
        "12+ user interviews with older & less tech-savvy patient personas",
        "Condensed complex 7-stage funnel down to 3 effortless steps",
        "Created accessible 48x48px touch targets & high-contrast UI"
      ]
    },
    {
      ...(projects.find(p => p.id === 'quickbite') || projects[4]), // Food Delivery App
      highlightTag: "Mobile Product Design",
      highlightColor: "text-amber-700 bg-amber-50 border-amber-200/60",
      accentBg: "from-amber-600/10 to-orange-600/5",
      impactMetric: "+28% User Satisfaction",
      features: [
        "Replaced text-heavy modifier dialogs with visual customizer chips",
        "Designed transparent sticky bottom bar showing full tax/fees upfront",
        "Real-time driver tracking with animated milestone feedback"
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            In-Depth Product Breakdowns
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-950 tracking-tight leading-[1.08]">
            Featured Case Studies
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            Detailed walkthroughs covering discovery research, heuristic audits, design system architecture, and measurable outcomes.
          </p>
        </div>
      </div>

      {/* Case Studies Stack */}
      <div className="space-y-10">
        {caseStudies.map((study, idx) => (
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#fcfaf6] rounded-[36px] p-6 sm:p-9 border border-[#ebe5d8] shadow-[0_6px_24px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-slate-300 hover:bg-white transition-all duration-400 overflow-hidden"
          >
            {/* Corner Pin Accents matching bento styling */}
            <span className="absolute top-3.5 left-3.5 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute top-3.5 right-3.5 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute bottom-3.5 left-3.5 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute bottom-3.5 right-3.5 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image Preview Container (6 Cols) */}
              <div 
                onClick={() => onSelectProject && onSelectProject(study)}
                className="lg:col-span-6 cursor-pointer relative aspect-[16/10] sm:aspect-[16/10] rounded-[24px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs group-hover:shadow-lg transition-all"
              >
                <img
                  src={study.coverImage}
                  alt={study.title}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Category Badge */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold text-white bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                    {study.category}
                  </span>
                </div>

                {/* Hover CTA Pill */}
                <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-900 text-xs font-semibold backdrop-blur-md shadow-md opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={13} />
                </div>
              </div>

              {/* Right Content & Metrics (6 Cols) */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full">
                <div>
                  {/* Top Badge & Metric */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border ${study.highlightColor}`}>
                      {study.highlightTag}
                    </span>
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200/60">
                      {study.impactMetric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 
                    onClick={() => onSelectProject && onSelectProject(study)}
                    className="cursor-pointer font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight leading-snug mb-2 group-hover:text-orange-600 transition-colors"
                  >
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mb-4">
                    {study.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed mb-6">
                    {study.tagline}
                  </p>

                  {/* Key Highlights / Pillars */}
                  <div className="space-y-2.5 mb-7">
                    {study.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
                  {/* Stats chips */}
                  <div className="flex items-center gap-2">
                    {study.stats && study.stats.slice(0, 2).map((st, sIdx) => (
                      <div key={sIdx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200/80 text-[11px] shadow-2xs">
                        <span className="text-slate-400 mr-1">{st.label}:</span>
                        <span className="font-bold text-slate-900">{st.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Open Modal Button */}
                  <button
                    onClick={() => onSelectProject && onSelectProject(study)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs group-hover:bg-orange-600"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
