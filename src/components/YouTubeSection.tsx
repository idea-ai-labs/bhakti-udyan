'use client';

import { Youtube, Play } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative z-10 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto text-center">
        <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
          <Youtube className="w-6 h-6" />
        </div>

        <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">
          Continue the Journey
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">
          Watch & Practice on YouTube
        </h2>

        <p className="text-gray-300 text-base max-w-xl mx-auto mb-8">
          Deepen your understanding of each Bagicha with visual storytelling and guided audio sessions.
        </p>

        <a
          href="https://www.youtube.com/@BhaktiUdyan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all duration-300"
        >
          <Play className="w-4 h-4 fill-current" />
          Visit Bhakti Udyan YouTube Channel →
        </a>
      </div>
    </section>
  );
}
