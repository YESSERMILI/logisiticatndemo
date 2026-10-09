
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
      setScrolled(window.scrollY > 10);
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 h-[80px] flex items-center",
        scrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-black/[0.03] shadow-[0_2px_20px_-2px_rgba(0,0,0,0.02)]" 
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-8 max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="shrink-0 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Logo className="h-9 w-auto md:h-11" />
        </Link>

        {/* Desktop Links */}
        <div className={cn(
          "hidden lg:flex items-center gap-8",
          isRTL && "flex-row-reverse"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-bold text-[#0C2A6B]/70 hover:text-[#0C2A6B] transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-7 h-11 font-black shadow-lg shadow-orange/10 transition-all active:scale-95"
            asChild
          >
            <Link href="#contact">{t("nav_start")}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#0C2A6B] rounded-xl hover:bg-black/5 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[80px] w-full bg-white/95 backdrop-blur-2xl z-[90] p-6 lg:hidden flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-black text-[#0C2A6B] hover:text-[#F7941D] transition-colors border-b border-black/[0.05] pb-4",
                isRTL ? "text-right" : "text-left"
              )}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-[#F7941D] text-[#0C2A6B] w-full rounded-full h-14 font-black text-lg mt-4 shadow-xl shadow-orange/20" 
            asChild 
            onClick={() => setIsOpen(false)}
          >
            <Link href="#contact">{t("nav_start")}</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

