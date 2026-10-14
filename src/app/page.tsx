
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { 
  ArrowRight,
  CheckCircle2,
  Package,
  Truck,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import HeroLogisticsHub from "@/HeroLogisticsHub";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { BentoServices } from "@/components/home/services-bento";
import { FAQ } from "@/components/home/faq";

// scrolling ticker component
const ScrollingTicker = () => {
  const { t, language } = useTranslation();
  const items = [
    "LOGISTICA TUNISIE",
    "COD & REVERSEMENT",
    "GOUVERNORATS 24",
    "STOCKAGE SÉCURISÉ",
    "PICKING EXPRESS",
    "PACKING PRO",
    "LIVRAISON < 24H",
    language === 'ar' ? "من الكوموند لليفريزون" : "DE LA COMMANDE À LA LIVRAISON"
  ];

  return (
    <div className="bg-[#F7931E] py-4 md:py-6 overflow-hidden border-y border-black/10 -rotate-2 w-[120%] -translate-x-[10%] relative z-20 shadow-2xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item, j) => (
              <span key={j} className="flex items-center text-[#0B2A6B] font-black uppercase text-sm md:text-xl tracking-[0.2em] mx-10">
                {item}
                <span className="ms-10 text-[#0B2A6B]/40">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ProcessVisual = ({ type }: { type: 'order' | 'storage' | 'prep' | 'delivery' | 'cash' }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <svg viewBox="0 0 200 160" className="w-full h-full overflow-visible">
        <defs>
          <filter id="glowVisual" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Step 1: Order - Incoming digital notification */}
        {type === 'order' && (
          <g>
            <rect x="40" y="30" width="120" height="90" rx="10" fill="#081E4E" stroke="#1F6FDB" strokeWidth="2" />
            <rect x="50" y="40" width="100" height="60" rx="4" fill="#0B2A6B" />
            <motion.path 
              d="M60 55 H140 M60 70 H110 M60 85 H130" 
              stroke="#1F6FDB" strokeWidth="2" strokeLinecap="round" opacity="0.3"
            />
            <motion.g
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            >
              <rect x="80" y="50" width="60" height="35" rx="6" fill="#F7931E" filter="url(#glowVisual)" />
              <text x="110" y="72" textAnchor="middle" fill="#0B2A6B" fontSize="10" fontWeight="900">NEW ORDER</text>
            </motion.g>
            <motion.circle 
              cx="100" cy="110" r="4" fill="#F7931E"
              animate={{ r: [4, 8], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </g>
        )}

        {/* Step 2: Storage - Scanning a package on a rack */}
        {type === 'storage' && (
          <g>
            <path d="M40 30 L40 130 M160 30 L160 130 M40 60 H160 M40 100 H160" stroke="#1F6FDB" strokeWidth="3" strokeLinecap="round" opacity="0.2" />
            <motion.rect x="50" y="35" width="30" height="20" rx="2" fill="#0B2A6B" stroke="#1F6FDB" />
            <motion.rect x="90" y="35" width="30" height="20" rx="2" fill="#0B2A6B" stroke="#1F6FDB" />
            <motion.rect x="50" y="70" width="30" height="25" rx="2" fill="#F7931E" initial={{ x: -20, opacity: 0 }} animate={{ x: 50, opacity: 1 }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }} />
            <motion.rect x="125" y="70" width="25" height="25" rx="2" fill="#0B2A6B" stroke="#1F6FDB" />
            
            <motion.line 
              x1="30" y1="40" x2="170" y2="40" 
              stroke="#F7931E" strokeWidth="1"
              animate={{ y: [0, 80, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              filter="url(#glowVisual)"
            />
          </g>
        )}

        {/* Step 3: Prep - Packing and taping */}
        {type === 'prep' && (
          <g>
            <motion.g
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path d="M50 80 L100 105 L150 80 L100 55 Z" fill="#0B2A6B" stroke="#1F6FDB" />
              <path d="M50 80 L50 120 L100 145 L100 105 Z" fill="#081E4E" stroke="#1F6FDB" />
              <path d="M150 80 L150 120 L100 145 L100 105 Z" fill="#081E4E" stroke="#1F6FDB" />
              
              <motion.rect 
                x="60" y="70" width="80" height="4" fill="#F7931E" rx="2" transform="rotate(26, 60, 70)"
                initial={{ width: 0 }}
                animate={{ width: 110 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
              />
              <motion.circle cx="100" cy="80" r="15" fill="#F7931E" fillOpacity="0.1" stroke="#F7931E" strokeDasharray="4 2">
                <animateTransform attributeName="transform" type="rotate" from="0 100 80" to="360 100 80" dur="4s" repeatCount="indefinite" />
              </motion.circle>
            </motion.g>
          </g>
        )}

        {/* Step 4: Delivery - Live GPS Path */}
        {type === 'delivery' && (
          <g>
            <circle cx="100" cy="80" r="60" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="1" strokeDasharray="5 5" />
            <path d="M60 100 Q 100 40 140 100" stroke="#1F6FDB" strokeWidth="2" fill="none" opacity="0.4" />
            <motion.g
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ offsetPath: "path('M60 100 Q 100 40 140 100')" }}
            >
              <Truck size={24} className="text-[#F7931E]" />
              <circle r="12" fill="#F7931E" fillOpacity="0.2" />
            </motion.g>
            <MapPin x="135" y="90" className="text-[#F7931E]" size={20} />
            <motion.circle cx="145" cy="100" r="15" stroke="#F7931E" fill="none" animate={{ r: [0, 20], opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} />
          </g>
        )}

        {/* Step 5: Cash - Digital Payment Flow */}
        {type === 'cash' && (
          <g>
            <rect x="50" y="40" width="100" height="80" rx="8" fill="#0B2A6B" stroke="#1F6FDB" strokeWidth="2" />
            <motion.g
              animate={{ y: [-20, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <circle cx="100" cy="50" r="12" fill="#F7931E" />
              <text x="100" y="54" textAnchor="middle" fill="#0B2A6B" fontSize="12" fontWeight="bold">DT</text>
            </motion.g>
            <rect x="65" y="75" width="70" height="25" rx="4" fill="#1F6FDB" fillOpacity="0.2" stroke="#F7931E" strokeWidth="1" />
            <motion.path 
              d="M75 87 L85 95 L125 80" 
              fill="none" stroke="#F7931E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            />
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
            <a href="#services" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">{t('n1')}</a>
            <a href="#dashboard" className="font-bold text-sm text-white/80 hover:text-[#F7931E] transition-colors uppercase tracking-wider">Dashboard</a>
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
      <section className="relative pt-40 pb-12 min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute top-1/4 left-0 text-[12vw] font-black text-white/5 select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap uppercase">
          Logistica Tunisie
        </div>
        
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="inline-block bg-[#F7931E] text-[#0B2A6B] font-bold text-xs px-4 py-2 rounded-sm mb-6 -rotate-2 shadow-lg w-fit">
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
            <div className="flex flex-wrap gap-4 mb-8">
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
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-xs font-bold text-white/40 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                {language === 'ar' ? "توصيل لكامل الولايات" : "24 gouvernorats"}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                COD & REVERSEMENT
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F7931E]" />
                DASHBOARD SAAS
              </div>
            </div>
          </motion.div>

          <div className="relative min-w-0">
            <HeroLogisticsHub />
          </div>
        </div>
      </section>

      {/* Scrolling Ticker Section */}
      <ScrollingTicker />

      {/* Stats Bar */}
      <section className="bg-[#081E4E] py-16 border-y border-white/5 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: t('stats_l1'), value: '+12 000', icon: Package },
             { label: t('stats_l2'), value: '24', icon: MapPin },
             { label: t('stats_l3'), value: '98%', icon: ShieldCheck },
             { label: t('stats_l4'), value: '< 24h', icon: Clock }
           ].map((stat, i) => (
             <div key={i} className="text-center group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#F7931E] mx-auto mb-4 group-hover:bg-[#F7931E] group-hover:text-[#0B2A6B] transition-all duration-300">
                  <stat.icon size={24} />
                </div>
                <p className="text-3xl md:text-5xl font-black text-white mb-1 tracking-tighter tabular-nums">{stat.value}</p>
                <p className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Preparation Section (Le Processus en 5 étapes) */}
      <section id="preparation" className="py-24 bg-[#0B2A6B]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">{t('hwe')}</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 tracking-tight">{t('hwt')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { id: 'order', title: t('h1t'), desc: t('h1d') },
              { id: 'storage', title: t('h2t'), desc: t('h2d') },
              { id: 'prep', title: t('h3t'), desc: t('h3d') },
              { id: 'delivery', title: t('h4t'), desc: t('h4d') },
              { id: 'cash', title: t('h5t'), desc: t('h5d') }
            ].map((step) => (
              <Card key={step.id} className="bg-white/5 border-white/10 hover:border-[#F7931E]/50 transition-all group overflow-hidden border-none text-white">
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

      {/* Dashboard Showcase */}
      <DashboardShowcase />

      {/* Services Section */}
      <BentoServices />

      {/* FAQ Section */}
      <FAQ />

      {/* Closing CTA */}
      <section className="py-24 bg-[#081E4E] relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {language === 'ar' ? "جاهز باش تخرّج البيزنس متاعك للنيفو الجاي ؟" : "Prêt à faire passer votre business au niveau supérieur ?"}
            </h2>
            <p className="text-xl text-[#9FB2DE]">
              {language === 'ar' ? "انضم لأكثر من 500 تاجر إلكتروني يثقوا في Logistica لتسيير عملياتهم اليومية." : "Rejoignez plus de 500 e-commerçants qui font confiance à Logistica pour piloter leurs opérations quotidiennes."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-16 px-10 text-xl font-bold bg-[#F7931E] text-[#0B2A6B] rounded-sm shadow-2xl hover:bg-[#E0861A] border-none" asChild>
                <Link href="https://wa.me/21699201552">
                  Démarrer mon intégration
                  <ChevronRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#F7931E]/10 rounded-full blur-[100px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1F6FDB]/10 rounded-full blur-[100px]" />
      </section>

      <footer className="bg-[#0B2A6B] py-20 border-t border-white/5 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <Logo variant="white" className="mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left mb-16">
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#preparation">Fulfillment</Link></li>
                <li><Link href="#services">Stockage</Link></li>
                <li><Link href="#services">Dernier Kilomètre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Entreprise</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#">À propos</Link></li>
                <li><Link href="#">Contact</Link></li>
                <li><Link href="#">Carrières</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li><Link href="#">Help Center</Link></li>
                <li><Link href="#">API Docs</Link></li>
                <li><Link href="#">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#F7931E] font-black uppercase text-xs tracking-widest mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-white/60 font-bold">
                <li>+216 99 201 552</li>
                <li>contact@logistica.tn</li>
                <li>Tunis, Tunisie</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">{t('foot')}</p>
            <div className="flex gap-8">
              <Link href="https://wa.me/21699201552" className="text-white/40 hover:text-[#F7931E] transition-colors font-bold uppercase text-[10px] tracking-widest">WhatsApp</Link>
              <Link href="tel:+21699201552" className="text-white/40 hover:text-[#F7931E] transition-colors font-bold uppercase text-[10px] tracking-widest">Téléphone</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
