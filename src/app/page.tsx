
"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Package, Warehouse, Truck, 
  RefreshCcw, Headset, CheckCircle2, ChevronDown, Wallet, Box,
  LineChart, Network, GitFork, XCircle, Store, Bike, BellRing,
  HelpCircle, ShieldCheck, Zap, Globe, Star, Mail, Phone, MessageCircle, MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { HeroIllustration } from "@/components/home/hero-illustration";

export default function HomePage() {
  const { t, language } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-6">
        <Logo className="h-16" />
        <div className="loader-track"><span></span></div>
        <p className="text-sm font-medium text-primary/60">
          {language === 'ar' ? 'نحضّرولك التجربة...' : 'Préparation de l\'expérience...'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* S3: Hero Section (55/45) */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 reveal space-y-8">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  <span className="uppercase tracking-[0.2em] font-bold text-[11px]">
                    {language === 'ar' ? 'اللوجستيك متاعك، أوضح وأسهل' : 'Logistique E-commerce · Tunisie'}
                  </span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight uppercase">
                  {language === 'ar' ? (
                    <>من الكوموند حتى للتوصيل، <span className="text-secondary-container underline decoration-secondary-container/30">كل شي منظّم</span> وبكل سهولة.</>
                  ) : (
                    <>De la commande à la livraison, <span className="text-secondary-container underline decoration-secondary-container/30">tout est fluide</span>.</>
                  )}
                </h1>
                <p className="text-lg lg:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
                  {t('hero_lead')}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="btn-primary text-lg h-16 px-10 rounded-full bg-secondary-container text-white font-bold shadow-orange hover:bg-secondary transition-all">
                    {t('hero_cta_demo')}
                    <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                  </Button>
                  <Button variant="outline" className="h-16 px-10 rounded-full border-2 border-primary font-bold text-lg text-primary hover:bg-surface-container">
                    {t('hero_cta_see_how')}
                  </Button>
                </div>

                {/* Tracking Widget */}
                <div className="max-w-2xl mt-12 p-6 rounded-3xl bg-white shadow-e3 border border-surface-container-high/60">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-on-surface text-sm flex items-center gap-2 uppercase tracking-widest">
                      <Zap className="h-4 w-4 text-secondary-container" />
                      {language === 'ar' ? 'تتبع الطلبية في الوقت الفعلي' : 'Suivi en temps réel'}
                    </span>
                    <span className="text-[10px] font-black bg-surface-container px-2.5 py-1 rounded text-outline uppercase tracking-widest">
                      DEMO
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-outline" />
                      <input 
                        type="text" 
                        placeholder={language === 'ar' ? 'رقم التتبع' : 'Numéro de suivi'} 
                        className="w-full pl-11 pr-4 py-3.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                      />
                    </div>
                    <Button className="bg-primary hover:bg-on-surface text-on-primary rounded-xl h-auto py-3.5 px-8 font-black uppercase text-xs tracking-widest shadow-sm">
                      {language === 'ar' ? 'تتبع' : 'Suivre'}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hero Visual: Isometric Scene */}
              <div className="lg:col-span-5 reveal reveal-delay-1 relative">
                <div className="bg-primary rounded-[48px] p-1 shadow-2xl relative group overflow-hidden border border-white/10">
                  <HeroIllustration />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S4: Trust Strip */}
        <section className="bg-white border-y border-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr,1.6fr] gap-20 items-center">
              <div className="reveal">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-secondary mb-6">
                  {language === 'ar' ? 'شركاء النجاح' : 'Ils nous font confiance'}
                </p>
                <div className="flex gap-8 overflow-hidden opacity-40 grayscale">
                   <div className="font-bold text-xl uppercase tracking-tighter">Merchant.TN</div>
                   <div className="font-bold text-xl uppercase tracking-tighter">E-Shop.DZ</div>
                   <div className="font-bold text-xl uppercase tracking-tighter">BioStyle</div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                  { l: language === 'ar' ? 'كوموندات' : 'Commandes', v: '50 000+', c: 'text-primary' },
                  { l: language === 'ar' ? 'نسبة النجاح' : 'Taux de succès', v: '98%', c: 'text-secondary-container' },
                  { l: language === 'ar' ? 'تغطية' : 'Couverture', v: '24/24', c: 'text-primary' },
                  { l: language === 'ar' ? 'سرعة' : 'Délai', v: '< 2h', c: 'text-secondary-container' },
                ].map((s, i) => (
                  <div key={i} className="reveal text-center lg:text-left">
                    <p className={cn("text-3xl font-black mb-1", s.c)}>{s.v}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* S7: Services Grid */}
        <section className="py-24 bg-surface-container-low/30" id="solutions">
          <div className="container mx-auto px-4">
            <div className="section-heading reveal mb-16 max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                <span className="uppercase tracking-[0.2em] font-bold text-[11px]">{t('solutions_eyebrow')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 uppercase tracking-tight">{t('solutions_title')}</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">{t('solutions_lead')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: t('service_stock'), desc: t('service_stock_desc'), icon: Warehouse, id: '01' },
                { title: t('service_prep'), desc: t('service_prep_desc'), icon: Package, id: '02' },
                { title: language === 'ar' ? 'التغليف' : 'Emballage', desc: language === 'ar' ? 'مرحلة واضحة بين التحضير والإرسال.' : 'Protection renforcée.', icon: Box, id: '03' },
                { title: t('service_shipping'), desc: t('service_shipping_desc'), icon: Truck, id: '04' },
                { title: t('service_tracking'), desc: t('service_tracking_desc'), icon: CheckCircle2, id: '05' },
                { title: t('service_cod'), desc: t('service_cod_desc'), icon: Wallet, id: '06' },
              ].map((s, i) => (
                <div key={i} className="reveal p-8 rounded-3xl bg-white shadow-sm border border-transparent hover:border-secondary-container/20 transition-all hover:shadow-xl group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-container/5 flex items-center justify-center text-secondary-container mb-6 group-hover:scale-110 transition-transform">
                    <s.icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10px] font-black text-secondary-container mb-2">{s.id}</div>
                  <h3 className="text-xl font-bold text-on-surface mb-3 uppercase tracking-tight">{s.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S9: Dashboard Showcase */}
        <section className="py-24 bg-primary-container text-white overflow-hidden relative" id="dashboard">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2 reveal space-y-8">
                <div className="eyebrow bg-white/10">
                  <span className="eyebrow-dot bg-secondary-container"></span>
                  <span className="text-secondary-container font-bold uppercase tracking-widest">{t('dashboard_eyebrow')}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold uppercase leading-tight">
                  {t('dashboard_title')}
                </h2>
                <p className="text-primary-fixed-dim text-lg leading-relaxed">
                  {t('dashboard_lead')}
                </p>
                <div className="space-y-4">
                  {[t('dashboard_point1'), t('dashboard_point2'), t('dashboard_point3')].map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary-container" />
                      <span className="font-bold text-sm">{p}</span>
                    </div>
                  ))}
                </div>
                <Button className="btn-primary h-16 px-10 w-full lg:w-auto bg-secondary-container text-white rounded-full font-bold">
                  {t('try_dashboard')}
                  <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                </Button>
              </div>

              <div className="lg:col-span-3 reveal reveal-delay-1 relative">
                <div className="bg-slate-900 rounded-[32px] p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Logistica Portal v3.4</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">{language === 'ar' ? 'الكوموندات' : 'Commandes'}</span>
                      <p className="text-3xl font-black">124</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">{language === 'ar' ? 'في التحضير' : 'Préparation'}</span>
                      <p className="text-3xl font-black text-secondary-container">18</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">{language === 'ar' ? 'الأداء الأسبوعي' : 'Performance Hebdo'}</span>
                    <div className="h-32 w-full flex items-end gap-2">
                       {[40, 65, 52, 85, 45, 95, 70].map((h, i) => (
                         <div key={i} className="flex-1 bg-secondary-container/20 rounded-t-lg relative group overflow-hidden">
                            <motion.div 
                              initial={{ height: 0 }}
                              whileInView={{ height: `${h}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="absolute bottom-0 left-0 right-0 bg-secondary-container rounded-t-lg"
                            />
                         </div>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S20: Contact Form (Multi-step) */}
        <section className="py-24 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="reveal space-y-8">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  <span className="uppercase tracking-[0.2em] font-bold text-[11px]">{t('nav_contact')}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface uppercase leading-tight">
                  {t('contact_title')}
                </h2>
                <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
                  {t('contact_lead')}
                </p>
                <div className="grid gap-6">
                  {[
                    { icon: Mail, label: 'Email', val: 'contact@logistica.tn' },
                    { icon: Phone, label: 'Téléphone', val: '+216 71 000 000' },
                    { icon: MessageCircle, label: 'WhatsApp', val: '+216 20 000 000' },
                  ].map((info, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-surface-container-low border border-surface-container shadow-sm">
                       <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-secondary shadow-sm">
                          <info.icon className="h-5 w-5" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{info.label}</p>
                          <p className="text-sm font-bold text-primary">{info.val}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal reveal-delay-1 bg-white p-8 lg:p-12 rounded-[40px] border border-surface-container shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{t('full_name')}</label>
                    <input className="w-full h-14 bg-surface-container-low/50 rounded-2xl px-6 border-transparent focus:border-secondary-container focus:ring-0 transition-all font-medium" placeholder="Ex. Mohamed Ben Salem" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{t('company_name')}</label>
                    <input className="w-full h-14 bg-surface-container-low/50 rounded-2xl px-6 border-transparent focus:border-secondary-container focus:ring-0 transition-all font-medium" placeholder="Logistica Tunisie" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{t('email_address')}</label>
                    <input type="email" className="w-full h-14 bg-surface-container-low/50 rounded-2xl px-6 border-transparent focus:border-secondary-container focus:ring-0 transition-all font-medium" placeholder="nom@entreprise.tn" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{t('main_need')}</label>
                    <div className="relative">
                      <select className="w-full h-14 bg-surface-container-low/50 rounded-2xl px-6 border-transparent focus:border-secondary-container focus:ring-0 transition-all font-medium appearance-none">
                        <option value="">{language === 'ar' ? 'اختار مجال' : 'Choisir un domaine'}</option>
                        <option value="orders">{t('service_prep')}</option>
                        <option value="stock">{t('service_stock')}</option>
                        <option value="delivery">{t('service_shipping')}</option>
                      </select>
                      <ChevronDown className="absolute right-6 rtl:left-6 rtl:right-auto top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                  <Button className="btn-primary w-full text-lg h-16 bg-secondary-container text-white rounded-full font-bold shadow-orange">
                    {t('send_request')}
                    <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
