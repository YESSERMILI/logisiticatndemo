export type Language = "ar" | "fr";

export const translations = {
  ar: {
    // Navbar
    nav_home: "الرئيسية",
    nav_categories: "الأقسام",
    nav_leaderboard: "الترتيب",
    nav_guilds: "الفرق",
    nav_profile: "حسابي",
    nav_logout: "تسجيل الخروج",
    create_quiz: "أنشئ اختبار",

    // Hero Section
    the_living_library: "مكتبة المعرفة الحية",
    hero_subtitle_extended: "مستعد لمواصلة سلسلة انتصاراتك في العلوم؟ أنت في حماسك لمدة 7 أيام متتالية!",
    continue_playing: "مواصلة اللعب",
    explore_quizzes: "استكشف الاختبارات",
    continue_where_you_left_off: "أكمل من حيث توقفت",
    hero_greeting: "مساء الخير،",
    hero_alex: "زياد!",
    last_played_quiz: "تاريخ تونس الحديث",
    
    // Browse Categories
    browse_categories: "تصفح الأقسام",
    find_next_challenge: "ابحث عن تحديك القادم",
    view_all: "عرض الكل",

    // Featured Quizzes
    featured_quizzes: "الاختبارات المميزة",
    handpicked_by_team: "اختيرت بعناية من قبل فريقنا",
    featured_by: "بواسطة",
    featured_questions: "أسئلة",

    // Trending Now
    trending_now: "الأكثر رواجًا الآن",
    popular_with_community: "شائع بين المجتمع",

    // Daily Quests
    daily_quests: "المهام اليومية",
    view_all_quests: "عرض كل المهام",

    // Friends Activity
    friends_activity: "نشاط الأصدقاء",

    // Create Your Own Quiz
    create_your_own_quiz: "أنشئ اختبارك الخاص",
    create_your_own_quiz_desc: "أطلق العنان لإبداعك وشارك معرفتك مع العالم.",
    start_creating: "ابدأ الإنشاء",
    learn_more: "اعرف المزيد",
    quiz_types: "أنواع الاختبارات",
    quiz_types_desc: "خيارات متعددة، صور، والمزيد",
    ai_assistant: "مساعد الذكاء الاصطناعي",
    ai_assistant_desc: "لإنشاء أسئلة مبتكرة",
    collaboration: "تعاون",
    collaboration_desc: "شارك في الإنشاء مع الأصدقاء",
    analytics: "تحليلات",
    analytics_desc: "تتبع أداء اختباراتك",

    // Guilds page
    guilds_title: "الفرق",
    guilds_subtitle: "كوّن فريقًا، تنافس، وانتصر معًا.",
    guilds_wip_title: "هذه الميزة قيد الإنشاء",
    guilds_wip_desc: "نظام الفرق والعشائر قادم قريبًا! استعدوا لتشكيل فرق مع الأصدقاء، والمنافسة في معارك فرق ملحمية، والصعود في المراتب معًا لكسب مكافآت حصرية.",
    guilds_create: "أنشئ فريق",
    guilds_join: "انضم إلى فريق",

    // Leaderboard page
    leaderboard_you: "أنت",
    leaderboard_rank: "الترتيب",
    leaderboard_player: "اللاعب",
    leaderboard_points: "النقاط",
    leaderboard_streak: "سلسلة",
    leaderboard_daily: "يومي",
    leaderboard_weekly: "أسبوعي",
    leaderboard_all_time: "إجمالي",
    leaderboard_rewards_title: "جوائز TT",
    leaderboard_rewards_desc: "أفضل 10 لاعبين كل أسبوع يفوزون بباقات إنترنت مجانية!",
    leaderboard_who_is_champion: "من هو بطل عز المونديال؟",

    // Login page
    login_welcome: "مرحبا بعودتك!",
    login_subtitle: "سجل الدخول لمواصلة رحلتك.",
    login_email: "البريد الإلكتروني",
    login_password: "كلمة المرور",
    login_forgot: "هل نسيت كلمة المرور؟",
    login_signin: "تسجيل الدخول",
    login_no_account: "ليس لديك حساب؟",
    login_signup: "إنشاء حساب",

    // Profile page
    profile_title: "ملفي الشخصي",
    profile_subtitle: "إحصائياتك وإنجازاتك وتاريخ اختباراتك.",
    profile_rank: "الترتيب",
    profile_points: "النقاط",
    profile_achievements: "الإنجازات",
    profile_quiz_history: "تاريخ الاختبارات",
    profile_quiz_history_desc: "سيظهر أداءك الأخير في الاختبارات هنا.",

    // Register page
    register_title: "انضم إلى المنافسة",
    register_subtitle: "أنشئ حسابًا لبدء اللعب والفوز.",
    register_username: "اسم المستخدم",
    register_create_account: "إنشاء حساب",
    register_has_account: "هل لديك حساب بالفعل؟",
    register_signin: "تسجيل الدخول",

    // Footer component
    footer_motto: "تعلم، تنافس، أنشئ، انتصر. منصة الاختبارات التنافسية الرسمية في تونس.",
    footer_privacy: "الخصوصية",
    footer_terms: "الشروط",
    footer_contact: "اتصل بنا",
    footer_legal: "قانوني",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_navigation: "التنقل",


    // Other
    nav_login: "تسجيل الدخول",
    nav_register: "إنشاء حساب",
    hero_cta_play: "ابدأ اللعب",
    hero_cta_create_account: "أنشئ حساباً",
    stats_players_online: "لاعب متصل",
    stats_quizzes_played: "اختبار لعِب اليوم",
    stats_top_player: "أفضل لاعب اليوم",
    leaderboard_preview_title: "أفضل اللاعبين",
    leaderboard_preview_cta: "عرض الترتيب الكامل",
    guild_highlight_title: "انضم إلى فريق وهيمن على المنافسة",
    guild_highlight_subtitle: "كوّن فريقًا مع أصدقائك وتنافسوا معًا للصعود في الترتيب والفوز بجوائز حصرية.",
    guild_highlight_cta: "استكشف الفرق",
    quiz_loading: "جاري تحضير الأسئلة...",
    quiz_error: "حدث خطأ أثناء تحميل الاختبار. الرجاء المحاولة مرة أخرى.",
    quiz_results: "النتائج",
    quiz_score: "نتيجتك",
    quiz_correct_answers: "إجابات صحيحة",
    quiz_play_again: "العب مرة أخرى",
    quiz_back_to_categories: "العودة إلى الأقسام",
    quiz_next_question: "السؤال التالي",
    quiz_submit: "تأكيد",
    quiz_generating: "جاري إنشاء اختبارك...",
    quiz_generating_desc: "الرجاء الانتظار بينما يقوم الذكاء الاصطناعي بإعداد تحديك!",

    // Categories page
    categories_title: "الأقسام",
    categories_subtitle: "اختر موضوعًا واختبر معلوماتك.",
    categories_search: "ابحث عن فئة...",
    categories_difficulty: "الصعوبة",
    categories_all: "الكل",
    categories_easy: "سهل",
    categories_medium: "متوسط",
    categories_hard: "صعب",
    categories_no_results: "لم يتم العثور على فئات تطابق بحثك.",
    categories_quiz_count: "اختبار",
  },
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_categories: "Catégories",
    nav_leaderboard: "Classement",
    nav_guilds: "Guildes",
    nav_profile: "Profil",
    nav_logout: "Déconnexion",
    create_quiz: "Créer un Quiz",

    // Hero Section
    the_living_library: "La Bibliothèque Vivante du Savoir",
    hero_subtitle_extended: "Prêt à continuer votre série en Science ? Vous êtes en feu avec 7 jours de suite !",
    continue_playing: "Continuer à jouer",
    explore_quizzes: "Explorer les Quiz",
    continue_where_you_left_off: "Reprendre là où vous vous êtes arrêté",
    hero_greeting: "Bonsoir,",
    hero_alex: "Zied !",
    last_played_quiz: "Histoire Moderne de la Tunisie",

    // Browse Categories
    browse_categories: "Parcourir les catégories",
    find_next_challenge: "Trouvez votre prochain défi",
    view_all: "Voir tout",

    // Featured Quizzes
    featured_quizzes: "Quiz à la une",
    handpicked_by_team: "Sélectionnés par notre équipe",
    featured_by: "Par",
    featured_questions: "Questions",

    // Trending Now
    trending_now: "Tendances Actuelles",
    popular_with_community: "Populaire auprès de la communauté",

    // Daily Quests
    daily_quests: "Quêtes Quotidiennes",
    view_all_quests: "Voir toutes les quêtes",

    // Friends Activity
    friends_activity: "Activité des amis",

    // Create Your Own Quiz
    create_your_own_quiz: "Créez votre propre Quiz",
    create_your_own_quiz_desc: "Libérez votre créativité et partagez vos connaissances avec le monde.",
    start_creating: "Commencer à créer",
    learn_more: "En savoir plus",
    quiz_types: "Types de Quiz",
    quiz_types_desc: "Choix multiples, images, et plus",
    ai_assistant: "Assistant IA",
    ai_assistant_desc: "Pour générer des questions innovantes",
    collaboration: "Collaboration",
    collaboration_desc: "Co-créer avec des amis",
    analytics: "Analyses",
    analytics_desc: "Suivez les performances de vos quiz",

    // Guilds page
    guilds_title: "Guildes",
    guilds_subtitle: "Faites équipe, rivalisez et conquérez ensemble.",
    guilds_wip_title: "Cette fonctionnalité est en construction",
    guilds_wip_desc: "Le système de guildes et de clans arrive bientôt ! Préparez-vous à faire équipe avec des amis, à participer à des batailles de guildes épiques et à grimper dans le classement ensemble pour gagner des récompenses exclusives.",
    guilds_create: "Créer une Guilde",
    guilds_join: "Rejoindre une Guilde",

    // Leaderboard page
    leaderboard_you: "Vous",
    leaderboard_rank: "Rang",
    leaderboard_player: "Joueur",
    leaderboard_points: "Points",
    leaderboard_streak: "Série",
    leaderboard_daily: "Journalier",
    leaderboard_weekly: "Hebdomadaire",
    leaderboard_all_time: "Total",
    leaderboard_rewards_title: "Récompenses TT",
    leaderboard_rewards_desc: "Le Top 10 de chaque semaine gagne des forfaits internet gratuits!",
    leaderboard_who_is_champion: "Qui est le champion de 3ez El Mondial?",

    // Login page
    login_welcome: "Content de vous revoir !",
    login_subtitle: "Connectez-vous pour continuer votre aventure.",
    login_email: "Email",
    login_password: "Mot de passe",
    login_forgot: "Mot de passe oublié ?",
    login_signin: "Se connecter",
    login_no_account: "Pas de compte ?",
    login_signup: "S'inscrire",

    // Profile page
    profile_title: "Mon Profil",
    profile_subtitle: "Vos statistiques, succès et historique de quiz.",
    profile_rank: "Rang",
    profile_points: "Points",
    profile_achievements: "Succès",
    profile_quiz_history: "Historique des Quiz",
    profile_quiz_history_desc: "Vos performances récentes aux quiz apparaîtront ici.",

    // Register page
    register_title: "Rejoignez la compétition",
    register_subtitle: "Créez un compte pour commencer à jouer et à gagner.",
    register_username: "Nom d'utilisateur",
    register_create_account: "Créer un compte",
    register_has_account: "Déjà un compte ?",
    register_signin: "Se connecter",

    // Footer component
    footer_motto: "Apprenez, rivalisez, créez, conquérez. La plateforme de quiz compétitif officielle en Tunisie.",
    footer_privacy: "Confidentialité",
    footer_terms: "Conditions",
    footer_contact: "Contact",
    footer_legal: "Légal",
    footer_rights: "Tous droits réservés.",
    footer_navigation: "Navigation",

    // Other
    nav_login: "Connexion",
    nav_register: "S'inscrire",
    hero_cta_play: "Commencer à jouer",
    hero_cta_create_account: "Créer un compte",
    stats_players_online: "Joueurs en ligne",
    stats_quizzes_played: "Quiz joués aujourd'hui",
    stats_top_player: "Meilleur joueur du jour",
    leaderboard_preview_title: "Meilleurs joueurs",
    leaderboard_preview_cta: "Voir le classement complet",
    guild_highlight_title: "Rejoignez une guilde et dominez",
    guild_highlight_subtitle: "Faites équipe avec vos amis, grimpez dans le classement et gagnez des récompenses exclusives.",
    guild_highlight_cta: "Explorer les guildes",
    quiz_loading: "Préparation des questions...",
    quiz_error: "Une erreur est survenue lors du chargement du quiz. Veuillez réessayer.",
    quiz_results: "Résultats",
    quiz_score: "Votre score",
    quiz_correct_answers: "Bonnes réponses",
    quiz_play_again: "Rejouer",
    quiz_back_to_categories: "Retour aux catégories",
    quiz_next_question: "Question suivante",
    quiz_submit: "Valider",
    quiz_generating: "Génération de votre quiz...",
    quiz_generating_desc: "Veuillez patienter pendant que notre IA prépare votre défi !",

    // Categories page
    categories_title: "Catégories",
    categories_subtitle: "Choisissez un sujet et testez vos connaissances.",
    categories_search: "Rechercher une catégorie...",
    categories_difficulty: "Difficulté",
    categories_all: "Toutes",
    categories_easy: "Facile",
    categories_medium: "Moyen",
    categories_hard: "Difficile",
    categories_no_results: "Aucune catégorie ne correspond à votre recherche.",
    categories_quiz_count: "quiz",
  },
};
