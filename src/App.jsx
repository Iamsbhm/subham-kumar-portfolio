import React, { useState } from 'react';
import Header from './components/Header';
import HeroScrollExperience from './components/HeroScrollExperience';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import FeaturedCaseStudiesSection from './components/FeaturedCaseStudiesSection';
import AboutSection from './components/AboutSection';
import HireMeSection from './components/HireMeSection';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-950 selection:text-white">
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Pill Header */}
      <Header
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Container with minimal clean layout */}
      <div className="relative max-w-6xl mx-auto">
        <main className="relative">
          <HeroScrollExperience
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <ExperienceSection onOpenResume={() => setResumeOpen(true)} />
          <SkillsSection />
          <FeaturedCaseStudiesSection
            onSelectProject={(project) => setSelectedProject(project)}
          />
          <AboutSection onOpenResume={() => setResumeOpen(true)} />
          <HireMeSection onOpenResume={() => setResumeOpen(true)} />
        </main>
      </div>

      {/* High-Contrast Full-Width Signature Black Footer */}
      <Footer />

      {/* Floating Bottom Contact Pill */}
      <FloatingContactWidget />

      {/* Fullscreen Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      )}

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
    </ErrorBoundary>
  );
}
