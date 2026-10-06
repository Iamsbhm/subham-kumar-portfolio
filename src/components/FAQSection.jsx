import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function FAQSection() {
  const { personal, faqs } = portfolioData;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Col: Title & Accordions */}
        <div className="lg:col-span-7">
          <h2 className="font-display font-bold text-5xl sm:text-6xl text-slate-950 tracking-tight leading-[1.05] mb-12">
            Your questions
            <br />
            <span className="text-slate-400 font-semibold">answered.</span>
          </h2>

          <div className="space-y-0 divide-y divide-slate-200/80 border-y border-slate-200/80">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-base sm:text-lg font-semibold text-slate-900 group-hover:text-slate-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 text-slate-950' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm text-slate-600 leading-relaxed font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col: "Still not sure? Book a free discovery call" Card */}
        <div className="lg:col-span-5 lg:pl-4">
          <div className="p-8 rounded-[32px] bg-[#fafafa] border border-slate-200/80 shadow-xs space-y-6">
            <div className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center text-sm font-bold font-display shadow-xs overflow-hidden">
              SK
            </div>

            <div>
              <span className="text-base text-slate-500 font-medium block">
                Still not sure?
              </span>
              <h3 className="font-display font-bold text-3xl text-slate-950 tracking-tight leading-tight mt-1">
                Book a free discovery call.
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tell me about your product and what's not working — I'll tell you honestly whether I can help, what the scope would look like, and how fast we can ship.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personal.email}?subject=Free%20Discovery%20Call%20Request`}
                className="w-full py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                <span>Book a discovery call</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
