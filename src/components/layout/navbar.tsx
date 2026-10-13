"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/logo";

export function Navbar() {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link href="/" className="bg-white p-2 px-4 rounded-md shadow-lg transition-transform hover:-translate-y-1 group">
          <Logo />
        </Link>

        <nav className={cn(
          "hidden lg:flex items-center gap-8",
          mobileMenuOpen && "flex flex-col absolute top-20 left-0 right-0 bg-[#0B2A6B] p-6 border-b border-white/10 lg:static lg:bg-transparent lg:p-0 lg:border-0 lg:flex-row"
        )}>
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
          
          <Button variant="secondary" size="sm" className="bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6">
            {t('nav_signup')}
          </Button>

          <button className="lg:hidden text-white text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
