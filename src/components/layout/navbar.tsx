"use client";

import { useLanguage } from "@/contexts/language-context";
import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#solutions", label: t("nav_services") },
    { href: "#workflow", label: t("nav_process") },
    { href: "#why-us", label: t("nav_why_us") },
    { href: "#faq", label: t("nav_faq") },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo className="h-8 md:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-900 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center bg-gray-100 p-1 rounded-full text-[10px] font-bold"
          >
            <span className={cn("px-2 py-1 rounded-full transition-all", language === 'ar' ? "bg-white shadow-sm" : "opacity-50")}>ع</span>
            <span className={cn("px-2 py-1 rounded-full transition-all", language === 'fr' ? "bg-white shadow-sm" : "opacity-50")}>FR</span>
          </button>
          
          <Button className="btn-orange text-navy-900 h-10 px-6 rounded-full hidden sm:flex">
            {t("nav_cta")}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}