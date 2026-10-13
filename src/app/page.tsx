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

// --- Main Page ---

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

  // Calculator logic
  const storage = Math.ceil(calcOrders / 200) * 45;
  const prep = calcOrders * 1.2;
  const delivery = calcOrders * 6.5 * calcSpeed;
  const returns = calcOrders * (calcRet / 100) * 4;
  const total = Math.round(storage + prep + delivery + returns);

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
                href={`#${key === 'n1' ? 'how' : key === 'n6' ? 'coverage' : 'faq'}`} 
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
             {/* Hero Art */}
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

      {/* How it works */}
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
                  {/* Badge Number correctly placed */}
                  <span className={cn(
                    "absolute -top-1 -right-1 w-9 h-9 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-black text-lg shadow-brutal border-2 border-[#0B2A6B] z-20",
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

      {/* Coverage Map - FULL FIX */}
      <section id="coverage" className="py-24 overflow-hidden bg-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center items-center rounded-[40px] p-8 relative overflow-visible group min-h-[600px] bg-[#081E4E]/50 border border-white/5 shadow-inner">
             {/* Map SVG with FIXED ViewBox for Full Visibility */}
             <svg viewBox="0 0 550 1100" className="w-full h-auto max-w-[420px] overflow-visible drop-shadow-2xl" role="img">
                <g className="map-governorates" stroke="#1F6FDB" strokeWidth="1.5" fill="rgba(31,111,219,0.15)">
                  {/* All 27 paths from provided SVG */}
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 211.3125,38.40625 L 211.3125,40.15625 L 211.3125,45.8125 L 211.3125,50.0625 L 211.3125,52.875 L 214.875,54.28125 L 218.40625,57.125 L 222.65625,57.125 L 223.34375,59.9375 L 228.3125,69.125 L 231.125,74.09375 L 236.0625,81.15625 L 241.71875,88.21875 L 244.5625,91.78125 L 248.09375,94.59375 L 252.34375,98.125 L 255.15625,98.125 L 258.71875,95.3125 L 264.375,90.34375 L 266.46875,87.53125 L 270.03125,86.125 L 271.4375,84 L 271.4375,81.875 L 275.6875,80.46875 L 280.625,78.34375 L 288.40625,75.5 L 295.46875,71.25 L 301.84375,68.4375 L 305.375,69.125 L 308.1875,69.84375 L 311.03125,70.5625 L 313.84375,71.25 L 318.8125,71.96875 L 320,71.90625 L 321.625,67.03125 L 325.1875,62.0625 L 332.25,49.34375 L 334.375,47.21875 L 338.59375,46.5 L 343.5625,45.09375 L 346.4375,45.90625 L 347.09375,45.09375 L 345.6875,44.40625 L 340.71875,42.28125 L 336.5,39.4375 L 337.1875,38.75 L 342.84375,38.75 L 349.90625,39.4375 L 351.34375,38.03125 L 350.625,35.1875 L 342.15625,30.96875 L 332.9375,26 L 324.46875,24.59375 L 314.5625,26.71875 L 308.90625,27.40625 L 304.65625,29.53125 L 303.96875,30.25 L 308.1875,31.65625 L 310.3125,32.375 L 312.4375,33.09375 L 311.75,36.625 L 310.3125,40.15625 L 303.96875,42.28125 L 297.59375,40.15625 L 294.78125,37.3125 L 295.46875,33.09375 L 295.46875,29.53125 L 298.3125,27.40625 L 300.4375,27.40625 L 304.65625,25.3125 L 306.09375,23.1875 L 306.09375,21.0625 L 302.53125,16.8125 L 294.0625,13.28125 L 283.4375,14 L 275.6875,16.8125 L 260.8125,23.1875 L 239.625,30.96875 L 229.71875,33.78125 L 211.3125,38.40625 z " />
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 311.28125,630.375 L 311.03125,632 L 310.3125,634.125 L 311.75,636.25 L 317.40625,641.1875 L 318.8125,646.125 L 316.6875,651.78125 L 313.84375,661.6875 L 311.03125,674.4375 L 313.15625,682.90625 L 316.6875,687.84375 L 319.5,692.09375 L 313.84375,690.6875 L 310.3125,689.96875 L 303.96875,684.3125 L 296.1875,675.84375 L 289.8125,670.1875 L 284.15625,669.46875 L 278.5,671.59375 L 272.84375,674.4375 L 267.1875,680.09375 L 260.8125,681.5 L 252.34375,684.3125 L 233.96875,688.5625 L 222.65625,690.6875 L 208.5,690.6875 L 183.75,695.625 L 144.875,705.53125 L 124.125,710.71875 L 125.0625,711.1875 L 127.1875,711.90625 L 130.71875,714.71875 L 136.375,718.96875 L 143.4375,723.90625 L 150.53125,729.59375 L 157.59375,735.25 L 168.90625,743.71875 L 186.59375,756.4375 L 191.53125,760.6875 L 197.90625,765.65625 L 208.5,772 L 265.0625,1039.2813 L 268.59375,1040.7188 L 277.09375,1035.75 L 289.125,1030.8125 L 295.46875,1027.2813 L 303.96875,1026.5625 L 307.5,1025.8438 L 310.3125,1021.625 L 311.03125,1020.1875 L 315.28125,1015.25 L 340.71875,979.90625 L 352.03125,960.09375 L 356.28125,949.5 L 357.6875,945.25 L 356.28125,933.9375 L 352.03125,916.96875 L 346.375,900 L 337.1875,876.65625 L 335.78125,868.875 L 335.78125,864.625 L 342.84375,849.78125 L 352.03125,833.53125 L 357.6875,827.15625 L 359.8125,825.75 L 367.59375,825.03125 L 375.375,827.15625 L 381.75,826.4375 L 392.34375,813.03125 L 398,804.53125 L 405.78125,793.9375 L 407.1875,791.09375 L 410.71875,789.6875 L 413.5625,786.15625 L 415.6875,784.71875 L 417.8125,784.71875 L 419.21875,784.03125 L 423.46875,776.25 L 428.40625,767.0625 L 462.71875,749.34375 L 463.75,746.5625 L 468.71875,738.78125 L 475.78125,728.15625 L 481.4375,718.96875 L 484.28125,714.03125 L 484.28125,711.90625 L 472.25,702.71875 L 463.75,696.34375 L 456,687.84375 L 453.875,685.03125 L 453.875,678.65625 L 453.875,660.28125 L 451.75,651.09375 L 447.5,641.90625 L 446.09375,635.53125 L 440.4375,631.28125 L 431.25,627.0625 L 419.9375,621.40625 L 411.4375,618.5625 L 408.625,613.625 L 402.96875,607.96875 L 398,604.40625 L 388.8125,603 L 380.3125,605.84375 L 369,610.78125 L 359.125,615.03125 L 348.5,617.15625 L 337.1875,619.96875 L 330.84375,627.75 L 323.75,629.875 L 311.28125,630.375 z " />
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 292.65625,600.96875 L 299,600.1875 L 310.3125,598.0625 L 320.21875,597.34375 L 327.28125,595.21875 L 331.53125,592.40625 L 338.59375,586.03125 L 342.84375,581.78125 L 346.375,580.375 L 353.46875,577.5625 L 359.125,571.90625 L 366.1875,559.875 L 372.5625,549.96875 L 376.15625,546.8125 L 369.71875,543.59375 L 359.8125,539.375 L 352.75,533 L 343.5625,523.8125 L 335.0625,513.21875 L 328,501.1875 L 324.46875,489.15625 L 321.625,477.15625 L 320.9375,471.5 L 321.46875,471.5 L 319.5,470.0625 L 318.09375,470.0625 L 316.6875,472.1875 L 313.15625,474.3125 L 310.3125,472.1875 L 310.3125,472.1875 L 307.5,469.375 L 303.25,465.8125 L 299,465.125 L 294.78125,465.8125 L 291.21875,464.40625 L 288.40625,462.28125 L 285.5625,458.75 L 283.4375,454.5 L 279.90625,454.5 L 274.96875,456.625 L 265.78125,462.28125 L 258.71875,465.125 L 248.8125,464.40625 L 243.84375,462.28125 L 240.3125,464.40625 L 235.375,467.25 L 234.65625,467.25 L 235.375,470.78125 L 236.0625,472.1875 L 236.0625,476.4375 L 234.65625,484.21875 L 232.53125,492 L 231.125,494.8125 L 234.65625,508.25 L 235.375,515.3125 L 241.03125,526.625 L 247.375,536.53125 L 251.625,540.0625 L 260.125,544.3125 L 267.1875,549.96875 L 270.71875,555.625 L 272.84375,557.03125 L 271.4375,559.15625 L 270.03125,562.6875 L 268.59375,566.25 L 267.1875,569.78125 L 267.90625,571.90625 L 280.625,588.15625 L 291.21875,598.75 L 292.65625,599.46875 L 292.65625,600.96875 z " />
                  
                  {/* Plus d'autres tracés fournis par l'utilisateur pour compléter la Tunisie */}
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 407.90368,516.7392 L 407.90368,520.27474 L 407.19657,522.39606 L 406.48947,526.6387 L 406.48947,530.88134 L 407.19657,533.70977 L 409.31789,537.2453 L 413.56053,538.65951 L 417.09607,537.2453 L 417.80317,535.12398 L 420.6316,535.83109 L 422.04581,536.53819 L 422.75292,539.36662 L 424.16714,544.31637 L 424.16714,546.43769 L 425.58135,547.8519 L 426.99556,547.14479 L 428.40978,542.19505 L 434.77374,537.95241 L 439.72348,534.41687 L 443.96612,530.17423 L 446.08745,529.46713 L 448.91587,527.34581 L 449.62298,524.51738 L 447.50166,522.39606 L 444.67323,520.98184 L 443.25902,519.56763 L 436.18795,516.0321 L 433.35952,513.91078 L 424.87424,513.20367 L 414.97475,511.78946 L 412.14632,512.49656 L 407.90368,516.7392 z " />
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 468.71486,378.85338 L 464.47222,385.92445 L 460.93669,388.75288 L 459.52247,392.99552 L 455.98694,397.23816 L 456.69405,399.35948 L 458.81537,398.65237 L 462.3509,396.53105 L 469.42197,391.5813 L 474.37172,388.04577 L 477.20014,384.51024 L 478.61436,382.38891 L 478.61436,380.26759 L 476.49304,378.85338 L 472.9575,378.14627 L 468.71486,378.85338 z " />
                  
                  {/* Points pour les hubs logistiques */}
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

      {/* Pricing Calculator */}
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

      {/* Floating WhatsApp */}
      <a href="https://wa.me/21600000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl animate-pulse hover:scale-110 transition-transform z-[100]">
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
