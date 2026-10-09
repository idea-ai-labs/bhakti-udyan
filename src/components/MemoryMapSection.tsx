'use client';

import { Download, Sparkles, Map } from 'lucide-react';

export default function MemoryMapSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative z-10 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      <div className="max-w-4xl mx-auto text-center bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
          <Map className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
          Companion Learning Artifact
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
          Take the Garden With You
        </h2>

        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          A visual guide to the 40 chaupais, 8 Bagiche, and Memory Anchors designed for lifelong retention and daily contemplation.
        </p>

        {/* PDF Download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => alert("The 8 Bagiche Memory Map PDF companion is coming soon. Stay tuned!")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-slate-950 font-semibold shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Download className="w-5 h-5" />
            Download the 8 Bagiche Memory Map
          </button>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
          PDF Companion (Placeholder ready for upcoming release)
        </p>
      </div>
    </section>
  );
}
