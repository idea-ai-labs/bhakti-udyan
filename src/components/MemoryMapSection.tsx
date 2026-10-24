'use client';
import { useState } from 'react';
import { BAGICHE_DATA } from '../data/udyanData';

export default function MemoryMapSection() {
  const [activeId, setActiveId] = useState(1);
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

  return (
    <section id="memory-map" className="relative py-24 px-6 bg-[#0B6E4F] text-[#FFFBF0] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_20%,#fff_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] tracking-[0.2em] uppercase">Memory Map</span>
            <h2 className="mt-6 font-serif text-[38px] md:text-[46px] leading-[0.9]">How We Remember</h2>
            <p className="mt-4 text-[16px] leading-[1.6] text-[#C9E8DC] max-w-[520px]">Each Bagicha is a room in memory. No rote memorization — story, image, and emotion.</p>
            
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {(BAGICHE_DATA as any[]).map((b: any) => (
                <button
                  key={b.id}
                  onClick={() => setActiveId(b.id)}
                  className={`group relative text-left rounded-[16px] border p-4 transition-all ${activeId === b.id ? 'bg-[#FFFBF0] text-[#1A140E] border-[#FFFBF0] shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'}`}
                >
                  <div className="text-[11px] tracking-widest uppercase opacity-70">Bagicha {b.id}</div>
                  <div className="mt-1 font-serif text-[16px] leading-tight">{b.devanagariTitle || b.title}</div>
                  <div className="text-[10px] tracking-[0.18em] uppercase mt-1 opacity-60">{b.chaupaiRange || ''}</div>
                  <div className={`mt-3 h-1 w-full rounded-full ${activeId === b.id ? 'bg-[#0B6E4F]' : 'bg-white/20'}`} />
                </button>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-[16px] bg-[#FFFBF0]/10 border border-white/10">
              <div className="text-[12px] tracking-[0.2em] uppercase text-[#FFE9C8]">Active Anchor</div>
              <div className="mt-2 font-serif text-[24px]">{active.devanagariTitle || active.title}</div>
              <div className="text-[13px] text-[#C9E8DC]">{active.bhav || ''} · {active.englishName || ''}</div>
              <p className="mt-3 text-[14px] leading-[1.6] text-[#E6F5EE]">{active.description || ''}</p>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="rounded-[28px] bg-[#FFFBF0] text-[#2B2117] border border-white/20 overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.5)]">
              <div className="h-[340px] relative overflow-hidden bg-[#FFF2E0]">
                <img src={getImage(active)} alt={active.title || 'Bagicha'} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <div className="inline-flex px-3 py-1 rounded-full bg-[#0B6E4F] text-white text-[11px]">{(active.memoryJourney && active.memoryJourney[0]) || active.bhav || 'Memory Journey'}</div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A7352]">Memory Anchors</div>
                <div className="mt-3 space-y-2">
                  {(active.memoryAnchors || []).map((ma: any, i: number) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-[11px] font-bold">{i+1}</span>
                      <span className="text-[13px] leading-[1.5] text-[#5A4A38]">{getAnchorText(ma)}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {(active.anchors || []).map((a: any, i: number) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#FFF2E0] border border-[#F2E6D3] text-[11px] text-[#6B4A24]">{getAnchorText(a)}</span>
                  ))}
                </div>
                <div className="mt-6 h-px bg-[#F2E6D3]" />
                <div className="mt-4 text-[11px] tracking-[0.18em] uppercase text-[#0B6E4F] font-semibold">Understand → Feel → Remember → Live</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="rounded-[14px] bg-white/10 border border-white/10 p-3 text-center">
                <div className="text-[20px] font-serif">40</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Chaupaiyan</div>
              </div>
              <div className="rounded-[14px] bg-white/10 border border-white/10 p-3 text-center">
                <div className="text-[20px] font-serif">8</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Bagiche</div>
              </div>
              <div className="rounded-[14px] bg-white/10 border border-white/10 p-3 text-center">
                <div className="text-[20px] font-serif">8 Days</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Yatra</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
