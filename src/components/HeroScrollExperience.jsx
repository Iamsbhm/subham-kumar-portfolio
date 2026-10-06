import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Folder, FileText, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import LatestProjectsBento from './LatestProjectsBento';

export default function HeroScrollExperience({ onSelectProject }) {
  const { personal, projects } = portfolioData;
  const sectionRef = useRef(null);
  const [hoveredFolder, setHoveredFolder] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 20,
    restDelta: 0.001,
  });

  const heroScale = useTransform(smoothProgress, [0, 0.7], [1, 0.98]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0.8]);

  // 3D Folder Dossiers Deck data
  const folders = [
    {
      id: "folder-2022",
      year: "2022",
      title: "Smart India Hackathon",
      category: "National Finalist",
      color: "from-amber-400 to-amber-500",
      tabColor: "bg-amber-400",
      textColor: "text-amber-950",
      rotate: -14,
      x: -310,
      y: 28,
      zIndex: 10,
      targetProject: projects[5],
      items: ["Hackathon Finalist", "10,000+ Participants", "Innovation Award"],
    },
    {
      id: "folder-2023",
      year: "2023",
      title: "E-Commerce & Mobile UX",
      category: "StyleCart & QuickBite",
      color: "from-slate-300 to-slate-400",
      tabColor: "bg-slate-300",
      textColor: "text-slate-900",
      rotate: -7,
      x: -160,
      y: 12,
      zIndex: 20,
      targetProject: projects[4],
      items: ["StyleCart Redesign", "QuickBite Mobile", "Information Arch."],
    },
    {
      id: "folder-2025",
      year: "2025",
      title: "SwiftSBF & FinTech Systems",
      category: "AlphaTrade Pro & Design Tokens",
      color: "from-indigo-600 via-blue-600 to-indigo-700",
      tabColor: "bg-indigo-600",
      textColor: "text-white",
      rotate: 0,
      x: 0,
      y: -8,
      zIndex: 50,
      isCenter: true,
      targetProject: projects[0],
      items: ["AlphaTrade Pro UI", "60+ Figma Tokens", "30% Faster Handoff"],
    },
    {
      id: "folder-2024",
      year: "2024",
      title: "Health & B2B SaaS",
      category: "Medi Care & FlowCRM",
      color: "from-sky-400 to-blue-500",
      tabColor: "bg-sky-400",
      textColor: "text-sky-950",
      rotate: 8,
      x: 170,
      y: 14,
      zIndex: 30,
      targetProject: projects[2],
      items: ["Medi Care App (WCAG)", "FlowCRM Pipelines", "B.Tech Computer Sci."],
    },
    {
      id: "folder-design-system",
      year: "System",
      title: "Figma Component Library",
      category: "Design System & Tokens",
      color: "from-orange-500 to-rose-500",
      tabColor: "bg-orange-500",
      textColor: "text-white",
      rotate: 16,
      x: 320,
      y: 32,
      zIndex: 15,
      targetProject: projects[1],
      items: ["Auto Layout 5.0", "Semantic Variables", "Storybook Ready"],
    },
  ];

  return (
    <div ref={sectionRef} className="relative">
      {/* CENTERED HERO SECTION WITH 3D FOLDERS DECK */}
      <section className="relative pt-20 sm:pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden text-center">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="flex flex-col items-center"
        >
          {/* Centered Single-Line Headline */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 leading-tight max-w-5xl mb-3">
            Designing the future with clarity, craft and strategy
          </h1>

          {/* Centered Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mb-6">
            Turning complex FinTech, SaaS & mobile workflows into intuitive, high-converting digital products through human-centered UX and scalable design systems.
          </p>

          {/* Centered Action Buttons */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
            <a
              href="#work"
              className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-slate-900 bg-white text-slate-900 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-2xs hover:scale-[1.02] active:scale-[0.98]"
            >
              View Work
            </a>

            <a
              href={`mailto:${personal.email}?subject=Product%20Design%20Inquiry`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span>Get in touch</span>
              <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight size={11} className="text-white" />
              </div>
            </a>
          </div>

          {/* 3D FOLDERS DECK SHOWCASE (Matching reference image) */}
          <div className="relative w-full max-w-5xl h-[260px] sm:h-[310px] flex items-end justify-center select-none overflow-visible pt-8">
            <div className="relative w-full h-full flex items-end justify-center">
              {folders.map((folder) => {
                const isHovered = hoveredFolder === folder.id;

                return (
                  <motion.div
                    key={folder.id}
                    className="absolute w-[200px] sm:w-[260px] h-[190px] sm:h-[230px] cursor-pointer group"
                    style={{ zIndex: isHovered ? 60 : folder.zIndex }}
                    initial={{
                      x: folder.x,
                      y: folder.y,
                      rotate: folder.rotate,
                    }}
                    animate={{
                      x: isHovered ? folder.x : folder.x,
                      y: isHovered ? folder.y - 32 : folder.y,
                      rotate: isHovered ? 0 : folder.rotate,
                      scale: isHovered ? 1.08 : 1,
                    }}
                    transition={{ type: 'spring', damping: 18, stiffness: 220 }}
                    onMouseEnter={() => setHoveredFolder(folder.id)}
                    onMouseLeave={() => setHoveredFolder(null)}
                    onClick={() => onSelectProject(folder.targetProject)}
                  >
                    {/* Sliding Document Sheet popping out from inside the folder */}
                    <motion.div
                      className="absolute -top-12 inset-x-3 bg-white rounded-t-2xl p-3.5 shadow-xl border border-slate-200 text-left transition-transform duration-300"
                      animate={{
                        y: isHovered ? -24 : (folder.isCenter ? -10 : 6),
                      }}
                    >
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-900">
                          {folder.title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-400">
                          {folder.year}
                        </span>
                      </div>
                      <div className="space-y-1 text-[9px] text-slate-600 font-medium">
                        {folder.items.map((it, i) => (
                          <div key={i} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
                            <span className="truncate">{it}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Main 3D Folder Body with Tab Notch */}
                    <div className={`relative w-full h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br ${folder.color} p-4 sm:p-5 shadow-2xl flex flex-col justify-between border-t border-white/40 overflow-hidden`}>
                      {/* Top Left Folder Tab Notch */}
                      <div className={`absolute -top-0.5 left-4 px-3 py-1 rounded-t-lg ${folder.tabColor} border-t border-white/40 shadow-xs`}>
                        <span className={`text-[10px] font-mono font-bold ${folder.textColor} opacity-90`}>
                          {folder.year}
                        </span>
                      </div>

                      {/* Glossy top reflection */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/15 pointer-events-none rounded-2xl" />

                      {/* Ambient Shadow inside folder */}
                      <div className="mt-2 flex items-center justify-between">
                        <span className={`text-xs font-mono font-semibold uppercase tracking-wider ${folder.textColor} opacity-80`}>
                          {folder.category}
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/25 backdrop-blur-xs flex items-center justify-center">
                          <ArrowUpRight size={13} className={folder.textColor} />
                        </div>
                      </div>

                      {/* Giant Embossed Year Text on Folder Cover (Matching Screenshot) */}
                      <div className="text-center my-auto">
                        <span className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight ${folder.textColor} opacity-90 drop-shadow-xs`}>
                          {folder.year}
                        </span>
                      </div>

                      {/* Bottom Project Name */}
                      <div className="text-left pt-2 border-t border-white/20">
                        <span className={`text-[11px] font-bold block truncate ${folder.textColor}`}>
                          {folder.targetProject.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Shelf Horizon Line (Matching Screenshot) */}
          <div className="w-full max-w-5xl h-[2px] bg-slate-200/90 rounded-full mt-2" />
        </motion.div>
      </section>

      {/* LATEST PROJECTS BENTO SECTION */}
      <LatestProjectsBento onSelectProject={onSelectProject} />
    </div>
  );
}
