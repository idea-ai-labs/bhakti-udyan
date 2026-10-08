'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-cosmos-800 py-16 px-6 z-10 bg-cosmos-950 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-saffron-600 p-[1px]">
              <div className="w-full h-full bg-cosmos-950 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-gold-400" />
              </div>
            </div>
            <span className="font-serif text-lg tracking-wider text-white font-bold">BHAKTI UDYAN</span>
          </div>
          <p className="text-xs tracking-widest text-gold-400 uppercase mb-4">Bhakti · Arth · Anubhuti</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            A sacred cosmic garden where devotion is understood, experienced, and remembered.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Explore</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="#philosophy" className="hover:text-gold-400 transition-colors">Philosophy</Link></li>
            <li><Link href="#udyan" className="hover:text-gold-400 transition-colors">Sacred Gardens</Link></li>
            <li><Link href="#bagiche" className="hover:text-gold-400 transition-colors">8 Bagiche</Link></li>
            <li><Link href="#memory-map" className="hover:text-gold-400 transition-colors">Memory Map</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Learn & Remember</h4>
          <ul className="space-y-2.5 text-xs">
            <li><a href="#bagiche" className="hover:text-gold-400 transition-colors">Hanuman Chalisa Journey</a></li>
            <li><a href="#memory-map" className="hover:text-gold-400 transition-colors">Download PDF Map</a></li>
            <li><a href="https://www.youtube.com/@BhaktiUdyan" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">YouTube Teachings</a></li>
            <li><a href="#journey" className="hover:text-gold-400 transition-colors">New Visitor Guide</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Connect</h4>
          <p className="text-xs text-gray-400 mb-4">Join our growing community exploring the depths of devotional wisdom.</p>
          <a
            href="https://www.youtube.com/@BhaktiUdyan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-cosmos-900 border border-cosmos-700 text-xs text-gold-400 hover:border-gold-500 transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-cosmos-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Bhakti Udyan. All rights reserved.</p>
        <p className="font-serif tracking-widest text-gold-400 mt-4 sm:mt-0">Understand. Feel. Remember. Live. &nbsp;|&nbsp; जय श्री राम 🚩</p>
      </div>
    </footer>
  );
}
