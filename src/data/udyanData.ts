export interface Bagicha {
  id: number;
  title: string;
  devanagariTitle: string;
  chaupaiRange: string;
  theme: string;
  description: string;
  memoryAnchors: string[];
  youtubeUrl?: string;
  status: 'active' | 'growing' | 'upcoming';
}

export interface GardenPath {
  id: string;
  title: string;
  devanagariTitle: string;
  subtitle: string;
  description: string;
  badge: string;
  status: 'active' | 'growing' | 'upcoming';
}

export const PHILOSOPHY_DATA = {
  seed: {
    term: "Bhakti",
    devanagari: "भक्ति",
    meaning: "The Seed",
    description: "Devotion is the foundational seed planted within the heart, calling forth our inner reverence and connection."
  },
  water: {
    term: "Arth",
    devanagari: "अर्थ",
    meaning: "The Water",
    description: "Deep understanding, meaning, and contextual wisdom nourish the seed, transforming blind repetition into conscious insight."
  },
  flower: {
    term: "Anubhuti",
    devanagari: "अनुभूति",
    meaning: "The Flower",
    description: "Direct personal experience and awakening blossom naturally when devotion meets understanding."
  },
  evolution: "Anubhuti → Smriti (Memory) → Jeevan (Lived Transformation)"
};

export const GARDEN_PATHS: GardenPath[] = [
  {
    id: "explore-bhakti",
    title: "Explore Bhakti",
    devanagariTitle: "भक्ति अन्वेषण",
    subtitle: "Mantra, Stotra & Sacred Traditions",
    description: "Journey through sacred hymns and foundational spiritual practices designed to center the mind and elevate consciousness.",
    badge: "Core Garden",
    status: "active"
  },
  {
    id: "understand-arth",
    title: "Understand Arth",
    devanagariTitle: "अर्थ बोध",
    subtitle: "Meaning, Symbolism & Interpretation",
    description: "Unveil the hidden layers, Sanskrit etymology, and philosophical depth behind every line of sacred devotional texts.",
    badge: "Wisdom Path",
    status: "active"
  },
  {
    id: "experience-anubhuti",
    title: "Experience Anubhuti",
    devanagariTitle: "दिव्य अनुभूति",
    subtitle: "Contemplative & Musical Immersion",
    description: "Engage with immersive audio-visual experiences, meditative soundscapes, and guided contemplation designed for direct realization.",
    badge: "Immersive",
    status: "growing"
  },
  {
    id: "katha",
    title: "Katha",
    devanagariTitle: "पावन कथा",
    subtitle: "Stories That Anchor Memory",
    description: "Timeless mythological and historical narratives that embed spiritual principles deeply into human memory and daily reflection.",
    badge: "Story Garden",
    status: "growing"
  },
  {
    id: "learn-remember",
    title: "Learn & Remember",
    devanagariTitle: "स्मृति विज्ञान",
    subtitle: "Memory Techniques & Structured Learning",
    description: "Master complex scriptures effortlessly through our signature 8 Bagiche mnemonic framework and visual association maps.",
    badge: "Masterclass",
    status: "active"
  },
  {
    id: "bal-bhakti",
    title: "Bal Bhakti",
    devanagariTitle: "बाल भक्ति",
    subtitle: "Devotional Learning for Families & Children",
    description: "Delightful stories, simple chants, and interactive memory games crafted to pass down cultural wisdom to the next generation.",
    badge: "Family Garden",
    status: "upcoming"
  }
];

