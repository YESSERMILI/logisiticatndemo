
"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";

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
      "fixed inset-x-0 top-0 z-50 transition-all duration-300 h-20 flex items-center",
      scrolled ? "bg-[#0B2A6B]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
    )}>
      <div className="max-w-[1200px] mx-auto px-6 w-full flex items-center justify-between">
        <Link href="/" className="transition-transform hover:-translate-y-1 group">
          <Logo className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/#preparation" className="text-white/80 hover:text-[#F7931E] font-bold text-sm uppercase transition-colors tracking-wider">{t('n0')}</Link>
          <Link href="/#services" className="text-white/80 hover:text-[#F7931E] font-bold text-sm uppercase transition-colors tracking-wider">{t('n1')}</Link>
          <Link href="/#coverage" className="text-white/80 hover:text-[#F7931E] font-bold text-sm uppercase transition-colors tracking-wider">{t('n6')}</Link>
          <Link href="/#faq" className="text-white/80 hover:text-[#F7931E] font-bold text-sm uppercase transition-colors tracking-wider">{t('n3')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div 
            className="flex bg-white/10 rounded-full p-1 cursor-pointer border border-white/5" 
            onClick={toggleLanguage}
          >
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold transition-all",
              language === 'ar' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60"
            )}>عربية</span>
            <span className={cn(
              "px-3 py-1 rounded-full text-[10px] font-bold transition-all",
              language === 'fr' ? "bg-[#F7931E] text-[#0B2A6B]" : "text-white/60"
            )}>FR</span>
          </div>
          
          <Link href="/login" className="text-white font-bold text-xs uppercase tracking-widest hover:text-[#F7931E] hidden sm:block transition-colors">
            {t('nav_signin')}
          </Link>
          
          <Button variant="secondary" size="sm" className="bg-[#F7931E] text-[#0B2A6B] font-bold shadow-lg hover:bg-[#E0861A] border-none rounded-sm px-6" asChild>
            <Link href="/register">{t('nav_signup')}</Link>
          </Button>

          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-[#0B2A6B] z-40 lg:hidden flex flex-col p-6 space-y-8 animate-in slide-in-from-top duration-300">
           <Link onClick={() => setMobileMenuOpen(false)} href="/#preparation" className="text-2xl font-black text-white border-b border-white/5 pb-4">{t('n0')}</Link>
           <Link onClick={() => setMobileMenuOpen(false)} href="/#services" className="text-2xl font-black text-white border-b border-white/5 pb-4">{t('n1')}</Link>
           <Link onClick={() => setMobileMenuOpen(false)} href="/#coverage" className="text-2xl font-black text-white border-b border-white/5 pb-4">{t('n6')}</Link>
           <Link onClick={() => setMobileMenuOpen(false)} href="/#faq" className="text-2xl font-black text-white border-b border-white/5 pb-4">{t('n3')}</Link>
           <div className="pt-8 flex flex-col gap-4">
              <Button size="lg" className="bg-[#F7931E] text-[#0B2A6B] font-black text-xl h-16" asChild>
                <Link onClick={() => setMobileMenuOpen(false)} href="/register">{t('nav_signup')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white font-black text-xl h-16 bg-transparent" asChild>
                <Link onClick={() => setMobileMenuOpen(false)} href="/login">{t('nav_signin')}</Link>
              </Button>
           </div>
        </div>
      )}
    </header>
  );
}
