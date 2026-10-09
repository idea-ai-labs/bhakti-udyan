'use client';

import { Sparkles, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 z-10">
      {/* Sacred Garden Luminous Focal Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm mb-6 backdrop-blur-md animate-float">
        <Sparkles className="w-4 h-4 text-amber-400" />
        <span className="tracking-wide uppercase font-medium">A Sacred Garden Beneath a Cosmic Sky</span>
      </div>

      {/* Main Identity */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 font-serif">
        Bhakti Udyan
      </h1>

      <p className="text-lg sm:text-2xl text-amber-200/90 font-light tracking-wider mb-8 font-serif">
        Bhakti · Arth · Anubhuti
      </p>

      {/* Poetic Message */}
      <p className="max-w-2xl text-gray-300 text-base sm:text-lg leading-relaxed mb-10 font-light">
        Step into a living spiritual sanctuary where devotion is cultivated as a seed, nourished by deep understanding, and brought into full blossom through direct inner experience.
      </p>

      {/* Primary CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <a
          href="#bagiche"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <Compass className="w-5 h-5" />
          Enter the Udyan
        </a>
        
        <a
          href="#bagiche"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900/80 border border-slate-700/80 text-gray-200 font-medium hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
        >
          Explore the 8 Bagiche
        </a>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs text-gray-400 tracking-widest uppercase mb-2">Scroll to Walk</span>
        <div className="w-5 h-9 border-2 border-gray-500/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
