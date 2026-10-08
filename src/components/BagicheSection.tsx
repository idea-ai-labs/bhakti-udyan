'react';
import { BAGICHE_DATA, Bagicha } from '@/data/udyanData';
import { Youtube, ArrowRight, Flower2 } from 'lucide-react';

export default function BagicheSection() {
  return (
    <section id="bagiche" className="relative py-28 px-6 z-10 border-t border-cosmos-800/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-3">Interactive Journey</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
            The 8 Bagiche Experience
          </h2>
          <p className="text-gold-400 font-serif text-xl tracking-wider mb-6">
            40 चौपाइयाँ → 8 बगीचे → 8 दिन
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Select or hover over any garden gate below to enter its memory journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BAGICHE_DATA.map((bagicha: Bagicha) => (
            <div
              key={bagicha.id}
              className="relative p-6 rounded-3xl bg-cosmos-900/80 border border-cosmos-700/80 backdrop-blur-md flex flex-col justify-between hover:border-gold-500/60 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                    Bagicha {bagicha.id}
                  </span>
                  <span className="text-xs text-saffron-400 font-semibold">{bagicha.chaupaiRange}</span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {bagicha.devanagariTitle}
                </h3>
                <p className="text-xs text-gold-400/80 uppercase tracking-wider mb-3">{bagicha.theme}</p>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">{bagicha.description}</p>

                {/* Memory Anchors */}
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Memory Journey:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {bagicha.memoryAnchors.map((anchor, idx) => (
                      <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-cosmos-950 text-gold-300/90 border border-cosmos-700">
                        {anchor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-cosmos-800 flex items-center justify-between">
                {bagicha.youtubeUrl ? (
                  <a
                    href={bagicha.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-medium transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-red-500" />
                    <span>Watch</span>
                  </a>
                ) : (
                  <span className="text-xs text-gray-500">Coming Soon</span>
                )}
                
                <span className="inline-flex items-center gap-1 text-xs text-gold-400 group-hover:translate-x-1 transition-transform cursor-pointer">
                  <span>Practice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
