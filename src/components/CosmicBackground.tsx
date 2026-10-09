'use client';

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Celestial Gradient */}
      <div className="absolute inset-0 bg-cosmos-radial opacity-90" />

      {/* Subtle Nebular Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/15 rounded-full blur-[140px]" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-[10%] left-[10%] w-[700px] h-[700px] bg-purple-950/20 rounded-full blur-[180px]" />

      {/* Subtle Starry Particle Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:36px_36px]" />
    </div>
  );
}
