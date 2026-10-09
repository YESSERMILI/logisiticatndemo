
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

export function Navbar() {
  const { t, language } = useTranslation();
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
    { name: t("nav_steps"), href: "#steps" },
    { name: t("nav_dashboard"), href: "#dashboard" },
    { name: t("nav_commitments"), href: "#engagements" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex items-center",
        scrolled 
          ? "h-[72px] bg-white/90 backdrop-blur-xl border-b border-primary/5 shadow-xl shadow-primary/2" 
          : "h-[90px] bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8 max-w-[1300px] flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="shrink-0 transition-transform hover:scale-105 active:scale-95"
        >
          <Logo className={cn("transition-all duration-500", scrolled ? "h-10" : "h-12")} />
        </Link>

        {/* Desktop Links */}
        <div className={cn(
          "hidden lg:flex items-center gap-10",
          isRTL && "flex-row-reverse"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-black text-primary/60 hover:text-primary transition-all tracking-tight relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-8 h-12 font-black shadow-xl shadow-orange/20 transition-all hover:-translate-y-1 active:scale-95"
            asChild
          >
            <Link href="#contact">{t("nav_start")}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 text-primary rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[72px] w-full bg-white/98 backdrop-blur-2xl z-[90] p-8 lg:hidden flex flex-col gap-8 shadow-2xl"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-3xl font-black text-primary hover:text-orange transition-colors border-b border-primary/5 pb-6",
                  isRTL ? "text-right" : "text-left"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-orange text-primary w-full rounded-full h-16 font-black text-xl mt-4 shadow-2xl shadow-orange/30" 
              asChild 
              onClick={() => setIsOpen(false)}
            >
              <Link href="#contact">{t("nav_start")}</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Ensure AnimatePresence is available
import { AnimatePresence } from "framer-motion";
