"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronRight,
  Send,
  MessageCircle,
  PackageOpen,
  MapPin,
  Clock,
  Headset,
  ShoppingCart,
  BellRing
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { t, language } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  // ROI Estimator Logic
  const [volume, setVolume] = useState(350);
  const [weight, setWeight] = useState(1.5);
  const [pricePerParcel, setPricePerParcel] = useState("7.800");

  useEffect(() => {
    let basePrice = 8.5;
    if (volume >= 200) basePrice = 7.8;
    if (volume >= 1000) basePrice = 6.9;
    if (volume >= 3000) basePrice = 6.2;
    const finalPrice = (basePrice + (weight > 2 ? (weight - 2) * 0.4 : 0)).toFixed(3);
    setPricePerParcel(finalPrice);
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
            <div className="relative mb-8">
               <Logo className="h-20 w-auto brightness-0 invert" />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 1.8, ease: "easeInOut" }}
                 className="absolute -bottom-4 left-0 h-1 bg-secondary rounded-full"
               />
            </div>
            <p className="text-white/60 font-heading font-extrabold text-xs tracking-[0.2em] uppercase">
              {language === 'ar' ? 'نحضّرولك التجربة...' : 'Préparation de l\'expérience...'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
        <Navbar />
        
        <main className="flex-grow pt-24 relative">
          <div className="absolute inset-0 route-line-bg pointer-events-none" />

          {/* Hero Section 55/45 */}
          <section className="relative py-16 lg:py-32">
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-secondary/20 shadow-e1"
                  >
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    <span className="text-primary font-heading font-black text-[10px] uppercase tracking-[0.15em]">
                      {t('hero_subtitle')}
                    </span>
                  </motion.div>

                  <div className="space-y-6">
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                      className="text-5xl md:text-7xl font-heading font-black text-primary leading-[1] tracking-tight uppercase"
                    >
                      {language === 'ar' ? (
                        <>من الكوموند حتى للتوصيل، <span className="text-secondary underline decoration-secondary/30 decoration-8 underline-offset-8">كل شي منظّم</span>.</>
                      ) : (
                        <>Votre logistique, de la commande à la <span className="text-secondary relative">livraison<svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
                      )}
                    </motion.h1>

                    <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
                      Logistica Tunisie accompagne les entreprises dans l'organisation et la gestion de leurs opérations logistiques, de la réception jusqu'à la livraison finale.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button size="lg" className="bg-secondary hover:bg-secondary-container text-white rounded-2xl h-16 px-10 text-lg font-heading font-black shadow-orange transition-all hover:scale-105 active:scale-95 group">
                      {t('hero_cta')}
                      <ArrowRight className={cn("ml-2 h-5 w-5 transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180")} />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-2xl h-16 px-10 text-lg border-2 border-primary text-primary font-heading font-black hover:bg-primary hover:text-white transition-all">
                      {t('see_how')}
                    </Button>
                  </motion.div>

                  {/* Tracking Widget */}
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-6 rounded-[2rem] bg-white shadow-e3 border border-surface-container-high space-y-4 max-w-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-black text-primary flex items-center gap-2 text-xs uppercase tracking-widest">
                        <Network className="text-secondary h-4 w-4" />
                        {t('track_order')}
                      </span>
                      <span className="text-[10px] font-black bg-surface-container-low px-3 py-1 rounded-full text-on-surface-variant uppercase tracking-widest">LIVE DATA</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-outline" />
                        <input 
                          type="text" 
                          placeholder={t('enter_code')} 
                          className="w-full pl-11 pr-4 py-3 bg-surface-container-low rounded-xl text-body-md border-2 border-transparent focus:border-secondary transition-all outline-none"
                        />
                      </div>
                      <Button className="bg-primary text-white rounded-xl px-8 h-12 font-heading font-black uppercase text-xs tracking-widest">
                        {language === 'ar' ? 'متابعة' : 'Suivre'}
                      </Button>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-[4/5] bg-primary-container rounded-[3rem] p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 route-line-bg opacity-10" />
                    
                    <div className="relative z-10 flex items-center justify-between bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-white">
                          <PackageOpen className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="font-heading font-black text-white text-sm">HUB CENTRAL TUNIS</p>
                          <p className="text-white/40 text-[10px] tracking-widest uppercase">Charguia II · Tri Robotisé</p>
                        </div>
                      </div>
                      <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
                    </div>

                    <div className="relative z-10 py-12 flex items-center justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-64 h-64 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center"
                      >
                         <Truck className="h-12 w-12 text-secondary" />
                      </motion.div>
                    </div>

                    <div className="relative z-10 grid grid-cols-2 gap-4">
                      {[
                        { label: "RÉCEPTION", val: "1 240 colis/j", icon: Clock },
                        { label: "PRÉPARATION", val: "< 120 min", icon: Zap },
                        { label: "EXPÉDITION", val: "24h Express", icon: Truck },
                        { label: "REVERSEMENT", val: "J+1 Garanti", icon: Wallet }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                          <p className="text-[9px] font-heading font-black text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="font-heading font-black text-white text-sm">{item.val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="solutions" className="py-24 bg-surface-container-low">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <span className="text-xs font-heading font-black text-secondary uppercase tracking-[0.3em]">Niveau de Service</span>
                <h2 className="text-4xl md:text-5xl font-heading font-black text-primary uppercase leading-tight">
                  Tout ce dont votre business a besoin.
                </h2>
                <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: t('service_stock'), desc: t('service_stock_desc'), icon: Warehouse, id: '01' },
                  { title: t('service_prep'), desc: t('service_prep_desc'), icon: Package, id: '02' },
                  { title: language === 'ar' ? 'التغليف' : 'Emballage', desc: 'Protection renforcée.', icon: Box, id: '03' },
                  { title: t('service_shipping'), desc: t('service_shipping_desc'), icon: Truck, id: '04' },
                  { title: t('service_tracking'), desc: t('service_tracking_desc'), icon: CheckCircle2, id: '05' },
                  { title: t('service_cod'), desc: t('service_cod_desc'), icon: Wallet, id: '06' }
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-[2.5rem] bg-white border border-surface-container-high shadow-e1 hover:shadow-e2 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-12">
                       <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                          <s.icon className="h-7 w-7" />
                       </div>
                       <span className="text-4xl font-heading font-black text-primary/5">{s.id}</span>
                    </div>
                    <h3 className="text-xl font-heading font-black text-primary mb-3 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-on-surface-variant leading-relaxed text-sm font-medium">{s.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow Center */}
          <section id="workflow" className="py-24 bg-white relative overflow-hidden">
             <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                   <div className="space-y-10">
                      <div className="space-y-6">
                         <span className="text-[10px] font-heading font-black text-secondary uppercase tracking-[0.4em]">Operations Center</span>
                         <h2 className="text-5xl md:text-7xl font-heading font-black text-primary leading-tight uppercase">
                            {language === 'ar' ? 'كل شي في يدك.' : 'Le digital au service du réel.'}
                         </h2>
                         <p className="text-xl text-on-surface-variant leading-relaxed font-medium border-l-4 border-secondary pl-6">
                            Une vision centralisée pour piloter vos stocks, vos livraisons et votre cash-flow en toute transparence.
                         </p>
                      </div>
                      
                      <div className="grid gap-6">
                         {[
                           { icon: Zap, label: "Synchronisation Shopify/WooCommerce" },
                           { icon: LineChart, label: "Reporting financier J+1 détaillé" },
                           { icon: BellRing, label: "Alertes stock critique temps réel" }
                         ].map((item, i) => (
                           <div key={i} className="flex items-center gap-4 text-primary font-heading font-black text-sm uppercase tracking-wider">
                              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
                                 <item.icon className="h-5 w-5" />
                              </div>
                              {item.label}
                           </div>
                         ))}
                      </div>

                      <Button size="lg" className="bg-secondary text-white hover:bg-primary rounded-2xl h-20 px-12 text-xl font-heading font-black transition-all">
                        {t('explore_dashboard')}
                      </Button>
                   </div>

                   <div className="relative">
                      <motion.div 
                        initial={{ rotateY: 10, y: 40, opacity: 0 }}
                        whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="rounded-[3rem] bg-slate-900 border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] p-8 space-y-8"
                      >
                         <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <div className="flex gap-2">
                               <div className="w-3 h-3 rounded-full bg-error/50" />
                               <div className="w-3 h-3 rounded-full bg-warning/50" />
                               <div className="w-3 h-3 rounded-full bg-success/50" />
                            </div>
                            <span className="text-[10px] font-heading font-black text-white/30 uppercase tracking-[0.2em]">Logistica Portal v3.5</span>
                         </div>
                         <div className="grid grid-cols-2 gap-6">
                            {[
                              { l: "Ventes", v: "14.2k", c: "text-white" },
                              { l: "Livrées", v: "98.4%", c: "text-success" },
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
                   </div>
                </div>
             </div>
          </section>

          {/* ROI Estimator */}
          <section className="py-24 bg-surface">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                   <div className="space-y-6">
                      <span className="text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Simulateur de Rentabilité</span>
                      <h2 className="text-5xl md:text-6xl font-heading font-black text-primary uppercase leading-tight">
                         Calculez vos gains réels.
                      </h2>
                      <p className="text-xl text-on-surface-variant font-medium">
                        Estimez précisément le coût par colis tout inclus : stockage, préparation, livraison et reversement COD.
                      </p>
                   </div>

                   <div className="space-y-12">
                      <div className="space-y-6">
                         <div className="flex justify-between items-center">
                            <label className="font-heading font-black text-primary uppercase text-sm tracking-widest">Volume de colis/mois</label>
                            <span className="text-3xl font-heading font-black text-secondary tabular-nums">{volume}</span>
                         </div>
                         <input 
                           type="range" min="50" max="5000" step="50" value={volume} 
                           onChange={(e) => setVolume(parseInt(e.target.value))}
                           className="w-full accent-secondary h-2 bg-surface-container-high rounded-full appearance-none cursor-pointer"
                         />
                      </div>
                      <div className="space-y-6">
                         <div className="flex justify-between items-center">
                            <label className="font-heading font-black text-primary uppercase text-sm tracking-widest">Poids moyen (kg)</label>
                            <span className="text-3xl font-heading font-black text-primary tabular-nums">{weight}</span>
                         </div>
                         <input 
                           type="range" min="0.5" max="20" step="0.5" value={weight} 
                           onChange={(e) => setWeight(parseFloat(e.target.value))}
                           className="w-full accent-primary h-2 bg-surface-container-high rounded-full appearance-none cursor-pointer"
                         />
                      </div>
                   </div>
                </div>

                <div className="p-12 md:p-20 rounded-[4rem] bg-primary text-white shadow-2xl relative overflow-hidden">
                   <div className="relative z-10 space-y-12">
                      <div className="space-y-4">
                         <p className="text-[11px] font-heading font-black uppercase tracking-[0.3em] text-white/60">Estimation Logistica</p>
                         <div className="flex items-baseline gap-3">
                            <span className="text-7xl md:text-9xl font-heading font-black tracking-tighter tabular-nums text-secondary-container">{pricePerParcel}</span>
                            <span className="text-3xl font-heading font-black uppercase">DT HT</span>
                         </div>
                         <p className="text-xl font-heading font-black uppercase tracking-widest">Par colis tout inclus</p>
                      </div>

                      <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/20 font-heading font-black text-sm uppercase">
                         <div className="space-y-1">
                            <p className="text-white/40 tracking-widest">Temps économisé</p>
                            <p className="text-2xl">~ 42 Heures</p>
                         </div>
                         <div className="space-y-1">
                            <p className="text-white/40 tracking-widest">Baisse retours</p>
                            <p className="text-2xl text-success">-45%</p>
                         </div>
                      </div>

                      <Button className="w-full h-24 bg-secondary-container hover:bg-white hover:text-primary text-on-secondary rounded-3xl text-2xl font-heading font-black uppercase transition-all shadow-orange">
                         {t('hero_cta')}
                      </Button>
                   </div>
                   
                   <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                </div>
              </div>
            </div>
          </section>

          {/* Contact Multi-step */}
          <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-20">
                  <div className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                      <span className="text-xs font-heading font-black text-secondary uppercase tracking-[0.4em]">Ouvrir un compte</span>
                      <h2 className="text-4xl md:text-6xl font-heading font-black text-primary uppercase leading-tight">
                        Prêt à simplifier votre business ?
                      </h2>
                    </div>

                    <div className="space-y-6">
                      {[
                        { icon: MessageCircle, label: "WhatsApp Support", val: "+216 71 000 000", color: "text-success" },
                        { icon: MapPin, label: "Siège Social", val: "Tunis, Charguia II", color: "text-primary" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-surface-container-low">
                          <div className={cn("w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm", item.color)}>
                             <item.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-[10px] font-heading font-black text-primary/40 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="font-heading font-black text-primary text-sm uppercase">{item.val}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <form className="p-10 md:p-14 rounded-[4rem] bg-surface-container shadow-e3 space-y-10" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                           <label className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Nom Complet</label>
                           <input type="text" placeholder="Karim Trabelsi" className="w-full h-16 bg-white border-2 border-transparent focus:border-secondary rounded-2xl px-6 outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Téléphone</label>
                           <input type="tel" placeholder="+216 -- --- ---" className="w-full h-16 bg-white border-2 border-transparent focus:border-secondary rounded-2xl px-6 outline-none transition-all" />
                        </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Nom de la Boutique</label>
                         <input type="text" placeholder="MonShop.tn" className="w-full h-16 bg-white border-2 border-transparent focus:border-secondary rounded-2xl px-6 outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Message</label>
                         <textarea placeholder="Décrivez votre besoin..." className="w-full h-32 bg-white border-2 border-transparent focus:border-secondary rounded-2xl px-6 py-4 outline-none transition-all resize-none" />
                      </div>
                      <Button className="w-full h-20 bg-primary hover:bg-secondary text-white rounded-3xl text-xl font-heading font-black uppercase transition-all group">
                        {language === 'ar' ? 'إرسال الطلب' : 'Envoyer ma demande'}
                        <Send className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </form>
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
