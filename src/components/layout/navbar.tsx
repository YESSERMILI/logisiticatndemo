
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
    { name: t("nav_faq"), href: "#faq" },
    { name: t("nav_contact"), href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-[100] h-[72px] transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-md border-b border-primary/5 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto h-full px-4 lg:px-8 max-w-[1200px] flex items-center justify-between">
        {/* Logo - Only visible when scrolled or on mobile to avoid clashing with Hero SVG logo */}
        <Link 
          href="/" 
          className={cn(
            "shrink-0 transition-all duration-300",
            !scrolled && !isOpen ? "opacity-0 -translate-x-4 pointer-events-none" : "opacity-100 translate-x-0"
          )}
        >
          <Logo />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[15px] font-bold transition-colors tracking-tight",
                scrolled ? "text-primary hover:text-secondary" : "text-primary hover:text-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            className="bg-orange hover:bg-orange/90 text-primary rounded-full px-8 h-11 font-black shadow-lg shadow-orange/20 transition-all active:scale-95"
            asChild
          >
            <Link href="#contact">{t("nav_start")}</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] w-full bg-primary z-[90] p-8 lg:hidden flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-black text-white hover:text-orange transition-colors border-b border-white/10 pb-4",
                isRTL ? "text-right" : "text-left"
              )}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-orange text-primary w-full rounded-full h-14 font-black text-lg mt-4" asChild onClick={() => setIsOpen(false)}>
            <Link href="#contact">{t("nav_start")}</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
