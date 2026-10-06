import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function TestimonialsSection() {
  const { testimonials } = portfolioData;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-slate-200/80">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-slate-200/80">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`flex flex-col justify-between ${
              idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'
            }`}
          >
            <div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 font-normal">
                {item.quote}
              </p>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold leading-relaxed mb-8">
                {item.highlight}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80">
              <h4 className="font-bold text-xs sm:text-sm text-slate-950">{item.author}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.role}, {item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
