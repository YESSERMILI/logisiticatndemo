
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ShoppingCart, Box, Truck, 
  MapPin, Wallet, Check, 
  ArrowRight, Scan, MessageCircle, Search, ClipboardCheck,
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
          <linearGradient id="tapeGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F7931E" />
            <stop offset="100%" stopColor="#E0861A" />
          </linearGradient>
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

        {/* Packing Context: Detailed Industrial Sealing Process */}
        {type === 'packing' && (
          <g transform="translate(0, 0)">
             {/* Main Isometric Box Centered */}
             <g transform="translate(100, 100) scale(1.2) translate(-90, -90)">
                <path d="M 40,80 L 90,105 L 140,80 L 90,55 Z" fill="#0B2A6B" fillOpacity="0.1" />
                <path d="M 40,80 L 40,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 140,80 L 140,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
                
                {/* Packing material details */}
                <circle cx="90" cy="115" r="10" fill="#1F6FDB" fillOpacity="0.05" />
                
                {/* Flaps (Open for processing) */}
                <path d="M 40,80 L 15,55 L 65,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M 140,80 L 165,55 L 115,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />

                {/* Application of Tape */}
                <motion.path 
                  d="M 90,55 L 90,105 L 90,155" 
                  fill="none" 
                  stroke="url(#tapeGradient)" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  filter="url(#glowProcess)"
                />
                
                {/* Tape Highlight */}
                <motion.path 
                  d="M 90,58 L 90,152" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  opacity="0.3"
                />

                {/* Tape Gun Head Animated */}
                <motion.g
                  animate={{ y: [0, 50, 100], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  style={{ x: 90, y: 55 }}
                >
                  <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#F7931E" />
                  <circle cx="0" cy="0" r="7" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M -5,0 H 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </motion.g>
             </g>
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
              <path d="M 75,100 L 85,115 L 105,85" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
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
            <a href="#preparation" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n0')}</a>
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
                <Link href="#preparation">{t('cta2')}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <style dangerouslySetInnerHTML={{ __html: `
              .hx-neon{stroke-dasharray:.17 .83;animation:hx-neon 7s linear infinite}
              @keyframes hx-neon{to{stroke-dashoffset:-1}}
              .hx-orbit{animation:hx-dash 30s linear infinite}.hx-orbit-r{animation-direction:reverse}
              @keyframes hx-dash{to{stroke-dashoffset:-96}}
              .hx-ping{transform-box:fill-box;transform-origin:center;opacity:0;animation:hx-ping 5s ease-out infinite}.hx-ping2{animation-delay:2.5s}
              @keyframes hx-ping{0%{opacity:.55;transform:scale(.12)}100%{opacity:0;transform:scale(.7)}}
              .hx-star{animation:hx-tw 3s ease-in-out infinite}
              @keyframes hx-tw{0%,100%{opacity:.15}50%{opacity:.9}}
              .hx-win{animation:hx-win 3.5s steps(1) infinite}
              @keyframes hx-win{0%{opacity:.95}45%{opacity:.25}70%{opacity:.95}}
              .hx-led{animation:hx-led .9s steps(2) infinite}@keyframes hx-led{50%{opacity:.25}}
              .hx-beacon{animation:hx-led 1.2s steps(2) infinite}
              .hx-beacon-ring{transform-box:fill-box;transform-origin:center;animation:hx-bring 1.2s ease-out infinite}
              @keyframes hx-bring{0%{opacity:.9;transform:scale(.7)}100%{opacity:0;transform:scale(3.2)}}
              .hx-dot-ring{transform-box:fill-box;transform-origin:center;animation:hx-bring 2.4s ease-out infinite}
              .hx-truck{opacity:0;animation:hx-truck 10.0s infinite}
              .hx-bob{animation:hx-bob .5s ease-in-out infinite alternate}@keyframes hx-bob{to{transform:translateY(-1.2px)}}
              .hx-pc{opacity:0;transform-box:fill-box;transform-origin:50% 100%;animation-duration:10.0s;animation-iteration-count:infinite}
              .hx-shutter-g{transform-box:fill-box;transform-origin:50% 0;animation:hx-shutter 10.0s infinite}
              .hx-doorlight{animation:hx-doorlight 10.0s infinite}
              .hx-scanline{animation:hx-scanline 10.0s infinite}
              .hx-chip{opacity:0;animation-duration:10.0s;animation-iteration-count:infinite}
              .hx-c1{animation-name:hx-chip1}.hx-c2{animation-name:hx-chip2}.hx-c3{animation-name:hx-chip3}
              .hx-float{animation:hx-fl 3s ease-in-out infinite alternate}@keyframes hx-fl{to{transform:translateY(-4px)}}
              .hx-dest{opacity:0;animation:hx-dest 10.0s infinite}
              .hx-dest-base{opacity:0;animation:hx-destbase 10.0s infinite}
              .hx-dest-ring{transform-box:fill-box;transform-origin:center;opacity:0;animation:hx-destring 10.0s ease-out infinite}
              @keyframes hx-truck{0%{opacity:0;transform:translate(-176px,-88px);animation-timing-function:cubic-bezier(.16,.7,.3,1)}4%{opacity:1}24.0%,62.0%{opacity:1;transform:translate(0,0);animation-timing-function:cubic-bezier(.6,0,.85,.45)}81.0%{opacity:1}89.0%,100%{opacity:0;transform:translate(198px,99px)}}
              @keyframes hx-pc0{0%,29.5%{opacity:0;transform:translate(41px,0px) scale(.55)}29.51%{opacity:1;animation-timing-function:cubic-bezier(.25,.7,.4,1)}34.5%{opacity:1;transform:translate(18px,-34px) scale(1.08);animation-timing-function:cubic-bezier(.55,0,.8,.6)}40.5%,100%{opacity:1;transform:translate(0,0) scale(1)}}
              @keyframes hx-pc1{0%,34.5%{opacity:0;transform:translate(26px,-9px) scale(.55)}34.51%{opacity:1;animation-timing-function:cubic-bezier(.25,.7,.4,1)}39.5%{opacity:1;transform:translate(12px,-38px) scale(1.08);animation-timing-function:cubic-bezier(.55,0,.8,.6)}45.5%,100%{opacity:1;transform:translate(0,0) scale(1)}}
              @keyframes hx-pc2{0%,39.5%{opacity:0;transform:translate(12px,-17px) scale(.55)}39.51%{opacity:1;animation-timing-function:cubic-bezier(.25,.7,.4,1)}44.5%{opacity:1;transform:translate(5px,-42px) scale(1.08);animation-timing-function:cubic-bezier(.55,0,.8,.6)}50.5%,100%{opacity:1;transform:translate(0,0) scale(1)}}
              @keyframes hx-pc3{0%,44.5%{opacity:0;transform:translate(41px,12px) scale(.55)}44.51%{opacity:1;animation-timing-function:cubic-bezier(.25,.7,.4,1)}49.5%{opacity:1;transform:translate(18px,-29px) scale(1.08);animation-timing-function:cubic-bezier(.55,0,.8,.6)}55.5%,100%{opacity:1;transform:translate(0,0) scale(1)}}
              @keyframes hx-shutter{0%,23.0%{transform:scaleY(1)}28.0%,52.0%{transform:scaleY(.06)}58.0%,100%{transform:scaleY(1)}}
              @keyframes hx-doorlight{0%,23.0%{opacity:.15}29.0%,52.0%{opacity:1}58.0%,100%{opacity:.15}}
              @keyframes hx-scanline{0%,8.0%{opacity:0}9.5%,12.5%{opacity:1}14.5%,100%{opacity:0}}
              @keyframes hx-chip1{0%,6.0%{opacity:0;transform:translateY(12px)}10.5%,31.5%{opacity:1;transform:translateY(0)}36.0%,100%{opacity:0;transform:translateY(-6px)}}
              @keyframes hx-chip2{0%,47.0%{opacity:0;transform:translateY(12px)}51.5%,70.5%{opacity:1;transform:translateY(0)}75.0%,100%{opacity:0;transform:translateY(-6px)}}
              @keyframes hx-chip3{0%,77.0%{opacity:0;transform:translateY(12px)}81.5%,94.5%{opacity:1;transform:translateY(0)}99.0%,100%{opacity:0;transform:translateY(-6px)}}
              @keyframes hx-dest{0%,73.0%{opacity:0;transform:translateY(-30px) scale(.5)}77.0%{opacity:1;transform:translateY(0) scale(1.12)}80.0%{transform:scale(1)}97.0%{opacity:1}100%{opacity:0}}
              @keyframes hx-destbase{0%,74.0%{opacity:0}78.0%,96.0%{opacity:.55}100%{opacity:0}}
              @keyframes hx-destring{0%,75.0%{opacity:0;transform:scale(.3)}77.0%{opacity:.9}94.0%,100%{opacity:0;transform:scale(1.8)}}
              @media (prefers-reduced-motion:reduce){*{animation:none!important}.hx-smil{display:none}.hx-truck,.hx-pc,.hx-chip,.hx-dest{opacity:1}.hx-dest-base{opacity:.55}.hx-shutter-g{transform:scaleY(.06)}}
            ` }} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 36 600 504" className="w-full h-auto overflow-visible" role="img" aria-label="Logistica logistics hub" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="hx-glow" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#2D7BEA" stopOpacity=".42"/><stop offset=".55" stopColor="#1F6FDB" stopOpacity=".12"/><stop offset="1" stopColor="#1F6FDB" stopOpacity="0"/></radialGradient>
                <radialGradient id="hx-shadow" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#000" stopOpacity=".5"/><stop offset="1" stopColor="#000" stopOpacity="0"/></radialGradient>
                <linearGradient id="hx-top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1B4BA6"/><stop offset="1" stopColor="#0F3585"/></linearGradient>
                <linearGradient id="hx-road" gradientUnits="userSpaceOnUse" x1="124" y1="272" x2="476" y2="448">
                  <stop offset="0" stopColor="#091D55" stopOpacity="0"/><stop offset=".16" stopColor="#091D55"/><stop offset=".84" stopColor="#091D55"/><stop offset="1" stopColor="#091D55" stopOpacity="0"/></linearGradient>
                <linearGradient id="hx-line" gradientUnits="userSpaceOnUse" x1="124" y1="272" x2="476" y2="448">
                  <stop offset="0" stopColor="#fff" stopOpacity="0"/><stop offset=".2" stopColor="#fff" stopOpacity=".55"/><stop offset=".8" stopColor="#fff" stopOpacity=".55"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
                <linearGradient id="hx-door" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#FFC56B"/><stop offset="1" stopColor="#F7931E"/></linearGradient>
                <filter id="hx-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3.2"/></filter>
                <ellipse id="hx-orbA" cx="300" cy="368" rx="262" ry="131"/>
                <path id="hx-pathA" d="M562 368A262 131 0 1 1 38 368A262 131 0 1 1 562 368"/>
                <path id="hx-pathAr" d="M562 368A262 131 0 1 0 38 368A262 131 0 1 0 562 368"/>
                <path id="hx-pathB" d="M592 368A292 146 0 1 0 8 368A292 146 0 1 0 592 368"/>
                <path id="hx-air" d="M62 196C126 70 300 14 540 124"/>
              </defs>
              <ellipse cx="300" cy="330" rx="300" ry="270" fill="url(#hx-glow)"/><circle className="hx-star" style={{animationDelay:'1.6s', animationDuration:'2.6s'}} cx="349" cy="58" r="2.0" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'5.2s'}} cx="114" cy="113" r="1.3" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.7s', animationDuration:'3.2s'}} cx="106" cy="131" r="1.7" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.5s', animationDuration:'3.2s'}} cx="78" cy="164" r="1.8" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'2.6s'}} cx="81" cy="167" r="1.3" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.7s', animationDuration:'4.1s'}} cx="154" cy="94" r="1.7" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'4.4s'}} cx="203" cy="46" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.3s', animationDuration:'2.7s'}} cx="578" cy="202" r="1.2" fill="#fff"/><circle className="hx-star" style={{animationDelay:'3.1s', animationDuration:'3.9s'}} cx="562" cy="129" r="2.1" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.0s', animationDuration:'3.0s'}} cx="388" cy="96" r="1.9" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.2s', animationDuration:'4.0s'}} cx="101" cy="167" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.4s', animationDuration:'2.7s'}} cx="477" cy="93" r="1.6" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.6s', animationDuration:'4.0s'}} cx="186" cy="107" r="1.0" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'5.1s'}} cx="97" cy="162" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'3.2s', animationDuration:'2.7s'}} cx="526" cy="168" r="1.1" fill="#fff"/><use href="#hx-orbA" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.4" strokeDasharray="3 9" className="hx-orbit"/><ellipse className="hx-orbit hx-orbit-r" cx="300" cy="368" rx="292" ry="146" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="1.4" strokeDasharray="2 10"/>
              <ellipse cx="300" cy="494" rx="250" ry="44" fill="url(#hx-shadow)"/><polygon points="80,360 300,470 300,486 80,376" fill="#0A2A70" stroke="#0A2A70" strokeWidth=".6" strokeLinejoin="round"/><polygon points="520,360 300,470 300,486 520,376" fill="#06205A" stroke="#06205A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="300,250 520,360 300,470 80,360" fill="url(#hx-top)" stroke="#fff" strokeOpacity=".16" strokeWidth="1.2" strokeLinejoin="round"/><path d="M322 261L102 371M278 261L498 371M344 272L124 382M256 272L476 382M366 283L146 393M234 283L454 393M388 294L168 404M212 294L432 404M410 305L190 415M190 305L410 415M432 316L212 426M168 316L388 426M454 327L234 437M146 327L366 437M476 338L256 448M124 338L344 448M498 349L278 459M102 349L322 459" stroke="#fff" strokeOpacity=".07" strokeWidth="1" fill="none"/><ellipse className="hx-ping" cx="300" cy="360" rx="220" ry="110" fill="none" stroke="#6FB0FF" strokeWidth="2.2"/><ellipse className="hx-ping hx-ping2" cx="300" cy="360" rx="220" ry="110" fill="none" stroke="#6FB0FF" strokeWidth="2.2"/><path className="hx-neon" pathLength="1" d="M300 250L520 360L300 470L80 360Z" fill="none" stroke="#F7931E" strokeWidth="5" strokeLinejoin="round" filter="url(#hx-blur)" opacity=".8"/><path className="hx-neon" pathLength="1" d="M300 250L520 360L300 470L80 360Z" fill="none" stroke="#FFC56B" strokeWidth="2" strokeLinejoin="round"/>
              <polygon points="143.8,262.1 495.8,438.1 456.2,457.9 104.2,281.9" fill="url(#hx-road)"/><path d="M143.8 262.1L495.8 438.1M104.2 281.9L456.2 457.9" stroke="url(#hx-line)" strokeWidth="1.4" fill="none"/><path d="M124 272L476 448" stroke="url(#hx-line)" strokeWidth="2" strokeDasharray="9 11" fill="none"/>
              <polygon points="260.4,320.4 267,323.7 267,273.7 260.4,270.4" fill="#9DB3DA" stroke="#9DB3DA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="272.5,320.95 267,323.7 267,273.7 272.5,270.95" fill="#6F8AB8" stroke="#6F8AB8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="265.9,267.65 272.5,270.95 267,273.7 260.4,270.4" fill="#C9D8F2" stroke="#C9D8F2" strokeWidth=".6" strokeLinejoin="round"/>
              <polygon points="432,364.4 462.8,379.8 462.8,337.8 432,322.4" fill="#2058B4" stroke="#2058B4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="493.6,364.4 462.8,379.8 462.8,337.8 493.6,322.4" fill="#143F8C" stroke="#143F8C" strokeWidth=".6" strokeLinejoin="round"/><polygon points="462.8,307 493.6,322.4 462.8,337.8 432,322.4" fill="#3472D6" stroke="#3472D6" strokeWidth=".6" strokeLinejoin="round"/><polygon points="405.6,382 427.6,393 427.6,371 405.6,360" fill="#1A4A9E" stroke="#1A4A9E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="447.4,383.1 427.6,393 427.6,371 447.4,361.1" fill="#103580" stroke="#103580" strokeWidth=".6" strokeLinejoin="round"/><polygon points="425.4,350.1 447.4,361.1 427.6,371 405.6,360" fill="#2A63C4" stroke="#2A63C4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="141.6,346.8 172.4,362.2 172.4,328.2 141.6,312.8" fill="#1A4A9E" stroke="#1A4A9E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="203.2,346.8 172.4,362.2 172.4,328.2 203.2,312.8" fill="#103580" stroke="#103580" strokeWidth=".6" strokeLinejoin="round"/><polygon points="172.4,297.4 203.2,312.8 172.4,328.2 141.6,312.8" fill="#2A63C4" stroke="#2A63C4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="165.8,376.5 192.2,389.7 192.2,369.7 165.8,356.5" fill="#2058B4" stroke="#2058B4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="218.6,376.5 192.2,389.7 192.2,369.7 218.6,356.5" fill="#143F8C" stroke="#143F8C" strokeWidth=".6" strokeLinejoin="round"/><polygon points="192.2,343.3 218.6,356.5 192.2,369.7 165.8,356.5" fill="#3472D6" stroke="#3472D6" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 432 322.4)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="17.22" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.4s'}} x="5" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'0.5s'}} x="17.22" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.7s'}} x="5" y="27" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.8s'}} x="17.22" y="27" width="8.22" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 141.6 312.8)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="17.22" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.4s'}} x="5" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'0.5s'}} x="17.22" y="16" width="8.22" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 165.8 356.5)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="5.76" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="14.76" y="5" width="5.76" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 405.6 360)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="3.3" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="12.3" y="5" width="3.3" height="5" fill="#F7931E"/></g>
              <polygon points="282.4,316 388,368.8 388,294.8 282.4,242" fill="#D5E4FB" stroke="#D5E4FB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="449.6,338 388,368.8 388,294.8 449.6,264" fill="#9DBBEB" stroke="#9DBBEB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="344,211.2 449.6,264 388,294.8 282.4,242" fill="#F3F8FF" stroke="#F3F8FF" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,310 388,362.8 388,357.8 282.4,305" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="449.6,332 388,362.8 388,357.8 449.6,327" fill="#D9780A" stroke="#D9780A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,260 388,312.8 388,298.8 282.4,246" fill="#0B2A6B" stroke="#0B2A6B" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,260 388,312.8 388,310.8 282.4,258" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.19 0.09 0 0.21 294.5 252.57) translate(-1041.24 241.54) scale(1 -1)"><path d="M 1050.38,192.402 L 1069.25,192.402 L 1069.25,185.018 L 1041.24,185.018 L 1041.24,240.821 L 1050.38,240.821 Z M 1077.33,213.033 C 1077.33,218.502 1078.6,223.401 1081.14,227.73 C 1083.68,232.07 1087.14,235.456 1091.51,237.888 C 1095.86,240.32 1100.63,241.536 1105.84,241.536 C 1111.07,241.536 1115.87,240.32 1120.24,237.888 C 1124.6,235.456 1128.04,232.07 1130.55,227.73 C 1133.08,223.401 1134.34,218.502 1134.34,213.033 C 1134.34,207.575 1133.08,202.665 1130.55,198.301 C 1128.04,193.938 1124.6,190.54 1120.24,188.108 C 1115.87,185.676 1111.07,184.46 1105.84,184.46 C 1100.63,184.46 1095.86,185.676 1091.51,188.108 C 1087.14,190.54 1083.68,193.938 1081.14,198.301 C 1078.6,202.665 1077.33,207.575 1077.33,213.033 Z M 1124.93,213.033 C 1124.93,217.164 1124.12,220.777 1122.49,223.872 C 1120.86,226.979 1118.59,229.365 1115.7,231.029 C 1112.81,232.681 1109.52,233.507 1105.84,233.507 C 1102.14,233.507 1098.84,232.681 1095.96,231.029 C 1093.06,229.365 1090.8,226.979 1089.17,223.872 C 1087.54,220.777 1086.72,217.164 1086.72,213.033 C 1086.72,208.914 1087.54,205.289 1089.17,202.159 C 1090.8,199.028 1093.06,196.62 1095.96,194.933 C 1098.84,193.245 1102.14,192.402 1105.84,192.402 C 1109.52,192.402 1112.81,193.245 1115.7,194.933 C 1118.59,196.62 1120.86,199.028 1122.49,202.159 C 1124.12,205.289 1124.93,208.914 1124.93,213.033 Z M 1187.21,224.762 C 1185.75,227.543 1183.75,229.644 1181.19,231.063 C 1178.62,232.483 1175.64,233.193 1172.27,233.193 C 1168.58,233.193 1165.29,232.361 1162.39,230.697 C 1159.5,229.045 1157.24,226.694 1155.6,223.645 C 1153.97,220.585 1153.15,217.047 1153.15,213.033 C 1153.15,209.018 1153.97,205.475 1155.6,202.403 C 1157.24,199.319 1159.5,196.951 1162.39,195.299 C 1165.29,193.635 1168.58,192.803 1172.27,192.803 C 1177.25,192.803 1181.29,194.194 1184.4,196.975 C 1187.49,199.767 1189.39,203.543 1190.09,208.303 L 1169.14,208.303 L 1169.14,215.616 L 1199.88,215.616 L 1199.88,208.46 C 1199.3,204.131 1197.76,200.146 1195.27,196.503 C 1192.78,192.861 1189.54,189.958 1185.55,187.794 C 1181.57,185.618 1177.14,184.53 1172.27,184.53 C 1167.02,184.53 1162.23,185.751 1157.9,188.195 C 1153.56,190.627 1150.12,194.013 1147.59,198.354 C 1145.04,202.682 1143.76,207.575 1143.76,213.033 C 1143.76,218.502 1145.04,223.401 1147.59,227.73 C 1150.12,232.07 1153.57,235.456 1157.94,237.888 C 1162.3,240.32 1167.08,241.536 1172.27,241.536 C 1178.21,241.536 1183.5,240.082 1188.13,237.173 C 1192.75,234.252 1196.11,230.115 1198.2,224.762 Z M 1221.52,240.821 L 1221.52,185.018 L 1212.38,185.018 L 1212.38,240.821 Z M 1235.7,200.431 L 1245.49,200.431 C 1245.7,198.022 1246.65,196.044 1248.33,194.496 C 1250.02,192.937 1252.39,192.157 1255.44,192.157 C 1258.6,192.157 1261.07,192.925 1262.84,194.461 C 1264.6,195.986 1265.47,197.952 1265.47,200.361 C 1265.47,202.234 1264.93,203.759 1263.83,204.934 C 1262.74,206.109 1261.37,207.017 1259.73,207.657 C 1258.1,208.297 1255.85,208.995 1252.96,209.751 C 1249.32,210.717 1246.36,211.695 1244.09,212.684 C 1241.81,213.673 1239.87,215.209 1238.26,217.292 C 1236.66,219.386 1235.85,222.173 1235.85,225.653 C 1235.85,228.864 1236.66,231.674 1238.26,234.083 C 1239.87,236.492 1242.11,238.336 1245,239.616 C 1247.9,240.896 1251.24,241.536 1255.04,241.536 C 1260.45,241.536 1264.88,240.186 1268.34,237.487 C 1271.78,234.787 1273.69,231.081 1274.08,226.368 L 1263.96,226.368 C 1263.79,228.405 1262.83,230.144 1261.06,231.587 C 1259.3,233.03 1256.97,233.751 1254.08,233.751 C 1251.46,233.751 1249.32,233.082 1247.65,231.744 C 1246,230.406 1245.18,228.48 1245.18,225.967 C 1245.18,224.256 1245.69,222.854 1246.73,221.76 C 1247.78,220.655 1249.1,219.782 1250.71,219.142 C 1252.31,218.502 1254.51,217.804 1257.29,217.047 C 1260.99,216.035 1264,215.023 1266.33,214.01 C 1268.66,212.986 1270.64,211.415 1272.26,209.298 C 1273.89,207.191 1274.71,204.37 1274.71,200.832 C 1274.71,197.993 1273.94,195.317 1272.42,192.803 C 1270.9,190.29 1268.67,188.271 1265.75,186.746 C 1262.84,185.222 1259.41,184.46 1255.44,184.46 C 1251.69,184.46 1248.32,185.117 1245.33,186.432 C 1242.33,187.735 1239.97,189.591 1238.26,192 C 1236.55,194.409 1235.7,197.219 1235.7,200.431 Z M 1325.1,240.821 L 1325.1,233.35 L 1310.25,233.35 L 1310.25,185.018 L 1301.08,185.018 L 1301.08,233.35 L 1286.16,233.35 L 1286.16,240.821 Z M 1346.97,240.821 L 1346.97,185.018 L 1337.82,185.018 L 1337.82,240.821 Z M 1387.95,241.536 C 1393.9,241.536 1399.19,240.082 1403.82,237.173 C 1408.45,234.252 1411.81,230.115 1413.89,224.762 L 1402.89,224.762 C 1401.45,227.706 1399.44,229.9 1396.87,231.343 C 1394.3,232.786 1391.33,233.507 1387.95,233.507 C 1384.26,233.507 1380.98,232.681 1378.09,231.029 C 1375.19,229.365 1372.93,226.979 1371.3,223.872 C 1369.67,220.777 1368.86,217.164 1368.86,213.033 C 1368.86,208.914 1369.67,205.301 1371.3,202.194 C 1372.93,199.098 1375.19,196.707 1378.09,195.02 C 1380.98,193.333 1384.26,192.489 1387.95,192.489 C 1391.33,192.489 1394.3,193.21 1396.87,194.653 C 1399.44,196.096 1401.45,198.29 1402.89,201.234 L 1413.89,201.234 C 1411.81,195.881 1408.45,191.762 1403.82,188.876 C 1399.19,185.978 1393.9,184.53 1387.95,184.53 C 1382.72,184.53 1377.93,185.751 1373.59,188.195 C 1369.25,190.627 1365.81,194.013 1363.27,198.354 C 1360.72,202.682 1359.45,207.575 1359.45,213.033 C 1359.45,218.502 1360.72,223.401 1363.27,227.73 C 1365.81,232.07 1369.26,235.456 1373.62,237.888 C 1377.99,240.32 1382.76,241.536 1387.95,241.536 Z M 1461.7,196.416 L 1438.34,196.416 L 1434.33,185.018 L 1424.76,185.018 L 1444.77,240.908 L 1455.36,240.908 L 1475.35,185.018 L 1465.71,185.018 Z M 1459.13,203.887 L 1450.06,229.824 L 1440.91,203.887 Z" fill="#fff" stroke="#fff" strokeWidth="1.4"/></g><g transform="matrix(0.89 -0.45 0 1 403.59 305)"><g transform="translate(0 0) scale(0.19)"><polygon points="0,0 174.5,87.3 61.1,87.3" fill="#0B2A6B"/><polygon points="61.1,87.3 174.5,87.3 0,174.5" fill="#1F6FDB"/><polygon points="0,0 61.1,87.3 0,87.3" fill="#F7931E"/></g></g><polygon points="273.6,242 388,299.2 388,292.2 273.6,235" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="458.4,264 388,299.2 388,292.2 458.4,257" fill="#1453A8" stroke="#1453A8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="344,199.8 458.4,257 388,292.2 273.6,235" fill="#3B86EE" stroke="#3B86EE" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 325.3 305.45)"><rect x="-3" y="-3" width="37.98" height="35" fill="#F7931E"/><rect width="31.98" height="32" fill="#081E4E"/><rect className="hx-doorlight" width="31.98" height="32" fill="url(#hx-door)"/><g className="hx-shutter-g"><rect className="hx-shutter" width="31.98" height="32" fill="#9DBBEB"/><path d="M0 4H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 8H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 12H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 16H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 20H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 24H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 28H31.98" stroke="#6F8AB8" strokeWidth="1"/></g></g><ellipse cx="366" cy="246" rx="7" ry="3.5" fill="#0F3F86"/><rect x="363.5" y="237" width="5" height="9" fill="#fff"/><circle className="hx-beacon-ring" cx="366" cy="236" r="5" fill="none" stroke="#F7931E" strokeWidth="2"/><circle className="hx-beacon" cx="366" cy="236" r="3.6" fill="#F7931E"/>
              <g className="hx-chip hx-c1"><g transform="translate(26 214)"><g className="hx-float" style={{animationDelay:'0s'}}><rect x="3.5" y="4.5" width="118" height="34" rx="7" fill="#000" opacity=".35"/><rect width="118" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#1F6FDB"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 11h10.2L20 7H6.4"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></g><text x="48" y="22" textAnchor="start" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">#LG-4821</text></g></g></g><g className="hx-chip hx-c2"><g transform="translate(466 196)"><g className="hx-float" style={{animationDelay:'0.7s'}}><rect x="3.5" y="4.5" width="128" height="34" rx="7" fill="#000" opacity=".35"/><rect width="128" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#F7931E"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v.01M18 15v.01"/></g><text x="48" y="22" textAnchor="start" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">COD · 89 DT</text></g></g></g><g className="hx-chip hx-c3"><g transform="translate(452 440)"><g className="hx-float" style={{animationDelay:'1.4s'}}><rect x="3.5" y="4.5" width="100" height="34" rx="7" fill="#000" opacity=".35"/><rect width="100" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#12965A"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></g><text x="48" y="22" textAnchor="start" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">15:02</text></g></g></g>
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

      {/* Preparation Section */}
      <section id="preparation" className="py-24 bg-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-8">
                {[
                  { type: 'picking', label: 'Picking', desc: 't3', detail: 'd3' },
                  { type: 'packing', label: 'Packing', desc: 't4', detail: 'd4' },
                  { type: 'labeling', label: 'Étiquetage', desc: 'tL', detail: 'dL' },
                  { type: 'ready', label: 'Ready', desc: 'tR', detail: 'dR' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-gradient-to-b from-[#081E4E] to-[#0B2A6B] rounded-[32px] border border-white/5 flex flex-col items-center justify-center relative group hover:border-[#F7931E]/20 transition-all shadow-xl overflow-hidden"
                  >
                    <ProcessVisual type={item.type as any} />
                    <div className="absolute inset-0 bg-[#0B2A6B]/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                       <p className="text-[#F7931E] font-black text-sm uppercase mb-2">{item.label}</p>
                       <p className="text-white text-xs font-bold leading-relaxed">{t(item.detail as any)}</p>
                    </div>
                    <p className="absolute bottom-6 text-[10px] font-black uppercase tracking-widest text-[#9FB2DE]/40 group-hover:text-[#F7931E] transition-colors">{item.label}</p>
                  </motion.div>
                ))}
             </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="order-1 lg:order-2">
            <span className="text-[#F7931E] font-bold uppercase tracking-widest text-xs mb-4 block">{t('hwe')}</span>
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
                   {/* Tunisia Map Paths - Comprehensive 24 Governorates */}
                   <path d="M 211.3,38.4 L 211.3,52.8 L 222.6,57.1 L 236,81.1 L 255.1,98.1 L 271.4,81.8 L 302,16 L 211.3,38.4 Z" /> {/* Bizerte */}
                   <path d="M 271.4,81.8 L 311,70.5 L 340,42 L 302,16 Z" /> {/* Tunis Area */}
                   <path d="M 271.4,81.8 L 260.8,219 L 285.4,233 L 315,448 L 366,476 L 413,711 L 417,915 L 341,992 L 117,891 L 117,877 L 205,802 L 271,307 L 214,131 L 171,89 L 211,38 L 271.4,81.8 Z" /> {/* Large Body */}
                   <path d="M 260.8,219 L 269,223 L 308,260 L 305,277 L 271,307 L 260.8,219 Z" /> {/* Coastal Sousse/Monastir */}
                   <path d="M 315,448 L 414,720 L 417,926 L 313,999 L 215,999 L 117,891 L 117,801 L 260,783 L 315,448 Z" /> {/* South Deep */}
                   {/* Adding Subdivision Lines */}
                   <path d="M 240,110 L 290,140" stroke="white" strokeWidth="0.8" opacity="0.4" />
                   <path d="M 220,250 L 300,280" stroke="white" strokeWidth="0.8" opacity="0.4" />
                   <path d="M 240,400 L 340,460" stroke="white" strokeWidth="0.8" opacity="0.4" />
                   <path d="M 260,600 L 390,700" stroke="white" strokeWidth="0.8" opacity="0.4" />
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
              <li><Link href="#preparation" className="hover:text-[#F7931E] transition-colors">{t('n1')}</Link></li>
              <li><Link href="#preparation" className="hover:text-[#F7931E] transition-colors">{t('n0')}</Link></li>
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
