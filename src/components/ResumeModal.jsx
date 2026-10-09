import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, education, skillsByCategory, achievements, projects } = portfolioData;

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
            Subham Kumar — CV
          </span>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold transition-colors"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save PDF</span>
              <span className="sm:hidden">Save</span>
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
              {personal.name}
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1"><Phone size={13} /> {personal.phone}</span>
              <span className="flex items-center gap-1"><MapPin size={13} /> {personal.location}</span>
              <span className="flex items-center gap-1"><Mail size={13} /> {personal.email}</span>
              <span className="text-emerald-600 font-semibold">{personal.availability}</span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-slate-600">{edu.institution}</p>
                </div>
                <span className="font-mono text-xs text-slate-500 font-semibold">{edu.period}</span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Skills & Tooling
            </h2>
            <div className="space-y-2 text-xs">
              {skillsByCategory.map((cat, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-1">
                  <span className="sm:col-span-4 font-bold text-slate-800">{cat.category}:</span>
                  <span className="sm:col-span-8 text-slate-600">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Professional Experience
            </h2>
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-slate-900">{exp.role} — <span className="text-indigo-600 font-semibold">{exp.company}</span></h3>
                  </div>
                  <span className="font-mono text-xs text-slate-500 font-semibold">{exp.period} • {exp.type}</span>
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-700 leading-relaxed pl-1">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Flagship Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projects.slice(0, 4).map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{proj.title} — <span className="font-normal text-slate-600">{proj.subtitle}</span></h3>
                    <span className="font-mono text-[11px] text-indigo-600 font-semibold">{proj.stats[0].value} {proj.stats[0].label}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{proj.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900 border-b border-slate-900 pb-1 mb-3">
              Achievements
            </h2>
            {achievements.map((ach, idx) => (
              <div key={idx} className="text-xs text-slate-700">
                <strong className="text-slate-900">{ach.title}</strong>: {ach.description}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
