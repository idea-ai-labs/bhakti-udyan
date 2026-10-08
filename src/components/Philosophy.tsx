'react';
import { PHILOSOPHY_DATA } from '@/data/udyanData';
import { Droplet, Flower2, Sparkles, ArrowRight } from 'lucide-react';

export default function Philosophy() {
  const { seed, water, flower, evolution } = PHILOSOPHY_DATA;

  return (
    <section id="philosophy" className="relative py-28 px-6 z-10 border-t border-cosmos-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-3">Core Philosophy</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            Not merely chanting. <br />A profound transformation.
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Bhakti Udyan is designed to take you beyond rote memorization into living realization.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Seed */}
          <div className="relative p-8 rounded-3xl bg-cosmos-900/70 border border-cosmos-700/60 backdrop-blur-md flex flex-col items-center text-center group hover:border-gold-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-6 text-gold-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-gold-400/80 mb-1">{seed.meaning}</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{seed.term} <span className="font-devanagari text-lg text-gold-300">({seed.devanagari})</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">{seed.description}</p>
          </div>

          {/* Water */}
          <div className="relative p-8 rounded-3xl bg-cosmos-900/70 border border-cosmos-700/60 backdrop-blur-md flex flex-col items-center text-center group hover:border-gold-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-saffron-500/10 border border-saffron-500/30 flex items-center justify-center mb-6 text-saffron-400 group-hover:scale-110 transition-transform">
              <Droplet className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-saffron-400/80 mb-1">{water.meaning}</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{water.term} <span className="font-devanagari text-lg text-saffron-300">({water.devanagari})</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">{water.description}</p>
          </div>

          {/* Flower */}
          <div className="relative p-8 rounded-3xl bg-cosmos-900/70 border border-cosmos-700/60 backdrop-blur-md flex flex-col items-center text-center group hover:border-gold-500/50 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-lotus-pink/10 border border-lotus-pink/30 flex items-center justify-center mb-6 text-lotus-rose group-hover:scale-110 transition-transform">
              <Flower2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase tracking-widest text-lotus-rose mb-1">{flower.meaning}</span>
            <h3 className="font-serif text-2xl font-bold text-white mb-2">{flower.term} <span className="font-devanagari text-lg text-lotus-rose">({flower.devanagari})</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed">{flower.description}</p>
          </div>
        </div>

        {/* Evolutionary flow banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-cosmos-900 via-cosmos-800 to-cosmos-900 border border-gold-500/20 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className="text-xs tracking-widest uppercase text-gold-400">The Spiritual Flow:</span>
          <span className="font-serif text-white tracking-wider text-sm sm:text-base">Understand → Feel → Remember → Live</span>
          <ArrowRight className="w-4 h-4 text-gold-400 hidden sm:inline" />
          <span className="text-xs text-gray-400 italic">({evolution})</span>
        </div>
      </div>
    </section>
  );
}
