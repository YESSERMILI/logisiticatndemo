"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  ShoppingCart,
  Box,
  Scan,
  Truck,
  Wallet,
  MapPin,
  Clock,
  Navigation
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { BentoServices } from "@/components/home/services-bento";
import { FAQ } from "@/components/home/faq";

// Scrolling ticker component - Fixed for perfect infinite loop
const ScrollingTicker = () => {
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

  return (
    <div className="relative z-20 h-16 md:h-20 flex items-center overflow-hidden bg-[#0B2A6B]">
      <div className="absolute left-[-100vw] w-[300vw] bg-[#F7931E] py-3 md:py-4 -rotate-1 shadow-2xl border-y border-white/10 flex items-center">
        <div dir="ltr" className="flex whitespace-nowrap animate-ticker-forever">
          <div className="flex items-center">
            {items.map((item, i) => (
              <span 
                key={`set1-${i}`} 
                className={cn(
                  "inline-flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-tighter px-8 md:px-12",
                  item.lang === "ar" ? "font-arabic" : "font-sans",
                  item.isSep ? "opacity-20" : ""
                )}
              >
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex items-center">
            {items.map((item, i) => (
              <span 
                key={`set2-${i}`} 
                className={cn(
                  "inline-flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-tighter px-8 md:px-12",
                  item.lang === "ar" ? "font-arabic" : "font-sans",
                  item.isSep ? "opacity-20" : ""
                )}
              >
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker-forever {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-forever {
          animation: ticker-forever 80s linear infinite;
        }
      `}} />
    </div>
  );
};

const ProcessVisual = ({ type, stepNumber }: { type: 'order' | 'storage' | 'prep' | 'delivery' | 'cash', stepNumber: number }) => {
  const IconComponent = {
    order: ShoppingCart,
    storage: Box,
    prep: Scan,
    delivery: Truck,
    cash: Wallet
  }[type];

  // SVG Concept: Technical UI Style with precise animations
  const SvgPaths = {
    order: (
      <g>
        <rect x="20" y="25" width="60" height="45" rx="4" fill="none" stroke="#F7931E" strokeWidth="2" />
        <rect x="28" y="35" width="44" height="2" rx="1" fill="#F7931E" opacity="0.3" />
        <rect x="28" y="45" width="30" height="2" rx="1" fill="#F7931E" opacity="0.3" />
        <motion.circle cx="75" cy="25" r="7" fill="#F7931E" animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
        <path d="M45 55 L55 65 L75 45" fill="none" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.2" />
      </g>
    ),
    storage: (
      <g>
        <motion.path d="M50 20 L85 38 L50 56 L15 38 Z" fill="none" stroke="#F7931E" strokeWidth="2" />
        <path d="M15 38 L15 75 L50 93 L50 56 Z" fill="none" stroke="#F7931E" strokeWidth="2" />
        <path d="M85 38 L85 75 L50 93 L50 56 Z" fill="none" stroke="#F7931E" strokeWidth="2" opacity="0.5" />
        <motion.line x1="10" y1="40" x2="90" y2="40" stroke="#F7931E" strokeWidth="1" animate={{ y: [0, 45, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
      </g>
    ),
    prep: (
      <g>
        <rect x="20" y="30" width="60" height="45" rx="2" fill="none" stroke="#F7931E" strokeWidth="2" />
        <motion.path d="M20 45 H80" stroke="#F7931E" strokeWidth="4" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} />
        <circle cx="50" cy="52" r="12" fill="none" stroke="#F7931E" strokeWidth="1" strokeDasharray="4 2" />
        <motion.path d="M44 52 L48 56 L56 48" fill="none" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.5 }} />
      </g>
    ),
    delivery: (
      <g>
        <motion.g animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 0.6 }}>
          <path d="M20 40 H65 L85 60 V80 H20 Z" fill="none" stroke="#F7931E" strokeWidth="2" />
          <circle cx="35" cy="80" r="8" fill="#F7931E" />
          <circle cx="70" cy="80" r="8" fill="#F7931E" />
          <line x1="65" y1="40" x2="65" y2="80" stroke="#F7931E" strokeWidth="2" opacity="0.3" />
        </motion.g>
        <motion.path d="M0 95 H100" stroke="#F7931E" strokeWidth="1" strokeDasharray="6 6" animate={{ strokeDashoffset: [0, -12] }} transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }} />
      </g>
    ),
    cash: (
      <g>
        <circle cx="50" cy="50" r="40" fill="none" stroke="#F7931E" strokeWidth="2" opacity="0.2" />
        <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#F7931E" strokeWidth="2" strokeDasharray="10 5" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} />
        <text x="50" y="58" textAnchor="middle" fill="#F7931E" fontSize="22" fontWeight="900" className="font-sans">DT</text>
        <rect x="68" y="18" width="24" height="24" rx="12" fill="#F7931E" />
        <path d="M74 30 L78 34 L86 26" fill="none" stroke="#0B2A6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    )
  }[type];

  return (
    <div className="relative mb-8 group flex flex-col items-center">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/10 flex items-center justify-center relative transition-all duration-500 group-hover:border-[#F7931E]/40 bg-white/[0.03]">
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20 drop-shadow-[0_0_20px_rgba(247,147,30,0.15)]">
          {SvgPaths}
        </svg>
        <div className="absolute -top-1 -left-1 w-8 h-8 bg-[#F7931E] rounded-full flex items-center justify-center text-[#0B2A6B] font-black text-sm shadow-xl ring-4 ring-[#0B2A6B]">
          {stepNumber}
        </div>
      </div>
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
            <a href="#coverage" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n6')}</a>
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
            <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X /> : <Menu />}
            </button>
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
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.25] mb-8",
              language === 'ar' && "font-arabic"
            )}>
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
            <p className={cn(
              "text-lg text-[#9FB2DE] font-light leading-relaxed max-w-lg mb-10",
              language === 'ar' && "font-arabic"
            )}>
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
            {/* NEW HERO LOGISTICS SVG VIA IMG */}
            <div className="hero-hub">
              <img
                src="/images/hero-logistics-hub.svg"
                alt="Logistica logistics hub"
                width={560}
                height={340}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollingTicker />

      {/* Preparation Section */}
      <section id="preparation" className="py-24 bg-[#0B2A6B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block bg-white text-[#F7931E] font-bold text-xs px-4 py-1.5 rounded-full mb-6 shadow-sm uppercase tracking-wider">
              {t('hwe')}
            </span>
            <h2 className={cn(
              "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.35]",
              language === 'ar' && "font-arabic"
            )}>{t('hwt')}</h2>
            <p className={cn(
              "text-lg text-[#9FB2DE] font-medium max-w-2xl mx-auto opacity-80",
              language === 'ar' && "font-arabic"
            )}>
              {t('hws')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
            {[
              { id: 'order', title: t('h1t'), desc: t('h1d'), num: 1 },
              { id: 'storage', title: t('h2t'), desc: t('h2d'), num: 2 },
              { id: 'prep', title: t('h3t'), desc: t('h3d'), num: 3 },
              { id: 'delivery', title: t('h4t'), desc: t('h4d'), num: 4 },
              { id: 'cash', title: t('h5t'), desc: t('h5d'), num: 5 }
            ].map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center">
                <ProcessVisual type={step.id as any} stepNumber={step.num} />
                <div className="mt-4 space-y-2 px-2">
                  <h3 className={cn("text-xl font-bold text-white uppercase tracking-tight", language === 'ar' && "font-arabic text-2xl")}>{step.title}</h3>
                  <p className={cn("text-sm text-[#9FB2DE] leading-relaxed font-medium", language === 'ar' && "font-arabic")}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DashboardShowcase />

      <BentoServices />

      {/* Coverage Section */}
      <section id="coverage" className="py-24 bg-[#0B2A6B] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em] mb-4 block">{t('cve')}</span>
            <h2 className={cn(
              "text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.25]",
              language === 'ar' && "font-arabic"
            )}>
              {t('cvt')}
            </h2>
            <p className={cn(
              "text-lg text-[#9FB2DE] font-medium opacity-80 max-w-2xl mx-auto mt-6",
              language === 'ar' && "font-arabic"
            )}>
              {t('cvs')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'z1', title: t('z1t'), desc: t('z1d'), label: t('z1'), icon: MapPin },
              { id: 'z2', title: t('z2t'), desc: t('z2d'), label: t('z2'), icon: Navigation },
              { id: 'z3', title: t('z3t'), desc: t('z3d'), label: t('z3'), icon: Clock }
            ].map((zone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#F7931E]/20 flex items-center justify-center text-[#F7931E] mb-8 group-hover:scale-110 transition-transform">
                  <zone.icon size={28} />
                </div>
                <p className="text-[10px] font-black uppercase text-[#F7931E] tracking-widest mb-3">{zone.label}</p>
                <h4 className={cn("text-2xl font-bold text-white mb-4", language === 'ar' && "font-arabic text-3xl")}>{zone.title}</h4>
                <div className="bg-white/5 px-4 py-2 rounded-lg inline-block text-[#F7931E] font-black text-xs mb-6 uppercase tracking-wider">
                  Délai : {zone.title.includes('48') || zone.id === 'z2' ? '24h - 48h' : zone.id === 'z1' ? '< 24h' : '48h - 72h'}
                </div>
                <p className={cn("text-[#9FB2DE] text-sm leading-relaxed opacity-80", language === 'ar' && "font-arabic")}>{zone.desc}</p>
                
                <ul className="mt-8 space-y-3">
                   {['Suivi GPS temps réel', 'Confirmation SMS', 'Gestion automatique des retours'].map((feat, i) => (
                     <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                       <CheckCircle2 size={12} className="text-[#F7931E]/40" />
                       {feat}
                     </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[40px] bg-gradient-to-r from-[#F7931E] to-[#E0861A] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-[#0B2A6B]">
              <h4 className={cn("text-2xl md:text-3xl font-black uppercase leading-[1.3] mb-2", language === 'ar' && "font-arabic text-4xl")}>{language === 'ar' ? "تحب تبعث كولي على السريع؟" : "Besoin d'une livraison urgente ?"}</h4>
              <p className={cn("font-bold opacity-80", language === 'ar' && "font-arabic")}>{language === 'ar' ? "نغطيو الـ 24 ولاية من غير استثناء." : "On couvre les 24 gouvernorats sans exception."}</p>
            </div>
            <Button className="bg-[#0B2A6B] text-white font-black px-10 h-16 rounded-2xl hover:bg-[#081E4E] transition-all uppercase tracking-widest text-xs" asChild>
              <Link href="https://wa.me/21699201552">{language === 'ar' ? "كلم أجون" : "Contacter un agent"}</Link>
            </Button>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Closing CTA */}
      <section className="py-24 bg-[#081E4E] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-10"
          >
            <h2 className={cn(
              "text-4xl md:text-6xl font-black text-white leading-[1.35]",
              language === 'ar' && "font-arabic"
            )}>
              {language === 'ar' ? "جاهز باش تخرّج البيزنس متاعك للنيفو الجاي ؟" : "Prêt à faire passer votre business au niveau supérieur ?"}
            </h2>
            <p className={cn(
              "text-xl text-[#9FB2DE] leading-relaxed",
              language === 'ar' && "font-arabic"
            )}>
              {language === 'ar' ? "انضم لأكثر من 500 تاجر إلكتروني يثقوا في Logistica لتسيير عملياتهم اليومية." : "Rejoignez plus de 500 e-commerçants qui font confiance à Logistica pour piloter leurs opérations quotidiennes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#F7931E] text-[#0B2A6B] rounded-sm shadow-2xl hover:bg-[#E0861A] border-none" asChild>
                <Link href="https://wa.me/21699201552">
                  {language === 'ar' ? "ابدأ توة" : "Démarrer mon intégration"}
                  <ChevronRight className={cn("ml-2", language === 'ar' && "rotate-180 mr-2 ml-0")} />
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
