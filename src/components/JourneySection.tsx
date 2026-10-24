'use client';
import { JOURNEY_STEPS } from '../data/udyanData';

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-24 px-6 bg-[#0A5E43] text-[#FFFBF0] border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-[640px]">
          <span className="inline-flex px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] tracking-[0.2em] uppercase">8-Day Journey</span>
          <h2 className="mt-6 font-serif text-[38px] md:text-[48px] leading-[0.9]">From Seed to Blossom</h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#C9E8DC]">A gentle daily rhythm — 5 chaupaiyan a day, story, image, and reflection. No pressure.</p>
        </div>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" />
          
          <div className="space-y-10">
            {JOURNEY_STEPS.map((item: any, idx: number) => {
              const isEven = idx % 2 === 0;
              const day = item.day ?? item.step ?? `Day ${idx + 1}`;
              const title = item.title;
              const desc = item.description || item.focus || '';
              const bagicha = item.bagicha || item.title;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row gap-6 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1">
                    <div className={`rounded-[20px] bg-[#FFFBF0] text-[#1A140E] border border-white/20 p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.4)] ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] tracking-[0.2em] uppercase text-[#0B6E4F] font-semibold">{typeof day === 'string' && day.includes('Day') ? day : `Day ${day}`}</span>
                        <span className="px-2 py-1 rounded-full bg-[#0B6E4F]/10 text-[#0B6E4F] text-[10px] tracking-widest uppercase">{bagicha}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-[22px] leading-tight">{title}</h3>
                      <p className="mt-3 text-[14px] leading-[1.6] text-[#5A4A38]">{desc}</p>
                      <div className="mt-4 text-[11px] text-[#B9A68C]">Step {idx + 1} of {JOURNEY_STEPS.length}</div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-[48px] justify-center">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#FFFBF0] text-[#0B6E4F] border-4 border-[#0B6E4F] flex items-center justify-center font-serif font-bold text-[14px] shadow">{idx + 1}</div>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-[20px] bg-[#FFFBF0] text-[#1A140E] border border-white/20 shadow">
            <div className="text-[13px] tracking-[0.2em] uppercase text-[#0B6E4F] font-semibold">Ready to begin?</div>
            <div className="font-serif text-[24px]">Enter the Udyan today</div>
            <a href="#bagiche" className="mt-2 px-6 py-2.5 rounded-full bg-[#0B6E4F] text-white text-[13px] font-semibold hover:bg-[#094A37] transition-colors">Start 8-Day Yatra →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
