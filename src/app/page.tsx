
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Target, ClipboardList, Truck, 
  MapPin, Wallet, RefreshCw, Headset, BarChart, 
  Zap, ShieldCheck, Check, 
  ArrowRight, Store, MessageCircle, Scan, 
  Search, FileCheck,  
  ChevronRight, ArrowUpRight, Banknote, Package, 
  PackageOpen, Layers, Headphones, LayoutDashboard, Plus, Clock, Star, HelpCircle
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/logo";

// --- Components ---

function Counter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.div 
      onViewportEnter={() => setHasStarted(true)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-md shadow-brutal"
    >
      <b className="text-4xl md:text-5xl font-bold text-[#F7931E] font-sans tracking-tighter tabular-nums">
        {value >= 1000 ? `+${count.toLocaleString('en')}` : count}{suffix}
      </b>
      <span className="text-muted-foreground text-sm font-medium mt-2">{label}</span>
    </motion.div>
  );
}

// --- Main Page ---

export default function HomePage() {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [calcOrders, setCalcOrders] = useState(500);
  const [calcRet, setCalcRet] = useState(10);
  const [calcSpeed, setCalcSpeed] = useState(1);
  const [dashRange, setDashRange] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

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

  const runTrack = (e?: React.FormEvent) => {
    if(e) e.preventDefault();
    setTrackProgress(0);
    setTimeout(() => setTrackProgress(85), 100);
  };

  // Calculator logic
  const storage = Math.ceil(calcOrders / 200) * 45;
  const prep = calcOrders * 1.2;
  const delivery = calcOrders * 6.5 * calcSpeed;
  const returns = calcOrders * (calcRet / 100) * 4;
  const total = Math.round(storage + prep + delivery + returns);

  // Dashboard Mock Data (Stable for hydration)
  const dashData = [
    { k: [184, 171, 9420, 9], t: [12, 5, 8, 2], b: [40, 55, 48, 70, 62, 85, 74] },
    { k: [1240, 1186, 63800, 52], t: [15, 4, 11, 4], b: [60, 72, 65, 80, 70, 90, 95] },
    { k: [5310, 5072, 271500, 214], t: [18, 7, 14, 6], b: [50, 68, 75, 62, 88, 92, 80] }
  ];

  if (!hasMounted) return null;

  return (
    <div className="min-h-screen selection:bg-[#F7931E] selection:text-[#0B2A6B] bg-[#0B2A6B]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#F7931E] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 h-20 flex items-center",
        scrolled ? "bg-[#0B2A6B]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
      )}>
        <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
          <Link href="#" className="p-2 px-4 transition-transform hover:-translate-y-1 group">
            <Logo variant={scrolled ? "white" : "default"} />
          </Link>

          <nav className={cn(
            "hidden lg:flex items-center gap-8",
            mobileMenu && "flex flex-col absolute top-20 left-0 right-0 bg-[#0B2A6B] p-6 border-b border-white/10"
          )}>
            {['n0', 'n1', 'n5', 'n6', 'n7', 'n3'].map((key) => (
              <a key={key} href={`#${t(key as any).toLowerCase()}`} className="text-[#B9C8EC] hover:text-[#F7931E] font-bold text-sm transition-colors uppercase tracking-wider">
                {t(key as any)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" onClick={toggleLanguage}>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-[#B9C8EC]")}>عربية</span>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-[#B9C8EC]")}>FR</span>
            </div>
            <Button variant="secondary" size="sm" className="hidden sm:flex bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6" asChild>
              <Link href="#calc">{t('n4')}</Link>
            </Button>
            <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="absolute top-1/4 left-0 text-[12vw] font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap uppercase">
          Logistica Tunisie
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#F7931E] text-[#0B2A6B] font-bold text-xs px-4 py-2 rounded-sm mb-6 -rotate-2 shadow-lg">
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
            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 text-lg font-bold bg-[#F7931E] text-[#0B2A6B] shadow-xl hover:shadow-[#F7931E]/20 transition-all rounded-sm group border-none" asChild>
                <Link href="#cta">
                  {t('cta1')}
                  <ArrowRight className={cn("transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180")} />
                </Link>
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#0B2A6B] rounded-sm bg-transparent" asChild>
                <Link href="#how">{t('cta2')}</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#9FB2DE] font-medium">
              <div className="flex items-center gap-2"><Check className="text-[#F7931E]" /> {t('tr1')}</div>
              <div className="flex items-center gap-2"><Check className="text-[#F7931E]" /> {t('tr2')}</div>
              <div className="flex items-center gap-2"><Check className="text-[#F7931E]" /> {t('tr3')}</div>
            </div>
          </motion.div>

          {/* Hero SVG Truck Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
             <svg viewBox="0 0 560 340" className="w-full h-auto overflow-visible" role="img">
                <defs>
                   <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1F6FDB" stopOpacity=".15"/><stop offset="1" stopColor="#0B2A6B" stopOpacity="0"/></linearGradient>
                </defs>
                <rect x="0" y="0" width="560" height="260" fill="url(#sky)" rx="8"/>
                <circle cx="470" cy="70" r="34" fill="#F7931E" className="animate-pulse opacity-40"/>
                <path d="M0 300 H560" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="14 16"/>
                
                {/* Truck */}
                <motion.g 
                  animate={{ x: [-400, 30, 30, 650] }} 
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.6, 1], ease: "easeInOut" }}
                >
                  <g className="animate-[bob_0.5s_ease-in-out_infinite_alternate]">
                    <rect x="40" y="206" width="140" height="82" rx="4" fill="#1F6FDB" className="shadow-lg"/>
                    <path d="M180 226h44l28 32v30h-72z" fill="#fff"/>
                    <g style={{ transformOrigin: '82px 292px' }}><circle cx="82" cy="292" r="17" fill="#0B2A6B"/><circle cx="82" cy="292" r="7" fill="#F7931E"/></g>
                    <g style={{ transformOrigin: '150px 292px' }}><circle cx="150" cy="292" r="17" fill="#0B2A6B"/><circle cx="150" cy="292" r="7" fill="#F7931E"/></g>
                  </g>
                </motion.g>

                {/* Floating Pins */}
                <motion.g 
                   initial={{ opacity: 0, scale: 0 }}
                   animate={{ opacity: [0, 1, 1, 0], scale: [0, 1.2, 1, 0], y: [0, -10, 0, 0] }}
                   transition={{ duration: 8, repeat: Infinity, times: [0, 0.65, 0.9, 1] }}
                   style={{ transformOrigin: '470px 232px' }}
                >
                   <path d="M470 232c-10-12-14-18-14-24a14 14 0 0128 0c0 6-4 12-14 24z" fill="#F7931E"/>
                   <circle cx="470" cy="208" r="5" fill="#0B2A6B"/>
                </motion.g>
             </svg>

             <motion.div 
               className="absolute top-10 left-10 bg-white text-[#0B2A6B] p-3 px-6 rounded-md shadow-xl font-bold text-sm"
               animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
               transition={{ duration: 8, repeat: Infinity, times: [0, 0.15, 0.45, 0.5] }}
             >
               <Check className="inline-block mr-2 text-green-500" /> {t('fc1')}
             </motion.div>

             <motion.div 
               className="absolute bottom-40 right-10 bg-white text-[#0B2A6B] p-3 px-6 rounded-md shadow-xl font-bold text-sm"
               animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
               transition={{ duration: 8, repeat: Infinity, times: [0, 0.55, 0.85, 0.9] }}
             >
               <MapPin className="inline-block mr-2 text-[#F7931E]" /> {t('fc2')}
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee overflow-hidden bg-[#F7931E] text-[#0B2A6B] font-bold text-xl py-4 border-y-4 border-[#0B2A6B] -rotate-1 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[1,2,3,4].map(i => (
            <span key={i} className="flex gap-12 uppercase">
              Logistica Tunisie ✦ {t('mq')} ✦ COD ✦ 24 GOUVERNORATS ✦ STOCKAGE ✦ PICKING ✦ PACKING ✦ LIVRAISON
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="bg-[#0B2A6B] py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <Counter value={12000} label={t('s1')} />
          <Counter value={24} label={t('s2')} />
          <Counter value={98} suffix="%" label={t('s3')} />
          <div className="flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-md shadow-brutal">
            <b className="text-4xl md:text-5xl font-bold text-[#F7931E] font-sans tracking-tighter tabular-nums">{t('s4b')}</b>
            <span className="text-muted-foreground text-sm font-medium mt-2">{t('s4')}</span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id={t('n0').toLowerCase()} className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest rounded-full mb-4">{t('hwe')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('hwt')}</h2>
            <p className="text-[#9FB2DE] mt-4 max-w-2xl mx-auto font-light">{t('hws')}</p>
          </div>
          
          <div className="relative grid md:grid-cols-5 gap-8">
            <div className="absolute top-[44px] left-[10%] right-[10%] h-1 bg-white/10 hidden md:block" />
            
            {[
              { icon: ShoppingCart, t: 'h1t', d: 'h1d', id: 1 },
              { icon: Box, t: 'h2t', d: 'h2d', id: 2 },
              { icon: Scan, t: 'h3t', d: 'h3d', id: 3 },
              { icon: Truck, t: 'h4t', d: 'h4d', id: 4 },
              { icon: Wallet, t: 'h5t', d: 'h5d', id: 5 }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative w-20 h-20 rounded-full bg-[#081E4E] border-4 border-[#F7931E] flex items-center justify-center text-[#F7931E] shadow-xl transition-transform group-hover:scale-110">
                  <step.icon size={32} />
                  <span className={cn(
                    "absolute -bottom-2 -right-2 w-10 h-10 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-black text-sm shadow-brutal border-2 border-[#0B2A6B] z-20",
                    language === 'ar' && "-right-auto -left-2"
                  )}>
                    {step.id}
                  </span>
                </div>
                <h3 className="text-white mt-8 mb-2 text-lg font-bold">{t(step.t as any)}</h3>
                <p className="text-xs text-[#9FB2DE] leading-relaxed px-4">{t(step.d as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map - FULL VISIBILITY FIXED */}
      <section id={t('n6').toLowerCase()} className="py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center bg-white/5 rounded-[40px] p-8 shadow-2xl relative overflow-hidden group min-h-[600px]"
          >
             <div className="absolute inset-0 bg-[radial-gradient(#1F6FDB_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
             
             {/* Map SVG with adjusted ViewBox for 100% Visibility */}
             <svg viewBox="280 50 440 920" className="w-full h-full max-h-[800px] overflow-visible relative z-10 drop-shadow-2xl" role="img" preserveAspectRatio="xMidYMid meet">
                <g className="map-governorates">
                  <path 
                    className="hover:fill-[#F7931E]/20 transition-all duration-300 cursor-pointer" stroke="#1F6FDB" strokeWidth="2" fill="rgba(31,111,219,0.1)"
                    d="M375.8 681.5l0.8-0.4 2.6-0.4 1.7-0.1 2.7-0.5 1.9-0.4 2.8-0.4 2.2-0.1 1.7-0.4 3-0.6 0.6-0.1 4.7-0.9 3.5-0.5 3.1-0.6 14.8-2.3 3.7-0.8 3.8-0.7 12.5-2.7 0.9 0 0.8 0.1 2.4-0.7 2.5-0.6 4-1.1 1.5-0.5 15-3.6 3.7-1 4.4-1 1.8-0.6 9.3-2.6 2.7-0.6 1.1-0.5 1.2-0.5 2.1-1.3 1.6-1.2 1.7-1.7 0.9-0.8 0.2 0 0.2 0.1 0.1 0.2 0.2-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0-0.1 0.2 0 0.2 0 0.2 0 0.2 0.1 0.3 0 0.2 0 0.3-0.1 0.2-0.1 0-0.2 0-0.1 0.1 0 0.2 0 0.1 0 0.2 0.2 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0 0.2-0.1 0.2-0.3 0.2-0.2 0.2-0.1 0.1-0.3 0.3-0.3 0.3-0.1 0.4 0 0.6-0.1 0.4-0.1 0.4-0.1 0.4-0.1 0.2-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0-0.1 0.1-0.1 0.2 0.1 0.1 0.1 0.3 0.1 0.2 0.1 0.3 0 0.2-0.1 0-0.1 0-0.2 0.1-0.2 0.3-0.2 0.3-0.1 0.3 0 0.4 0 0.4 0 0.2 0 0.4-0.1 0.2-0.1 0.1-0.1 0-0.2 0-0.2-0.1-0.2 0-0.1 0-0.2 0-0.1 0.1-0.1 0.2 0 0.3 0 0.2 0 0.3 0 0.3-0.1 0.2 0 0.1 0 0.1 0 0.1-0.2 0.2-0.4 0.3-0.1 0.3-0.1 0.4 0 0.2 0 0.1 0 0.2 0.2 0.1 0.1 0 0.1 0 0.2 0 0.1 0.1 0 0.1 0 0.2 0 0.3-0.2 0.2-0.1 0.1-0.1 0.1 0 0.3 0.2 0.2 0 0.2 0.1 0.1 0 0.2-0.1 0.1-0.1 0.3 0 0.4 0 0.2 0.2 0.1 0.1 0.1 0.2 0.1 0.2 0 0.2 0.1 0.1 0.3 0.1 0.2 0 0.1-0.2 0.1-0.1 0.2-0.1 0.1 0 0.1 0.2 0.1 0.1 0.2 0.1 0.2 0 0.2 0 0.4 0.1 0.1 0.5 0.1 0.2 0 0.3 0.1 0.3 0.1 0.1 0 0.2-0.1 0.2 0 0.2 0.2 0.3 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0-0.1 0.2-0.1 0.1 0.1 0.1 0.1 0 0.2 0 0.3 0.1 0.2 0.2 0.2 0.2 0.1 0.2 0.1 0.2 0.1 0.1 0.1 0 0.2-0.1 0.2 0.1 0.2 0.1 0.3 0.3 0.4 0.2 0.3 0 0.2 0 0.2 0 0.1 0.3 0.3 0.2 0.2 0.2 0.6 0.1 0.4 0 0.3 0 0.2 0 0.1 0.2 0 0.2 0 0.2 0 0.2-0.1 0.4-0.1 0.3 0 0.3-0.1 0.1 0 0.2-0.1 0.1-0.1 0.2 0.1 0.6 0.7 0.4 0.3 0.2 0.3 0 0.3 0.1 0.9 0.1 0.3 0.1 0.1 0.1 0.1 0.1 0 0.3 0 0.3 0 0.5 0.1 0.1 0 0.2 0 0.1 0 0.2 0 0.2 0.2 0.1 0.3 0.3 0.2 0.2 0.3 0.3 0.2 0.3 0.1 0.2 0 0.2 0.1 0.1 0.2 0.2 0.1 0.2 0 0.1-0.1 0.1 0 0.1 0 0.1 0.2 0.2 0.1 0.2 0.2 0.3 0 0.2 0 0.2 0.1 0.3 0.1 0.1 0.2 0.1 0.5 0 0.3-0.1 0.2 0 0.3 0 0.2 0.2 0.2 0.1 0.1 0.2 0 0.2 0.1 0.1 0.1 0.2 0.4 0.2 0.3 0.2 0.2 0.2 0.1 0.3 0.1 0.2 0.3 0.1 0.2 0.3 0 0.2 0.1 0.1 0 0.1 0 0.2 0.1 0.2 0.2 0.1 0 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.3 0 0.3-0.1 0.3 0 0.2 0 0.2 0 0.2 0 0-0.1 0.2-0.1 0.2-0.2 0.2-0.1 0.2-0.2 0.2-0.5 0-0.4 0.1-0.3-0.2-0.7 0-0.3 0-0.3 0-0.2 0.3-0.5-0.2-0.2 0-0.4-0.1-0.2-0.3-0.1-0.1 0-0.5-0.1-0.2-0.2-0.3-0.4-0.2-0.2-0.2-0.1-0.5-0.2-0.4-0.1-0.3-0.1-0.3-0.4-0.3-0.1-0.6-0.3-0.4-0.2-0.4-0.3-0.3-0.3-0.1-0.3-0.1-0.2-0.3-0.4-0.4-0.4-0.3-0.3-0.1-0.4-0.1-0.2-0.4-0.4-0.3-0.1-0.4-0.1-0.2-0.2-0.4-0.3 0.3-0.1 0.2-0.2 0.3-0.1 0.5 0 0.2-0.1 0.4-0.5 0.1-0.3 0.2-0.5 0.5-0.4 0.5-0.3 0.6-0.5 1-1.2 0-0.6-0.5-0.9-0.6-1-0.2-0.6-0.2-1.1-0.3-1.3 1.4-0.3 1.1 0.4 0.7 0.2 0.4-0.3 0.4-1.1 0.8-1.1 0.3-0.4 0.3-0.3 0.2-0.6 0.2-0.9 0.2-0.2 0.1-0.2-0.1-0.2-0.1-0.3-0.1-0.3-0.3-0.4-0.1-0.1-0.3-0.1-0.2-0.2-0.1-0.4-0.3-0.3-0.3-0.2-0.2-0.2-0.4-0.3-0.2-0.3-0.1-0.3 0-0.3 0.2-0.7-0.1 0-0.2-0.1-0.1-0.1-0.1-0.1-0.1-0.3 0-0.2 0-0.2 0.2-0.2 0.1-0.2 0-0.3 0-0.1 0.2-0.2 0-0.3-0.1-0.2-0.2-0.4-0.1-0.2-0.1-0.2-0.1-0.2-0.1 0-0.2-0.2-0.1-0.1 0-0.1 0-0.2 0.1-0.3 0.2-0.3 0-0.3 0.1-0.4-0.1-0.2-0.2-0.2-0.2-0.2-0.2 0 0-0.1 0-0.1 0.2-0.1 0.2-0.5 0.2-0.2 0.1-0.3 0.3-0.3 0.2-0.3 0.3-0.2 0.2-0.2 0.3 0 0.1 0.1 0.1 0.1 0.1 0.2 0.2 0 0.2-0.1 0.3-0.2 0.3-0.2 0.7-0.3 0.5 0 0.5-0.1 0.6 0 0.6 0.1 0.5 0 0.4-0.1 0.2-0.3 0.2-0.3 0.3-0.4 0.3-0.3-0.5-1.7-0.8-0.4-2.2-0.5-1.3 0.5-1.3-0.4-0.8-0.5-1.2-1.1-0.4-1.2 0-0.8-0.3-1.4-0.3-0.6-0.7-0.8-0.4-0.4-1.3 0.2-0.5-0.4 0.3-0.9 1.1-0.9 0.1 0 0.7 0.1 0.2 0.1 0.5 0.3 0.1 0.3 0 0.4 0.1 0.5 0.3 0.2 1 0.3 0.7 0.2 0.6-0.1 0.2-0.2 0.3-1.2 0.3-0.5 0.5-0.4 0.5 0 0.2-0.1 0.1 0 0.6 0.2 0.7-0.1 1.2 0.4 1.2 0.2 0.9 0.1 0.9-0.4 1-0.2 0.7 0.1 1.4 0.3 0.8 0.1 0.1-0.1 0.1 0 0.2 0 0.1 0.1 0.1 0 0.2 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0.2 0.2 0.2 0 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0 0.1 0 0.2 0 0-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.1-0.1 0.2-0.2 0.1-0.1 0-0.1 0.2-0.3 0.1-0.2 0-0.1 0-0.1 0-0.1 0-0.1 0.1-0.1 0.2-0.1 0.2-0.1 0.1-0.1 0-0.1 0.1 0 0.1-0.1 0.3 0 0.2 0 0.2 0 0-0.1 0.2-0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0.2-0.1 0.3-0.1 0.1-0.1 0.2-0.1 0.1 0 0.1-0.1 0.1-0.1 0.2-0.1 0.3-0.3 0.2 0 0.2 0 0.1 0 0.1 0 0.1 0.2 0.2 0.2 0.1 0.1 0.1 0 0.2 0.3 0.1 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.5 0.3 0.1 0 0.2-0.1 0.2 0.1 0.2 0 0.3-0.5 0.8-0.4 0.6-0.3 1-0.4 0.1-0.2 0.6-0.4 0.9-0.7 1.7-1.9 1.9-1.6 0.9-0.5 0.4-0.2 0.2-0.1 1.1-0.4 0.3-0.2 1.1-0.3 0-0.1 0.3-0.1 0.8-0.3 0.1-0.1 0.1 0 0.1-0.1 0-0.1 0.2-0.1 0.3 0.1 0.1 0.1 0.2 0 0.1 0 0.2 0 0.1 0 0.1 0 0-0.1 0.1 0 0.2 0 0.2-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.2-0.2 0.3-0.1 0.3 0 0.1 0 0.2-0.2 0.2-0.1 0.1-0.1 0.2-0.3 0.2 0 0 0.1 0.1 0 0.2 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.3-0.1 0 0.1 0.1 0.1 0 0.2 0.2-0.1 0.3-0.1 0.3-0.1 0.4-0.2 0.1 0.1 0.1 0 0.1 0 0.1 0.2 0 0.1 0 0.1 0.1 0 0.3-0.2 0.2-0.1 0.2 0.1 0.1-0.1 0.1 0 0-0.1 0.2 0 0.1-0.2 0.1-0.3 0.2-0.2 0.2-0.3 0.2-0.2 0.3 0 0.2-0.2 0.3-0.1 0.2-0.1 0.2-0.1 0.1 0 0.1 0 0.2 0 0.2-0.1 0.1-0.1 0-0.1 0.1-0.3 0.1-0.2 0.4-0.3 0.2-0.1 0.3-0.2 0.2 0 0.2-0.1 0.3-0.1 0.4-0.1 0.3-0.3 0.5-0.2 0.3-0.2 0.1 0 0.2 0 0.2-0.1 0.3 0 0.1-0.1 0.2-0.1 0.2 0 0.2 0 0.1 0 0.1-0.2 0.1 0 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2 0 0.1-0.1 0.1-0.1 0.1 0 0.1 0 0.2-0.1 0.1 0 0.2 0 0-0.1 0.1-0.1 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2 0 0.1 0 0.1 0 0.1 0 0-0.1 0.1-0.1 0-0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1-0.2 0.2-0.1 0-0.1 0.1-0.1 0.1-0.1 0 0.1 0 0.2 0.1 0.1 0 0.1 0 0.2 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.2 0 0.2 0.1 0-0.1 0.4 0 0.2 0 0.1 0 0.1 0 0.1 0.2 0 0.1 0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.2 0 0.2 0.2 0.7 0.1 1.5 0.2 1.8 0.2 2.6 0.2 3.9 0.5-0.1 0.3-0.1 0.2-0.1 0.2-0.2 0.1-0.1 0.1-0.2 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.1 0-0.2 0.1-0.2 0.2-0.1 0.1-0.2 0.3-0.2 0.2-0.2 0.3-0.2 0.2-0.2 0.2-0.4 0.1-0.3 0.2-0.5 0.3-0.2 0.2 0 0.1 0 0.2 0 0.3 0 0.2-0.1 0.3-0.2 0.3-0.1 0.1-0.2 0.1-0.3 0.1-0.2 0.2-0.3 0.2-0.2 0.2-0.1 0-0.3 0.1-0.4 0.2-0.2 0-0.2-0.1-0.1-0.1-0.2-0.1-0.1 0-0.1 0-0.3 0-0.2 0.1-0.4 0-0.2 0-0.1 0.1-0.1 0.1-0.2 0.2 0.8 1.1 0.1 0.2 1.8 2.5 1 0.7 2.2 0.2 0.5 0 2.2 0.3 1.2 0.1 3 0.3 4.5 0.8 0.4 0.1 0.2 0.1 0.5 0.1 0.2 0 0.3 0 0.2 0 0.2-0.2 0.2 0 0.3 0 0.5 0 0.5 0.2 0.1 0 0.2 0.1 0.1 0 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.1 0.1 0 0.2-0.1 0.4-0.1 0.1 0 0.2 0 0.2 0 0.3 0.3 0.4 0.3 0.2 0 0.1 0.1 0.3 0.1 0.5 0.1 0.2-0.1 0.2-0.1 0.3-0.1 0.3 0 0.5 0.1 0.4 0 0.5 0.1 0.3 0.1 0.3 0.1 0.4-0.1 0.5 0.1 0.2 0.1 0.2 0 0.2-0.1 0.2 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0 0.1 0.1 0 0.1 0 0 0.1 0.1 0 0.1 0 0.2 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0 0.2 0 0.2 0 0.2 0 0.1 0 0.2 0 0.2 0 0.3 0.1 0.4 0 0.5 0.1 0.4 0 0.3-0.1 0.1-0.1 0.2 0 0.1 0 0.1 0 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0.1 0.3 0.2 0.1 0 0.1 0 0 0.1 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0 0.2 0 0.1 0 0.2 0 0.1-0.1 0.2-0.1 0.1-0.2 0.1-0.3 0.1-0.2 0.2-0.1 0.2-0.1 0.2 0 0.2 0 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1-0.1 0.1-0.1 0-0.1 0.1-0.1 0.1 0 0.1 0 0.1-0.1 2.7 0.4 5 0.8 1.9 0.2 0.7 0.1 0.1 0.1 0.7 0.1 1-1.1 0.1-0.2 1.3-0.5 0.7-0.2 0.1 0.9-0.4 2.7 0.1 0.9-0.1 0 0 0.1 0.1 0 0 0.1-0.1 0 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0 0 0.1-0.1 0.1 0 0.2 0.1 0-0.1 0.1-0.1 0.2-0.1 0.1 0 0.1-0.1 0-0.1 0.1-0.1 0 0 0.1-0.1 0.1 0 0.2-0.1 0.2-0.1 0.1 0 0.1-0.1 0.1-0.1 0 0 0.1 0 0.1 0 0.1 0.1 0 0.1 0 0.1 0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0.1 0 0 0.1 0.1 0.1 0 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.3-0.1 0.2-0.1 0.1 0 0.1 0.1 0.1 0.2 0.5 0.1 0.3 0 0.4 0 0.4 0 0.2 0 0.1 0 0.2 0 0.1 0.1 0.1 0.2 0.2 0.3 0.3 4.1 8.7 0.7 0.9 0 0.2 0 0.1 0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.2 0.2 0.1 0.2 0 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0.2 0.2 0 0.2 0.2 0.2 0.2 0.3 0.3 0.4 0 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0.1 0.2 0.1 0.1 0 0.2 0.1 0.2 0 0.1 0 0.1 0 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.3 0 0.2 0 0.2 0 0.1 0 0.1-0.1 0.3 0 0.2-0.1 0.1 0 0.2 0 0.5 0 0.2 0 0.6 0 0.3 0 0.2-0.1 0.5 0 0.4-0.1 0.1 0 0.3-0.1 0.7 0.2 0.7 0.2 0.9 0.4 1.5 0.1 0.3 0.1 0.5 0.1 0.1 0 0.4 0.1 0.5 0.1 0.5 0 0.6 0.1 1.1 0.1 1.2 0.1 0.9 0 0.2 0 0.4 0.1 0.6 0 0.7 0 0.3 0.1 0.6-4.4 5.1 1.2 2.1 2 5.7 0.7 2 2.3 7.7 5.9 15.2 2 2.5 0.5 1.3 1.2-0.2 2.8-0.6 2.7-1.1 1.6-0.1 1.9-0.6 1.7 1.3 0 0.1 0 0.1 0 0.1-0.2 0.1-0.2 0.1-0.1 0.2-0.1 0.1 0 0.2 0 0.2 0 0.1 0 0.1 0 0.1 0 0.1 0 0.2-0.1 0-0.2 0.1-0.3 0.2-0.2 0.2-0.3 0.1-0.1 0-0.1 0.1-0.1 0-0.2 0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.1 0.2-0.1 0.2-0.3 0.3-0.2 0.2-0.2 0.1-0.1 0.1-0.1 0-0.1 0-0.3 0-0.2 0-0.3 0.1-0.3 0.1-0.2 0-0.1 0.1-0.2 0-0.3 0.3-0.6 0.5-0.4 0.3-0.8 0.7-0.2 0.1-0.5 0.4-0.3 0.3-0.1 0.1-0.2 0.1-0.8 0.3-0.3 0.2-0.4 0.2-0.1 0-0.2 0-0.2 0-0.3 0-0.1 0-0.2 0.1-0.1 0-0.1 0.1-0.1 0-0.2 0.1-0.2 0-0.6 0.3-0.1 0.1-0.1 0.2-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0 0 0.1-0.1 0.2-0.1 0.1-0.2 0.2-0.1 0-0.1 0-0.1 0-0.3 0.1-0.2 0.1-0.2 0.1-0.6 0.2-0.1 0-0.3-0.1-1.8 4.4-1.9 1.1-4.7 2.8-1.7 0.8-1 0.4-1.2 0.4-0.6 0.4-1.5 1.3-1 0.7-2.2 1.2-1 0.3-2.7 1.2-1.1 0.9-1.6 1.1-7.7 3.7-2.8 3-4.2 9.7-3.4 3.3-2.4 1.6-0.7-0.5-2.4 2.3-0.3 0-0.5 0-0.8 0.1-1.3-0.6-2-0.5-0.7-0.1-1 0-0.5 0.4-0.7 0.6-0.4 0.1 0 0.2 0.1 0.1-0.1 0.2-1.1-0.2-2.4 2.5-0.8 9.8-1.4 4-4.3 4.1-1.8 4.2-1.2 1.8-0.8 0.8-0.2 0-0.5 0-1.3 0.7-1.4 0.6-1.1 0.1-1 0.1-1-0.1-1.6 0-1.7-0.2-1.4-0.5-1.5-0.4-3.3 2-2.1 1.2-1.1 0.7-0.4 0-1.2 0.9-0.6 0.5-3.5 2.8-7 12.4-6.5 7.4-1.7 2.8-1.1 7.8 0.2 2.1 7.7 20.7 3.2 12.7 3.2 6.8 0.2 2.3-0.6 4.6 0.4 4.3 2.6 8.4 0 4-1.6 4.8-6.4 13.3-9.4 10.7-10.9 17.6-12.8 16.7-0.8 0.5-3.1 0-1 0-2 0.8-1.3 0.6-1.9 0.1-3 0.8-19.1 10.1-1.6-7.6-0.3-1.5-2-8.6-1.9-8.6-4.6-21.3-3.1-13.9-0.6-2.7-2.6-11.3-1.2-5.5-2.7-12.6-1.1-4.9-2.5-11.2-1.4-6.1-3.4-15.9-0.3-1.3-2.6-11-1.1-5.4-0.6-2.8-1.9-8.1-1.5-6.6-2.6-11.5-1.4-6.2-3.1-13.5-0.7-3.7-2.7-11.5-1.3-5.7-0.8-3.7-3.4-2.3-16.2-11.1-14.5-9.8-8.8-6.1-5.4-3.6-12.4-8.3-6-4-2.7-1.9-4.2-2.8-0.3-0.4z" 
                  />
                  {/* Presence Points */}
                  {[
                    { x: 563, y: 142, n: 'Tunis' },
                    { x: 593, y: 272, n: 'Sousse' },
                    { x: 577, y: 398, n: 'Sfax' },
                    { x: 484, y: 110, n: 'Bizerte' },
                    { x: 519, y: 511, n: 'Gabès' }
                  ].map((c, i) => (
                    <g key={i}>
                      <circle cx={c.x} cy={c.y} r="12" fill="#F7931E" className="animate-ping opacity-30"/>
                      <circle cx={c.x} cy={c.y} r="6" fill="#F7931E" className="shadow-lg"/>
                      <text x={c.x + 15} y={c.y + 5} fill="#fff" className={cn("text-[14px] font-bold pointer-events-none drop-shadow-md", language === 'ar' && "font-arabic")}>
                        {language === 'ar' ? (c.n === 'Tunis' ? 'تونس' : c.n === 'Sousse' ? 'سوسة' : c.n === 'Sfax' ? 'صفاقس' : c.n === 'Bizerte' ? 'بنزرت' : 'قابس') : c.n}
                      </text>
                    </g>
                  ))}
                </g>
             </svg>
          </motion.div>

          <div>
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('cve')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('cvt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('cvs')}</p>
            <div className="grid gap-4 mt-8">
              {[ {k: 'z1', t: 'z1t', d: 'z1d'}, {k: 'z2', t: 'z2t', d: 'z2d'}, {k: 'z3', t: 'z3t', d: 'z3d'} ].map((z, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-md flex items-center gap-6 shadow-lg transition-all hover:bg-white/10">
                  <span className="bg-[#F7931E] text-[#0B2A6B] font-bold text-xs p-2 px-4 rounded-sm min-w-[100px] text-center">{t(z.k as any)}</span>
                  <div>
                    <b className="block text-white mb-1">{t(z.t as any)}</b>
                    <small className="text-[#9FB2DE]">{t(z.d as any)}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COD Flow */}
      <section className="bg-[#0E3580] py-24" id="cod">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('coe')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('cot')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light max-w-2xl mx-auto">{t('cos')}</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {[
              { i: Store, t: 'f1', d: 'f1d', type: 'icon' },
              { i: Truck, t: 'f2', d: 'f2d', type: 'icon' },
              { i: 'coin', t: 'f3', d: 'f3d', type: 'coin' }, 
              { i: BarChart, t: 'f4', d: 'f4d', type: 'icon' }
            ].map((node, idx) => (
              <div key={idx} className="flex items-center gap-4 lg:gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/10 p-8 rounded-md w-48 shadow-brutal transition-transform hover:-translate-y-2 hover:border-[#F7931E]/50"
                >
                  <div className="w-16 h-16 rounded-full bg-[#F7931E]/10 flex items-center justify-center mb-6 relative">
                    {node.type === 'coin' ? (
                       <div className="animate-coin">
                          <svg viewBox="0 0 40 40" width="40" height="40">
                            <circle cx="20" cy="20" r="16" fill="#F7931E"/>
                            <circle cx="20" cy="20" r="11" fill="none" stroke="#0B2A6B" strokeWidth="2"/>
                            <text x="20" y="25" textAnchor="middle" fontFamily="Inter" fontWeight="800" fontSize="13" fill="#0B2A6B">DT</text>
                          </svg>
                       </div>
                    ) : (
                      <node.i className="text-[#F7931E]" size={32} />
                    )}
                  </div>
                  <b className="block mb-2 font-bold text-white text-lg">{t(node.t as any)}</b>
                  <p className="text-[#9FB2DE] text-xs leading-relaxed">{t(node.d as any)}</p>
                </motion.div>
                
                {idx < 3 && (
                  <svg className={cn("hidden lg:block w-12 text-[#F7931E]/40", language === 'ar' && "rotate-180")} viewBox="0 0 54 20" fill="none">
                    <path d="M0 10H48M42 4l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeDasharray="5 5"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Mockup */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('dbe')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('dbt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('dbs')}</p>
          </div>

          <div className="bg-[#F4F6FA] rounded-md shadow-2xl overflow-hidden border-2 border-white/10 max-w-5xl mx-auto" dir="ltr">
            <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-xs font-bold text-gray-400 font-sans tracking-widest">app.logistica.tn</span>
              </div>
              <div className="flex bg-gray-100 p-1 rounded-sm">
                {['Today', '7 days', '30 days'].map((tab, i) => (
                  <button 
                    key={i}
                    onClick={() => setDashRange(i)}
                    className={cn(
                      "px-4 py-1.5 text-[10px] font-bold uppercase rounded-sm transition-all",
                      dashRange === i ? "bg-[#0B2A6B] text-white shadow-sm" : "text-gray-500 hover:text-[#0B2A6B]"
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {['Orders', 'Delivered', 'COD (DT)', 'Returns'].map((k, i) => (
                <div key={i} className="bg-white p-4 rounded-sm border border-gray-100 shadow-sm">
                  <small className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{k}</small>
                  <motion.b 
                    key={`${dashRange}-${i}`}
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="block text-2xl font-bold text-[#0B2A6B] font-sans my-1"
                  >
                    {dashData[dashRange].k[i].toLocaleString('en')}
                  </motion.b>
                  <em className="text-[10px] font-bold text-green-500 font-sans">▲ {dashData[dashRange].t[i]}%</em>
                </div>
              ))}

              <div className="lg:col-span-3 bg-white p-6 rounded-sm border border-gray-100 shadow-sm h-64 flex flex-col justify-between">
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Orders Performance</h5>
                <div className="flex items-end gap-3 h-40">
                  {dashData[dashRange].b.map((h, idx) => (
                    <motion.div 
                      key={`${dashRange}-${idx}`}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      className={cn(
                        "flex-1 rounded-t-sm transition-all hover:opacity-80 cursor-pointer",
                        idx % 2 === 0 ? "bg-[#F7931E]" : "bg-[#0B2A6B]"
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm overflow-hidden">
                <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Live Feed</h5>
                <div className="space-y-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="flex justify-between items-center text-[10px] font-medium p-2 bg-gray-50 rounded-sm">
                      <span className="text-gray-500">#LG-{4820+i} · Tunis</span>
                      <span className="text-green-600 font-bold">OK ✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-[#9FB2DE] text-[11px] mt-8 uppercase tracking-widest">{t('dbd')}</p>
        </div>
      </section>

      {/* Cost Calculator */}
      <section className="bg-[#0E3580] py-24" id={t('n4').toLowerCase()}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('cae')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('cat')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('cas')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-md shadow-2xl text-[#0B2A6B]">
               <div className="mb-10">
                 <label className="flex justify-between font-bold mb-4"><span>{t('ca1')}</span> <b className="text-blue-600 font-sans">{calcOrders.toLocaleString('en')}</b></label>
                 <Slider 
                   min={50} 
                   max={5000} 
                   step={50} 
                   value={[calcOrders]} 
                   onValueChange={(val) => setCalcOrders(val[0])} 
                   className="cursor-pointer"
                 />
               </div>
               
               <div className="mb-10">
                 <label className="font-bold mb-4 block">{t('ca2')}</label>
                 <div className="flex flex-wrap gap-3">
                   {[ {z:1, t:'ca3'}, {z:1.25, t:'ca4'}, {z:1.5, t:'ca5'} ].map((b, idx) => (
                     <button 
                       key={idx}
                       onClick={() => setCalcSpeed(b.z)}
                       className={cn(
                         "flex-1 min-w-[100px] h-12 rounded-sm border-2 font-bold text-xs uppercase tracking-widest transition-all",
                         calcSpeed === b.z ? "bg-[#0B2A6B] text-white border-[#0B2A6B] shadow-md" : "bg-white text-[#0B2A6B] border-gray-200 hover:border-[#0B2A6B]"
                       )}
                     >
                       {t(b.t as any)}
                     </button>
                   ))}
                 </div>
               </div>

               <div>
                 <label className="flex justify-between font-bold mb-4"><span>{t('ca6')}</span> <b className="text-blue-600 font-sans">{calcRet}%</b></label>
                 <Slider 
                   min={0} 
                   max={30} 
                   step={1} 
                   value={[calcRet]} 
                   onValueChange={(val) => setCalcRet(val[0])} 
                   className="cursor-pointer"
                 />
               </div>
            </div>

            <div className="bg-[#F7931E] p-8 rounded-md shadow-2xl text-[#0B2A6B] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 mb-4">{t('ca7')}</span>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl lg:text-7xl font-bold font-sans tracking-tighter">{total.toLocaleString('en')}</span>
                <span className="text-xl font-bold uppercase">DT HT</span>
              </div>
              <div className="grid gap-4 border-t border-[#0B2A6B]/10 pt-8">
                {[ {l: 'ca8', v: storage}, {l: 'ca9', v: prep}, {l: 'ca10', v: delivery}, {l: 'ca11', v: returns} ].map((line, i) => (
                  <div key={i} className="flex justify-between border-b border-[#0B2A6B]/5 pb-2">
                    <span className="text-sm font-medium opacity-80">{t(line.l as any)}</span>
                    <b className="font-sans font-bold">{line.v.toLocaleString('en')} DT</b>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-8 opacity-60 leading-relaxed italic">{t('can')}</p>
              <Button className="mt-8 h-16 text-lg font-bold bg-[#0B2A6B] text-white shadow-xl hover:bg-[#0B2A6B]/80 border-none rounded-sm">
                {t('ca12')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0E3580] py-24" id={t('n3').toLowerCase()}>
        <div className="max-w-[820px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('n3')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('fqt')}</h2>
          </div>
          
          <div className="grid gap-4">
            {(t('faq' as any) as any[]).map((item: string[], idx: number) => (
              <details key={idx} className="group bg-white/5 border border-white/10 rounded-md overflow-hidden transition-all open:bg-white/10">
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold text-lg select-none">
                  <span>{item[0]}</span>
                  <Plus className="text-[#F7931E] transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-6 pb-6 text-[#9FB2DE] leading-relaxed border-t border-white/5 pt-4">
                  {item[1]}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#F7931E] rounded-md p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
             <svg className="absolute -right-20 -bottom-20 w-80 opacity-10 animate-[spin_40s_linear_infinite]" viewBox="0 0 175 175">
               <polygon points="0,174.5 174.5,87.3 61.1,87.3" fill="#0b2a6b"/>
               <polygon points="61.1,87.3 174.5,87.3 0,0" fill="#1f6fdb"/>
               <polygon points="0,174.5 61.1,87.3 0,87.3" fill="#fff"/>
             </svg>
             <div className="relative z-10">
                <h2 className="text-[#0B2A6B] text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">{t('ctat')}</h2>
                <p className="text-[#0B2A6B]/80 mb-10 max-wxl mx-auto font-medium">{t('ctas')}</p>
                <div className="flex flex-wrap justify-center gap-4">
                   <Button className="h-16 px-12 bg-[#0B2A6B] text-white font-bold text-xl shadow-xl hover:bg-[#0B2A6B]/80 border-none rounded-sm">
                     {t('ctab')}
                   </Button>
                   <Button variant="outline" className="h-16 px-12 border-2 border-[#0B2A6B] text-[#0B2A6B] bg-transparent hover:bg-[#0B2A6B] hover:text-white font-bold text-xl rounded-sm">
                     {t('ctab2')}
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Logo variant="white" />
            </div>
            <p className="text-sm text-[#7E93C4] leading-relaxed">{t('fa')}</p>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh1')}</h4>
            <ul className="grid gap-3 text-sm text-[#7E93C4]">
              <li><Link href="#services" className="hover:text-[#F7931E] transition-colors">{t('n1')}</Link></li>
              <li><Link href="#how" className="hover:text-[#F7931E] transition-colors">{t('n0')}</Link></li>
              <li><Link href="#plans" className="hover:text-[#F7931E] transition-colors">{t('n7')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh2')}</h4>
            <ul className="grid gap-3 text-sm text-[#7E93C4]">
              <li><Link href="#tracking" className="hover:text-[#F7931E] transition-colors">{t('n5')}</Link></li>
              <li><Link href="#coverage" className="hover:text-[#F7931E] transition-colors">{t('n6')}</Link></li>
              <li><Link href="#faq" className="hover:text-[#F7931E] transition-colors">{t('n3')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh3')}</h4>
            <div className="text-sm text-[#7E93C4] grid gap-3">
              <a href="mailto:contact@logistica.tn" className="hover:text-[#F7931E] transition-colors">contact@logistica.tn</a>
              <span>+216 00 000 000</span>
              <span>Tunis, Tunisie</span>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pt-10 border-t border-white/5 text-center text-xs text-[#7E93C4] font-medium tracking-wide">
          {t('foot')}
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/21600000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:scale-110 transition-transform z-[100]"
      >
        <MessageCircle size={32} />
      </a>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes road { from { strokeDashoffset: 0; } to { strokeDashoffset: -30; } }
        @keyframes bob { to { transform: translateY(-3px); } }
        @keyframes coin { 0%, 100% { transform: rotateY(0); } 50% { transform: rotateY(180deg); } }
        .animate-coin { animation: coin 3s ease-in-out infinite; transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
