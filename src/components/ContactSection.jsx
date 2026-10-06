import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Sparkles, MessageSquare, Linkedin, Globe, Github } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', projectType: 'Full-Time Role' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#10b981', '#f59e0b'],
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6366f1', '#a855f7', '#ec4899'],
    });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Editorial CTA */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Let's Build Something Exceptional</span>
            </div>

            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Have a product in mind? Let's connect.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
              Whether you are hiring for a full-time Product / UI/UX Designer role, seeking a freelance design sprint, or looking to level up your design system — I'm open to conversations.
            </p>

            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-4 mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
                Direct Email Inquiries
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="font-mono text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                  {personal.email}
                </span>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all active:scale-95 shrink-0"
                >
                  {copied ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
                </button>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <a
                href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-colors shadow-xs"
              >
                <Phone size={14} className="text-emerald-500" />
                <span>{personal.phone}</span>
              </a>

              <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
                <MapPin size={14} className="text-indigo-500" />
                <span>{personal.location}</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/60 mt-8 flex items-center gap-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Socials:</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 transition-colors"
              aria-label="Dribbble"
            >
              <Globe size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-800/80 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={18} className="text-indigo-500" />
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                  <Check size={28} />
                </div>
                <h4 className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                  Thanks for reaching out! Subham will review your note and get back to you within 24 hours at <strong>{formData.email || 'your email'}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline pt-2"
                >
                  Send another note →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor / Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-1.5">
                    Topic / Opportunity Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  >
                    <option value="Full-Time Role">Full-Time Product / UX Designer Role</option>
                    <option value="Contract / Freelance">Freelance Product Design Sprint</option>
                    <option value="Design System Audit">Design System & WCAG Audit</option>
                    <option value="Coffee / Mentorship">Design Mentorship & Networking</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-semibold block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your product, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-all shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
