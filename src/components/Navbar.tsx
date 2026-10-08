'react';
import Link from 'next/link';
import { Sparkles, Youtube } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cosmos-950/80 border-b border-cosmos-800/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-saffron-600 p-[1px] shadow-lg glow-gold">
            <div className="w-full h-full bg-cosmos-950 rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-serif text-xl tracking-wider text-white font-bold block">BHAKTI UDYAN</span>
            <span className="text-[10px] tracking-widest text-gold-400/80 uppercase">Bhakti · Arth · Anubhuti</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="#philosophy" className="hover:text-gold-400 transition-colors">Philosophy</Link>
          <Link href="#udyan" className="hover:text-gold-400 transition-colors">Sacred Gardens</Link>
          <Link href="#bagiche" className="hover:text-gold-400 transition-colors">8 Bagiche</Link>
          <Link href="#memory-map" className="hover:text-gold-400 transition-colors">Memory Map</Link>
          <Link href="#journey" className="hover:text-gold-400 transition-colors">Start Here</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.youtube.com/@BhaktiUdyan"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-medium hover:bg-red-600/20 transition-all duration-300"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>YouTube Home</span>
          </a>
          <a
            href="#bagiche"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-gold-500 to-saffron-600 text-cosmos-950 font-semibold text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-lg glow-gold"
          >
            Enter Udyan
          </a>
        </div>
      </div>
    </header>
  );
}
