"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import HeroLogisticsHub from "@/HeroLogisticsHub";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { BentoServices } from "@/components/home/services-bento";
import { FAQ } from "@/components/home/faq";

// Scrolling ticker component - Fixed for perfect infinite loop
const ScrollingTicker = () => {
  const { language } = useLanguage();
  
  const items = [
    { text: "LOGISTICA TUNISIE", lang: "fr" },
    { text: "✦", isSep: true },
    { text: "LIVRAISON 24 GOUVERNORATS", lang: "fr" },
    { text: "✦", isSep: true },
    { text: "بِيع براحتك والتوصيل علينا", lang: "ar" },
    { text: "✦", isSep: true },
    { text: "COD & REVERSEMENT J+1", lang: "fr" },
    { text: "✦", isSep: true },
    { text: "STOCKAGE SÉCURISÉ", lang: "fr" },
    { text: "✦", isSep: true },
    { text: "تتبع كوليك في كل لحظة", lang: "ar" },
    { text: "✦", isSep: true },
    { text: "PICKING & PACKING PRO", lang: "fr" },
    { text: "✦", isSep: true },
    { text: "من الكوموند لليفريزون", lang: "ar" },
    { text: "✦", isSep: true },
    { text: "DASHBOARD SAAS REAL-TIME", lang: "fr" },
    { text: "✦", isSep: true },
  ];

  // Double content for seamless loop
  const tickerArray = [...items, ...items];

  return (
    <div className="relative z-20 h-20 md:h-24 flex items-center overflow-hidden bg-[#0B2A6B]">
      <div className="absolute left-[-20vw] right-[-20vw] bg-[#F7931E] py-4 md:py-6 -rotate-1 shadow-2xl border-y border-white/10 flex items-center">
        <div dir="ltr" className="flex whitespace-nowrap animate-ticker-forever">
          {tickerArray.map((item, i) => (
            <span 
              key={i} 
              className={cn(
                "inline-flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-tighter px-8",
                item.lang === "ar" ? "font-arabic" : "font-sans",
                item.isSep ? "text-[#0B2A6B]/20" : ""
              )}
            >
              {item.text}
            </span>
          ))}
          {/* Exactly repeated set for seamless transition */}
          {tickerArray.map((item, i) => (
            <span 
              key={`dup-${i}`} 
              className={cn(
                "inline-flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-tighter px-8",
                item.lang === "ar" ? "font-arabic" : "font-sans",
                item.isSep ? "text-[#0B2A6B]/20" : ""
              )}
            >
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker-forever {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-forever {
          animation: ticker-forever 120s linear infinite;
        }
      `}} />
    </div>
  );
};

const ProcessVisual = ({ type }: { type: 'order' | 'storage' | 'prep' | 'delivery' | 'cash' }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <svg viewBox="0 0 100 80" className="w-full h-full overflow-visible">
        {/* Step 1: Order */}
        {type === 'order' && (
          <g>
            <rect x="10" y="15" width="80" height="50" rx="4" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <rect x="15" y="22" width="50" height="6" rx="1" fill="currentColor" opacity="0.2" />
            <motion.rect 
              x="15" y="35" width="30" height="6" rx="1" fill="#F7931E"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="80" cy="25" r="4" fill="#F7931E" />
            <rect x="15" y="48" width="70" height="2" rx="1" fill="currentColor" opacity="0.1" />
          </g>
        )}

        {/* Step 2: Storage */}
        {type === 'storage' && (
          <g>
            <rect x="10" y="20" width="25" height="15" rx="2" fill="currentColor" opacity="0.2" />
            <rect x="40" y="20" width="25" height="15" rx="2" fill="currentColor" opacity="0.2" />
            <rect x="70" y="20" width="20" height="15" rx="2" fill="#F7931E" opacity="0.4" />
            <rect x="10" y="45" width="25" height="15" rx="2" fill="#F7931E" />
            <rect x="40" y="45" width="25" height="15" rx="2" fill="currentColor" opacity="0.2" />
            <motion.rect 
              x="10" y="45" width="25" height="15" rx="2" fill="#F7931E"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </g>
        )}

        {/* Step 3: Prep */}
        {type === 'prep' && (
          <g>
            <path d="M20 50 L50 65 L80 50 V30 L50 15 L20 30 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <motion.path 
              d="M50 15 L80 30 L50 45 L20 30 Z" 
              fill="#F7931E"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <rect x="45" y="40" width="10" height="10" fill="#0B2A6B" />
          </g>
        )}

        {/* Step 4: Delivery */}
        {type === 'delivery' && (
          <g>
            <path d="M10 50 Q 50 10 90 50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="10" cy="50" r="3" fill="currentColor" opacity="0.5" />
            <circle cx="90" cy="50" r="3" fill="#F7931E" />
            <motion.g
              animate={{ 
                offsetDistance: ["0%", "100%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M10 50 Q 50 10 90 50')" }}
            >
              <circle r="4" fill="#F7931E" />
              <path d="M-2 0 H2 M0 -2 V2" stroke="white" strokeWidth="1" />
            </motion.g>
          </g>
        )}

        {/* Step 5: Cash */}
        {type === 'cash' && (
          <g>
            <rect x="30" y="15" width="40" height="50" rx="6" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <circle cx="50" cy="40" r="12" fill="#F7931E" opacity="0.2" />
            <motion.text 
              x="50" y="44" textAnchor="middle" fill="#F7931E" fontSize="12" fontWeight="900"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              DT
            </motion.text>
            <motion.path 
              d="M45 55 L50 60 L60 50" 
              fill="none" stroke="#27C93F" strokeWidth="2.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default function HomePage() {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen selection:bg-[#F7931E] selection:text-[#0B2A6B] bg-[#0B2A6B]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#F7931E] z-[100] origin-left"
        style={{ scaleX }}
      />

      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 h-20 flex items-center",
        scrolled ? "bg-[#0B2A6B]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}>
        <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="transition-transform hover:-translate-y-1 group">
            <Logo variant="white" />
          </Link>

          <nav className={cn(
            "hidden lg:flex items-center gap-8",
            mobileMenu && "flex flex-col absolute top-20 left-0 right-0 bg-[#0B2A6B] p-6 border-b border-white/10 lg:static lg:bg-transparent lg:p-0 lg:border-0 lg:flex-row"
          )}>
            <a href="#preparation" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n0')}</a>
            <a href="#services" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n1')}</a>
            <a href="#dashboard" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">Dashboard</a>
            <a href="#faq" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n3')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" onClick={toggleLanguage}>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>عربية</span>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>FR</span>
            </div>
            <Button variant="secondary" size="sm" className="hidden sm:flex bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6" asChild>
              <Link href="https://wa.me/21699201552">{t('n4')}</Link>
            </Button>
            <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 min-h-[85vh] flex items-center">
        <div className="absolute top-1/4 left-0 text-[12vw] font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap uppercase">
          Logistica Tunisie
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="inline-block bg-[#F7931E] text-[#0B2A6B] font-bold text-xs px-4 py-2 rounded-sm mb-6 -rotate-2 shadow-lg w-fit">
              {t('chip')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              {t('h1a')} <br />
              <span className="text-[#F7931E] relative inline-block">
                {t('h1b')}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-2 bg-[#F7931E]/30 w-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </span>
            </h1>
            <p className="text-lg text-[#9FB2DE] font-light leading-relaxed max-w-lg mb-10">
              {t('sub')}
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="h-14 px-8 text-lg font-bold bg-[#F7931E] text-[#0B2A6B] shadow-xl hover:shadow-[#F7931E]/20 transition-all rounded-sm group border-none" asChild>
                <Link href="https://wa.me/21699201552">
                  {t('cta1')}
                  <ArrowRight className={cn("transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180")} />
                </Link>
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#0B2A6B] rounded-sm bg-transparent" asChild>
                <Link href="#preparation">{t('cta2')}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-bold text-white/40 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                {language === 'ar' ? "توصيل لكامل الولايات" : "24 gouvernorats"}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                COD & REVERSEMENT
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                DASHBOARD SAAS
              </div>
            </div>
          </motion.div>

          <div className="relative min-w-0 flex items-center justify-center">
            <HeroLogisticsHub />
          </div>
        </div>
      </section>

      {/* Scrolling Ticker Section */}
      <ScrollingTicker />

      {/* Preparation Section (Le Processus en 5 étapes) */}
      <section id="preparation" className="py-24 bg-[#0B2A6B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">{t('hwe')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{t('hwt')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { id: 'order', title: t('h1t'), desc: t('h1d') },
              { id: 'storage', title: t('h2t'), desc: t('h2d') },
              { id: 'prep', title: t('h3t'), desc: t('h3d') },
              { id: 'delivery', title: t('h4t'), desc: t('h4d') },
              { id: 'cash', title: t('h5t'), desc: t('h5d') }
            ].map((step) => (
              <Card key={step.id} className="bg-white/5 border-white/10 hover:border-[#F7931E]/50 transition-all group overflow-hidden border-none text-white h-full flex flex-col">
                <div className="h-40 bg-[#081E4E]/50 relative flex-shrink-0">
                  <ProcessVisual type={step.id as any} />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#9FB2DE] leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <DashboardShowcase />

      {/* Services Section */}
      <BentoServices />

      {/* FAQ Section */}
      <FAQ />

      {/* Closing CTA */}
      <section className="py-24 bg-[#081E4E] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {language === 'ar' ? "جاهز باش تخرّج البيزنس متاعك للنيفو الجاي ؟" : "Prêt à faire passer votre business au niveau supérieur ?"}
            </h2>
            <p className="text-xl text-[#9FB2DE]">
              {language === 'ar' ? "انضم لأكثر من 500 تاجر إلكتروني يثقوا in Logistica لتسيير عملياتهم اليومية." : "Rejoignez plus de 500 e-commerçants qui font confiance à Logistica pour piloter leurs opérations quotidiennes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#F7931E] text-[#0B2A6B] rounded-sm shadow-2xl hover:bg-[#E0861A] border-none" asChild>
                <Link href="https://wa.me/21699201552">
                  Démarrer mon intégration
                  <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F7931E]/10 rounded-full blur-[100px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1F6FDB]/10 rounded-full blur-[100px]" />
      </section>

      <footer className="bg-[#0B2A6B] py-20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <Logo variant="white" className="mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left mb-16">
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#preparation">Fulfillment</Link></li>
                <li><Link href="#services">Stockage</Link></li>
                <li><Link href="#services">Dernier Kilomètre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Entreprise</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#">À propos</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Carrières</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">API Docs</Link></li>
                <li><Link href="#">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li>+216 99 201 552</li>
                <li>contact@logistica.tn</li>
                <li>Tunis, Tunisie</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">{t('foot')}</p>
            <div className="flex gap-8">
              <Link href="https://wa.me/21699201552" className="text-white/40 hover:text-[#F7931E] transition-colors font-bold uppercase text-[10px] tracking-widest">WhatsApp</Link>
              <Link href="tel:+21699201552" className="text-white/40 hover:text-[#F7931E] transition-colors font-bold uppercase text-[10px] tracking-widest">Téléphone</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
