
"use client";

import { useEffect, useState, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Search, 
  Box, 
  Truck, 
  Warehouse, 
  Package, 
  CheckCircle2, 
  Wallet, 
  RefreshCw, 
  ArrowRight,
  Shield,
  Zap,
  Star,
  Network,
  LineChart,
  Smartphone,
  Check,
  ChevronDown,
  Send,
  MessageCircle,
  PackageOpen,
  Mail,
  Clock,
  AlertTriangle,
  MapPin,
  Calculator,
  HelpCircle,
  Layers,
  ShoppingCart,
  BellRing,
  Bike,
  Headset,
  Store,
  XCircle,
  GitFork
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { HeroIllustration } from "@/components/home/hero-illustration";

export default function HomePage() {
  const { t, language } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // ROI Estimator Logic
  const [volume, setVolume] = useState(350);
  const [weight, setWeight] = useState(1.5);
  const [pricePerParcel, setPricePerParcel] = useState("7.800");
  const [hoursSaved, setHoursSaved] = useState(42);

  useEffect(() => {
    let basePrice = 8.5;
    if (volume >= 200) basePrice = 7.8;
    if (volume >= 1000) basePrice = 6.9;
    if (volume >= 3000) basePrice = 6.2;
    const finalPrice = (basePrice + (weight > 2 ? (weight - 2) * 0.4 : 0)).toFixed(3);
    setPricePerParcel(finalPrice);
    setHoursSaved(Math.round(volume * 0.12));
  }, [volume, weight]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="relative mb-12">
               <Logo className="h-24 w-auto brightness-0 invert" />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.8, ease: "easeInOut" }}
                 className="absolute -bottom-4 left-0 h-1 bg-secondary rounded-full"
               />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 font-heading font-extrabold text-sm tracking-[0.2em] uppercase"
            >
              {language === 'ar' ? 'نحضّرولك التجربة...' : 'Préparation de l\'expérience...'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col bg-background selection:bg-secondary/20 overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow pt-20 relative">
          <div className="absolute inset-0 route-line-bg pointer-events-none" />

          {/* S1: Hero Section 55/45 */}
          <section className="relative py-16 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-12 relative z-10">
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 space-y-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-secondary/20 text-primary font-heading font-black text-[10px] uppercase tracking-[0.15em] shadow-e1"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    {language === 'ar' ? 'اللوجستيك متاعك، أوضح وأسهل' : 'Logistique E-commerce · Tunisie'}
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                      className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-primary leading-[1] tracking-tight uppercase"
                    >
                      {language === 'ar' ? (
                        <>من الكوموند حتى للتوصيل، <span className="text-secondary relative">كل شي منظّم<svg className="absolute -bottom-4 left-0 w-full h-4 text-secondary/30" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
                      ) : (
                        <>Votre logistique, de la commande à la <span className="text-secondary relative">livraison<svg className="absolute -bottom-4 left-0 w-full h-4 text-secondary/30" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
                      )}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed"
                    >
                      {t('hero_subtitle')}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6"
                  >
                    <Button size="lg" className="bg-secondary hover:bg-secondary-container text-white rounded-2xl h-20 px-12 text-xl font-heading font-black shadow-orange transition-all hover:scale-105 active:scale-95 group">
                      {t('hero_cta')}
                      <ArrowRight className={cn("ml-3 h-6 w-6 transition-transform group-hover:translate-x-2", language === 'ar' && "rotate-180")} />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl h-20 px-12 text-xl border-2 border-primary text-primary font-heading font-black hover:bg-primary hover:text-white transition-all">
                      {t('see_how')}
                    </Button>
                  </motion.div>

                  {/* Tracking Widget */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-8 rounded-[2rem] bg-white shadow-e3 border border-surface-container-high space-y-6 max-w-2xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-black text-primary flex items-center gap-3 text-sm uppercase tracking-widest">
                        <Network className="text-secondary h-5 w-5" />
                        {language === 'ar' ? 'متابعة الطلبية' : 'Module de Traçabilité'}
                      </span>
                      <span className="text-[10px] font-black bg-surface-container-low px-3 py-1 rounded-full text-on-surface-variant uppercase tracking-widest">LIVE DATA</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-grow">
                        <Search className="absolute left-4 top-4 h-6 w-6 text-outline" />
                        <input 
                          type="text" 
                          placeholder={language === 'ar' ? 'رقم التتبع' : 'Numéro de suivi'} 
                          className="w-full pl-12 pr-6 py-4 bg-surface-container-lowest rounded-2xl text-lg border-2 border-transparent focus:border-secondary transition-all outline-none"
                        />
                      </div>
                      <Button className="bg-primary text-white rounded-2xl px-10 h-14 font-heading font-black uppercase text-sm tracking-widest">
                        {language === 'ar' ? 'متابعة' : 'Suivre'}
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-5 relative lg:block">
                  <HeroIllustration />
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tertiary/5 rounded-full blur-[160px] pointer-events-none" />
          </section>

          {/* S2: Trust & Numbers */}
          <section className="py-20 bg-white border-y border-surface-container">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-4 space-y-2">
                   <p className="text-[10px] font-heading font-black text-secondary uppercase tracking-[0.3em]">
                      {language === 'ar' ? 'ثقة ومصداقية' : 'Confiance & Preuve'}
                   </p>
                   <h2 className="text-3xl font-heading font-black text-primary uppercase">Ils nous font confiance.</h2>
                </div>
                <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { val: "50k+", label: t('trust_orders') },
                    { val: "98%", label: t('trust_success') },
                    { val: "24", label: t('trust_coverage') },
                    { val: "< 2h", label: t('trust_speed') },
                  ].map((stat, i) => (
                    <div key={stat.label} className="space-y-1 border-l-2 border-surface-container pl-6">
                      <p className="text-4xl font-heading font-black text-primary tabular-nums">{stat.val}</p>
                      <p className="text-[10px] font-heading font-black text-on-surface-variant uppercase tracking-widest">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* S3: 10 Logistics Steps (Pinned Narrative) */}
          <section id="workflow" className="py-32 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[160px] opacity-20" />
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto mb-24 space-y-6">
                <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-secondary-fixed-dim font-heading font-black text-[10px] uppercase tracking-[0.25em]">
                  Notre Méthodologie
                </span>
                <h2 className="text-5xl md:text-7xl font-heading font-black leading-tight uppercase tracking-tight">
                   {language === 'ar' ? '10 مراحل باش خدمتك تولي أسهل.' : 'Nos 10 étapes logistiques intégrées.'}
                </h2>
                <div className="w-24 h-2 bg-secondary mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((step) => (
                  <motion.div
                    key={step}
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-secondary/30 transition-all group relative overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-12">
                       <span className="text-4xl font-heading font-black text-white/10 group-hover:text-secondary/40 transition-colors">{step < 10 ? `0${step}` : step}</span>
                       <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                          <CheckCircle2 className="h-6 w-6" />
                       </div>
                    </div>
                    <h3 className="text-lg font-heading font-black mb-3 uppercase tracking-wide">
                      {t(`step_${step}_title` as any)}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">
                      {t(`step_${step}_desc` as any)}
                    </p>
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* S4: Services Bento Grid */}
          <section id="solutions" className="py-32 bg-surface">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                <div className="max-w-2xl space-y-6">
                   <p className="text-xs font-heading font-black text-secondary uppercase tracking-[0.3em]">Catalogue d'Offres</p>
                   <h2 className="text-5xl md:text-6xl font-heading font-black text-primary uppercase leading-[1.1]">
                     {language === 'ar' ? 'كل ما تحتاجه في بلاصة واحدة.' : 'Tout ce dont votre boutique a besoin.'}
                   </h2>
                </div>
                <p className="text-lg text-on-surface-variant max-w-sm font-medium border-l-4 border-secondary pl-6">
                  {language === 'ar' ? 'حلول ذكية مصممة خصيصاً للسوق التونسية.' : 'Un seul partenaire au lieu de cinq prestataires.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[280px]">
                {/* Bento 1: Stockage */}
                <div className="md:col-span-7 md:row-span-2 p-10 rounded-[3rem] bg-white shadow-e3 border border-surface-container-high flex flex-col justify-between group hover:border-secondary transition-all">
                  <div className="w-20 h-20 rounded-[2rem] bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Warehouse className="h-10 w-10" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-heading font-black text-primary uppercase">{t('service_stock')}</h3>
                    <p className="text-xl text-on-surface-variant leading-relaxed">{t('service_stock_desc')}</p>
                    <div className="flex gap-4 pt-4">
                      {['Tunis', 'Sousse', 'Sfax'].map(h => (
                        <span key={h} className="px-5 py-2 rounded-full bg-surface-container-low text-xs font-heading font-black uppercase tracking-widest">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bento 2: Preparation */}
                <div className="md:col-span-5 md:row-span-1 p-8 rounded-[2.5rem] bg-primary text-white flex flex-col justify-between group relative overflow-hidden">
                   <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary mb-6">
                        <Package className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-heading font-black uppercase">{t('service_prep')}</h3>
                   </div>
                   <p className="text-white/60 relative z-10">{t('service_prep_desc')}</p>
                   <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:scale-125 transition-transform duration-700">
                      <Package className="w-48 h-48" />
                   </div>
                </div>

                {/* Bento 3: Shipping */}
                <div className="md:col-span-5 md:row-span-1 p-8 rounded-[2.5rem] bg-secondary text-white flex flex-col justify-between group overflow-hidden">
                   <div className="flex justify-between items-start relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                        <Truck className="h-7 w-7" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/20 text-[10px] font-heading font-black uppercase tracking-widest">24h Express</span>
                   </div>
                   <div className="space-y-2 relative z-10">
                      <h3 className="text-2xl font-heading font-black uppercase">{t('service_shipping')}</h3>
                      <p className="text-white/80">{t('service_shipping_desc')}</p>
                   </div>
                   <motion.div 
                     animate={{ x: [-100, 300] }}
                     transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     className="absolute bottom-4 left-0 opacity-10"
                   >
                     <Truck className="w-32 h-32" />
                   </motion.div>
                </div>

                {/* Bento 4: COD J+1 */}
                <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white border border-surface-container-high flex flex-col justify-between group">
                   <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Wallet className="h-7 w-7" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-black text-primary uppercase">COD Garanti J+1</h3>
                      <p className="text-sm text-on-surface-variant font-medium">Liquidité immédiate pour votre business.</p>
                   </div>
                </div>

                {/* Bento 5: Tracking */}
                <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white border border-surface-container-high flex flex-col justify-between group">
                   <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Smartphone className="h-7 w-7" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-black text-primary uppercase">{t('service_tracking')}</h3>
                      <p className="text-sm text-on-surface-variant font-medium">Visibilité totale en temps réel.</p>
                   </div>
                </div>

                {/* Bento 6: Support */}
                <div className="md:col-span-4 p-8 rounded-[2.5rem] bg-white border border-surface-container-high flex flex-col justify-between group">
                   <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Headset className="h-7 w-7" />
                   </div>
                   <div className="space-y-2">
                      <h3 className="text-2xl font-heading font-black text-primary uppercase">Support WhatsApp</h3>
                      <p className="text-sm text-on-surface-variant font-medium">Un conseiller dédié pour vos réclamations.</p>
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* S5: Dashboard Control Center */}
          <section id="dashboard" className="py-32 bg-primary-container relative overflow-hidden">
             <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="space-y-10">
                      <div className="space-y-6">
                         <span className="text-[10px] font-heading font-black text-secondary uppercase tracking-[0.4em]">Control Center</span>
                         <h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight uppercase">
                            {language === 'ar' ? 'كل شي في يدك.' : 'Pilotez tout depuis un écran.'}
                         </h2>
                         <p className="text-xl text-primary-fixed-dim leading-relaxed">
                            {t('dashboard_overview')} Une interface moderne pour suivre vos ventes, vos stocks et vos reversements COD en toute transparence.
                         </p>
                      </div>
                      
                      <ul className="space-y-6">
                         {[
                           { icon: Check, label: "Synchronisation automatique Shopify/WooCommerce" },
                           { icon: Check, label: "Reporting financier détaillé téléchargeable" },
                           { icon: Check, label: "Alertes de stock critique en temps réel" }
                         ].map((item, i) => (
                           <li key={i} className="flex items-center gap-4 text-white font-heading font-black text-sm uppercase tracking-wider">
                              <div className="w-8 h-8 rounded-xl bg-secondary flex items-center justify-center">
                                 <item.icon className="h-4 w-4" />
                              </div>
                              {item.label}
                           </li>
                         ))}
                      </ul>

                      <Button size="lg" className="bg-white text-primary hover:bg-secondary hover:text-white rounded-2xl h-20 px-12 text-xl font-heading font-black transition-all">
                        {t('try_dashboard')}
                      </Button>
                   </div>

                   <div className="relative">
                      <motion.div 
                        initial={{ rotateY: 10, y: 40, opacity: 0 }}
                        whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="rounded-[3rem] bg-slate-900 border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] p-8 space-y-8"
                      >
                         <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <div className="flex gap-2">
                               <div className="w-3 h-3 rounded-full bg-red-500/50" />
                               <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                               <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em]">Logistica Dashboard v3.5</span>
                         </div>
                         <div className="grid grid-cols-2 gap-6">
                            {[
                              { l: "Ventes", v: "14.2k", c: "text-white" },
                              { l: "Livrées", v: "98.4%", c: "text-emerald-400" },
                              { l: "En transit", v: "42", c: "text-secondary" },
                              { l: "COD J+1", v: "8.4k DT", c: "text-white" }
                            ].map(k => (
                              <div key={k.l} className="p-6 rounded-3xl bg-white/5 border border-white/5">
                                 <p className="text-[10px] font-heading font-black text-white/40 uppercase tracking-widest mb-2">{k.l}</p>
                                 <p className={cn("text-3xl font-heading font-black tabular-nums", k.c)}>{k.v}</p>
                              </div>
                            ))}
                         </div>
                         <div className="h-40 w-full bg-white/5 rounded-3xl border border-white/5 p-6 overflow-hidden">
                            <motion.div 
                              animate={{ scale: [1, 1.02, 1] }}
                              transition={{ duration: 4, repeat: Infinity }}
                              className="h-full w-full relative"
                            >
                               <svg className="w-full h-full" viewBox="0 0 400 100">
                                  <path d="M0 80 Q50 60 100 70 T200 30 T300 50 T400 10" fill="none" stroke="#FF8A1F" strokeWidth="4" strokeLinecap="round" />
                               </svg>
                            </motion.div>
                         </div>
                      </motion.div>
                      <div className="absolute -bottom-10 -left-10 p-6 rounded-3xl glassmorphic shadow-2xl border-white/20 hidden lg:block">
                         <p className="text-[10px] font-heading font-black text-primary/40 uppercase tracking-widest mb-1">Mise à jour</p>
                         <p className="text-xl font-heading font-black text-primary">Il y a 2 min</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          {/* S6: ROI Estimator */}
          <section id="simulateur" className="py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12">
                   <div className="space-y-6">
                      <span className="text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Simulateur de Rentabilité</span>
                      <h2 className="text-5xl md:text-6xl font-heading font-black text-primary uppercase leading-tight">
                         {language === 'ar' ? 'احسب أرباحك في ثواني.' : 'Estimez vos gains en 20 secondes.'}
                      </h2>
                      <p className="text-xl text-on-surface-variant">
                        Découvrez comment Logistica peut optimiser vos coûts opérationnels et booster votre trésorerie.
                      </p>
                   </div>

                   <div className="space-y-12">
                      <div className="space-y-6">
                         <div className="flex justify-between items-center">
                            <label className="font-heading font-black text-primary uppercase text-sm tracking-widest">{language === 'ar' ? 'عدد الطرود شهرياً' : 'Volume de colis/mois'}</label>
                            <span className="text-3xl font-heading font-black text-secondary tabular-nums">{volume}</span>
                         </div>
                         <input 
                           type="range" min="50" max="5000" step="50" value={volume} 
                           onChange={(e) => setVolume(parseInt(e.target.value))}
                           className="w-full accent-secondary h-2 bg-surface-container rounded-full appearance-none cursor-pointer"
                         />
                      </div>
                      <div className="space-y-6">
                         <div className="flex justify-between items-center">
                            <label className="font-heading font-black text-primary uppercase text-sm tracking-widest">{language === 'ar' ? 'معدل الوزن (كغ)' : 'Poids moyen (kg)'}</label>
                            <span className="text-3xl font-heading font-black text-primary tabular-nums">{weight}</span>
                         </div>
                         <input 
                           type="range" min="0.5" max="20" step="0.5" value={weight} 
                           onChange={(e) => setWeight(parseFloat(e.target.value))}
                           className="w-full accent-primary h-2 bg-surface-container rounded-full appearance-none cursor-pointer"
                         />
                      </div>
                   </div>
                </div>

                <div className="p-12 md:p-20 rounded-[4rem] bg-secondary text-white shadow-orange relative overflow-hidden">
                   <div className="relative z-10 space-y-12">
                      <div className="space-y-4">
                         <p className="text-[11px] font-heading font-black uppercase tracking-[0.3em] text-white/60">Estimation Logistica</p>
                         <div className="flex items-baseline gap-3">
                            <span className="text-7xl md:text-9xl font-heading font-black tracking-tighter tabular-nums">{pricePerParcel}</span>
                            <span className="text-3xl font-heading font-black uppercase">DT HT</span>
                         </div>
                         <p className="text-xl font-heading font-black uppercase tracking-widest">{language === 'ar' ? 'لكل طرد (شامل كل شيء)' : 'Par colis tout inclus'}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/20">
                         <div className="space-y-1">
                            <p className="text-[10px] font-heading font-black uppercase text-white/50 tracking-widest">{language === 'ar' ? 'الوقت المربوح' : 'Temps économisé'}</p>
                            <p className="text-2xl font-heading font-black uppercase">{hoursSaved} {language === 'ar' ? 'ساعة' : 'Heures'}</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-[10px] font-heading font-black uppercase text-white/50 tracking-widest">{language === 'ar' ? 'تراجع الإرجاع' : 'Baisse retours'}</p>
                            <p className="text-2xl font-heading font-black uppercase text-primary">-45%</p>
                         </div>
                      </div>

                      <Button className="w-full h-24 bg-primary hover:bg-primary-container text-white rounded-3xl text-2xl font-heading font-black uppercase transition-all shadow-2xl">
                         {language === 'ar' ? 'أحصل على عرض مفصل' : 'Obtenir mon devis'}
                      </Button>
                   </div>
                   
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                </div>
              </div>
            </div>
          </section>

          {/* S7: Contact Section Multi-Step */}
          <section id="contact" className="py-32 bg-surface">
            <div className="container mx-auto px-4 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-24 items-start">
                <div className="lg:col-span-5 space-y-12">
                   <div className="space-y-6">
                      <span className="text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Prochaine Étape</span>
                      <h2 className="text-5xl md:text-7xl font-heading font-black text-primary uppercase leading-tight tracking-tight">
                         {language === 'ar' ? 'خلّينا نحكيو على مسارك اللوجستي.' : 'Prêt à simplifier votre business ?'}
                      </h2>
                   </div>

                   <div className="grid gap-6">
                      {[
                        { icon: MessageCircle, label: "WhatsApp", val: "+216 71 000 000", color: "text-emerald-500", bg: "bg-emerald-50" },
                        { icon: Mail, label: "Email", val: "contact@logistica.tn", color: "text-blue-500", bg: "bg-blue-50" },
                        { icon: MapPin, label: "Siège", val: "Tunis, Charguia II", color: "text-primary", bg: "bg-surface-container" }
                      ].map(item => (
                        <div key={item.label} className="flex items-center gap-8 p-8 rounded-[2rem] bg-white border border-surface-container-high shadow-e1 hover:shadow-e2 transition-all">
                           <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0", item.bg, item.color)}>
                              <item.icon className="h-8 w-8" />
                           </div>
                           <div>
                              <p className="text-[10px] font-heading font-black text-on-surface-variant uppercase tracking-[0.2em] mb-1">{item.label}</p>
                              <p className="text-xl font-heading font-black text-primary uppercase">{item.val}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="lg:col-span-7">
                   <div className="p-10 md:p-16 rounded-[4rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                      <div className="relative z-10 space-y-12">
                         <div className="flex justify-between items-center">
                            <h3 className="text-3xl font-heading font-black uppercase">{language === 'ar' ? 'طلب تواصل' : 'Ouvrir un compte'}</h3>
                            <div className="flex gap-2">
                               <div className="h-1.5 w-12 rounded-full bg-secondary" />
                               <div className="h-1.5 w-12 rounded-full bg-white/10" />
                               <div className="h-1.5 w-12 rounded-full bg-white/10" />
                            </div>
                         </div>

                         <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-8">
                               <div className="space-y-3">
                                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white/40">Nom Complet</label>
                                  <input type="text" placeholder="Karim Trabelsi" className="w-full h-20 bg-white/5 border-2 border-white/5 rounded-3xl px-8 text-lg focus:border-secondary outline-none transition-all placeholder:text-white/20" />
                               </div>
                               <div className="space-y-3">
                                  <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white/40">Téléphone</label>
                                  <input type="tel" placeholder="+216 -- --- ---" className="w-full h-20 bg-white/5 border-2 border-white/5 rounded-3xl px-8 text-lg focus:border-secondary outline-none transition-all placeholder:text-white/20" />
                               </div>
                            </div>
                            <div className="space-y-3">
                               <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white/40">Nom de la Boutique</label>
                               <input type="text" placeholder="MonShop.tn" className="w-full h-20 bg-white/5 border-2 border-white/5 rounded-3xl px-8 text-lg focus:border-secondary outline-none transition-all placeholder:text-white/20" />
                            </div>
                            <div className="space-y-3">
                               <label className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white/40">Volume de Colis Estimé</label>
                               <select className="w-full h-20 bg-white/5 border-2 border-white/5 rounded-3xl px-8 text-lg focus:border-secondary outline-none transition-all appearance-none">
                                  <option value="">Sélectionnez votre volume</option>
                                  <option value="1">100 - 500 colis</option>
                                  <option value="2">500 - 1500 colis</option>
                                  <option value="3">1500+ colis</option>
                               </select>
                            </div>
                            <Button className="w-full h-24 bg-secondary hover:bg-secondary-container text-white rounded-[2rem] text-2xl font-heading font-black uppercase transition-all shadow-orange group">
                               {language === 'ar' ? 'إرسال الطلب' : 'Envoyer ma demande'}
                               <Send className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
                            </Button>
                         </form>
                         <p className="text-center text-sm text-white/40 font-medium">Réponse garantie sous 2 heures ouvrées.</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

