import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Rocket, Check, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ServicesSection() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Header Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        <div className="lg:col-span-7">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight leading-[1.06]">
            {services.headline}
            <br />
            <span className="text-slate-400 font-semibold">{services.subheadline}</span>
          </h2>
        </div>

        <div className="lg:col-span-5 pt-2">
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            <strong className="text-slate-950">Explore the packages I've built.</strong> If none of them quite match what you need, email me or book a call — we'll figure it out together.
          </p>
        </div>
      </div>

      {/* 3 Step Process Row (as seen in screenshot 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 pb-12 border-b border-slate-200/80">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
            <span className="text-sm">↗</span>
            <span>Select</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Choose the offer that fits, or reach out to request something custom.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
            <span className="text-sm">💬</span>
            <span>Reach out</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Email me or book a call — we'll align on scope and timeline.
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
            <span className="text-sm">🚀</span>
            <span>Launch</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            We sign, and the work starts. No months-long onboarding.
          </p>
        </div>
      </div>

      {/* 3 Service Packages Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.packages.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-7 rounded-[28px] bg-[#fafafa] border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-slate-950 leading-snug mb-3">
                {pkg.title}
              </h3>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-6">
                {pkg.tagline}
              </p>

              <div className="pb-6 mb-6 border-b border-slate-200/80">
                <span className="text-xs font-mono font-semibold text-slate-800 block mb-1">
                  Timeline
                </span>
                <span className="text-xs text-slate-500">
                  {pkg.duration}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Deliverables
                </span>
                {pkg.deliverables.map((d, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-600">
                    <Check size={13} className="text-slate-900 mt-0.5 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200/80">
              <a
                href="#contact"
                className="w-full py-2.5 rounded-full bg-white hover:bg-slate-950 hover:text-white text-slate-900 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
              >
                <span>Inquire Package</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
