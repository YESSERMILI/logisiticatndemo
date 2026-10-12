
"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Package, Warehouse, Truck, 
  RefreshCcw, Headset, CheckCircle2, ChevronDown, Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

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
        <p className="text-sm font-medium text-primary/60">{language === 'ar' ? 'نحضّرولك التجربة...' : 'Préparation de l\'expérience...'}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden" dir={language === "ar" ? "rtl" : "ltr"}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* S3: Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-surface to-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal space-y-8">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  <span>{t('hero_eyebrow')}</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-on-surface leading-tight tracking-tight uppercase">
                  {language === 'ar' ? (
                    <>من الكوموند حتى للتوصيل، <span className="text-secondary-container">كل شي منظّم</span> وبكل سهولة.</>
                  ) : (
                    <>De la commande à la livraison, <span className="text-secondary-container">tout est fluide</span>.</>
                  )}
                </h1>
                <p className="text-lg lg:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl">
                  {t('hero_lead')}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button className="btn-primary text-lg h-16 px-10">
                    {t('hero_cta_demo')}
                    <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                  </Button>
                  <Button variant="outline" className="h-16 px-10 rounded-full border-2 font-bold text-lg">
                    {t('hero_cta_see_how')}
                  </Button>
                </div>
                <div className="flex items-center gap-3 pt-4 text-sm text-on-surface-variant">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">✓</span>
                  <span>{t('hero_proof')}</span>
                  <span className="w-1 h-1 rounded-full bg-surface-container mx-2"></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest">{t('no_claims')}</span>
                </div>
              </div>

              {/* Hero Visual: Dashboard Preview */}
              <div className="reveal reveal-delay-1 relative lg:h-[500px]">
                <div className="absolute inset-0 bg-secondary-container/5 rounded-full blur-[100px] -z-10" />
                <div className="glassmorphic rounded-3xl p-8 border-white/40 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">L</div>
                      <div>
                        <p className="font-bold text-sm">Dashboard Logistica</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Données de démo</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-secondary-container/10 text-secondary-container text-[10px] font-black tracking-widest">DEMO</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {[
                      { l: language === 'ar' ? 'كوموندات' : 'Commandes', v: '24', c: 'blue' },
                      { l: language === 'ar' ? 'في التحضير' : 'En préparation', v: '08', c: 'orange' },
                      { l: language === 'ar' ? 'في الإرسال' : 'En transit', v: '12', c: 'green' },
                    ].map((s, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-white/50 border border-white/20 shadow-sm">
                        <p className="text-[10px] text-muted-foreground uppercase font-bold mb-1">{s.l}</p>
                        <p className="text-2xl font-black">{s.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-4 bg-secondary-container"></span>
                      Suivi d'un colis test
                    </p>
                    <div className="relative space-y-4">
                      {[
                        { t: t('service_stock'), s: '09:12', d: true },
                        { t: t('service_prep'), s: '09:26', d: true },
                        { t: language === 'ar' ? 'الإرسال والمتابعة' : 'Expédition', s: 'En cours', a: true },
                        { t: t('service_shipping'), s: '--' },
                      ].map((st, i) => (
                        <div key={i} className={cn("flex items-start gap-4 transition-opacity", !st.d && !st.a && "opacity-40")}>
                          <div className={cn("w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0", st.d ? "bg-emerald-500 text-white" : st.a ? "bg-secondary-container text-white animate-pulse" : "bg-white border")}>
                            {st.d ? '✓' : i + 1}
                          </div>
                          <div className="flex-grow -mt-1">
                            <p className="text-sm font-bold">{st.t}</p>
                            <p className="text-[10px] text-muted-foreground">{st.s}</p>
                          </div>
                        </div>
                      ))}
                      <div className="absolute left-[11px] rtl:right-[11px] top-4 bottom-4 w-[2px] bg-surface-container -z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S7: Services Grid */}
        <section className="py-24 bg-surface-container-low/30" id="solutions">
          <div className="container mx-auto px-4">
            <div className="section-heading reveal mb-16">
              <div className="eyebrow">
                <span className="eyebrow-dot"></span>
                <span>{t('solutions_eyebrow')}</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface mb-6 uppercase">{t('solutions_title')}</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl">{t('solutions_lead')}</p>
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
              <div className="reveal lg:col-span-3 p-8 rounded-3xl bg-primary-container text-white flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <RefreshCcw className="h-6 w-6 text-secondary-container" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-secondary-container">Étape 07</span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase mb-2">{t('service_returns')}</h3>
                  <p className="text-primary-fixed-dim max-w-md">{t('service_returns_desc')}</p>
                </div>
                <Button className="btn-primary h-16 px-10 relative z-10 shrink-0">
                  {t('create_account')}
                </Button>
                <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
                  <RefreshCcw className="w-64 h-64" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* S9: Dashboard Showcase */}
        <section className="py-24 bg-primary-container text-white overflow-hidden relative" id="dashboard">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-2 reveal space-y-8">
                <div className="eyebrow eyebrow-light">
                  <span className="eyebrow-dot"></span>
                  <span>{t('dashboard_eyebrow')}</span>
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
                <Button className="btn-primary h-16 px-10 w-full lg:w-auto">
                  {t('try_dashboard')}
                  <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                </Button>
                <p className="text-[10px] text-white/40 uppercase tracking-widest italic pt-2">
                  Version démonstration — Données non contractuelles
                </p>
              </div>

              <div className="lg:col-span-3 reveal reveal-delay-1 relative">
                <div className="bg-slate-900 rounded-[32px] p-6 sm:p-10 border border-white/10 shadow-2xl space-y-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-8">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Logistica Workspace v3.0</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">{t('nav_solutions')}</span>
                      <p className="text-3xl font-black">124</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest">{language === 'ar' ? 'في التحضير' : 'Préparation'}</span>
                      <p className="text-3xl font-black text-secondary-container">18</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest">{language === 'ar' ? 'نظرة على المسار' : 'Suivi des flux'}</span>
                      <span className="text-[10px] text-white/20">7 DERNIERS JOURS</span>
                    </div>
                    <div className="h-32 w-full flex items-end gap-2">
                      {[40, 65, 52, 85, 45, 95, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-secondary-container/20 rounded-t-lg relative group">
                          <motion.div 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="absolute bottom-0 left-0 right-0 bg-secondary-container rounded-t-lg group-hover:brightness-125 transition-all"
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

        {/* S19: Multi-step Contact Form */}
        <section className="py-24 bg-white" id="contact">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-24 items-start">
              <div className="reveal space-y-8">
                <div className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  <span>{t('nav_contact')}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-on-surface uppercase leading-tight">
                  {t('contact_title')}
                </h2>
                <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
                  {t('contact_lead')}
                </p>
                <div className="p-8 rounded-3xl bg-surface-container-low/50 border border-surface-container flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <Headset className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{language === 'ar' ? 'استفسار سريع ؟' : 'Besoin d\'aide ?'}</p>
                    <p className="text-xs text-on-surface-variant">{language === 'ar' ? 'المستشارين متاحين في الواتساب.' : 'Nos conseillers sont sur WhatsApp.'}</p>
                  </div>
                  <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold ml-auto rtl:mr-auto rtl:ml-0">
                    {language === 'ar' ? 'تواصل' : 'Discuter'}
                  </Button>
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
                  <Button className="btn-primary w-full text-lg h-16">
                    {t('send_request')}
                    <ArrowRight className={cn("h-5 w-5", language === 'ar' ? 'rotate-180' : '')} />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest pt-2">
                    {language === 'ar' ? 'ما يتم حتى إرسال في النسخة هاذي' : 'Aucun envoi réel dans cette démo'}
                  </p>
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
