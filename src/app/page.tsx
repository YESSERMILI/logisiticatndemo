"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Truck, 
  MapPin, Wallet, BarChart, 
  Zap, ShieldCheck, Check, 
  ArrowRight, Store, MessageCircle, Scan, 
  ChevronRight, ArrowUpRight, Banknote, 
  Package, PackageOpen, Layers, LayoutDashboard, Plus, Clock, Star, HelpCircle
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/logo";

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
            mobileMenu && "flex flex-col absolute top-20 left-0 right-0 bg-[#0B2A6B] p-6 border-b border-white/10"
          )}>
            {['n1', 'n6', 'n3'].map((key) => (
              <a 
                key={key} 
                href={`#${key === 'n1' ? 'stockage' : key === 'n6' ? 'coverage' : 'faq'}`} 
                className={cn(
                  "font-bold text-sm transition-colors uppercase tracking-wider",
                  scrolled ? "text-[#0B2A6B] hover:text-[#F7931E]" : "text-white/80 hover:text-[#F7931E]"
                )}
              >
                {t(key as any)}
              </a>
            ))}
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
                   <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1F6FDB" stopOpacity=".15"/><stop offset="1" stopColor="#0B2A6B" stopOpacity="0"/></linearGradient>
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

      <div className="marquee overflow-hidden bg-[#F7931E] text-[#0B2A6B] font-bold text-xl py-4 border-y-4 border-[#0B2A6B] -rotate-1 relative z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[1,2,3,4].map(i => (
            <span key={i} className="flex gap-12 uppercase">
              Logistica Tunisie ✦ {t('mq')} ✦ COD ✦ 24 GOUVERNORATS ✦ STOCKAGE ✦ PICKING ✦ PACKING ✦ LIVRAISON
            </span>
          ))}
        </div>
      </div>

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
                    "absolute -top-1 -right-1 w-9 h-9 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-black text-lg shadow-[4px_4px_0_rgba(0,0,0,0.3)] border-2 border-[#0B2A6B] z-20",
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

      {/* Preparation Section */}
      <section id="preparation" className="py-24 bg-white/10">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                {[1,2,3,4].map(i => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-video bg-[#081E4E] rounded-xl border border-white/10 flex items-center justify-center text-[#F7931E]"
                  >
                    <Package size={48} strokeWidth={1} className="opacity-20" />
                  </motion.div>
                ))}
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#F7931E] text-[#0B2A6B] p-6 rounded-full shadow-2xl animate-bounce">
                   <Zap size={32} />
                </div>
             </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs mb-4 block">{t('h3t')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">{t('hwt')}</h2>
            <p className="text-[#9FB2DE] text-lg font-light leading-relaxed mb-8">{t('h3d')}</p>
            <div className="grid grid-cols-2 gap-6">
               <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#F7931E]">
                  <p className="text-white font-bold mb-1">Picking</p>
                  <p className="text-xs text-[#9FB2DE]">{t('t3')}</p>
               </div>
               <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#1F6FDB]">
                  <p className="text-white font-bold mb-1">Packing</p>
                  <p className="text-xs text-[#9FB2DE]">{t('t4')}</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map */}
      <section id="coverage" className="py-24 overflow-hidden bg-[#081E4E]/30">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center rounded-[40px] p-8 relative overflow-visible group min-h-[600px] bg-[#081E4E]/50 border border-white/5 shadow-inner">
             {/* Map SVG with FIXED ViewBox for Full Visibility */}
             <svg viewBox="0 0 500 1080" className="w-full h-auto max-w-[450px] overflow-visible drop-shadow-2xl" role="img">
                <g className="map-governorates" stroke="#1F6FDB" strokeWidth="1.5" fill="rgba(31,111,219,0.15)">
                  {/* FULL TUNISIA MAP - ALL 24 GOVERNORATES */}
                  <path id="TN83" d="M375.8 681.5l0.8-0.4 2.6-0.4 1.7-0.1 2.7-0.5 1.9-0.4 2.8-0.4 2.2-0.1 1.7-0.4 3-0.6 0.6-0.1 4.7-0.9 3.5-0.5 3.1-0.6 14.8-2.3 3.7-0.8 3.8-0.7 12.5-2.7 0.9 0 0.8 0.1 2.4-0.7 2.5-0.6 4-1.1 1.5-0.5 15-3.6 3.7-1 4.4-1 1.8-0.6 9.3-2.6 2.7-0.6 1.1-0.5 1.2-0.5 2.1-1.3 1.6-1.2 1.7-1.7 0.9-0.8 0.2 0 0.2 0.1 0.1 0.2 0.2-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0-0.1 0.2 0 0.2 0 0.2 0 0.2 0.1 0.3 0 0.2 0 0.3-0.1 0.2-0.1 0-0.2 0-0.1 0.1 0 0.2 0 0.1 0 0.2 0.2 0.1 0.1 0.1 0.2 0.1 0.1 0.2 0 0.2-0.1 0.2-0.3 0.2-0.2 0.2-0.1 0.1-0.3 0.3-0.3 0.3-0.1 0.4 0 0.6-0.1 0.4-0.1 0.4-0.1 0.4-0.1 0.2-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0-0.1 0.1-0.1 0.2 0.1 0.1 0.1 0.3 0.1 0.2 0.1 0.3 0 0.2-0.1 0-0.1 0-0.2 0.1-0.2 0.3-0.2 0.3-0.1 0.3 0 0.4 0 0.4 0 0.2 0 0.4-0.1 0.2-0.1 0.1-0.1 0-0.2 0-0.2-0.1-0.2 0-0.1 0-0.2 0-0.1 0.1-0.1 0.2 0 0.3 0 0.2 0 0.3 0 0.3-0.1 0.2 0 0.1 0 0.1 0 0.1-0.2 0.2-0.4 0.3-0.1 0.3-0.1 0.4 0 0.2 0 0.1 0 0.2 0.2 0.1 0.1 0 0.1 0 0.2 0 0.1 0.1 0 0.1 0 0.2 0 0.3-0.2 0.2-0.1 0.1-0.1 0.1 0 0.3 0.2 0.2 0 0.2 0.1 0.1 0 0.2-0.1 0.1-0.1 0.3 0 0.4 0 0.2 0.2 0.1 0.1 0.1 0.2 0.1 0.2 0 0.2 0.1 0.1 0.3 0.1 0.2 0 0.1-0.2 0.1-0.1 0.2-0.1 0.1 0 0.1 0.2 0.1 0.1 0.2 0.1 0.2 0 0.2 0 0.4 0.1 0.1 0.5 0.1 0.2 0 0.3 0.1 0.3 0.1 0.1 0 0.2-0.1 0.2 0 0.2 0.2 0.3 0.1 0.1 0.1 0.1 0.1 0 0.1-0.1 0-0.1 0.2-0.1 0.1 0.1 0.1 0.1 0 0.2 0 0.3 0.1 0.2 0.2 0.2 0.2 0.1 0.2 0.1 0.2 0.1 0.1 0.1 0 0.2-0.1 0.2 0.1 0.2 0.1 0.3 0.3 0.4 0.2 0.3 0 0.2 0 0.2 0 0.1 0.3 0.3 0.2 0.2 0.2 0.6 0.1 0.4 0 0.3 0 0.2 0 0.1 0.2 0 0.2 0 0.2 0 0.2-0.1 0.4-0.1 0.3 0 0.3-0.1 0.1 0 0.2-0.1 0.1-0.1 0.2 0.1 0.6 0.7 0.4 0.3 0.2 0.3 0 0.3 0.1 0.9 0.1 0.3 0.1 0.1 0.1 0.1 0.1 0 0.3 0 0.3 0 0.5 0.1 0.1 0 0.2 0 0.1 0 0.2 0 0.2 0.2 0.1 0.3 0.3 0.2 0.2 0.3 0.3 0.2 0.3 0.1 0.2 0 0.2 0.1 0.1 0.2 0.2 0.1 0.2 0 0.1-0.1 0.1 0 0.1 0 0.1 0.2 0.2 0.1 0.2 0.2 0.3 0 0.2 0 0.2 0.1 0.3 0.1 0.1 0.2 0.1 0.5 0 0.3-0.1 0.2 0 0.3 0 0.2 0.2 0.2 0.1 0.1 0.2 0 0.2 0.1 0.1 0.1 0.2 0.4 0.2 0.3 0.2 0.2 0.2 0.1 0.3 0.1 0.2 0.3 0.1 0.2 0.3 0 0.2 0.1 0.1 0 0.1 0 0.2 0.1 0.2 0.2 0.1 0 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.3 0 0.3-0.1 0.3 0 0.2 0 0.2 0 0.2 0 0 0.1 0.2-0.1 0.2-0.2 0.2-0.1 0.2-0.2 0.2-0.5 0-0.4 0.1-0.3-0.2-0.7 0-0.3 0-0.3 0-0.2 0.3-0.5-0.2-0.2 0-0.4-0.1-0.2-0.3-0.1-0.1 0-0.5-0.1-0.2-0.2-0.3-0.4-0.2-0.2-0.2-0.1-0.5-0.2-0.4-0.1-0.3-0.1-0.3-0.4-0.3-0.1-0.6-0.3-0.4-0.2-0.4-0.3-0.3-0.3-0.1-0.3-0.1-0.2-0.3-0.4-0.4-0.4-0.3-0.3-0.1-0.4-0.1-0.2-0.4-0.4-0.3-0.1-0.4-0.1-0.2-0.2-0.4-0.3 0.3-0.1 0.2-0.2 0.3-0.1 0.5 0 0.2-0.1 0.4-0.5 0.1-0.3 0.2-0.5 0.5-0.4 0.5-0.3 0.6-0.5 1-1.2 0-0.6-0.5-0.9-0.6-1-0.2-0.6-0.2-1.1-0.3-1.3 1.4-0.3 1.1 0.4 0.7 0.2 0.4-0.3 0.4-1.1 0.8-1.1 0.3-0.4 0.3-0.3 0.2-0.6 0.2-0.9 0.2-0.2 0.1-0.2-0.1-0.2-0.1-0.3-0.1-0.3-0.3-0.4-0.1-0.1-0.3-0.1-0.2-0.2-0.1-0.4-0.3-0.3-0.3-0.2-0.2-0.2-0.4-0.3-0.2-0.3-0.1-0.3 0-0.3 0.2-0.7-0.1 0-0.2-0.1-0.1-0.1-0.1-0.1-0.1-0.3 0-0.2 0-0.2 0.2-0.2 0.1-0.2 0-0.3 0-0.1 0.2-0.2 0-0.3-0.1-0.2-0.2-0.4-0.1-0.2-0.1-0.2-0.1-0.2-0.1 0-0.2-0.2-0.1-0.1 0-0.1 0-0.2 0.1-0.3 0.2-0.3 0-0.3 0.1-0.4-0.1-0.2-0.2-0.2-0.2-0.2-0.2 0 0-0.1 0-0.1 0.2-0.1 0.2-0.5 0.2-0.2 0.1-0.3 0.3-0.3 0.2-0.3 0.3-0.2 0.2-0.2 0.3 0 0.1 0.1 0.1 0.1 0.1 0.2 0.2 0 0.2-0.1 0.3-0.2 0.3-0.2 0.7-0.3 0.5 0 0.5-0.1 0.6 0 0.6 0.1 0.5 0 0.4-0.1 0.2-0.3 0.2-0.3 0.3-0.4 0.3-0.3-0.5-1.7-0.8-0.4-2.2-0.5-1.3 0.5-1.3-0.4-0.8-0.5-1.2-1.1-0.4-1.2 0-0.8-0.3-1.4-0.3-0.6-0.7-0.8-0.4-0.4-1.3 0.2-0.5-0.4 0.3-0.9 1.1-0.9 0.1 0 0.7 0.1 0.2 0.1 0.5 0.3 0.1 0.3 0 0.4 0.1 0.5 0.3 0.2 1 0.3 0.7 0.2 0.6-0.1 0.2-0.2 0.3-1.2 0.3-0.5 0.5-0.4 0.5 0 0.2-0.1 0.1 0 0.6 0.2 0.7-0.1 1.2 0.4 1.2 0.2 0.9 0.1 0.9-0.4 1-0.2 0.7 0.1 1.4 0.3 0.8 0.1 0.1-0.1 0.1 0 0.2 0 0.1 0.1 0.1 0 0.2 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0-0.1 0.1 0 0.1 0 0.2 0.2 0.2 0 0.1 0.1 0.2 0.1 0.1 0.1 0.1 0 0.1 0 0.2 0 0-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.1-0.1 0.2-0.2 0.1-0.1 0-0.1 0.2-0.3 0.1-0.2 0-0.1 0-0.1 0-0.1 0-0.1 0.1-0.1 0.2-0.1 0.2-0.1 0.1-0.1 0-0.1 0.1 0 0.1-0.1 0.3 0 0.2 0 0.2 0 0-0.1 0.2-0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0.2-0.1 0.3-0.1 0.1-0.1 0.2-0.1 0.1 0 0.1-0.1 0.1-0.1 0.2-0.1 0.3-0.3 0.2 0 0.2 0 0.1 0 0.1 0 0.1 0.2 0.2 0.2 0.1 0.1 0.1 0 0.2 0.3 0.1 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.5 0.3 0.1 0 0.2-0.1 0.2 0.1 0.2 0 0.3-0.5 0.8-0.4 0.6-0.3 1-0.4 0.1-0.2 0.6-0.4 0.9-0.7 1.7-1.9 1.9-1.6 0.9-0.5 0.4-0.2 0.2-0.1 1.1-0.4 0.3-0.2 1.1-0.3 0-0.1 0.3-0.1 0.8-0.3 0.1-0.1 0.1 0 0.1-0.1 0-0.1 0.2-0.1 0.3 0.1 0.1 0.1 0.2 0 0.1 0 0.2 0 0.1 0 0.1 0 0-0.1 0.1 0 0.2 0 0.2-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.2-0.2 0.3-0.1 0.3 0 0.1 0 0.2-0.2 0.2-0.1 0.1-0.1 0.2-0.3 0.2 0 0 0.1 0.1 0 0.2 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1-0.1 0.1 0.1 0.1 0.1 0.1 0 0.1 0 0-0.1 0-0.1 0.1 0 0-0.1 0.3-0.1 0 0.1 0.1 0.1 0 0.2 0.2-0.1 0.3-0.1 0.3-0.1 0.4-0.2 0.1 0.1 0.1 0 0.1 0 0.1 0.2 0 0.1 0 0.1 0.1 0 0.3-0.2 0.2-0.1 0.2 0.1 0.1-0.1 0.1 0 0-0.1 0.2 0 0.1-0.2 0.1-0.3 0.2-0.2 0.2-0.3 0.2-0.2 0.3 0 0.2-0.2 0.3-0.1 0.2-0.1 0.2-0.1 0.1 0 0.1 0 0.2 0 0.2-0.1 0.1-0.1 0-0.1 0.1-0.3 0.1-0.2 0.4-0.3 0.2-0.1 0.3-0.2 0.2 0 0.2-0.1 0.3-0.1 0.4-0.1 0.3-0.3 0.5-0.2 0.3-0.2 0.1 0 0.2 0 0.2-0.1 0.3 0 0.1-0.1 0.2-0.1 0.2 0 0.2 0 0.1 0 0.1-0.2 0.1 0 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0.1-0.1 0.1 0 0-0.1 0.1 0 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2 0 0.1-0.1 0.1-0.1 0.1 0 0.1 0 0.2-0.1 0.1 0 0.2 0 0-0.1 0.1-0.1 0-0.1 0-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.2 0 0.1 0 0.1 0 0.1 0 0-0.1 0.1-0.1 0-0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1-0.1 0.1-0.1 0.1-0.2 0.2-0.1 0-0.1 0.1-0.1 0.1-0.1 0 0.1 0 0.2 0.1 0.1 0 0.1 0 0.2 0 0.1 0 0.1 0 0.1-0.1 0 0 0.1 0 0.2 0 0.2 0.1 0-0.1 0.4 0 0.2 0 0.1 0 0.1 0 0.1 0.2 0 0.1 0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.1 0 0.2 0 0.2 0 0.2 0.2 0.7 0.1 1.5 0.2 1.8 0.2 2.6 0.2 3.9 0.5-0.1 0.3-0.1 0.2-0.1 0.2-0.2 0.1-0.1 0.1-0.2 0.1-0.1 0.1-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.1 0-0.2 0.1-0.2 0.2-0.1 0.1-0.2 0.3-0.2 0.2-0.2 0.3-0.2 0.2-0.2 0.2-0.4 0.1-0.3 0.2-0.5 0.3-0.2 0.2 0 0.1 0 0.2 0 0.3 0 0.2-0.1 0.3-0.2 0.3-0.1 0.1-0.2 0.1-0.3 0.1-0.2 0.2-0.3 0.2-0.2 0.2-0.1 0-0.3 0.1-0.4 0.2-0.2 0-0.2-0.1-0.1-0.1-0.2-0.1-0.1 0-0.1 0-0.3 0-0.2 0.1-0.4 0-0.2 0-0.1 0.1-0.1 0.1-0.2 0.2 0.8 1.1 0.1 0.2 1.8 2.5 1 0.7 2.2 0.2 0.5 0 2.2 0.3 1.2 0.1 3 0.3 4.5 0.8 0.4 0.1 0.2 0.1 0.2 0 0.2-0.1 0.1-0.1 0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.2-0.1-0.2-0.1-0.1-0.1-0.2-0.1-0.2-0.1-0.1-0.1-0.2-0.2-0.1 0.2-0.1 0.1 0 0.1 0 0.1 0 0.2 0.1 0.1 0.1 0 0.1 0.1 0.1 0.1 0 0.1 0 0.1 0 0.2 0.1 0.2 0.1 0.2 0.1 0.2 0 0.1 0.1 0 0.1 0 0.1 0.1 0.1 0.1 0.1 0 0.2 0 0.3 0 0.3 0.1 0.2-0.1 0.2-0.1 0.1 0 0.1 0.1 0.1 0.2 0.5 0.1 0.3 0 0.4 0 0.4 0 0.2 0 0.1 0 0.2 0 0.1 0.1 0.1 0.2 0.2 0.3 0.3 4.1 8.7 0.7 0.9 0 0.2 0 0.1 0.1 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0 0.1 0.1 0 0 0.1 0 0.1 0 0.1 0.1 0.2 0.1 0.1 0.1 0.2 0.2 0.2 0.1 0.2 0 0.1 0 0.1 0 0.1 0 0.2 0 0.1 0.2 0.2 0 0.2 0.2 0.2 0.2 0.3 0.3 0.4 0 0.1 0.1 0.1 0.1 0.1 0 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0 0.2 0.1 0.2 0.1 0.1 0 0.2 0.1 0.2 0 0.1 0 0.1 0 0.1-0.1 0.1 0 0.1 0 0.1 0 0.1 0 0.3 0 0.2 0 0.2 0 0.1 0 0.1-0.1 0.3 0 0.2-0.1 0.1 0 0.2 0 0.5 0 0.2 0 0.6 0 0.3 0 0.2-0.1 0.5 0 0.4-0.1 0.1 0 0.3-0.1 0.7 0.2 0.7 0.2 0.9 0.4 1.5 0.1 0.3 0.1 0.5 0.1 0.1 0 0.4 0.1 0.5 0.1 0.5 0 0.6 0.1 1.1 0.1 1.2 0.1 0.9 0 0.2 0 0.4 0.1 0.6 0 0.7 0 0.3 0.1 0.6-4.4 5.1 1.2 2.1 2 5.7 0.7 2 2.3 7.7 5.9 15.2 2 2.5 0.5 1.3 1.2-0.2 2.8-0.6 2.7-1.1 1.6-0.1 1.9-0.6 1.7 1.3 0 0.1 0 0.1 0 0.1-0.2 0.1-0.2 0.1-0.1 0.2-0.1 0.1 0 0.2 0 0.2 0 0.1 0 0.1 0 0.1 0 0.1 0 0.2-0.1 0-0.2 0.1-0.3 0.2-0.2 0.2-0.3 0.1-0.1 0-0.1 0.1-0.1 0-0.2 0.1-0.2 0.1-0.2 0.1-0.1 0.1-0.1 0.2-0.1 0.2-0.3 0.3-0.2 0.2-0.2 0.1-0.1 0.1-0.1 0-0.1 0-0.3 0-0.2 0-0.3 0.1-0.3 0.1-0.2 0-0.1 0.1-0.2 0-0.3 0.3-0.6 0.5-0.4 0.3-0.8 0.7-0.2 0.1-0.5 0.4-0.3 0.3-0.1 0.1-0.2 0.1-0.8 0.3-0.3 0.2-0.4 0.2-0.1 0-0.2 0-0.2 0-0.3 0-0.1 0-0.2 0.1-0.1 0-0.1 0.1-0.1 0-0.2 0.1-0.2 0-0.6 0.3-0.1 0.1-0.1 0.2-0.1 0.1-0.1 0-0.1 0-0.2 0-0.1 0.1-0.1 0-0.1 0-0.1 0-0.1 0-0.1 0 0 0.1-0.1 0.2-0.1 0.1-0.2 0.2-0.1 0-0.1 0-0.1 0-0.3 0.1-0.2 0.1-0.2 0.1-0.6 0.2-0.1 0-0.3-0.1-1.8 4.4-1.9 1.1-4.7 2.8-1.7 0.8-1 0.4-1.2 0.4-0.6 0.4-1.5 1.3-1 0.7-2.2 1.2-1 0.3-2.7 1.2-1.1 0.9-1.6 1.1-7.7 3.7-2.8 3-4.2 9.7-3.4 3.3-2.4 1.6-0.7-0.5-2.4 2.3-0.3 0-0.5 0-0.8 0.1-1.3-0.6-2-0.5-0.7-0.1-1 0-0.5 0.4-0.7 0.6-0.4 0.1 0 0.2 0.1 0.1-0.1 0.2-1.1-0.2-2.4 2.5-0.8 9.8-1.4 4-4.3 4.1-1.8 4.2-1.2 1.8-0.8 0.8-0.2 0-0.5 0-1.3 0.7-1.4 0.6-1.1 0.1-1 0.1-1-0.1-1.6 0-1.7-0.2-1.4-0.5-1.5-0.4-3.3 2-2.1 1.2-1.1 0.7-0.4 0-1.2 0.9-0.6 0.5-3.5 2.8-7 12.4-6.5 7.4-1.7 2.8-1.1 7.8 0.2 2.1 7.7 20.7 3.2 12.7 3.2 6.8 0.2 2.3-0.6 4.6 0.4 4.3 2.6 8.4 0 4-1.6 4.8-6.4 13.3-9.4 10.7-10.9 17.6-12.8 16.7-0.8 0.5-3.1 0-1 0-2 0.8-1.3 0.6-1.9 0.1-3 0.8-19.1 10.1-1.6-7.6-0.3-1.5-2-8.6-1.9-8.6-4.6-21.3-3.1-13.9-0.6-2.7-2.6-11.3-1.2-5.5-2.7-12.6-1.1-4.9-2.5-11.2-1.4-6.1-3.4-15.9-0.3-1.3-2.6-11-1.1-5.4-0.6-2.8-1.9-8.1-1.5-6.6-2.6-11.5-1.4-6.2-3.1-13.5-0.7-3.7-2.7-11.5-1.3-5.7-0.8-3.7-3.4-2.3-16.2-11.1-14.5-9.8-8.8-6.1-5.4-3.6-12.4-8.3-6-4-2.7-1.9-4.2-2.8-0.3-0.4z" />
                  
                  {/* Hubs logic */}
                  {[
                    { x: 345, y: 187, n: 'Tunis' },
                    { x: 593, y: 272, n: 'Sousse' },
                    { x: 577, y: 398, n: 'Sfax' },
                    { x: 484, y: 110, n: 'Bizerte' },
                    { x: 519, y: 511, n: 'Gabès' }
                  ].map((c, i) => (
                    <g key={i}>
                      <circle cx={c.x} cy={c.y} r="10" fill="#F7931E" className="animate-pulse opacity-40"/>
                      <circle cx={c.x} cy={c.y} r="5" fill="#F7931E" className="shadow-lg border-2 border-[#0B2A6B]"/>
                    </g>
                  ))}
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
              <Button className="mt-8 h-16 text-lg font-bold bg-[#0B2A6B] text-white shadow-xl hover:bg-[#0B2A6B]/80 border-none rounded-sm">
                {t('ca12')}
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <a href="https://wa.me/21600000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:scale-110 transition-transform z-[100]">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
