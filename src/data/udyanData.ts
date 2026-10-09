export interface MemoryAnchor {
  chaupaiNumber: number;
  label: string;
}

export interface Bagicha {
  id: number;
  englishName: string;
  hindiName: string;
  title: string; // Used for UI compatibility
  chaupaiRange: string;
  bhav: string;
  memoryAnchors: string[]; // List of strings for component compatibility
  anchors: MemoryAnchor[]; // Detailed anchors with numbers
  memoryJourney: string[];
  youtubeUrl?: string;
}

export const BAGICHE_DATA: Bagicha[] = [
  {
    id: 1,
    englishName: "Gyan Aur Bal",
    hindiName: "ज्ञान और बल",
    title: "Bagicha 1: ज्ञान और बल (Gyan Aur Bal)",
    chaupaiRange: "1–5",
    bhav: "हनुमान जी का ज्ञान, बल, बुद्धिमत्ता और दिव्य स्वरूप।",
    memoryAnchors: [
      "Chaupai 1 — Gyan Sagar Tihun Lok",
      "Chaupai 2 — Ramdoot Pawan Putra",
      "Chaupai 3 — Mahabir Sumati",
      "Chaupai 4 — Kanchan Kundal",
      "Chaupai 5 — Vajra Janeu"
    ],
    anchors: [
      { chaupaiNumber: 1, label: "Gyan Sagar Tihun Lok" },
      { chaupaiNumber: 2, label: "Ramdoot Pawan Putra" },
      { chaupaiNumber: 3, label: "Mahabir Sumati" },
      { chaupaiNumber: 4, label: "Kanchan Kundal" },
      { chaupaiNumber: 5, label: "Vajra Janeu" }
    ],
    memoryJourney: ["ज्ञान", "रामदूत", "महाबीर", "दिव्य आभूषण", "वज्र समान शक्ति"],
    youtubeUrl: "https://www.youtube.com/watch?v=9mnblgMuUrQ"
  },
  {
    id: 2,
    englishName: "Divya Swaroop Aur Leela",
    hindiName: "दिव्य स्वरूप और लीला",
    title: "Bagicha 2: दिव्य स्वरूप और लीला (Divya Swaroop Aur Leela)",
    chaupaiRange: "6–10",
    bhav: "हनुमान जी का दिव्य स्वरूप, विद्वत्ता, रामकथा के प्रति प्रेम और अद्भुत शक्तियाँ।",
    memoryAnchors: [
      "Chaupai 6 — Shankar Suvan",
      "Chaupai 7 — Vidyavaan Chatur",
      "Chaupai 8 — Prabhu Charitra",
      "Chaupai 9 — Sukshm Bikat Roop",
      "Chaupai 10 — Bhim Roop Sanhare"
    ],
    anchors: [
      { chaupaiNumber: 6, label: "Shankar Suvan" },
      { chaupaiNumber: 7, label: "Vidyavaan Chatur" },
      { chaupaiNumber: 8, label: "Prabhu Charitra" },
      { chaupaiNumber: 9, label: "Sukshm Bikat Roop" },
      { chaupaiNumber: 10, label: "Bhim Roop Sanhare" }
    ],
    memoryJourney: ["शिव अंश", "विद्वान हनुमान", "रामकथा", "सूक्ष्म रूप", "विशाल और शक्तिशाली रूप"],
    youtubeUrl: "https://youtu.be/cf_gq7wUJxI"
  },
  {
    id: 3,
    englishName: "Ram Bhakti Aur Yash",
    hindiName: "राम भक्ति और यश",
    title: "Bagicha 3: राम भक्ति और यश (Ram Bhakti Aur Yash)",
    chaupaiRange: "11–15",
    bhav: "राम जी के प्रति हनुमान जी की सेवा, भक्ति और तीनों लोकों में उनकी महिमा।",
    memoryAnchors: [
      "Chaupai 11 — Laye Sanjivan",
      "Chaupai 12 — Raghupati Badai",
      "Chaupai 13 — Sahas Badan",
      "Chaupai 14 — Sanakadik Munisa",
      "Chaupai 15 — Yam Kuber"
    ],
    anchors: [
      { chaupaiNumber: 11, label: "Laye Sanjivan" },
      { chaupaiNumber: 12, label: "Raghupati Badai" },
      { chaupaiNumber: 13, label: "Sahas Badan" },
      { chaupaiNumber: 14, label: "Sanakadik Munisa" },
      { chaupaiNumber: 15, label: "Yam Kuber" }
    ],
    memoryJourney: ["संजीवनी", "श्रीराम की प्रशंसा", "सहस्र मुखों से यश", "ऋषियों की स्तुति", "देवताओं द्वारा सम्मान"],
    youtubeUrl: "https://youtu.be/yYaml2SeZMQ"
  },
  {
    id: 4,
    englishName: "Seva Aur Samarthya",
    hindiName: "सेवा और सामर्थ्य",
    title: "Bagicha 4: सेवा और सामर्थ्य (Seva Aur Samarthya)",
    chaupaiRange: "16–20",
    bhav: "हनुमान जी की सेवा, मार्गदर्शन, अद्भुत सामर्थ्य और कठिन कार्यों को पूरा करने की शक्ति।",
    memoryAnchors: [
      "Chaupai 16 — Tum Upkar",
      "Chaupai 17 — Tumharo Mantra",
      "Chaupai 18 — Yug Sahastra",
      "Chaupai 19 — Prabhu Mudrika",
      "Chaupai 20 — Durgam Kaj"
    ],
    anchors: [
      { chaupaiNumber: 16, label: "Tum Upkar" },
      { chaupaiNumber: 17, label: "Tumharo Mantra" },
      { chaupaiNumber: 18, label: "Yug Sahastra" },
      { chaupaiNumber: 19, label: "Prabhu Mudrika" },
      { chaupaiNumber: 20, label: "Durgam Kaj" }
    ],
    memoryJourney: ["उपकार", "मार्गदर्शन", "विराट शक्ति", "राम की मुद्रिका", "कठिन कार्यों की सिद्धि"],
    youtubeUrl: "https://youtu.be/D8mLsNk5_Mc"
  },
  {
    id: 5,
    englishName: "Raksha Aur Sukh",
    hindiName: "रक्षा और सुख",
    title: "Bagicha 5: रक्षा और सुख (Raksha Aur Sukh)",
    chaupaiRange: "21–25",
    bhav: "हनुमान जी की शरण, भक्तों को मिलने वाला सुख, उनकी रक्षा और रोगों तथा पीड़ाओं से मुक्ति की प्रार्थना।",
    memoryAnchors: [
      "Chaupai 21 — Ram Duare",
      "Chaupai 22 — Sab Sukh Lahai",
      "Chaupai 23 — Aapan Tej",
      "Chaupai 24 — Bhoot Pisaach",
      "Chaupai 25 — Nase Rog"
    ],
    anchors: [
      { chaupaiNumber: 21, label: "Ram Duare" },
      { chaupaiNumber: 22, label: "Sab Sukh Lahai" },
      { chaupaiNumber: 23, label: "Aapan Tej" },
      { chaupaiNumber: 24, label: "Bhoot Pisaach" },
      { chaupaiNumber: 25, label: "Nase Rog" }
    ],
    memoryJourney: ["राम के द्वार", "सुख की प्राप्ति", "हनुमान जी का तेज", "नकारात्मक शक्तियों से रक्षा", "रोगों से मुक्ति"],
    youtubeUrl: "https://youtu.be/z_QcrT-QuLo"
  },
  {
    id: 6,
    englishName: "Sankat Mochan",
    hindiName: "संकट मोचन",
    title: "Bagicha 6: संकट मोचन (Sankat Mochan)",
    chaupaiRange: "26–30",
    bhav: "संकटों से मुक्ति, राम की कृपा, मनोकामनाओं की पूर्ति और संतों की रक्षा।",
    memoryAnchors: [
      "Chaupai 26 — Sankat Te",
      "Chaupai 27 — Sab Par Ram",
      "Chaupai 28 — Aur Manorath",
      "Chaupai 29 — Charo Jug",
      "Chaupai 30 — Sadhu Sant"
    ],
    anchors: [
      { chaupaiNumber: 26, label: "Sankat Te" },
      { chaupaiNumber: 27, label: "Sab Par Ram" },
      { chaupaiNumber: 28, label: "Aur Manorath" },
      { chaupaiNumber: 29, label: "Charo Jug" },
      { chaupaiNumber: 30, label: "Sadhu Sant" }
    ],
    memoryJourney: ["संकटों से मुक्ति", "राम की कृपा", "मनोकामना", "चारों युगों में महिमा", "साधु-संतों की रक्षा"],
    youtubeUrl: "https://youtu.be/p58nfmIcQlg"
  },
  {
    id: 7,
    englishName: "Siddhi Aur Bhakti",
    hindiName: "सिद्धि और भक्ति",
    title: "Bagicha 7: सिद्धि और भक्ति (Siddhi Aur Bhakti)",
    chaupaiRange: "31–35",
    bhav: "हनुमान जी की सिद्धियाँ, राम-भक्ति का अमृत और भक्ति के फल की महिमा।",
    memoryAnchors: [
      "Chaupai 31 — Aasht Siddhi",
      "Chaupai 32 — Ram Rasayan",
      "Chaupai 33 — Tumhare Bhajan",
      "Chaupai 34 — Ant Kaal",
      "Chaupai 35 — Aur Devta"
    ],
    anchors: [
      { chaupaiNumber: 31, label: "Aasht Siddhi" },
      { chaupaiNumber: 32, label: "Ram Rasayan" },
      { chaupaiNumber: 33, label: "Tumhare Bhajan" },
      { chaupaiNumber: 34, label: "Ant Kaal" },
      { chaupaiNumber: 35, label: "Aur Devta" }
    ],
    memoryJourney: ["अष्ट सिद्धियाँ", "राम-भक्ति का अमृत", "हनुमान जी का भजन", "अंतिम समय में स्मरण", "हनुमान जी की अनन्य भक्ति"],
    youtubeUrl: ""
  },
  {
    id: 8,
    englishName: "Phal Aur Ashirwad",
    hindiName: "फल और आशीर्वाद",
    title: "Bagicha 8: फल और आशीर्वाद (Phal Aur Ashirwad)",
    chaupaiRange: "36–40",
    bhav: "हनुमान चालीसा के पाठ का फल, कृपा, आशीर्वाद और तुलसीदास जी की भक्ति।",
    memoryAnchors: [
      "Chaupai 36 — Sankat Katai",
      "Chaupai 37 — Jai Jai Jai",
      "Chaupai 38 — Jo Sat Bar",
      "Chaupai 39 — Jo Yah Padhe",
      "Chaupai 40 — Tulsidas"
    ],
    anchors: [
      { chaupaiNumber: 36, label: "Sankat Katai" },
      { chaupaiNumber: 37, label: "Jai Jai Jai" },
      { chaupaiNumber: 38, label: "Jo Sat Bar" },
      { chaupaiNumber: 39, label: "Jo Yah Padhe" },
      { chaupaiNumber: 40, label: "Tulsidas" }
    ],
    memoryJourney: ["संकटों का अंत", "जयकार", "सौ बार पाठ", "पाठ करने वाले भक्त का कल्याण", "तुलसीदास जी की प्रार्थना"],
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
  evolution: "Understand → Feel → Remember → Live",
  formulaHeading: "रट्टा नहीं — कहानी और चित्रों से याद करें।"
};

export const GARDEN_PATHS = [
  {
    id: 1,
    title: "Explore Bhakti",
    subtitle: "The Foundation",
    badge: "Core",
    description: "Discover the seed of devotion and establish a daily contemplative practice."
  },
  {
    id: 2,
    title: "Understand Arth",
    subtitle: "Deep Meanings",
    badge: "Wisdom",
    description: "Unpack the literal and spiritual layers behind sacred verses."
  },
  {
    id: 3,
    title: "Experience Anubhuti",
    subtitle: "Inner Realization",
    badge: "Meditation",
    description: "Move beyond intellectual study into direct experiential peace."
  },
  {
    id: 4,
    title: "Katha",
    subtitle: "Sacred Narratives",
    badge: "Stories",
    description: "Immerse yourself in timeless stories that illuminate human and divine virtues."
  },
  {
    id: 5,
    title: "Learn & Remember",
    subtitle: "The Memory System",
    badge: "Memory",
    description: "Use spatial anchors and imagery to effortlessly retain sacred texts."
  },
  {
    id: 6,
    title: "Bal Bhakti",
    subtitle: "For Young Minds",
    badge: "Family",
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
