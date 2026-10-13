"use client";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10">
            <motion.div 
              className="absolute inset-0 bg-blue-600 rounded-lg rotate-12 group-hover:rotate-0 transition-transform" 
              animate={{ rotate: 12 }}
            />
            <div className="absolute inset-0 bg-navy-900 rounded-lg flex items-center justify-center font-black text-white text-xl">L</div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-navy-900 text-xl tracking-tighter uppercase">Logistica</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tunisie</span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "#services", label: t("nav_services") },
            { href: "#process", label: t("nav_process") },
            { href: "#why-us", label: t("nav_why") },
            { href: "#faq", label: t("nav_faq") },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-black text-navy-900/60 hover:text-blue-600 uppercase tracking-wider transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-gray-100 p-1 rounded-full text-[11px] font-black shadow-inner"
          >
            <span className={cn(
              "px-3 py-1.5 rounded-full transition-all",
              language === 'ar' ? "bg-white text-navy-900 shadow-sm" : "text-gray-400"
            )}>عربية</span>
            <span className={cn(
              "px-3 py-1.5 rounded-full transition-all",
              language === 'fr' ? "bg-white text-navy-900 shadow-sm" : "text-gray-400"
            )}>FR</span>
          </button>
          
          <Button className="btn-orange text-navy-900 h-11 px-8 hidden sm:flex">
            {t("nav_cta")}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}