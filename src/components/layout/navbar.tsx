
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRTL = language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_services"), href: "#services" },
    { name: t("nav_how_it_works"), href: "#steps" },
    { name: t("nav_dashboard"), href: "#dashboard" },
    { name: t("nav_coverage"), href: "#coverage" },
    { name: t("nav_faq"), href: "#faq" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-primary/10 py-3" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Desktop Navigation - Align left since logo is removed */}
        <div className={cn(
          "hidden lg:flex items-center gap-8",
          isRTL && "flex-row-reverse"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-medium text-primary/70 hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Side actions */}
        <div className={cn(
          "hidden lg:flex items-center gap-6",
          isRTL && "flex-row-reverse"
        )}>
          {/* Language Switcher */}
          <div className="flex items-center gap-2 bg-blue-50 rounded-full p-1 border border-blue-100">
            {(['fr', 'ar', 'en'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-full text-[11px] font-bold uppercase transition-all",
                  language === lang ? "bg-white text-primary shadow-sm" : "text-primary/50 hover:text-primary"
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <Button className="btn-primary" asChild>
            <Link href="#contact">{t("nav_quote")}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRTL ? -100 : 100 }}
            className="fixed inset-0 top-[72px] bg-white z-[90] p-6 lg:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-semibold text-primary border-b border-primary/5 pb-4",
                  isRTL && "text-right"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="mt-auto space-y-6">
              <div className="flex justify-center gap-4">
                {(['fr', 'ar', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setIsOpen(false); }}
                    className={cn(
                      "px-6 py-2 rounded-full text-sm font-bold uppercase border-2 transition-all",
                      language === lang ? "border-orange bg-orange/10 text-primary" : "border-primary/10 text-primary/50"
                    )}
                  >
                    {lang === 'fr' ? 'Français' : lang === 'ar' ? 'العربية' : 'English'}
                  </button>
                ))}
              </div>
              <Button className="btn-primary w-full h-14 text-lg" asChild onClick={() => setIsOpen(false)}>
                <Link href="#contact">{t("nav_quote")}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
