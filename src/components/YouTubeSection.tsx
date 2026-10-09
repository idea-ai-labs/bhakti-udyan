'use client';

import { Youtube, Play, Film, BookOpen, Music } from 'lucide-react';

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

        <p className="text-gray-300 text-base max-w-xl mx-auto mb-10">
          Deepen your practice with recitals, introductory sessions, and complete playlists on our channel.
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 text-left">
          <a
            href="https://youtu.be/A5KJyJq5-7M"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <Film className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-amber-300">Intro Video</h4>
              <p className="text-xs text-gray-400">Watch the introduction</p>
            </div>
          </a>

          <a
            href="https://youtu.be/HPHa3sPE0dw"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <BookOpen className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-indigo-300">Opening Doha</h4>
              <p className="text-xs text-gray-400">Begin with sacred verses</p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/playlist?list=PLFd5vlGMj8tE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <Play className="w-5 h-5 text-red-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-red-300">Full Playlist</h4>
              <p className="text-xs text-gray-400">All 8 Bagiche series</p>
            </div>
          </a>

          <a
            href="https://youtu.be/aGkWo2Ehp3g"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <Music className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-emerald-300">Full Bagicha Recital</h4>
              <p className="text-xs text-gray-400">Continuous audio immersion</p>
            </div>
          </a>

          <a
            href="https://youtu.be/uim5oq-augY"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <Music className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-purple-300">Female Recital</h4>
              <p className="text-xs text-gray-400">Full Hanuman Chalisa</p>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@bhakti-udyan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all flex items-center gap-3 group"
          >
            <Youtube className="w-5 h-5 text-red-500 shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white group-hover:text-red-300">Main Channel</h4>
              <p className="text-xs text-gray-400">Subscribe & explore more</p>
            </div>
          </a>
        </div>

        {/* Primary Channel Button */}
        <a
          href="https://www.youtube.com/@bhakti-udyan"
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
