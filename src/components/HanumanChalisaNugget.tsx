'react';
import { Sparkles, BookOpen, Layers } from 'lucide-react';

export default function HanumanChalisaNugget() {
  return (
    <section className="relative py-24 px-6 z-10 border-t border-cosmos-800/40">
      <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-cosmos-900 via-cosmos-800 to-cosmos-900 border border-gold-500/30 p-8 sm:p-14 relative overflow-hidden shadow-2xl">
        {/* Background glow ornament */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>One Garden within Bhakti Udyan</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            Hanuman Chalisa
          </h2>
          <p className="text-gold-400 text-lg font-serif mb-6">
            40 चौपाइयाँ · 8 बगीचे · 8 दिन
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            Rather than trying to memorize 40 chaupais through brute repetition alone, the Hanuman Chalisa is organized into a magnificent mnemonic memory palace.
          </p>

          <div className="p-6 rounded-2xl bg-cosmos-950/60 border border-cosmos-700/60 mb-10 inline-block">
            <p className="font-devanagari text-xl sm:text-2xl text-gold-300 font-semibold tracking-wide">
              रट्टा नहीं — कहानी और चित्रों से याद करें।
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-cosmos-900/60 border border-cosmos-700/40">
              <Layers className="w-6 h-6 text-gold-400 mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">8 Bagiche</h4>
              <p className="text-xs text-gray-400">Structured gardens breaking down the 40 chaupais.</p>
            </div>
            <div className="p-5 rounded-2xl bg-cosmos-900/60 border border-cosmos-700/40">
              <BookOpen className="w-6 h-6 text-saffron-400 mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">5 Anchors per Garden</h4>
              <p className="text-xs text-gray-400">Vivid visual memory anchors for effortless recall.</p>
            </div>
            <div className="p-5 rounded-2xl bg-cosmos-900/60 border border-cosmos-700/40">
              <Sparkles className="w-6 h-6 text-lotus-rose mb-3" />
              <h4 className="font-bold text-white text-sm mb-1">Deep Arth</h4>
              <p className="text-xs text-gray-400">Understanding the inner philosophical meaning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
