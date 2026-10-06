import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Sparkles, Check, ChevronRight, Bell, AlertCircle, Copy, Eye, Zap } from 'lucide-react';

export default function InteractivePlayground() {
  const [buttonVariant, setButtonVariant] = useState('primary');
  const [buttonSize, setButtonSize] = useState('md');
  const [isToggled, setIsToggled] = useState(true);
  const [inputState, setInputState] = useState('filled');
  const [badgeColor, setBadgeColor] = useState('indigo');
  const [copiedToken, setCopiedToken] = useState(null);

  const tokens = [
    { name: '--color-primary-500', hex: '#6366f1', label: 'Indigo Core' },
    { name: '--color-success-500', hex: '#10b981', label: 'Emerald Mint' },
    { name: '--color-warning-500', hex: '#f59e0b', label: 'Amber Warm' },
    { name: '--color-surface-card', hex: '#161e31', label: 'Deep Slate' },
  ];

  const handleCopyToken = (name) => {
    navigator.clipboard.writeText(`var(${name})`);
    setCopiedToken(name);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="design-system" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sliders size={13} />
            <span>Interactive Figma System</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
            Design Token & UI Playground
          </h2>
        </div>
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
          Live inspector demonstrating scalable Auto Layout atomic components, accessible states, and semantic tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Controls */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 space-y-6">
          <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <Sliders size={18} className="text-indigo-500" />
            <span>Component Variant Controller</span>
          </h3>

          {/* Button Style Variant */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
              Button Variant
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['primary', 'secondary', 'destructive'].map((v) => (
                <button
                  key={v}
                  onClick={() => setButtonVariant(v)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                    buttonVariant === v
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Button Size */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
              Scale / Density
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'sm', label: 'Compact (32px)' },
                { id: 'md', label: 'Standard (44px)' },
                { id: 'lg', label: 'Hero (54px)' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setButtonSize(s.id)}
                  className={`px-2 py-2 rounded-xl text-xs font-semibold transition-all ${
                    buttonSize === s.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input State */}
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2 font-semibold">
              Form Input State
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['default', 'filled', 'error'].map((st) => (
                <button
                  key={st}
                  onClick={() => setInputState(st)}
                  className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-all ${
                    inputState === st
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Live Interactive Canvas */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-slate-100/70 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Live Render Stage
              </span>
              <span className="text-[11px] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                WCAG 2.1 AA Compliant
              </span>
            </div>

            {/* Interactive Components Demo */}
            <div className="space-y-6">
              {/* Dynamic Button Preview */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">Atom: Button Component</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Interactive Click State</span>
                </div>

                <button
                  className={`rounded-2xl font-semibold transition-all flex items-center gap-2 ${
                    buttonSize === 'sm' ? 'px-3 py-1.5 text-xs' : buttonSize === 'lg' ? 'px-6 py-3.5 text-base' : 'px-4 py-2.5 text-sm'
                  } ${
                    buttonVariant === 'primary'
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 active:scale-95'
                      : buttonVariant === 'secondary'
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 active:scale-95'
                      : 'bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-500/20 active:scale-95'
                  }`}
                >
                  <Sparkles size={16} />
                  <span>Execute Order</span>
                </button>
              </div>

              {/* Dynamic Input Preview */}
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Account Identifier / Trader ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    readOnly
                    value={inputState === 'filled' ? 'SUBHAM-PRO-TRADER-99' : inputState === 'error' ? 'INVALID_ADDRESS' : ''}
                    placeholder="Enter wallet or email..."
                    className={`w-full px-4 py-3 rounded-xl text-sm font-mono border transition-all ${
                      inputState === 'error'
                        ? 'border-rose-500 bg-rose-50/50 dark:bg-rose-950/20 text-rose-600 dark:text-rose-400'
                        : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500'
                    }`}
                  />
                  {inputState === 'error' && (
                    <AlertCircle size={16} className="absolute right-3.5 top-3.5 text-rose-500" />
                  )}
                </div>
                {inputState === 'error' && (
                  <span className="text-[11px] text-rose-500 font-mono mt-1 block">
                    Error: Address format does not match ERC-20 regex rule.
                  </span>
                )}
              </div>

              {/* Toggle Switch */}
              <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 block">
                    Real-Time Order Depth Telemetry
                  </span>
                  <span className="text-[11px] text-slate-400">Stream L2 book updates at 60fps</span>
                </div>

                <button
                  onClick={() => setIsToggled(!isToggled)}
                  className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                    isToggled ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      isToggled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Token Palette Bar */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 mt-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-3">
              Semantic Tokens (Click to Copy Variable)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {tokens.map((token) => (
                <button
                  key={token.name}
                  onClick={() => handleCopyToken(token.name)}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left hover:border-indigo-500 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-md shadow-sm" style={{ backgroundColor: token.hex }} />
                    <span className="text-[11px] font-mono text-slate-700 dark:text-slate-300 truncate max-w-[80px]">
                      {token.label}
                    </span>
                  </div>
                  {copiedToken === token.name ? (
                    <Check size={12} className="text-emerald-500" />
                  ) : (
                    <Copy size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
