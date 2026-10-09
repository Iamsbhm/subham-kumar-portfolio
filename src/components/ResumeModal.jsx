import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, workHistory, techStack, projects } = portfolioData;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        className="relative w-full max-w-4xl bg-white text-slate-900 rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-hidden sm:my-6 border border-slate-200 flex flex-col max-h-[92vh] sm:max-h-[85vh]"
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-slate-900 text-white border-b border-slate-800 shrink-0">
          <span className="font-display font-bold text-xs sm:text-sm tracking-wide truncate pr-2">
            Subham Kumar — Curriculum Vitae
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/Subham-Kumar-Resume.pdf"
              download="Subham-Kumar-Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold transition-colors"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-4 sm:p-10 space-y-6 sm:space-y-8 font-sans overflow-y-auto flex-1">
          {/* Header */}
          <div className="border-b border-slate-200 pb-4 sm:pb-6">
            <h1 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 uppercase tracking-tight">
              {personal?.name || "Subham Kumar"}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1"><Phone size={13} /> {personal?.phone}</span>
              <span className="flex items-center gap-1"><MapPin size={13} /> {personal?.location}</span>
              <span className="flex items-center gap-1"><Mail size={13} /> {personal?.email}</span>
              <span className="text-emerald-600 font-semibold">{personal?.availability}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal?.aboutBio?.lead} {personal?.aboutBio?.story}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {workHistory?.map((exp, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900">{exp.role} — <span className="text-blue-600 font-semibold">{exp.company}</span></h3>
                    <span className="font-mono text-xs text-slate-500 font-semibold">{exp.period} • {exp.type}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.highlights}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tech Stack */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Skills & Tooling
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              {techStack?.map((tool, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200">
                  {tool.name} — <span className="text-slate-500">{tool.category}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Flagship Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects?.slice(0, 4).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{proj.title} — <span className="font-normal text-slate-600">{proj.subtitle}</span></h3>
                    {proj.stats?.[0] && (
                      <span className="font-mono text-[11px] text-orange-600 font-semibold">{proj.stats[0].value} {proj.stats[0].label}</span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
