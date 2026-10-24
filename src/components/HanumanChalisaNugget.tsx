'use client';

export default function HanumanChalisaNugget() {
  return (
    <section className="relative py-20 px-6 bg-[#FFFBF0] border-y border-[#F2E6D3] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_30%,#0B6E4F_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center">
          <span className="inline-flex px-4 py-1 rounded-full bg-[#0B6E4F] text-white text-[11px] tracking-[0.22em] uppercase">One Garden within Bhakti Udyan</span>
          <h2 className="mt-6 font-serif text-[36px] md:text-[48px] leading-[0.9] text-[#1A140E]">Hanuman Chalisa</h2>
          <div className="mt-3 text-[16px] tracking-[0.08em] text-[#0B6E4F] font-medium">40 चौपाइयाँ · 8 बगीचे · 8 दिन</div>
          <p className="mt-6 max-w-[720px] mx-auto text-[16px] leading-[1.7] text-[#5A4A38]">
            Rather than trying to memorize 40 chaupais through brute repetition alone, the Hanuman Chalisa is organized into a magnificent mnemonic memory palace.
          </p>
          <div className="mt-4 inline-block px-5 py-2 rounded-full bg-[#FFF0D6] border border-[#FFE0B8] text-[#9A5A00] text-[14px]">रट्टा नहीं — कहानी और चित्रों से याद करें।</div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[20px] bg-white border border-[#F2E6D3] p-6 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.15)]">
            <div className="w-10 h-10 rounded-[12px] bg-[#E6F5EE] text-[#0B6E4F] flex items-center justify-center font-bold">8</div>
            <h3 className="mt-4 font-serif text-[18px] text-[#1A140E]">8 Bagiche</h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#6B5A46]">Structured gardens breaking down the 40 chaupais.</p>
          </div>
          <div className="rounded-[20px] bg-white border border-[#F2E6D3] p-6 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.15)]">
            <div className="w-10 h-10 rounded-[12px] bg-[#FFF2E0] text-[#9A5A00] flex items-center justify-center font-bold">5</div>
            <h3 className="mt-4 font-serif text-[18px] text-[#1A140E]">5 Anchors per Garden</h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#6B5A46]">Vivid visual memory anchors for effortless recall.</p>
          </div>
          <div className="rounded-[20px] bg-white border border-[#F2E6D3] p-6 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.15)]">
            <div className="w-10 h-10 rounded-[12px] bg-[#F5E6D3] text-[#6B4A24] flex items-center justify-center font-bold">ॐ</div>
            <h3 className="mt-4 font-serif text-[18px] text-[#1A140E]">Deep Arth</h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-[#6B5A46]">Bhakti, meaning, and inner experience in every verse.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
