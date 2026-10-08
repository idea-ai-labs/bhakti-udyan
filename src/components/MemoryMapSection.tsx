'react';
import { Download, Compass, Sparkles } from 'lucide-react';

export default function MemoryMapSection() {
  return (
    <section id="memory-map" className="relative py-28 px-6 z-10 border-t border-cosmos-800/40 bg-cosmos-900/20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs tracking-widest uppercase mb-6">
          <Compass className="w-3.5 h-3.5 text-gold-400" />
          <span>Mnemonic Architecture</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
          The 8 Bagiche Memory Map
        </h2>
        
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Instead of seeing 40 disconnected lines, experience a seamless visual journey through space, imagery, narrative, and memory.
        </p>

        {/* Visual Map Flow Graphic */}
        <div className="p-8 sm:p-12 rounded-3xl bg-cosmos-900/80 border border-cosmos-700/80 backdrop-blur-md mb-12 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="px-5 py-3 rounded-xl bg-cosmos-950 border border-gold-500/40 text-gold-300 font-serif font-bold text-sm">
              स्थान (Space)
            </div>
            <span className="text-gold-500 font-bold hidden md:inline">→</span>
            <div className="px-5 py-3 rounded-xl bg-cosmos-950 border border-saffron-500/40 text-saffron-300 font-serif font-bold text-sm">
              चित्र (Image)
            </div>
            <span className="text-gold-500 font-bold hidden md:inline">→</span>
            <div className="px-5 py-3 rounded-xl bg-cosmos-950 border border-lotus-pink/40 text-lotus-rose font-serif font-bold text-sm">
              कथा (Story)
            </div>
            <span className="text-gold-500 font-bold hidden md:inline">→</span>
            <div className="px-5 py-3 rounded-xl bg-cosmos-950 border border-emerald-500/40 text-emerald-300 font-serif font-bold text-sm">
              स्मृति (Memory)
            </div>
          </div>
        </div>

        <button
          onClick={() => alert("Memory Map PDF download is preparing. Coming soon!")}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-saffron-500 to-gold-600 text-cosmos-950 font-bold text-sm tracking-wider uppercase transition-all shadow-xl glow-saffron inline-flex items-center gap-3 hover:scale-105"
        >
          <Download className="w-4 h-4" />
          <span>Open the 8 Bagiche Memory Map (PDF)</span>
        </button>
      </div>
    </section>
  );
}
