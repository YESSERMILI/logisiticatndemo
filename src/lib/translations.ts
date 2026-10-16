
export type Language = "ar" | "fr";

export const translations = {
  ar: {
    // Navigation
    "n0": "كيفاش نخدمو", "n1": "خدماتنا", "n3": "أسئلة", "n4": "ابدأ توة", "n5": "تتبع الكولي", "n6": "التغطية", "n7": "عروضنا",
    "nav_services": "خدمات اللوجستيك", "nav_why": "علاش Logistica", "nav_faq": "الأسئلة الشائعة", "nav_signin": "دخول", "nav_signup": "سجل توة",
    "nav_leaderboard": "المتصدرين", "nav_commitments": "التزاماتنا",

    // Auth
    "login_title": "مرحباً بعودتك", "login_subtitle": "ادخل لحساب التاجر متاحك وتبع خدمتك", "login_email": "البريد الإلكتروني", "login_password": "كلمة السر", "login_forgot": "نسيت كلمة السر؟", "login_submit": "دخول", "login_no_account": "ما عندكش حساب؟", "login_register": "سجل من هنا",
    "register_title": "حل حساب جديد", "register_subtitle": "انضم لأكثر من 500 تاجر يخدمو بذكاء في تونس", "register_name": "الاسم واللقب", "register_shop": "اسم المتجر (Boutique)", "register_phone": "رقم الهاتف", "register_submit": "إنشاء حساب", "register_have_account": "عندك حساب؟", "register_login": "ادخل من هنا",

    // Hero
    "chip": "أول منصة لوجستيك متكاملة في تونس 🇹🇳",
    "h1a": "بِيع براحتك…", "h1b": "والباقي الكل علينا.",
    "sub": "Logistica تستقبل السلعة، تخزنها، تحضر الطلبات وتوصلها لزبونك — من نهار يوصلنا الكوموند لين يرجعلك الكاش، كل شي ساهل ومنظم.",
    "cta1": "ابدأ معانا توة", "cta2": "شوف كيفاش نخدمو",

    // Process Home
    "hwe": "العمليات", "hwt": "5 خطوات وتوصل الكولي", "hws": "دورة كاملة ومدروسة باش تضمن رضاء حرفاءك وتكبر مبيعاتك.",
    "h1t": "الكوموند توصلنا", "h1d": "من سيتك، صفحتك ولا أي ماركت بلاص تخدم عليها.",
    "h2t": "تخزين محترف", "h2d": "سلعتك في مخازننا، مصنفة ومحمية بالكاميرات 24/7.",
    "h3t": "تحضير الطلبية", "h3d": "Picking و Packing محترف في أقل من ساعتين.",
    "h4t": "توصيل للدار", "h4d": "شبكة تغطي 24 ولاية في وقت قياسي وبأقل ريتور.",
    "h5t": "خلاصك مضمون", "h5d": "نجمعو الـ COD ونرجعوهلك في J+1 (نهار بعد التسليم).",

    // Dashboard Showcase
    "db_title": "لوحة تحكم ذكية", "db_desc": "تبع الستوك، الكوموندات، والفلوس في الوقت الحقيقي وبكل دقة من تليفونك ولا بيسيك.",
    "db_tab1": "الطلبات", "db_tab2": "المخزون", "db_tab3": "المالية", "db_tab4": "الأداء",
    "db_kpi1": "طلبات اليوم", "db_kpi2": "نسبة النجاح", "db_kpi3": "مداخيل COD", "db_kpi4": "تنبيهات الستوك",
    "db_feature1": "تتبع مباشر", "db_feature2": "إدارة المرجوعات", "db_feature3": "تقارير مفصلة",
    "db_chart_title": "مخطط العمليات الأسبوعي",

    // Logistics 10 Steps
    "step_1_title": "ربط المتجر", "step_1_desc": "ربط مباشر مع Shopify أو WooCommerce في دقايق معدودة.",
    "step_2_title": "استقبال السلعة", "step_2_desc": "نستقبلو سلعتك ونثبتو في حالتها وعددها مليم بمليم.",
    "step_3_title": "تخزين ذكي", "step_3_desc": "وضع السلعة في أماكنها المخصصة لضمان سرعة التحضير.",
    "step_4_title": "مزامنة آليا", "step_4_desc": "أي كوموند تجي في سيتك توصلنا طول للسيستام من غير تدخل منك.",
    "step_5_title": "التحضير (Packing)", "step_5_desc": "تغليف محترف يحمي السلعة ويعطي صورة باهية لبراندك.",
    "step_6_title": "توزيع ذكي", "step_6_desc": "توجيه الكولي لأقرب مركز فرز حسب الولاية باش نربحو الوقت.",
    "step_7_title": "شحن سريع", "step_7_desc": "توصيل في 24-48 ساعة لكامل تراب الجمهورية التونسية.",
    "step_8_title": "جمع الأموال", "step_8_desc": "تحصيل ثمن السلعة عند التسليم (Cash on Delivery) بكل أمان.",
    "step_9_title": "خلاص التاجر", "step_9_desc": "تحويل فلوسك لحسابك البنكي في J+1 بكل شفافية.",
    "step_10_title": "تحليل وتطوير", "step_10_desc": "نعطيوك أرقام دقيقة باش تعرف شنية السلعة اللي ماشية وتكبر مبيعاتك.",

    // Coverage
    "cve": "التغطية الوطنية", "cvt": "نوصلو لكل بقعة في تونس", 
    "z1": "تونس الكبرى والمدن الكبرى", "z1t": "توصيل في 24 ساعة", "z1d": "تغطية كاملة لتونس، سوسة، وصفاقس مع مراكز فرز ذكية.",
    "z2": "كامل ولايات الجمهورية", "z2t": "توصيل في 24-48 ساعة", "z2d": "شبكة توصيل تغطي الـ 24 ولاية مع تتبع دقيق لكل خطوة.",
    "z3": "المناطق والقرى البعيدة", "z3t": "جدولة منظمة", "z3d": "نوصلو حتى لأبعد نقطة في تونس ببرنامج توصيل واضح ودقيق.",

    // Footer
    "footer_tagline": "لوجستيك ساهلة، بيزنس يكبر بذكاء.",
    "footer_cta": "احكي معانا على واتساب توة",
    "footer_copyright": "© 2024 Logistica Tunisie. جميع الحقوق محفوظة.",
    
    // Stats
    "stats_l1": "كولي حضرناه", "stats_l2": "ولاية مغطاة", "stats_l3": "نسبة التسليم", "stats_l4": "سرعة التحضير",

    // Benefits
    "benefit_time": "اربح وقتك", "benefit_time_desc": "ارتاح من تكسير الراس نتاع اللوجستيك وركز كان في الماركتينغ والمبيعات.",
    "benefit_errors": "صفر أخطاء", "benefit_errors_desc": "نظام رقمي بالباركد يضمن إنو الكليون يوصلو بالضبط شنية كوموندا.",
    "benefit_speed": "احترافية كاملة", "benefit_speed_desc": "كليوناتك باش ينبهرو بالسرعة والتغليف المحترف، وهذا يخليهم يرجعو يشريو.",

    "foot": "© 2024 Logistica Tunisie — خدمتنا تونسية وبكل فخر 🇹🇳"
  },
  fr: {
    // Navigation
    "n0": "Process", "n1": "Nos Services", "n3": "FAQ", "n4": "Démarrer", "n5": "Suivi Colis", "n6": "Couverture", "n7": "Tarifs",
    "nav_services": "Solutions Logistiques", "nav_why": "Pourquoi Logistica", "nav_faq": "FAQ", "nav_signin": "Connexion", "nav_signup": "S'inscrire",
    "nav_leaderboard": "Classement", "nav_commitments": "Engagements",

    // Auth
    "login_title": "Bon retour", "login_subtitle": "Accédez à votre portail marchand et pilotez votre activité", "login_email": "Email professionnel", "login_password": "Mot de passe", "login_forgot": "Mot de passe oublié ?", "login_submit": "Se connecter", "login_no_account": "Pas encore client ?", "login_register": "S'inscrire ici",
    "register_title": "Devenir Partenaire", "register_subtitle": "Rejoignez plus de 500 marchands qui font confiance à notre expertise", "register_name": "Nom et Prénom", "register_shop": "Nom de la boutique", "register_phone": "Téléphone", "register_submit": "Créer mon compte", "register_have_account": "Déjà client ?", "register_login": "Connectez-vous",

    // Hero
    "chip": "N°1 de la Logistique e-commerce en Tunisie 🇹🇳",
    "h1a": "Vendez sereinement…", "h1b": "on s'occupe de tout.",
    "sub": "Logistica réceptionne, stocke, prépare et livre vos commandes. De la réception de votre marchandise au reversement de votre cash, tout est fluide et automatisé.",
    "cta1": "Démarrer l'aventure", "cta2": "Voir notre process",

    // Process Home
    "hwe": "Opérations", "hwt": "Votre colis en 5 étapes", "hws": "Un flux opérationnel maîtrisé pour garantir la satisfaction de vos clients.",
    "h1t": "Commande Reçue", "h1d": "Synchronisation automatique avec votre site ou Marketplace.",
    "h2t": "Stockage Sécurisé", "h2d": "Vos articles sont inventoriés et protégés dans nos hubs 24h/24.",
    "h3t": "Préparation Rapide", "h3d": "Picking et emballage soigné en moins de 2 heures.",
    "h4t": "Livraison Express", "h4d": "Expédition sur les 24 gouvernorats avec un taux de retour minimal.",
    "h5t": "Reversement J+1", "h5d": "Collecte du COD et virement bancaire dès le lendemain de la livraison.",

    // Dashboard Showcase
    "db_title": "Pilotage en temps réel", "db_desc": "Gardez un œil sur vos stocks, vos commandes et votre trésorerie via une interface ultra-moderne.",
    "db_tab1": "Ordres", "db_tab2": "Stocks", "db_tab3": "Finance", "db_tab4": "KPIs",
    "db_kpi1": "Commandes Jour", "db_kpi2": "Taux de Succès", "db_kpi3": "Revenus COD", "db_kpi4": "Alertes Stock",
    "db_feature1": "Tracking Live", "db_feature2": "Gestion Retours", "db_feature3": "Analyses Data",
    "db_chart_title": "Activité Hebdomadaire consolidée",

    // Logistics 10 Steps
    "step_1_title": "Intégration", "step_1_desc": "Connexion API instantanée avec Shopify, WooCommerce ou PrestaShop.",
    "step_2_title": "Réception", "step_2_desc": "Contrôle rigoureux de votre marchandise à son arrivée au hub.",
    "step_3_title": "Entreposage", "step_3_desc": "Mise en stock optimisée pour une préparation ultra-rapide.",
    "step_4_title": "Synchronisation", "step_4_desc": "Remontée automatique des ventes vers notre système de gestion.",
    "step_5_title": "Picking & Packing", "step_5_desc": "Préparation minutieuse et emballage premium protecteur.",
    "step_6_title": "Tri Intelligent", "step_6_desc": "Dispatch vers le hub régional le plus proche du client final.",
    "step_7_title": "Last Mile", "step_7_desc": "Livraison à domicile sur toute la Tunisie en un temps record.",
    "step_8_title": "Encaissement", "step_8_desc": "Collecte sécurisée des paiements (COD) par nos livreurs.",
    "step_9_title": "Reversement", "step_9_desc": "Virement de vos fonds à J+1 avec rapport de paiement détaillé.",
    "step_10_title": "Scalabilité", "step_10_desc": "Analyse de performance pour vous aider à booster votre croissance.",

    // Coverage
    "cve": "Réseau National", "cvt": "Une présence sur tout le territoire", 
    "z1": "Zones Urbaines", "z1t": "Livraison en 24h", "z1d": "Grand Tunis, Sousse et Sfax couverts par nos centres de tri principaux.",
    "z2": "Gouvernorats", "z2t": "Livraison 24h-48h", "z2d": "Réseau structuré couvrant l'intégralité des 24 gouvernorats tunisiens.",
    "z3": "Zones Reculées", "z3t": "Passages réguliers", "z3d": "Nous desservons les localités les plus éloignées avec une régularité exemplaire.",

    // Footer
    "footer_tagline": "La logistique simplifiée pour les e-commerçants ambitieux.",
    "footer_cta": "Contactez-nous sur WhatsApp",
    "footer_copyright": "© 2024 Logistica Tunisie. Tous droits réservés.",
    
    // Stats
    "stats_l1": "Colis préparés", "stats_l2": "Gouvernorats", "stats_l3": "Taux de livraison", "stats_l4": "Temps Picking",

    // Benefits
    "benefit_time": "Gagnez du temps", "benefit_time_desc": "Déléguez l'opérationnel pour vous concentrer sur votre marketing et vos ventes.",
    "benefit_errors": "Zéro Erreur", "benefit_errors_desc": "Un picking digitalisé garantissant une précision de 99.9% sur vos commandes.",
    "benefit_speed": "Image de Marque", "benefit_speed_desc": "Offrez une expérience premium à vos clients grâce à une livraison rapide et soignée.",

    "foot": "© 2024 Logistica Tunisie — Fièrement Tunisien 🇹🇳"
  }
};
