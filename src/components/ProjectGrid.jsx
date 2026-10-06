import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export function ProjectCard({ project, onSelectProject, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group cursor-pointer relative aspect-[4/3] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-500"
      onClick={() => onSelectProject(project)}
    >
      {/* Full-Bleed Image Frame */}
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
        loading="lazy"
      />

      {/* Gradient Overlay for bottom text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Pagination Dot (as seen on Screenshot 2) */}
      <div className="absolute top-6 right-6 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-white/90"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
      </div>

      {/* Project Title overlay at Bottom Left (matching screenshot 2) */}
      <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function ProjectGrid({ onSelectProject }) {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      <div className="mb-12">
        <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight">
          Latest Projects
        </h2>
      </div>

      {/* 2-Column Grid (matching Screenshot 2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>
    </section>
  );
}
