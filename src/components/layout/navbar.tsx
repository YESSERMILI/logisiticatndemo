
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
    { href: "#dashboard-preview", label: t('nav_dashboard') },
    { href: "#contact", label: t('nav_contact') },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2 font-bold"
          >
            <Globe className="h-4 w-4" />
            {language === 'ar' ? 'FR' : 'TN'}
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/login">{t('sign_in')}</Link>
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-6" asChild>
            <Link href="/register" className="flex items-center gap-2">
              {t('create_account')}
              <ArrowRight className={cn("h-4 w-4", language === 'ar' && "rotate-180")} />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold p-2"
              >
                {link.label}
              </Link>
            ))}
            <hr />
            <div className="flex flex-col gap-3 pt-2">
              <Button onClick={toggleLanguage} variant="outline" className="justify-start">
                {language === 'ar' ? 'Passer au Français' : 'تبديل للعربية'}
              </Button>
              <Button asChild className="w-full bg-secondary">
                <Link href="/register">{t('create_account')}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
