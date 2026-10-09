'use client';

import { useState } from 'react';
import { BAGICHE_DATA, Bagicha } from '../data/udyanData';
import { Flower, Compass, Youtube, CheckCircle2, ChevronRight } from 'lucide-react';

export default function BagicheSection() {
  const [selectedBagicha, setSelectedBagicha] = useState<Bagicha>(BAGICHE_DATA[0]);

  return (
    <section id="bagiche" className="py-24 px-4 sm:px-6 relative z-10 border-t border-slate-800/60 bg-slate-950/60 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-3 block">
            One Garden Within Bhakti Udyan
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">
            The 8 Bagiche of Hanuman Chalisa
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mb-4">
            40 चौपाइयाँ · 8 बगीचे · 8 दिन
          </p>
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 text-amber-300 text-sm font-medium">
            रट्टा नहीं — कहानी और चित्रों से याद करें।
          </div>
        </div>

        {/* Celestial Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 8 Bagiche Celestial Nodes (List/Grid) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-2">
              Select a Garden Node
            </h3>
            {BAGICHE_DATA.map((bagicha) => {
              const isSelected = selectedBagicha.id === bagicha.id;
              return (
                <button
                  key={bagicha.id}
                  onClick={() => setSelectedBagicha(bagicha)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between group border ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-500/20 to-slate-900 border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-sm ${
                      isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-amber-400 group-hover:bg-slate-700'
                    }`}>
                      0{bagicha.id}
                    </div>
                    <div>
                      <h4 className={`font-serif font-bold text-base ${isSelected ? 'text-amber-300' : 'text-white'}`}>
                        {bagicha.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {bagicha.chaupaiRange}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isSelected ? 'text-amber-400 translate-x-1' : 'text-gray-600 group-hover:text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Bagicha Detailed Experience */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase">
                Bagicha 0{selectedBagicha.id} of 08
              </span>
              <span className="text-sm font-mono text-gray-400">
                {selectedBagicha.chaupaiRange}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mb-3">
              {selectedBagicha.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              {selectedBagicha.description}
            </p>

            {/* Memory Anchors Section */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-4">
                Memory Anchors (Landmarks in the Garden)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedBagicha.anchors.map((anchor, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950/50 border border-slate-800/80 rounded-xl p-3.5">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm text-gray-200 font-medium">
                      {anchor}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Action */}
            {selectedBagicha.youtubeUrl && (
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-gray-400">Continue learning on our channel:</span>
                <a
                  href={selectedBagicha.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 hover:bg-red-600/30 transition-all font-medium text-sm"
                >
                  <Youtube className="w-4 h-4 text-red-400" />
                  Watch Bagicha 0{selectedBagicha.id} on YouTube →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
