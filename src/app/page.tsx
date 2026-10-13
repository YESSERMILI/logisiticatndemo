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
          <Link href="#" className="transition-transform hover:-translate-y-1 group">
            {/* The Logo component handles its own colors via the variant prop */}
            <Logo variant="white" />
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

          {/* Hero SVG Scene */}
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
                <path d="M0 300 H560" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="14 16" className="animate-[road_1s_linear_infinite]"/>
                
                {/* Truck */}
                <motion.g 
                  animate={{ x: [-400, 30, 30, 650] }} 
                  transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.6, 1], ease: "easeInOut" }}
                >
                  <g className="animate-[bob_0.5s_ease-in-out_infinite_alternate]">
                    <rect x="40" y="206" width="140" height="82" rx="4" fill="#1F6FDB" className="shadow-lg"/>
                    <path d="M180 226h44l28 32v30h-72z" fill="#fff"/>
                    <g className="animate-spin origin-center" style={{ transformOrigin: '82px 292px' }}><circle cx="82" cy="292" r="17" fill="#0B2A6B"/><circle cx="82" cy="292" r="7" fill="#F7931E"/></g>
                    <g className="animate-spin origin-center" style={{ transformOrigin: '150px 292px' }}><circle cx="150" cy="292" r="17" fill="#0B2A6B"/><circle cx="150" cy="292" r="7" fill="#F7931E"/></g>
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
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#081E4E] border-4 border-[#F7931E] flex items-center justify-center text-[#F7931E] shadow-xl transition-transform hover:scale-110">
                  <step.icon size={32} />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-bold text-xs">{step.id}</span>
                </div>
                <h3 className="text-white mt-6 mb-2 text-lg font-bold">{t(step.t as any)}</h3>
                <p className="text-xs text-[#9FB2DE] leading-relaxed px-4">{t(step.d as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#0E3580] py-24" id={t('n1').toLowerCase()}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('chip')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('svt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('svf')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: ShoppingCart, t: 't1', d: 'd1', c: 'bg-blue-600' },
              { icon: Box, t: 't2', d: 'd2', c: 'bg-green-600' },
              { icon: Target, t: 't3', d: 'd3', c: 'bg-[#F7931E]' },
              { icon: ClipboardList, t: 't4', d: 'd4', c: 'bg-purple-600' },
              { icon: Truck, t: 't5', d: 'd5', c: 'bg-teal-600' },
              { icon: MapPin, t: 't6', d: 'd6', c: 'bg-pink-600' },
              { icon: Wallet, t: 't7', d: 'd7', c: 'bg-[#0B2A6B]' },
              { icon: RefreshCw, t: 't8', d: 'd8', c: 'bg-indigo-600' },
              { icon: Headset, t: 't9', d: 'd9', c: 'bg-emerald-600' },
              { icon: BarChart, t: 't10', d: 'd10', c: 'bg-amber-600' }
            ].map((s, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-md shadow-lg text-[#0B2A6B] flex flex-col items-center text-center transition-all hover:shadow-[#F7931E]/20"
              >
                <div className={cn("w-14 h-14 rounded-md flex items-center justify-center text-white mb-6", s.c)}>
                  <s.icon size={28} />
                </div>
                <h3 className="text-[#0B2A6B] font-bold mb-3 text-sm">{t(s.t as any)}</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">{t(s.d as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warehouse / Conveyor */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-[#F7931E] font-bold text-xs uppercase tracking-widest">{t('wre')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('wrt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('wrs')}</p>
            <ul className="grid gap-6 mt-8">
              {[ {i: Scan, t: 'wb1'}, {i: ShieldCheck, t: 'wb2'}, {i: ClipboardList, t: 'wb3'} ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start text-[#CFDAF5]">
                  <div className="bg-[#F7931E]/10 p-2 rounded-md"><item.i className="text-[#F7931E]" size={24} /></div>
                  <span className="pt-1">{t(item.t as any)}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#0B2A6B] p-8 border-2 border-white/10 rounded-md shadow-2xl reveal d2 overflow-hidden">
             <svg viewBox="0 0 480 240" className="w-full h-auto" role="img">
                <rect x="0" y="180" width="480" height="20" fill="#081E4E"/>
                <path d="M0 190 H480" stroke="rgba(255,255,255,0.2)" strokeWidth={3} strokeDasharray="10 10" className="animate-[road_0.6s_linear_infinite]"/>
                
                {/* Boxes on belt */}
                {[0, 160, 320].map((offset, idx) => (
                  <motion.g 
                    key={idx}
                    animate={{ x: [-60, 480] }}
                    transition={{ duration: 6, repeat: Infinity, delay: idx * 2, ease: "linear" }}
                  >
                    <rect x="0" y="144" width="46" height="36" fill={idx === 1 ? "#fff" : idx === 2 ? "#1F6FDB" : "#F7931E"} className="shadow-lg"/>
                    <path d="M0 160h46M23 144v36" stroke={idx === 1 ? "#1F6FDB" : "#0B2A6B"} strokeWidth={2} style={{ opacity: 0.3 }}/>
                  </motion.g>
                ))}

                {/* Scanner Gate */}
                <g>
                  <rect x="250" y="100" width="10" height="100" fill="#9FB2DE" rx="2"/>
                  <rect x="340" y="100" width="10" height="100" fill="#9FB2DE" rx="2"/>
                  <rect x="245" y="90" width="110" height="12" fill="#9FB2DE" rx="4"/>
                  <circle cx="260" cy="96" r="3" fill="#12965a" className="animate-pulse"/>
                  <motion.rect 
                    x="265" y="110" width="70" height="4" fill="#ff4d4d"
                    animate={{ y: [110, 170, 110] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </g>
             </svg>
             <div className="text-center mt-6">
                <Badge className="bg-green-600 text-white font-bold p-2 px-4 shadow-md border-none">SCANNER OK ✓</Badge>
             </div>
          </div>
        </div>
      </section>

      {/* Tracking Demo */}
      <section className="bg-[#081E4E] py-24" id={t('n5').toLowerCase()}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('tke')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('tkt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('tks')}</p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-md shadow-2xl max-w-4xl mx-auto">
            <form className="flex flex-col sm:flex-row gap-4 mb-12" onSubmit={runTrack}>
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <Input defaultValue="LG-2026-004821" className="h-14 pl-12 border-2 border-gray-200 focus:border-[#0B2A6B] rounded-sm font-sans font-bold text-[#0B2A6B]" />
              </div>
              <Button type="submit" className="h-14 px-10 bg-[#0B2A6B] text-white font-bold shadow-lg hover:bg-[#0B2A6B]/80 border-none rounded-sm">
                {t('tkb')}
              </Button>
            </form>

            <div className="relative pt-12">
              <div className="absolute top-[68px] left-[10%] right-[10%] h-2 bg-gray-100 rounded-full" />
              <motion.div 
                className="absolute top-[68px] left-[10%] h-2 bg-[#F7931E] rounded-full origin-left"
                initial={{ width: 0 }}
                animate={{ width: `${trackProgress}%` }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-8 text-[#0B2A6B]"
                initial={{ left: "10%" }}
                animate={{ left: `${10 + (trackProgress * 0.8)}%` }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                <Truck size={28} className={cn(language === 'ar' && "scale-x-[-1]")} />
              </motion.div>

              <div className="grid grid-cols-5 gap-4 text-center">
                {[
                  { icon: ShoppingCart, label: 'k1', time: '09:12' },
                  { icon: Box, label: 'k2', time: '10:05' },
                  { icon: Truck, label: 'k3', time: '11:40' },
                  { icon: MapPin, label: 'k4', time: '14:20' },
                  { icon: Check, label: 'k5', time: '15:02' }
                ].map((s, idx) => {
                  const thresholds = [0, 20, 45, 70, 100];
                  const isActive = trackProgress >= thresholds[idx];
                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500",
                        isActive ? "bg-[#0B2A6B] text-[#F7931E]" : "bg-gray-100 text-gray-400"
                      )}>
                        <s.icon size={20} />
                      </div>
                      <h4 className="text-[#0B2A6B] font-bold text-xs mt-4 mb-1">{t(s.label as any)}</h4>
                      <span className="text-[10px] text-gray-400 font-sans">{s.time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-center text-gray-400 text-[11px] mt-10 uppercase tracking-widest">{t('tkd')}</p>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section id={t('n6').toLowerCase()} className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
             <svg viewBox="0 0 280 420" className="w-full max-w-[320px] h-auto overflow-visible" role="img">
                <motion.path 
                  d="M70 20L150 8L185 30L228 28L222 70L212 118L205 170L202 205L192 255L220 285L205 300L185 335L180 385L135 405L100 330L62 295L50 240L58 170L40 110L45 60Z"
                  fill="rgba(31,111,219,0.1)"
                  stroke="#1F6FDB"
                  strokeWidth={2}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 3 }}
                />
                {/* Cities */}
                {[
                  { x: 175, y: 50, n: 'Tunis' },
                  { x: 205, y: 125, n: 'Sousse' },
                  { x: 195, y: 200, n: 'Sfax' },
                  { x: 110, y: 22, n: 'Bizerte' },
                  { x: 190, y: 255, n: 'Gabès' }
                ].map((c, i) => (
                  <g key={i}>
                    <circle cx={c.x} cy={c.y} r="8" fill="#F7931E" className="animate-ping opacity-40"/>
                    <circle cx={c.x} cy={c.y} r="5" fill="#F7931E"/>
                    <text x={c.x + 12} y={c.y + 4} fill="#fff" fontSize="12" fontWeight="600">{c.n}</text>
                  </g>
                ))}
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
                    <path d="M0 10H48M42 4l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeDasharray="5 5" className="animate-[road_1s_linear_infinite]"/>
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

      {/* Why Logistica */}
      <section id={t('n2').toLowerCase()} className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('whye')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('whyt')}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, t: 'w1', d: 'wd1', c: 'bg-[#F7931E]' },
              { icon: ShieldCheck, t: 'w2', d: 'wd2', c: 'bg-green-600' },
              { icon: MapPin, t: 'w3', d: 'wd3', c: 'bg-pink-600' },
              { icon: Headset, t: 'w4', d: 'wd4', c: 'bg-blue-600' },
              { icon: Clock, t: 'w5', d: 'wd5', c: 'bg-red-500' }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-8 rounded-md text-center group hover:bg-white/10 transition-all shadow-xl hover:border-[#F7931E]"
              >
                <div className={cn("w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-md", v.c)}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-white font-bold mb-3">{t(v.t as any)}</h3>
                <p className="text-sm text-[#9FB2DE] leading-relaxed">{t(v.d as any)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-[#081E4E] py-24" id={t('n7').toLowerCase()}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('ple')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('plt')}</h2>
            <p className="text-[#9FB2DE] mt-4 font-light">{t('pls')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: 'p1', vol: '50–300', features: ['pf1', 'pf2', 'pf3'], pop: false },
              { name: 'p2', vol: '300–2000', features: ['pf1', 'pf4', 'pf5', 'pf6'], pop: true },
              { name: 'p3', vol: '2000+', features: ['pf4', 'pf7', 'pf8'], pop: false }
            ].map((p, i) => (
              <div key={i} className={cn(
                "p-10 rounded-md flex flex-col h-full shadow-2xl transition-transform hover:-translate-y-2 relative",
                p.pop ? "bg-white text-[#0B2A6B] border-none" : "bg-white/5 border border-white/10 text-white"
              )}>
                {p.pop && <span className="absolute -top-4 left-10 bg-[#F7931E] text-[#0B2A6B] font-bold text-[10px] uppercase p-2 px-6 rounded-sm shadow-md">{t('pbadge')}</span>}
                <h3 className="text-2xl mb-2 font-bold">{t(p.name as any)}</h3>
                <div className="text-4xl font-extrabold font-sans my-4 text-[#F7931E]">{p.vol}</div>
                <small className="uppercase tracking-widest font-bold opacity-60 mb-10">{t('pv')}</small>
                <ul className="grid gap-4 mb-12 flex-grow">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex gap-4 items-start text-sm">
                      <Check className={cn("mt-1", p.pop ? "text-green-600" : "text-[#F7931E]")} size={18} />
                      <span>{t(f as any)}</span>
                    </li>
                  ))}
                </ul>
                <Button className={cn(
                  "h-14 font-bold rounded-sm border-none shadow-xl text-lg",
                  p.pop ? "bg-[#0B2A6B] text-white hover:bg-[#0B2A6B]/80" : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0B2A6B]"
                )}>
                  {t('pq')}
                </Button>
              </div>
            ))}
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

      {/* Global CSS for animations used in SVGs and COD Coin */}
      <style jsx global>{`
        @keyframes road { from { strokeDashoffset: 0; } to { strokeDashoffset: -30; } }
        @keyframes bob { to { transform: translateY(-3px); } }
        @keyframes coin { 0%, 100% { transform: rotateY(0); } 50% { transform: rotateY(180deg); } }
        .animate-coin { animation: coin 3s ease-in-out infinite; transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
