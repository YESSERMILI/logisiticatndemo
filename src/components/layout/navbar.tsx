"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#solutions", label: t('nav_solutions') },
    { href: "#workflow", label: t('nav_workflow') },
    { href: "#dashboard", label: t('nav_dashboard') },
    { href: "#contact", label: t('nav_contact') },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "h-20 bg-white/90 backdrop-blur-xl shadow-e1 border-b border-surface-container-high" : "h-24 bg-transparent"
      )}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[10px] font-heading font-black text-primary uppercase tracking-[0.2em] hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-heading font-black text-[10px] tracking-widest uppercase hover:text-secondary transition-colors"
          >
            <Globe className="h-4 w-4 text-secondary" />
            {language === 'ar' ? 'FR' : 'TN'}
          </button>
          
          <Link href="/login" className="text-[10px] font-heading font-black text-primary uppercase tracking-[0.2em] hover:text-secondary transition-colors">
            {t('sign_in')}
          </Link>

          <Button className="bg-primary hover:bg-secondary text-white rounded-xl px-8 h-12 font-heading font-black uppercase text-[10px] tracking-[0.2em] transition-all group" asChild>
            <Link href="/register">
              {t('create_account')}
              <ArrowRight className={cn("ml-2 h-4 w-4 transition-transform group-hover:translate-x-1", language === 'ar' && "rotate-180")} />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-e3 overflow-hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-heading font-black text-primary uppercase tracking-tight py-2 border-b border-surface-container"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-4 pt-4">
                <Button onClick={toggleLanguage} variant="outline" className="h-16 rounded-2xl justify-between px-8 font-heading font-black uppercase text-xs">
                  {language === 'ar' ? 'Passer au Français' : 'تبديل للعربية'}
                  <Globe className="h-5 w-5" />
                </Button>
                <Button asChild className="h-16 rounded-2xl bg-secondary text-white font-heading font-black uppercase text-xs">
                  <Link href="/register">{t('create_account')}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
