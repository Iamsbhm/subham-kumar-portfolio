import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessTimelineSection() {
  const steps = [
    {
      id: 1,
      num: 1,
      numColor: 'text-[#38bdf8]', // Cyan/Sky blue
      title: 'Survey',
      desc: 'Surveyed about 50 people.',
      icon: '/process/step1_survey@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
    {
      id: 2,
      num: 2,
      numColor: 'text-[#38bdf8]',
      title: 'Analyze',
      desc: 'Sorted the answers with ChatGPT.',
      icon: '/process/step2_analyze@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
    {
      id: 3,
      num: 3,
      numColor: 'text-[#38bdf8]',
      title: 'Prototype',
      desc: 'A playable wireframe in code.',
      icon: '/process/step3_prototype@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
    {
      id: 4,
      num: 4,
      numColor: 'text-[#38bdf8]',
      title: 'Interview',
      desc: 'Testers played it and said what felt off.',
      icon: '/process/step4_interview@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
    {
      id: 5,
      num: 5,
      numColor: 'text-[#fb7185]', // Salmon/Coral red
      title: 'Build',
      desc: 'Figma to code, Supabase backend.',
      icon: '/process/step5_build@2x.png',
      widthClass: 'w-[120px] sm:w-[136px]',
    },
    {
      id: 6,
      num: 6,
      numColor: 'text-[#fb7185]',
      title: 'Playtest',
      desc: 'Tested in person, then reworked.',
      icon: '/process/step6_playtest@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
    {
      id: 7,
      num: 7,
      numColor: 'text-[#fb7185]',
      title: 'Ship',
      desc: 'TestFlight, a website and a trailer.',
      icon: '/process/step7_ship@2x.png',
      widthClass: 'w-10 sm:w-11',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Product Execution Workflow
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-950 tracking-tight">
            How I Build & Ship
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            A disciplined 7-stage product development loop balancing user research, AI synthesis, rapid wireframing, and production engineering.
          </p>
        </div>
      </div>

      {/* Main Timeline Card Container with Subtle Dark Grid matching the reference */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="relative rounded-[32px] sm:rounded-[36px] p-5 sm:p-8 lg:p-9 bg-[#383a40] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px',
        }}
      >
        {/* Horizontal Scroll wrapper for seamless mobile responsiveness */}
        <div className="overflow-x-auto no-scrollbar pb-2 pt-1">
          <div className="relative min-w-[880px] lg:min-w-0">
            {/* Dashed Connecting Line running behind the icon nodes across entire width */}
            <div 
              className="absolute top-[20px] sm:top-[22px] left-0 right-0 h-0 border-t-2 border-dashed border-zinc-400/40 z-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* 7 Process Steps Grid */}
            <div className="relative z-10 flex items-start justify-between gap-3 sm:gap-4">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -3 }}
                  className={`flex flex-col items-start ${step.id === 5 ? 'flex-[1.3] min-w-[136px]' : 'flex-1 min-w-[105px]'} group cursor-default`}
                >
                  {/* Top Icon Squircle / Pill */}
                  <div className="mb-4 sm:mb-5 relative z-10 flex items-center h-10 sm:h-11">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className={`h-10 sm:h-11 ${step.widthClass} object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm select-none`}
                      loading="lazy"
                    />
                  </div>

                  {/* Step Number + Title */}
                  <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-tight flex items-center mb-1.5 whitespace-nowrap">
                    <span className={`${step.numColor} mr-1.5 font-bold`}>{step.num}</span>
                    <span>{step.title}</span>
                  </h3>

                  {/* Subtitle / Description */}
                  <p className="text-[12px] sm:text-[13px] text-zinc-400 leading-snug group-hover:text-zinc-300 transition-colors max-w-[135px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Subtle mobile hint to scroll if on small touch devices */}
        <div className="lg:hidden mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
          <span>7-Step Workflow</span>
          <span>Scroll horizontally →</span>
        </div>
      </motion.div>
    </section>
  );
}
