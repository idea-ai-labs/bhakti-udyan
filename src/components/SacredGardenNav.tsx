
'use client';
import { GARDEN_PATHS } from '../data/udyanData';

const IMAGES: Record<number, string> = {
  1: '/heroes/bu-hero-02-bhakti-desktop.webp',
  2: '/heroes/bu-hero-03-arth-desktop.webp',
  3: '/heroes/bu-hero-04-anubhuti-desktop.webp',
  4: '/heroes/bu-hero-07-learning-paths-desktop.webp',
  5: '/heroes/bu-hero-07-learning-paths-desktop.webp',
  6: '/heroes/bu-hero-05-eight-bagiche-desktop.webp',
};

export default function SacredGardenNav() {
  return (
    <section id="udyan" className="py-24 px-6 bg-[#FFF2E0] relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.22em] uppercase text-[#0B6E4F] font-semibold">The Ecosystem</span>
            <h2 className="font-serif text-[36px] md:text-[44px] leading-[0.9] mt-3 text-[#1A140E]">Paths Through the Udyan</h2>
          </div>
          <p className="max-w-[440px] text-[15px] leading-[1.6] text-[#6B5A46]">Choose a sanctuary to explore within the sacred garden.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GARDEN_PATHS.map((path) => (
            <a key={path.id} href="#bagiche" className="group relative rounded-[20px] bg-[#FFFBF0] border border-[#F2E6D3] overflow-hidden shadow-[0_10px_40px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.2)] transition-all">
              <div className="h-[180px] overflow-hidden relative">
                <img src={IMAGES[path.id] || IMAGES[1]} alt={path.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A140E]/70 to-transparent" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FFFBF0]/90 text-[10px] tracking-widest uppercase text-[#0B6E4F] font-semibold">{path.badge}</div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-[22px] text-white leading-tight">{path.title}</h3>
                  <div className="text-[11px] tracking-widest uppercase text-[#FFE9C8]">{path.devanagariTitle}</div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#8A7352]">{path.subtitle}</div>
                <p className="mt-2 text-[14px] leading-[1.5] text-[#5A4A38]">{path.description}</p>
                <div className="mt-4 inline-flex text-[12px] font-semibold text-[#0B6E4F] group-hover:gap-2 gap-1 transition-all">Explore Path →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
