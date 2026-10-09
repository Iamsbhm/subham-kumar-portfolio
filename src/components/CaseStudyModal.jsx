import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Sliders,
  ShieldCheck,
  Zap,
  TrendingDown
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CaseStudyModal({ project, onClose, onSelectProject }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDeviceView, setActiveDeviceView] = useState('desktop');

  const { projects } = portfolioData;
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview & Challenge' },
    { id: 'research', label: 'UX Research & IA' },
    { id: 'solution', label: 'Design & Visuals' },
    { id: 'outcomes', label: 'Outcomes & Takeaways' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-t-[32px] sm:rounded-[32px] border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        >
          {/* Top Sticky Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-white/95 backdrop-blur-xl border-b border-slate-100">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
              <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                {project.category}
              </span>
              <span className="font-display font-bold text-slate-950 text-sm sm:text-base truncate">
                {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 flex items-center justify-center transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>

          <div className="overflow-y-auto flex-1">
            {/* Hero Cover Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Header Content */}
            <div className="p-4 sm:p-10 pb-6">
              <h1 className="font-display font-bold text-2xl sm:text-5xl text-slate-950 tracking-tight mb-2">
                {project.title}
              </h1>
              <p className="text-xs sm:text-base text-slate-500 font-medium mb-6">
                {project.subtitle}
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#fafafa] border border-slate-200/80 mb-6 sm:mb-8">
                {project.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-950">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs pb-6 sm:pb-8 border-b border-slate-200/80">
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-0.5">Role</span>
                  <p className="font-bold text-slate-900 text-[11px] sm:text-xs">{project.metadata.role}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-0.5">Timeline & Team</span>
                  <p className="font-bold text-slate-900 text-[11px] sm:text-xs">{project.metadata.duration} • {project.metadata.team}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-0.5">Platform</span>
                  <p className="font-bold text-slate-900 text-[11px] sm:text-xs">{project.metadata.platform}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase block mb-0.5">Tooling</span>
                  <p className="font-bold text-slate-900 text-[11px] sm:text-xs">{project.metadata.tools.join(', ')}</p>
                </div>
              </div>

              {/* Tabs Switcher */}
              <div className="flex gap-2 pt-4 sm:pt-6 mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === tab.id
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="space-y-8">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-950 mb-2">Executive Summary</h3>
                      <p className="text-base text-slate-600 leading-relaxed">{project.summary}</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#fafafa] border border-slate-200/80">
                      <h4 className="font-bold text-base text-slate-950 mb-2">{project.challenge.heading}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{project.challenge.description}</p>
                    </div>
                  </div>
                )}

                {activeTab === 'research' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-xl text-slate-950 mb-3">{project.research.heading}</h3>
                    <div className="space-y-3">
                      {project.research.bullets.map((b, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-slate-950 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700 leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'solution' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-xl text-slate-950 mb-3">{project.solution.heading}</h3>
                    <div className="space-y-3 mb-6">
                      {project.solution.bullets.map((b, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-start gap-3">
                          <Sparkles size={16} className="text-slate-950 mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-700 leading-relaxed">{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-950">
                      <img src={project.coverImage} alt="Visual Design" className="w-full h-auto object-cover" />
                    </div>
                  </div>
                )}

                {activeTab === 'outcomes' && (
                  <div className="space-y-6">
                    <h3 className="font-display font-bold text-xl text-slate-950 mb-3">Key Results & Outcomes</h3>
                    <div className="space-y-3">
                      {project.outcomes.map((o, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 shrink-0" />
                          <span className="text-sm font-medium text-slate-800 leading-relaxed">{o}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-6 rounded-2xl bg-[#fafafa] border border-slate-200/80 mt-6">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">Designer Takeaway</span>
                      <p className="text-sm text-slate-700 italic">"{project.learnings}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Pagination */}
          <div className="px-6 py-4 bg-[#fafafa] border-t border-slate-200/80 flex items-center justify-between">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950"
            >
              <ArrowLeft size={15} />
              <span>{prevProject.title}</span>
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-950"
            >
              <span>{nextProject.title}</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