export const BAGICHE_DATA: Bagicha[] = [
  {
    id: 1,
    title: "Bagicha 1: Gyan Aur Bal",
    devanagariTitle: "ज्ञान और बल",
    chaupaiRange: "Chaupai 1–5",
    theme: "Invocation & Salutation",
    description: "Awakening the inner reservoirs of pure consciousness, supreme intellect, and divine strength at the feet of the Guru and Lord Hanuman.",
    memoryAnchors: ["Gyan Sagar", "Pawan Putra", "Mahabir", "Kanchan Kundal", "Vajra Vesha"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 2,
    title: "Bagicha 2: Divya Swaroop Aur Leela",
    devanagariTitle: "दिव्य स्वरूप और लीला",
    chaupaiRange: "Chaupai 6–10",
    theme: "Form & Attributes",
    description: "Contemplating the radiant form, unmatched wisdom, virtuous character, and divine grace of Anjaniputra.",
    memoryAnchors: ["Vidyavan", "Prabhu Charitra", "Ram Priya", "Sookshma Roop", "Bhim Roop"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 3,
    title: "Bagicha 3: Rama Seva Aur Parakram",
    devanagariTitle: "राम सेवा और पराक्रम",
    chaupaiRange: "Chaupai 11–15",
    theme: "Heroic Devotion & Strength",
    description: "Witnessing the supreme acts of devotion, the revival of Lakshmana, and the boundless courage that bridged oceans.",
    memoryAnchors: ["Laye Sanjeevan", "Shri Rati", "Sahas Badan", "Asht Siddhi", "Ram Rasayana"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 4,
    title: "Bagicha 4: Bhakti Aur Bhajan",
    devanagariTitle: "भक्ति और भजन",
    chaupaiRange: "Chaupai 16–20",
    theme: "Devotional Absorption",
    description: "Singing the praises of Shri Rama while resting in the eternal assurance of protection and grace.",
    memoryAnchors: ["Tumhare Bhajan", "Duhar Sune", "Sab Sukh Lahain", "Tum Rakshak", "Agya Harin"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 5,
    title: "Bagicha 5: Tej Aur Loka Prabhav",
    devanagariTitle: "तेज और लोक प्रभाव",
    chaupaiRange: "Chaupai 21–25",
    theme: "Cosmic Radiance",
    description: "The three worlds tremble at his valor, and darkness flees before his luminous presence.",
    memoryAnchors: ["Bhoot Pishach", "Nasai Rog", "Sankat Se", "Mahavir Tum", "Dhyan Jo Lavai"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 6,
    title: "Bagicha 6: Deva Vandana Aur Sukh",
    devanagariTitle: "देव वंदना और सुख",
    chaupaiRange: "Chaupai 26–30",
    theme: "Celestial Reverence",
    description: "Honored by sages, gods, and saints as the supreme protector of righteous souls.",
    memoryAnchors: ["Sab Par Ram", "Teen Lok", "Prabhu Mudrika", "Durgam Kaj", "Ram Dware"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 7,
    title: "Bagicha 7: Sharanagati Aur Samarpana",
    devanagariTitle: "शरणागति और समर्पण",
    chaupaiRange: "Chaupai 31–35",
    theme: "Complete Surrender",
    description: "Finding ultimate refuge, boundless joy, and freedom from rebirth in the grace of Anjanisuta.",
    memoryAnchors: ["Hot Na Agya", "Sub Sukh", "Tumharo Mantra", "Apan Tej", "Teeno Lok"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  },
  {
    id: 8,
    title: "Bagicha 8: Siddhi Aur Purnata",
    devanagariTitle: "सिद्धि और पूर्णता",
    chaupaiRange: "Chaupai 36–40",
    theme: "Fulfillment & Benediction",
    description: "The concluding benediction and prayer for peace in the heart and home.",
    memoryAnchors: ["Sankat Har", "Mangal Murti", "Jai Jai Jai", "Kripa Karahu", "Pawan Tanay"],
    youtubeUrl: "https://www.youtube.com/@BhaktiUdyan",
    status: "active"
  }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Discover Bhakti Udyan",
    description: "Step into the sacred cosmic garden where spiritual tradition meets deep contemplation."
  },
  {
    step: "02",
    title: "Understand the Philosophy",
    description: "Realize how Bhakti (Seed) and Arth (Water) blossom into Anubhuti (Flower)."
  },
  {
    step: "03",
    title: "Explore Hanuman Chalisa",
    description: "Experience our flagship mnemonic journey designed for effortless memorization."
  },
  {
    step: "04",
    title: "Enter the 8 Bagiche",
    description: "Navigate through 8 luminous garden nodes connecting 40 sacred chaupais."
  },
  {
    step: "05",
    title: "Download the Memory Map",
    description: "Get your visual anchor map (स्थान → चित्र → कथा → स्मृति) for daily practice."
  },
  {
    step: "06",
    title: "Watch & Practice on YouTube",
    description: "Immerse yourself in our cinematic video teachings and community chanting sessions."
  }
];
