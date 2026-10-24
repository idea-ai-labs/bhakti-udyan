
// Bhakti Udyan - Yatra Data (isolated for /yatra)
// Authoritative 8 Bagiche x 5 Anchors = 40 Chaupais
// Spelling verified against Brief 2

export type Anchor = {
  number: number
  label: string
  shortKey: string
  chaupaiHindi: string
  transliteration: string
  hindiMeaning: string
  englishMeaning: string
  memoryConnection: string
  chaupaiImage: string
  anchorImage: string
  symbol: string
}

export type Bagicha = {
  id: number
  hindiName: string
  englishName: string
  devanagariTitle: string
  chaupaiRange: string
  bhav: string
  theme: string
  description: string
  color: string
  youtubeUrl?: string
  anchors: Anchor[]
}

const img = (n:number) => `/yatra/chaupai/chaupai-${String(n).padStart(2,'0')}.webp`
const anchorImg = (n:number, slug:string) => `/yatra/anchors/anchor-${String(n).padStart(2,'0')}-${slug}.webp`

export const BAGICHE_DATA: Bagicha[] = [
  {
    id: 1, hindiName: "ज्ञान और बल", englishName: "Gyan Aur Bal", devanagariTitle: "बगीचा १ — ज्ञान और बल",
    chaupaiRange: "Chaupai 1-5", bhav: "श्रद्धा और आदर", theme: "Foundation of knowledge and strength - the ocean of wisdom",
    description: "Hanuman as the ocean of knowledge illuminating the three worlds. The devotee's first darshan.",
    color: "#0B6E4F", anchors: [
      { number:1, label:"Gyan Sagar", shortKey:"gyan-sagar", chaupaiHindi:"जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर।", transliteration:"Jai Hanuman gyan gun sagar, Jai Kapis tihu lok ujagar", hindiMeaning:"हे हनुमान जी, आप ज्ञान और गुणों के सागर हैं, तीनों लोकों में आपकी जय है।", englishMeaning:"Victory to Hanuman, ocean of wisdom and virtue, illuminator of three worlds.", memoryConnection:"समुद्र + शास्त्र = ज्ञान का सागर। विशाल जलराशि देखकर 'सागर' याद आएगा।", chaupaiImage: img(1), anchorImage: anchorImg(1,"gyan-sagar"), symbol:"🌊📖" },
      { number:2, label:"Tihu Lok Ujagar", shortKey:"tihu-lok", chaupaiHindi:"राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा।", transliteration:"Ram doot atulit bal dhama, Anjani-putra Pavan-sut nama", hindiMeaning:"आप राम के दूत, अतुल बल के धाम, अंजनी के पुत्र और पवन पुत्र कहलाते हैं।", englishMeaning:"Messenger of Ram, abode of incomparable strength, son of Anjani and Wind.", memoryConnection:"तीन चमकते गोले = तीन लोक। प्रकाश से उजागर याद करो।", chaupaiImage: img(2), anchorImage: anchorImg(2,"tihu-lok"), symbol:"💫" },
      { number:3, label:"Ramdoot", shortKey:"ramdoot", chaupaiHindi:"महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी।", transliteration:"Mahabir bikram Bajrangi, Kumati nivar sumati ke sangi", hindiMeaning:"महावीर, पराक्रमी, बजरंगी, कुबुद्धि दूर कर सुमति देते हैं।", englishMeaning:"Great hero, mighty, strong as thunderbolt, remover of evil thoughts.", memoryConnection:"अंगूठी में राम नाम = दूत का प्रमाण। मुद्रिका देखो, Ramdoot याद करो।", chaupaiImage: img(3), anchorImage: anchorImg(3,"ramdoot"), symbol:"💍" },
      { number:4, label:"Atulit Bal Dhama", shortKey:"atulit-bal", chaupaiHindi:"कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा।", transliteration:"Kanchan baran biraj subesa, Kanan kundal kunchit kesa", hindiMeaning:"सोने जैसे वर्ण, सुंदर वेष, कानों में कुंडल, घुंघराले केश।", englishMeaning:"Golden-hued, beautifully adorned, earrings shining, curly locks.", memoryConnection:"पहाड़ हथेली पर = अतुलित बल। असीम शक्ति का दृश्य।", chaupaiImage: img(4), anchorImage: anchorImg(4,"atulit-bal"), symbol:"⛰️" },
      { number:5, label:"Anjani Putra", shortKey:"anjani-putra", chaupaiHindi:"हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै।", transliteration:"Hath bajra au dhwaja birajai, Kandhe munj janeu sajai", hindiMeaning:"हाथ में वज्र और ध्वजा, कंधे पर मूँज का जनेऊ।", englishMeaning:"Mace and flag in hands, sacred thread of munj grass on shoulder.", memoryConnection:"माँ + पवन का झोंका = पवनसुत का जन्म। वायु से उत्पत्ति।", chaupaiImage: img(5), anchorImage: anchorImg(5,"anjani-putra"), symbol:"🌬️👩" },
    ]
  },
  {
    id:2, hindiName:"दिव्य स्वरूप और लीला", englishName:"Divya Swaroop Aur Leela", devanagariTitle:"बगीचा २ — दिव्य स्वरूप",
    chaupaiRange:"Chaupai 6-10", bhav:"विस्मय और सौंदर्य", theme:"Divine form and playful leelas",
    description:"The divine appearance and miraculous deeds that inspire wonder.",
    color:"#5A4A38", anchors:[
      { number:6, label:"Mahavir", shortKey:"mahavir", chaupaiHindi:"संकर सुवन केसरी नंदन। तेज प्रताप महा जग बन्दन।", transliteration:"Sankar suvan Kesari Nandan, Tej pratap maha jag bandan", hindiMeaning:"शंकर के अवतार, केसरी के पुत्र, तेजस्वी, सारे जग में वंदनीय।", englishMeaning:"Incarnation of Shiva, son of Kesari, glorious, revered by world.", memoryConnection:"हृदय में राम-सीता = महावीर का प्रेम। सीने में भक्ति।", chaupaiImage: img(6), anchorImage: anchorImg(6,"mahavir"), symbol:"❤️" },
      { number:7, label:"Vikram", shortKey:"vikram", chaupaiHindi:"बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर।", transliteration:"Vidyavan guni ati chatur, Ram kaj karibe ko aatur", hindiMeaning:"विद्वान, गुणी, अत्यंत चतुर, राम कार्य के लिए आतुर।", englishMeaning:"Learned, virtuous, extremely clever, eager for Ram's work.", memoryConnection:"समुद्र पर छलांग = विक्रम। लाँघता हुआ पाँव।", chaupaiImage: img(7), anchorImage: anchorImg(7,"vikram"), symbol:"🦶" },
      { number:8, label:"Kumati Nivar", shortKey:"kumati-nivar", chaupaiHindi:"प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया।", transliteration:"Prabhu charitra sunibe ko rasiya, Ram Lakhan Sita man basiya", hindiMeaning:"प्रभु चरित्र सुनने के रसिया, राम-लखन-सीता मन में बसे।", englishMeaning:"Delights in hearing Ram's story, Ram-Lakhan-Sita dwell in heart.", memoryConnection:"मन से काला धुआँ निकलना = कुबुद्धि दूर। मन शुद्ध।", chaupaiImage: img(8), anchorImage: anchorImg(8,"kumati-nivar"), symbol:"🧠✨" },
      { number:9, label:"Bhim Roop", shortKey:"bhim-roop", chaupaiHindi:"सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा।", transliteration:"Sukshm roop dhari Siyahin dikhava, Bikat roop dhari Lanka jarava", hindiMeaning:"छोटा रूप धर सीता को दिखाया, विकट रूप धर लंका जलाई।", englishMeaning:"Tiny form to meet Sita, colossal form to burn Lanka.", memoryConnection:"विशाल पदचिह्न = भीम रूप। बादलों में पैर।", chaupaiImage: img(9), anchorImage: anchorImg(9,"bhim-roop"), symbol:"👣" },
      { number:10, label:"Asur Nikandan", shortKey:"asur-nikandan", chaupaiHindi:"भीम रूप धरि असुर सँहारे। रामचन्द्र के काज सँवारे।", transliteration:"Bhim roop dhari asur sanhare, Ramchandra ke kaj sanware", hindiMeaning:"भीम रूप धर असुरों का संहार किया, राम के कार्य सँवारे।", englishMeaning:"In mighty form destroyed demons, accomplished Ram's tasks.", memoryConnection:"अंधेरे साये का घुलना = असुर निकंदन। प्रकाश से अंधकार नष्ट।", chaupaiImage: img(10), anchorImage: anchorImg(10,"asur-nikandan"), symbol:"🌗" },
    ]
  },
  {
    id:3, hindiName:"राम भक्ति और यश", englishName:"Ram Bhakti Aur Yash", devanagariTitle:"बगीचा ३ — राम भक्ति",
    chaupaiRange:"Chaupai 11-15", bhav:"भक्ति और प्रेम", theme:"Devotion to Ram and His glory",
    description:"Service, bringing Sanjivani, and being embraced by Ram.",
    color:"#D4AF7A", anchors:[
      { number:11, label:"Ram Kaju", shortKey:"ram-kaju", chaupaiHindi:"लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये।", transliteration:"Laye sanjivan Lakhan jiyaye, Shri Raghubir harashi ur laye", hindiMeaning:"संजीवनी लाकर लक्ष्मण को जिलाया, रघुवीर ने हर्षित हो हृदय से लगाया।", englishMeaning:"Brought Sanjivani to revive Lakshman, Ram embraced with joy.", memoryConnection:"जुड़े हाथ सेवा में = राम काज। सेवा भाव।", chaupaiImage: img(11), anchorImage: anchorImg(11,"ram-kaju"), symbol:"🙏" },
      { number:12, label:"Lakshman Jiyaye", shortKey:"lakshman-jiyaye", chaupaiHindi:"रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई।", transliteration:"Raghupati kinhi bahut badai, Tum mam priya Bharatahi sam bhai", hindiMeaning:"रघुपति ने बहुत बड़ाई की - तुम मुझे भरत जैसे प्रिय हो।", englishMeaning:"Ram praised greatly - you are dear to me like Bharat.", memoryConnection:"जड़ी-बूटी वाला पर्वत = लक्ष्मण को जीवन। संजीवनी।", chaupaiImage: img(12), anchorImage: anchorImg(12,"lakshman-jiyaye"), symbol:"🌿⛰️" },
      { number:13, label:"Raghuvar Harshi", shortKey:"raghuvar-harshi", chaupaiHindi:"सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं।", transliteration:"Sahas badan tumharo jas gavain, Asa kahi Shripati kanth lagavain", hindiMeaning:"हजार मुखों से तुम्हारा यश गाते हैं, कहकर श्रीपति ने कंठ से लगाया।", englishMeaning:"Thousand mouths sing your glory, saying this Ram embraced you.", memoryConnection:"प्रेम की माला = हर्ष। गले लगना।", chaupaiImage: img(13), anchorImage: anchorImg(13,"raghuvar-harshi"), symbol:"💐" },
      { number:14, label:"Raghupati Kinhi", shortKey:"raghupati-kinhi", chaupaiHindi:"सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा।", transliteration:"Sanakadik Brahmadi munisa, Narad Sarad sahit Ahisa", hindiMeaning:"सनकादि, ब्रह्मा आदि मुनि, नारद, सरस्वती, शेषनाग यश गाते हैं।", englishMeaning:"Sanak sages, Brahma, Narada, Saraswati, Shesha sing your fame.", memoryConnection:"प्रशंसा का मुकुट = बड़ाई। राम द्वारा सम्मान।", chaupaiImage: img(14), anchorImage: anchorImg(14,"raghupati-kinhi"), symbol:"👑" },
      { number:15, label:"Tum Mam Priya", shortKey:"tum-mam-priya", chaupaiHindi:"जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते।", transliteration:"Yam Kuber Digpal jahan te, Kabi kobid kahi sake kahan te", hindiMeaning:"यम, कुबेर, दिक्पाल जहाँ से, कवि-कोविद कितना कह पाएँ।", englishMeaning:"Yam, Kuber, guardians - how much can poets describe.", memoryConnection:"राम चरणों में फूल = प्रिय भरत सम। सबसे प्रिय।", chaupaiImage: img(15), anchorImage: anchorImg(15,"tum-mam-priya"), symbol:"🦶🌸" },
    ]
  },
  {
    id:4, hindiName:"सेवा और सामर्थ्य", englishName:"Seva Aur Samarthya", devanagariTitle:"बगीचा ४ — सेवा सामर्थ्य",
    chaupaiRange:"Chaupai 16-20", bhav:"उत्साह और समर्पण", theme:"Service and cosmic capability",
    description:"The thousand-faced praise and Hanuman's help to Sugriva, guarding Ram's door.",
    color:"#0B6E4F", anchors:[
      { number:16, label:"Sahas Vadan", shortKey:"sahas-vadan", chaupaiHindi:"तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा।", transliteration:"Tum upkar Sugrivahin kinha, Ram milay raj pad dinha", hindiMeaning:"आपने सुग्रीव पर उपकार किया, राम से मिलाकर राजपद दिलाया।", englishMeaning:"You helped Sugriva, introduced to Ram, gave kingdom.", memoryConnection:"हजार फन वाला शेष = सहस वदन यश गायन।", chaupaiImage: img(16), anchorImage: anchorImg(16,"sahas-vadan"), symbol:"🐍" },
      { number:17, label:"Sanakadik", shortKey:"sanakadik", chaupaiHindi:"तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना।", transliteration:"Tumharo mantra Bibhishan mana, Lankeshwar bhae sab jag jana", hindiMeaning:"विभीषण ने आपका मंत्र माना, लंकेश्वर बने, सब जग ने जाना।", englishMeaning:"Vibhishan followed your counsel, became king of Lanka.", memoryConnection:"चार छोटे ऋषि = सनकादिक। बाल ऋषि।", chaupaiImage: img(17), anchorImage: anchorImg(17,"sanakadik"), symbol:"🧘🧘" },
      { number:18, label:"Yam Kuber", shortKey:"yam-kuber", chaupaiHindi:"जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू।", transliteration:"Yug sahastra jojan par bhanu, Leelyo tahi madhur phal janu", hindiMeaning:"हजारों योजन दूर सूर्य को मीठा फल जान लील लिया।", englishMeaning:"Swallowed sun thousands of miles away thinking sweet fruit.", memoryConnection:"सिंहासन झुके = यम कुबेर दिक्पाल वंदन।", chaupaiImage: img(18), anchorImage: anchorImg(18,"yam-kuber"), symbol:"👑🙇" },
      { number:19, label:"Kavi Kovid", shortKey:"kavi-kovid", chaupaiHindi:"प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं।", transliteration:"Prabhu mudrika meli mukh mahi, Jaladhi langhi gaye acharaj nahi", hindiMeaning:"प्रभु की मुद्रिका मुख में रख सागर लाँघ गए, अचरज नहीं।", englishMeaning:"With Ram's ring in mouth, crossing ocean is no wonder.", memoryConnection:"कलम + ग्रंथ = कवि कोविद। विद्वानों का लेखन।", chaupaiImage: img(19), anchorImage: anchorImg(19,"kavi-kovid"), symbol:"🪶📜" },
      { number:20, label:"Tum Upkar", shortKey:"tum-upkar", chaupaiHindi:"दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते।", transliteration:"Durgam kaj jagat ke jete, Sugam anugrah tumhare tete", hindiMeaning:"जगत के जितने दुर्गम कार्य हैं, आपके अनुग्रह से सुगम होते हैं।", englishMeaning:"All difficult tasks of world become easy by your grace.", memoryConnection:"सहायता का हाथ = उपकार। सुग्रीव को हाथ बढ़ाना।", chaupaiImage: img(20), anchorImage: anchorImg(20,"tum-upkar"), symbol:"🤝" },
    ]
  },
  {
    id:5, hindiName:"रक्षा और सुख", englishName:"Raksha Aur Sukh", devanagariTitle:"बगीचा ५ — रक्षा सुख",
    chaupaiRange:"Chaupai 21-25", bhav:"निश्चिंतता और शांति", theme:"Protection and happiness",
    description:"The guardian at Ram's door who grants all happiness.",
    color:"#2B2117", anchors:[
      { number:21, label:"Ram Dware", shortKey:"ram-dware", chaupaiHindi:"राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।", transliteration:"Ram duare tum rakhware, Hot na aagya binu paisare", hindiMeaning:"राम द्वार के आप रखवाले हैं, आपकी आज्ञा बिना प्रवेश नहीं।", englishMeaning:"You are guardian at Ram's door, none enters without permission.", memoryConnection:"सुनहरा द्वार = राम द्वार। द्वारपाल हनुमान।", chaupaiImage: img(21), anchorImage: anchorImg(21,"ram-dware"), symbol:"🚪✨" },
      { number:22, label:"Sab Sukh Lahai", shortKey:"sab-sukh", chaupaiHindi:"सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना।", transliteration:"Sab sukh lahai tumhari sarna, Tum rachchhak kahu ko dar na", hindiMeaning:"आपकी शरण में सब सुख मिलते हैं, आप रक्षक हैं तो डर नहीं।", englishMeaning:"All happiness in your refuge, with you as protector no fear.", memoryConnection:"खुशहाल घर में प्रकाश = सब सुख। परिवार सुखी।", chaupaiImage: img(22), anchorImage: anchorImg(22,"sab-sukh"), symbol:"🏠💛" },
      { number:23, label:"Aapan Tej", shortKey:"aapan-tej", chaupaiHindi:"आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै।", transliteration:"Aapan tej samharo aapai, Teeno lok hank te kanpai", hindiMeaning:"अपना तेज आप ही संभालते हैं, तीनों लोक आपकी हाँक से काँपते हैं।", englishMeaning:"You alone can control your radiance, three worlds tremble at your roar.", memoryConnection:"चमकता सूर्य = तेज। अपनी चमक संभालना।", chaupaiImage: img(23), anchorImage: anchorImg(23,"aapan-tej"), symbol:"☀️" },
      { number:24, label:"Bhoot Pisaach", shortKey:"bhoot-pisaach", chaupaiHindi:"भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै।", transliteration:"Bhoot pisach nikat nahin aavai, Mahabir jab naam sunavai", hindiMeaning:"भूत पिशाच निकट नहीं आते जब महावीर नाम सुनाते हैं।", englishMeaning:"Ghosts and spirits come not near when great hero's name is heard.", memoryConnection:"भूत प्रकाश से भागे = महावीर नाम का प्रताप। बच्चा सुरक्षित।", chaupaiImage: img(24), anchorImage: anchorImg(24,"bhoot-pisaach"), symbol:"👻💨" },
      { number:25, label:"Nase Rog", shortKey:"nase-rog", chaupaiHindi:"नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा।", transliteration:"Nasai rog harai sab peera, Japat nirantar Hanumat beera", hindiMeaning:"रोग नष्ट, पीड़ा हर लेते हैं निरंतर हनुमत जप से।", englishMeaning:"Diseases destroyed, all pain removed by constant chanting of Hanuman.", memoryConnection:"टूटी बीमारी की जंजीर = रोग नाश। औषधि।", chaupaiImage: img(25), anchorImage: anchorImg(25,"nase-rog"), symbol:"🌿💚" },
    ]
  },
  {
    id:6, hindiName:"संकट मोचन", englishName:"Sankat Mochan", devanagariTitle:"बगीचा ६ — संकट मोचन",
    chaupaiRange:"Chaupai 26-30", bhav:"विश्वास और अभय", theme:"Remover of crises",
    description:"The immediate rescuer in Sankat.",
    color:"#8A7352", anchors:[
      { number:26, label:"Sankat Te Hanuman", shortKey:"sankat-te", chaupaiHindi:"संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै।", transliteration:"Sankat te Hanuman chhudavai, Man kram bachan dhyan jo lavai", hindiMeaning:"संकट से हनुमान छुड़ाते हैं जो मन-क्रम-वचन से ध्यान लगाते हैं।", englishMeaning:"Hanuman releases from crisis those who meditate with mind, deed, word.", memoryConnection:"बचाव की रस्सी = संकट से छुड़ाना।", chaupaiImage: img(26), anchorImage: anchorImg(26,"sankat-te"), symbol:"🪢" },
      { number:27, label:"Sar Par Ram", shortKey:"sar-par-ram", chaupaiHindi:"सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा।", transliteration:"Sab par Ram tapasvi raja, Tin ke kaj sakal tum saja", hindiMeaning:"सब पर राम तपस्वी राजा हैं, उनके सब कार्य आप साजते हैं।", englishMeaning:"Ram the ascetic king over all, you accomplish all His tasks.", memoryConnection:"मुकुट पर राम = सिर पर राम राजा।", chaupaiImage: img(27), anchorImage: anchorImg(27,"sar-par-ram"), symbol:"👑✨" },
      { number:28, label:"Sankat Kate", shortKey:"sankat-kate", chaupaiHindi:"और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै।", transliteration:"Aur manorath jo koi lavai, Soi amit jeevan phal pavai", hindiMeaning:"और जो भी मनोरथ लाते हैं, अमित जीवन फल पाते हैं।", englishMeaning:"Whatever desire one brings, obtains abundant fruit of life.", memoryConnection:"टूटी जंजीर = संकट कटे। बंधन मुक्त।", chaupaiImage: img(28), anchorImage: anchorImg(28,"sankat-kate"), symbol:"⛓️‍💥" },
      { number:29, label:"Sab Par Ram", shortKey:"sab-par-ram", chaupaiHindi:"चारो जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा।", transliteration:"Charo jug partap tumhara, Hai parsiddh jagat ujiyara", hindiMeaning:"चारों युगों में आपका प्रताप है, जगत में उजियारा प्रसिद्ध है।", englishMeaning:"Your glory in four yugas, famous as light of world.", memoryConnection:"धनुष + राज्य चिन्ह = सब पर राम तपस्वी राजा।", chaupaiImage: img(29), anchorImage: anchorImg(29,"sab-par-ram"), symbol:"🏹" },
      { number:30, label:"Ram Milaye", shortKey:"ram-milaye", chaupaiHindi:"साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे।", transliteration:"Sadhu sant ke tum rakhware, Asur nikandan Ram dulare", hindiMeaning:"साधु संत के रक्षक, असुर निकंदन, राम के दुलारे।", englishMeaning:"Guardian of saints, destroyer of demons, beloved of Ram.", memoryConnection:"राम तक प्रकाश पथ = राम मिलाए। पुल।", chaupaiImage: img(30), anchorImage: anchorImg(30,"ram-milaye"), symbol:"🌉" },
    ]
  },
  {
    id:7, hindiName:"सिद्धि और भक्ति", englishName:"Siddhi Aur Bhakti", devanagariTitle:"बगीचा ७ — सिद्धि भक्ति",
    chaupaiRange:"Chaupai 31-35", bhav:"कृतज्ञता और अभिलाषा", theme:"Attainment and devotion",
    description:"Eight siddhis, Ram rasayan, and eternal service.",
    color:"#0B6E4F", youtubeUrl:"https://youtu.be/THAKyUyTODY", anchors:[
      { number:31, label:"Astha Siddhi", shortKey:"astha-siddhi", chaupaiHindi:"अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता।", transliteration:"Ashta siddhi nau nidhi ke data, Asa bar deen Janaki mata", hindiMeaning:"आठ सिद्धि नौ निधि के दाता, ऐसा वर जानकी माता ने दिया।", englishMeaning:"Giver of eight siddhis nine nidhis, such boon Mother Janaki gave.", memoryConnection:"आठ चमकते रत्न = अष्ट सिद्धि। घेरा।", chaupaiImage: img(31), anchorImage: anchorImg(31,"astha-siddhi"), symbol:"💎" },
      { number:32, label:"Ram Rasayan", shortKey:"ram-rasayan", chaupaiHindi:"राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा।", transliteration:"Ram rasyan tumhare pasa, Sada raho Raghupati ke dasa", hindiMeaning:"राम रसायन आपके पास है, सदा रघुपति के दास रहो।", englishMeaning:"Ram's essence with you, forever remain Raghupati's servant.", memoryConnection:"अमृत कलश = राम रसायन। नाम अमृत।", chaupaiImage: img(32), anchorImage: anchorImg(32,"ram-rasayan"), symbol:"🏺" },
      { number:33, label:"Tumhare Pas", shortKey:"tumhare-pas", chaupaiHindi:"तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै।", transliteration:"Tumhare bhajan Ram ko pavai, Janam janam ke dukh bisaravai", hindiMeaning:"आपके भजन से राम को पाते हैं, जन्मों के दुख भूल जाते हैं।", englishMeaning:"By your devotion one attains Ram, forgets sorrows of births.", memoryConnection:"हथेली में तीन लोक = तुम्हरे पास। सब कुछ हाथ में।", chaupaiImage: img(33), anchorImage: anchorImg(33,"tumhare-pas"), symbol:"🤲🌍" },
      { number:34, label:"Sada Raho", shortKey:"sada-raho", chaupaiHindi:"अंत काल रघुबर पुर जाई। जहाँ जन्म हरि भक्त कहाई।", transliteration:"Ant kaal Raghubar pur jai, Jahan janma Hari bhakt kahai", hindiMeaning:"अंत काल में रघुबर पुर जाते हैं जहाँ जन्म लेकर हरि भक्त कहलाते हैं।", englishMeaning:"At end go to Raghuvar's abode, where born again as Hari's devotee.", memoryConnection:"मंदिर का द्वारपाल दंड = सदा रहो रघुपति के दासा।", chaupaiImage: img(34), anchorImage: anchorImg(34,"sada-raho"), symbol:"🪔" },
      { number:35, label:"Tumhare Bhajan", shortKey:"tumhare-bhajan", chaupaiHindi:"और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई।", transliteration:"Aur devta chitt na dharai, Hanumat sei sarba sukh karai", hindiMeaning:"और देवता चित्त में न धरे, हनुमत सेवे, सर्व सुख करे।", englishMeaning:"Hold no other deity in mind, serve Hanuman, get all happiness.", memoryConnection:"ढोलक + गाता मुख = तुम्हरे भजन। भजन मंडली।", chaupaiImage: img(35), anchorImage: anchorImg(35,"tumhare-bhajan"), symbol:"🥁🎤" },
    ]
  },
  {
    id:8, hindiName:"फल और आशीर्वाद", englishName:"Phal Aur Ashirwad", devanagariTitle:"बगीचा ८ — फल आशीर्वाद",
    chaupaiRange:"Chaupai 36-40", bhav:"संतोष और समर्पण", theme:"Fruit and blessing - completion",
    description:"Final blessings, Tulsidas's devotion, and Pavan Putra's eternal Jai.",
    color:"#D4AF7A", youtubeUrl:"https://youtu.be/CCdWzT5AWZs?si=skVzWfI729LtSdsr", anchors:[
      { number:36, label:"Ant Kaal", shortKey:"ant-kaal", chaupaiHindi:"संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा।", transliteration:"Sankat katai mitai sab peera, Jo sumirai Hanumat balbeera", hindiMeaning:"संकट कटते, पीड़ा मिटती जो हनुमत बलबीर को सुमिरते हैं।", englishMeaning:"Crises cut, pain erased for those who remember mighty Hanuman.", memoryConnection:"संध्या दीया = अंत काल। अंतिम समय में प्रकाश।", chaupaiImage: img(36), anchorImage: anchorImg(36,"ant-kaal"), symbol:"🕯️" },
      { number:37, label:"Aur Devta Chitt", shortKey:"aur-devta", chaupaiHindi:"जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं।", transliteration:"Jai Jai Jai Hanuman Gosain, Kripa karahu Gurudev ki nai", hindiMeaning:"जय जय जय हनुमान गोसाईं, कृपा करो गुरुदेव की नाईं।", englishMeaning:"Victory victory to Hanuman Lord, shower grace like Guru.", memoryConnection:"एक बिंदु पर ध्यान = और देवता चित्त न धरई। एकाग्र।", chaupaiImage: img(37), anchorImage: anchorImg(37,"aur-devta"), symbol:"🎯" },
      { number:38, label:"Sankat Harai", shortKey:"sankat-harai", chaupaiHindi:"जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई।", transliteration:"Jo sat bar path kar koi, Chhutahi bandi maha sukh hoi", hindiMeaning:"जो सौ बार पाठ करे, बंधन से छूट महा सुख पावे।", englishMeaning:"Who recites hundred times, freed from bondage, great joy.", memoryConnection:"हाथ उठा रहा = संकट हरे। सागर से निकालना।", chaupaiImage: img(38), anchorImage: anchorImg(38,"sankat-harai"), symbol:"🙌" },
      { number:39, label:"Tulsi Das Sada", shortKey:"tulsi-das", chaupaiHindi:"जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा।", transliteration:"Jo yah padhai Hanuman Chalisa, Hoi siddhi sakhi Gaurisa", hindiMeaning:"जो यह हनुमान चालीसा पढ़े, सिद्धि हो, साक्षी गौरीश हैं।", englishMeaning:"Who reads Hanuman Chalisa, attains siddhi, Shiva witness.", memoryConnection:"तुलसी की कलम = तुलसीदास सदा हरि चेरा। लेखनी।", chaupaiImage: img(39), anchorImage: anchorImg(39,"tulsi-das"), symbol:"🪶" },
      { number:40, label:"Pavan Tanay", shortKey:"pavan-tanay", chaupaiHindi:"तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा।", transliteration:"Tulsidas sada Hari chera, Keejai Nath hridaya mah dera", hindiMeaning:"तुलसीदास सदा हरि के सेवक, हे नाथ हृदय में डेरा कीजै।", englishMeaning:"Tulsidas always servant of Hari, O Lord reside in heart.", memoryConnection:"पवन में पदचिह्न = पवन तनय। आकाश में उड़ान।", chaupaiImage: img(40), anchorImage: anchorImg(40,"pavan-tanay"), symbol:"🌬️👣" },
    ]
  },
]

export const JOURNEY_MANTRA = [
  { hi:"देखो", en:"Dekho", desc:"Observe the image" },
  { hi:"भाव समझो", en:"Bhav Samjho", desc:"Feel the meaning" },
  { hi:"Anchor याद रखो", en:"Anchor Yaad Rakho", desc:"Hold the symbol" },
  { hi:"दृश्य बनाओ", en:"Drishya Banao", desc:"Visualize the scene" },
  { hi:"चौपाई याद करो", en:"Chaupai Yaad Karo", desc:"Recall the verse" },
]
