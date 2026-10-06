import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, TestTube, Code, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ProcessSection() {
  const { process } = portfolioData;

  const icons = [
    <Search size={22} className="text-indigo-500" />,
    <Compass size={22} className="text-purple-500" />,
    <Palette size={22} className="text-rose-500" />,
    <TestTube size={22} className="text-emerald-500" />,
    <Code size={22} className="text-amber-500" />,
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Human-Centered Methodology</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            How I Approach Design
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
          A disciplined, iterative product design lifecycle balancing user empathy with commercial metrics and engineering velocity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {process.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-6 rounded-3xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-indigo-500 transition-colors">
                  {step.step}
                </span>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                  {icons[idx]}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                {step.title}
              </h3>
              <p className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                {step.subtitle}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {step.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <div className="flex flex-wrap gap-1">
                {step.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
