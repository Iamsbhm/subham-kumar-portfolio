import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  Workflow, 
  Cpu, 
  ShieldCheck, 
  Sliders, 
  Zap, 
  Code2, 
  Smartphone,
  Eye,
  CheckCircle2
} from 'lucide-react';

export default function SkillsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const pillars = [
    {
      id: "product-design",
      num: "01",
      badge: "User-Centered Strategy",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200/60",
      title: "Product & UI/UX Design",
      tagline: "High-conversion flows & intuitive usability",
      desc: "Transforming complex user journeys into friction-free, high-impact digital products backed by qualitative discovery and rigorous validation.",
      visualBadge: {
        label: "Validation Loop",
        sub: "Research → Wireframe → Prototype"
      },
      skills: [
        "User Research & Journey Mapping",
        "Information Architecture & Flows",
        "Interactive Prototypes (Figma & Framer)",
        "Usability Testing & Heuristic Audits",
        "Conversion & Checkout Optimization",
        "Cognitive Load Reduction (-40%)"
      ]
    },
    {
      id: "design-systems",
      num: "02",
      badge: "Scalable Architecture",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200/60",
      title: "Design Systems & Tokens",
      tagline: "Atomic component libraries & tokenized styling",
      desc: "Architecting modular multi-brand component libraries in Figma using Auto Layout 5.0, tokenized variables, and strict engineering parity.",
      visualBadge: {
        label: "Atomic System",
        sub: "60+ Tokens • Auto Layout 5.0"
      },
      skills: [
        "60+ Atomic Component Library",
        "Figma Auto Layout 5.0 & Variables",
        "Tokenized Variables (Color, Type, Space)",
        "Component State Variants (Hover, Active)",
        "Multi-Breakpoint Responsive Specs (8+)",
        "Design-to-Code Style Dictionaries"
      ]
    },
    {
      id: "frontend-accessibility",
      num: "03",
      badge: "Engineering Feasibility",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
      title: "Frontend & Accessibility",
      tagline: "Computer Science rigor & universal WCAG specs",
      desc: "Leveraging a Computer Science engineering background to produce pixel-perfect handoff specifications with WCAG 2.1 AA compliance.",
      visualBadge: {
        label: "Handoff Efficiency",
        sub: "WCAG 2.1 AA • -30% Dev Time"
      },
      skills: [
        "WCAG 2.1 AA Accessibility Standards",
        "Developer Handoff Specs (30% Faster)",
        "Frontend Logic (HTML5, CSS3, Tailwind)",
        "Interactive Micro-interactions",
        "Cross-Browser Responsive Behavior",
        "Agile & Scrum Sprint Velocity"
      ]
    }
  ];

  const tools = [
    { name: "Figma", detail: "Auto Layout 5.0 & Tokens", icon: "🎨" },
    { name: "Framer", detail: "Interactive Motion", icon: "⚡" },
    { name: "FigJam", detail: "Flows & IA Mapping", icon: "🗺️" },
    { name: "WCAG 2.1 AA", detail: "Accessibility Compliance", icon: "👁️" },
    { name: "VS Code", detail: "Frontend Parity", icon: "💻" },
    { name: "Tailwind CSS", detail: "Token Alignment", icon: "🌊" },
    { name: "React.js", detail: "Component State Parity", icon: "⚛️" },
    { name: "Miro & Notion", detail: "Handoff Documentation", icon: "📋" },
    { name: "GitHub", detail: "Version Control & Specs", icon: "🐙" },
    { name: "TradingView", detail: "Financial Chart Specs", icon: "📈" },
    { name: "Stark", detail: "Color & Contrast Testing", icon: "🎯" },
    { name: "Jira & Linear", detail: "Agile Sprint Velocity", icon: "📐" },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Core Competencies & Tooling
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-950 tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            Combining Computer Science engineering rigor with human-centered product craft to build scalable digital systems.
          </p>
        </div>
      </div>

      {/* 3 High-Craft Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            onHoverStart={() => setHoveredCard(pillar.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative bg-[#fcfaf6] rounded-[30px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:bg-white hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Corner Pin Accents */}
            <span className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />
            <span className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full border border-slate-300/60 opacity-40 pointer-events-none" />

            <div>
              {/* Header: Number & Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-orange-600 transition-colors">
                  {pillar.num}
                </span>
                <span className={`text-[10px] font-mono uppercase font-bold px-2.5 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                  {pillar.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display font-bold text-2xl text-slate-950 tracking-tight leading-snug mb-1.5 group-hover:text-orange-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-4">
                {pillar.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                {pillar.desc}
              </p>

              {/* Interactive Mini Visual Card */}
              <div className="p-3 rounded-2xl bg-white border border-[#e8dfce] shadow-2xs mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-900 block">
                    {pillar.visualBadge.label}
                  </span>
                  <span className="text-[11px] text-orange-600 font-medium">
                    {pillar.visualBadge.sub}
                  </span>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
                  <Sparkles size={12} />
                </div>
              </div>
            </div>

            {/* Skill Tags / Capabilities */}
            <div className="pt-5 border-t border-slate-200/80">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
                Core Methods & Deliverables
              </span>
              <div className="space-y-2">
                {pillar.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Production Tooling & Daily Stack Grid */}
      <div className="bg-[#f8f6f0] p-6 sm:p-8 rounded-[32px] border border-[#e8e2d4] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="font-display font-bold text-xl text-slate-950">
              Tooling & Production Stack
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Software and industry standards utilized for daily design-to-code execution.
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] font-mono font-semibold text-slate-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Production Ready</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-4 border border-[#ebe5d8] shadow-2xs flex items-center gap-3 group hover:border-orange-300 transition-colors"
            >
              <span className="text-xl shrink-0 p-2 rounded-xl bg-slate-50 group-hover:bg-orange-50 transition-colors">
                {tool.icon}
              </span>
              <div className="min-w-0">
                <span className="font-display font-bold text-xs sm:text-sm text-slate-950 block truncate group-hover:text-orange-600 transition-colors">
                  {tool.name}
                </span>
                <span className="text-[10px] text-slate-400 font-medium block truncate">
                  {tool.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
