export interface Bagicha {
  id: number;
  title: string;
  devanagariTitle?: string; // Added to support BagicheSection1
  theme?: string;          // Added to support BagicheSection1
  chaupaiRange: string;
  description: string;
  memoryAnchors: string[];
  youtubeUrl?: string;
}

export const BAGICHE_DATA: Bagicha[] = [
  {
    id: 1,
    title: "Bagicha 1: Invocation & Guru Vandana",
    devanagariTitle: "बगीचा 1: गुरु वंदना",
    theme: "from-amber-500/20 to-orange-500/20",
    chaupaiRange: "Chaupais 1-5",
    description: "Setting the foundation with guru remembrance and opening dohas.",
    memoryAnchors: ["Guru Paduka", "Divine Mirror", "Lotus Seat"],
    youtubeUrl: "https://www.youtube.com/watch?v=9mnblgMuUrQ"
  },
  {
    id: 2,
    title: "Bagicha 2: Hanuman Ji's Form & Strength",
    devanagariTitle: "बगीचा 2: रूप और बल",
    theme: "from-indigo-500/20 to-blue-500/20",
    chaupaiRange: "Chaupais 6-10",
    description: "Contemplating the heroic and majestic divine form.",
    memoryAnchors: ["Golden Mountain", "Vajra Mace", "Radiant Aura"],
    youtubeUrl: "https://youtu.be/cf_gq7wUJxI"
  },
  {
    id: 3,
    title: "Bagicha 3: Wisdom & Devotion",
    devanagariTitle: "बगीचा 3: ज्ञान और भक्ति",
    theme: "from-purple-500/20 to-indigo-500/20",
    chaupaiRange: "Chaupais 11-15",
    description: "Exploring the union of boundless knowledge and pure bhakti.",
    memoryAnchors: ["Ocean of Wisdom", "Sacred Flame", "Open Heart"],
    youtubeUrl: "https://youtu.be/yYaml2SeZMQ"
  },
  {
    id: 4,
    title: "Bagicha 4: Service & Rama's Mission",
    devanagariTitle: "बगीचा 4: सेवा और प्रभु कार्य",
    theme: "from-emerald-500/20 to-teal-500/20",
    chaupaiRange: "Chaupais 16-20",
    description: "The embodiment of perfect selfless service and dedication.",
    memoryAnchors: ["Bridge of Devotion", "Chariot of Duty", "Bow and Arrow"],
    youtubeUrl: "https://youtu.be/D8mLsNk5_Mc"
  },
  {
    id: 5,
    title: "Bagicha 5: Courage & Overcoming Obstacles",
    devanagariTitle: "बगीचा 5: संकट मोचन",
    theme: "from-rose-500/20 to-red-500/20",
    chaupaiRange: "Chaupais 21-25",
    description: "Dispelling fear and dissolving all worldly challenges.",
    memoryAnchors: ["Shield of Grace", "Roaring Lion", "Cloud of Protection"],
    youtubeUrl: "https://youtu.be/z_QcrT-QuLo"
  },
  {
    id: 6,
    title: "Bagicha 6: Divine Protection & Refuge",
    devanagariTitle: "बगीचा 6: शरण और सुरक्षा",
    theme: "from-cyan-500/20 to-blue-500/20",
    chaupaiRange: "Chaupais 26-30",
    description: "Finding ultimate safety and solace in divine refuge.",
    memoryAnchors: ["Sanctuary Gate", "Abhaya Mudra", "Everlasting Light"],
    youtubeUrl: "https://youtu.be/p58nfmIcQlg"
  },
  {
    id: 7,
    title: "Bagicha 7: Supreme Grace",
    devanagariTitle: "बगीचा 7: परम कृपा",
    theme: "from-amber-500/20 to-yellow-500/20",
    chaupaiRange: "Chaupais 31-35",
    description: "Receiving the boundless grace and blessings of the protector.",
    memoryAnchors: ["Nectar Cup", "Flowing River", "Open Sky"],
    youtubeUrl: ""
  },
  {
    id: 8,
    title: "Bagicha 8: Final Surrender & Fruit of Devotion",
    devanagariTitle: "बगीचा 8: पूर्ण समर्पण",
    theme: "from-violet-500/20 to-purple-500/20",
    chaupaiRange: "Chaupais 36-40",
    description: "The ultimate culmination of the Hanuman Chalisa journey.",
    memoryAnchors: ["Blooming Lotus", "Crown of Peace", "Infinite Horizon"],
    youtubeUrl: ""
  }
];

export const PHILOSOPHY_DATA = {
  seed: {
    term: "Bhakti",
    devanagari: "भक्ति",
    meaning: "The Seed",
    description: "Devotion is planted as a seed in the heart, holding the blueprint of complete spiritual awakening."
  },
  water: {
    term: "Arth",
    devanagari: "अर्थ",
    meaning: "The Water",
    description: "Deep understanding and philosophical meaning nourish the seed, allowing clarity to take root."
  },
  flower: {
    term: "Anubhuti",
    devanagari: "अनुभूति",
    meaning: "The Flower",
    description: "Direct inner realization and meditative experience cause the flower of divine wisdom to blossom."
  },
  evolution: "Understand → Feel → Remember → Live"
};

export const GARDEN_PATHS = [
  {
    id: 1,
    title: "Explore Bhakti",
    devanagariTitle: "भक्ति अन्वेषण",
    subtitle: "The Foundation",
    badge: "Core",
    status: "Active", // Added to support SacredGardenNav1
    description: "Discover the seed of devotion and establish a daily contemplative practice."
  },
  {
    id: 2,
    title: "Understand Arth",
    devanagariTitle: "अर्थ बोध",
    subtitle: "Deep Meanings",
    badge: "Wisdom",
    status: "Active",
    description: "Unpack the literal and spiritual layers behind sacred verses."
  },
  {
    id: 3,
    title: "Experience Anubhuti",
    devanagariTitle: "अनुभूति अनुभव",
    subtitle: "Inner Realization",
    badge: "Meditation",
    status: "Active",
    description: "Move beyond intellectual study into direct experiential peace."
  },
  {
    id: 4,
    title: "Katha",
    devanagariTitle: "कथा सरिता",
    subtitle: "Sacred Narratives",
    badge: "Stories",
    status: "Active",
    description: "Immerse yourself in timeless stories that illuminate human and divine virtues."
  },
  {
    id: 5,
    title: "Learn & Remember",
    devanagariTitle: "स्मृति पथ",
    subtitle: "The Memory System",
    badge: "Memory",
    status: "Active",
    description: "Use spatial anchors and imagery to effortlessly retain sacred texts."
  },
  {
    id: 6,
    title: "Bal Bhakti",
    devanagariTitle: "बाल भक्ति",
    subtitle: "For Young Minds",
    badge: "Family",
    status: "Active",
    description: "Engaging, accessible spiritual learning designed for children and families."
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Discover",
    description: "Explore the core pillars of Bhakti, Arth, and Anubhuti."
  },
  {
    step: "02",
    title: "Explore",
    description: "Navigate through specialized sanctuary paths within the Udyan."
  },
  {
    step: "03",
    title: "Enter",
    description: "Step into the Hanuman Chalisa learning sanctuary."
  },
  {
    step: "04",
    title: "Walk",
    description: "Journey progressively through the 8 Bagiche."
  },
  {
    step: "05",
    title: "Remember",
    description: "Anchor verses in your mind using vivid memory landmarks."
  },
  {
    step: "06",
    title: "Practice",
    description: "Deepen your retention with guided YouTube recitals and videos."
  }
];
