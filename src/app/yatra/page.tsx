
"use client";
import { useState, useMemo, useEffect } from "react";
import { BAGICHE_DATA, JOURNEY_MANTRA, Bagicha, Anchor } from "../../data/yatraData";

type Mode = "explore" | "recall" | "reconstruct";
type Lang = "hindi" | "english";

export default function YatraPage() {
  const [selectedBagicha, setSelectedBagicha] = useState<Bagicha | null>(null);
  const [selectedAnchor, setSelectedAnchor] = useState<Anchor | null>(null);
  const [mode, setMode] = useState<Mode>("explore");
  const [lang, setLang] = useState<Lang>("hindi");
  const [explored, setExplored] = useState<Set<number>>(new Set());
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [quizResult, setQuizResult] = useState<boolean | null>(null);
  const [reconstructOrder, setReconstructOrder] = useState<number[]>([]);
  const [reconstructShuffled, setReconstructShuffled] = useState<Anchor[]>([]);

  useEffect(()=>{
    if(selectedBagicha){
      const s = [...selectedBagicha.anchors].sort(()=>Math.random()-0.5);
      setReconstructShuffled(s);
      setReconstructOrder([]);
    }
  },[selectedBagicha?.id]);

  const progress = useMemo(()=> explored.size, [explored]);

  const handleBagichaSelect = (b: Bagicha)=>{
    setSelectedBagicha(b);
    setSelectedAnchor(b.anchors[0]);
    setExplored(prev=> {
      const next = new Set(prev);
      next.add(b.id);
      return next;
    });
    window.scrollTo({top:0, behavior:"smooth"});
  };

  const handleAnchorSelect = (a: Anchor)=>{
    setSelectedAnchor(a);
    setQuizAnswer(null); setQuizResult(null);
  };

  const currentQuiz = useMemo(()=>{
    if(!selectedAnchor || !selectedBagicha) return null;
    const opts = [...selectedBagicha.anchors].sort(()=>Math.random()-0.5).slice(0,4);
    if(!opts.find(o=>o.number===selectedAnchor.number)) opts[0]=selectedAnchor;
    return opts.sort(()=>Math.random()-0.5);
  },[selectedAnchor, selectedBagicha]);

  const checkQuiz = (label:string)=>{
    if(!selectedAnchor) return;
    setQuizAnswer(label);
    setQuizResult(label===selectedAnchor.label);
  };

  // Grand Garden view
  if(!selectedBagicha){
    return (
      <div className="min-h-screen bg-[#FFFBF0] font-sans">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-[#FFFBF0]/90 backdrop-blur border-b border-[#F5E6C8] px-4 md:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0B6E4F] text-white grid place-items-center font-serif">ॐ</div>
            <span className="font-serif font-bold text-[#2B2117]">Bhakti Udyan</span>
            <span className="hidden md:inline text-[11px] tracking-[0.2em] uppercase text-[#8A7352] ml-3">Yatra • Visual Journey</span>
          </div>
          <div className="flex gap-2">
            <button onClick={()=>setLang(lang==="hindi"?"english":"hindi")} className="px-4 py-2 rounded-[16px] bg-white border border-[#E8DCC0] text-sm">{lang==="hindi"?"EN":"हिं"}</button>
            <a href="/" className="px-4 py-2 rounded-[16px] bg-[#2B2117] text-[#FFFBF0] text-sm">← Home</a>
          </div>
        </header>

        {/* Hero */}
        <section className="px-4 md:px-12 py-8 md:py-12 max-w-[1400px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#8A7352] mb-3">40 Chaupais → 8 Bagiche → 40 Memory Anchors</p>
            <h1 className="font-serif text-[32px] md:text-[52px] leading-[1.1] text-[#2B2117]">The Interactive<br/><span className="text-[#0B6E4F]">8 Bagiche Memory Garden</span></h1>
            <p className="mt-4 max-w-[720px] mx-auto text-[#5A4A38] text-[16px] leading-relaxed">An immersive walk through Hanuman Chalisa. Explore eight sacred gardens, each holding five visual anchors that help you see, feel, and remember each chaupai. Not a static map — a living yatra.</p>
          </div>

          {/* Mantra */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
            {JOURNEY_MANTRA.map((m,i)=>(
              <div key={i} className="flex items-center gap-2">
                <div className="px-4 py-2 rounded-full bg-white border border-[#F5E6C8] shadow-sm flex items-center gap-2">
                  <span className="font-serif font-bold text-[#0B6E4F]">{m.hi}</span>
                  <span className="text-[10px] text-[#8A7352] hidden md:inline">{m.desc}</span>
                </div>
                {i<4 && <span className="text-[#D4AF7A]">→</span>}
              </div>
            ))}
          </div>

          {/* Circular Grand Garden Map */}
          <div className="relative bg-white rounded-[28px] border border-[#F5E6C8] p-4 md:p-8 shadow-[0_8px_40px_rgba(43,33,23,0.06)]">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
              {/* SVG Map */}
              <div className="relative aspect-square md:aspect-[1.1] w-full bg-[#FFFBF0] rounded-[20px] border border-[#FFF2E0] overflow-hidden">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* pathways */}
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#F5E6C8" strokeDasharray="6 6"/>
                  {BAGICHE_DATA.map((b,idx)=>{
                    const angle = (idx * 45 - 90) * Math.PI/180;
                    const x = 200 + 130 * Math.cos(angle);
                    const y = 200 + 130 * Math.sin(angle);
                    return <line key={`l-${b.id}`} x1="200" y1="200" x2={x} y2={y} stroke="#E8DCC0" strokeWidth="1.2" opacity="0.6"/>
                  })}
                  {/* center lotus */}
                  <g>
                    <circle cx="200" cy="200" r="28" fill="#0B6E4F"/>
                    <text x="200" y="206" textAnchor="middle" fill="white" fontSize="20">🪷</text>
                  </g>
                  {BAGICHE_DATA.map((b,idx)=>{
                    const angle = (idx * 45 - 90) * Math.PI/180;
                    const x = 200 + 130 * Math.cos(angle);
                    const y = 200 + 130 * Math.sin(angle);
                    const exploredDone = explored.has(b.id);
                    return (
                      <g key={b.id} style={{cursor:"pointer"}} onClick={()=>handleBagichaSelect(b)}>
                        <circle cx={x} cy={y} r="30" fill={exploredDone ? "#0B6E4F" : "white"} stroke={b.color} strokeWidth="2" />
                        <text x={x} y={y-4} textAnchor="middle" fontSize="10" fontWeight="700" fill={exploredDone ? "white" : "#2B2117"}>{b.id}</text>
                        <text x={x} y={y+8} textAnchor="middle" fontSize="7" fill={exploredDone ? "white" : "#5A4A38"}>{b.englishName.split(" ")[0]}</text>
                      </g>
                    )
                  })}
                </svg>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] text-[#8A7352]">
                  <span>Progress: {progress}/8 Bagiche</span>
                  <span>Tap a garden to enter →</span>
                </div>
              </div>

              {/* List */}
              <div className="space-y-3">
                {BAGICHE_DATA.map(b=>(
                  <button key={b.id} onClick={()=>handleBagichaSelect(b)} className="w-full text-left bg-[#FFFBF0] hover:bg-white border border-[#F5E6C8] rounded-[16px] p-4 flex gap-4 transition-all group">
                    <div className="w-10 h-10 rounded-full bg-white border grid place-items-center font-bold text-[#0B6E4F]">{b.id}</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-serif font-semibold text-[#2B2117]">{b.hindiName}</span>
                        <span className="text-[11px] text-[#8A7352]">{b.chaupaiRange}</span>
                      </div>
                      <p className="text-[12px] text-[#5A4A38]">{b.englishName} • {b.bhav}</p>
                      <div className="flex gap-1 mt-2">
                        {b.anchors.map(a=>(
                          <span key={a.number} className="w-5 h-5 rounded-full bg-white border text-[10px] grid place-items-center">{a.symbol.slice(0,2)}</span>
                        ))}
                      </div>
                    </div>
                    <span className="self-center text-[#D4AF7A] group-hover:translate-x-1 transition">→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-[12px] text-[#8A7352]">
            <p>Isolated at <code>/yatra</code> • No changes to main site • Your 80 images go to <code>/public/yatra/chaupai/</code> and <code>/public/yatra/anchors/</code></p>
          </div>
        </section>
      </div>
    )
  }

  // Bagicha Walkthrough
  const idx = BAGICHE_DATA.findIndex(b=>b.id===selectedBagicha.id);
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#F5E6C8] px-4 md:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={()=>{setSelectedBagicha(null); setSelectedAnchor(null);}} className="px-3 py-2 rounded-full bg-[#FFFBF0] border text-sm">← Grand Garden</button>
          <span className="font-serif font-bold">{selectedBagicha.devanagariTitle}</span>
          <span className="hidden md:inline text-[11px] tracking-[0.2em] uppercase text-[#8A7352]">{selectedBagicha.chaupaiRange}</span>
        </div>
        <div className="flex gap-2">
          <div className="hidden md:flex bg-[#FFFBF0] rounded-full p-1 border">
            {(["explore","recall","reconstruct"] as Mode[]).map(m=>(
              <button key={m} onClick={()=>setMode(m)} className={`px-3 py-1.5 rounded-full text-[12px] capitalize ${mode===m?"bg-[#0B6E4F] text-white":"text-[#5A4A38]"}`}>{m}</button>
            ))}
          </div>
          <button onClick={()=>setLang(lang==="hindi"?"english":"hindi")} className="px-3 py-2 rounded-full bg-white border text-sm">{lang==="hindi"?"EN":"हिं"}</button>
        </div>
      </header>

      {/* Mobile mode tabs */}
      <div className="md:hidden flex justify-center gap-2 py-3 bg-[#FFFBF0] sticky top-[56px] z-40">
        {(["explore","recall","reconstruct"] as Mode[]).map(m=>(
          <button key={m} onClick={()=>setMode(m)} className={`px-4 py-2 rounded-full text-[12px] capitalize border ${mode===m?"bg-[#0B6E4F] text-white border-[#0B6E4F]":"bg-white"}`}>{m}</button>
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto grid md:grid-cols-[320px_1fr] gap-0 md:gap-6 p-0 md:p-6">
        {/* Left: pathway */}
        <div className="bg-white md:rounded-[28px] border-y md:border border-[#F5E6C8] p-4 md:p-6">
          <div className="mb-4">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8A7352]">Bhav • {selectedBagicha.bhav}</p>
            <h2 className="font-serif text-[22px] text-[#2B2117] mt-1">{selectedBagicha.theme}</h2>
            <p className="text-[13px] text-[#5A4A38] mt-2">{selectedBagicha.description}</p>
          </div>
          {/* winding path */}
          <div className="relative pl-6 border-l-2 border-dashed border-[#F5E6C8] space-y-4">
            {selectedBagicha.anchors.map(a=>{
              const active = selectedAnchor?.number===a.number;
              return (
                <button key={a.number} onClick={()=>handleAnchorSelect(a)} className={`w-full text-left relative -ml-[31px] flex gap-3 p-3 rounded-[16px] border transition ${active?"bg-[#0B6E4F] text-white border-[#0B6E4F] shadow":"bg-[#FFFBF0] border-[#F5E6C8] hover:bg-white"}`}>
                  <div className={`w-8 h-8 rounded-full grid place-items-center -ml-1 ${active?"bg-white text-[#0B6E4F]":"bg-white border"}`}>{a.number}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[14px]">{a.label}</div>
                    <div className={`text-[11px] ${active?"text-[#C8E6D0]":"text-[#8A7352]"}`}>{a.symbol} • Chaupai {a.number}</div>
                  </div>
                </button>
              )
            })}
          </div>
          <div className="flex justify-between mt-6">
            <button disabled={idx===0} onClick={()=>{const nb=BAGICHE_DATA[idx-1]; if(nb){setSelectedBagicha(nb); setSelectedAnchor(nb.anchors[0]);}}} className="text-sm px-3 py-2 rounded-full border bg-white disabled:opacity-40">← Prev Bagicha</button>
            <button disabled={idx===7} onClick={()=>{const nb=BAGICHE_DATA[idx+1]; if(nb){setSelectedBagicha(nb); setSelectedAnchor(nb.anchors[0]);}}} className="text-sm px-3 py-2 rounded-full border bg-[#2B2117] text-white disabled:opacity-40">Next →</button>
          </div>
          {selectedBagicha.youtubeUrl && (
            <a href={selectedBagicha.youtubeUrl} target="_blank" className="mt-4 block text-center text-sm px-4 py-3 rounded-[16px] bg-[#FFF2E0] border border-[#F5B700]/30 text-[#5A4A38]">▶ Watch Bagicha Teaching</a>
          )}
        </div>

        {/* Right: detail */}
        <div className="bg-white md:rounded-[28px] border-y md:border border-[#F5E6C8] overflow-hidden">
          {!selectedAnchor ? (
            <div className="p-12 text-center text-[#8A7352]">Select an anchor</div>
          ) : (
            <>
                            {/* Chaupai image - loads real webp from public/yatra/chaupai/ */}
              <div className="relative h-[220px] md:h-[340px] bg-[#FFFBF0] border-b border-[#F5E6C8] overflow-hidden">
                <img
                  src={selectedAnchor.chaupaiImage}
                  alt={`Chaupai ${selectedAnchor.number} - ${selectedAnchor.label}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'grid';
                  }}
                />
                <div className="hidden absolute inset-0 bg-gradient-to-br from-[#FFF8EC] via-[#FFF2E0] to-[#E8F5E9] place-items-center">
                  <div className="text-center p-4">
                    <div className="text-[11px] tracking-[0.2em] uppercase text-[#8A7352]">Chaupai {selectedAnchor.number} • {selectedAnchor.label}</div>
                    <div className="font-serif text-[28px] mt-2">{selectedAnchor.symbol}</div>
                    <div className="mt-2 text-[10px] text-[#8A7352]">Missing: {selectedAnchor.chaupaiImage}</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 w-14 h-14 rounded-[14px] bg-white border shadow overflow-hidden grid place-items-center">
                  <img
                    src={selectedAnchor.anchorImage}
                    alt={selectedAnchor.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <span className="absolute inset-0 grid place-items-center text-[20px] bg-white/60">{selectedAnchor.symbol}</span>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B6E4F] text-white text-[11px]">{selectedAnchor.label}</div>
              </div>

              <div className="p-5 md:p-8">
                {mode==="explore" && (
                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#8A7352] mb-2">Memory Anchor • स्मृति चिह्न</p>
                      <h3 className="font-serif text-[28px] text-[#2B2117]">{selectedAnchor.label}</h3>
                      <p className="text-[13px] text-[#5A4A38] mt-1">{selectedAnchor.memoryConnection}</p>
                    </div>
                    <div className="bg-[#FFFBF0] rounded-[16px] border border-[#F5E6C8] p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8A7352] mb-2">Chaupai {selectedAnchor.number}</p>
                      <p className="font-serif text-[18px] md:text-[22px] leading-relaxed text-[#2B2117]">{selectedAnchor.chaupaiHindi}</p>
                      <p className="mt-3 text-[13px] italic text-[#5A4A38]">{lang==="hindi" ? selectedAnchor.chaupaiHindi : selectedAnchor.transliteration}</p>
                      <p className="mt-2 text-[12px] text-[#8A7352]">{lang==="hindi"?selectedAnchor.transliteration:selectedAnchor.transliteration}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white border rounded-[16px] p-4">
                        <p className="text-[11px] uppercase tracking-widest text-[#8A7352]">Arth • Meaning</p>
                        <p className="mt-2 text-[14px] leading-relaxed">{lang==="hindi"?selectedAnchor.hindiMeaning:selectedAnchor.englishMeaning}</p>
                      </div>
                      <div className="bg-[#0B6E4F]/5 border border-[#0B6E4F]/10 rounded-[16px] p-4">
                        <p className="text-[11px] uppercase tracking-widest text-[#0B6E4F]">Yaad Kaise Kare • How to remember</p>
                        <p className="mt-2 text-[14px] leading-relaxed"><b>देखो</b> → {selectedAnchor.symbol} <br/><b>भाव</b> → {selectedAnchor.hindiMeaning.slice(0,60)}...<br/><b>Anchor</b> → {selectedAnchor.label} triggers Chaupai {selectedAnchor.number}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {selectedBagicha.anchors.map(a=>{
                        const i = selectedBagicha.anchors.findIndex(x=>x.number===selectedAnchor.number);
                        const prev = selectedBagicha.anchors[i-1];
                        const next = selectedBagicha.anchors[i+1];
                        return null
                      })}
                      <button onClick={()=>{
                        const i = selectedBagicha.anchors.findIndex(x=>x.number===selectedAnchor!.number);
                        const prev = selectedBagicha.anchors[i-1];
                        if(prev) handleAnchorSelect(prev);
                      }} className="px-4 py-2 rounded-full border bg-white text-sm">← Previous</button>
                      <button onClick={()=>{
                        const i = selectedBagicha.anchors.findIndex(x=>x.number===selectedAnchor!.number);
                        const next = selectedBagicha.anchors[i+1];
                        if(next) handleAnchorSelect(next);
                      }} className="ml-auto px-5 py-2 rounded-full bg-[#2B2117] text-white text-sm">Next Anchor →</button>
                    </div>
                  </div>
                )}

                {mode==="recall" && (
                  <div className="space-y-5">
                    <h3 className="font-serif text-[22px]">Recall • याद करो</h3>
                    <p className="text-[14px] text-[#5A4A38]">Look at the image, identify the anchor. Encouraging, not competitive.</p>
                    <div className="bg-[#FFFBF0] rounded-[16px] border p-6 text-center">
                      <div className="text-[48px]">{selectedAnchor.symbol}</div>
                      <p className="mt-2 font-serif">Which Memory Anchor is this?</p>
                      <div className="grid grid-cols-2 gap-2 mt-4">
                        {currentQuiz?.map(opt=>(
                          <button key={opt.number} onClick={()=>checkQuiz(opt.label)} className={`p-3 rounded-[12px] border text-sm ${quizAnswer===opt.label ? (quizResult?"bg-green-50 border-green-300":"bg-red-50 border-red-300") : "bg-white"}`}>{opt.label}</button>
                        ))}
                      </div>
                      {quizAnswer && (
                        <div className={`mt-4 p-3 rounded-[12px] text-sm ${quizResult?"bg-green-50 text-green-800":"bg-amber-50 text-amber-800"}`}>
                          {quizResult?`✓ Correct! ${selectedAnchor.label} → Chaupai ${selectedAnchor.number}`:`✗ Not quite. Correct is ${selectedAnchor.label}. Try again!`}
                          <div className="mt-2">
                            <button onClick={()=>{setQuizAnswer(null); setQuizResult(null);}} className="px-3 py-1 rounded-full bg-white border text-xs">Retry</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {mode==="reconstruct" && (
                  <div className="space-y-5">
                    <h3 className="font-serif text-[22px]">Reconstruct • क्रम बनाओ</h3>
                    <p className="text-[14px] text-[#5A4A38]">Arrange the 5 anchors of {selectedBagicha.hindiName} in correct order (Chaupai {selectedBagicha.chaupaiRange}). Tap in order.</p>
                    <div className="flex flex-wrap gap-2">
                      {reconstructShuffled.map(a=>{
                        const selectedIdx = reconstructOrder.indexOf(a.number);
                        const isSelected = selectedIdx!==-1;
                        return (
                          <button key={a.number} onClick={()=>{
                            if(isSelected) setReconstructOrder(o=>o.filter(n=>n!==a.number));
                            else setReconstructOrder(o=>[...o,a.number]);
                          }} className={`px-4 py-2 rounded-full border text-sm ${isSelected?"bg-[#0B6E4F] text-white":"bg-white"}`}>
                            {isSelected?`${selectedIdx+1}. `:""}{a.label}
                          </button>
                        )
                      })}
                    </div>
                    <div className="bg-[#FFFBF0] border rounded-[16px] p-4">
                      <p className="text-[11px] uppercase text-[#8A7352]">Your order</p>
                      <p className="mt-2 font-mono text-sm">{reconstructOrder.length?reconstructOrder.map(n=>`C${n}`).join(" → "):"Tap anchors above in sequence"}</p>
                      <div className="flex gap-2 mt-4">
                        <button onClick={()=>setReconstructOrder([])} className="px-4 py-2 rounded-full border bg-white text-sm">Reset</button>
                        <button onClick={()=>{
                          const correct = selectedBagicha.anchors.map(a=>a.number);
                          const isCorrect = JSON.stringify(correct)===JSON.stringify(reconstructOrder);
                          alert(isCorrect?`✓ Perfect! Correct order: ${correct.join(", ")}`:`Correct is ${correct.join(", ")}. You did ${reconstructOrder.join(", ")}. Keep practicing!`);
                        }} className="px-5 py-2 rounded-full bg-[#2B2117] text-white text-sm">Check Order</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
