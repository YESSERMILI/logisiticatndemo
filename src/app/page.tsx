
"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Search, Truck, Network, Radar,
  GitFork, XCircle, CheckCircle2, Wallet, Warehouse, Handshake,
  Zap, Package2, Headset, LineChart, Landmark, Inbox, Layers,
  Store, Bike, CheckCircle, ShieldCheck,
  BellRing, ShoppingBag, Coins, Globe, Megaphone,
  Code, Star, Building2, ChevronDown, Send, ArrowRight, ArrowRightLeft,
  MousePointer2, Clock, Split, FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/home/hero-illustration";
import { useTranslation } from "@/hooks/use-translation";

export default function HomePage() {
  const { t, language } = useTranslation();
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

    // Reveal animations
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
        {/* S1: Announcement Bar */}
        <div className="w-full bg-primary-container text-on-primary py-2.5 px-4 text-body-sm relative z-40 shadow-sm overflow-hidden">
          <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="inline-flex relative flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span className="w-2 h-2 rounded-full bg-secondary-container absolute inset-0"></span>
              </span>
              <p className="truncate font-bold uppercase tracking-wider text-[11px]">
                <span className="text-secondary-fixed">Nouveau :</span> {t('announcement_text')}
              </p>
            </div>
            <a href="#tracking-widget" className="text-secondary-fixed hover:text-white transition-colors flex items-center gap-1 shrink-0 text-[10px] font-black uppercase tracking-widest">
              Suivre une expédition <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* S3: Hero Section (Signature 55/45) */}
        <section className="w-full py-12 lg:py-24 relative overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="eyebrow"
                >
                  <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse mr-2"></span>
                  {t('hero_eyebrow')}
                </motion.div>
                
                <div className="space-y-4">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-heading font-extrabold uppercase leading-[1.1] tracking-tight text-on-surface"
                  >
                    {t('hero_title').split('livraison.')[0]}
                    <span className="relative inline-block text-on-surface">
                      livraison.
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
                    {t('hero_subtitle')}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest"
                  >
                    <Network className="h-4 w-4" />
                    {t('hero_purpose')}
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Button className="btn-primary text-lg h-16 px-10 uppercase tracking-widest">{t('hero_cta_primary')}</Button>
                  <Button variant="outline" className="btn-secondary h-16 px-10 uppercase tracking-widest">{t('hero_cta_secondary')}</Button>
                </motion.div>
                
                {/* Tracking Widget */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="p-6 rounded-3xl bg-white shadow-xl space-y-4 border border-surface-container relative" id="tracking-widget"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-on-surface flex items-center gap-2 uppercase tracking-widest text-sm">
                      <Radar className="h-5 w-5 text-secondary-container" />
                      Module de Traçabilité en Direct
                    </span>
                    <span className="text-[10px] font-black bg-surface-container px-2.5 py-1 rounded text-on-surface-variant uppercase tracking-widest">
                      [Simulation Live]
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3.5 top-3.5 text-on-surface-variant h-5 w-5" />
                      <input className="w-full pl-11 pr-4 py-3.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container uppercase tracking-wider" placeholder={t('hero_track_placeholder')} type="text" />
                    </div>
                    <Button className="bg-primary-container hover:bg-black text-white rounded-xl h-auto py-3.5 px-8 font-black uppercase text-xs tracking-widest">{t('hero_track_btn')}</Button>
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
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant whitespace-nowrap">{t('trust_title')}</p>
                <div className="flex gap-16 overflow-hidden relative opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                  {['COSMÉTIQUE.TN', 'MODA_SFAX', 'TECHPARK_TUNIS', 'BIO_CARTHAGE', 'PARFUMS_SAHEL'].map(logo => (
                    <span key={logo} className="text-2xl font-black tracking-tighter text-on-surface">{logo}</span>
                  ))}
                </div>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-surface-container">
                {[
                  { l: t('trust_orders'), v: "50 000+", c: "text-on-surface" },
                  { l: t('trust_success'), v: "98.4%", c: "text-secondary" },
                  { l: t('trust_coverage'), v: "24 / 24", c: "text-on-surface" },
                  { l: t('trust_speed'), v: "< 120 min", c: "text-secondary" }
                ].map((stat, i) => (
                  <div key={i} className="text-center space-y-1 reveal">
                    <span className={`text-4xl font-heading font-extrabold uppercase ${stat.c}`}>{stat.v}</span>
                    <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{stat.l}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* S7: Nos 10 Étapes Logistiques (Rebuilt Grid) */}
        <section className="py-24 bg-surface-container-lowest" id="steps">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="eyebrow">{t('steps_eyebrow')}</span>
              <h2 className="font-heading font-extrabold text-on-surface mb-4 uppercase">{t('steps_title')}</h2>
              <p className="text-lg text-on-surface-variant font-medium mb-4">{t('steps_purpose')}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[t('phase_integration'), t('phase_logistics'), t('phase_delivery'), t('phase_support')].map((p, i) => (
                  <span key={i} className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${i === 2 ? 'bg-secondary-container text-on-secondary' : 'bg-surface-container text-on-surface-variant'}`}>{p}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => (
                <div key={num} className="p-6 rounded-3xl bg-surface-container-low hover:bg-surface-container transition-all group border border-transparent hover:border-secondary-container/20 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center group-hover:bg-secondary transition-colors">{num < 10 ? `0${num}` : num}</span>
                  </div>
                  <h4 className="text-on-surface font-bold uppercase tracking-tight text-lg mb-2">{t(`step_${num}_title` as any)}</h4>
                  <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{t(`step_${num}_desc` as any)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S13: ROI Estimator (New Dynamic Sliders) */}
        <section className="py-24 bg-surface" id="simulateur">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="eyebrow">{t('pricing_purpose')}</span>
              <h2 className="font-heading font-extrabold text-on-surface mb-6 uppercase">{t('pricing_title')}</h2>
              <p className="text-lg text-on-surface-variant font-medium">Estimez précisément le coût par colis tout inclus (stockage, préparation, livraison et COD).</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 p-10 rounded-[40px] bg-white shadow-md space-y-12 reveal">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase tracking-widest text-on-surface">{t('pricing_orders')}</label>
                    <span className="text-2xl font-black text-secondary-container">{volume} colis</span>
                  </div>
                  <input type="range" min="50" max="5000" step="50" value={volume} onChange={(e) => setVolume(parseInt(e.target.value))} className="w-full accent-secondary-container" />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-black uppercase tracking-widest text-on-surface">{t('pricing_weight')}</label>
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
                <Button className="btn-primary w-full h-16 text-lg uppercase tracking-widest">{t('pricing_cta')}</Button>
              </div>
            </div>
          </div>
        </section>

        {/* S12: Coverage Section (New Interactive Design) */}
        <section className="py-24 bg-surface-container-lowest" id="couverture">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8 reveal">
                <span className="eyebrow">{t('coverage_purpose')}</span>
                <h2 className="font-heading font-extrabold text-on-surface uppercase leading-tight">{t('coverage_title')}</h2>
                <p className="text-lg text-on-surface-variant font-medium">{t('coverage_subtitle')}</p>
                
                <div className="p-6 rounded-3xl bg-surface-container-low space-y-4 shadow-sm border border-surface-container">
                  <h3 className="font-bold text-on-surface uppercase tracking-widest text-sm">{t('coverage_search')}</h3>
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
                      <option value="nabeul">Nord & Cap Bon</option>
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

        {/* S19: Contact Section (Multi-step optimization) */}
        <section className="py-24 bg-white" id="contact">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 p-10 rounded-[40px] bg-surface-container-low shadow-sm space-y-8 reveal">
                <div className="space-y-2">
                  <h3 className="text-3xl font-heading font-extrabold uppercase">{t('contact_title')}</h3>
                  <p className="text-on-surface-variant font-medium">{t('contact_subtitle')}</p>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <input className="px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder={t('contact_form_name')} />
                    <input className="px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder={t('contact_form_phone')} />
                  </div>
                  <input className="w-full px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none font-bold text-sm" placeholder={t('contact_form_shop')} />
                  <textarea className="w-full px-6 py-4 bg-white rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-secondary-container outline-none min-h-[120px] font-bold text-sm" placeholder={t('contact_form_message')}></textarea>
                  <Button className="btn-primary w-full h-16 text-xl uppercase tracking-widest">Envoyer ma demande</Button>
                </div>
              </div>
              <div className="lg:col-span-5 space-y-6 reveal">
                <div className="p-8 rounded-[32px] bg-primary-container text-white space-y-6 relative overflow-hidden">
                  <span className="text-[10px] font-black uppercase tracking-widest text-secondary-fixed">Contact Direct</span>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110"><MessageCircle className="h-6 w-6 text-emerald-400" /></div>
                      <div><p className="text-xs opacity-60 uppercase font-black tracking-widest">{t('contact_info_whatsapp')}</p><p className="text-xl font-bold">+216 71 000 000</p></div>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center transition-transform group-hover:scale-110"><Send className="h-6 w-6 text-blue-400" /></div>
                      <div><p className="text-xs opacity-60 uppercase font-black tracking-widest">{t('contact_info_email')}</p><p className="text-xl font-bold">contact@logistica.tn</p></div>
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
