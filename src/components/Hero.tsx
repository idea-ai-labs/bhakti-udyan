'use client';
import { useState, useEffect } from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { SITE_LINKS } from '../data/udyanData';

const HEROES = [
  { desktop: "/heroes/bu-hero-01-sacred-garden-desktop.webp", mobile: "/heroes/bu-hero-01-sacred-garden-mobile.webp" },
  { desktop: "/heroes/bu-hero-02-bhakti-desktop.webp", mobile: "/heroes/bu-hero-02-bhakti-mobile.webp" },
  { desktop: "/heroes/bu-hero-03-arth-desktop.webp", mobile: "/heroes/bu-hero-03-arth-mobile.webp" },
  { desktop: "/heroes/bu-hero-04-anubhuti-desktop.webp", mobile: "/heroes/bu-hero-04-anubhuti-mobile.webp" },
  { desktop: "/heroes/bu-hero-05-eight-bagiche-desktop.webp", mobile: "/heroes/bu-hero-05-eight-bagiche-mobile.webp" },
  { desktop: "/heroes/bu-hero-06-hanuman-chalisa-desktop.webp", mobile: "/heroes/bu-hero-06-hanuman-chalisa-mobile.webp" },
  { desktop: "/heroes/bu-hero-07-learning-paths-desktop.webp", mobile: "/heroes/bu-hero-07-learning-paths-mobile.webp" },
  { desktop: "/heroes/bu-hero-08-lotus-journey-desktop.webp", mobile: "/heroes/bu-hero-08-lotus-journey-mobile.webp" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIndex((n) => (n + 1) % HEROES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h- flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 z-10 overflow-hidden">
      {/* CINEMATIC ROTATOR */}
      <div className="absolute inset-0 z-0">
        {HEROES.map((h, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration- ease-in-out ${i === index? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={isMobile? h.mobile : h.desktop}
              alt={`Bhakti Udyan Hero ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Readability gradient - left calm for desktop, top for mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/30 to-[#020617]/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-transparent to-transparent hidden md:block" />
          </div>
        ))}
      </div>

      {/* CONTENT - your original copy preserved */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="tracking-wide uppercase font-medium">A Sacred Garden Beneath a Cosmic Sky</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4 font-serif drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
          Bhakti Udyan
        </h1>

        <p className="text-lg sm:text-2xl text-amber-100 font-light tracking-wider mb-8 font-serif">
          Bhakti · Arth · Anubhuti
        </p>

        <p className="max-w-2xl text-gray-100 text-base sm:text-lg leading-relaxed mb-10 font-light drop-shadow-[0_1px_10px_rgba(0,0,0,0.6)]">
          Step into a living spiritual sanctuary where devotion is cultivated as a seed, nourished by deep understanding, and brought into full blossom through direct inner experience.
        </p>

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
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900/60 border border-slate-200/20 text-gray-100 font-medium hover:bg-slate-800/80 backdrop-blur-md transition-all"
          >
            Explore the 8 Bagiche
          </a>
        </div>

        {/* Dots for rotator */}
        <div className="flex gap-2 mt-10">
          {HEROES.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} className={`h-1.5 rounded-full transition-all ${i === index? 'w-8 bg-amber-400' : 'w-1.5 bg-white/40'}`} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-70">
        <span className="text- text-gray-300 tracking-widest uppercase mb-2">Scroll to Walk</span>
        <div className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
