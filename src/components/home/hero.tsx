
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const h1Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
      {/* Background Illustration Container */}
      <div className={cn(
        "absolute inset-0 z-0 select-none",
        isRTL ? "scale-x-[-1]" : ""
      )}>
        <HeroIllustration />
      </div>

      {/* Legibility Gradients */}
      {/* Desktop side fade */}
      <div 
        className={cn(
          "absolute inset-0 z-[1] hidden lg:block",
          "bg-gradient-to-r from-[#EEF4FF] via-[#EEF4FF]/70 to-transparent w-[60%]"
        )}
      />
      {/* Mobile top fade */}
      <div 
        className={cn(
          "absolute inset-0 z-[1] lg:hidden",
          "bg-gradient-to-b from-[#EEF4FF] via-[#EEF4FF]/80 to-transparent"
        )}
      />

      {/* Hero Navbar */}
      <nav className="relative z-50 h-24 w-full">
        <div className="container mx-auto h-full px-4 lg:px-8 flex items-center justify-between max-w-[1200px]">
          {/* Logo */}
          <Link href="/" className={cn("relative h-[44px] w-[180px] shrink-0", isRTL && "order-last lg:order-none")}>
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
                className="text-sm font-bold text-primary transition-all hover:text-secondary tracking-tight"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-11 font-black shadow-lg shadow-orange/20 active:scale-95 transition-all">
              Démarrer
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-24 w-full bg-[#0C2A6B] z-[60] p-8 lg:hidden flex flex-col gap-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
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
            <Button className="bg-orange text-white w-full rounded-full h-14 font-black text-lg shadow-xl shadow-orange/30">
              Démarrer maintenant
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1200px] flex-grow flex items-center pt-8 pb-20 lg:py-0">
        <motion.div 
          className="max-w-[580px] w-full text-center lg:text-left rtl:lg:text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tag Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-soft text-[12px] font-black text-primary mb-8 uppercase tracking-[0.1em]"
          >
            {t('hero_pill')}
          </motion.div>

          {/* H1 Main Title */}
          <div className="mb-8 space-y-2">
            <h1 className="text-[36px] md:text-[52px] lg:text-[68px] font-black leading-[1.05] text-primary tracking-[-0.03em]">
              <motion.span variants={h1Variants} className="block overflow-hidden">
                {t('hero_title_1')}
              </motion.span>
              <motion.span variants={h1Variants} className="block text-secondary overflow-hidden">
                {t('hero_title_2')}
              </motion.span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-[20px] text-[#5B6B82] leading-[1.6] mb-12 max-w-[500px] mx-auto lg:mx-0 font-medium"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-12 h-[64px] text-lg font-black shadow-2xl shadow-orange/30 w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95">
              {t('hero_cta_primary')}
            </Button>
            <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm border-primary/20 hover:border-primary border-2 text-primary rounded-full px-10 h-[64px] text-lg font-black w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95" asChild>
              <Link href="#steps">{t('hero_cta_secondary')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer to force visibility of arches on mobile */}
      <div className="h-48 lg:hidden shrink-0" />
    </section>
  );
}
