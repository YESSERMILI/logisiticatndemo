
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Truck, 
  MapPin, Wallet, Zap, Check, 
  ArrowRight, Scan, Package, 
  MessageCircle, Search, ClipboardCheck,
  Target, Cpu, Layers, Activity
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/logo";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";

// Context-Aware Process Visual Component
const ProcessVisual = ({ type }: { type: 'picking' | 'packing' | 'labeling' | 'ready' }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <defs>
          <filter id="glowProcess">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Picking Context: Shelf & Targeted Selection */}
        {type === 'picking' && (
          <g>
            <rect x="40" y="60" width="120" height="10" fill="#081E4E" rx="2" />
            <rect x="40" y="120" width="120" height="10" fill="#081E4E" rx="2" />
            {[45, 85, 125].map(x => (
              <rect key={x} x={x} y="85" width="30" height="35" fill="#1F6FDB" fillOpacity="0.2" rx="2" />
            ))}
            <motion.rect 
              x="85" y="85" width="30" height="35" fill="#F7931E" rx="2" 
              initial={{ y: 0 }}
              animate={{ y: [-10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              filter="url(#glowProcess)"
            />
            <path d="M 100,50 V 80 M 90,65 H 110" stroke="#F7931E" strokeWidth="1" strokeDasharray="2 2" />
          </g>
        )}

        {/* Packing Context: Industrial Sealing Process */}
        {type === 'packing' && (
          <g>
            {/* Box Body (Isometric) */}
            <path d="M 40,80 L 100,110 L 160,80 L 100,50 Z" fill="#0B2A6B" fillOpacity="0.1" />
            <path d="M 40,80 L 40,140 L 100,170 L 100,110 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" />
            <path d="M 160,80 L 160,140 L 100,170 L 100,110 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" />
            
            {/* Inner items visualization */}
            <path d="M 60,75 Q 80,68 100,75 T 140,75" fill="none" stroke="#1F6FDB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            
            {/* Flaps (Open for processing) */}
            <path d="M 40,80 L 10,50 L 70,20 L 100,50 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" />
            <path d="M 160,80 L 190,50 L 130,20 L 100,50 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" />

            {/* Tape Gun Application */}
            <motion.path 
              d="M 100,50 L 100,110 L 100,170" 
              fill="none" stroke="#F7931E" strokeWidth="12" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              filter="url(#glowProcess)"
            />
            {/* Tape Decorative Element */}
            <motion.path 
              d="M 100,55 L 100,165" 
              fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="5 5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              opacity="0.5"
            />

            {/* Tape Gun Roller */}
            <motion.g
              animate={{ y: [0, 60, 120], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ x: 100, y: 50 }}
            >
              <rect x="-15" y="-15" width="30" height="30" rx="6" fill="#F7931E" />
              <circle cx="0" cy="0" r="10" fill="none" stroke="white" strokeWidth="2.5" />
              <path d="M -8,0 H 8" stroke="white" strokeWidth="1.5" />
            </motion.g>
          </g>
        )}

        {/* Labeling Context: Scanning a Box Label */}
        {type === 'labeling' && (
          <g>
            <rect x="50" y="60" width="100" height="80" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="1" rx="4" />
            <rect x="70" y="80" width="60" height="40" fill="white" rx="2" />
            <g transform="translate(75, 85)">
              {[0, 10, 20, 30, 40, 50].map(x => (
                <rect key={x} x={x} y="0" width={x % 20 === 0 ? "4" : "2"} height="30" fill="#081E4E" />
              ))}
            </g>
            <motion.line 
              x1="60" y1="80" x2="140" y2="80" stroke="#F7931E" strokeWidth="3"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              filter="url(#glowProcess)"
            />
          </g>
        )}

        {/* Ready Context: Box on conveyor belt ready to go */}
        {type === 'ready' && (
          <g>
            <rect x="40" y="140" width="120" height="15" fill="#081E4E" rx="7" />
            {[50, 80, 110, 140].map(x => (
              <circle key={x} cx={x} cy="147.5" r="4" fill="#1F6FDB" />
            ))}
            <motion.g
              animate={{ x: [0, 40], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <rect x="60" y="70" width="60" height="60" fill="#1F6FDB" rx="4" />
              <path d="M 75,100 L 85,115 L 105,85" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeJoin="round" />
            </motion.g>
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
  const [calcOrders, setCalcOrders] = useState(500);
  const [calcRet, setCalcRet] = useState(10);
  const [calcSpeed, setCalcSpeed] = useState(1);
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

  const storageCost = Math.ceil(calcOrders / 200) * 45;
  const prepCost = calcOrders * 1.2;
  const deliveryCost = calcOrders * 6.5 * calcSpeed;
  const returnsCost = calcOrders * (calcRet / 100) * 4;
  const total = Math.round(storageCost + prepCost + deliveryCost + returnsCost);

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
            <a href="#stockage" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n1')}</a>
            <a href="#coverage" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n6')}</a>
            <a href="#faq" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n3')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" onClick={toggleLanguage}>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>عربية</span>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>FR</span>
            </div>
            <Button variant="secondary" size="sm" className="hidden sm:flex bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6" asChild>
              <Link href="#calc">{t('n4')}</Link>
            </Button>
            <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
                <Link href="https://wa.me/21600000000">
                  {t('cta1')}
                  <ArrowRight className={cn("transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180")} />
                </Link>
              </Button>
              <Button variant="outline" className="h-14 px-8 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#0B2A6B] rounded-sm bg-transparent" asChild>
                <Link href="#how">{t('cta2')}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
             <svg viewBox="0 0 560 340" className="w-full h-auto overflow-visible" role="img">
                <defs>
                   <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#1F6FDB" stopOpacity=".15"/><stop offset="1" stopColor="#0B2A6B" stopOpacity="0"/></linearGradient>
                </defs>
                <rect x="0" y="0" width="560" height="260" fill="url(#sky)" rx="8"/>
                <circle cx="470" cy="70" r="34" fill="#F7931E" className="animate-pulse opacity-40"/>
                <path d="M0 300 H560" stroke="rgba(255,255,255,0.2)" strokeWidth="4" strokeDasharray="14 16"/>
                <motion.g animate={{ x: [-400, 30, 30, 650] }} transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.6, 1], ease: "easeInOut" }}>
                  <rect x="40" y="206" width="140" height="82" rx="4" fill="#1F6FDB" className="shadow-lg"/>
                  <path d="M180 226h44l28 32v30h-72z" fill="#fff"/>
                  <circle cx="82" cy="292" r="17" fill="#0B2A6B"/><circle cx="150" cy="292" r="17" fill="#0B2A6B"/>
                </motion.g>
             </svg>
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

      {/* How it Works Section */}
      <section id="how" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest rounded-full mb-4">{t('hwe')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('hwt')}</h2>
            <p className="text-[#9FB2DE] mt-4 max-w-2xl mx-auto font-light">{t('hws')}</p>
          </div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12">
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
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative w-24 h-24 rounded-full bg-[#081E4E] border-4 border-[#F7931E] flex items-center justify-center text-[#F7931E] shadow-xl transition-transform group-hover:scale-110">
                  <step.icon size={36} />
                  <span className={cn(
                    "absolute -top-1 -right-1 w-10 h-10 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-black text-xl shadow-brutal border-2 border-[#0B2A6B] z-20",
                    language === 'ar' && "-right-auto -left-1"
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

      {/* Stockage Section */}
      <section id="stockage" className="py-24 bg-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs mb-4 block">{t('wre')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">{t('wrt')}</h2>
            <p className="text-[#9FB2DE] text-lg font-light leading-relaxed mb-8">{t('wrs')}</p>
            <ul className="space-y-4">
              {[t('wb1'), t('wb2'), t('wb3')].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative">
            <div className="bg-gradient-to-br from-[#1F6FDB]/20 to-transparent p-1 rounded-2xl">
              <div className="bg-[#081E4E] rounded-xl p-8 border border-white/10 shadow-2xl overflow-hidden aspect-square flex flex-col">
                 <div className="flex justify-between items-center mb-8">
                   <div className="flex gap-2">
                     {[1,2,3].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full bg-white/10" />)}
                   </div>
                   <div className="px-3 py-1 rounded-full bg-[#F7931E]/10 text-[#F7931E] text-[10px] font-bold uppercase tracking-widest">LIVE INVENTORY</div>
                 </div>
                 <div className="flex-grow grid grid-cols-4 gap-4 opacity-50">
                    {Array.from({length: 16}).map((_, i) => (
                      <div key={i} className="bg-white/5 rounded-md border border-white/5 flex items-center justify-center">
                        <Box size={20} className="text-blue-400/20" />
                      </div>
                    ))}
                 </div>
                 <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#F7931E] flex items-center justify-center text-[#0B2A6B]">
                     <Scan size={20} />
                   </div>
                   <div>
                     <p className="text-white font-bold text-sm">SKU: PROD-992-TN</p>
                     <p className="text-blue-300/40 text-[10px] uppercase font-bold">Scanning process... OK</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation & Emballage Section */}
      <section id="preparation" className="py-24 bg-white/10">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-8">
                {[
                  { type: 'picking', label: 'Picking' },
                  { type: 'packing', label: 'Packing' },
                  { type: 'labeling', label: 'Étiquetage' },
                  { type: 'ready', label: 'Ready' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-gradient-to-b from-[#081E4E] to-[#0B2A6B] rounded-[32px] border border-white/5 flex flex-col items-center justify-center relative group hover:border-[#F7931E]/20 transition-all shadow-xl overflow-hidden"
                  >
                    <ProcessVisual type={item.type as any} />
                    <p className="absolute bottom-6 text-[10px] font-black uppercase tracking-widest text-[#9FB2DE]/40 group-hover:text-[#F7931E] transition-colors">{item.label}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs mb-4 block">{t('h3t')}</span>
            <h2 className="text-white text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t('svt')}
            </h2>
            <p className="text-[#9FB2DE] text-xl font-light leading-relaxed mb-12 border-l-4 border-[#F7931E] pl-6">
              {t('h3d')}
            </p>
            
            <div className="grid gap-6">
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-5 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#F7931E]/10 flex items-center justify-center text-[#F7931E] group-hover:scale-110 transition-transform">
                    <Search size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">{t('t3')}</p>
                    <p className="text-sm text-[#9FB2DE]">{t('d3')}</p>
                  </div>
               </div>
               <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-5 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#1F6FDB]/10 flex items-center justify-center text-[#1F6FDB] group-hover:scale-110 transition-transform">
                    <ClipboardCheck size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg mb-1">{t('t4')}</p>
                    <p className="text-sm text-[#9FB2DE]">{t('d4')}</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Section */}
      <DashboardShowcase />

      {/* Coverage Map Section */}
      <section id="coverage" className="py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center p-4 relative overflow-visible group bg-[#081E4E]/40 border border-white/5 rounded-[40px] max-w-[400px] mx-auto aspect-[1/2]">
             <svg viewBox="0 0 550 1100" className="w-full h-full drop-shadow-2xl overflow-visible" role="img" preserveAspectRatio="xMidYMid meet">
                <g stroke="white" strokeWidth="1.2" fill="rgba(31,111,219,0.2)">
                   <path d="M 211.3,38.4 L 211.3,52.8 L 222.6,57.1 L 236,81.1 L 255.1,98.1 L 271.4,81.8 L 302,16 L 211.3,38.4 Z" />
                   <path d="M 271.4,81.8 L 311,70.5 L 340,42 L 302,16 Z" />
                   <path d="M 271.4,81.8 L 260.8,219 L 285.4,233 L 315,448 L 366,476 L 413,711 L 417,915 L 341,992 L 117,891 L 117,877 L 205,802 L 271,307 L 214,131 L 171,89 L 211,38 L 271.4,81.8 Z" />
                   <path d="M 260.8,219 L 269,223 L 308,260 L 305,277 L 271,307 L 260.8,219 Z" />
                   <path d="M 315,448 L 414,720 L 417,926 L 313,999 L 215,999 L 117,891 L 117,801 L 260,783 L 315,448 Z" />
                </g>
             </svg>
          </div>

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

      {/* Simulator Section */}
      <section id="calc" className="py-24 bg-[#0E3580]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs">{t('cae')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('cat')}</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-md shadow-2xl text-[#0B2A6B]">
               <div className="mb-10">
                 <label className="flex justify-between font-bold mb-4"><span>{t('ca1')}</span> <b className="text-blue-600 font-sans">{calcOrders.toLocaleString('en')}</b></label>
                 <Slider min={50} max={5000} step={50} value={[calcOrders]} onValueChange={(val) => setCalcOrders(val[0])} />
               </div>
               
               <div className="mb-10">
                 <label className="font-bold mb-4 block">{t('ca2')}</label>
                 <div className="flex flex-wrap gap-3">
                   {[ {z:1, t:'ca3'}, {z:1.25, t:'ca4'}, {z:1.5, t:'ca5'} ].map((b, idx) => (
                     <button key={idx} onClick={() => setCalcSpeed(b.z)} className={cn("flex-1 min-w-[100px] h-12 rounded-sm border-2 font-bold text-xs uppercase tracking-widest transition-all", calcSpeed === b.z ? "bg-[#0B2A6B] text-white border-[#0B2A6B]" : "bg-white text-[#0B2A6B] border-gray-200")}>{t(b.t as any)}</button>
                   ))}
                 </div>
               </div>

               <div>
                 <label className="flex justify-between font-bold mb-4"><span>{t('ca6')}</span> <b className="text-blue-600 font-sans">{calcRet}%</b></label>
                 <Slider min={0} max={30} step={1} value={[calcRet]} onValueChange={(val) => setCalcRet(val[0])} />
               </div>
            </div>

            <div className="bg-[#F7931E] p-8 rounded-md shadow-2xl text-[#0B2A6B] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] opacity-70 mb-4">{t('ca7')}</span>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl lg:text-7xl font-bold font-sans tracking-tighter">{total.toLocaleString('en')}</span>
                <span className="text-xl font-bold uppercase">DT HT</span>
              </div>
              <div className="grid gap-4 border-t border-[#0B2A6B]/10 pt-8">
                {[ {l: 'ca8', v: storageCost}, {l: 'ca9', v: prepCost}, {l: 'ca10', v: deliveryCost}, {l: 'ca11', v: returnsCost} ].map((line, i) => (
                  <div key={i} className="flex justify-between border-b border-[#0B2A6B]/5 pb-2">
                    <span className="text-sm font-medium opacity-80">{t(line.l as any)}</span>
                    <b className="font-sans font-bold">{line.v.toLocaleString('en')} DT</b>
                  </div>
                ))}
              </div>
              <p className="text-[10px] mt-8 opacity-60 leading-relaxed italic">{t('can')}</p>
              <Button className="mt-8 h-16 text-lg font-bold bg-[#0B2A6B] text-white shadow-xl hover:bg-[#0B2A6B]/80 border-none rounded-sm" asChild>
                 <Link href="https://wa.me/21600000000">{t('ca12')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="faq" className="pt-20 pb-10 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Logo variant="white" className="mb-6" />
            <p className="text-sm text-[#7E93C4] leading-relaxed">{t('fa')}</p>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh1')}</h4>
            <ul className="grid gap-3 text-sm text-[#7E93C4]">
              <li><Link href="#how" className="hover:text-[#F7931E] transition-colors">{t('n1')}</Link></li>
              <li><Link href="#how" className="hover:text-[#F7931E] transition-colors">{t('n0')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh2')}</h4>
            <ul className="grid gap-3 text-sm text-[#7E93C4]">
              <li><Link href="#coverage" className="hover:text-[#F7931E] transition-colors">{t('n6')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-6 uppercase tracking-widest text-xs font-bold">{t('fh3')}</h4>
            <div className="text-sm text-[#7E93C4] grid gap-3">
              <a href="mailto:contact@logistica.tn" className="hover:text-[#F7931E] transition-colors">contact@logistica.tn</a>
              <span>+216 71 000 000</span>
              <span>Tunis, Tunisie</span>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pt-10 border-t border-white/5 text-center text-xs text-[#7E93C4] font-medium tracking-wide">
          {t('foot')}
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/21600000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:scale-110 transition-transform z-[100]">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
