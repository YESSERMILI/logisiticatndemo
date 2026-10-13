"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed inset-x-0 top-0 z-50 transition-all duration-300",
      scrolled ? "bg-[#0B2A6B]/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center font-black text-[#0B2A6B] text-xl transition-transform group-hover:scale-110">
            L
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl tracking-tighter uppercase">Logistica</span>
            <span className="text-[#F7931E] font-bold text-[8px] uppercase tracking-[0.2em]">Tunisie</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-[#B9C8EC] hover:text-[#F7931E] font-bold text-sm uppercase transition-colors">{t('nav_services')}</Link>
          <Link href="#why" className="text-[#B9C8EC] hover:text-[#F7931E] font-bold text-sm uppercase transition-colors">{t('nav_why')}</Link>
          <Link href="#faq" className="text-[#B9C8EC] hover:text-[#F7931E] font-bold text-sm uppercase transition-colors">{t('nav_faq')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div 
            className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" 
            onClick={toggleLanguage}
          >
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-bold transition-all",
              language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-[#B9C8EC]"
            )}>عربية</span>
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-bold transition-all",
              language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-[#B9C8EC]"
            )}>FR</span>
          </div>
          
          <Link href="/login" className="text-white font-bold text-sm hover:text-[#F7931E] hidden sm:block">
            {t('nav_signin')}
          </Link>
          
          <Link href="/register" className="btn-bold !py-2 !px-6 !text-sm !shadow-none">
            {t('nav_signup')}
          </Link>
        </div>
      </div>
    </header>
  );
}
