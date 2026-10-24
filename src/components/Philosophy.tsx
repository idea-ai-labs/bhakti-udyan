
'use client';
import { Sparkles } from 'lucide-react';

const PHILOSOPHY = [
  { id: 'bhakti', deva: 'भक्ति', eng: 'Bhakti', role: 'The Seed', desc: 'Devotion is planted as a seed in the heart, holding the blueprint of complete spiritual awakening.', color: 'from-[#FFF7E6] to-[#FFE9C8]', accent: '#0B6E4F', image: '/heroes/bu-hero-02-bhakti-desktop.webp' },
  { id: 'arth', deva: 'अर्थ', eng: 'Arth', role: 'The Water', desc: 'Deep understanding and philosophical meaning nourish the seed, allowing clarity to take root.', color: 'from-[#E6F5EE] to-[#D6EFE6]', accent: '#0A5E43', image: '/heroes/bu-hero-03-arth-desktop.webp' },
  { id: 'anubhuti', deva: 'अनुभूति', eng: 'Anubhuti', role: 'The Flower', desc: 'Direct inner realization and meditative experience cause the flower of divine wisdom to blossom.', color: 'from-[#FFF0D6] to-[#FFE0B8]', accent: '#9A5A00', image: '/heroes/bu-hero-04-anubhuti-desktop.webp' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 px-6 bg-[#FFFBF0] text-[#2B2117] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#0B6E4F_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0B6E4F]/10 border border-[#0B6E4F]/20 text-[#0B6E4F] text-[11px] tracking-[0.2em] uppercase">The Core Teaching</span>
          <h2 className="mt-6 font-serif text-[36px] md:text-[48px] leading-[0.95] tracking-tight">Bhakti · Arth · Anubhuti</h2>
          <p className="mt-4 max-w-2xl mx-auto text-[18px] leading-[1.6] text-[#5A4A38]">Spiritual learning is a living garden. It grows from devotion to realization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PHILOSOPHY.map((p) => (
            <div key={p.id} className={`group relative rounded-[24px] border border-[#F2E6D3] bg-gradient-to-br ${p.color} p-8 overflow-hidden shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_60px_-24px_rgba(0,0,0,0.2)] transition-all`}>
              <div className="absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full bg-white/40 blur-[1px]" />
              <div className="relative">
                <div className="w-[64px] h-[64px] rounded-[16px] overflow-hidden border border-white/60 shadow-sm">
                  <img src={p.image} alt={p.eng} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6">
                  <div className="text-[12px] tracking-[0.28em] uppercase text-[#8A7352]">{p.role}</div>
                  <h3 className="mt-2 font-serif text-[32px] leading-none text-[#1A140E]">{p.deva}</h3>
                  <div className="text-[13px] tracking-widest uppercase text-[#0B6E4F] font-semibold">{p.eng}</div>
                </div>
                <p className="mt-4 text-[15px] leading-[1.7] text-[#5A4A38]">{p.desc}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#0B6E4F]/20 to-transparent" />
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#0B6E4F]">
                  <Sparkles className="w-4 h-4" /> {p.id === 'bhakti' ? 'Seed' : p.id === 'arth' ? 'Water' : 'Bloom'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex px-6 py-3 rounded-full bg-[#2B2117] text-[#FFFBF0] text-[13px] tracking-[0.18em] uppercase">Understand → Feel → Remember → Live</div>
        </div>
      </div>
    </section>
  );
}
