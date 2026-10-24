"use client";
import { BAGICHE_DATA } from "@/data/udyanData";

export default function MemoryMapSection() {
  return (
    <section id="memory-map" className="py-20 px-6 bg-[#FFFBF0] border-t border-[#F2E6D3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text- tracking-[0.2em] uppercase text-[#0B6E4F]/60 font-bold mb-3">
            Memory System
          </p>
          <h2 className="font-serif text- md:text- font-bold text-[#0B6E4F] leading-tight">
            40 Anchors Memory Map
          </h2>
          <p className="mt-3 text- text-[#6B5A46] max-w-2xl mx-auto leading-relaxed">
            Hanuman Chalisa ke 40 chaupaiyon ke liye 40 chitra-anchors. 
            Har Bagicha mein 5 anchors — kahani aur chitron se yaad karein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {BAGICHE_DATA.map((bagicha) => (
            <div
              key={bagicha.id}
              className="bg-white rounded- border border-[#F2E6D3] p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text- font-bold tracking-widest text-[#0B6E4F]/50">
                  BAGICHA {bagicha.id}
                </span>
                <span className="text- px-2.5 py-1 rounded-full bg-[#FFF2E0] text-[#8C6A3B] font-semibold">
                  {bagicha.chaupaiRange}
                </span>
              </div>

              <h3 className="font-serif font-bold text- text-[#1A140E]">
                {bagicha.hindiName}
              </h3>
              <p className="text- text-[#8C6A3B] uppercase tracking-wide">
                {bagicha.englishName}
              </p>

              <div className="my-3 h- w-10 bg-[#F5B700] rounded-full" />

              <p className="text-[12.5px] leading-[1.5] text-[#5C4A32] mb-4">
                {bagicha.bhav}
              </p>

              <div className="space-y-2">
                {bagicha.memoryAnchors.map((fullAnchor, idx) => {
                  const label = fullAnchor.includes("—") 
                    ? fullAnchor.split("—")[1].trim() 
                    : fullAnchor;
                  const num = (bagicha.id - 1) * 5 + idx + 1;
                  return (
                    <div key={num} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-[#0B6E4F] text-white flex items-center justify-center text- font-bold shrink-0">
                        {num}
                      </div>
                      <span className="text- text-[#2B2117] leading-tight">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
