
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
          <g transform="translate(10, 10)">
            {/* Box Body (Isometric) */}
            <path d="M 40,80 L 90,105 L 140,80 L 90,55 Z" fill="#0B2A6B" fillOpacity="0.1" />
            <path d="M 40,80 L 40,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 140,80 L 140,130 L 90,155 L 90,105 Z" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" strokeLinejoin="round" />
            
            {/* Inner items visualization */}
            <path d="M 60,75 Q 80,68 100,75 T 130,75" fill="none" stroke="#1F6FDB" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
            
            {/* Flaps (Open for processing) */}
            <path d="M 40,80 L 15,55 L 65,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M 140,80 L 165,55 L 115,30 L 90,55 Z" fill="#081E4E" stroke="#1F6FDB" strokeWidth="1.5" strokeLinejoin="round" />

            {/* Application of Tape */}
            <motion.path 
              d="M 90,55 L 90,105 L 90,155" 
              fill="none" 
              stroke="url(#tapeGradient)" 
              strokeWidth="10" 
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              filter="url(#glowProcess)"
            />
            {/* Tape Reflet (Detail) */}
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

            {/* Tape Gun Roller Animated */}
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
             <svg viewBox="0 0 520 220" className="w-full h-auto overflow-visible" role="img">
                <defs>
                  <linearGradient id="truckBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={1} />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="truckCab" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity={1} />
                    <stop offset="100%" stopColor="#E0E7FF" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E3A5F" stopOpacity={0.3} />
                    <stop offset="50%" stopColor="#1E3A5F" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#1E3A5F" stopOpacity={0.3} />
                  </linearGradient>
                  <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity={1} />
                    <stop offset="100%" stopColor="#D97706" stopOpacity={1} />
                  </linearGradient>
                  <linearGradient id="boxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FBBF24" stopOpacity={1} />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity={1} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <filter id="shadow">
                    <feDropShadow dx={0} dy={4} stdDeviation={6} floodColor="#000" floodOpacity={0.3}/>
                  </filter>
                  <clipPath id="truckClip">
                    <rect x="60" y="60" width="180" height="80" rx="6"/>
                  </clipPath>
                </defs>

                <g>
                  <line x1="20" y1="175" x2="500" y2="175" stroke="#1E3A5F" strokeWidth="3" strokeDasharray="12,8" opacity={0.5}>
                    <animate attributeName="stroke-dashoffset" from="0" to="-40" dur="1s" repeatCount="indefinite"/>
                  </line>
                  <line x1="20" y1="180" x2="500" y2="180" stroke="#1E3A5F" strokeWidth="1" opacity={0.2}/>
                </g>

                <ellipse cx="170" cy="178" rx="130" ry="8" fill="#0F172A" opacity={0.4}>
                  <animate attributeName="rx" values="130;125;130" dur="0.6s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.4;0.3;0.4" dur="0.6s" repeatCount="indefinite"/>
                </ellipse>

                <g filter="url(#shadow)">
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0;0,-1;0,0" dur="0.8s" repeatCount="indefinite"/>
                  <rect x="60" y="60" width="180" height="80" rx="6" fill="url(#truckBody)" stroke="#2563EB" strokeWidth="1.5"/>
                  <line x1="70" y1="85" x2="230" y2="85" stroke="#2563EB" strokeWidth="0.8" opacity={0.4}/>
                  <line x1="70" y1="110" x2="230" y2="110" stroke="#2563EB" strokeWidth="0.8" opacity={0.4}/>
                  <line x1="150" y1="60" x2="150" y2="140" stroke="#2563EB" strokeWidth="1" opacity={0.3}/>
                  <text x="105" y="105" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#FFFFFF" opacity={0.9} letterSpacing="2">LOGISTICA</text>
                  <path d="M240,90 L240,140 L310,140 L310,100 L290,90 Z" fill="url(#truckCab)" stroke="#CBD5E1" strokeWidth="1.5"/>
                  <path d="M250,95 L250,115 L295,115 L295,100 L285,95 Z" fill="#93C5FD" opacity={0.7}>
                    <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <line x1="255" y1="97" x2="260" y2="113" stroke="#FFFFFF" strokeWidth="1.5" opacity={0.5}/>
                  <rect x="305" y="120" width="8" height="12" rx="3" fill="#FBBF24">
                    <animate attributeName="opacity" values="1;0.6;1" dur="1.5s" repeatCount="indefinite"/>
                  </rect>
                  <circle cx="315" cy="126" r="15" fill="#FBBF24" opacity={0.15}>
                    <animate attributeName="r" values="15;20;15" dur="1.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.15;0.05;0.15" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <rect x={238} y={138} width={75} height={6} rx={3} fill="#64748B"/>
                  <circle cx={275} cy={148} r={16} fill="#1E293B" stroke="#334155" strokeWidth={2}/>
                  <circle cx={275} cy={148} r={8} fill="#475569"/>
                  <circle cx={275} cy={148} r={3} fill="#94A3B8"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 275 148" to="360 275 148" dur="0.5s" repeatCount="indefinite"/>
                    <line x1={275} y1={134} x2={275} y2={162} stroke="#64748B" strokeWidth={1.5}/>
                    <line x1={261} y1={148} x2={289} y2={148} stroke="#64748B" strokeWidth={1.5}/>
                  </g>
                  <circle cx={110} cy={148} r={16} fill="#1E293B" stroke="#334155" strokeWidth={2}/>
                  <circle cx={110} cy={148} r={8} fill="#475569"/>
                  <circle cx={110} cy={148} r={3} fill="#94A3B8"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 110 148" to="360 110 148" dur="0.5s" repeatCount="indefinite"/>
                    <line x1={110} y1={134} x2={110} y2={162} stroke="#64748B" strokeWidth={1.5}/>
                    <line x1={96} y1={148} x2={124} y2={148} stroke="#64748B" strokeWidth={1.5}/>
                  </g>
                  <circle cx={190} cy={148} r={16} fill="#1E293B" stroke="#334155" strokeWidth={2}/>
                  <circle cx={190} cy={148} r={8} fill="#475569"/>
                  <circle cx={190} cy={148} r={3} fill="#94A3B8"/>
                  <g>
                    <animateTransform attributeName="transform" type="rotate" from="0 190 148" to="360 190 148" dur="0.5s" repeatCount="indefinite"/>
                    <line x1={190} y1={134} x2={190} y2={162} stroke="#64748B" strokeWidth={1.5}/>
                    <line x1={176} y1={148} x2={204} y2={148} stroke="#64748B" strokeWidth={1.5}/>
                  </g>
                </g>

                <g>
                  <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0;0,-1;0,0" dur="0.8s" repeatCount="indefinite"/>
                  <rect x={80} y={38} width={30} height={22} rx={2} fill="url(#boxGrad)" stroke="#D97706" strokeWidth={1}>
                    <animate attributeName="y" values="38;35;38" dur="1.2s" repeatCount="indefinite"/>
                  </rect>
                  <line x1={95} y1={38} x2={95} y2={60} stroke="#D97706" strokeWidth={1} opacity={0.6}>
                    <animate attributeName="y1" values="38;35;38" dur="1.2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="60;57;60" dur="1.2s" repeatCount="indefinite"/>
                  </line>
                  <line x1={80} y1={49} x2={110} y2={49} stroke="#D97706" strokeWidth={1} opacity={0.6}>
                    <animate attributeName="y1" values="49;46;49" dur="1.2s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="49;46;49" dur="1.2s" repeatCount="indefinite"/>
                  </line>
                  <rect x={115} y={42} width={25} height={18} rx={2} fill="url(#boxGrad2)" stroke="#F59E0B" strokeWidth={1}>
                    <animate attributeName="y" values="42;39;42" dur="1.4s" repeatCount="indefinite"/>
                  </rect>
                  <line x1={127.5} y1={42} x2={127.5} y2={60} stroke="#F59E0B" strokeWidth={1} opacity={0.6}>
                    <animate attributeName="y1" values="42;39;42" dur="1.4s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="60;57;60" dur="1.4s" repeatCount="indefinite"/>
                  </line>
                  <rect x={145} y={46} width={20} height={14} rx={2} fill="#F97316" stroke="#EA580C" strokeWidth={1}>
                    <animate attributeName="y" values="46;43;46" dur="1.1s" repeatCount="indefinite"/>
                  </rect>
                  <line x1={155} y1={46} x2={155} y2={60} stroke="#EA580C" strokeWidth={1} opacity={0.6}>
                    <animate attributeName="y1" values="46;43;46" dur="1.1s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="60;57;60" dur="1.1s" repeatCount="indefinite"/>
                  </line>
                </g>

                <g opacity={0.6}>
                  <rect x={10} y={80} width={22} height={18} rx={2} fill="url(#boxGrad)" stroke="#D97706" strokeWidth={0.8}>
                    <animate attributeName="y" values="80;70;80" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite"/>
                  </rect>
                  <line x1={21} y1={80} x2={21} y2={98} stroke="#D97706" strokeWidth={0.8} opacity={0.4}>
                    <animate attributeName="y1" values="80;70;80" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="98;88;98" dur="3s" repeatCount="indefinite"/>
                  </line>
                </g>

                <g opacity={0.5}>
                  <rect x={340} y={60} width={28} height={22} rx={2} fill="url(#boxGrad2)" stroke="#F59E0B" strokeWidth={0.8}>
                    <animate attributeName="y" values="60;50;60" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3.5s" repeatCount="indefinite"/>
                  </rect>
                  <line x1={354} y1={60} x2={354} y2={82} stroke="#F59E0B" strokeWidth={0.8} opacity={0.4}>
                    <animate attributeName="y1" values="60;50;60" dur="3.5s" repeatCount="indefinite"/>
                    <animate attributeName="y2" values="82;72;82" dur="3.5s" repeatCount="indefinite"/>
                  </line>
                </g>

                <g opacity={0.4}>
                  <rect x={420} y={90} width={18} height={14} rx={2} fill="#F97316" stroke="#EA580C" strokeWidth={0.8}>
                    <animate attributeName="y" values="90;82;90" dur="2.8s" repeatCount="indefinite"/>
                  </rect>
                </g>

                <g opacity={0.3}>
                  <line x1={20} y1={100} x2={50} y2={100} stroke="#60A5FA" strokeWidth={2} strokeLinecap="round">
                    <animate attributeName="x1" values="20;-10;20" dur="0.8s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="50;20;50" dur="0.8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="0.8s" repeatCount="indefinite"/>
                  </line>
                  <line x1={15} y1={120} x2={45} y2={120} stroke="#60A5FA" strokeWidth={1.5} strokeLinecap="round">
                    <animate attributeName="x1" values="15;-15;15" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="45;15;45" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="1s" repeatCount="indefinite"/>
                  </line>
                  <line x1={25} y1={140} x2={55} y2={140} stroke="#60A5FA" strokeWidth="1" strokeLinecap="round">
                    <animate attributeName="x1" values="25;-5;25" dur="0.9s" repeatCount="indefinite"/>
                    <animate attributeName="x2" values="55;25;55" dur="0.9s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="0.9s" repeatCount="indefinite"/>
                  </line>
                </g>

                <g transform="translate(440, 50)">
                  <path d="M0,-15 C-8,-15 -12,-8 -12,-2 C-12,8 0,18 0,18 C0,18 12,8 12,-2 C12,-8 8,-15 0,-15 Z" fill="#F97316" opacity={0.7}>
                    <animate attributeName="opacity" values="0.7;0.4;0.7" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <circle cx={0} cy={-3} r={4} fill="#FFFFFF" opacity={0.9}/>
                  <animateTransform attributeName="transform" type="translate" values="440,50;440,44;440,50" dur="2s" repeatCount="indefinite"/>
                </g>

                <g transform="translate(470, 110)" opacity={0.6}>
                  <circle cx={0} cy={0} r={14} fill="#10B981" opacity={0.3}>
                    <animate attributeName="r" values="14;18;14" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={0} cy={0} r={10} fill="#10B981" opacity={0.6}/>
                  <path d="M-4,0 L-1,4 L5,-3" stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </g>

                <path d="M320,130 Q380,100 440,65" stroke="#F59E0B" strokeWidth={2} strokeDasharray="6,4" fill="none" opacity={0.4}>
                  <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.5s" repeatCount="indefinite"/>
                </path>

                <circle cx={360} cy={115} r={3} fill="#F59E0B" opacity={0.5}>
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx={400} cy={90} r={3} fill="#F59E0B" opacity={0.5}>
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" begin="0.5s" repeatCount="indefinite"/>
                </circle>

                <g>
                  <circle cx={55} cy={130} r={4} fill="#94A3B8" opacity={0}>
                    <animate attributeName="cx" values="55;30;10" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="130;120;110" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="4;8;12" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0.2;0" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={55} cy={135} r={3} fill="#94A3B8" opacity={0}>
                    <animate attributeName="cx" values="55;35;15" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="135;125;115" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="3;7;11" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.3;0.15;0" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={55} cy={125} r={3} fill="#94A3B8" opacity={0}>
                    <animate attributeName="cx" values="55;25;5" dur="1.8s" repeatCount="indefinite"/>
                    <animate attributeName="cy" values="125;115;105" dur="1.8s" repeatCount="indefinite"/>
                    <animate attributeName="r" values="3;6;10" dur="1.8s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.35;0.15;0" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                </g>

                <g transform="translate(200, 55)" opacity={0.4}>
                  <path d="M-8,-5 Q0,-12 8,-5" stroke="#60A5FA" strokeWidth={1.5} fill="none" strokeLinecap="round">
                    <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite"/>
                  </path>
                  <path d="M-14,-8 Q0,-18 14,-8" stroke="#60A5FA" strokeWidth={1.5} fill="none" strokeLinecap="round">
                    <animate attributeName="opacity" values="0;0.4;0" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M-20,-11 Q0,-24 20,-11" stroke="#60A5FA" strokeWidth={1.5} fill="none" strokeLinecap="round">
                    <animate attributeName="opacity" values="0;0.3;0" dur="2s" begin="0.6s" repeatCount="indefinite"/>
                  </path>
                </g>
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
