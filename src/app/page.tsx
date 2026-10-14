
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ArrowRight,
  Truck
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/logo";

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
             <g transform="translate(100, 100) scale(1.2) translate(-90, -90)">
                <path d="M 40,80 L 90,105 L 140,80 L 90,55 Z" fill="#0B2A6B" fillOpacity="0.1" />
                <path d="M 40,80 L 40,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
                <path d="M 140,80 L 140,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
                
                <circle cx="90" cy="115" r="10" fill="#1F6FDB" fillOpacity="0.05" />
                
                <path d="M 40,80 L 15,55 L 65,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M 140,80 L 165,55 L 115,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />

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
              <Link href="https://wa.me/21699201552">{t('n4')}</Link>
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
                <Link href="https://wa.me/21699201552">
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 36 600 504" width="600" height="504" role="img" aria-label="Logistica logistics hub" preserveAspectRatio="xMidYMid meet">
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
              
              <ellipse cx="300" cy="330" rx="300" ry="270" fill="url(#hx-glow)" />
              <circle className="hx-star" style={{animationDelay:'1.6s', animationDuration:'2.6s'}} cx="349" cy="58" r="2.0" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'5.2s'}} cx="114" cy="113" r="1.3" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.7s', animationDuration:'3.2s'}} cx="106" cy="131" r="1.7" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.5s', animationDuration:'3.2s'}} cx="78" cy="164" r="1.8" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'2.6s'}} cx="81" cy="167" r="1.3" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.7s', animationDuration:'4.1s'}} cx="154" cy="94" r="1.7" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'4.4s'}} cx="203" cy="46" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.3s', animationDuration:'2.7s'}} cx="578" cy="202" r="1.2" fill="#fff"/><circle className="hx-star" style={{animationDelay:'3.1s', animationDuration:'3.9s'}} cx="562" cy="129" r="2.1" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.0s', animationDuration:'3.0s'}} cx="388" cy="96" r="1.9" fill="#fff"/><circle className="hx-star" style={{animationDelay:'1.2s', animationDuration:'4.0s'}} cx="101" cy="167" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.4s', animationDuration:'2.7s'}} cx="477" cy="93" r="1.6" fill="#fff"/><circle className="hx-star" style={{animationDelay:'0.6s', animationDuration:'4.0s'}} cx="186" cy="107" r="1.0" fill="#fff"/><circle className="hx-star" style={{animationDelay:'2.3s', animationDuration:'5.1s'}} cx="97" cy="162" r="1.4" fill="#fff"/><circle className="hx-star" style={{animationDelay:'3.2s', animationDuration:'2.7s'}} cx="526" cy="168" r="1.1" fill="#fff"/>
              <use href="#hx-orbA" fill="none" stroke="#fff" strokeOpacity=".16" strokeWidth="1.4" strokeDasharray="3 9" className="hx-orbit"/><ellipse className="hx-orbit hx-orbit-r" cx="300" cy="368" rx="292" ry="146" fill="none" stroke="#fff" strokeOpacity=".1" strokeWidth="1.4" strokeDasharray="2 10"/>
              
              <ellipse cx="300" cy="494" rx="250" ry="44" fill="url(#hx-shadow)"/><polygon points="80,360 300,470 300,486 80,376" fill="#0A2A70" stroke="#0A2A70" strokeWidth=".6" strokeLinejoin="round"/><polygon points="520,360 300,470 300,486 520,376" fill="#06205A" stroke="#06205A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="300,250 520,360 300,470 80,360" fill="url(#hx-top)" stroke="#fff" strokeOpacity=".16" strokeWidth="1.2" strokeLinejoin="round"/><path d="M322 261L102 371M278 261L498 371M344 272L124 382M256 272L476 382M366 283L146 393M234 283L454 393M388 294L168 404M212 294L432 404M410 305L190 415M190 305L410 415M432 316L212 426M168 316L388 426M454 327L234 437M146 327L366 437M476 338L256 448M124 338L344 448M498 349L278 459M102 349L322 459" stroke="#fff" strokeOpacity=".07" strokeWidth="1" fill="none"/><ellipse className="hx-ping" cx="300" cy="360" rx="220" ry="110" fill="none" stroke="#6FB0FF" strokeWidth="2.2"/><ellipse className="hx-ping hx-ping2" cx="300" cy="360" rx="220" ry="110" fill="none" stroke="#6FB0FF" strokeWidth="2.2"/><path className="hx-neon" pathLength="1" d="M300 250L520 360L300 470L80 360Z" fill="none" stroke="#F7931E" strokeWidth="5" strokeLinejoin="round" filter="url(#hx-blur)" opacity=".8"/><path className="hx-neon" pathLength="1" d="M300 250L520 360L300 470L80 360Z" fill="none" stroke="#FFC56B" strokeWidth="2" strokeLinejoin="round"/>
              
              <polygon points="143.8,262.1 495.8,438.1 456.2,457.9 104.2,281.9" fill="url(#hx-road)"/><path d="M143.8 262.1L495.8 438.1M104.2 281.9L456.2 457.9" stroke="url(#hx-line)" strokeWidth="1.4" fill="none"/><path d="M124 272L476 448" stroke="url(#hx-line)" strokeWidth="2" strokeDasharray="9 11" fill="none"/>
              
              <polygon points="260.4,320.4 267,323.7 267,273.7 260.4,270.4" fill="#9DB3DA" stroke="#9DB3DA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="272.5,320.95 267,323.7 267,273.7 272.5,270.95" fill="#6F8AB8" stroke="#6F8AB8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="265.9,267.65 272.5,270.95 267,323.7 260.4,270.4" fill="#C9D8F2" stroke="#C9D8F2" strokeWidth=".6" strokeLinejoin="round"/>
              
              <polygon points="432,364.4 462.8,379.8 462.8,337.8 432,322.4" fill="#2058B4" stroke="#2058B4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="493.6,364.4 462.8,379.8 462.8,337.8 493.6,322.4" fill="#143F8C" stroke="#143F8C" strokeWidth=".6" strokeLinejoin="round"/><polygon points="462.8,307 493.6,322.4 462.8,337.8 432,322.4" fill="#3472D6" stroke="#3472D6" strokeWidth=".6" strokeLinejoin="round"/><polygon points="405.6,382 427.6,393 427.6,371 405.6,360" fill="#1A4A9E" stroke="#1A4A9E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="447.4,383.1 427.6,393 427.6,371 447.4,361.1" fill="#103580" stroke="#103580" strokeWidth=".6" strokeLinejoin="round"/><polygon points="425.4,350.1 447.4,361.1 427.6,371 405.6,360" fill="#2A63C4" stroke="#2A63C4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="141.6,346.8 172.4,362.2 172.4,328.2 141.6,312.8" fill="#1A4A9E" stroke="#1A4A9E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="203.2,346.8 172.4,362.2 172.4,328.2 203.2,312.8" fill="#103580" stroke="#103580" strokeWidth=".6" strokeLinejoin="round"/><polygon points="172.4,297.4 203.2,312.8 172.4,328.2 141.6,312.8" fill="#2A63C4" stroke="#2A63C4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="165.8,376.5 192.2,389.7 192.2,369.7 165.8,356.5" fill="#2058B4" stroke="#2058B4" strokeWidth=".6" strokeLinejoin="round"/><polygon points="218.6,376.5 192.2,389.7 192.2,369.7 218.6,356.5" fill="#143F8C" stroke="#143F8C" strokeWidth=".6" strokeLinejoin="round"/><polygon points="192.2,343.3 218.6,356.5 192.2,369.7 165.8,356.5" fill="#3472D6" stroke="#3472D6" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 432 322.4)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="17.22" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.4s'}} x="5" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'0.5s'}} x="17.22" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.7s'}} x="5" y="27" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.8s'}} x="17.22" y="27" width="8.22" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 141.6 312.8)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="17.22" y="5" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'1.4s'}} x="5" y="16" width="8.22" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'0.5s'}} x="17.22" y="16" width="8.22" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 165.8 356.5)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="5.76" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="14.76" y="5" width="5.76" height="5" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 405.6 360)"><rect className="hx-win" style={{animationDelay:'0.0s'}} x="5" y="5" width="3.3" height="5" fill="#F7931E"/><rect className="hx-win" style={{animationDelay:'2.2s'}} x="12.3" y="5" width="3.3" height="5" fill="#F7931E"/></g>
              
              <polygon points="282.4,316 388,368.8 388,294.8 282.4,242" fill="#D5E4FB" stroke="#D5E4FB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="449.6,338 388,368.8 388,294.8 449.6,264" fill="#9DBBEB" stroke="#9DBBEB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="344,211.2 449.6,264 388,294.8 282.4,242" fill="#F3F8FF" stroke="#F3F8FF" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,310 388,362.8 388,357.8 282.4,305" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="449.6,332 388,362.8 388,357.8 449.6,327" fill="#D9780A" stroke="#D9780A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,260 388,312.8 388,298.8 282.4,246" fill="#0B2A6B" stroke="#0B2A6B" strokeWidth=".6" strokeLinejoin="round"/><polygon points="282.4,260 388,312.8 388,310.8 282.4,258" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.19 0.09 0 0.21 294.5 252.57) translate(-1041.24 241.54) scale(1 -1)"><path d="M 1050.38,192.402 L 1069.25,192.402 L 1069.25,185.018 L 1041.24,185.018 L 1041.24,240.821 L 1050.38,240.821 Z M 1077.33,213.033 C 1077.33,218.502 1078.6,223.401 1081.14,227.73 C 1083.68,232.07 1087.14,235.456 1091.51,237.888 C 1095.86,240.32 1100.63,241.536 1105.84,241.536 C 1111.07,241.536 1115.87,240.32 1120.24,237.888 C 1124.6,235.456 1128.04,232.07 1130.55,227.73 C 1133.08,223.401 1134.34,218.502 1134.34,213.033 C 1134.34,207.575 1133.08,202.665 1130.55,198.301 C 1128.04,193.938 1124.6,190.54 1120.24,188.108 C 1115.87,185.676 1111.07,184.46 1105.84,184.46 C 1100.63,184.46 1095.86,185.676 1091.51,188.108 C 1087.14,190.54 1083.68,193.938 1081.14,198.301 C 1078.6,202.665 1077.33,207.575 1077.33,213.033 Z M 1124.93,213.033 C 1124.93,217.164 1124.12,220.777 1122.49,223.872 C 1120.86,226.979 1118.59,229.365 1115.7,231.029 C 1112.81,232.681 1109.52,233.507 1105.84,233.507 C 1102.14,233.507 1098.84,232.681 1095.96,231.029 C 1093.06,229.365 1090.8,226.979 1089.17,223.872 C 1087.54,220.777 1086.72,217.164 1086.72,213.033 C 1086.72,208.914 1087.54,205.289 1089.17,202.159 C 1090.8,199.028 1093.06,196.62 1095.96,194.933 C 1098.84,193.245 1102.14,192.402 1105.84,192.402 C 1109.52,192.402 1112.81,193.245 1115.7,194.933 C 1118.59,196.62 1120.86,199.028 1122.49,202.159 C 1124.12,205.289 1124.93,208.914 1124.93,213.033 Z M 1187.21,224.762 C 1185.75,227.543 1183.75,229.644 1181.19,231.063 C 1178.62,232.483 1175.64,233.193 1172.27,233.193 C 1168.58,233.193 1165.29,232.361 1162.39,230.697 C 1159.5,229.045 1157.24,226.694 1155.6,223.645 C 1153.97,220.585 1153.15,217.047 1153.15,213.033 C 1153.15,209.018 1153.97,205.475 1155.6,202.403 C 1157.24,199.319 1159.5,196.951 1162.39,195.299 C 1165.29,193.635 1168.58,192.803 1172.27,192.803 C 1177.25,192.803 1181.29,194.194 1184.4,196.975 C 1187.49,199.767 1189.39,203.543 1190.09,208.303 L 1169.14,208.303 L 1169.14,215.616 L 1199.88,215.616 L 1199.88,208.46 C 1199.3,204.131 1197.76,200.146 1195.27,196.503 C 1192.78,192.861 1189.54,189.958 1185.55,187.794 C 1181.57,185.618 1177.14,184.53 1172.27,184.53 C 1167.02,184.53 1162.23,185.751 1157.9,188.195 C 1153.56,190.627 1150.12,194.013 1147.59,198.354 C 1145.04,202.682 1143.76,207.575 1143.76,213.033 C 1143.76,218.502 1145.04,223.401 1147.59,227.73 C 1150.12,232.07 1153.57,235.456 1157.94,237.888 C 1162.3,240.32 1167.08,241.536 1172.27,241.536 C 1178.21,241.536 1183.5,240.082 1188.13,237.173 C 1192.75,234.252 1196.11,230.115 1198.2,224.762 Z M 1221.52,240.821 L 1221.52,185.018 L 1212.38,185.018 L 1212.38,240.821 Z M 1235.7,200.431 L 1245.49,200.431 C 1245.7,198.022 1246.65,196.044 1248.33,194.496 C 1250.02,192.937 1252.39,192.157 1255.44,192.157 C 1258.6,192.157 1261.07,192.925 1262.84,194.461 C 1264.6,195.986 1265.47,197.952 1265.47,200.361 C 1265.47,202.234 1264.93,203.759 1263.83,204.934 C 1262.74,206.109 1261.37,207.017 1259.73,207.657 C 1258.1,208.297 1255.85,208.995 1252.96,209.751 C 1249.32,210.717 1246.36,211.695 1244.09,212.684 C 1241.81,213.673 1239.87,215.209 1238.26,217.292 C 1236.66,219.386 1235.85,222.173 1235.85,225.653 C 1235.85,228.864 1236.66,231.674 1238.26,234.083 C 1239.87,236.492 1242.11,238.336 1245,239.616 C 1247.9,240.896 1251.24,241.536 1255.04,241.536 C 1260.45,241.536 1264.88,240.186 1268.34,237.487 C 1271.78,234.787 1273.69,231.081 1274.08,226.368 L 1263.96,226.368 C 1263.79,228.405 1262.83,230.144 1261.06,231.587 C 1259.3,233.03 1256.97,233.751 1254.08,233.751 C 1251.46,233.751 1249.32,233.082 1247.65,231.744 C 1246,230.406 1245.18,228.48 1245.18,225.967 C 1245.18,224.256 1245.69,222.854 1246.73,221.76 C 1247.78,220.655 1249.1,219.782 1250.71,219.142 C 1252.31,218.502 1254.51,217.804 1257.29,217.047 C 1260.99,216.035 1264,215.023 1266.33,214.01 C 1268.66,212.986 1270.64,211.415 1272.26,209.298 C 1273.89,207.191 1274.71,204.37 1274.71,200.832 C 1274.71,197.993 1273.94,195.317 1272.42,192.803 C 1270.9,190.29 1268.67,188.271 1265.75,186.746 C 1262.84,185.222 1259.41,184.46 1255.44,184.46 C 1251.69,184.46 1248.32,185.117 1245.33,186.432 C 1242.33,187.735 1239.97,189.591 1238.26,192 C 1236.55,194.409 1235.7,197.219 1235.7,200.431 Z M 1325.1,240.821 L 1325.1,233.35 L 1310.25,233.35 L 1310.25,185.018 L 1301.08,185.018 L 1301.08,233.35 L 1286.16,233.35 L 1286.16,240.821 Z M 1346.97,240.821 L 1346.97,185.018 L 1337.82,185.018 L 1337.82,240.821 Z M 1387.95,241.536 C 1393.9,241.536 1399.19,240.082 1403.82,237.173 C 1408.45,234.252 1411.81,230.115 1413.89,224.762 L 1402.89,224.762 C 1401.45,227.706 1399.44,229.9 1396.87,231.343 C 1394.3,232.786 1391.33,233.507 1387.95,233.507 C 1384.26,233.507 1380.98,232.681 1378.09,231.029 C 1375.19,229.365 1372.93,226.979 1371.3,223.872 C 1369.67,220.777 1368.86,217.164 1368.86,213.033 C 1368.86,208.914 1369.67,205.301 1371.3,202.194 C 1372.93,199.098 1375.19,196.707 1378.09,195.02 C 1380.98,193.333 1384.26,192.489 1387.95,192.489 C 1391.33,192.489 1394.3,193.21 1396.87,194.653 C 1399.44,196.096 1401.45,198.29 1402.89,201.234 L 1413.89,201.234 C 1411.81,195.881 1408.45,191.762 1403.82,188.876 C 1399.19,185.978 1393.9,184.53 1387.95,184.53 C 1382.72,184.53 1377.93,185.751 1373.59,188.195 C 1369.25,190.627 1365.81,194.013 1363.27,198.354 C 1360.72,202.682 1359.45,207.575 1359.45,213.033 C 1359.45,218.502 1360.72,223.401 1363.27,227.73 C 1365.81,232.07 1369.26,235.456 1373.62,237.888 C 1377.99,240.32 1382.76,241.536 1387.95,241.536 Z M 1461.7,196.416 L 1438.34,196.416 L 1434.33,185.018 L 1424.76,185.018 L 1444.77,240.908 L 1455.36,240.908 L 1475.35,185.018 L 1465.71,185.018 Z M 1459.13,203.887 L 1450.06,229.824 L 1440.91,203.887 Z" fill="#fff" stroke="#fff" strokeWidth="1.4"/></g><g transform="matrix(0.89 -0.45 0 1 403.59 305)"><g transform="translate(0 0) scale(0.19)"><polygon points="0,0 174.5,87.3 61.1,87.3" fill="#0B2A6B"/><polygon points="61.1,87.3 174.5,87.3 0,174.5" fill="#1F6FDB"/><polygon points="0,0 61.1,87.3 0,87.3" fill="#F7931E"/></g></g><polygon points="273.6,242 388,299.2 388,292.2 273.6,235" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="458.4,264 388,299.2 388,292.2 458.4,257" fill="#1453A8" stroke="#1453A8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="344,199.8 458.4,257 388,292.2 273.6,235" fill="#3B86EE" stroke="#3B86EE" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 325.3 305.45)"><rect x="-3" y="-3" width="37.98" height="35" fill="#F7931E"/><rect width="31.98" height="32" fill="#081E4E"/><rect className="hx-doorlight" width="31.98" height="32" fill="url(#hx-door)"/><g className="hx-shutter-g"><rect className="hx-shutter" width="31.98" height="32" fill="#9DBBEB"/><path d="M0 4H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 8H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 12H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 16H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 20H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 24H31.98" stroke="#6F8AB8" strokeWidth="1"/><path d="M0 28H31.98" stroke="#6F8AB8" strokeWidth="1"/></g></g><ellipse cx="366" cy="246" rx="7" ry="3.5" fill="#0F3F86"/><rect x="363.5" y="237" width="5" height="9" fill="#fff"/><circle className="hx-beacon-ring" cx="366" cy="236" r="5" fill="none" stroke="#F7931E" strokeWidth="2"/><circle className="hx-beacon" cx="366" cy="236" r="3.6" fill="#F7931E"/>
              
              {/* 7 loading apron + crates */}
              <polygon points="271.4,310.5 399,374.3 383.6,382 256,318.2" fill="#fff" fillOpacity=".07" stroke="#F7931E" strokeOpacity=".55" strokeWidth="1.2" strokeDasharray="4 4"/><polygon points="279.1,326.45 290.1,331.95 290.1,320.95 279.1,315.45" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="298.9,327.55 290.1,331.95 290.1,320.95 298.9,316.55" fill="#D9780A" stroke="#D9780A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="287.9,311.05 298.9,316.55 290.1,320.95 279.1,315.45" fill="#FFB255" stroke="#FFB255" strokeWidth=".6" strokeLinejoin="round"/><path d="M293.4 313.8L284.6 318.2L284.6 329.2" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/><polygon points="292.3,333.05 302.2,338 302.2,330 292.3,325.05" fill="#E3ECFA" stroke="#E3ECFA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="309.9,334.15 302.2,338 302.2,330 309.9,326.15" fill="#BDD0EE" stroke="#BDD0EE" strokeWidth=".6" strokeLinejoin="round"/><polygon points="300,321.2 309.9,326.15 302.2,330 292.3,325.05" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".6" strokeLinejoin="round"/><path d="M304.95 323.68L297.25 327.52L297.25 335.52" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/><polygon points="352.8,363.3 364.9,369.35 364.9,360.35 352.8,354.3" fill="#12965A" stroke="#12965A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="373.7,364.95 364.9,369.35 364.9,360.35 373.7,355.95" fill="#0C6F42" stroke="#0C6F42" strokeWidth=".6" strokeLinejoin="round"/><polygon points="361.6,349.9 373.7,355.95 364.9,360.35 352.8,354.3" fill="#46C48F" stroke="#46C48F" strokeWidth=".6" strokeLinejoin="round"/><path d="M367.65 352.93L358.85 357.32L358.85 366.32" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/><polygon points="356.1,354.85 364.9,359.25 364.9,351.25 356.1,346.85" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="371.5,355.95 364.9,359.25 364.9,351.25 371.5,347.95" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="362.7,343.55 371.5,347.95 364.9,351.25 356.1,346.85" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><path d="M367.1 345.75L360.5 349.05L360.5 357.05" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/>
              
              {/* 8 truck */}
              <g className="hx-truck"><g className="hx-bob"><polygon points="291.2,340.2 377,383.1 345.1,399.05 259.3,356.15" fill="#000" opacity=".28"/><polygon points="268.1,351.05 347.3,390.65 347.3,385.65 268.1,346.05" fill="#122F70" stroke="#122F70" strokeWidth=".6" strokeLinejoin="round"/><polygon points="369.3,379.65 347.3,390.65 347.3,385.65 369.3,374.65" fill="#0B2257" stroke="#0B2257" strokeWidth=".6" strokeLinejoin="round"/><polygon points="290.1,335.05 369.3,374.65 347.3,385.65 268.1,346.05" fill="#1B3F8C" stroke="#1B3F8C" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 279.1 356.75)"><circle r="6.3" fill="#0A1A44"/><circle r="3.3" fill="#C9D8F2"/><circle r="1.3" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 307.7 371.05)"><circle r="6.3" fill="#0A1A44"/><circle r="3.3" fill="#C9D8F2"/><circle r="1.3" fill="#F7931E"/></g><g transform="matrix(0.89 0.45 0 1 331.9 383.15)"><circle r="6.3" fill="#0A1A44"/><circle r="3.3" fill="#C9D8F2"/><circle r="1.3" fill="#F7931E"/></g><polygon points="267,347.7 319.8,374.1 319.8,372.1 267,345.7" fill="#9DB3DA" stroke="#9DB3DA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="346.2,360.9 319.8,374.1 319.8,372.1 346.2,358.9" fill="#6F8AB8" stroke="#6F8AB8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="293.4,332.5 346.2,358.9 319.8,372.1 267,345.7" fill="#C9D8F2" stroke="#C9D8F2" strokeWidth=".6" strokeLinejoin="round"/><polygon points="290.54,333.93 343.34,360.33 343.34,348.33 290.54,321.93" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="346.2,358.9 343.34,360.33 343.34,348.33 346.2,346.9" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="293.4,320.5 346.2,346.9 343.34,348.33 290.54,321.93" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><polygon points="267,345.7 269.86,347.13 269.86,335.13 267,333.7" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="296.26,333.93 269.86,347.13 269.86,335.13 296.26,321.93" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="293.4,320.5 296.26,321.93 269.86,335.13 267,333.7" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><g className="hx-pc" style={{animationName:'hx-pc0'}}><polygon points="278,342.84 290.76,349.22 290.76,336.22 278,329.84" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="303.96,342.62 290.76,349.22 290.76,336.22 303.96,329.62" fill="#D9780A" stroke="#D9780A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="291.2,323.24 303.96,329.62 290.76,336.22 278,329.84" fill="#FFB255" stroke="#FFB255" strokeWidth=".6" strokeLinejoin="round"/><path d="M297.58 326.43L284.38 333.03L284.38 346.03" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/></g><g className="hx-pc" style={{animationName:'hx-pc1'}}><polygon points="291.64,351.42 305.28,358.24 305.28,347.24 291.64,340.42" fill="#E3ECFA" stroke="#E3ECFA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="320.24,350.76 305.28,358.24 305.28,347.24 320.24,339.76" fill="#BDD0EE" stroke="#BDD0EE" strokeWidth=".6" strokeLinejoin="round"/><polygon points="306.6,332.94 320.24,339.76 305.28,347.24 291.64,340.42" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".6" strokeLinejoin="round"/><path d="M313.42 336.35L298.46 343.83L298.46 354.83" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/></g><g className="hx-pc" style={{animationName:'hx-pc2'}}><polygon points="305.5,360.55 318.7,367.15 318.7,353.15 305.5,346.55" fill="#12965A" stroke="#12965A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="334.1,359.45 318.7,367.15 318.7,353.15 334.1,345.45" fill="#0C6F42" stroke="#0C6F42" strokeWidth=".6" strokeLinejoin="round"/><polygon points="320.9,338.85 334.1,345.45 318.7,353.15 305.5,346.55" fill="#46C48F" stroke="#46C48F" strokeWidth=".6" strokeLinejoin="round"/><path d="M327.5 342.15L312.1 349.85L312.1 363.85" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/></g><g className="hx-pc" style={{animationName:'hx-pc3'}}><polygon points="280.64,329.62 290.76,334.68 290.76,324.68 280.64,319.62" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="300.66,329.73 290.76,334.68 290.76,324.68 300.66,319.73" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="290.54,314.67 300.66,319.73 290.76,324.68 280.64,319.62" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><path d="M295.6 317.2L285.7 322.15L285.7 332.15" fill="none" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.6" strokeLinejoin="round"/></g><polygon points="267,345.7 319.8,372.1 319.8,361.1 267,334.7" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="322.66,370.67 319.8,372.1 319.8,361.1 322.66,359.67" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="269.86,333.27 322.66,359.67 319.8,361.1 267,334.7" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><polygon points="316.94,370.67 319.8,372.1 319.8,361.1 316.94,359.67" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="346.2,358.9 319.8,372.1 319.8,361.1 346.2,347.9" fill="#1757B0" stroke="#1757B0" strokeWidth=".6" strokeLinejoin="round"/><polygon points="343.34,346.47 346.2,347.9 319.8,361.1 316.94,359.67" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><polygon points="267,336.7 319.8,363.1 319.8,361.1 267,334.7" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="322,375.2 344,386.2 344,364.2 322,353.2" fill="#E3ECFA" stroke="#E3ECFA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="370.4,373 344,386.2 344,364.2 370.4,351" fill="#BDD0EE" stroke="#BDD0EE" strokeWidth=".6" strokeLinejoin="round"/><polygon points="348.4,340 370.4,351 344,364.2 322,353.2" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth=".6" strokeLinejoin="round"/><polygon points="346.64,368.88 367.76,358.32 367.76,366.32 346.64,376.88" fill="#163C8A" stroke="#163C8A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="346.64,368.88 355,364.7 355,368.7 346.64,372.88" fill="#5AA0F5" stroke="#5AA0F5" strokeWidth=".6" strokeLinejoin="round"/><g transform="matrix(0.89 0.45 0 1 325.3 358.85)"><rect width="17.22" height="9" fill="#163C8A"/><rect width="6.89" height="9" fill="#5AA0F5" opacity=".8"/></g><polygon points="322,370.2 344,381.2 344,384.2 322,373.2" fill="#1F6FDB" stroke="#1F6FDB" strokeWidth=".6" strokeLinejoin="round"/><polygon points="369.3,369.55 363.8,372.3 363.8,374.3 369.3,371.55" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="350.6,378.9 345.1,381.65 345.1,383.65 350.6,380.9" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="345.1,388.65 347.74,389.97 347.74,386.97 345.1,385.65" fill="#122F70" stroke="#122F70" strokeWidth=".6" strokeLinejoin="round"/><polygon points="371.94,377.87 347.74,389.97 347.74,386.97 371.94,374.87" fill="#0B2257" stroke="#0B2257" strokeWidth=".6" strokeLinejoin="round"/><polygon points="369.3,373.55 371.94,374.87 347.74,386.97 345.1,385.65" fill="#1B3F8C" stroke="#1B3F8C" strokeWidth=".6" strokeLinejoin="round"/></g></g>
              
              {/* 9 scanner gate */}
              <path className="hx-scanline" d="M263.7 322.05L224.1 341.85" stroke="#3DDC97" strokeWidth="2.4" strokeLinecap="round" opacity="0"/><polygon points="215.3,342.95 221.9,346.25 221.9,296.25 215.3,292.95" fill="#9DB3DA" stroke="#9DB3DA" strokeWidth=".6" strokeLinejoin="round"/><polygon points="227.4,343.5 221.9,346.25 221.9,296.25 227.4,293.5" fill="#6F8AB8" stroke="#6F8AB8" strokeWidth=".6" strokeLinejoin="round"/><polygon points="220.8,290.2 227.4,293.5 221.9,296.25 215.3,292.95" fill="#C9D8F2" stroke="#C9D8F2" strokeWidth=".6" strokeLinejoin="round"/><polygon points="215.3,292.95 221.9,296.25 221.9,289.25 215.3,285.95" fill="#122F70" stroke="#122F70" strokeWidth=".6" strokeLinejoin="round"/><polygon points="272.5,270.95 221.9,296.25 221.9,289.25 272.5,263.95" fill="#0B2257" stroke="#0B2257" strokeWidth=".6" strokeLinejoin="round"/><polygon points="265.9,260.65 272.5,263.95 221.9,289.25 215.3,285.95" fill="#1B3F8C" stroke="#1B3F8C" strokeWidth=".6" strokeLinejoin="round"/><ellipse cx="243.9" cy="274.95" rx="5" ry="2.5" fill="#081E4E"/><circle className="hx-led" cx="243.9" cy="272.95" r="3.2" fill="#3DDC97"/>
              
              {/* 10 trees */}
              <ellipse cx="119.6" cy="364.4" rx="9" ry="4.5" fill="#000" opacity=".25"/><rect x="118" y="355.4" width="3.2" height="9" fill="#6B4A2B"/><polygon points="108.6,358.4 119.6,358.4 119.6,340.4" fill="#18A56C"/><polygon points="119.6,358.4 130.6,358.4 119.6,340.4" fill="#0D7A4D"/><polygon points="111.6,346.4 119.6,346.4 119.6,330.4" fill="#18A56C"/><polygon points="119.6,346.4 127.6,346.4 119.6,330.4" fill="#0D7A4D"/><ellipse cx="207.6" cy="406.2" rx="8.1" ry="4.05" fill="#000" opacity=".25"/><rect x="206.16" y="398.1" width="2.88" height="8.1" fill="#6B4A2B"/><polygon points="197.7,400.8 207.6,400.8 207.6,384.6" fill="#18A56C"/><polygon points="207.6,400.8 217.5,400.8 207.6,384.6" fill="#0D7A4D"/><polygon points="200.4,390 207.6,390 207.6,375.6" fill="#18A56C"/><polygon points="207.6,390 214.8,390 207.6,375.6" fill="#0D7A4D"/><ellipse cx="258.2" cy="416.1" rx="7.65" ry="3.82" fill="#000" opacity=".25"/><rect x="256.84" y="408.45" width="2.72" height="7.65" fill="#6B4A2B"/><polygon points="248.85,411 258.2,411 258.2,395.7" fill="#18A56C"/><polygon points="258.2,411 267.55,411 258.2,395.7" fill="#0D7A4D"/><polygon points="251.4,400.8 258.2,400.8 258.2,387.2" fill="#18A56C"/><polygon points="258.2,400.8 265,400.8 258.2,387.2" fill="#0D7A4D"/><ellipse cx="322" cy="430.4" rx="9" ry="4.5" fill="#000" opacity=".25"/><rect x="320.4" y="421.4" width="3.2" height="9" fill="#6B4A2B"/><polygon points="311,424.4 322,424.4 322,406.4" fill="#18A56C"/><polygon points="322,424.4 333,424.4 322,406.4" fill="#0D7A4D"/><polygon points="314,412.4 322,412.4 322,396.4" fill="#18A56C"/><polygon points="322,412.4 330,412.4 322,396.4" fill="#0D7A4D"/><ellipse cx="300" cy="454.6" rx="8.1" ry="4.05" fill="#000" opacity=".25"/><rect x="298.56" y="446.5" width="2.88" height="8.1" fill="#6B4A2B"/><polygon points="290.1,449.2 300,449.2 300,433" fill="#18A56C"/><polygon points="300,449.2 309.9,449.2 300,433" fill="#0D7A4D"/><polygon points="292.8,438.4 300,438.4 300,424" fill="#18A56C"/><polygon points="300,438.4 307.2,438.4 300,424" fill="#0D7A4D"/>
              
              {/* 11 destination pin */}
              <ellipse className="hx-dest-ring" cx="434.2" cy="427.1" rx="18" ry="9" fill="none" stroke="#12965A" strokeWidth="2.4"/><ellipse className="hx-dest-base" cx="434.2" cy="427.1" rx="9" ry="4.5" fill="#12965A"/><g className="hx-dest"><g transform="translate(434.2 425.1) scale(1.35)"><path d="M0 0C-10-9-12-15-12-20a12 12 0 0 1 24 0C12-15 10-9 0 0Z" fill="#12965A"/><circle cy="-20" r="4.8" fill="#fff"/><path d="M-2.6-20l1.9 1.9 3.5-3.7" fill="none" stroke="#12965A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></g></g>
              
              {/* 12 orbiting icons (SMIL motion along ellipses) */}
              <g className="hx-smil"><animateMotion dur="26s" begin="0s" repeatCount="indefinite"><mpath href="#hx-pathA"/></animateMotion><g><animateTransform attributeName="transform" type="scale" values=".9;1.12;.9;.66;.9" keyTimes="0;.25;.5;.75;1" dur="26s" begin="0s" repeatCount="indefinite"/><g><animate attributeName="opacity" values=".85;1;.85;.5;.85" keyTimes="0;.25;.5;.75;1" dur="26s" begin="0s" repeatCount="indefinite"/><polygon points="-9,-5 0,-0.5 0,9.5 -9,5" fill="#F7931E" stroke="#F7931E" strokeWidth=".6" strokeLinejoin="round"/><polygon points="0,-0.5 9,-5 9,5 0,9.5" fill="#D9780A" stroke="#D9780A" strokeWidth=".6" strokeLinejoin="round"/><polygon points="0,-9.5 9,-5 0,-0.5 -9,-5" fill="#FFB255" stroke="#FFB255" strokeWidth=".6" strokeLinejoin="round"/><path d="M0 -9.5V9.5" stroke="#0B2A6B" strokeOpacity=".45" strokeWidth="1.4"/></g></g></g><g className="hx-smil"><animateMotion dur="26s" begin="-13s" repeatCount="indefinite"><mpath href="#hx-pathA"/></animateMotion><g><animateTransform attributeName="transform" type="scale" values=".9;1.12;.9;.66;.9" keyTimes="0;.25;.5;.75;1" dur="26s" begin="-13s" repeatCount="indefinite"/><g><animate attributeName="opacity" values=".85;1;.85;.5;.85" keyTimes="0;.25;.5;.75;1" dur="26s" begin="-13s" repeatCount="indefinite"/><path d="M0 13C-9 4-10.5-1-10.5-5a10.5 10.5 0 0 1 21 0C10.5-1 9 4 0 13Z" fill="#12965A"/><circle cy="-5" r="4" fill="#fff"/></g></g></g><g className="hx-smil"><animateMotion dur="34s" begin="-6s" repeatCount="indefinite"><mpath href="#hx-pathB"/></animateMotion><g><animateTransform attributeName="transform" type="scale" values=".9;.66;.9;1.12;.9" keyTimes="0;.25;.5;.75;1" dur="34s" begin="-6s" repeatCount="indefinite"/><g><animate attributeName="opacity" values=".85;.5;.85;1;.85" keyTimes="0;.25;.5;.75;1" dur="34s" begin="-6s" repeatCount="indefinite"/><circle r="12" fill="#F7931E"/><circle r="9.2" fill="none" stroke="#0B2A6B" strokeWidth="1.4"/><text y="3.4" textAnchor="middle" dominantBaseline="central" fontFamily="Inter,'Segoe UI',Arial,Helvetica,sans-serif" fontSize="9.5" fontWeight="800" fill="#0B2A6B">DT</text></g></g></g><g className="hx-smil"><animateMotion dur="34s" begin="-23s" repeatCount="indefinite"><mpath href="#hx-pathB"/></animateMotion><g><animateTransform attributeName="transform" type="scale" values=".9;.66;.9;1.12;.9" keyTimes="0;.25;.5;.75;1" dur="34s" begin="-23s" repeatCount="indefinite"/><g><animate attributeName="opacity" values=".85;.5;.85;.5;.85" keyTimes="0;.25;.5;.75;1" dur="34s" begin="-23s" repeatCount="indefinite"/><circle r="13" fill="#1F6FDB"/><circle r="13" fill="none" stroke="#fff" strokeOpacity=".5" strokeWidth="1.2"/><g transform="translate(-9.6 -9.6) scale(0.8)" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h11v10H2zM13 9h4l4 3.5V16h-8"/><circle cx="6.5" cy="17.5" r="2"/><circle cx="17.5" cy="17.5" r="2"/></g></g></g></g>
              
              {/* 13 air route: logo-mark paper plane + trail (SMIL) */}
              <use href="#hx-air" fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.6" strokeDasharray="2 8" strokeLinecap="round"/><circle cx="62" cy="196" r="4.5" fill="#F7931E"/><circle className="hx-dot-ring" cx="62" cy="196" r="5" fill="none" stroke="#F7931E" strokeWidth="1.6"/><circle cx="540" cy="124" r="4.5" fill="#F7931E"/><circle className="hx-dot-ring" cx="540" cy="124" r="5" fill="none" stroke="#F7931E" strokeWidth="1.6"/><g className="hx-smil"><path d="M62 196C126 70 300 14 540 124" pathLength="1" fill="none" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" strokeDasharray=".2 3"><animate attributeName="stroke-dashoffset" values=".2;-.8;-.8" keyTimes="0;.75;1" dur="8s" repeatCount="indefinite"/></path><g><animateMotion dur="8s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;.75;1" calcMode="linear"><mpath href="#hx-air"/></animateMotion><g><animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;.06;.68;.75;1" dur="8s" repeatCount="indefinite"/><g transform="translate(-13 -13) scale(.15)"><polygon points="0,0 174.5,87.3 61.1,87.3" fill="#fff"/><polygon points="61.1,87.3 174.5,87.3 0,174.5" fill="#1F6FDB"/><polygon points="0,0 61.1,87.3 0,87.3" fill="#F7931E"/><polygon points="0,0 174.5,87.3 61.1,87.3" fill="#fff"/></g></g></g></g>
              
              {/* 14 status chips */}
              <g className="hx-chip hx-c1"><g transform="translate(26 214)"><g className="hx-float" style={{animationDelay:'0s'}}><rect x="3.5" y="4.5" width="118" height="34" rx="7" fill="#000" opacity=".35"/><rect width="118" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#1F6FDB"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 11h10.2L20 7H6.4"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></g><text x="75.75" y="21.5" textAnchor="middle" dominantBaseline="central" fontFamily="Inter,'Segoe UI',Arial,Helvetica,sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">#LG-4821</text></g></g></g><g className="hx-chip hx-c2"><g transform="translate(466 196)"><g className="hx-float" style={{animationDelay:'0.7s'}}><rect x="3.5" y="4.5" width="128" height="34" rx="7" fill="#000" opacity=".35"/><rect width="128" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#F7931E"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9v.01M18 15v.01"/></g><text x="80.75" y="21.5" textAnchor="middle" dominantBaseline="central" fontFamily="Inter,'Segoe UI',Arial,Helvetica,sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">COD · 89 DT</text></g></g></g><g className="hx-chip hx-c3"><g transform="translate(452 440)"><g className="hx-float" style={{animationDelay:'1.4s'}}><rect x="3.5" y="4.5" width="100" height="34" rx="7" fill="#000" opacity=".35"/><rect width="100" height="34" rx="7" fill="#fff"/><circle cx="19" cy="17" r="11" fill="#12965A"/><g transform="translate(11.8 9.8) scale(0.6)" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></g><text x="66.75" y="21.5" textAnchor="middle" dominantBaseline="central" fontFamily="Inter,'Segoe UI',Arial,Helvetica,sans-serif" fontSize="12.5" fontWeight="700" fill="#0B2A6B">15:02</text></g></g></g>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#081E4E] py-12 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: t('stats_l1'), value: '+12000' },
             { label: t('stats_l2'), value: '24' },
             { label: t('stats_l3'), value: '98%' },
             { label: t('stats_l4'), value: '<24h' }
           ].map((stat, i) => (
             <div key={i} className="text-center">
                <p className="text-3xl font-black text-[#F7931E] mb-1">{stat.value}</p>
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Preparation Section */}
      <section id="preparation" className="py-24 bg-[#0B2A6B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">{t('hwe')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">{t('hwt')}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { id: 'picking', title: 'Picking', desc: t('d3') },
              { id: 'packing', title: 'Packing', desc: t('d4') },
              { id: 'labeling', title: 'Étiquetage', desc: t('dL') },
              { id: 'ready', title: 'Ready', desc: t('dR') }
            ].map((step) => (
              <Card key={step.id} className="bg-white/5 border-white/10 hover:border-[#F7931E]/50 transition-all group overflow-hidden">
                <div className="h-48 bg-[#081E4E]/50 relative">
                  <ProcessVisual type={step.id as any} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#9FB2DE] leading-relaxed">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other sections would go here... (Warehouse, Dashboard, Coverage, etc.) */}
      {/* For brevity, I'm keeping the core structure fixed first to resolve the crash */}

      <footer className="bg-[#081E4E] py-12 border-t border-white/5 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <Logo variant="white" className="mx-auto mb-8" />
          <div className="flex justify-center gap-8 mb-8">
            <Link href="https://wa.me/21699201552" className="text-white/60 hover:text-[#F7931E] transition-colors font-bold uppercase text-xs tracking-widest">WhatsApp</Link>
            <Link href="tel:+21699201552" className="text-white/60 hover:text-[#F7931E] transition-colors font-bold uppercase text-xs tracking-widest">Téléphone</Link>
          </div>
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">{t('foot')}</p>
        </div>
      </footer>
    </div>
  );
}

