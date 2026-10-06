import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onSelectProject }) {
  const { personal, projects } = portfolioData;
  const [hoveredCard, setHoveredCard] = useState(null);

  // 3 showcase project cards for the hero deck
  const deckProjects = [
    {
      id: projects[0].id,
      title: "AlphaTrade Pro",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
      initialRotate: -9,
      initialX: -30,
      initialY: 15,
      zIndex: 10,
    },
    {
      id: projects[1].id,
      title: "Aetheric Aviation",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
      initialRotate: -3,
      initialX: -10,
      initialY: 5,
      zIndex: 20,
    },
    {
      id: projects[2].id,
      title: "Medi Care Mobile",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      initialRotate: 5,
      initialX: 15,
      initialY: -5,
      zIndex: 30,
    },
    {
      id: projects[3].id,
      title: "FlowCRM SaaS",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      initialRotate: 12,
      initialX: 35,
      initialY: -10,
      zIndex: 15,
    },
  ];

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-visible">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-slate-800 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Available</span>
          </div>

          {/* Hero Headline (matching screenshot 1) */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-slate-950 leading-[1.05] mb-6">
            Design Partner
            <br />
            <span className="text-slate-400 font-semibold">for your product's</span>
            <br />
            <span className="text-slate-400 font-semibold">next leap.</span>
          </h1>

          {/* Subtitle description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mb-10">
            <strong className="text-slate-950 font-semibold">I audit, redesign, and embed with FinTech & SaaS teams</strong> — specializing in high-conversion UX, design systems, and complex workflows.
          </p>

          {/* Avatar CTA Button */}
          <a
            href={`mailto:${personal.email}?subject=Design%20Inquiry%20from%20Portfolio`}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-slate-950 text-white font-semibold text-xs sm:text-sm hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-slate-950/15 group"
          >
            <div className="w-6 h-6 rounded-full bg-white text-slate-950 flex items-center justify-center text-[10px] font-bold font-display overflow-hidden">
              SK
            </div>
            <span>Book a call with me</span>
          </a>
        </motion.div>

        {/* Right Column: 3D Stacked Project Deck (matching screenshot 1) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3]">
            {deckProjects.map((card, idx) => {
              const isHovered = hoveredCard === card.id;
              const targetProject = projects.find((p) => p.id === card.id) || projects[0];

              return (
                <motion.div
                  key={card.id}
                  className="absolute inset-0 rounded-[28px] overflow-hidden bg-slate-900 border border-white/20 shadow-2xl cursor-pointer"
                  style={{ zIndex: isHovered ? 50 : card.zIndex }}
                  initial={{
                    rotate: card.initialRotate,
                    x: card.initialX,
                    y: card.initialY,
                  }}
                  animate={{
                    rotate: isHovered ? 0 : card.initialRotate,
                    x: isHovered ? 0 : card.initialX,
                    y: isHovered ? -16 : card.initialY,
                    scale: isHovered ? 1.05 : 1,
                  }}
                  transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => onSelectProject(targetProject)}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Project Title Badge inside bottom left (matching screenshot) */}
                  <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                    <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight drop-shadow-md">
                      {card.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
