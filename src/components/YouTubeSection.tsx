'use client';
import { Youtube, Play, Film, BookOpen, Music } from 'lucide-react';
import { BAGICHE_DATA, SITE_LINKS } from '../data/udyanData';

const getYouTubeThumbnail = (url: string) => {
  const m = url.match(/(?:youtu\.be\/|v=)([^&?/]+)/);
  return m? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : "";
};

export default function YouTubeSection() {
  return (
    <section className="py-20 px-4 sm:px-6 relative z-10 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-5 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Youtube className="w-6 h-6" />
          </div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2 block">Continue the Journey</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-4">Watch & Practice on YouTube</h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto mb-10">Deepen your practice with recitals for each Bagicha, from your data file.</p>
        </div>

        {/* AUTO-GENERATED FROM BAGICHE_DATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BAGICHE_DATA.map(b => b.youtubeUrl && (
            <a key={b.id} href={b.youtubeUrl} target="_blank" rel="noopener noreferrer"
              className="group overflow-hidden rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all">
              <div className="aspect-video relative overflow-hidden bg-black">
                <img src={getYouTubeThumbnail(b.youtubeUrl)} alt={b.englishName} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center"><Play className="w-10 h-10 text-white fill-white/80" /></div>
              </div>
              <div className="p-3">
                <div className="text- tracking-widest text-amber-400 uppercase">{b.chaupaiRange} • Bagicha {b.id}</div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 mt-1 line-clamp-1">{b.hindiName}</h4>
                <p className="text-xs text-gray-400 line-clamp-1">{b.englishName}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href={SITE_LINKS.youtubeChannel} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-white hover:border-red-500/50 transition-all">
            <Youtube className="w-5 h-5 text-red-500" /> @bhakti-udyan
          </a>
          <a href={SITE_LINKS.youtubeSubscribe} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-600/20 hover:bg-red-500 transition-all">
            <Play className="w-4 h-4 fill-current" /> Subscribe on YouTube →
          </a>
        </div>
      </div>
    </section>
  );
}
