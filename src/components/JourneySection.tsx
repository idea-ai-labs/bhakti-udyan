'use client';

import { JOURNEY_STEPS } from '../data/udyanData';
import { Sparkles } from 'lucide-react';

export default function JourneySection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative z-10 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            Visitor Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-3">
            Walking Through the Udyan
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Your step-by-step path from first discovery to deep retention.
          </p>
        </div>

        <div className="space-y-6">
          {JOURNEY_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center font-serif font-bold text-xl text-amber-400 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif text-white mb-1 group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex items-center text-xs font-semibold text-gray-500 group-hover:text-amber-400 transition-colors uppercase tracking-widest">
                <span>Step 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
