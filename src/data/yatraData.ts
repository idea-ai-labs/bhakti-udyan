
// Bhakti Udyan - Yatra Data - EXACT MASTER LIST - FINAL
// Authoritative 40 Anchors from user - DO NOT CHANGE SPELLING

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
    id:1, hindiName:"ज्ञान और बल", englishName:"Gyan aur Bal", devanagariTitle:"बगीचा १ — ज्ञान और बल",
    chaupaiRange:"Chaupai 1-5", bhav:"श्रद्धा और आदर", theme:"Gyan Aur Bal - Hanuman swaroop ka parichay",
    description:"Is set main hum samjhenge pehli 5 chaupaiyon ko. Tulsidas ji Hanuman ji ke swaroop ka parichay dete hain.",
    color:"#0B6E4F", anchors:[
      { number:1, label:"Gyan Sagar Tihu Lok", shortKey:"gyan-sagar-tihu-lok", chaupaiHindi:"जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर।", transliteration:"Jai Hanuman gyan gun sagar, Jai Kapis tihu lok ujagar", hindiMeaning:"हे हनुमान जी, आप ज्ञान और गुणों के सागर हैं, तीनों लोकों में आपकी जय है।", englishMeaning:"Ocean of wisdom, illuminator of three worlds.", memoryConnection:"समुद्र + तीन लोक = ज्ञान का सागर तिहुँ लोक उजागर। विशालता देखो, ज्ञान याद करो।", chaupaiImage:img(1), anchorImage:anchorImg(1), symbol:"🌊" },
      { number:2, label:"Ramdoot Pavan Putra", shortKey:"ramdoot-pavan-putra", chaupaiHindi:"राम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा।", transliteration:"Ram doot atulit bal dhama, Anjani-putra Pavan-sut nama", hindiMeaning:"जो राम के संदेशवाहक हैं, और पवन देव के पुत्र हैं।", englishMeaning:"Messenger of Ram, son of wind.", memoryConnection:"राम मुद्रिका अंगूठी + पवन का झोंका = Ramdoot Pavan Putra।", chaupaiImage:img(2), anchorImage:anchorImg(2), symbol:"💍🌬️" },
      { number:3, label:"Mahabir Sumati", shortKey:"mahabir-sumati", chaupaiHindi:"महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी।", transliteration:"Mahabir bikram Bajrangi, Kumati nivar sumati ke sangi", hindiMeaning:"महावीर हैं, जो कुमति को हटाकर अच्छी बुद्धि देते हैं।", englishMeaning:"Great hero who removes evil thoughts, gives good wisdom.", memoryConnection:"हृदय में राम-सीता + साफ मन = महाबीर सुमति।", chaupaiImage:img(3), anchorImage:anchorImg(3), symbol:"❤️" },
      { number:4, label:"Kanchan Kundal", shortKey:"kanchan-kundal", chaupaiHindi:"कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा।", transliteration:"Kanchan baran biraj subesa, Kanan kundal kunchit kesa", hindiMeaning:"जिनके कानों में सोने के कुंडल चमक रहे हैं।", englishMeaning:"Golden-hued, earrings shining.", memoryConnection:"कान में सोने का कुंडल = कंचन कुंडल। चमक देखो।", chaupaiImage:img(4), anchorImage:anchorImg(4), symbol:"✨" },
      { number:5, label:"Vajra Janeu", shortKey:"vajra-janeu", chaupaiHindi:"हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै।", transliteration:"Hath bajra au dhwaja birajai, Kandhe munj janeu sajai", hindiMeaning:"कंधे पर वज्र जैसा जनेऊ शोभा दे रहा है।", englishMeaning:"Sacred thread like thunderbolt on shoulder.", memoryConnection:"कंधे पर चमकता जनेऊ = वज्र जनेऊ।", chaupaiImage:img(5), anchorImage:anchorImg(5), symbol:"🧵" },
    ]
  },
  {
    id:2, hindiName:"दिव्य स्वरूप और लीला", englishName:"Divya Swaroop aur Leela", devanagariTitle:"बगीचा २ — दिव्य स्वरूप और लीला",
    chaupaiRange:"Chaupai 6-10", bhav:"विस्मय और सौंदर्य", theme:"Divya Swaroop Aur Leela - divya roop aur parakram",
    description:"In chaupaiyon main Hanuman ji ke divya roop aur parakram ki leela ka varnan hai.",
    color:"#5A4A38", anchors:[
      { number:6, label:"Shankar Suvan", shortKey:"shankar-suvan", chaupaiHindi:"संकर सुवन केसरी नंदन। तेज प्रताप महा जग बन्दन।", transliteration:"Sankar suvan Kesari Nandan, Tej pratap maha jag bandan", hindiMeaning:"जो शिव जी के अंश अवतार हैं, केसरी के पुत्र हैं।", englishMeaning:"Incarnation of Shiva, son of Kesari.", memoryConnection:"शिव त्रिशूल + केसरी = शंकर सुवन।", chaupaiImage:img(6), anchorImage:anchorImg(6), symbol:"🔱" },
      { number:7, label:"Vidyavan Chatur", shortKey:"vidyavan-chatur", chaupaiHindi:"बिद्यावान गुनी अति चातुर। राम काज करिबे को आतुर।", transliteration:"Vidyavan guni ati chatur, Ram kaj karibe ko aatur", hindiMeaning:"जो विद्या से भरे हुए और बहुत चतुर हैं।", englishMeaning:"Learned, virtuous, extremely clever.", memoryConnection:"ग्रंथ + चतुर मुस्कान = विद्यावान चतुर।", chaupaiImage:img(7), anchorImage:anchorImg(7), symbol:"📚" },
      { number:8, label:"Prabhu Charitra", shortKey:"prabhu-charitra", chaupaiHindi:"प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया।", transliteration:"Prabhu charitra sunibe ko rasiya, Ram Lakhan Sita man basiya", hindiMeaning:"जो हमेशा राम के चरित्र को सुनने में मगन रहते हैं।", englishMeaning:"Delights in hearing Ram's story.", memoryConnection:"कानों में राम कथा = प्रभु चरित्र रसिया।", chaupaiImage:img(8), anchorImage:anchorImg(8), symbol:"👂" },
      { number:9, label:"Sukshm Bikat Roop", shortKey:"sukshm-bikat-roop", chaupaiHindi:"सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा।", transliteration:"Sukshm roop dhari Siyahin dikhava, Bikat roop dhari Lanka jarava", hindiMeaning:"छोटा रूप लेकर सीता जी के पास गए, विकट रूप लेकर लंका जलाई।", englishMeaning:"Tiny form to Sita, colossal to burn Lanka.", memoryConnection:"छोटा + विशाल दो रूप = सूक्ष्म बिकट रूप।", chaupaiImage:img(9), anchorImage:anchorImg(9), symbol:"🔍🔥" },
      { number:10, label:"Bhim Roop Sanhare", shortKey:"bhim-roop-sanhare", chaupaiHindi:"भीम रूप धरि असुर सँहारे। रामचन्द्र के काज सँवारे।", transliteration:"Bhim roop dhari asur sanhare, Ramchandra ke kaj sanware", hindiMeaning:"भयानक रूप धारण करके राक्षसों का संहार किया।", englishMeaning:"Mighty form destroyed demons.", memoryConnection:"विशाल पैर + बिखरते साये = भीम रूप संहारे।", chaupaiImage:img(10), anchorImage:anchorImg(10), symbol:"👣" },
    ]
  },
  {
    id:3, hindiName:"राम भक्ति और यश", englishName:"Ram Bhakti aur Yash", devanagariTitle:"बगीचा ३ — राम भक्ति और यश",
    chaupaiRange:"Chaupai 11-15", bhav:"भक्ति और प्रेम", theme:"Ram Bhakti Aur Yash - Ram karya kaise kiya",
    description:"Ye chaupaiyan batati hain ki Hanuman ji ne Ram karya kaise kiya.",
    color:"#D4AF7A", anchors:[
      { number:11, label:"Laye Sanjivan", shortKey:"laye-sanjivan", chaupaiHindi:"लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये।", transliteration:"Laye sanjivan Lakhan jiyaye, Shri Raghubir harashi ur laye", hindiMeaning:"लक्ष्मण जी के लिए संजीवनी बूटी ले आए।", englishMeaning:"Brought Sanjivani to revive Lakshman.", memoryConnection:"पहाड़ पर जड़ी-बूटी = लाए संजीवन।", chaupaiImage:img(11), anchorImage:anchorImg(11), symbol:"🌿⛰️" },
      { number:12, label:"Raghupati Badai", shortKey:"raghupati-badai", chaupaiHindi:"रघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई।", transliteration:"Raghupati kinhi bahut badai, Tum mam priya Bharatahi sam bhai", hindiMeaning:"जिनकी प्रशंसा खुद रघुपति राम ने की।", englishMeaning:"Praised by Ram Himself.", memoryConnection:"राम का माला पहनाना = रघुपति बड़ाई।", chaupaiImage:img(12), anchorImage:anchorImg(12), symbol:"💐" },
      { number:13, label:"Sahas Badan", shortKey:"sahas-badan", chaupaiHindi:"सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं।", transliteration:"Sahas badan tumharo jas gavain, Asa kahi Shripati kanth lagavain", hindiMeaning:"जिनका यश हजार मुख वाले शेषनाग भी गाते हैं।", englishMeaning:"Thousand mouths sing your glory.", memoryConnection:"हजार फन = सहस बदन यश गायन।", chaupaiImage:img(13), anchorImage:anchorImg(13), symbol:"🐍" },
      { number:14, label:"Sanakadik Munisa", shortKey:"sanakadik-munisa", chaupaiHindi:"सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा।", transliteration:"Sanakadik Brahmadi munisa, Narad Sarad sahit Ahisa", hindiMeaning:"जिनकी महिमा सनक, सनंदन जैसे ऋषि-मुनि गाते हैं।", englishMeaning:"Sanak sages sing your fame.", memoryConnection:"चार बाल ऋषि = सनकादिक मुनीसा।", chaupaiImage:img(14), anchorImage:anchorImg(14), symbol:"🧘" },
      { number:15, label:"Yam Kuber", shortKey:"yam-kuber", chaupaiHindi:"जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते।", transliteration:"Yam Kuber Digpal jahan te, Kabi kobid kahi sake kahan te", hindiMeaning:"जिनकी चर्चा यम, कुबेर और दिग्पाल तक करते हैं।", englishMeaning:"Yam, Kuber, guardians discuss you.", memoryConnection:"सिंहासन झुके = यम कुबेर दिग्पाल।", chaupaiImage:img(15), anchorImage:anchorImg(15), symbol:"👑" },
    ]
  },
  {
    id:4, hindiName:"सेवा और सामर्थ्य", englishName:"Seva aur Samarthya", devanagariTitle:"बगीचा ४ — सेवा और सामर्थ्य",
    chaupaiRange:"Chaupai 16-20", bhav:"उत्साह और समर्पण", theme:"Seva Aur Samarthya - seva aur shakti ka sangam",
    description:"Yahan Hanuman ji ki seva aur unki shakti ka sangam hai.",
    color:"#0B6E4F", anchors:[
      { number:16, label:"Tum Upkar", shortKey:"tum-upkar", chaupaiHindi:"तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा।", transliteration:"Tum upkar Sugrivahin kinha, Ram milay raj pad dinha", hindiMeaning:"आपने सुग्रीव पर उपकार किया, उन्हें राम से मिलाया।", englishMeaning:"You helped Sugriva meet Ram.", memoryConnection:"दो हाथ मिलना = तुम उपकार सुग्रीव।", chaupaiImage:img(16), anchorImage:anchorImg(16), symbol:"🤝" },
      { number:17, label:"Tumharo Mantra", shortKey:"tumharo-mantra", chaupaiHindi:"तुम्हरो मंत्र बिभीषन माना। लंकेस्वर भए सब जग जाना।", transliteration:"Tumharo mantra Bibhishan mana, Lankeshwar bhae sab jag jana", hindiMeaning:"आपके मंत्र से विभीषण राम की शरण में आए।", englishMeaning:"Vibhishan followed your counsel.", memoryConnection:"कान में मंत्र = तुम्हारो मंत्र।", chaupaiImage:img(17), anchorImage:anchorImg(17), symbol:"🗣️" },
      { number:18, label:"Yug Sahastra", shortKey:"yug-sahastra", chaupaiHindi:"जुग सहस्र जोजन पर भानू। लील्यो ताहि मधुर फल जानू।", transliteration:"Yug sahastra jojan par bhanu, Leelyo tahi madhur phal janu", hindiMeaning:"सूर्य को युग सहस्त्र योजन दूर से फल समझकर निगल गए।", englishMeaning:"Swallowed sun thinking sweet fruit.", memoryConnection:"सूरज + बच्चा = युग सहस्त्र फल।", chaupaiImage:img(18), anchorImage:anchorImg(18), symbol:"☀️🍎" },
      { number:19, label:"Prabhu Mudrika", shortKey:"prabhu-mudrika", chaupaiHindi:"प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं।", transliteration:"Prabhu mudrika meli mukh mahi, Jaladhi langhi gaye acharaj nahi", hindiMeaning:"राम की अंगूठी मुख में लेकर समुद्र लांघ गए।", englishMeaning:"With Ram's ring, crossed ocean.", memoryConnection:"मुख में अंगूठी = प्रभु मुद्रिका।", chaupaiImage:img(19), anchorImage:anchorImg(19), symbol:"💍" },
      { number:20, label:"Durgam Kaj", shortKey:"durgam-kaj", chaupaiHindi:"दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते।", transliteration:"Durgam kaj jagat ke jete, Sugam anugrah tumhare tete", hindiMeaning:"आपके लिए कोई भी कठिन काम सरल हो जाता है।", englishMeaning:"All difficult tasks become easy by your grace.", memoryConnection:"कठिन पहाड़ सरल रास्ता = दुर्गम काज सुगम।", chaupaiImage:img(20), anchorImage:anchorImg(20), symbol:"🛤️" },
    ]
  },
  {
    id:5, hindiName:"रक्षा और सुख", englishName:"Raksha aur Sukh", devanagariTitle:"बगीचा ५ — रक्षा और सुख",
    chaupaiRange:"Chaupai 21-25", bhav:"निश्चिंतता और शांति", theme:"Raksha Aur Sukh - raksha aur sukh kaise dete",
    description:"Ye chaupaiyan batati hain ki Hanuman ji kaise raksha aur sukh dete hain.",
    color:"#2B2117", anchors:[
      { number:21, label:"Ram Duare", shortKey:"ram-duare", chaupaiHindi:"राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे।", transliteration:"Ram duare tum rakhware, Hot na aagya binu paisare", hindiMeaning:"आप ही राम के द्वार के रक्षक हैं, आपके बिना दर्शन नहीं।", englishMeaning:"Guardian at Ram's door.", memoryConnection:"सुनहरा द्वार = राम दुआरे रखवारे।", chaupaiImage:img(21), anchorImage:anchorImg(21), symbol:"🚪" },
      { number:22, label:"Sab Sukh Lahai", shortKey:"sab-sukh-lahai", chaupaiHindi:"सब सुख लहै तुम्हारी सरना। तुम रच्छक काहू को डर ना।", transliteration:"Sab sukh lahai tumhari sarna, Tum rachchhak kahu ko dar na", hindiMeaning:"आपकी शरण में आने से सब सुख मिल जाता है।", englishMeaning:"All happiness in your refuge.", memoryConnection:"खुशहाल घर = सब सुख लहै।", chaupaiImage:img(22), anchorImage:anchorImg(22), symbol:"🏠💛" },
      { number:23, label:"Aapan Tej", shortKey:"aapan-tej", chaupaiHindi:"आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै।", transliteration:"Aapan tej samharo aapai, Teeno lok hank te kanpai", hindiMeaning:"आप अपने तेज से तीनों लोकों को कांप देते हैं।", englishMeaning:"Your radiance makes three worlds tremble.", memoryConnection:"चमकता सूर्य + गर्जना = आपन तेज।", chaupaiImage:img(23), anchorImage:anchorImg(23), symbol:"☀️" },
      { number:24, label:"Bhoot Pisaach", shortKey:"bhoot-pisaach", chaupaiHindi:"भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै।", transliteration:"Bhoot pisach nikat nahin aavai, Mahabir jab naam sunavai", hindiMeaning:"आपके नाम से भूत-पिशाच पास भी नहीं आते।", englishMeaning:"Ghosts flee hearing Mahavir name.", memoryConnection:"भूत प्रकाश से भागे = भूत पिशाच।", chaupaiImage:img(24), anchorImage:anchorImg(24), symbol:"👻" },
      { number:25, label:"Nase Rog", shortKey:"nase-rog", chaupaiHindi:"नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा।", transliteration:"Nasai rog harai sab peera, Japat nirantar Hanumat beera", hindiMeaning:"आपके नाम से सब रोग और पीड़ा नष्ट हो जाती है।", englishMeaning:"Diseases destroyed by chanting Hanuman.", memoryConnection:"टूटी बीमारी जंजीर = नासै रोग।", chaupaiImage:img(25), anchorImage:anchorImg(25), symbol:"💚" },
    ]
  },
  {
    id:6, hindiName:"संकट मोचन", englishName:"Sankat Mochan", devanagariTitle:"बगीचा ६ — संकट मोचन",
    chaupaiRange:"Chaupai 26-30", bhav:"विश्वास और अभय", theme:"Sankat Mochan - sabse lokpriya set",
    description:"Ye sabse lokpriya set hai, jahan Hanuman ji sankat harte hain.",
    color:"#8A7352", anchors:[
      { number:26, label:"Sankat Te", shortKey:"sankat-te", chaupaiHindi:"संकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै।", transliteration:"Sankat te Hanuman chhudavai, Man kram bachan dhyan jo lavai", hindiMeaning:"जो सब संकटों से हनुमान जी छुड़ाते हैं।", englishMeaning:"Releases from crisis.", memoryConnection:"बचाव रस्सी = संकट तें छुड़ावै।", chaupaiImage:img(26), anchorImage:anchorImg(26), symbol:"🪢" },
      { number:27, label:"Sab Par Ram", shortKey:"sab-par-ram", chaupaiHindi:"सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा।", transliteration:"Sab par Ram tapasvi raja, Tin ke kaj sakal tum saja", hindiMeaning:"जो सब पर राम जी की कृपा करवाते हैं।", englishMeaning:"Ram the ascetic king over all, you accomplish tasks.", memoryConnection:"मुकुट + तपस्वी = सब पर राम तपस्वी राजा।", chaupaiImage:img(27), anchorImage:anchorImg(27), symbol:"👑" },
      { number:28, label:"Aur Manorath", shortKey:"aur-manorath", chaupaiHindi:"और मनोरथ जो कोई लावै। सोइ अमित जीवन फल पावै।", transliteration:"Aur manorath jo koi lavai, Soi amit jeevan phal pavai", hindiMeaning:"जो भक्तों की हर मनोकामना पूरी करते हैं।", englishMeaning:"Fulfills all desires.", memoryConnection:"इच्छा दीया = और मनोरथ पूरा।", chaupaiImage:img(28), anchorImage:anchorImg(28), symbol:"🪔💭" },
      { number:29, label:"Charo Jug", shortKey:"charo-jug", chaupaiHindi:"चारो जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा।", transliteration:"Charo jug partap tumhara, Hai parsiddh jagat ujiyara", hindiMeaning:"आपका यश चारों युगों में फैला हुआ है।", englishMeaning:"Your glory in four yugas.", memoryConnection:"चार युग चक्र = चारो जुग परताप।", chaupaiImage:img(29), anchorImage:anchorImg(29), symbol:"♾️" },
      { number:30, label:"Sadhu Sant", shortKey:"sadhu-sant", chaupaiHindi:"साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे।", transliteration:"Sadhu sant ke tum rakhware, Asur nikandan Ram dulare", hindiMeaning:"आप साधु-संतों के रक्षक हैं, असुरों का नाश करते हैं।", englishMeaning:"Guardian of saints, destroyer of demons.", memoryConnection:"साधु टोली की रक्षा = साधु संत रखवारे।", chaupaiImage:img(30), anchorImage:anchorImg(30), symbol:"🧘‍♂️🛡️" },
    ]
  },
  {
    id:7, hindiName:"सिद्धि और भक्ति", englishName:"Siddhi aur Bhakti", devanagariTitle:"बगीचा ७ — सिद्धि और भक्ति",
    chaupaiRange:"Chaupai 31-35", bhav:"कृतज्ञता और अभिलाषा", theme:"Siddhi Aur Bhakti - siddhi, bhakti, mukti",
    description:"Yahan siddhi, bhakti aur mukti ki baat hai.",
    color:"#0B6E4F", youtubeUrl:"https://youtu.be/THAKyUyTODY", anchors:[
      { number:31, label:"Aasht Siddhi", shortKey:"aasht-siddhi", chaupaiHindi:"अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता।", transliteration:"Ashta siddhi nau nidhi ke data, Asa bar deen Janaki mata", hindiMeaning:"माता सीता ने आपको आठ सिद्धि और नौ निधि का वर दिया।", englishMeaning:"Giver of eight siddhis nine nidhis.", memoryConnection:"आठ चमकते रत्न = अष्ट सिद्धि।", chaupaiImage:img(31), anchorImage:anchorImg(31), symbol:"💎" },
      { number:32, label:"Ram Rasayan", shortKey:"ram-rasayan", chaupaiHindi:"राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा।", transliteration:"Ram rasyan tumhare pasa, Sada raho Raghupati ke dasa", hindiMeaning:"आपके पास राम नाम का रसायन है।", englishMeaning:"Ram's essence with you.", memoryConnection:"अमृत कलश = राम रसायन।", chaupaiImage:img(32), anchorImage:anchorImg(32), symbol:"🏺" },
      { number:33, label:"Tumhare Bhajan", shortKey:"tumhare-bhajan", chaupaiHindi:"तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै।", transliteration:"Tumhare bhajan Ram ko pavai, Janam janam ke dukh bisaravai", hindiMeaning:"आपके भजन से राम जी मिलते हैं, जन्मों के दुख दूर।", englishMeaning:"By your devotion attains Ram.", memoryConnection:"ढोलक + गाना = तुम्हरे भजन।", chaupaiImage:img(33), anchorImage:anchorImg(33), symbol:"🥁" },
      { number:34, label:"Ant Kaal", shortKey:"ant-kaal", chaupaiHindi:"अंत काल रघुबर पुर जाई। जहाँ जन्म हरि भक्त कहाई।", transliteration:"Ant kaal Raghubar pur jai, Jahan janma Hari bhakt kahai", hindiMeaning:"अंत समय में भक्त राम के धाम को जाता है।", englishMeaning:"At end goes to Ram's abode.", memoryConnection:"संध्या दीया = अंत काल रघुबर पुर।", chaupaiImage:img(34), anchorImage:anchorImg(34), symbol:"🕯️" },
      { number:35, label:"Aur Devta", shortKey:"aur-devta", chaupaiHindi:"और देवता चित्त न धरई। हनुमत सेइ सर्ब सुख करई।", transliteration:"Aur devta chitt na dharai, Hanumat sei sarba sukh karai", hindiMeaning:"आपको छोड़कर कोई और देवता ध्यान में नहीं रहता, हर सुख मिलता है।", englishMeaning:"No other deity in mind, serve Hanuman.", memoryConnection:"एक बिंदु ध्यान = और देवता चित्त न धरई।", chaupaiImage:img(35), anchorImage:anchorImg(35), symbol:"🎯" },
    ]
  },
  {
    id:8, hindiName:"फल और आशीर्वाद", englishName:"Phal aur Ashirwad", devanagariTitle:"बगीचा ८ — फल और आशीर्वाद",
    chaupaiRange:"Chaupai 36-40", bhav:"संतोष और समर्पण", theme:"Phal Aur Ashirwad - Chalisa padhne ka phal",
    description:"Antim set main Chalisa padhne ka phal bataya gaya hai.",
    color:"#D4AF7A", youtubeUrl:"https://youtu.be/CCdWzT5AWZs?si=skVzWfI729LtSdsr", anchors:[
      { number:36, label:"Sankat Katai", shortKey:"sankat-katai", chaupaiHindi:"संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा।", transliteration:"Sankat katai mitai sab peera, Jo sumirai Hanumat balbeera", hindiMeaning:"आप हर संकट को हर लेते हैं, जो आपका ध्यान करता है।", englishMeaning:"Crises cut, pain erased for who remembers.", memoryConnection:"टूटी जंजीर = संकट कटै।", chaupaiImage:img(36), anchorImage:anchorImg(36), symbol:"⛓️‍💥" },
      { number:37, label:"Jai Jai Jai", shortKey:"jai-jai-jai", chaupaiHindi:"जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं।", transliteration:"Jai Jai Jai Hanuman Gosain, Kripa karahu Gurudev ki nai", hindiMeaning:"सब देवता जय जयकार करते हुए आपका यश गाते हैं।", englishMeaning:"Victory victory to Hanuman Lord.", memoryConnection:"तीन बार जय = जै जै जै हनुमान।", chaupaiImage:img(37), anchorImage:anchorImg(37), symbol:"🙌" },
      { number:38, label:"Jo Sat Bar", shortKey:"jo-sat-bar", chaupaiHindi:"जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई।", transliteration:"Jo sat bar path kar koi, Chhutahi bandi maha sukh hoi", hindiMeaning:"जो सौ बार इस चालीसा का पाठ करता है, उसके बंधन छूट जाते हैं।", englishMeaning:"Who recites hundred times, freed from bondage.", memoryConnection:"सौ का अंक + खुला ताला = जो सत बार।", chaupaiImage:img(38), anchorImage:anchorImg(38), symbol:"🔓" },
      { number:39, label:"Jo Yah Padhe", shortKey:"jo-yah-padhe", chaupaiHindi:"जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा।", transliteration:"Jo yah padhai Hanuman Chalisa, Hoi siddhi sakhi Gaurisa", hindiMeaning:"जो इस चालीसा को पढ़ता है, उसे सिद्धि मिलती है, गौरी-शंकर साक्षी।", englishMeaning:"Who reads Chalisa attains siddhi, Shiva witness.", memoryConnection:"खुली किताब + शिव = जो यह पढ़े।", chaupaiImage:img(39), anchorImage:anchorImg(39), symbol:"📖" },
      { number:40, label:"Tulsidas", shortKey:"tulsidas", chaupaiHindi:"तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा।", transliteration:"Tulsidas sada Hari chera, Keejai Nath hridaya mah dera", hindiMeaning:"तुलसीदास कहते हैं, हनुमान जी सदा हृदय में वास करें।", englishMeaning:"Tulsidas always servant, reside in heart.", memoryConnection:"तुलसी की कलम = तुलसीदास हृदय डेरा।", chaupaiImage:img(40), anchorImage:anchorImg(40), symbol:"🪶" },
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
