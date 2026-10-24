'use client';
import { BAGICHE_DATA } from '../data/udyanData';

const BAGICHA_IMAGES: Record<number, string> = {
  1: '/bagicha/bu-bagicha-01-gyan-aur-bal.webp',
  2: '/bagicha/bu-bagicha-02-divya-swaroop.webp',
  3: '/bagicha/bu-bagicha-03-ram-bhakti.webp',
  4: '/bagicha/bu-bagicha-04-seva-samarthya.webp',
  5: '/bagicha/bu-bagicha-05-raksha-sukh.webp',
  6: '/bagicha/bu-bagicha-06-sankat-mochan.webp',
  7: '/bagicha/bu-bagicha-07-siddhi-bhakti.webp',
  8: '/bagicha/bu-bagicha-08-phal-ashirwad.webp',
};

const getText = (a: any) => {
  if (typeof a === 'string') return a;
  if (a?.text) return a.text;
  if (a?.title) return a.title;
  return '';
};

export default function BagicheSection() {
  return (
    <section id="bagiche" className="py-24 px-6 bg-[#FFFBF0] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <span className="inline-flex px-4 py-1 rounded-full bg-[#0B6E4F] text-white text-[11px] tracking-[0.2em] uppercase">One Garden Within Bhakti Udyan</span>
          <h2 className="font-serif text-[40px] md:text-[52px] leading-[0.9] mt-6 text-[#1A140E]">The 8 Bagiche of Hanuman Chalisa</h2>
          <div className="mt-3 text-[18px] text-[#5A4A38]">40 चौपाइयाँ · 8 बगीचे · 8 दिन</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(BAGICHE_DATA as any[]).map((b: any) => (
            <div key={b.id} className="group relative rounded-[28px] bg-white border border-[#F2E6D3] overflow-hidden shadow-[0_16px_60px_-24px_rgba(0,0,0,0.18)]">
              <div className={`absolute inset-x-0 top-0 h-[8px] bg-gradient-to-r ${b.theme || 'from-amber-500/20 to-orange-500/20'}`} />
              <div className="relative h-[380px] overflow-hidden bg-[#FFF2E0]">
                <img 
                  src={BAGICHA_IMAGES[b.id]} 
                  alt={b.englishName} 
                  className={`w-full h-full object-cover ${b.id === 2 ? 'object-top' : 'object-[center_18%]'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFFBF0]/90 text-[11px] uppercase font-semibold">Bagicha {b.id}</span>
                  <span className="px-3 py-1 rounded-full bg-[#0B6E4F] text-white text-[11px]">{b.chaupaiRange}</span>
                </div>
                <div className="absolute bottom-5 left-6">
                  <h3 className="font-serif text-[26px] leading-tight text-white">{b.devanagariTitle || b.title}</h3>
                  <div className="text-[11px] uppercase text-[#FFD6A3] tracking-[0.18em]">{b.englishName}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[13px] font-semibold text-[#0B6E4F]">{b.bhav}</div>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6B5A46]">{b.description}</p>
                
                {/* SINGLE list only - no duplicate pills */}
                <div className="mt-6">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[#8A7352] font-semibold mb-3">5 Anchors</div>
                  <div className="grid grid-cols-1 gap-2.5">
                    {(b.memoryAnchors || []).map((ma: any, i: number) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-[11px] font-bold shrink-0">{i+1}</span>
                        <span className="text-[13px] text-[#2B2117]">{getText(ma)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <a href={b.youtubeUrl} target="_blank" className="inline-flex w-full justify-center py-2.5 rounded-full bg-[#2B2117] text-white text-[12px] font-semibold">Watch Video →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
