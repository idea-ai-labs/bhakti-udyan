'react';
import { JOURNEY_STEPS } from '../data/udyanData';
import { Sparkles } from 'lucide-react';

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-28 px-6 z-10 border-t border-cosmos-800/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase block mb-3">Guided Path</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-6">
            New to Bhakti Udyan?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Follow our contemplative step-by-step visitor journey into the sacred cosmic garden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {JOURNEY_STEPS.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-cosmos-900/70 border border-cosmos-700/60 backdrop-blur-md relative group hover:border-gold-500/50 transition-all duration-300">
              <span className="text-4xl font-serif font-bold text-gold-500/30 block mb-4 group-hover:text-gold-400 transition-colors">
                {item.step}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
