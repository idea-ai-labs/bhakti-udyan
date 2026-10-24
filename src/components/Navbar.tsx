'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Youtube, Menu, X } from 'lucide-react';
import { SITE_LINKS } from '../data/udyanData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#020617]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand — now matches your cinematic hero */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF7A] to-[#E8A14A] p- shadow-lg">
            <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4AF7A] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <span className="font-serif text- tracking-[0.14em] text-white font-bold block">BHAKTI UDYAN</span>
            <span className="text- tracking-[0.18em] text-[#D4AF7A]/80 uppercase">Bhakti · Arth · Anubhuti</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text- text-gray-300">
          <Link href="#philosophy" className="hover:text-[#D4AF7A] transition-colors">Philosophy</Link>
          <Link href="#udyan" className="hover:text-[#D4AF7A] transition-colors">Sacred Gardens</Link>
          <Link href="#bagiche" className="hover:text-[#D4AF7A] transition-colors">8 Bagiche</Link>
          <Link href="#memory-map" className="hover:text-[#D4AF7A] transition-colors">Memory Map</Link>
          <Link href="/yatra" className="hover:text-[#D4AF7A] transition-colors">Start Here</Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* YouTube Channel */}
          <a
            href={SITE_LINKS.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:bg-white/10 hover:text-white transition-all"
          >
            <Youtube className="w-4 h-4 text-red-500" />
            <span>@bhakti-udyan</span>
          </a>

          {/* Subscribe — with confirmation */}
          <a
            href={SITE_LINKS.youtubeSubscribe}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-semibold hover:bg-red-500 transition-all shadow-lg shadow-red-600/20"
          >
            <Youtube className="w-4 h-4 fill-white" />
            Subscribe
          </a>

          <Link
            href="#bagiche"
            className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF7A] to-[#E8A14A] text-[#0F2E23] font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-all shadow-lg"
          >
            Enter Udyan
          </Link>

          {/* Mobile menu */}
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-white">
            {open? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-4 text-sm text-gray-300">
          <Link href="#philosophy" onClick={() => setOpen(false)}>Philosophy</Link>
          <Link href="#udyan" onClick={() => setOpen(false)}>Sacred Gardens</Link>
          <Link href="#bagiche" onClick={() => setOpen(false)}>8 Bagiche</Link>
          <Link href="#memory-map" onClick={() => setOpen(false)}>Memory Map</Link>
          <Link href="/yatra" onClick={() => setOpen(false)}>Start Here</Link>
          <div className="flex gap-3 pt-4">
            <a href={SITE_LINKS.youtubeChannel} target="_blank" className="flex-1 inline-flex justify-center items-center gap-2 py-3 rounded-full bg-white/5 border border-white/10 text-white">YouTube</a>
            <a href={SITE_LINKS.youtubeSubscribe} target="_blank" className="flex-1 inline-flex justify-center items-center gap-2 py-3 rounded-full bg-red-600 text-white">Subscribe</a>
          </div>
        </div>
      )}
    </header>
  );
}
