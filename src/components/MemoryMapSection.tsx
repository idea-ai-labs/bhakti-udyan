'use client';
import { useState } from 'react';
import { BAGICHE_DATA } from '../data/udyanData';
import { CHAUPI_DATA, Language } from '../data/chaupaiData';

export default function MemoryMapSection() {
  const [activeId, setActiveId] = useState(1);
  const [lang, setLang] = useState<Language>("hindi");
  const active: any = (BAGICHE_DATA as any[]).find((b: any) => b.id === activeId) || (BAGICHE_DATA as any[])[0];

  const getAnchorText = (anchor: any): string => {
    if (typeof anchor === 'string') return anchor;
    if (anchor?.text) return anchor.text;
    if (anchor?.title) return anchor.title;
    if (anchor?.name) return anchor.name;
    return JSON.stringify(anchor).slice(0, 80);
  };

  const getImage = (b: any) => {
    const map: Record<number, string> = {
      1: 'bu-bagicha-01-gyan-aur-bal.webp',
      2: 'bu-bagicha-02-divya-swaroop.webp',
      3: 'bu-bagicha-03-ram-bhakti.webp',
      4: 'bu-bagicha-04-seva-samarthya.webp',
      5: 'bu-bagicha-05-raksha-sukh.webp',
      6: 'bu-bagicha-06-sankat-mochan.webp',
      7: 'bu-bagicha-07-siddhi-bhakti.webp',
      8: 'bu-bagicha-08-phal-ashirwad.webp',
    };
    return `/bagicha/${map[b.id] || map[1]}`;
  };

  const getChaupai = (num: number) => CHAUPI_DATA.find(c => c.number === num);

  return (
    <section id="memory-map" className="relative py-24 px-6 bg-[#0B6E4F] text-[#FFFBF0] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,#fff_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/20 text- tracking-[0.2em] uppercase">Memory Map</span>
            <h2 className="mt-6 font-serif text- md:text- leading-[0.9]">How We Remember</h2>
            <p className="mt-4 text- leading-[1.6] text-[#C9E8DC] max-w-">Each Bagicha is a room in memory. No rote memorization — story, image, and emotion.</p>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(BAGICHE_DATA as any[]).map((b: any) => (
                <button
                  key={b.id}
                  onClick={() => setActiveId(b.id)}
                  className={`group relative text-left rounded- border p-4 transition-all ${activeId === b.id ? 'bg-[#FFFBF0] text-[#1A140E] border-[#FFFBF0] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                  <div className="text- tracking-widest uppercase opacity-70">Bagicha {b.id}</div>
                  <div className="mt-1 font-serif text- leading-tight">{b.devanagariTitle || b.title}</div>
                  <div className="text- tracking-[0.18em] uppercase mt-1 opacity-60">{b.chaupaiRange || ''}</div>
                  <div className={`mt-3 h-1 w-full rounded-full ${activeId === b.id ? 'bg-[#0B6E4F]' : 'bg-white/20'}`} />
                </button>
              ))}
            </div>

            <div className="mt-8 p-5 rounded- bg-[#FFFBF0]/10 border border-white/10">
              <div className="text- tracking-[0.2em] uppercase text-[#FFE9C8]">Active Anchor</div>
              <div className="mt-2 font-serif text-">{active.devanagariTitle || active.title}</div>
              <div className="text- text-[#C9E8DC]">{active.bhav || ''} · {active.englishName || ''}</div>
              <p className="mt-3 text- leading-[1.6] text-[#E6F5EE]">{active.description || ''}</p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded- bg-[#FFFBF0] text-[#2B2117] border border-white/20 overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
              <div className="h- relative overflow-hidden bg-[#FFF2E0]">
                <img src={getImage(active)} alt={active.title || 'Bagicha'} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#0B6E4F] text-white text-">{active.chaupaiRange} · {active.hindiName}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="text- tracking-[0.2em] uppercase text-[#8A7352]">Memory Anchors</div>
                  <button
                    onClick={() => setLang(lang === "hindi" ? "english" : "hindi")}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[#0B6E4F]/10 border border-[#0B6E4F]/20 text- font-bold tracking-wide text-[#0B6E4F] hover:bg-[#0B6E4F]/15 transition-colors"
                  >
                    {lang === "hindi" ? "ENGLISH" : "हिंदी"}
                  </button>
                </div>
                <div className="mt-3 space-y-3">
                  {(active.memoryAnchors || []).map((ma: any, i: number) => {
                    const chaupaiNum = (active.id - 1) * 5 + i + 1;
                    const chaupai = getChaupai(chaupaiNum);
                    return (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text- font-bold">{chaupaiNum}</span>
                        <div className="flex-1">
                          <div className="text- leading-[1.5] text-[#5A4A38]">{getAnchorText(ma)}</div>
                          {chaupai && (
                            <div className="mt-2 rounded- bg-[#FFF8EC] border border-[#F2E6D3] px-3 py-2">
                              <div className={`text- leading-[1.6] ${lang === "hindi" ? "font-serif text-[#2B2117]" : "text-[#5A4A38] italic"}`}>
                                {lang === "hindi" ? chaupai.hindi : chaupai.transliteration}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 h-px bg-[#F2E6D3]" />
                <div className="mt-4 text- tracking-[0.18em] uppercase text-[#0B6E4F] font-semibold">Understand → Feel → Remember → Live</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded- bg-white/10 border border-white/10 p-3 text-center">
                <div className="text- font-serif">40</div>
                <div className="text- uppercase tracking-widest opacity-70">Chaupaiyan</div>
              </div>
              <div className="rounded- bg-white/10 border border-white/10 p-3 text-center">
                <div className="text- font-serif">8</div>
                <div className="text- uppercase tracking-widest opacity-70">Bagiche</div>
              </div>
              <div className="rounded- bg-white/10 border border-white/10 p-3 text-center">
                <div className="text- font-serif">8 Days</div>
                <div className="text- uppercase tracking-widest opacity-70">Yatra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
