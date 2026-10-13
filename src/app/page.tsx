
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Truck, 
  MapPin, Wallet, Zap, Check, 
  ArrowRight, Scan, Package, 
  MessageCircle, Search, ClipboardCheck
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/logo";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";

// Professional Isometric Carton Illustration Component - DEEP BUILD
const DetailedCarton = ({ type }: { type: 'picking' | 'packing' | 'labeling' | 'ready' }) => {
  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg viewBox="0 0 240 240" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boxTop" x1="120" y1="40" x2="120" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FDFCFB" />
            <stop offset="1" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="boxSideRight" x1="160" y1="70" x2="160" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CBD5E1" />
            <stop offset="1" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="boxSideLeft" x1="80" y1="70" x2="80" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
          <filter id="boxShadow" x="0" y="140" width="240" height="60" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <filter id="glowScan" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Dynamic Floor Shadow */}
        <ellipse cx="120" cy="190" rx="80" ry="25" fill="#0B2A6B" fillOpacity="0.15" filter="url(#boxShadow)" />

        <motion.g
          initial={{ y: 0 }}
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Main Box Structure (Bottom Part) */}
          <path d="M120 110 L190 75 V145 L120 180 Z" fill="url(#boxSideRight)" stroke="#0B2A6B" strokeWidth="1.2" />
          <path d="M120 110 L50 75 V145 L120 180 Z" fill="url(#boxSideLeft)" stroke="#0B2A6B" strokeWidth="1.2" />

          {/* Branding Logo on Left Side */}
          <g transform="translate(70, 100) scale(0.12)">
             <path d="M 0,174 L 174,87 L 61,87 Z" fill="#0B2A6B" fillOpacity="0.2" />
             <path d="M 61,87 L 174,87 L 0,0 Z" fill="#1F6FDB" fillOpacity="0.2" />
             <path d="M 0,174 L 61,87 L 0,87 Z" fill="#F7931E" fillOpacity="0.2" />
          </g>

          {/* Specific Stage Details */}
          {type === 'picking' && (
            <g>
              {/* Internal Bottom */}
              <path d="M120 110 L50 75 L120 40 L190 75 Z" fill="#1e293b" fillOpacity="0.1" />
              {/* Open Flaps with real depth */}
              <path d="M50 75 L10 55 L80 20 L120 40 Z" fill="#F1F5F9" stroke="#0B2A6B" strokeWidth="1.2" /> {/* Left Flap */}
              <path d="M190 75 L230 55 L160 20 L120 40 Z" fill="#E2E8F0" stroke="#0B2A6B" strokeWidth="1.2" /> {/* Right Flap */}
              
              {/* Item being picked - Animated */}
              <motion.g
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <rect x="95" y="55" width="50" height="40" rx="4" fill="#F7931E" stroke="#0B2A6B" strokeWidth="1" />
                <path d="M110 75 L118 83 L132 68" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </motion.g>
            </g>
          )}

          {type !== 'picking' && (
            <path d="M120 40 L190 75 L120 110 L50 75 Z" fill="url(#boxTop)" stroke="#0B2A6B" strokeWidth="1.2" />
          )}

          {type === 'packing' && (
            <g>
              {/* Top Tape Seam */}
              <path d="M85 57 L155 92" stroke="#F7931E" strokeWidth="8" strokeLinecap="round" />
              {/* Tape going down the sides */}
              <path d="M155 92 V115" stroke="#F7931E" strokeWidth="8" strokeLinecap="round" />
              <path d="M85 57 V80" stroke="#F7931E" strokeWidth="8" strokeLinecap="round" />
              {/* Tape Texture effect */}
              <path d="M90 60 L150 90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
            </g>
          )}

          {type === 'labeling' && (
            <g>
              {/* Shipping Label on Right Side */}
              <rect x="140" y="90" width="40" height="30" rx="2" fill="white" stroke="#0B2A6B" strokeWidth="1" transform="matrix(1, 0.5, 0, 1, 0, 0)" />
              <g transform="matrix(1, 0.5, 0, 1, 145, 95)">
                <rect width="30" height="3" fill="#0B2A6B" opacity="0.8" />
                <rect y="6" width="20" height="1" fill="#94A3B8" />
                <rect y="9" width="20" height="1" fill="#94A3B8" />
                <rect y="13" width="10" height="8" fill="#000" /> {/* Barcode area */}
                <rect x="12" y="13" width="2" height="8" fill="#000" />
                <rect x="16" y="13" width="4" height="8" fill="#000" />
              </g>
              {/* Laser Scan Line Animated */}
              <motion.line 
                x1="130" y1="85" x2="185" y2="115"
                stroke="#F7931E" strokeWidth="3" strokeLinecap="round"
                filter="url(#glowScan)"
                animate={{ opacity: [0, 1, 0], x: [-10, 10, -10] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </g>
          )}

          {type === 'ready' && (
            <g transform="translate(15, -15)">
               {/* Small Box stacked behind */}
               <g transform="translate(-40, 30) scale(0.7)">
                  <path d="M120 40 L190 75 L120 110 L50 75 Z" fill="#F7931E" stroke="#0B2A6B" strokeWidth="2" />
                  <path d="M120 110 L190 75 V145 L120 180 Z" fill="#E0861A" stroke="#0B2A6B" strokeWidth="2" />
                  <path d="M120 110 L50 75 V145 L120 180 Z" fill="#C97817" stroke="#0B2A6B" strokeWidth="2" />
               </g>
               {/* Ready Indicator Checkmark */}
               <motion.g
                 initial={{ scale: 0 }}
                 whileInView={{ scale: 1 }}
                 transition={{ type: 'spring', delay: 0.5 }}
               >
                 <circle cx="190" cy="80" r="28" fill="#10B981" stroke="white" strokeWidth="4" />
                 <path d="M180 80 L187 87 L202 72" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
               </motion.g>
            </g>
          )}
        </motion.g>
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
        scrolled ? "bg-white border-b border-gray-100 shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
          <Link href="/" className="transition-transform hover:-translate-y-1 group">
            <Logo variant={scrolled ? 'default' : 'white'} />
          </Link>

          <nav className={cn(
            "hidden lg:flex items-center gap-8",
            mobileMenu && "flex flex-col absolute top-20 left-0 right-0 bg-[#0B2A6B] p-6 border-b border-white/10 lg:static lg:bg-transparent lg:p-0 lg:border-0 lg:flex-row"
          )}>
            <a href="#stockage" className={cn("font-bold text-sm transition-colors uppercase tracking-wider", scrolled ? "text-[#0B2A6B] hover:text-[#F7931E]" : "text-white/80 hover:text-[#F7931E]")}>{t('n1')}</a>
            <a href="#coverage" className={cn("font-bold text-sm transition-colors uppercase tracking-wider", scrolled ? "text-[#0B2A6B] hover:text-[#F7931E]" : "text-white/80 hover:text-[#F7931E]")}>{t('n6')}</a>
            <a href="#faq" className={cn("font-bold text-sm transition-colors uppercase tracking-wider", scrolled ? "text-[#0B2A6B] hover:text-[#F7931E]" : "text-white/80 hover:text-[#F7931E]")}>{t('n3')}</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" onClick={toggleLanguage}>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>عربية</span>
              <span className={cn("px-4 py-1.5 rounded-full text-xs font-bold transition-all", language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60")}>FR</span>
            </div>
            <Button variant="secondary" size="sm" className="hidden sm:flex bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6" asChild>
              <Link href="#calc">{t('n4')}</Link>
            </Button>
            <button className={cn("lg:hidden text-2xl", scrolled ? "text-[#0B2A6B]" : "text-white")} onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
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

      {/* Preparation & Emballage Section (DEEP BUILD SVGS) */}
      <section id="preparation" className="py-24 bg-white/10">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-8">
                {[
                  { type: 'picking', label: t('t3') },
                  { type: 'packing', label: t('t4') },
                  { type: 'labeling', label: 'Labeling' },
                  { type: 'ready', label: 'Ready' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-gradient-to-b from-[#081E4E] to-[#0B2A6B] rounded-[32px] border border-white/5 flex flex-col items-center justify-center relative group hover:border-[#F7931E]/20 transition-all shadow-xl"
                  >
                    <DetailedCarton type={item.type as any} />
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
             {/* High Fidelity Tunisian Map with All Internal Borders */}
             <svg viewBox="0 0 550 1100" className="w-full h-full drop-shadow-2xl overflow-visible" role="img" preserveAspectRatio="xMidYMid meet">
                <g stroke="white" strokeWidth="1.2" fill="rgba(31,111,219,0.2)">
                  <path d="M 211.3,38.4 L 211.3,40.1 L 211.3,45.8 L 211.3,50 L 211.3,52.8 L 214.8,54.2 L 218.4,57.1 L 222.6,57.1 L 223.3,59.9 L 228.3,69.1 L 231.1,74 L 236,81.1 L 241.7,88.2 L 244.5,91.7 L 248,94.5 L 252.3,98.1 L 255.1,98.1 L 258.7,95.3 L 264.3,90.3 L 266.4,87.5 L 270,86.1 L 271.4,84 L 271.4,81.8 L 275.6,80.4 L 280.6,78.3 L 288.4,75.5 L 295.4,71.2 L 301.8,68.4 L 305.3,69.1 L 308.1,69.8 L 311,70.5 L 313.8,71.2 L 318.8,71.9 L 320,71.9 L 321.6,67 L 325.1,62 L 332.2,49.3 L 334.3,47.2 L 338.5,46.5 L 343.5,45 L 346.4,45.9 L 347,45 L 345.6,44.4 L 340.7,42.2 L 336.5,39.4 L 337.1,38.7 L 342.8,38.7 L 349.9,39.4 L 351.3,38 L 350.6,35.1 L 342.1,30.9 L 332.9,26 L 324.4,24.5 L 314.5,26.7 L 308.9,27.4 L 304.6,29.5 L 303.9,30.2 L 308.1,31.6 L 310.3,32.3 L 312.4,33 L 311.7,36.6 L 310.3,40.1 L 303.9,42.2 L 297.5,40.1 L 294.7,37.3 L 295.4,33 L 295.4,29.5 L 298.3,27.4 L 300.4,27.4 L 304.6,25.3 L 306,23.1 L 306,21 L 302.5,16.8 L 294,13.2 L 283.4,14 L 275.6,16.8 L 260.8,23.1 L 239.6,30.9 L 229.7,33.7 L 211.3,38.4 z" />
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
