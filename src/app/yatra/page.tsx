"use client";
import { useState, useMemo, useEffect } from "react";
import { BAGICHE_DATA, JOURNEY_MANTRA, Bagicha, Anchor } from "../../data/yatraData";

type Mode = "explore" | "recall" | "reconstruct";
type Lang = "hindi" | "english";

const bagichaSetImage = (id: number) => `/yatra/chaupai/set${id}.jpg`;

export default function YatraPage() {
  const [selectedBagicha, setSelectedBagicha] = useState<Bagicha | null>(null);
  const [selectedAnchor, setSelectedAnchor] = useState<Anchor | null>(null);
  const [mode, setMode] = useState<Mode>("explore");
  const [lang, setLang] = useState<Lang>("hindi");
  const [visitedAnchors, setVisitedAnchors] = useState<Set<number>>(new Set());
  const [exploredBagiche, setExploredBagiche] = useState<Set<number>>(new Set());
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<boolean | null>(null);
  const [reconstructOrder, setReconstructOrder] = useState<number[]>([]);
  const [reconstructShuffled, setReconstructShuffled] = useState<Anchor[]>([]);
  const [showMeaning, setShowMeaning] = useState(true);

  useEffect(() => {
    if (selectedBagicha) {
      const s = [...selectedBagicha.anchors].sort(() => Math.random() - 0.5);
      setReconstructShuffled(s);
      setReconstructOrder([]);
      if (!selectedAnchor) setSelectedAnchor(selectedBagicha.anchors[0]);
    }
  }, [selectedBagicha]);

  useEffect(() => {
    if (selectedAnchor) {
      setVisitedAnchors(prev => {
        const next = new Set(prev);
        next.add(selectedAnchor.number);
        return next;
      });
      setExploredBagiche(prev => {
        const next = new Set(prev);
        next.add(selectedBagicha?.id ?? 0);
        return next;
      });
      setQuizAnswer(null);
      setQuizResult(null);
      setShowMeaning(true);
    }
  }, [selectedAnchor]);

  const isBagichaCompleted = (bagicha: Bagicha) => {
    return bagicha.anchors.every(a => visitedAnchors.has(a.number));
  };
  const isBagichaVisited = (bagicha: Bagicha) => {
    return bagicha.anchors.some(a => visitedAnchors.has(a.number));
  };

  const progress = exploredBagiche.size;
  const totalAnchorsVisited = visitedAnchors.size;

  const handleBagichaSelect = (b: Bagicha) => {
    setSelectedBagicha(b);
    setSelectedAnchor(b.anchors[0]);
    setMode("explore");
  };

  const nextAnchor = () => {
    if (!selectedBagicha || !selectedAnchor) return;
    const idx = selectedBagicha.anchors.findIndex(a => a.number === selectedAnchor.number);
    if (idx < selectedBagicha.anchors.length - 1) setSelectedAnchor(selectedBagicha.anchors[idx + 1]);
  };
  const prevAnchor = () => {
    if (!selectedBagicha || !selectedAnchor) return;
    const idx = selectedBagicha.anchors.findIndex(a => a.number === selectedAnchor.number);
    if (idx > 0) setSelectedAnchor(selectedBagicha.anchors[idx - 1]);
  };

  // GRAND GARDEN LANDING
  if (!selectedBagicha) {
    return (
      <div className="min-h-screen bg-[#FFFBF0] text-[#2B2117]">
        {/* Compact Hero */}
        <header className="sticky top-0 z-20 bg-[#FFFBF0]/90 backdrop-blur border-b border-[#F5E6C8]">
          <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0B6E4F] grid place-items-center text-white font-serif">ॐ</div>
              <div>
                <h1 className="font-serif text-[18px] md:text-[20px] font-bold leading-none">Bhakti Udyan • Yatra</h1>
                <p className="text-[11px] text-[#8A7352] mt-0.5">40 Chaupais → 8 Bagiche → 40 Memory Anchors</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-[11px] text-[#8A7352]">
                <span>{totalAnchorsVisited}/40 anchors</span>
                <div className="w-20 h-1.5 bg-[#FFF2E0] rounded-full overflow-hidden"><div className="h-full bg-[#0B6E4F]" style={{width:`${(totalAnchorsVisited/40)*100}%`}} /></div>
              </div>
              <button onClick={()=>setLang(lang==="hindi"?"english":"hindi")} className="px-3 py-1.5 rounded-full bg-white border border-[#F5E6C8] text-[11px]">{lang==="hindi"?"EN":"हि"}</button>
            </div>
          </div>
        </header>

        <main className="max-w-[1280px] mx-auto px-4 md:px-8 pb-16">
          {/* Compact intro + learning sequence */}
          <div className="py-6 md:py-8">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-serif text-[26px] md:text-[32px] font-bold leading-tight">Grand Garden — 8 Bagiche</h2>
              <p className="text-[13px] text-[#5A4A38] max-w-[520px]">Ek pavitra yatra. Har Bagicha mein 5 chaupai, har chaupai ka ek Memory Anchor. Dekho, bhav samjho, yaad rakho.</p>
            </div>
            {/* Compact visual line */}
            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {JOURNEY_MANTRA.map((m,i)=>(
                <div key={m.en} className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#F5E6C8]">
                    <span className="w-5 h-5 rounded-full bg-[#0B6E4F] text-white grid place-items-center text-[10px] font-bold">{i+1}</span>
                    <span className="text-[12px] font-medium">{lang==="hindi"?m.hi:m.en}</span>
                  </div>
                  {i<4 && <span className="text-[#D4AF7A] text-[12px]">→</span>}
                </div>
              ))}
              <span className="ml-2 text-[11px] text-[#8A7352] shrink-0">{progress}/8 visited • {totalAnchorsVisited}/40</span>
            </div>
          </div>

          {/* 8 Gardens - image-led cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {BAGICHE_DATA.map(b=>{
              const visited = isBagichaVisited(b);
              const completed = isBagichaCompleted(b);
              return (
                <div key={b.id} className="group relative bg-white rounded-[18px] border border-[#F5E6C8] overflow-hidden hover:shadow-[0_8px_28px_rgba(43,33,23,0.10)] hover:border-[#D4AF7A] transition-all flex flex-col">
                  {/* Artwork */}
                  <div className="relative h-[148px] md:h-[172px] bg-[#FFF8EC] overflow-hidden">
                    <img src={bagichaSetImage(b.id)} alt={b.hindiName} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700"
                      onError={(e)=>{ (e.currentTarget as HTMLImageElement).style.display='none'; const fb=e.currentTarget.parentElement?.querySelector('.set-fb') as HTMLElement; if(fb) fb.style.display='grid'; }} />
                    <div className="set-fb hidden absolute inset-0 place-items-center bg-[#FFF8EC]"><span className="text-[28px]">🌿</span></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-start">
                      <span className="px-2 py-1 rounded-full bg-white/95 text-[11px] font-bold text-[#2B2117] border">{b.id}</span>
                      <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${completed?'bg-[#0B6E4F] text-white': visited?'bg-white/90 text-[#0B6E4F] border border-[#0B6E4F]/20':'bg-black/40 text-white/80'}`}>{completed?'Completed': visited?'Visited':'Start'}</span>
                    </div>
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <p className="font-serif text-[16px] font-bold text-white leading-tight drop-shadow">{b.hindiName}</p>
                      <p className="text-[11px] text-white/85">{b.chaupaiRange}</p>
                    </div>
                  </div>
                  {/* Hierarchy: Hindi, range, theme, enter */}
                  <div className="p-3 flex flex-col gap-2 flex-1">
                    <p className="text-[12px] leading-[1.4] text-[#5A4A38] line-clamp-2">{b.theme}</p>
                    <div className="mt-auto flex items-center justify-between pt-1">
                      <span className="text-[11px] text-[#8A7352]">{b.bhav}</span>
                      <button onClick={()=>handleBagichaSelect(b)} className="px-3 py-1.5 rounded-full bg-[#0B6E4F] text-white text-[11px] font-medium hover:bg-[#095a3f]">Enter →</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>
    )
  }

  // BAGICHA LEARNING PAGE - NO SIDEBAR
  const idx = BAGICHE_DATA.findIndex(b=>b.id===selectedBagicha.id);
  return (
    <div className="min-h-screen bg-[#FFFBF0] text-[#2B2117]">
      {/* Sticky header - compact breadcrumb */}
      <header className="sticky top-0 z-30 bg-[#FFFBF0]/95 backdrop-blur border-b border-[#F5E6C8]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <button onClick={()=>{setSelectedBagicha(null); setSelectedAnchor(null);}} className="text-[12px] px-2.5 py-1 rounded-full bg-white border border-[#F5E6C8] hover:border-[#D4AF7A] shrink-0">← Garden</button>
              <span className="text-[#D4AF7A]">/</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-[14px] md:text-[16px] truncate">{selectedBagicha.devanagariTitle}</span>
                  <span className="hidden md:inline text-[11px] px-2 py-0.5 rounded-full bg-white border border-[#F5E6C8]">{selectedBagicha.chaupaiRange}</span>
                </div>
                <p className="hidden md:block text-[11px] text-[#8A7352] truncate">{selectedBagicha.theme}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden md:inline text-[11px] text-[#8A7352]">{visitedAnchors.size ? `${selectedBagicha.anchors.filter(a=>visitedAnchors.has(a.number)).length}/5 in this Bagicha` : ''}</span>
              <button onClick={()=>setLang(lang==="hindi"?"english":"hindi")} className="px-2.5 py-1 rounded-full bg-white border text-[11px]">{lang==="hindi"?"EN":"हि"}</button>
            </div>
          </div>
          {/* Mode selector - prominent, consistent */}
          <div className="mt-3 flex gap-2">
            {[
              {k:'explore', l: lang==='hindi'?'Explore • देखो':'Explore'},
              {k:'recall', l: lang==='hindi'?'Recall • याद करो':'Recall'},
              {k:'reconstruct', l: lang==='hindi'?'Arrange • क्रम':'Arrange'},
            ].map(m=>(
              <button key={m.k} onClick={()=>setMode(m.k as Mode)} className={`px-3.5 py-2 rounded-full text-[12px] md:text-[13px] font-medium border transition ${mode===m.k?'bg-[#0B6E4F] text-white border-[#0B6E4F] shadow':'bg-white border-[#F5E6C8] hover:border-[#D4AF7A] text-[#5A4A38]'}`}>{m.l}</button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-6">
        {/* Horizontal 5-anchor strip - immediately below mode selector */}
        <div className="mb-5">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
            {selectedBagicha.anchors.map(a=>{
              const active = selectedAnchor?.number===a.number;
              const seen = visitedAnchors.has(a.number);
              return (
                <button key={a.number} onClick={()=>setSelectedAnchor(a)} className={`relative shrink-0 flex items-center gap-2.5 px-3 py-2.5 rounded-[14px] border text-left transition ${active?'bg-[#0B6E4F] text-white border-[#0B6E4F] shadow-[0_4px_12px_rgba(11,110,79,0.25)]':'bg-white border-[#F5E6C8] hover:border-[#D4AF7A] hover:shadow-sm'}`}>
                  <span className={`w-7 h-7 rounded-full grid place-items-center text-[12px] font-bold shrink-0 ${active?'bg-white/20 text-white':'bg-[#FFF8EC] text-[#2B2117] border'}`}>{a.number}</span>
                  <div className="w-10 h-10 rounded-[10px] overflow-hidden bg-[#FFF8EC] border border-black/5 shrink-0">
                    <img src={a.anchorImage} alt={a.label} className="w-full h-full object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
                  </div>
                  <div className="min-w-[88px] max-w-[120px]">
                    <p className={`text-[12px] font-semibold leading-tight truncate ${active?'text-white':'text-[#2B2117]'}`}>{a.label}</p>
                    <p className={`text-[10px] truncate ${active?'text-white/70':'text-[#8A7352]'}`}>{a.shortKey}</p>
                  </div>
                  {seen && !active && <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#0B6E4F] rounded-full border-2 border-white" />}
                </button>
              )
            })}
          </div>
        </div>

        {selectedAnchor && (
          <>
            {/* ONE cohesive learning panel */}
            <div className="bg-white rounded-[20px] border border-[#F5E6C8] overflow-hidden shadow-[0_6px_24px_rgba(43,33,23,0.06)]">
              <div className="grid md:grid-cols-[320px_1fr] gap-0">
                {/* Anchor artwork */}
                <div className="bg-[#FFF8EC] p-5 md:p-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-[#F5E6C8]">
                  <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-[20px] overflow-hidden bg-white border-2 border-[#F5E6C8] shadow-sm">
                    <img src={selectedAnchor.anchorImage} alt={selectedAnchor.label} className="w-full h-full object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-[11px] tracking-widest uppercase text-[#8A7352]">Anchor {selectedAnchor.number}</p>
                    <h3 className="font-serif text-[18px] font-bold mt-1">{selectedAnchor.label}</h3>
                    <div className="mt-3 w-full h-[120px] rounded-[12px] overflow-hidden border border-[#F5E6C8] bg-[#2B2117]">
                      <img src={selectedAnchor.chaupaiImage} alt={`Chaupai ${selectedAnchor.number}`} className="w-full h-full object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
                    </div>
                    <p className="text-[10px] text-[#8A7352] mt-2">Scene • दृश्य</p>
                  </div>
                  <div className="mt-4 flex gap-2 w-full">
                    <button onClick={prevAnchor} disabled={selectedBagicha.anchors[0].number===selectedAnchor.number} className="flex-1 py-2 rounded-full bg-white border text-[12px] disabled:opacity-40">← Prev</button>
                    <button onClick={nextAnchor} disabled={selectedBagicha.anchors[4].number===selectedAnchor.number} className="flex-1 py-2 rounded-full bg-[#0B6E4F] text-white text-[12px] disabled:opacity-40">Next →</button>
                  </div>
                </div>

                {/* Content - chaupai, meaning, memory */}
                <div className="p-5 md:p-7">
                  {mode==="explore" && (
                    <div className="space-y-5">
                      <div>
                        <p className="text-[11px] tracking-[0.15em] uppercase text-[#8A7352]">Chaupai {selectedAnchor.number}</p>
                        <p className="font-serif text-[20px] md:text-[22px] leading-[1.5] mt-2 text-[#2B2117]">{selectedAnchor.chaupaiHindi}</p>
                        {showMeaning && <p className="text-[13px] text-[#8A7352] italic mt-2">{selectedAnchor.transliteration}</p>}
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {showMeaning && (
                        <div className="bg-[#FFFBF0] rounded-[14px] border border-[#F5E6C8] p-4">
                          <p className="text-[11px] uppercase tracking-widest text-[#8A7352]">Arth • Meaning</p>
                          <p className="mt-2 text-[14px] leading-relaxed">{lang==="hindi"?selectedAnchor.hindiMeaning:selectedAnchor.englishMeaning}</p>
                        </div>
                        )}
                        <div className={`bg-[#0B6E4F]/[0.06] rounded-[14px] border border-[#0B6E4F]/15 p-4 ${!showMeaning?'md:col-span-2':''}`}>
                          <p className="text-[11px] uppercase tracking-widest text-[#0B6E4F]">Yaad Kaise Kare • Memory Connection</p>
                          <p className="mt-2 text-[13px] leading-relaxed text-[#2B2117]">{selectedAnchor.memoryConnection}</p>
                          <div className="mt-3 flex items-center gap-2 text-[11px] text-[#8A7352]"><span>{selectedAnchor.symbol}</span><span>→ {selectedAnchor.label} → Chaupai {selectedAnchor.number}</span></div>
                        </div>
                      </div>
                      <label className="flex items-center gap-2 text-[12px] text-[#5A4A38] cursor-pointer select-none"><input type="checkbox" checked={showMeaning} onChange={(e)=>setShowMeaning(e.target.checked)} className="rounded" /> Show transliteration & meaning</label>
                    </div>
                  )}

                  {mode==="recall" && (
                    <div className="space-y-4">
                      <h4 className="font-serif text-[18px] font-bold">Recall • Yaad karo {selectedAnchor.label}</h4>
                      <p className="text-[13px] text-[#5A4A38]">What is Chaupai {selectedAnchor.number}? Choose the correct start.</p>
                      <div className="grid gap-2">
                        {(() => {
                          const opts = [...BAGICHE_DATA.flatMap(b=>b.anchors)].sort(()=>Math.random()-0.5).slice(0,3).map(a=>a.chaupaiHindi).concat([selectedAnchor.chaupaiHindi]).sort(()=>Math.random()-0.5);
                          return opts.map((opt,i)=>(
                            <button key={i} onClick={()=>{ setQuizAnswer(opt); setQuizResult(opt===selectedAnchor.chaupaiHindi); }} className={`text-left p-3 rounded-[12px] border text-[13px] ${quizAnswer===opt ? (quizResult?'bg-[#0B6E4F]/10 border-[#0B6E4F]':'bg-red-50 border-red-300') : 'bg-white border-[#F5E6C8] hover:border-[#D4AF7A]'}`}>{opt}</button>
                          ))
                        })()}
                      </div>
                      {quizResult!==null && <p className={`text-[13px] font-medium ${quizResult?'text-[#0B6E4F]':'text-red-600'}`}>{quizResult?'✓ Correct! '+selectedAnchor.label+' yaad hai.':'Try again — hint: '+selectedAnchor.memoryConnection}</p>}
                    </div>
                  )}

                  {mode==="reconstruct" && (
                    <div className="space-y-4">
                      <h4 className="font-serif text-[18px] font-bold">Arrange • Kram lagao</h4>
                      <p className="text-[13px] text-[#5A4A38]">Tap anchors in correct order 1→5 for this Bagicha.</p>
                      <div className="flex gap-2 flex-wrap min-h-[44px] p-2 rounded-[12px] bg-[#FFF8EC] border border-dashed border-[#F5E6C8]">{reconstructOrder.map(n=>{ const a=selectedBagicha.anchors.find(x=>x.number===n); return <span key={n} className="px-2.5 py-1 rounded-full bg-[#0B6E4F] text-white text-[12px]">{a?.label}</span> })}{reconstructOrder.length===0 && <span className="text-[12px] text-[#8A7352]">Your order will appear here</span>}</div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{reconstructShuffled.map(a=>{ const used=reconstructOrder.includes(a.number); return <button key={a.number} disabled={used} onClick={()=>{ if(!used){ const next=[...reconstructOrder,a.number]; setReconstructOrder(next); if(next.length===5){ if(next.join(',')===selectedBagicha.anchors.map(x=>x.number).join(',')){ setExploredBagiche(prev=>{ const n=new Set(prev); n.add(selectedBagicha.id); return n; }); } } } }} className={`p-3 rounded-[12px] border text-left text-[12px] ${used?'bg-[#F5F2ED] border-[#F5E6C8] opacity-50':'bg-white border-[#F5E6C8] hover:border-[#0B6E4F]'}`}>{a.label}</button> })}</div>
                      <div className="flex gap-2"><button onClick={()=>setReconstructOrder([])} className="px-3 py-1.5 rounded-full bg-white border text-[12px]">Clear</button><button onClick={()=>{ setReconstructShuffled([...selectedBagicha.anchors].sort(()=>Math.random()-0.5)); setReconstructOrder([]); }} className="px-3 py-1.5 rounded-full bg-white border text-[12px]">Shuffle</button></div>
                      {reconstructOrder.length===5 && <p className={`text-[13px] font-medium ${reconstructOrder.join(',')===selectedBagicha.anchors.map(x=>x.number).join(',')?'text-[#0B6E4F]':'text-red-600'}`}>{reconstructOrder.join(',')===selectedBagicha.anchors.map(x=>x.number).join(',')?'✓ Correct kram! Bagicha completed.':'Kram galat hai, try again.'}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Prev/Next Bagicha navigation */}
            <div className="mt-6 flex items-center justify-between">
              <button disabled={idx===0} onClick={()=>{ const prev=BAGICHE_DATA[idx-1]; if(prev){ setSelectedBagicha(prev); setSelectedAnchor(prev.anchors[0]); } }} className="px-4 py-2 rounded-full bg-white border text-[13px] disabled:opacity-40">← Prev Bagicha</button>
              <div className="flex items-center gap-1">{BAGICHE_DATA.map(b=> <div key={b.id} className={`w-1.5 h-1.5 rounded-full ${b.id===selectedBagicha.id?'bg-[#0B6E4F] w-6': isBagichaCompleted(b)?'bg-[#0B6E4F]/60':'bg-[#F5E6C8]'}`} /> )}</div>
              <button disabled={idx===BAGICHE_DATA.length-1} onClick={()=>{ const next=BAGICHE_DATA[idx+1]; if(next){ setSelectedBagicha(next); setSelectedAnchor(next.anchors[0]); } }} className="px-4 py-2 rounded-full bg-[#0B6E4F] text-white text-[13px] disabled:opacity-40">Next Bagicha →</button>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
