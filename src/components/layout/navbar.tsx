"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = language === "ar";

  const navLinks = [
    { name: t("nav_steps"), href: "#steps" },
    { name: t("nav_dashboard"), href: "#dashboard" },
    { name: t("nav_commitments"), href: "#engagements" },
    { name: t("nav_contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] h-[72px] bg-white/85 backdrop-blur-md border-b border-primary/5">
      <div className="container mx-auto h-full px-4 lg:px-8 max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-[40px] w-[160px] shrink-0">
          <Image
            src="https://i.postimg.cc/P5sfzcz0/png-1.png"
            alt="Logistica Tunisie"
            fill
            className="object-contain object-left rtl:object-right"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[15px] font-bold text-[#0C2A6B] transition-colors hover:text-[#1F6FDB] tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-8 h-11 font-bold shadow-lg shadow-[#F7941D]/20 transition-all active:scale-95">
            {t("nav_start")}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-[#0C2A6B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[72px] w-full bg-[#0C2A6B] z-[90] p-8 lg:hidden flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-2xl font-black text-white hover:text-[#F7941D] transition-colors border-b border-white/10 pb-4",
                isRTL ? "text-right" : "text-left"
              )}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-[#F7941D] text-[#0C2A6B] w-full rounded-full h-14 font-bold text-lg mt-4">
            {t("nav_start")}
          </Button>
        </div>
      )}
    </nav>
  );
}