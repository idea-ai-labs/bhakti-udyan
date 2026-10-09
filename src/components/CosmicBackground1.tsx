'react';

export default function CosmicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep cosmic gradient */}
      <div className="absolute inset-0 bg-cosmos-950 bg-radial-gradient" />
      
      {/* Subtle celestial stars / particles */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#DFB052_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:96px_96px] animate-pulse-glow" />

      {/* Luminous sacred light rays in center */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-saffron-500/10 via-gold-400/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-900/25 rounded-full blur-3xl" />
    </div>
  );
}
