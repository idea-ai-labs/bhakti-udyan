'react';
import { Youtube, ArrowRight } from 'lucide-react';

export default function YouTubeSection() {
  return (
    <section className="relative py-24 px-6 z-10 border-t border-cosmos-800/40 bg-gradient-to-b from-cosmos-900/40 to-cosmos-950">
      <div className="max-w-5xl mx-auto rounded-3xl bg-cosmos-900 border border-red-500/30 p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs tracking-widest uppercase mb-6">
          <Youtube className="w-4 h-4 text-red-500" />
          <span>Primary Video Home</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
          Watch, Listen & Practice on YouTube
        </h2>
        <p className="text-gray-300 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Bhakti Udyan’s YouTube channel complements our memory maps with cinematic video guides, immersive chanting sessions, and deep scriptural discourses.
        </p>

        <a
          href="https://www.youtube.com/@BhaktiUdyan"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm tracking-wider uppercase transition-all inline-flex items-center gap-3 shadow-lg"
        >
          <Youtube className="w-5 h-5" />
          <span>Visit Bhakti Udyan YouTube Channel</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
