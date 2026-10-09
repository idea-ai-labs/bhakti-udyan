'use client';

import { GARDEN_PATHS } from '../data/udyanData';
import { Compass, Sparkles, BookOpen, Heart, Flame, Shield } from 'lucide-react';

const icons = [Sparkles, BookOpen, Heart, Flame, Compass, Shield];

export default function SacredGardenNav() {
  return (
    <section className="py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
            The Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-3">
            Paths Through the Udyan
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Choose a sanctuary to explore within the sacred garden.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GARDEN_PATHS.map((path, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <a
                key={path.title}
                href={path.link || '#bagiche'}
                className="group relative bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-serif group-hover:text-amber-300 transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {path.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase">
                  <span>Enter Path</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
