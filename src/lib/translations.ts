export type Language = "fr" | "ar" | "en";

export const translations = {
  fr: {
    // Header & Global
    nav_services: "SERVICES",
    nav_how_it_works: "COMMENT ÇA MARCHE",
    nav_dashboard: "TABLEAU DE BORD",
    nav_coverage: "COUVERTURE",
    nav_rates: "TARIFS",
    nav_faq: "FAQ",
    nav_contact: "CONTACT",
    nav_quote: "DEMANDER UN DEVIS",
    nav_track: "SUIVRE UN COLIS",
    
    // Announcement Bar
    announcement_text: "NOUVEAU : SUIVI DES COLIS EN TEMPS RÉEL POUR TOUS NOS CLIENTS →",

    // Purpose Lines
    hero_purpose: "Notre mission : que chaque commande arrive à l'heure, et que chaque dinar vous revienne.",
    mission_purpose: "Pourquoi c'est important : Libérer votre énergie pour votre croissance.",
    steps_purpose: "Pourquoi c'est important : La transparence totale sur chaque colis.",
    services_purpose: "Pourquoi c'est important : Un seul partenaire au lieu de cinq prestataires.",
    dashboard_purpose: "Pourquoi c'est important : Prenez des décisions basées sur des données réelles.",
    cod_purpose: "Pourquoi c'est important : Chaque dinar est suivi jusqu'à votre compte.",
    integrations_purpose: "Pourquoi c'est important : Pas besoin de changer vos outils actuels.",
    coverage_purpose: "Pourquoi c'est important : Ne refusez plus jamais une vente par manque de livraison.",
    pricing_purpose: "Pourquoi c'est important : La clarté sur vos coûts dès le premier jour.",

    // Hero
    hero_eyebrow: "LOGISTIQUE E-COMMERCE · TUNISIE",
    hero_title: "VOTRE LOGISTIQUE E-COMMERCE, DE LA COMMANDE À LA LIVRAISON.",
    hero_subtitle: "Réception, stockage, préparation, expédition, paiement à la livraison et retours : nous gérons chaque étape pour vous.",
    hero_cta_primary: "DEMANDER UN DEVIS",
    hero_cta_secondary: "VOIR NOS 10 ÉTAPES",
    hero_trust: "DÉJÀ UTILISÉ PAR +50 BOUTIQUES [À CONFIRMER]",
    hero_track_placeholder: "NUMÉRO DE SUIVI",
    hero_track_btn: "SUIVRE",

    // Sections
    mission_title: "NOTRE MISSION",
    mission_h2: "LIBÉRER LES E-COMMERÇANTS TUNISIENS DE LA LOGISTIQUE.",
    mission_desc: "Derrière chaque commande, il y a un colis à préparer, une livraison à suivre, de l'argent à encaisser. Nous prenons tout cela en charge pour que vous gardiez votre énergie pour votre marque.",
    mission_pill1: "SIMPLE",
    mission_pill2: "FIABLE",
    mission_pill3: "FIÈREMENT TUNISIEN",

    // Trust Strip
    trust_title: "ILS NOUS FONT CONFIANCE",
    trust_orders: "COMMANDES TRAITÉES",
    trust_success: "LIVRAISONS RÉUSSIES",
    trust_coverage: "GOUVERNORATS COUVERTS",
    trust_speed: "DÉLAI MOYEN PRÉPARATION",

    // Steps
    steps_eyebrow: "NOTRE MÉTHODOLOGIE",
    steps_title: "NOS 10 ÉTAPES LOGISTIQUES",
    phase_integration: "INTÉGRATION",
    phase_logistics: "LOGISTIQUE",
    phase_delivery: "LIVRAISON & PAIEMENT",
    phase_support: "PILOTAGE & SUPPORT",
    
    step_1_title: "Intégration boutique",
    step_1_desc: "Connexion de votre site Shopify, WooCommerce, etc. à notre système.",
    step_2_title: "Réception du stock",
    step_2_desc: "Vérification en rayon et mise en entrepôt.",
    step_3_title: "Préparation des commandes",
    step_3_desc: "Collecte précise des articles d'une commande.",
    step_4_title: "Emballage et étiquetage",
    step_4_desc: "Protection du colis et impression des bordereaux.",
    step_5_title: "Expédition",
    step_5_desc: "Remise au transporteur partenaire.",
    step_6_title: "Suivi de livraison",
    step_6_desc: "Mise à jour automatique du statut pour vous et vos clients.",
    step_7_title: "Paiement à la livraison COD",
    step_7_desc: "Encaissement sécurisé du montant chez le client.",
    step_8_title: "Retours et échanges",
    step_8_desc: "Gestion rapide des retours avec contrôle qualité.",
    step_9_title: "Support client",
    step_9_desc: "Assistance dédiée pour résoudre les incidents de livraison.",
    step_10_title: "Tableau de bord",
    step_10_desc: "Analyse de vos performances et suivi de vos revenus.",

    // Services
    services_title: "TOUT CE DONT VOTRE BOUTIQUE A BESOIN",
    service_stock: "STOCKAGE SÉCURISÉ",
    service_prep: "PRÉPARATION & EMBALLAGE",
    service_shipping: "EXPÉDITION PARTOUT EN TUNISIE",
    service_cod: "PAIEMENT À LA LIVRAISON",
    service_returns: "RETOURS & ÉCHANGES",
    service_whatsapp: "SUPPORT WHATSAPP",
    service_learn_more: "EN SAVOIR PLUS",

    // Dashboard
    dashboard_title: "PILOTEZ VOS OPÉRATIONS DEPUIS UN SEUL TABLEAU DE BORD",
    dashboard_subtitle: "Stocks, livraisons et flux financiers en toute simplicité.",
    dashboard_tab_orders: "COMMANDES",
    dashboard_tab_stock: "STOCKS",
    dashboard_tab_cod: "ENCAISSEMENTS COD",
    dashboard_tab_kpi: "PERFORMANCE",
    dashboard_kpi_1: "COMMANDES DU JOUR",
    dashboard_kpi_2: "TAUX DE LIVRAISON",
    dashboard_kpi_3: "RETOURS",
    dashboard_kpi_4: "MONTANT COD",

    // Coverage
    coverage_title: "COUVERTURE GÉOGRAPHIQUE",
    coverage_subtitle: "Nous livrons dans tous les gouvernorats de Tunisie [À CONFIRMER]",
    coverage_search: "Entrez votre ville...",
    coverage_zone_24: "Zone 24h",
    coverage_zone_48: "Zone 48h",
    coverage_zone_72: "Zone 72h",

    // Pricing
    pricing_title: "ESTIMEZ LE COÛT DE VOTRE LOGISTIQUE",
    pricing_orders: "Commandes par mois",
    pricing_weight: "Poids moyen",
    pricing_cod_share: "Part de paiement COD",
    pricing_result: "Estimation mensuelle",
    pricing_cta: "Recevoir mon devis détaillé",

    // FAQ
    faq_eyebrow: "AIDE & SUPPORT",
    faq_title: "QUESTIONS FRÉQUENTES",
    faq_whatsapp_btn: "NOUS ÉCRIRE SUR WHATSAPP",

    // Contact
    contact_title: "PRÊT À SIMPLIFIER VOTRE LOGISTIQUE ?",
    contact_subtitle: "Parlez-nous de votre boutique. Nous vous répondons rapidement.",
    contact_form_name: "NOM COMPLET *",
    contact_form_phone: "TÉLÉPHONE *",
    contact_form_email: "EMAIL",
    contact_form_shop: "NOM DE LA BOUTIQUE",
    contact_form_type: "TYPE DE PRODUITS",
    contact_form_volume: "COMMANDES PAR MOIS",
    contact_form_message: "VOTRE MESSAGE",
    contact_form_consent: "J'accepte que mes données soient utilisées pour le traitement de ma demande.",
    contact_success_title: "DEMANDE ENVOYÉE !",
    contact_success_desc: "Merci ! Notre équipe commerciale vous contactera sous 24h.",

    // Footer
    footer_newsletter: "RECEVEZ NOS CONSEILS LOGISTIQUE",
    footer_tagline: "De la commande à la livraison, tout simplement.",
    footer_rights: "TOUS DROITS RÉSERVÉS.",
    footer_tunisian: "FIÈREMENT TUNISIEN",
  },
  ar: {
    nav_services: "الخدمات",
    nav_how_it_works: "كيف نعمل",
    nav_dashboard: "لوحة التحكم",
    nav_coverage: "التغطية",
    nav_rates: "الأسعار",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "اتصل بنا",
    nav_quote: "اطلب عرض سعر",
    nav_track: "تتبع طردك",
    hero_title: "لوجستيات التجارة الإلكترونية الخاصة بك، من الطلب إلى التوصيل.",
    footer_tagline: "من الطلب إلى التوصيل، بكل بساطة.",
    footer_tunisian: "بكل فخر تونسي",
  },
  en: {
    nav_services: "SERVICES",
    nav_how_it_works: "HOW IT WORKS",
    nav_dashboard: "DASHBOARD",
    nav_coverage: "COVERAGE",
    nav_rates: "PRICING",
    nav_faq: "FAQ",
    nav_contact: "CONTACT",
    nav_quote: "GET A QUOTE",
    nav_track: "TRACK A PARCEL",
    hero_title: "YOUR E-COMMERCE LOGISTICS, FROM ORDER TO DELIVERY.",
    footer_tagline: "From order to delivery, simply.",
    footer_tunisian: "Proudly Tunisian",
  }
};
