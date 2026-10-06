import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Figma, 
  Globe, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight, 
  Download, 
  Mail,
  Linkedin,
  Github
} from 'lucide-react';

export default function AboutSection({ onOpenResume }) {
  const { personal, workHistory, techStack } = portfolioData;

  const corePrinciples = [
    {
      title: "Systems-First Thinking",
      desc: "Architecting modular tokenized libraries in Figma matching front-end component state machines."
    },
    {
      title: "Metric-Driven Outcomes",
      desc: "Optimizing critical user flows to reduce cognitive friction, data-interpretation time, and drop-offs."
    },
    {
      title: "Engineering Feasibility",
      desc: "Computer Science background delivering pixel-perfect handoff specs with WCAG 2.1 AA accessibility."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Col: Clean B&W Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 sticky top-28"
        >
          <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm relative group">
            <img
              src="/subham-portrait.jpg"
              alt={personal.name}
              className="w-full h-full object-cover object-center contrast-105 group-hover:scale-103 transition-transform duration-700 ease-out"
            />
            {/* Status indicator on portrait */}
            <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-white/40 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-slate-900">Open to Remote & Full-Time</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">2026</span>
            </div>
          </div>
        </motion.div>

        {/* Right Col: About Story Text & Dossier Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight mb-6">
              About me
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
              <p>
                <strong className="text-slate-950 font-semibold">{personal.aboutBio.lead}</strong> {personal.aboutBio.story}
              </p>
            </div>

            {/* Core Design Principles Mini Bento */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                How I Work & Build
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {corePrinciples.map((principle, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#faf8f5] border border-[#ebe5d8] hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      <h4 className="font-display font-bold text-xs sm:text-[13px] text-slate-950">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Dossier Snapshot */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Role</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">UI/UX Designer</span>
                  <span className="text-[11px] text-slate-500">SwiftSBF</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Education</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">B.Tech in CS</span>
                  <span className="text-[11px] text-slate-500">Silicon Inst.</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">Delhi, India</span>
                  <span className="text-[11px] text-slate-500">Remote Ready</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Honors</span>
                  <span className="text-xs font-bold text-slate-900 mt-0.5 block">SIH Finalist</span>
                  <span className="text-[11px] text-slate-500">National Top 1%</span>
                </div>
              </div>
            </div>

            {/* Action Buttons & Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenResume && onOpenResume()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs"
              >
                <span>View Full Curriculum Vitae</span>
                <ArrowUpRight size={13} />
              </button>

              <a
                href={`mailto:${personal.email}?subject=Product%20Design%20Inquiry`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200/90 text-slate-900 text-xs font-semibold transition-all border border-slate-200/80"
              >
                <Mail size={13} />
                <span>subhamkumar614@gmail.com</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
