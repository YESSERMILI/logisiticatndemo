
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
            {['n0', 'n1', 'n5', 'n6', 'n7', 'n3'].map((key) => (
              <a 
                key={key} 
                href={`#${t(key as any).toLowerCase()}`} 
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

          {/* Hero Illustration */}
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
      <section id="how" className="py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-black text-xs uppercase tracking-widest rounded-full mb-4">{t('hwe')}</span>
            <h2 className="text-white text-3xl md:text-5xl font-bold mt-2">{t('hwt')}</h2>
            <p className="text-[#9FB2DE] mt-4 max-w-2xl mx-auto font-light">{t('hws')}</p>
          </div>
          
          <div className="relative grid md:grid-cols-5 gap-12">
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
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="relative w-24 h-24 rounded-full bg-[#081E4E] border-4 border-[#F7931E] flex items-center justify-center text-[#F7931E] shadow-xl transition-transform group-hover:scale-110">
                  <step.icon size={36} />
                  <span className={cn(
                    "absolute -top-1 -right-1 w-10 h-10 bg-[#F7931E] text-[#0B2A6B] rounded-full flex items-center justify-center font-black text-lg shadow-brutal-orange border-2 border-[#0B2A6B] z-20",
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

      {/* Coverage Map */}
      <section id="coverage" className="py-24 overflow-hidden bg-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center rounded-[40px] p-4 relative overflow-visible group min-h-[500px]">
             {/* Map SVG with Full Visibility */}
             <svg viewBox="200 0 600 1050" className="w-full h-auto max-w-[420px] overflow-visible relative z-10 drop-shadow-2xl" role="img">
                <g className="map-governorates" stroke="#1F6FDB" strokeWidth="2" fill="rgba(31,111,219,0.1)">
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 211.3125,38.40625 L 211.3125,40.15625 L 211.3125,45.8125 L 211.3125,50.0625 L 211.3125,52.875 L 214.875,54.28125 L 218.40625,57.125 L 222.65625,57.125 L 223.34375,59.9375 L 228.3125,69.125 L 231.125,74.09375 L 236.0625,81.15625 L 241.71875,88.21875 L 244.5625,91.78125 L 248.09375,94.59375 L 252.34375,98.125 L 255.15625,98.125 L 258.71875,95.3125 L 264.375,90.34375 L 266.46875,87.53125 L 270.03125,86.125 L 271.4375,84 L 271.4375,81.875 L 275.6875,80.46875 L 280.625,78.34375 L 288.40625,75.5 L 295.46875,71.25 L 301.84375,68.4375 L 305.375,69.125 L 308.1875,69.84375 L 311.03125,70.5625 L 313.84375,71.25 L 318.8125,71.96875 L 320,71.90625 L 321.625,67.03125 L 325.1875,62.0625 L 332.25,49.34375 L 334.375,47.21875 L 338.59375,46.5 L 343.5625,45.09375 L 346.4375,45.90625 L 347.09375,45.09375 L 345.6875,44.40625 L 340.71875,42.28125 L 336.5,39.4375 L 337.1875,38.75 L 342.84375,38.75 L 349.90625,39.4375 L 351.34375,38.03125 L 350.625,35.1875 L 342.15625,30.96875 L 332.9375,26 L 324.46875,24.59375 L 314.5625,26.71875 L 308.90625,27.40625 L 304.65625,29.53125 L 303.96875,30.25 L 308.1875,31.65625 L 310.3125,32.375 L 312.4375,33.09375 L 311.75,36.625 L 310.3125,40.15625 L 303.96875,42.28125 L 297.59375,40.15625 L 294.78125,37.3125 L 295.46875,33.09375 L 295.46875,29.53125 L 298.3125,27.40625 L 300.4375,27.40625 L 304.65625,25.3125 L 306.09375,23.1875 L 306.09375,21.0625 L 302.53125,16.8125 L 294.0625,13.28125 L 283.4375,14 L 275.6875,16.8125 L 260.8125,23.1875 L 239.625,30.96875 L 229.71875,33.78125 L 211.3125,38.40625 z" />
                  <path className="hover:fill-[#F7931E]/20 transition-all cursor-pointer" d="M 311.28125,630.375 L 323.75,629.875 L 330.84375,627.75 L 337.1875,619.96875 L 348.5,617.15625 L 359.125,615.03125 L 369,610.78125 L 380.3125,605.84375 L 388.8125,603 L 398,604.40625 L 402.96875,607.96875 L 408.625,613.625 L 411.4375,618.5625 L 419.9375,621.40625 L 431.25,627.0625 L 440.4375,631.28125 L 446.09375,635.53125 L 447.5,641.90625 L 451.75,651.09375 L 453.875,660.28125 L 453.875,678.65625 L 453.875,685.03125 L 456,687.84375 L 463.75,696.34375 L 472.25,702.71875 L 484.28125,711.90625 L 484.28125,714.03125 L 481.4375,718.96875 L 475.78125,728.15625 L 468.71875,738.78125 L 463.75,746.5625 L 462.71875,749.34375 L 472.25,744.4375 L 501.25,730.28125 L 510.4375,721.09375 L 511.84375,719.6875 L 511.84375,717.5625 L 511.15625,714.71875 L 510.4375,711.1875 L 508.3125,705.53125 L 502.65625,701.28125 L 499.8125,695.625 L 498.40625,689.96875 L 498.40625,673.71875 L 498.40625,658.875 L 499.125,651.78125 L 500.53125,641.90625 L 501.9375,633.40625 L 505.5,622.8125 L 506.1875,620.6875 L 507.59375,618.5625 L 506.1875,616.4375 L 501.25,615.71875 L 487.8125,615.03125 L 473.65625,612.90625 L 463.75,610.78125 L 458.8125,606.53125 L 456,598.0625 L 454.5625,589.5625 L 453.875,579.65625 L 455.28125,572.59375 L 456.6875,568.34375 L 456,562.6875 L 451.75,557.03125 L 448.90625,551.375 L 445.375,549.28125 L 436.90625,549.28125 L 431.25,551.375 L 429.8125,553.5 L 431.9375,556.34375 L 433.375,557.75 L 432.65625,561.28125 L 428.40625,564.8125 L 421.34375,567.65625 L 417.09375,570.46875 L 412.15625,572.59375 L 406.5,569.78125 L 404.375,566.25 L 402.96875,562.6875 L 405.0625,560.59375 L 406.5,558.46875 L 408.625,553.5 L 408.625,551.375 L 408.625,545.71875 L 409.3125,540.78125 L 405.78125,540.0625 L 404.375,538.65625 L 398.71875,541.5 L 393.75,543.59375 L 389.53125,545.71875 L 385.28125,547.84375 L 381.03125,549.28125 L 378.21875,547.84375 L 376.15625,546.8125 L 372.5625,549.96875 L 366.1875,559.875 L 359.125,571.90625 L 353.46875,577.5625 L 346.375,580.375 L 342.84375,581.78125 L 338.59375,586.03125 L 331.53125,592.40625 L 327.28125,595.21875 L 320.21875,597.34375 L 310.3125,598.0625 L 299,600.1875 L 292.65625,600.96875 L 292.65625,602.3125 L 293.34375,603.71875 L 297.59375,607.25 L 307.5,610.78125 L 311.75,612.1875 L 313.15625,615.03125 L 313.84375,617.15625 L 311.75,627.0625 L 311.28125,630.375 z" />
                  {/* Points remains the same but updated for context */}
                  {[
                    { x: 446, y: 55, n: 'Bizerte' },
                    { x: 300, y: 150, n: 'Tunis' },
                    { x: 350, y: 270, n: 'Sousse' },
                    { x: 400, y: 400, n: 'Sfax' },
                    { x: 450, y: 550, n: 'Gabès' }
                  ].map((c, i) => (
                    <g key={i}>
                      <circle cx={c.x} cy={c.y} r="8" fill="#F7931E" className="animate-ping opacity-30"/>
                      <circle cx={c.x} cy={c.y} r="4" fill="#F7931E" className="shadow-lg"/>
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
      <section className="bg-[#0E3580] py-24" id="estimer mon coût">
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
      <section className="bg-[#0E3580] py-24" id="faq">
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
