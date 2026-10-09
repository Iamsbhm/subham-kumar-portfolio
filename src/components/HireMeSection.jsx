import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Globe, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Linkedin, 
  Github, 
  MessageSquare,
  Download
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function HireMeSection({ onOpenResume }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.85 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
            Let's Collaborate & Build
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-950 tracking-tight leading-[1.08]">
            Hire me for your next
            <br />
            <span className="text-slate-400 font-semibold">flagship product.</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md leading-relaxed">
            Open for remote full-time Product / UI/UX Designer opportunities, dedicated sprint contracts, and scalable design system buildouts.
          </p>
        </div>
      </div>

      {/* Main Hire Me Bento Box */}
      <div className="bg-[#f8f6f0] p-4 sm:p-8 rounded-[36px] border border-[#e8e2d4] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Direct Outreach & Contact Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            
            {/* Primary Email Card with 1-Click Copy */}
            <motion.div
              whileHover={{ y: -2 }}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Direct Email Outreach
                </span>
                <span className="text-[11px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Responds in &lt; 24h
                </span>
              </div>

              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-950 tracking-tight break-all mb-1">
                  {personal.email}
                </h3>
                <p className="text-slate-500 text-xs sm:text-[13px]">
                  Feel free to send an email with your project scope or job opportunity.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold transition-all shadow-xs active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personal.email}?subject=Product%20Design%20Inquiry%20from%20Portfolio`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold transition-colors border border-slate-200/80"
                >
                  <Mail size={14} />
                  <span>Open Mail App</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>

            {/* Contact Details & Quick Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone & WhatsApp */}
              <div className="bg-white rounded-[24px] p-5 border border-[#ebe5d8] shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="font-display font-bold text-sm sm:text-base text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    {personal.phone}
                  </a>
                </div>
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700">
                  <Phone size={16} />
                </div>
              </div>

              {/* Location & Timezone */}
              <div className="bg-white rounded-[24px] p-5 border border-[#ebe5d8] shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Location & Timezone
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-slate-900 block">
                    Delhi, India (IST)
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    US / EU / APAC Overlap
                  </span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700">
                  <Clock size={16} />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Availability Status & Deliverables (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-[28px] p-6 sm:p-7 border border-[#ebe5d8] shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div>
              {/* Live Status Badge */}
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 w-fit mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-800">
                  Available for Immediate Hire
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-950 tracking-tight mb-2">
                What you get when you hire me:
              </h3>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Senior execution velocity with engineering feasibility from day one.
              </p>

              {/* Value Bullet Points */}
              <div className="space-y-3.5 mb-8">
                {[
                  { title: "Zero-Friction Dev Handoff", desc: "Pixel-perfect Figma specs reducing frontend time by 30%." },
                  { title: "Scalable Atomic Design Systems", desc: "60+ tokenized components in Figma Auto Layout 5.0." },
                  { title: "Measurable Product ROI", desc: "User research and cognitive friction elimination (-40%)." },
                  { title: "WCAG 2.1 AA Accessibility", desc: "Universal contrast, keyboard flows, and touch standards." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-slate-500 leading-tight">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Resume */}
            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href="/Subham-Kumar-Resume.pdf"
                download="Subham-Kumar-Resume.pdf"
                className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-slate-950 text-white hover:bg-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Download size={14} />
                <span>Download Full Resume (PDF)</span>
              </a>

              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center justify-center transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 flex items-center justify-center transition-colors"
                title="GitHub Profile"
              >
                <Github size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
