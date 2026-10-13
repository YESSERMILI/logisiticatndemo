"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { 
  Truck, Package, ShoppingCart, Target, ClipboardList, 
  MapPin, Wallet, RefreshCw, Headset, LayoutDashboard,
  Zap, ShieldCheck, Smartphone, Star, ArrowRight, CheckCircle2,
  Warehouse, Search, Box
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  const { t, language } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("in");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: t('service_1_t'), desc: t('service_1_d'), icon: ShoppingCart, id: '01', color: 'bg-[#1F6FDB]' },
    { title: t('service_2_t'), desc: t('service_2_d'), icon: Box, id: '02', color: 'bg-[#12965a]' },
    { title: t('service_3_t'), desc: t('service_3_d'), icon: Target, id: '03', color: 'bg-[#F7931E]' },
    { title: t('service_4_t'), desc: t('service_4_d'), icon: ClipboardList, id: '04', color: 'bg-[#7A5AF8]' },
    { title: t('service_5_t'), desc: t('service_5_d'), icon: Truck, id: '05', color: 'bg-[#0EA5A5]' },
    { title: t('service_6_t'), desc: t('service_6_d'), icon: MapPin, id: '06', color: 'bg-[#E91E63]' },
    { title: t('service_7_t'), desc: t('service_7_d'), icon: Wallet, id: '07', color: 'bg-[#0B2A6B]' },
    { title: t('service_8_t'), desc: t('service_8_d'), icon: RefreshCw, id: '08', color: 'bg-[#5B45E0]' },
    { title: t('service_9_t'), desc: t('service_9_d'), icon: Headset, id: '09', color: 'bg-[#12B76A]' },
    { title: t('service_10_t'), desc: t('service_10_d'), icon: LayoutDashboard, id: '10', color: 'bg-[#F79009]' },
  ];

  const whyItems = [
    { t: t('why_1_t'), d: t('why_1_d'), icon: Zap },
    { t: t('why_2_t'), d: t('why_2_d'), icon: ShieldCheck },
    { t: t('why_3_t'), d: t('why_3_d'), icon: MapPin },
    { t: t('why_4_t'), d: t('why_4_d'), icon: Smartphone },
    { t: t('why_5_t'), d: t('why_5_d'), icon: Star },
  ];

  return (
    <main className="min-h-screen bg-[#0B2A6B]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
        <div className="absolute top-1/4 -start-4 md:start-0 text-[10rem] md:text-[14rem] font-black text-white/5 select-none pointer-events-none tracking-tighter">
          LOGISTICA
        </div>
        
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <span className="chip">{t('hero_chip')}</span>
            <h1 className="text-white mb-6">
              {t('hero_h1_start')} <br />
              <span className="text-gradient-orange">{t('hero_h1_accent')}</span>
            </h1>
            <p className="sub text-[#9FB2DE] mb-10 max-w-lg">
              {t('hero_sub')}
            </p>
            <div className="ctas">
              <Link href="#cta" className="btn-bold">
                {t('hero_cta_primary')}
                <ArrowRight className={cn("h-5 w-5", language === 'ar' && "rotate-180")} />
              </Link>
              <Link href="#services" className="btn-ghost-bold">
                {t('hero_cta_secondary')}
              </Link>
            </div>
            <p className="trust mt-8 text-[#7E93C4] flex items-center gap-4">
              {t('hero_trust')}
            </p>
          </motion.div>

          <div className="relative scene">
            <svg viewBox="0 0 520 300" className="w-full h-auto drop-shadow-2xl">
              <path className="road opacity-20" d="M0 250 H520" stroke="#fff" strokeWidth="4" strokeDasharray="12 14" fill="none" />
              
              <g className="animate-truck">
                <rect x="40" y="150" width="130" height="80" rx="4" fill="#1F6FDB"/>
                <path d="M170 170 h45 l25 30 v30 h-70 z" fill="#0B2A6B"/>
                <rect x="180" y="176" width="28" height="22" rx="2" fill="#E8F1FD"/>
                
                <g className="animate-wheel">
                  <circle cx="85" cy="238" r="17" fill="#061233"/>
                  <circle cx="85" cy="238" r="7" fill="#F7931E"/>
                </g>
                <g className="animate-wheel">
                  <circle cx="200" cy="238" r="17" fill="#061233"/>
                  <circle cx="200" cy="238" r="7" fill="#F7931E"/>
                </g>
                <text x="70" y="200" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Tajawal">Logistica</text>
              </g>

              {/* Isometric Central Box */}
              <polygon points="360,90 420,120 360,150 300,120" fill="#1F6FDB"/>
              <polygon points="300,120 360,150 360,215 300,185" fill="#071D4D"/>
              <polygon points="420,120 360,150 360,215 420,185" fill="#F7931E"/>

              {/* Animated Parcels */}
              <g className="animate-parcel" style={{ animationDelay: '2.4s' }}>
                <polygon points="345,60 365,70 345,80 325,70" fill="#F7931E"/>
              </g>
              <g className="animate-parcel" style={{ animationDelay: '2.8s' }}>
                <polygon points="375,55 395,65 375,75 355,65" fill="#1F6FDB"/>
              </g>
              <g className="animate-parcel" style={{ animationDelay: '3.2s' }}>
                <polygon points="360,35 380,45 360,55 340,45" fill="#12965a"/>
              </g>
            </svg>

            {/* Floating Status Cards */}
            <div className="floatcard fc1 bg-white p-3 rounded-lg shadow-xl absolute top-0 start-0 border-l-4 border-[#1F6FDB] text-navy-900 font-bold text-xs">
              {t('fc_received')}
            </div>
            <div className="floatcard fc2 bg-white p-3 rounded-lg shadow-xl absolute bottom-0 end-0 border-l-4 border-green-500 text-green-600 font-bold text-xs">
              {t('fc_delivered')}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-content">
          LOGISTICA ✦ من الكوموند لليفريزون ✦ COD ✦ 24 GOUVERNORAT ✦ STOCKAGE ✦ PICKING ✦ PACKING ✦ LIVRAISON ✦ LOGISTICA ✦ من الكوموند لليفريزون ✦ COD ✦ 24 GOUVERNORAT ✦ STOCKAGE ✦ PICKING ✦ PACKING ✦ LIVRAISON ✦
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="bg-[#0E3580] py-24 px-6" id="services">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal text-center mb-16">
            <span className="chip mb-4">{t('services_title')}</span>
            <h2 className="text-white text-4xl font-black">{t('services_subtitle')}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((s, i) => (
              <div key={i} className="reveal glass-card flex flex-col items-center">
                <div className={cn("w-12 h-12 rounded-sm flex items-center justify-center mb-4 text-white", s.color)}>
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="text-navy/20 font-black text-xs mb-2">STEP {s.id}</div>
                <h3 className="text-[#0B2A6B] font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-[#555] text-sm text-center leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="reveal stats grid grid-cols-2 md:grid-cols-4 gap-12 bg-white/5 border border-white/10 p-12 rounded-lg text-center">
            <div className="stat">
              <b className="text-[#F7931E] text-4xl font-black block mb-2">+12,000</b>
              <span className="text-[#9FB2DE] text-sm uppercase tracking-widest">{t('stat_deliveries')}</span>
            </div>
            <div className="stat">
              <b className="text-[#F7931E] text-4xl font-black block mb-2">24</b>
              <span className="text-[#9FB2DE] text-sm uppercase tracking-widest">{t('stat_govs')}</span>
            </div>
            <div className="stat">
              <b className="text-[#F7931E] text-4xl font-black block mb-2">98%</b>
              <span className="text-[#9FB2DE] text-sm uppercase tracking-widest">{t('stat_success')}</span>
            </div>
            <div className="stat">
              <b className="text-[#F7931E] text-4xl font-black block mb-2">&lt;24h</b>
              <span className="text-[#9FB2DE] text-sm uppercase tracking-widest">{t('stat_time')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="bg-[#0B2A6B] py-24 px-6" id="why">
        <div className="max-w-[1200px] mx-auto">
          <div className="reveal mb-16">
            <span className="text-[#F7931E] font-black uppercase text-sm tracking-widest">{t('why_eyebrow')}</span>
            <h2 className="text-white text-4xl font-black mt-2">{t('why_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {whyItems.map((item, i) => (
              <div key={i} className="reveal glass-card group">
                <div className="w-12 h-12 bg-[#E8F1FD] text-[#1F6FDB] rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#F7931E] group-hover:text-white transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-[#0B2A6B] font-bold text-xl mb-3">{item.t}</h3>
                <p className="text-[#555] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-32 px-6" id="cta">
        <div className="max-w-[900px] mx-auto">
          <div className="reveal ctabox bg-[#F7931E] p-16 rounded-sm text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <h2 className="text-[#0B2A6B] text-4xl font-black mb-8 relative z-10">{t('cta_title')}</h2>
            <Link href="#" className="btn-bold !bg-[#0B2A6B] !text-white text-xl px-12 relative z-10">
              {t('cta_button')}
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/10 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center font-bold text-[#0B2A6B]">L</div>
              <span className="text-white font-bold tracking-tighter uppercase text-xl">Logistica</span>
            </div>
            <p className="text-[#7E93C4] text-sm">{t('footer_rights')}</p>
            <div className="flex gap-4">
               <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">f</Link>
               <Link href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors">in</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <Link href="https://wa.me/21600000000" className="wa">
        <Smartphone className="h-6 w-6" />
      </Link>
    </main>
  );
}
