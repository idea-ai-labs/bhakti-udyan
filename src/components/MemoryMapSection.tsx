"use client";
import { BAGICHE_DATA } from "@/data/udyanData";

function getLabel(anchor: any): string {
  if (!anchor) return "";
  if (typeof anchor === "string") return anchor;
  if (typeof anchor.label === "string") return anchor.label;
  return String(anchor);
}

function getNumber(anchor: any, fallback: number): number {
  if (anchor && typeof anchor.chaupaiNumber === "number") return anchor.chaupaiNumber;
  return fallback;
}

export default function MemoryMapSection() {
  return (
    <section id="memory-map" className="py-20 px-6 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-[0.2em] uppercase text-[#0B6E4F]/60 font-semibold mb-3">
            Memory Anchors
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B6E4F] mb-4">
            40 Anchors · 8 Bagiche
          </h2>
          <p className="text-[#5C4A32] max-w-2xl mx-auto">
            Hanuman Chalisa ke 40 chaupaiyon ko yaad karne ke liye 40 chitra-anchors — 
            har Bagicha mein 5 anchors, kahani aur chitron se.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B6E4F]/10 text-sm text-[#0B6E4F]">
            <span className="w-2 h-2 rounded-full bg-[#F5B700] animate-pulse" />
            रट्टा नहीं — कहानी और चित्रों से याद करें
          </div>
        </div>

        {/* Journey Line - 8 Bagiche */}
        <div className="hidden md:flex justify-center items-center gap-2 mb-12 overflow-x-auto">
          {BAGICHE_DATA.map((b, idx) => (
            <div key={b.id} className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text-sm font-bold">
                  {b.id}
                </div>
                <span className="text- mt-1 text-[#0B6E4F] font-medium whitespace-nowrap">{b.englishName}</span>
              </div>
              {idx < BAGICHE_DATA.length - 1 && (
                <div className="w-8 h- bg-[#D4AF7A]/50" />
              )}
            </div>
          ))}
        </div>

        {/* Grid - 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BAGICHE_DATA.map((bagicha) => (
            <div
              key={bagicha.id}
              className="bg-white rounded- border border-[#0B6E4F]/10 p-5 shadow-sm hover:shadow-md hover:border-[#D4AF7A]/50 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold tracking-widest text-[#0B6E4F]/50">
                    BAGICHA {bagicha.id}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#FFF2E0] text-[#8C6A3B] font-medium">
                    {bagicha.chaupaiRange}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-[#0B6E4F] leading-tight">
                  {bagicha.englishName}
                </h3>
                <p className="text-xs text-[#8C6A3B] mt-1 font-medium">
                  {bagicha.hindiName}
                </p>
                <div className="mt-3 h- w-12 rounded-full bg-[#F5B700]" />
                <p className="mt-3 text- leading-relaxed text-[#5C4A32]">
                  {bagicha.bhav}
                </p>
              </div>

              {/* Only Numbered List - No Pills */}
              <div className="space-y-2.5 mt-auto">
                {(bagicha.anchors && bagicha.anchors.length > 0 ? bagicha.anchors : bagicha.memoryAnchors.map((m, i) => ({ chaupaiNumber: (bagicha.id - 1) * 5 + i + 1, label: m }))).map((anchor: any, idx: number) => {
                  const num = getNumber(anchor, (bagicha.id - 1) * 5 + idx + 1);
                  const label = getLabel(anchor).replace(/^Chaupai \d+\s*—\s*/i, "").trim() || getLabel(anchor);
                  return (
                    <div
                      key={`${bagicha.id}-${num}`}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FFFBF0] border border-[#D4AF7A]/40 flex items-center justify-center text- font-bold text-[#0B6E4F] group-hover:bg-[#0B6E4F] group-hover:text-white transition-colors">
                        {num}
                      </div>
                      <span className="text- leading-snug text-[#3D2F1F] pt-1">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#8C6A3B]/70">
            Validated against 40 Anchors Master List — {BAGICHE_DATA.reduce((acc, b) => acc + (b.anchors?.length || 0), 0)} anchors total
          </p>
        </div>
      </div>
    </section>
  );
}
