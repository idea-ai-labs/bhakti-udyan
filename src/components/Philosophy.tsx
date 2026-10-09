'use client';

import { Sprout, Droplets, Flower2 } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/udyanData';

export default function Philosophy() {
  const { seed, water, flower, evolution } = PHILOSOPHY_DATA;

  return (
    <section className="py-24 px-4 sm:px-6 relative z-10 border-t border-slate-800/60 bg-slate-950/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            The Core Teaching
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            Bhakti · Arth · Anubhuti
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Spiritual learning is a living garden. It grows from devotion to realization.
          </p>
        </div>

        {/* 3 Growth Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-amber-500/20 via-indigo-500/40 to-amber-500/20 -translate-y-1/2 z-0" />

          {/* Stage 1: Bhakti */}
          <div className="relative z-10 bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-8 text-center transition-all duration-300 group shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <Sprout className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">{seed.meaning}</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-serif">{seed.term} ({seed.devanagari})</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {seed.description}
            </p>
          </div>

          {/* Stage 2: Arth */}
          <div className="relative z-10 bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-8 text-center transition-all duration-300 group shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <Droplets className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">{water.meaning}</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-serif">{water.term} ({water.devanagari})</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {water.description}
            </p>
          </div>

          {/* Stage 3: Anubhuti */}
          <div className="relative z-10 bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-2xl p-8 text-center transition-all duration-300 group shadow-xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <Flower2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-wider text-purple-400 font-semibold">{flower.meaning}</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-3 font-serif">{flower.term} ({flower.devanagari})</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {flower.description}
            </p>
          </div>
        </div>

        {/* Journey Ribbon */}
        <div className="mt-16 text-center bg-slate-900/40 border border-slate-800/80 rounded-full py-4 px-6 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-sm font-medium text-gray-300 tracking-wide">
            {evolution}
          </p>
        </div>
      </div>
    </section>
  );
}
