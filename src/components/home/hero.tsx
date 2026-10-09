
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("nav_steps"), href: "#steps" },
    { name: t("nav_dashboard"), href: "#dashboard" },
    { name: t("nav_commitments"), href: "#engagements" },
    { name: t("nav_contact"), href: "/contact" },
  ];

  return (
    <section 
      className="relative w-full overflow-hidden bg-[#EEF4FF] min-h-[420px] md:min-h-[500px] lg:min-h-[600px] flex flex-col"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Illustration */}
      <div className="absolute inset-0 z-0">
        <HeroIllustration />
      </div>

      {/* Legibility Gradients */}
      <div className={cn(
        "absolute inset-0 z-[1] hidden lg:block",
        isRTL 
          ? "bg-gradient-to-l from-[#EEF4FF] via-[#EEF4FF]/90 to-transparent w-[60%] right-0" 
          : "bg-gradient-to-r from-[#EEF4FF] via-[#EEF4FF]/90 to-transparent w-[60%] left-0"
      )} />
      
      <div className="absolute inset-0 z-[1] lg:hidden bg-gradient-to-b from-[#EEF4FF] via-[#EEF4FF]/80 to-transparent h-full" />

      {/* Navbar */}
      <nav className="relative z-50 h-24 w-full">
        <div className="container mx-auto h-full px-4 lg:px-8 flex items-center justify-between max-w-[1200px]">
          <Link href="/" className="relative h-[44px] w-[180px] shrink-0">
            <Image
              src="https://i.postimg.cc/P5sfzcz0/png-1.png"
              alt="Logistica Tunisie"
              fill
              className="object-contain object-left rtl:object-right"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-primary transition-all hover:text-secondary tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-11 font-black shadow-lg shadow-orange/20 transition-all active:scale-95">
              Démarrer
            </Button>
          </div>

          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 top-24 w-full bg-primary z-[60] p-8 lg:hidden flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black text-white hover:text-orange transition-colors border-b border-white/10 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-orange text-white w-full rounded-full h-14 font-black text-lg">
              Démarrer maintenant
            </Button>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1200px] flex-grow flex items-center pt-8 pb-32 lg:py-0">
        <div className="max-w-[580px] w-full text-center lg:text-left rtl:lg:text-right">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-soft text-[13px] font-black text-primary mb-8 uppercase tracking-wider"
          >
            {t('hero_pill')}
          </motion.div>

          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-black leading-[1.1] text-primary tracking-tighter mb-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="block"
            >
              {t('hero_title_1')}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="block text-secondary"
            >
              {t('hero_title_2')}
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg lg:text-[18px] text-[#5B6B82] leading-relaxed mb-12 max-w-[500px] mx-auto lg:mx-0 font-medium"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-10 h-[56px] text-lg font-black shadow-xl shadow-orange/30 w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95">
              {t('hero_cta_primary')}
            </Button>
            <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm border-primary/20 hover:border-primary border-2 text-primary rounded-full px-10 h-[56px] text-lg font-black w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95" asChild>
              <Link href="#steps">{t('hero_cta_secondary')}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
