
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
  Wallet
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { BentoServices } from "@/components/home/services-bento";
import { FAQ } from "@/components/home/faq";
import { Footer } from "@/components/layout/footer";

// Scrolling ticker component with perfect infinite loop logic
const ScrollingTicker = () => {
  const items = [
    "LOGISTICA TUNISIE", "✦", 
    "LIVRAISON 24 GOUVERNORATS", "✦", 
    "بِيع براحتك والتوصيل علينا", "✦", 
    "COD & REVERSEMENT J+1", "✦", 
    "STOCKAGE SÉCURISÉ", "✦", 
    "تتبع كوليك في كل لحظة", "✦", 
    "PICKING & PACKING PRO", "✦", 
    "سلعتك في أمان معانا", "✦",
    "من الكوموند لليفريزون", "✦", 
    "DASHBOARD SAAS REAL-TIME", "✦",
    "Fulfillment e-commerce N°1", "✦",
    "EXPÉDITION EXPRESS 24H", "✦",
    "ثقة أكثر من 500 تاجر", "✦"
  ];

  const TickerLine = () => (
    <div className="flex items-center flex-shrink-0">
      {items.map((item, i) => (
        <span 
          key={i} 
          className={cn(
            "inline-flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-tighter px-8 md:px-16 whitespace-nowrap",
            /[\u0600-\u06FF]/.test(item) ? "font-arabic" : "font-sans",
            item === "✦" ? "opacity-20 scale-75" : ""
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-20 h-12 md:h-16 flex items-center overflow-hidden bg-[#0B2A6B]">
      <div className="absolute inset-x-0 -rotate-1 scale-105 flex items-center bg-[#F7931E] py-3 md:py-4 shadow-2xl border-y border-white/20">
        <div className="flex animate-ticker-infinite-perfect">
          <TickerLine />
          <TickerLine />
          <TickerLine />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ticker-infinite-perfect {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-ticker-infinite-perfect {
          animation: ticker-infinite-perfect 30s linear infinite;
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

  return (
    <div className="relative mb-8 group flex flex-col items-center">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#F7931E]/20 flex items-center justify-center relative transition-all duration-500 group-hover:border-[#F7931E]/60 bg-white/[0.03] shadow-[0_0_20px_rgba(247,147,30,0.05)] overflow-visible"
      >
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#F7931E]"
        >
          <IconComponent className="w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_0_15px_rgba(247,147,30,0.4)]" strokeWidth={1.5} />
        </motion.div>
        
        <div className="absolute -top-1 -left-1 w-8 h-8 bg-[#F7931E] rounded-full flex items-center justify-center text-[#0B2A6B] font-black text-sm shadow-xl ring-4 ring-[#0B2A6B] z-10">
          {stepNumber}
        </div>
      </motion.div>
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
            <Logo />
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
              <Link href="/register">{t('n4')}</Link>
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
              "text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.2] mb-8",
              language === 'ar' && "font-arabic leading-[1.35]"
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
                <Link href="/register">
                  {t('cta1')}
                  <ArrowRight className={cn("transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180 ml-2 mr-0")} />
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
              "text-3xl md:text-5 font-bold text-white mb-6 tracking-tight leading-[1.25]",
              language === 'ar' && "font-arabic leading-[1.35]"
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
              "text-4xl md:text-7xl font-bold text-white tracking-tight leading-[1.3]",
              language === 'ar' && "font-arabic leading-[1.35]"
            )}>
              {t('cvt')}
            </h2>
            <p className={cn(
              "text-lg text-[#9FB2DE] font-medium opacity-80 max-w-2xl mx-auto mt-6",
              language === 'ar' && "font-arabic"
            )}>
              {language === 'ar' ? "نغطّيو كامل الولايات بشبكة توصيل منظّمة." : "Nous couvrons l'ensemble des gouvernorats avec un réseau de livraison structuré."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'z1', title: t('z1t'), desc: t('z1d'), label: t('z1') },
              { id: 'z2', title: t('z2t'), desc: t('z2d'), label: t('z2') },
              { id: 'z3', title: t('z3t'), desc: t('z3d'), label: t('z3') }
            ].map((zone, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all"
              >
                <p className="text-[10px] font-black uppercase text-[#F7931E] tracking-widest mb-3">{zone.label}</p>
                <h4 className={cn("text-2xl font-bold text-white mb-4", language === 'ar' && "font-arabic text-3xl")}>{zone.title}</h4>
                <p className={cn("text-[#9FB2DE] text-sm leading-relaxed opacity-80", language === 'ar' && "font-arabic")}>{zone.desc}</p>
                <div className="mt-8 pt-8 border-t border-white/5">
                   <div className="flex items-center gap-2 text-[10px] font-bold text-white/40 uppercase tracking-wider">
                     <CheckCircle2 size={12} className="text-[#F7931E]" />
                     {language === 'ar' ? "تتبع في الوقت الحقيقي" : "Suivi en temps réel"}
                   </div>
                </div>
              </motion.div>
            ))}
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
            className="max-w-3xl mx-auto space-y-12"
          >
            <h2 className={cn(
              "text-4xl md:text-6xl font-black text-white leading-[1.3]",
              language === 'ar' && "font-arabic leading-[1.4]"
            )}>
              {language === 'ar' ? "جاهز باش تخرّج البيزنس متاعك للنيفو الجاي ؟" : "Prêt à faire passer votre business au niveau supérieur ?"}
            </h2>
            <p className={cn(
              "text-xl text-[#9FB2DE] leading-relaxed",
              language === 'ar' && "font-arabic"
            )}>
              {language === 'ar' ? "انضم لأكثر من 500 تاجر إلكتروني يثقوا في Logistica لتسيير عملياتهم اليومية." : "Rejoignez plus de 500 e-commerçants qui font confiance à Logistica pour piloter leurs opérations quotidiennes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#F7931E] text-[#0B2A6B] rounded-sm shadow-2xl hover:bg-[#E0861A] border-none" asChild>
                <Link href="/register">
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

      <Footer />
    </div>
  );
}
