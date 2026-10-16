
export type Language = "ar" | "fr";

export const translations = {
  ar: {
    // Navigation
    "n0": "الطريقة", "n1": "خدماتنا", "n3": "أسئلة", "n4": "ابدأ توة", "n5": "تتبع", "n6": "التغطية", "n7": "عروضنا",
    "nav_services": "خدمات اللوجستيك", "nav_why": "علاش Logistica", "nav_faq": "الأسئلة الشائعة", "nav_signin": "دخول", "nav_signup": "سجل توة",
    "nav_leaderboard": "المتصدرين", "nav_commitments": "التزاماتنا",

    // Auth
    "login_title": "مرحباً بعودتك", "login_subtitle": "ادخل لحساب التاجر متاعك", "login_email": "البريد الإلكتروني", "login_password": "كلمة السر", "login_forgot": "نسيت كلمة السر؟", "login_submit": "دخول", "login_no_account": "ما عندكش حساب؟", "login_register": "سجل من هنا",
    "register_title": "حل حساب جديد", "register_subtitle": "انضم لأكثر من 500 تاجر في تونس", "register_name": "الاسم الكامل", "register_shop": "اسم المتجر", "register_phone": "رقم الهاتف", "register_submit": "إنشاء حساب", "register_have_account": "عندك حساب؟", "register_login": "ادخل من هنا",

    // Hero
    "chip": "أول منصة لوجستيك متكاملة في تونس",
    "h1a": "بِيع براحتك…", "h1b": "والتوصيل علينا.",
    "sub": "Logistica تستقبل السلعة، تخزنها، تحضر الطلبات وتوصلها لزبونك — من الكوموند لليفريزون، بسيطة كيما الحكاية.",
    "cta1": "ابدأ معانا اليوم", "cta2": "كيفاش نخدمو",

    // Process Home
    "hwe": "العمليات", "hwt": "5 خطوات وتوصل الكولي", "hws": "من نهار يوصلنا الكوموند لين يرجعلك الكاش — كل شي منظم ومتبع.",
    "h1t": "الكوموند توصل", "h1d": "من سيتك، صفحتك ولا أي ماركت بلاص.",
    "h2t": "تخزين آمن", "h2d": "سلعتك في مخازننا، مصنفة ومحمية 24/7.",
    "h3t": "تحضير سريع", "h3d": "Picking و Packing محترف in أقل من ساعتين.",
    "h4t": "توصيل للدار", "h4d": "شبكة تغطي 24 ولاية في وقت قياسي.",
    "h5t": "خلاصك مضمون", "h5d": "نجمعو الـ COD ونرجعوهلك في J+1.",

    // Dashboard Showcase
    "db_title": "لوحة تحكم ذكية", "db_desc": "تبع الستوك، الكوموندات، والفلوس في الوقت الحقيقي وبكل دقة.",
    "db_tab1": "الطلبات", "db_tab2": "المخزون", "db_tab3": "المالية", "db_tab4": "الأداء",
    "db_kpi1": "طلبات اليوم", "db_kpi2": "نسبة النجاح", "db_kpi3": "مداخيل COD", "db_kpi4": "تنبيهات الستوك",
    "db_feature1": "تتبع مباشر", "db_feature2": "إدارة المرجوعات", "db_feature3": "تقارير مفصلة",
    "db_chart_title": "مخطط العمليات الأسبوعي",

    // Logistics 10 Steps
    "step_1_title": "ربط المتجر", "step_1_desc": "ربط مباشر مع Shopify أو WooCommerce في دقايق.",
    "step_2_title": "استقبال السلعة", "step_2_desc": "نستقبلو سلعتك ونثبتو في حالتها وعددها.",
    "step_3_title": "تخزين ذكي", "step_3_desc": "وضع السلعة في أماكنها المخصصة في Hub تونس.",
    "step_4_title": "مزامنة آليا", "step_4_desc": "أي كوموند تجي في سيتك توصلنا طول للسيستام.",
    "step_5_title": "التحضير", "step_5_desc": "تغليف محترف يحمي السلعة ويعطي صورة باهية.",
    "step_6_title": "توزيع ذكي", "step_6_desc": "توجيه الكولي لأقرب مركز فرز حسب الولاية.",
    "step_7_title": "شحن سريع", "step_7_desc": "توصيل في 24-48 ساعة لكامل تراب الجمهورية.",
    "step_8_title": "جمع الأموال", "step_8_desc": "تحصيل ثمن السلعة عند التسليم بكل أمان.",
    "step_9_title": "خلاص التاجر", "step_9_desc": "تحويل فلوسك لحسابك البنكي في J+1.",
    "step_10_title": "تطوير العمل", "step_10_desc": "تحليل البيانات باش تكبر بيزنسك معانا.",

    // Coverage
    "cve": "التغطية الوطنية", "cvt": "من بنزرت لبنقردان", 
    "z1": "المدن الكبرى (Hubs)", "z1t": "توصيل في 24 ساعة", "z1d": "تغطية كاملة لتونس الكبرى، سوسة، وصفاقس مع مراكز فرز ذكية.",
    "z2": "كامل الولايات", "z2t": "توصيل في 24-48 ساعة", "z2d": "شبكة توصيل تغطي الـ 24 ولاية مع تتبع دقيق لكل خطوة.",
    "z3": "المناطق البعيدة", "z3t": "المناطق الحدودية", "z3d": "نوصلو حتى لأبعد نقطة في تونس بجدولة منظمة.",

    // Footer
    "footer_tagline": "لوجستيك ساهلة، بيزنس يكبر.",
    "footer_cta": "احكي معانا على واتساب",
    "footer_copyright": "© 2024 Logistica Tunisie. جميع الحقوق محفوظة.",
    
    // Stats
    "stats_l1": "كولي حضرناه", "stats_l2": "ولاية مغطاة", "stats_l3": "نسبة النجاح", "stats_l4": "وقت التحضير",

    // Benefits
    "benefit_time": "ربح الوقت", "benefit_time_desc": "ارتاح من تعب اللوجستيك وركز كان في مبيعاتك.",
    "benefit_errors": "صفر أخطاء", "benefit_errors_desc": "تحضير رقمي بالباركد يضمن دقة 99.9%.",
    "benefit_speed": "سرعة خيالية", "benefit_speed_desc": "كليوناتك باش يفرحو بالسرعة والاحترافية.",

    "foot": "© 2024 Logistica Tunisie — بكل فخر في تونس 🇹🇳"
  },
  fr: {
    // Navigation
    "n0": "Process", "n1": "Services", "n3": "FAQ", "n4": "Démarrer", "n5": "Suivi", "n6": "Couverture", "n7": "Offres",
    "nav_services": "Services Logistiques", "nav_why": "Pourquoi Logistica", "nav_faq": "FAQ", "nav_signin": "Connexion", "nav_signup": "S'inscrire",
    "nav_leaderboard": "Classement", "nav_commitments": "Engagements",

    // Auth
    "login_title": "Bon retour", "login_subtitle": "Accédez à votre portail marchand", "login_email": "Email professionnel", "login_password": "Mot de passe", "login_forgot": "Mot de passe oublié ?", "login_submit": "Se connecter", "login_no_account": "Pas encore client ?", "login_register": "S'inscrire",
    "register_title": "Créer un compte", "register_subtitle": "Rejoignez plus de 500 marchands tunisiens", "register_name": "Nom complet", "register_shop": "Nom de la boutique", "register_phone": "Numéro de téléphone", "register_submit": "Créer mon compte", "register_have_account": "Déjà client ?", "register_login": "Se connecter",

    // Hero
    "chip": "N°1 de la Logistique e-commerce en Tunisie",
    "h1a": "Vendez sereinement…", "h1b": "la livraison, c'est nous.",
    "sub": "Logistica réceptionne, stocke, prépare et livre vos commandes — de la commande à la livraison, tout simplement.",
    "cta1": "Démarrer maintenant", "cta2": "Voir le fonctionnement",

    // Process Home
    "hwe": "Opérations", "hwt": "Le colis en 5 étapes", "hws": "De la réception de commande au reversement du cash — un flux maîtrisé.",
    "h1t": "Commande Reçue", "h1d": "Via API, site web ou réseaux sociaux.",
    "h2t": "Stockage Pro", "h2d": "Articles sécurisés et inventoriés en temps réel.",
    "h3t": "Préparation", "h3d": "Picking et emballage pro en moins de 2h.",
    "h4t": "Expédition", "h4d": "Livraison sur les 24 gouvernorats en temps record.",
    "h5t": "Reversement", "h5d": "Collecte du COD et virement à J+1.",

    // Dashboard Showcase
    "db_title": "Pilotage en temps réel", "db_desc": "Suivez vos stocks, vos expéditions et votre trésorerie sur une interface unique.",
    "db_tab1": "Ordres", "db_tab2": "Stocks", "db_tab3": "Finance", "db_tab4": "KPIs",
    "db_kpi1": "Commandes Jour", "db_kpi2": "Taux de Succès", "db_kpi3": "Revenus COD", "db_kpi4": "Alertes Stock",
    "db_feature1": "Tracking Live", "db_feature2": "Gestion Retours", "db_feature3": "Analyses Data",
    "db_chart_title": "Activité Hebdomadaire du Hub",

    // Logistics 10 Steps
    "step_1_title": "Intégration API", "step_1_desc": "Connexion instantanée avec Shopify ou WooCommerce.",
    "step_2_title": "Réception Stock", "step_2_desc": "Contrôle qualité et quantité à l'arrivée.",
    "step_3_title": "Entreposage", "step_3_desc": "Mise en rack optimisée dans nos hubs sécurisés.",
    "step_4_title": "Sync Auto", "step_4_desc": "Remontée automatique des ventes vers le WMS.",
    "step_5_title": "Picking/Packing", "step_5_desc": "Préparation soignée et emballage professionnel.",
    "step_6_title": "Tri & Dispatch", "step_6_desc": "Orientation vers le transporteur le plus efficace.",
    "step_7_title": "Livraison", "step_7_desc": "Expédition express sur tout le territoire national.",
    "step_8_title": "Collecte COD", "step_8_desc": "Encaissement sécurisé des paiements à la livraison.",
    "step_9_title": "Virement J+1", "step_9_desc": "Reversement automatique de vos gains sous 24h.",
    "step_10_title": "Scalabilité", "step_10_desc": "Accélérez votre croissance avec notre logistique.",

    // Coverage
    "cve": "Couverture Nationale", "cvt": "De Bizerte à Ben Guerdane", 
    "z1": "Villes Hubs", "z1t": "Livraison en 24h", "z1d": "Couverture totale du Grand Tunis, Sousse et Sfax avec centres de tri.",
    "z2": "Gouvernorats", "z2t": "Livraison 24h-48h", "z2d": "Réseau couvrant les 24 gouvernorats avec suivi précis.",
    "z3": "Zones éloignées", "z3t": "Zones frontalières", "z3d": "Nous livrons les points les plus reculés avec régularité.",

    // Footer
    "footer_tagline": "Logistique simplifiée, business accéléré.",
    "footer_cta": "Contactez-nous sur WhatsApp",
    "footer_copyright": "© 2024 Logistica Tunisie. Tous droits réservés.",
    
    // Stats
    "stats_l1": "Colis préparés", "stats_l2": "Gouvernorats", "stats_l3": "Taux de succès", "stats_l4": "Temps Picking",

    // Benefits
    "benefit_time": "Gain de temps", "benefit_time_desc": "Déléguez la logistique pour vous concentrer sur vos ventes.",
    "benefit_errors": "Zéro Erreur", "benefit_errors_desc": "Un picking digitalisé pour une précision de 99.9%.",
    "benefit_speed": "Livraison Rapide", "benefit_speed_desc": "Une expérience client premium avec des délais record.",

    "foot": "© 2024 Logistica Tunisie — Fièrement tunisien 🇹🇳"
  }
};
