
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Truck, 
  MapPin, Wallet, Zap, Check, 
  ArrowRight, Scan, Package, 
  MessageCircle
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Logo } from "@/components/logo";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";

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
                   <linearGradient id="sky" x1="0" x2="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1F6FDB" stopOpacity=".15"/><stop offset="1" stopColor="#0B2A6B" stopOpacity="0"/></linearGradient>
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
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6">{t('svt')}</h2>
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

      {/* Dashboard Section */}
      <DashboardShowcase />

      {/* Coverage Map Section */}
      <section id="coverage" className="py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center p-4 relative overflow-visible group bg-[#081E4E]/40 border border-white/5 rounded-[40px] max-w-[400px] mx-auto aspect-[1/2]">
             {/* High Fidelity Full Tunisian Map with ALL Internal Governorate Borders */}
             <svg viewBox="0 0 550 1100" className="w-full h-full drop-shadow-2xl overflow-visible" role="img" preserveAspectRatio="xMidYMid meet">
                <g stroke="white" strokeWidth="1.2" fill="rgba(31,111,219,0.2)">
                  <path d="M 211.3,38.4 L 211.3,40.1 L 211.3,45.8 L 211.3,50 L 211.3,52.8 L 214.8,54.2 L 218.4,57.1 L 222.6,57.1 L 223.3,59.9 L 228.3,69.1 L 231.1,74 L 236,81.1 L 241.7,88.2 L 244.5,91.7 L 248,94.5 L 252.3,98.1 L 255.1,98.1 L 258.7,95.3 L 264.3,90.3 L 266.4,87.5 L 270,86.1 L 271.4,84 L 271.4,81.8 L 275.6,80.4 L 280.6,78.3 L 288.4,75.5 L 295.4,71.2 L 301.8,68.4 L 305.3,69.1 L 308.1,69.8 L 311,70.5 L 313.8,71.2 L 318.8,71.9 L 320,71.9 L 321.6,67 L 325.1,62 L 332.2,49.3 L 334.3,47.2 L 338.5,46.5 L 343.5,45 L 346.4,45.9 L 347,45 L 345.6,44.4 L 340.7,42.2 L 336.5,39.4 L 337.1,38.7 L 342.8,38.7 L 349.9,39.4 L 351.3,38 L 350.6,35.1 L 342.1,30.9 L 332.9,26 L 324.4,24.5 L 314.5,26.7 L 308.9,27.4 L 304.6,29.5 L 303.9,30.2 L 308.1,31.6 L 310.3,32.3 L 312.4,33 L 311.7,36.6 L 310.3,40.1 L 303.9,42.2 L 297.5,40.1 L 294.7,37.3 L 295.4,33 L 295.4,29.5 L 298.3,27.4 L 300.4,27.4 L 304.6,25.3 L 306,23.1 L 306,21 L 302.5,16.8 L 294,13.2 L 283.4,14 L 275.6,16.8 L 260.8,23.1 L 239.6,30.9 L 229.7,33.7 L 211.3,38.4 z" />
                  <path d="M 106.6,126.4 L 117.2,122.8 L 126.4,119.3 L 131.4,114.3 L 135.6,109.4 L 137.7,103 L 138.4,99.5 L 143.4,95.3 L 152.6,91 L 156.8,87.5 L 157.5,82.5 L 157.5,78.3 L 155.4,74.7 L 155.4,71.9 L 159,69.1 L 168.9,67 L 178.8,66.3 L 190.1,59.9 L 197.8,50 L 203.5,42.2 L 209.9,38.7 L 229.7,33.7 L 239.6,30.9 L 260.8,23.1 L 275.6,16.8 L 283.4,14 L 294,13.2 L 302.5,16.8 L 306,21 L 306,23.1 L 304.6,25.2 L 300.4,27.4 L 298.3,27.4 L 295.4,29.5 L 295.4,33 L 294.7,37.3 L 297.5,40.1 L 303.9,42.2 L 310.3,40.1 L 311.7,36.6 L 312.4,33 L 310.3,32.3 L 308.2,31.6 L 303.9,30.2 L 304.6,29.5 L 308.9,27.4 L 314.5,26.7 L 324.4,24.5 L 332.9,26 L 342.1,30.9 L 350.6,35.1 L 351.3,38 L 349.9,39.4 L 342.8,38.7 L 337.1,38.7 L 336.4,39.4 L 340.7,42.2 L 345.6,44.3 L 347,45 L 344.2,48.6 L 341.4,52.1 L 341.4,54.9 L 342.1,58.5 L 344.9,63.4 L 349.2,69.1 L 354.1,71.2 L 361.2,78.3 L 364.7,81.8 L 362.6,84.6 L 359.8,86.8 L 358.4,88.9 L 357.6,91 L 354.1,91 L 352.7,88.2 L 351.3,87.5 L 347.7,87.5 L 344.9,89.6 L 347.7,94.5 L 352,94.5 L 357.6,97.4 L 364,101.6 L 374.6,103 L 378.2,100.9 L 381,97.4 L 385.2,97.4 L 385.9,91.7 L 388.8,84.6 L 393,80.4 L 395.1,79.7 L 399.4,80.4 L 405,79.7 L 414.2,75.5 L 417,71.9 L 419.2,69.8 L 424.8,64.8 L 428.4,59.2 L 431.2,56.4 L 439,52.8 L 443.2,51.4 L 446,49.3 L 448.9,50 L 449.6,52.1 L 450.3,59.2 L 453.1,69.8 L 453.8,72.6 L 453.8,76.2 L 452.4,79.7 L 446,88.9 L 438.3,99.5 L 430.5,110.8 L 424.1,126.4 L 419.2,135.6 L 417,140.5 L 409.3,141.9 L 398.7,146.2 L 395.1,149.7 L 393,149.7 L 389.5,150.4 L 385.9,152.5 L 379.6,164.6 L 376.7,176.6 L 376,188.6 L 377.4,197.1 L 384.5,211.9 L 390.9,223.9 L 399.4,233.1 L 405,238.1 L 412.8,240.9 L 418.5,246.6 L 424.1,251.5 L 430.5,253.6 L 436.1,255.1 L 442.5,257.2 L 446,258.6 L 446.7,262.1 L 445.3,264.3 L 443.9,267.1 L 443.9,270.6 L 443.9,274.9 L 448.2,278.4 L 450.3,281.9 L 446.7,286.9 L 444.6,294 L 445.3,299.6 L 446,304.6 L 449.6,310.9 L 454.5,314.5 L 456.6,315.9 L 459.5,318 L 455.9,321.5 L 451.7,327.9 L 449.6,327.2 L 445.3,330.7 L 443.9,335.7 L 443.9,340.6 L 442.5,344.9 L 437.6,355.5 L 428.4,372.4 L 424.8,375.3 L 422.7,378.8 L 420.6,382.3 L 414.9,390.8 L 412.1,396.5 L 408.6,403.6 L 407.1,403.6 L 402.9,403.6 L 400.1,404.3 L 395.8,409.2 L 394.4,412.7 L 393,414.9 L 391.6,418.4 L 387.3,419.1 L 379.6,421.9 L 373.9,424.1 L 371.1,426.9 L 371.8,428.3 L 369.7,431.1 L 364.7,437.5 L 361.9,438.2 L 359.8,440.3 L 347,446 L 341.4,449.5 L 337.1,451.6 L 330.8,458.7 L 329.4,460.8 L 325.1,465.1 L 323.7,467.9 L 323.7,471.4 L 320.9,471.4 L 321.6,477.1 L 324.4,489.1 L 328,501.1 L 335,513.2 L 343.5,523.8 L 352.7,533 L 359.8,539.3 L 369.7,543.6 L 378.2,547.8 L 381,549.2 L 385.2,547.8 L 389.5,545.7 L 393.7,543.6 L 398.7,541.4 L 404.3,538.6 L 405.7,540 L 409.3,540.7 L 408.6,545.7 L 408.6,551.3 L 408.6,553.5 L 406.4,558.4 L 405,560.5 L 402.9,562.7 L 404.3,566.2 L 406.4,569.7 L 412.1,572.6 L 417,570.4 L 421.3,567.6 L 428.4,564.8 L 432.6,561.2 L 433.3,557.7 L 431.9,556.3 L 429.8,553.5 L 431.2,551.3 L 436.8,549.2 L 445.3,549.2 L 448.9,551.3 L 451.7,557 L 455.9,562.7 L 456.6,568.3 L 455.2,572.6 L 453.8,579.6 L 454.5,589.5 L 455.9,598 L 458.8,606.5 L 463.7,610.7 L 473.6,612.9 L 487.8,615 L 501.2,615.7 L 506.1,616.4 L 507.6,618.5 L 506.1,620.6 L 505.4,622.8 L 501.9,633.4 L 500.5,641.8 L 499.1,651.7 L 498.4,658.8 L 498.4,673.7 L 498.4,689.9 L 499.8,695.6 L 502.6,701.2 L 508.3,705.5 L 510.4,711.1 L 511.1,714.7 L 511.8,717.5 L 511.8,719.6 L 510.4,721 L 501.2,730.2 L 472.2,744.4 L 428.4,767 L 423.4,776.2 L 419.2,784 L 417.8,784.7 L 415.6,784.7 L 413.5,786.1 L 410.7,789.6 L 410,790 L 407,791 L 405.7,793.9 L 398,804.5 L 392.3,813 L 381.7,826.4 L 375.3,827.1 L 367.5,825 L 359.8,825.7 L 357.6,827.1 L 352,833.5 L 342.8,849.7 L 335.7,864.6 L 335.7,868.8 L 337.1,876.6 L 346.3,899.9 L 352,916.9 L 356.2,933.9 L 357.6,945.2 L 356.2,949.4 L 352,960 L 340.7,979.8 L 315.2,1015.2 L 311,1020.1 L 310.3,1021.6 L 307.4,1025.8 L 303.9,1026.5 L 295.4,1027.2 L 289.1,1030.8 L 277,1035.7 L 268.6,1040.7 L 265,1039.2 L 208.4,772 L 197.8,765.6 L 191.5,760.6 L 186.5,756.4 L 168.9,743.7 L 157.5,735.2 L 150.5,729.5 L 143.4,723.9 L 136.3,718.9 L 130.7,714.7 L 127.1,711.9 L 125,711.1 L 123.6,710.4 L 122.9,707.6 L 122.2,699.1 L 120.1,685 L 119.4,674.4 L 118.6,669.4 L 115.1,663.1 L 106.6,648.9 L 97.4,634.8 L 93.9,631.9 L 92.5,629.8 L 92.5,627 L 91.1,626.3 L 85.4,624.9 L 81.2,624.2 L 73.4,619.9 L 66.3,618.5 L 62.1,615.7 L 54.3,612.9 L 51.5,610 L 48.6,607.2 L 47.2,601.5 L 47.2,583.9 L 47.2,579.6 L 43.7,569.7 L 38.7,562.7 L 33.1,553.5 L 28.8,545.7 L 27.4,543.6 L 26,538.6 L 25.3,534.4 L 23.9,527.3 L 21.1,518.8 L 19.7,513.2 L 19.7,509.6 L 21.1,504 L 21.8,499.7 L 22.5,485.6 L 24.6,480.6 L 30.3,475.7 L 33.8,470 L 39.5,465.8 L 40.9,464.4 L 44.4,464.4 L 52.9,462.2 L 57.8,457.3 L 60.7,447.4 L 60.7,441.7 L 62.1,437.5 L 68.4,431.8 L 84.7,425.5 L 86.1,422.6 L 91.1,422.6 L 97.4,417 L 105.9,409.2 L 110.9,404.3 L 111.6,401.4 L 110.2,400.7 L 108.7,398.6 L 108,396.5 L 108.7,394.4 L 110.9,391.5 L 113,390.1 L 115.8,390.1 L 115.8,388.7 L 115.1,386.6 L 114.4,383 L 113.7,380.9 L 113.7,368.9 L 115.1,360.4 L 115.8,348.4 L 117.9,340.6 L 122.2,332.8 L 125.7,328.6 L 128.5,326.5 L 129.3,325.1 L 128.5,323.6 L 122.2,313 L 119.4,307.4 L 117.9,301.7 L 117.9,295.4 L 120.1,286.2 L 121.5,274.9 L 122.9,256.5 L 121.5,250.8 L 117.9,247.3 L 115.1,243.7 L 113,234.6 L 112.3,225.4 L 113.7,216.2 L 116.5,199.9 L 118.6,173.7 L 121.5,163.8 L 125,156.8 L 125.7,152.5 L 125.7,147.6 L 125.7,142.6 L 123.6,140.5 L 118.6,139.1 L 109.5,138.4 L 104.5,135.6 L 103.1,132 L 103.1,129.2 L 106.6,126.4 z" />
                </g>
                {/* Strategic Hub Points */}
                {[
                  { x: 330, y: 140, n: 'Tunis' },
                  { x: 350, y: 270, n: 'Sousse' },
                  { x: 330, y: 400, n: 'Sfax' },
                  { x: 280, y: 30, n: 'Bizerte' },
                  { x: 280, y: 510, n: 'Gabès' }
                ].map((c, i) => (
                  <g key={i} className="group/hub">
                    <circle cx={c.x} cy={c.y} r="12" fill="#F7931E" className="animate-pulse opacity-20"/>
                    <circle cx={c.x} cy={c.y} r="6" fill="#F7931E" className="shadow-lg border-2 border-[#0B2A6B] group-hover/hub:r-8 transition-all cursor-pointer"/>
                    <text x={c.x + 15} y={c.y + 5} fill="white" className="text-[10px] font-bold opacity-0 group-hover/hub:opacity-100 transition-opacity pointer-events-none">{c.n}</text>
                  </g>
                ))}
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
