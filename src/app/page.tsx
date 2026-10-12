
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
  Globe,
  Star,
  Network,
  BarChart3,
  Smartphone,
  Check,
  ChevronRight,
  Send,
  MessageCircle,
  PackageOpen,
  Mail,
  Clock,
  AlertTriangle,
  MapPin,
  Calculator,
  HelpCircle,
  LineChart,
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

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
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
            className="fixed inset-0 z-[100] bg-[#07163F] flex flex-col items-center justify-center p-6 text-center"
          >
            <Logo className="h-24 w-auto brightness-0 invert mb-8" />
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-0 bg-[#FF8A1F]"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
            <p className="mt-6 text-white/60 font-medium text-sm tracking-widest uppercase">
              {language === 'ar' ? 'نحضّرولك التجربة...' : 'Préparation de l\'expérience...'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col bg-[#f8f9ff]">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* S3: Hero Section */}
          <section className="relative py-12 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-12">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#FF8A1F]/20 text-[#07163F] font-bold text-xs uppercase tracking-widest shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FF8A1F] animate-pulse" />
                    {language === 'ar' ? 'اللوجستيك متاعك، أوضح وأسهل' : 'Logistique E-commerce · Tunisie'}
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-[#07163F] leading-[1.1] tracking-tight"
                  >
                    {language === 'ar' ? (
                      <>من الكوموند حتى للتوصيل، <span className="text-[#2563EB] relative">كل شي منظّم<svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF8A1F]/40" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
                    ) : (
                      <>Votre logistique, de la commande à la <span className="text-[#2563EB] relative">livraison<svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF8A1F]/40" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
                    )}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-xl text-[#45464d] max-w-2xl leading-relaxed"
                  >
                    {t('hero_subtitle')}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button size="lg" className="bg-[#FF8A1F] hover:bg-[#EE7400] text-white rounded-xl h-16 px-10 text-lg font-bold shadow-xl shadow-[#FF8A1F]/20 transition-all">
                      {t('hero_cta')}
                      <ArrowRight className={cn("ml-2 h-5 w-5", language === 'ar' && "rotate-180")} />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-xl h-16 px-10 text-lg border-2 border-[#07163F] text-[#07163F] font-bold">
                      {t('see_how')}
                    </Button>
                  </motion.div>

                  {/* Tracking Widget */}
                  <div className="mt-8 p-6 rounded-2xl bg-white shadow-xl border border-gray-100 space-y-4 max-w-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#07163F] flex items-center gap-2">
                        <Network className="text-[#FF8A1F] h-5 w-5" />
                        {language === 'ar' ? 'متابعة الطلبية' : 'Module de Traçabilité'}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-grow">
                        <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder={language === 'ar' ? 'رقم التتبع' : 'Numéro de suivi'} 
                          className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-[#FF8A1F]"
                        />
                      </div>
                      <Button className="bg-[#07163F] text-white rounded-xl px-8 h-12">
                        {language === 'ar' ? 'متابعة' : 'Suivre'}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </section>

          {/* S7: Services Grid */}
          <section id="solutions" className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-[#FF8A1F] font-bold uppercase tracking-widest text-sm">{language === 'ar' ? 'نطاق الخدمة' : 'Nos Services'}</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#07163F] mt-4 mb-6 uppercase tracking-tight">
                  {language === 'ar' ? 'كل مرحلة عندها بلاصتها.' : 'Chaque étape à sa place.'}
                </h2>
                <p className="text-lg text-[#45464d] leading-relaxed">
                  {t('hero_subtitle')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: t('service_stock'), desc: t('service_stock_desc'), icon: Warehouse, id: '01' },
                  { title: t('service_prep'), desc: t('service_prep_desc'), icon: Package, id: '02' },
                  { title: language === 'ar' ? 'التغليف' : 'Emballage', desc: language === 'ar' ? 'مرحلة واضحة بين التحضير والإرسال.' : 'Protection renforcée.', icon: Box, id: '03' },
                  { title: t('service_shipping'), desc: t('service_shipping_desc'), icon: Truck, id: '04' },
                  { title: t('service_tracking'), desc: t('service_tracking_desc'), icon: CheckCircle2, id: '05' },
                  { title: t('service_cod'), desc: t('service_cod_desc'), icon: Wallet, id: '06' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-3xl bg-[#f8f9ff] border border-[#07163F]/5 hover:shadow-xl hover:shadow-[#07163F]/5 transition-all duration-300 group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#FF8A1F] group-hover:bg-[#FF8A1F] group-hover:text-white transition-all duration-300">
                        <s.icon className="h-7 w-7" />
                      </div>
                      <span className="text-2xl font-black text-[#07163F]/10">{s.id}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#07163F] mb-3">{s.title}</h3>
                    <p className="text-[#45464d] leading-relaxed mb-6">{s.desc}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                      {language === 'ar' ? 'المزيد' : 'En savoir plus'} <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* ROI Estimator Section */}
          <section id="simulateur" className="py-24 bg-[#07163F] text-white">
            <div className="container mx-auto px-4 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <span className="text-[#FF8A1F] font-bold uppercase tracking-widest text-sm">{language === 'ar' ? 'حساب الأرباح' : 'Estimateur de ROI'}</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 uppercase tracking-tight">
                      {language === 'ar' ? 'احسب قداش تربح وقت وفلوس.' : 'Calculez vos économies mensuelles.'}
                    </h2>
                    <p className="text-white/60 text-lg">
                      {language === 'ar' ? 'قد ما يزيد حجم خدمتك، قد ما تزيد تربح معانا.' : 'Estimez précisément le coût par colis tout inclus.'}
                    </p>
                  </div>

                  <div className="space-y-8 bg-white/5 p-8 rounded-[2rem] border border-white/10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="font-bold text-sm uppercase tracking-widest">{language === 'ar' ? 'عدد الطرود شهرياً' : 'Volume de colis/mois'}</label>
                        <span className="text-[#FF8A1F] font-black text-xl">{volume}</span>
                      </div>
                      <input 
                        type="range" min="50" max="5000" step="50" value={volume} 
                        onChange={(e) => setVolume(parseInt(e.target.value))}
                        className="w-full accent-[#FF8A1F]"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <label className="font-bold text-sm uppercase tracking-widest">{language === 'ar' ? 'معدل الوزن (كغ)' : 'Poids moyen (kg)'}</label>
                        <span className="text-[#FF8A1F] font-black text-xl">{weight}</span>
                      </div>
                      <input 
                        type="range" min="0.5" max="20" step="0.5" value={weight} 
                        onChange={(e) => setWeight(parseFloat(e.target.value))}
                        className="w-full accent-[#FF8A1F]"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 rounded-[3rem] bg-[#FF8A1F] text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#07163F]">{language === 'ar' ? 'التعريفة التقديرية' : 'Estimation Logistica'}</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-6xl md:text-7xl font-black tracking-tighter">{pricePerParcel}</span>
                        <span className="text-2xl font-bold uppercase">DT HT</span>
                      </div>
                      <p className="text-sm font-bold">{language === 'ar' ? 'لكل طرد (شامل كل شيء)' : 'Par colis tout inclus'}</p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-black/10">
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="opacity-80">{language === 'ar' ? 'الوقت المربوح شهرياً' : 'Temps économisé'}</span>
                        <span>{hoursSaved} {language === 'ar' ? 'ساعة' : 'Heures'}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm font-bold">
                        <span className="opacity-80">{language === 'ar' ? 'تراجع نسبة الإرجاع' : 'Baisse du taux de retour'}</span>
                        <span className="text-[#07163F]">-45%</span>
                      </div>
                    </div>

                    <Button className="w-full h-16 bg-[#07163F] hover:bg-black text-white rounded-xl text-lg font-bold">
                      {language === 'ar' ? 'أحصل على عرض مفصل' : 'Recevoir mon devis'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* S19: Contact Section */}
          <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-4 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-20 items-start">
                <div className="space-y-8">
                  <div>
                    <span className="text-[#FF8A1F] font-bold uppercase tracking-widest text-sm">{language === 'ar' ? 'الخطوة الجاية' : 'Prochaine Étape'}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-[#07163F] mt-4 mb-6 leading-tight uppercase tracking-tight">
                      {language === 'ar' ? 'خلّينا نحكيو على مسارك اللوجستي.' : 'Parlons de votre logistique.'}
                    </h2>
                  </div>

                  <div className="grid gap-6">
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#f8f9ff] border border-[#07163F]/5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-emerald-50 text-emerald-500">
                        <MessageCircle className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                        <p className="text-lg font-bold text-[#07163F]">+216 71 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-3xl bg-[#f8f9ff] border border-[#07163F]/5">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-blue-50 text-[#2563EB]">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email</p>
                        <p className="text-lg font-bold text-[#07163F]">contact@logistica.tn</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12 rounded-[3rem] bg-[#07163F] text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 space-y-8">
                    <h3 className="text-2xl font-bold">{language === 'ar' ? 'طلب تواصل' : 'Ouvrir un compte'}</h3>
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div className="space-y-4">
                        <input type="text" placeholder={language === 'ar' ? 'الاسم الكامل' : 'Nom complet'} className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 focus:bg-white/10 focus:outline-none transition-all" />
                        <input type="email" placeholder={language === 'ar' ? 'البريد الإلكترoni' : 'Email'} className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 focus:bg-white/10 focus:outline-none transition-all" />
                        <select className="w-full h-14 bg-white/5 border border-white/10 rounded-xl px-6 focus:bg-white/10 focus:outline-none transition-all appearance-none text-white/40">
                          <option value="">{language === 'ar' ? 'اختار مجال' : 'Choisir un domaine'}</option>
                          <option value="stock">Stockage</option>
                          <option value="shipping">Livraison</option>
                        </select>
                      </div>
                      <Button className="w-full h-16 bg-[#FF8A1F] hover:bg-[#EE7400] text-white rounded-xl text-lg font-bold">
                        {language === 'ar' ? 'إرسال' : 'Envoyer ma demande'}
                        <Send className="ml-2 h-5 w-5" />
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

