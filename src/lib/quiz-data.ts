import type { Quiz } from "./types";

export const staticQuizData: Record<string, Quiz> = {
  "tunisian-football": [
    {
      question_en: "Which Tunisian club has won the most Tunisian Ligue Professionnelle 1 titles?",
      options_en: ["Espérance de Tunis", "Club Africain", "Étoile du Sahel", "CS Sfaxien"],
      correct_answer_index: 0,
      question_ar: "أي نادٍ تونسي فاز بأكبر عدد من ألقاب الرابطة المحترفة الأولى؟",
      options_ar: ["الترجي الرياضي التونسي", "النادي الإفريقي", "النجم الساحلي", "النادي الصفاقسي"],
      question_fr: "Quel club tunisien a remporté le plus de titres de la Ligue Professionnelle 1 tunisienne ?",
      options_fr: ["Espérance de Tunis", "Club Africain", "Étoile du Sahel", "CS Sfaxien"],
    },
    {
      question_en: "In which year did the Tunisian national team first qualify for the FIFA World Cup?",
      options_en: ["1978", "1998", "2002", "1982"],
      correct_answer_index: 0,
      question_ar: "في أي عام تأهل المنتخب التونسي لأول مرة لكأس العالم لكرة القدم؟",
      options_ar: ["1978", "1998", "2002", "1982"],
      question_fr: "En quelle année l'équipe nationale tunisienne s'est-elle qualifiée pour la première fois à la Coupe du Monde de la FIFA ?",
      options_fr: ["1978", "1998", "2002", "1982"],
    }
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
    }
  ],
  "tunisian-cinema": [
    {
      question_en: "Which film by Ferid Boughedir is a classic of Tunisian cinema?",
      options_en: ["Halfaouine: Boy of the Terraces", "The Silences of the Palace", "Dachra", "Fataria"],
      correct_answer_index: 0,
      question_ar: "أي فيلم لفريد بوغدير يعتبر من كلاسيكيات السينما التونسية؟",
      options_ar: ["عصفور سطح", "صمت القصور", "دشرة", "فطارية"],
      question_fr: "Quel film de Ferid Boughedir est un classique du cinéma tunisien ?",
      options_fr: ["Halfaouine, l'enfant des terrasses", "Les Silences du palais", "Dachra", "Fataria"],
    }
  ],
  "un-ete-a-la-goulette": [
    {
      question_en: "Who directed the iconic Tunisian film 'A Summer in La Goulette'?",
      options_en: ["Férid Boughedir", "Nouri Bouzid", "Moufida Tlatli", "Abdellatif Kechiche"],
      correct_answer_index: 0,
      question_ar: "من أخرج الفيلم التونسي الشهير 'صيف في حلق الوادي'؟",
      options_ar: ["فريد بوغدير", "نوري بوزيد", "مفيدة التلاتلي", "عبد اللطيف كشيش"],
      question_fr: "Qui a réalisé le film tunisien emblématique 'Un été à La Goulette' ?",
      options_fr: ["Férid Boughedir", "Nouri Bouzid", "Moufida Tlatli", "Abdellatif Kechiche"],
    }
  ],
  "plats-tunisiens": [
    {
      question_en: "What is the base ingredient of the famous Tunisian dish 'Brik'?",
      options_en: ["Malsouka pastry", "Bread", "Rice", "Couscous"],
      correct_answer_index: 0,
      question_ar: "ما هو المكون الأساسي للطبق التونسي الشهير 'بريك'؟",
      options_ar: ["ورقة الملسوقة", "الخبز", "الأرز", "الكسكسي"],
      question_fr: "Quel est l'ingrédient de base du célèbre plat tunisien 'Brik' ?",
      options_fr: ["Feuille de Malsouka", "Pain", "Riz", "Couscous"],
    }
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
    }
  ],
  "tunisia-world-heritage-sites": [
    {
      question_en: "Which city is home to the Great Mosque, a UNESCO World Heritage site?",
      options_en: ["Kairouan", "Sousse", "Monastir", "Mahdia"],
      correct_answer_index: 0,
      question_ar: "أي مدينة تضم الجامع الكبير، وهو موقع تراث عالمي لليونسكو؟",
      options_ar: ["القيروان", "سوسة", "المنستير", "المهدية"],
      question_fr: "Quelle ville abrite la Grande Mosquée, un site classé au patrimoine mondial de l'UNESCO ?",
      options_fr: ["Kairouan", "Sousse", "Monastir", "Mahdia"],
    }
  ],
  "modern-tunisian-history": [
    {
      question_en: "Who was the first President of the Republic of Tunisia?",
      options_en: ["Habib Bourguiba", "Zine El Abidine Ben Ali", "Moncef Marzouki", "Beji Caid Essebsi"],
      correct_answer_index: 0,
      question_ar: "من هو أول رئيس للجمهورية التونسية؟",
      options_ar: ["الحبيب بورقيبة", "زين العابدين بن علي", "المنصف المرزوقي", "الباجي قائد السبسي"],
      question_fr: "Qui a été le premier président de la République de Tunisie ?",
      options_fr: ["Habib Bourguiba", "Zine El Abidine Ben Ali", "Moncef Marzouki", "Béji Caïd Essebsi"],
    }
  ],
  "derby-de-tunis": [
    {
      question_en: "The Tunis derby is a football match between which two teams?",
      options_en: ["Espérance de Tunis and Club Africain", "Étoile du Sahel and CS Sfaxien", "Espérance de Tunis and Étoile du Sahel", "Club Africain and CS Sfaxien"],
      correct_answer_index: 0,
      question_ar: "ديربي تونس هي مباراة كرة قدم بين أي فريقين؟",
      options_ar: ["الترجي الرياضي التونسي والنادي الإفريقي", "النجم الساحلي والنادي الصفاقسي", "الترجي الرياضي التونسي والنجم الساحلي", "النادي الإفريقي والنادي الصفاقسي"],
      question_fr: "Le derby de Tunis est un match de football entre quelles deux équipes ?",
      options_fr: ["Espérance de Tunis et Club Africain", "Étoile du Sahel et CS Sfaxien", "Espérance de Tunis et Étoile du Sahel", "Club Africain et CS Sfaxien"],
    }
  ],
  "african-champions-league": [
    {
      question_en: "Which Tunisian club won the CAF Champions League in 2011, 2018, and 2019?",
      options_en: ["Espérance de Tunis", "Étoile du Sahel", "Club Africain", "CS Sfaxien"],
      correct_answer_index: 0,
      question_ar: "أي نادٍ تونسي فاز بدوري أبطال أفريقيا في 2011 و2018 و2019؟",
      options_ar: ["الترجي الرياضي التونسي", "النجم الساحلي", "النادي الإفريقي", "النادي الصفاقسي"],
      question_fr: "Quel club tunisien a remporté la Ligue des champions de la CAF en 2011, 2018 et 2019 ?",
      options_fr: ["Espérance de Tunis", "Étoile du Sahel", "Club Africain", "CS Sfaxien"],
    }
  ],
  "hannibal-barca": [
    {
      question_en: "Hannibal Barca led his army across which mountain range to attack Rome?",
      options_en: ["The Alps", "The Pyrenees", "The Atlas Mountains", "The Caucasus"],
      correct_answer_index: 0,
      question_ar: "عبر حنبعل برقا أي سلسلة جبال لمهاجمة روما؟",
      options_ar: ["جبال الألب", "جبال البرانس", "جبال الأطلس", "جبال القوقاز"],
      question_fr: "Hannibal Barca a traversé quelle chaîne de montagnes pour attaquer Rome ?",
      options_fr: ["Les Alpes", "Les Pyrénées", "L'Atlas", "Le Caucase"],
    }
  ],
  "guess-the-actor": [
    {
      question_en: "Which famous Tunisian actress starred in 'The Silences of the Palace'?",
      options_en: ["Hend Sabry", "Dorra Zarrouk", "Feryel Youssef", "Maram Ben Aziza"],
      correct_answer_index: 0,
      question_ar: "أي ممثلة تونسية شهيرة لعبت دور البطولة في 'صمت القصور'؟",
      options_ar: ["هند صبري", "درة زروق", "فريال يوسف", "مرام بن عزيزة"],
      question_fr: "Quelle célèbre actrice tunisienne a joué dans 'Les Silences du palais' ?",
      options_fr: ["Hend Sabry", "Dorra Zarrouk", "Feryel Youssef", "Maram Ben Aziza"],
    }
  ]
};
