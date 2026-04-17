import type { Quiz } from "./types";

export const staticQuizData: Record<string, Quiz> = {
  "tunisian-football": [
    {
      question_en:
        "Which Tunisian club has won the most Tunisian Ligue Professionnelle 1 titles?",
      options_en: [
        "Espérance de Tunis",
        "Club Africain",
        "Étoile du Sahel",
        "CS Sfaxien",
      ],
      correct_answer_index: 0,
      question_ar: "أي نادٍ تونسي فاز بأكبر عدد من ألقاب الرابطة المحترفة الأولى؟",
      options_ar: [
        "الترجي الرياضي التونسي",
        "النادي الإفريقي",
        "النجم الساحلي",
        "النادي الصفاقسي",
      ],
      question_fr:
        "Quel club tunisien a remporté le plus de titres de la Ligue Professionnelle 1 tunisienne ?",
      options_fr: [
        "Espérance de Tunis",
        "Club Africain",
        "Étoile du Sahel",
        "CS Sfaxien",
      ],
    },
    {
      question_en:
        "In which year did the Tunisian national team first qualify for the FIFA World Cup?",
      options_en: ["1978", "1998", "2002", "1982"],
      correct_answer_index: 0,
      question_ar: "في أي عام تأهل المنتخب التونسي لأول مرة لكأس العالم لكرة القدم؟",
      options_ar: ["1978", "1998", "2002", "1982"],
      question_fr:
        "En quelle année l'équipe nationale tunisienne s'est-elle qualifiée pour la première fois à la Coupe du Monde de la FIFA ?",
      options_fr: ["1978", "1998", "2002", "1982"],
    },
    {
      question_en: "Who is the all-time top scorer for the Tunisian national team?",
      options_en: ["Issam Jemâa", "Wahbi Khazri", "Youssef Msakni", "Francileudo Santos"],
      correct_answer_index: 0,
      question_ar: "من هو الهداف التاريخي للمنتخب التونسي؟",
      options_ar: ["عصام جمعة", "وهبي الخزري", "يوسف المساكني", "فرانسيلودو سانتوس"],
      question_fr: "Qui est le meilleur buteur de tous les temps de l'équipe nationale tunisienne ?",
      options_fr: ["Issam Jemâa", "Wahbi Khazri", "Youssef Msakni", "Francileudo Santos"],
    },
    {
        question_en: "Which Tunisian player is nicknamed 'The Tunisian Magician'?",
        options_en: ["Youssef Msakni", "Wahbi Khazri", "Naïm Sliti", "Anice Badri"],
        correct_answer_index: 0,
        question_ar: "أي لاعب تونسي يلقب بـ 'الساحر التونسي'؟",
        options_ar: ["يوسف المساكني", "وهبي الخزري", "نعيم سليتي", "أنيس البدري"],
        question_fr: "Quel joueur tunisien est surnommé 'Le Magicien Tunisien' ?",
        options_fr: ["Youssef Msakni", "Wahbi Khazri", "Naïm Sliti", "Anice Badri"],
    },
    {
        question_en: "In 2004, Tunisia won its only Africa Cup of Nations title by beating which team in the final?",
        options_en: ["Morocco", "Nigeria", "Senegal", "Egypt"],
        correct_answer_index: 0,
        question_ar: "في عام 2004، فازت تونس بلقبها الوحيد في كأس الأمم الأفريقية بفوزها على أي فريق في المباراة النهائية؟",
        options_ar: ["المغرب", "نيجيريا", "السنغال", "مصر"],
        question_fr: "En 2004, la Tunisie a remporté son unique titre de la Coupe d'Afrique des Nations en battant quelle équipe en finale ?",
        options_fr: ["Maroc", "Nigéria", "Sénégal", "Égypte"],
    }
  ],
  "modern-tunisian-history": [
    {
      question_en: "Who was the first President of the Republic of Tunisia?",
      options_en: [
        "Habib Bourguiba",
        "Zine El Abidine Ben Ali",
        "Moncef Marzouki",
        "Beji Caid Essebsi",
      ],
      correct_answer_index: 0,
      question_ar: "من هو أول رئيس للجمهورية التونسية؟",
      options_ar: [
        "الحبيب بورقيبة",
        "زين العابدين بن علي",
        "المنصف المرزوقي",
        "الباجي قائد السبسي",
      ],
      question_fr: "Qui a été le premier président de la République de Tunisie ?",
      options_fr: [
        "Habib Bourguiba",
        "Zine El Abidine Ben Ali",
        "Moncef Marzouki",
        "Béji Caïd Essebsi",
      ],
    },
    {
      question_en: "Tunisia gained its independence from which European country in 1956?",
      options_en: ["France", "Italy", "Spain", "Great Britain"],
      correct_answer_index: 0,
      question_ar: "حصلت تونس على استقلالها من أي دولة أوروبية عام 1956؟",
      options_ar: ["فرنسا", "إيطاليا", "إسبانيا", "بريطانيا العظمى"],
      question_fr: "La Tunisie a obtenu son indépendance de quel pays européen en 1956 ?",
      options_fr: ["France", "Italie", "Espagne", "Grande-Bretagne"],
    },
     {
      question_en: "What major event in late 2010-early 2011 led to significant political change in Tunisia?",
      options_en: ["The Jasmine Revolution", "The Bardo Museum Attack", "The Sousse Attack", "The National Dialogue Quartet"],
      correct_answer_index: 0,
      question_ar: "ما هو الحدث الكبير في أواخر 2010 وأوائل 2011 الذي أدى إلى تغيير سياسي كبير في تونس؟",
      options_ar: ["ثورة الياسمين", "هجوم متحف باردو", "هجوم سوسة", "الرباعي الراعي للحوار الوطني"],
      question_fr: "Quel événement majeur fin 2010-début 2011 a entraîné un changement politique important en Tunisie ?",
      options_fr: ["La Révolution de Jasmin", "L'attentat du musée du Bardo", "L'attentat de Sousse", "Le quartet du dialogue national"],
    },
  ],
  "derby-de-tunis": [
    {
      question_en: "The Tunis derby is a football match between which two teams?",
      options_en: [
        "Espérance de Tunis and Club Africain",
        "Étoile du Sahel and CS Sfaxien",
        "Espérance de Tunis and Étoile du Sahel",
        "Club Africain and CS Sfaxien",
      ],
      correct_answer_index: 0,
      question_ar: "ديربي تونس هي مباراة كرة قدم بين أي فريقين؟",
      options_ar: [
        "الترجي الرياضي التونسي والنادي الإفريقي",
        "النجم الساحلي والنادي الصفاقسي",
        "الترجي الرياضي التونسي والنجم الساحلي",
        "النادي الإفريقي والنادي الصفاقسي",
      ],
      question_fr:
        "Le derby de Tunis est un match de football entre quelles deux équipes ?",
      options_fr: [
        "Espérance de Tunis et Club Africain",
        "Étoile du Sahel et CS Sfaxien",
        "Espérance de Tunis et Étoile du Sahel",
        "Club Africain et CS Sfaxien",
      ],
    },
     {
      question_en: "What is the name of the stadium where the Tunis derby is most frequently played?",
      options_en: ["Stade Olympique de Radès", "Stade El Menzah", "Stade Taïeb Mhiri", "Stade Mustapha Ben Jannet"],
      correct_answer_index: 0,
      question_ar: "ما هو اسم الملعب الذي تقام فيه مباراة ديربي تونس بشكل متكرر؟",
      options_ar: ["الملعب الأولمبي برادس", "ملعب المنزه", "ملعب الطيب المهيري", "ملعب مصطفى بن جنات"],
      question_fr: "Quel est le nom du stade où se joue le plus souvent le derby de Tunis ?",
      options_fr: ["Stade Olympique de Radès", "Stade El Menzah", "Stade Taïeb Mhiri", "Stade Mustapha Ben Jannet"],
    },
  ],
  "plats-tunisiens": [
    {
      question_en:
        "What is the name of the famous Tunisian spicy paste made from red peppers?",
      options_en: ["Harissa", "Shakshouka", "Brik", "Mechouia"],
      correct_answer_index: 0,
      question_ar: "ما اسم المعجونة التونسية الحارة الشهيرة المصنوعة من الفلفل الأحمر؟",
      options_ar: ["هريسة", "شكشوكة", "بريك", "مشوية"],
      question_fr:
        "Quel est le nom de la fameuse pâte pimentée tunisienne à base de piments rouges ?",
      options_fr: ["Harissa", "Shakshouka", "Brik", "Mechouia"],
    },
    {
      question_en: "Brik is a famous Tunisian appetizer. What is typically the main ingredient inside the thin pastry?",
      options_en: ["Egg", "Tuna", "Potatoes", "Shrimp"],
      correct_answer_index: 0,
      question_ar: "البريك هو مقبلات تونسية شهيرة. ما هو المكون الرئيسي عادة داخل العجينة الرقيقة؟",
      options_ar: ["البيض", "التن", "البطاطا", "الجمبري"],
      question_fr: "Le Brik est une célèbre entrée tunisienne. Quel est généralement l'ingrédient principal à l'intérieur de la fine pâte ?",
      options_fr: ["Œuf", "Thon", "Pommes de terre", "Crevettes"],
    },
     {
      question_en: "Which of these is a traditional Tunisian donut-like pastry, often soaked in honey or syrup?",
      options_en: ["Bambalouni", "Makroudh", "Zlebia", "Kaak Warka"],
      correct_answer_index: 0,
      question_ar: "أي من هذه الحلويات هي معجنات تونسية تقليدية تشبه الدونات، وغالباً ما تكون منقوعة في العسل أو القطر؟",
      options_ar: ["بمبالوني", "مقروض", "زلابية", "كعك الورقة"],
      question_fr: "Laquelle de ces pâtisseries est une pâtisserie traditionnelle tunisienne ressemblant à un beignet, souvent trempée dans du miel ou du sirop ?",
      options_fr: ["Bambalouni", "Makroudh", "Zlebia", "Kaak Warka"],
    },
  ],
  "carthage-history": [
     {
      question_en: "Who was the legendary founder and first queen of Carthage?",
      options_en: ["Dido", "Cleopatra", "Zenobia", "Boudica"],
      correct_answer_index: 0,
      question_ar: "من هي المؤسسة الأسطورية وأول ملكة لقرطاج؟",
      options_ar: ["عليسة", "كليوباترا", "زنوبيا", "بوديكا"],
      question_fr: "Qui était la fondatrice légendaire et première reine de Carthage ?",
      options_fr: ["Didon", "Cléopâtre", "Zénobie", "Boudicca"],
    },
  ],
  "tunisian-cinema": [
    {
      question_en: "Which film by Ferid Boughedir is a classic of Tunisian cinema, depicting life in Tunis in the 1960s?",
      options_en: ["Halfaouine: Boy of the Terraces", "Asfour Stah", "The Silences of the Palace", "A Summer in La Goulette"],
      correct_answer_index: 0,
      question_ar: "أي فيلم لفريد بوغدير يعتبر من كلاسيكيات السينما التونسية، ويصور الحياة في تونس في الستينيات؟",
      options_ar: ["عصفور سطح", "عصفور السطح", "صمت القصور", "صيف في حلق الوادي"],
      question_fr: "Quel film de Ferid Boughedir est un classique du cinéma tunisien, dépeignant la vie à Tunis dans les années 1960 ?",
      options_fr: ["Halfaouine, l'enfant des terrasses", "Asfour Stah", "Les Silences du palais", "Un été à La Goulette"],
    },
  ],
   "african-champions-league": [
    {
      question_en: "Which club has won the most CAF Champions League titles?",
      options_en: ["Al Ahly SC", "Zamalek SC", "TP Mazembe", "Espérance de Tunis"],
      correct_answer_index: 0,
      question_ar: "أي نادٍ فاز بأكبر عدد من ألقاب دوري أبطال أفريقيا؟",
      options_ar: ["الأهلي", "الزمالك", "تي بي مازيمبي", "الترجي الرياضي التونسي"],
      question_fr: "Quel club a remporté le plus de titres de la Ligue des champions de la CAF ?",
      options_fr: ["Al Ahly SC", "Zamalek SC", "TP Mazembe", "Espérance de Tunis"],
    },
  ],
   "hannibal-barca": [
    {
      question_en: "Hannibal Barca is most famous for leading his army, including war elephants, across which mountain range?",
      options_en: ["The Alps", "The Pyrenees", "The Atlas Mountains", "The Caucasus Mountains"],
      correct_answer_index: 0,
      question_ar: "بماذا يشتهر حنبعل برقا بشكل أساسي بقيادته لجيشه، بما في ذلك فيلة الحرب، عبر أي سلسلة جبال؟",
      options_ar: ["جبال الألب", "جبال البرانس", "جبال الأطلس", "جبال القوقاز"],
      question_fr: "Hannibal Barca est le plus célèbre pour avoir mené son armée, y compris des éléphants de guerre, à travers quelle chaîne de montagnes ?",
      options_fr: ["Les Alpes", "Les Pyrénées", "Les montagnes de l'Atlas", "Les montagnes du Caucase"],
    },
  ],
  "un-ete-a-la-goulette": [
     {
      question_en: "The film 'A Summer in La Goulette' explores the friendship between three teenage girls of which three different religions?",
      options_en: ["Muslim, Jewish, and Catholic", "Muslim, Protestant, and Orthodox", "Jewish, Buddhist, and Hindu", "Muslim, Hindu, and Catholic"],
      correct_answer_index: 0,
      question_ar: "يستكشف فيلم 'صيف في حلق الوادي' الصداقة بين ثلاث فتيات مراهقات من أي ثلاث ديانات مختلفة؟",
      options_ar: ["مسلمة ويهودية وكاثوليكية", "مسلمة وبروتستانتية وأرثوذكسية", "يهودية وبوذية وهندوسية", "مسلمة وهندوسية وكاثوليكية"],
      question_fr: "Le film 'Un été à La Goulette' explore l'amitié entre trois adolescentes de quelles trois religions différentes ?",
      options_fr: ["Musulmane, juive et catholique", "Musulmane, protestante et orthodoxe", "Juive, bouddhiste et hindoue", "Musulmane, hindoue et catholique"],
    },
  ],
   "tunisia-world-heritage-sites": [
    {
        question_en: "Which ancient Roman amphitheater in Tunisia is one of the largest in the world and a UNESCO World Heritage site?",
        options_en: ["Amphitheatre of El Jem", "Carthage", "Dougga", "Bulla Regia"],
        correct_answer_index: 0,
        question_ar: "أي مدرج روماني قديم في تونس هو واحد من أكبر المدرجات في العالم وموقع تراث عالمي لليونسكو؟",
        options_ar: ["مدرج الجم", "قرطاج", "دقة", "بلاريجيا"],
        question_fr: "Quel ancien amphithéâtre romain en Tunisie est l'un des plus grands au monde et un site du patrimoine mondial de l'UNESCO ?",
        options_fr: ["Amphithéâtre d'El Jem", "Carthage", "Dougga", "Bulla Regia"],
    },
   ],
    "guess-the-actor": [
    {
        question_en: "Which famous Tunisian actress starred in the film 'The Silences of the Palace'?",
        options_en: ["Hend Sabry", "Dorra Zarrouk", "Feryel Youssef", "Maram Ben Aziza"],
        correct_answer_index: 0,
        question_ar: "أي ممثلة تونسية شهيرة لعبت دور البطولة في فيلم 'صمت القصور'؟",
        options_ar: ["هند صبري", "درة زروق", "فريال يوسف", "مرام بن عزيزة"],
        question_fr: "Quelle célèbre actrice tunisienne a joué dans le film 'Les Silences du palais' ?",
        options_fr: ["Hend Sabry", "Dorra Zarrouk", "Feryel Youssef", "Maram Ben Aziza"],
    },
   ],
   "timeless-melodies": [
    {
        question_en: "Who is known as the 'Godfather of Tunisian music'?",
        options_en: ["Hedi Jouini", "Ali Riahi", "Lotfi Bouchnak", "Saber Rebaï"],
        correct_answer_index: 0,
        question_ar: "من هو المعروف بلقب 'عراب الموسيقى التونسية'؟",
        options_ar: ["الهادي جويني", "علي الرياحي", "لطفي بوشناق", "صابر الرباعي"],
        question_fr: "Qui est connu comme le 'Parrain de la musique tunisienne' ?",
        options_fr: ["Hedi Jouini", "Ali Riahi", "Lotfi Bouchnak", "Saber Rebaï"],
    },
  ]
};
