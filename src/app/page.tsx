"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Search, Truck, Network, Radar,
  GitFork, XCircle, CheckCircle2, Wallet, Warehouse, Handshake,
  Zap, Package2, Headset, ArrowLeftRight, LineChart,
  Store, Bike, CheckCircle, ShieldCheck,
  Receipt, BellRing, ShoppingBag, Coins, Globe, Megaphone,
  Code, Star, Building2, ChevronDown, Send, ArrowRight, ArrowRightLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/home/hero-illustration";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [volume, setVolume] = useState(350);
  const [weight, setWeight] = useState(1.5);
  const [hoursSaved, setHoursSaved] = useState(42);
  const [pricePerParcel, setPricePerParcel] = useState("7.800");
  const [selectedGov, setSelectedGov] = useState("tunis");

  useEffect(() => {
    // ROI Calculation
    let basePrice = 8.5;
    if (volume >= 200) basePrice = 7.8;
    if (volume >= 1000) basePrice = 6.9;
    if (volume >= 3000) basePrice = 6.2;

    const finalPrice = (basePrice + (weight > 2 ? (weight - 2) * 0.4 : 0)).toFixed(3);
    setPricePerParcel(finalPrice);
    setHoursSaved(Math.round(volume * 0.12));

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [volume, weight]);

  const govSlas: Record<string, { name: string, delay: string, hub: string }> = {
    tunis: { name: "Grand Tunis", delay: "24h", hub: "Charguia II" },
    sousse: { name: "Sahel (Sousse / Monastir / Mahdia)", delay: "24h - 48h", hub: "Akouda Nord" },
    sfax: { name: "Sfax", delay: "24h - 48h", hub: "Route de Gabès" },
    nabeul: { name: "Nabeul & Cap Bon", delay: "48h", hub: "Charguia II" },
    bizerte: { name: "Bizerte", delay: "48h", hub: "Charguia II" },
  };

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <motion.div className="fixed top-0 left-0 right-0 h-[3px] bg-secondary-container origin-left z-[2000]" style={{ scaleX }} />
      
      <Navbar />
      
      <main className="flex-grow pt-20" id="main">
        {/* S1: Top Announcement Bar */}
        <div className="w-full bg-primary-container text-white py-2.5 px-4 text-sm relative z-40 shadow-sm overflow-hidden">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex relative flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-secondary-container absolute inset-0"></span>
              </span>
              <p className="truncate font-semibold uppercase tracking-wider">
                <span className="text-secondary-fixed">Nouveau :</span> Suivi des colis en temps réel pour tous nos clients actifs
              </p>
            </div>
            <a href="#tracking-widget" className="text-secondary-fixed hover:text-white transition-colors flex items-center gap-1 shrink-0 text-xs font-black uppercase tracking-widest">
              Suivre une expédition <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* S3: Hero Section (55/45 split) */}
        <section className="w-full py-12 lg:py-20 relative overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-bold text-xs shadow-sm uppercase tracking-widest"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                  Logistique E-commerce · Tunisie
                </motion.div>
                
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl lg:text-7xl font-heading font-extrabold text-on-surface leading-[1.1] tracking-tight uppercase"
                  >
                    Votre logistique e-commerce, <br/>
                    <span className="relative inline-block">
                      de la commande à la livraison
                      <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 300 12">
                        <path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeLinecap="round" strokeWidth="5"></path>
                      </svg>
                    </span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg lg:text-xl text-on-surface-variant max-w-xl font-medium leading-relaxed"
                  >
                    Stockage ultra-sécurisé, préparation de commande sous 2h, expédition express sur les 24 gouvernorats et versement garanti des encaissements COD à J+1.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Button className="btn-primary text-lg h-16 px-10 uppercase tracking-widest">Demander un devis immédiat</Button>
                  <Button variant="outline" className="btn-secondary h-16 px-10 uppercase tracking-widest">Voir nos 10 étapes</Button>
                </motion.div>
                
                {/* Tracking Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 rounded-3xl bg-white shadow-xl space-y-4 border border-surface-container" id="tracking-widget"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-surface flex items-center gap-2 uppercase tracking-widest text-sm">
                      <Radar className="h-5 w-5 text-secondary-container" />
                      Module de Traçabilité en Direct
                    </span>
                    <span className="text-[10px] font-black bg-surface-container px-2.5 py-1 rounded text-on-surface-variant uppercase tracking-widest">
                      [Données de démonstration]
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3.5 top-3.5 text-on-surface-variant h-5 w-5" />
                      <input className="w-full pl-11 pr-4 py-3.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container uppercase tracking-wider" placeholder="Numéro de bordereau (ex: TN-84920-LOG)" type="text" />
                    </div>
                    <Button className="bg-primary-container hover:bg-black text-white rounded-xl h-auto py-3.5 px-8 font-black uppercase text-xs tracking-widest">Suivre</Button>
                  </div>
                </motion.div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="bg-primary-container rounded-[48px] p-1 shadow-2xl relative group overflow-hidden">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S4: Trust Strip */}
        <section className="bg-white border-y border-surface-container py-12">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
             <div className="flex flex-col lg:flex-row items-center gap-12">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">Ils nous font confiance</p>
                <div className="flex flex-wrap items-center justify-between w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  {['COSMÉTIQUE.TN', 'MODA_SFAX', 'TECHPARK_TUNIS', 'BIO_CARTHAGE', 'PARFUMS_SAHEL'].map(logo => (
                    <span key={logo} className="text-2xl font-black tracking-tighter text-on-surface">{logo}</span>
                  ))}
                </div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-surface-container">
                {[
                  { l: "Commandes traitées", v: "50 000+", c: "text-on-surface" },
                  { l: "Livraisons réussies", v: "98.4%", c: "text-secondary" },
                  { l: "Gouvernorats couverts", v: "24 / 24", c: "text-on-surface" },
                  { l: "Préparation moyenne", v: "< 120 min", c: "text-secondary" }
                ].map((stat, i) => (
                  <div key={i} className="text-center space-y-1 reveal">
                    <span className={`text-4xl font-heading font-extrabold uppercase ${stat.c}`}>{stat.v}</span>
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{stat.l}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* S5: Transformation Section */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="eyebrow">Transformation Opérationnelle</span>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-on-surface mb-6 uppercase">Gérer vos livraisons ne devrait pas prendre tout votre temps</h2>
              <p className="text-lg text-on-surface-variant font-medium">Passez du chaos des colis perdus et des relances d’impayés à une exécution fluide, traçable et automatisée.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 reveal">
              <div className="p-10 rounded-[40px] bg-surface-container-low space-y-8 shadow-sm">
                <h3 className="text-2xl font-bold text-error flex items-center gap-3 uppercase tracking-tight">
                  <XCircle className="h-7 w-7" />
                  Sans Logistica
                </h3>
                <ul className="space-y-6">
                  {['Emballage tardif le soir après le travail', 'Multiplication de transporteurs disparates', 'Encaissements COD bloqués pendant des semaines', 'Taux de retour souvent supérieur à 25%'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-on-surface-variant font-medium">
                      <span className="text-error font-bold mt-1">✕</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-10 rounded-[40px] bg-white shadow-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-container/5 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold text-on-surface flex items-center gap-3 uppercase tracking-tight">
                  <CheckCircle2 className="h-7 w-7 text-secondary-container" />
                  Avec Logistica Tunisie
                </h3>
                <ul className="space-y-6">
                  {['Stock synchronisé en temps réel', 'Tableau de bord unique connecté à votre CMS', 'Reversement COD sous J+1 par virement', 'Confirmation client systématique'].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-on-surface font-bold">
                      <span className="text-secondary-container font-bold mt-1">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* S6: 10 Steps Grid */}
        <section className="py-24 bg-surface-container-lowest" id="steps">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
              <div className="max-w-2xl space-y-4">
                <span className="eyebrow">Notre Méthodologie</span>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-on-surface uppercase">Nos 10 étapes logistiques intégrées</h2>
                <p className="text-lg text-on-surface-variant font-medium">Un processus standardisé, automatisé et traçable de bout en bout.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Intégration', 'Stockage', 'Distribution', 'Trésorerie'].map((p, i) => (
                  <span key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${i === 2 ? 'bg-secondary-container text-on-secondary' : 'bg-surface-container text-on-surface-variant'}`}>{p}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { i: Network, k: "step_1_title", d: "step_1_desc", t: "J-0" },
                { i: Warehouse, k: "step_2_title", d: "step_2_desc", t: "Réception" },
                { i: GitFork, k: "step_3_title", d: "step_3_desc", t: "Entreposage" },
                { i: ShoppingBag, k: "step_4_title", d: "step_4_desc", t: "Automatique" },
                { i: Package2, k: "step_5_title", d: "step_5_desc", t: "< 2h" },
                { i: Network, k: "step_6_title", d: "step_6_desc", t: "Tri Hub" },
                { i: Truck, k: "step_7_title", d: "step_7_desc", t: "24h / 48h" },
                { i: Wallet, k: "step_8_title", d: "step_8_desc", t: "En espèces" },
                { i: CheckCircle, k: "step_9_title", d: "step_9_desc", t: "J+1" },
                { i: LineChart, k: "step_10_title", d: "step_10_desc", t: "Pilotage" }
              ].map((step, i) => (
                <div key={i} className="p-6 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-all group border border-transparent hover:border-secondary-container/20 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center group-hover:bg-secondary transition-colors">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                    <span className="text-[10px] font-black text-secondary tracking-widest uppercase">{step.t}</span>
                  </div>
                  <step.i className="h-7 w-7 text-secondary-container mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <h4 className="text-on-surface font-bold uppercase tracking-tight text-lg mb-2 truncate">Étape {i+1}</h4>
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed">Description de l'étape logistique pour votre e-commerce.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S13: ROI Estimator */}
        <section className="py-24 bg-surface" id="simulateur">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="eyebrow">Simulateur & Rentabilité</span>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold mb-6 uppercase">Calculez vos économies mensuelles</h2>
              <p className="text-lg text-on-surface-variant font-medium">Estimez précisément le coût par colis tout inclus (stockage, préparation, livraison et COD).</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 p-10 rounded-[40px] bg-white shadow-md space-y-12 reveal">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase tracking-widest text-on-surface">Volume mensuel de colis</label>
                    <span className="text-2xl font-black text-secondary-container">{volume} colis</span>
                  </div>
                  <input type="range" min="50" max="5000" step="50" value={volume} onChange={(e) => setVolume(parseInt(e.target.value))} className="w-full accent-secondary-container" />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase tracking-widest text-on-surface">Poids moyen par colis</label>
                    <span className="text-2xl font-black text-on-surface">{weight} kg</span>
                  </div>
                  <input type="range" min="0.2" max="15" step="0.1" value={weight} onChange={(e) => setWeight(parseFloat(e.target.value))} className="w-full accent-secondary-container" />
                </div>
              </div>

              <div className="lg:col-span-5 p-10 rounded-[40px] bg-primary-container text-white shadow-2xl space-y-10 reveal relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-fixed">Estimation Logistica Tunisie</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-7xl font-heading font-extrabold text-secondary-fixed tracking-tighter">{pricePerParcel}</span>
                    <span className="text-2xl font-bold uppercase">DT HT</span>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-white/10">
                   {[
                     { l: "Temps économisé par mois", v: `${hoursSaved} heures`, c: "text-white" },
                     { l: "Baisse du taux de retour", v: "- 45 %", c: "text-emerald-400" },
                     { l: "Délai versement COD", v: "J+1 Garanti", c: "text-secondary-fixed" }
                   ].map((stat, i) => (
                     <div key={i} className="flex justify-between items-center text-sm">
                        <span className="opacity-60 uppercase font-black tracking-widest text-[10px]">{stat.l}</span>
                        <span className={`font-bold ${stat.c}`}>{stat.v}</span>
                     </div>
                   ))}
                </div>
                <Button className="btn-primary w-full h-16 text-lg uppercase tracking-widest">Recevoir mon devis détaillé</Button>
              </div>
            </div>
          </div>
        </section>

        {/* S12: Coverage Section */}
        <section className="py-24 bg-surface-container-lowest" id="couverture">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8 reveal">
                <span className="eyebrow">Réseau Territorial</span>
                <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-on-surface uppercase leading-tight">Couverture totale des 24 gouvernorats</h2>
                <p className="text-lg text-on-surface-variant font-medium">Grâce à nos 3 hubs stratégiques, nous garantissons un délai prédictible partout en Tunisie.</p>
                
                <div className="p-6 rounded-3xl bg-surface-container-low space-y-4 shadow-sm border border-surface-container">
                  <h3 className="font-bold text-on-surface uppercase tracking-widest text-sm">Vérifier le délai pour une ville</h3>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 text-outline h-5 w-5" />
                    <select 
                      value={selectedGov}
                      onChange={(e) => setSelectedGov(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl font-bold text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container appearance-none"
                    >
                      <option value="tunis">Grand Tunis</option>
                      <option value="sousse">Sahel (Sousse / Monastir / Mahdia)</option>
                      <option value="sfax">Sfax (Ville & Région)</option>
                      <option value="nord">Nord & Cap Bon</option>
                      <option value="sud">Sud & Intérieur</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-outline h-5 w-5 pointer-events-none" />
                  </div>
                  <div className="p-4 rounded-xl bg-white border-l-4 border-secondary-container space-y-1">
                    <span className="font-black text-on-surface block uppercase text-xs">{govSlas[selectedGov]?.name || "Région"}</span>
                    <p className="text-sm text-on-surface-variant font-medium">
                      Délai moyen : <strong className="text-secondary">{govSlas[selectedGov]?.delay || "24h-48h"}</strong> · Hub : <strong>{govSlas[selectedGov]?.hub || "Tunis"}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 reveal">
                <div className="aspect-video bg-primary-container rounded-[40px] shadow-2xl flex items-center justify-center p-8 relative overflow-hidden group">
                  <Globe className="w-64 h-64 text-secondary-container opacity-20 absolute -right-20 -bottom-20 rotate-12 transition-transform group-hover:scale-110 duration-700" />
                  <div className="relative z-10 text-center space-y-4">
                    <div className="w-20 h-20 bg-secondary-container rounded-3xl flex items-center justify-center text-white mx-auto shadow-orange animate-bounce">
                      <Network className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-white uppercase">Carte interactive en cours de déploiement</h3>
                    <p className="text-primary-fixed-dim font-medium max-w-sm">Nos hubs de Tunis, Sousse et Sfax sont opérationnels 24/7.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S19: Contact Section */}
        <section className="py-24 bg-white" id="contact">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 p-10 rounded-[40px] bg-surface-container-low shadow-sm space-y-8 reveal">
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading font-extrabold uppercase">Ouvrir votre compte marchand</h3>
                  <p className="text-on-surface-variant font-medium">Réponse garantie sous 2h ouvrées.</p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder="Nom & Prénom" />
                    <input className="px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder="Téléphone / WhatsApp" />
                  </div>
                  <input className="w-full px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder="Nom de la boutique" />
                  <textarea className="w-full px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none min-h-[120px] font-bold text-sm" placeholder="Votre message ou besoins spécifiques..."></textarea>
                  <Button className="btn-primary w-full h-16 text-xl uppercase tracking-widest">Envoyer ma demande</Button>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6 reveal">
                <div className="p-8 rounded-[32px] bg-primary-container text-white space-y-6 relative overflow-hidden">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary-fixed">Contact Direct</span>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110"><MessageCircle className="h-6 w-6 text-emerald-400" /></div>
                      <div><p className="text-xs opacity-60 uppercase font-black tracking-widest">WhatsApp Support</p><p className="text-xl font-bold">+216 71 000 000</p></div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110"><Send className="h-6 w-6 text-blue-400" /></div>
                      <div><p className="text-xs opacity-60 uppercase font-black tracking-widest">Email</p><p className="text-xl font-bold">contact@logistica.tn</p></div>
                    </div>
                  </div>
                </div>
                <div className="p-8 rounded-[32px] bg-white border border-surface-container space-y-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-surface uppercase tracking-widest text-sm">Horaires Opérationnels</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <p className="text-on-surface-variant text-sm font-medium">Lundi – Samedi : 08h00 – 19h00<br/>Départs navettes quotidiennes : 19h30</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
