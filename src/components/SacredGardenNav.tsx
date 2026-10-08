'react';
import { GARDEN_PATHS } from '@/data/udyanData';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function SacredGardenNav() {
  return (
    <section id="udyan" className="relative py-28 px-6 z-10 border-t border-cosmos-800/40 bg-cosmos-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-3">The Udyan Ecosystem</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Paths in the Cosmic Garden
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
            Different paths lead to different forms of bhakti, meaning, experience, stories, and structured learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GARDEN_PATHS.map((path) => (
            <div
              key={path.id}
              className="relative p-8 rounded-3xl bg-cosmos-900/80 border border-cosmos-700/80 backdrop-blur-md flex flex-col justify-between hover:border-gold-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs tracking-widest px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    {path.badge}
                  </span>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded ${path.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-cosmos-800 text-gray-400'}`}>
                    {path.status === 'active' ? 'Open Now' : 'Growing Garden'}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-1 group-hover:text-gold-400 transition-colors">
                  {path.title}
                </h3>
                <p className="text-gold-400/80 font-devanagari text-sm mb-3">{path.devanagariTitle}</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-4">{path.subtitle}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">{path.description}</p>
              </div>

              <div className="pt-4 border-t border-cosmos-800 flex items-center justify-between">
                <span className="text-xs text-gold-400 font-medium group-hover:underline">Explore Path</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
