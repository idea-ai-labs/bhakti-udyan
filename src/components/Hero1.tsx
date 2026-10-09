'react';
import { Sparkles, Compass, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 pt-12 pb-24 z-10">
      {/* Central Mandala / Lotus subtle glow ring */}
      <div className="absolute w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full border border-gold-500/10 animate-slow-spin pointer-events-none flex items-center justify-center">
        <div className="w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] rounded-full border border-saffron-500/25 border-dashed" />
      </div>

      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs tracking-widest uppercase mb-8 glow-gold">
        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        <span>A Sacred Cosmic Garden of Devotion</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-wide max-w-4xl mb-4">
        BHAKTI UDYAN
      </h1>
      
      <p className="text-gold-400 font-serif text-lg sm:text-2xl tracking-[0.2em] uppercase mb-10">
        Bhakti · Arth · Anubhuti
      </p>

      {/* Poetic statement */}
      <div className="max-w-xl mx-auto mb-12 p-6 rounded-2xl bg-cosmos-900/60 border border-cosmos-700/80 backdrop-blur-md shadow-2xl">
        <p className="font-devanagari text-lg sm:text-xl text-gray-200 leading-relaxed mb-3">
          जहाँ भक्ति समझ में उतरती है,<br />
          अर्थ अनुभव में बदलता है,<br />
          और अनुभव स्मृति बन जाता है।
        </p>
        <div className="w-12 h-[1px] bg-gold-500/40 mx-auto my-3" />
        <p className="text-xs tracking-[0.25em] uppercase text-gold-400/80">
          Understand · Experience · Remember
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#bagiche"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-saffron-500 to-gold-600 text-cosmos-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl glow-saffron flex items-center justify-center gap-3 group"
        >
          <span>Enter the Udyan</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#philosophy"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-cosmos-900/80 border border-gold-500/30 text-gray-200 font-medium text-sm tracking-wide hover:bg-cosmos-800 transition-all flex items-center justify-center gap-2"
        >
          <Compass className="w-4 h-4 text-gold-400" />
          <span>Explore the Journey</span>
        </a>
      </div>
    </section>
  );
}
