"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { HeroIllustration } from "@/components/home/hero-illustration";
import { StatsBar } from "@/components/home/stats-bar";
import { ServicesGrid } from "@/components/home/services-grid";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { useTranslation } from "@/hooks/use-translation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Shield, Zap, MapPin, 
  Smartphone, Star, BarChart3, HelpCircle,
  MessageCircle, Mail, Phone, Send
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const { t, language } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center p-6 text-center">
        <div className="relative mb-12">
          {/* Logo Assembly Simulation */}
          <div className="flex gap-2">
            <motion.div className="w-8 h-24 bg-blue-600 rounded-full" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.1 }} />
            <motion.div className="w-8 h-24 bg-navy-900 border-2 border-white/20 rounded-full" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.3 }} />
            <motion.div className="w-8 h-24 bg-orange-500 rounded-full" initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: 0.5 }} />
          </div>
          <motion.div 
            className="absolute -bottom-6 left-0 h-1.5 bg-orange-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "linear" }}
          />
        </div>
        <p className="text-blue-100 font-bold text-lg tracking-widest animate-pulse">
          {language === 'ar' ? "نحضّرولك التجربة..." : "Chargement de l'expérience..."}
        </p>
      </div>
    );
  }

  return (
    <main className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-black text-xs uppercase tracking-widest shadow-sm">
              {t("hero_chip")}
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-navy-900 leading-[1.1] tracking-tight">
              {t("hero_h1_1")} <br />
              <span className="text-gradient-orange">{t("hero_h1_accent")}</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
              {t("hero_sub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-orange h-16 px-10 text-xl shadow-xl group">
                {t("hero_cta1")}
                <ArrowRight className={cn("transition-transform group-hover:translate-x-2 ms-3", language === 'ar' && "rotate-180")} />
              </Button>
              <Button variant="outline" className="h-16 px-10 text-xl border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
                {t("hero_cta2")}
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
              {t("hero_trust").split('·').map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <StatsBar />

      {/* SECTION 3: SERVICES */}
      <ServicesGrid />

      {/* SECTION 4: PROCESS */}
      <ProcessTimeline />

      {/* SECTION 5: WHY US */}
      <section id="why-us" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
              {t("why_title")}
            </h2>
            <div className="grid gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 group p-4 rounded-2xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-sm">
                    {i === 1 && <Zap size={28} />}
                    {i === 2 && <Shield size={28} />}
                    {i === 3 && <MapPin size={28} />}
                    {i === 4 && <Smartphone size={28} />}
                    {i === 5 && <Star size={28} />}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-navy-900 text-xl">{t(`why_${i}_t` as any)}</h3>
                    <p className="text-gray-500 leading-relaxed">{t(`why_${i}_d` as any)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* SaaS Mockup Preview */}
          <div className="relative group">
            <div className="absolute inset-0 bg-orange-500/20 rounded-[40px] blur-3xl group-hover:bg-orange-500/30 transition-all" />
            <div className="relative bg-navy-900 rounded-[32px] p-8 shadow-2xl border border-white/10 overflow-hidden aspect-[4/3] flex flex-col">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/40" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/40" />
                </div>
                <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Logistica Portal v2.0</div>
              </div>
              <div className="flex-grow space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/40 text-[10px] font-black uppercase mb-1">Livraisons</p>
                    <p className="text-3xl font-black text-white">2,840</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/40 text-[10px] font-black uppercase mb-1">Revenus COD</p>
                    <p className="text-3xl font-black text-orange-500">14.2k <span className="text-sm font-bold">DT</span></p>
                  </div>
                </div>
                <div className="flex-grow bg-white/5 rounded-2xl border border-white/10 p-6 flex items-center justify-center">
                  <div className="w-full h-full flex items-end gap-2 px-2">
                    {[40, 70, 45, 90, 65, 80, 55, 95, 30, 60].map((h, idx) => (
                      <motion.div 
                        key={idx}
                        className="flex-1 bg-blue-600/80 rounded-t-lg"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: idx * 0.05 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <HelpCircle className="mx-auto text-orange-500" size={56} />
            <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
              {t("faq_title")}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-100 rounded-3xl px-8 shadow-sm">
                <AccordionTrigger className="text-start font-black text-navy-900 text-lg py-6 hover:no-underline hover:text-blue-600 transition-colors">
                  {language === 'ar' 
                    ? ["شحال التكلفة؟", "كيفاش نربط سيتي؟", "متى ترجعلي فلوس ال COD؟", "تخدمو في ولايتي؟", "الريتور كيفاش يتصرف؟"][i-1]
                    : ["Combien ça coûte ?", "Comment intégrer ?", "Quand récupère-je mon COD ?", "Couverture géographique ?", "Gestion des retours ?"][i-1]
                  }
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-8 text-base leading-relaxed">
                  {language === 'ar'
                    ? ["تسعيرة حسب الڤوليم، ابعثلنا ونعطيوك ديڤي مفصّل.", "API ولا WooCommerce/Shopify plugin, ساهلة.", "رابروشمان أسبوعي واضح ومضبوط.", "24 ولاية، والمدن الكبرى أقل من 24 ساعة.", "نتكفلو بيه، إبدال ولا ريمبورسي."][i-1]
                    : ["Tarification flexible selon le volume. Contactez-nous pour un devis.", "Via API ou plugins WooCommerce/Shopify.", "Rapprochement hebdomadaire structuré.", "24 gouvernorats, grandes villes < 24h.", "Nous gérons tout : échange ou remboursement."][i-1]
                  }
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA + FOOTER */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-navy-900 rounded-[48px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
          <div className="relative z-10 space-y-10">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {t("cta_title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Button className="btn-orange h-20 px-12 text-2xl shadow-2xl">
                {t("cta_btn")}
              </Button>
              <Link href="https://wa.me/21600000000" className="h-20 px-10 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md flex items-center gap-4 text-white font-black text-xl hover:bg-white/10 transition-all">
                <MessageCircle fill="currentColor" />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center font-black text-white">L</div>
              <span className="text-2xl font-black text-navy-900 tracking-tighter uppercase">Logistica</span>
            </div>
            <p className="text-gray-500 font-bold text-sm leading-relaxed">
              {language === 'ar' ? "من الكوموند لليفريزون، بسيطة كيما الحكاية." : "De la commande à la livraison, tout simplement."}
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-black text-navy-900 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li><Link href="#services" className="hover:text-blue-600">{t("nav_services")}</Link></li>
              <li><Link href="#process" className="hover:text-blue-600">{t("nav_process")}</Link></li>
              <li><Link href="#why-us" className="hover:text-blue-600">{t("nav_why")}</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-navy-900 uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-4 text-gray-500 font-bold">
              <li className="flex items-center gap-3"><Phone size={18} className="text-orange-500" /> +216 71 000 000</li>
              <li className="flex items-center gap-3"><Mail size={18} className="text-orange-500" /> contact@logistica.tn</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-orange-500" /> Tunis, Tunisie</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-navy-900 uppercase tracking-widest text-xs">Legal</h4>
            <p className="text-[10px] font-black text-gray-400 leading-relaxed uppercase tracking-tighter">
              {t("footer_rights")} <br />
              Registre du commerce tunisien n° 0000000X
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/21600000000" 
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle size={32} fill="white" />
      </Link>
    </main>
  );
}