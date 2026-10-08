import CosmicBackground from '../components/CosmicBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import SacredGardenNav from '../components/SacredGardenNav';
import HanumanChalisaNugget from '../components/HanumanChalisaNugget';
import BagicheSection from '../components/BagicheSection';
import MemoryMapSection from '../components/MemoryMapSection';
import JourneySection from '../components/JourneySection';
import YouTubeSection from '../components/YouTubeSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmos-950 text-white overflow-hidden">
      <CosmicBackground />
      <Navbar />
      <Hero />
      <Philosophy />
      <SacredGardenNav />
      <HanumanChalisaNugget />
      <BagicheSection />
      <MemoryMapSection />
      <JourneySection />
      <YouTubeSection />
      <Footer />
    </main>
  );
}
