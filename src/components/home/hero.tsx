
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
    hidden: { y: "100%" },
    visible: {
      y: 0,
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
      <div className="absolute inset-0 z-0">
        <HeroIllustration />
      </div>

      {/* White Legibility Fade */}
      <div 
        className={cn(
          "absolute inset-0 z-[1]",
          "lg:bg-gradient-to-r lg:from-[#EEF4FF]/95 lg:via-[#EEF4FF]/50 lg:to-transparent lg:w-full",
          "bg-gradient-to-b from-[#EEF4FF]/95 via-[#EEF4FF]/70 to-transparent w-full"
        )}
      />

      {/* Hero Navbar */}
      <nav className="relative z-50 h-20 w-full">
        <div className="container mx-auto h-full px-4 lg:px-8 flex items-center justify-between max-w-[1200px]">
          {/* Logo */}
          <Link href="/" className={cn("relative h-[44px] w-[180px]", isRTL && "order-last lg:order-none")}>
            <Image
              src="https://i.postimg.cc/P5sfzcz0/png-1.png"
              alt="Logistica Tunisie"
              fill
              className="object-contain object-left rtl:object-right"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold text-primary transition-colors hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 h-10 font-bold shadow-lg shadow-orange/20">
              Démarrer
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#0C2A6B] z-[60] p-6 lg:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-white hover:text-orange transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-orange text-white w-full rounded-full h-12 font-bold">
              Démarrer
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-[1200px] flex-grow flex items-center py-12 lg:py-0">
        <motion.div 
          className="max-w-[560px] w-full text-center lg:text-left rtl:lg:text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-soft text-[13px] font-black text-primary mb-6 uppercase tracking-wider"
          >
            {t('hero_pill')}
          </motion.div>

          {/* H1 with Mask Reveal */}
          <h1 className="text-[36px] md:text-[48px] lg:text-[64px] font-black leading-[1.1] text-primary mb-8 overflow-hidden">
            <motion.span variants={h1Variants} className="block">
              {t('hero_title_1')}
            </motion.span>
            <motion.span variants={h1Variants} className="block text-secondary">
              {t('hero_title_2')}
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-[20px] text-[#5B6B82] leading-[1.5] mb-10 max-w-[500px] mx-auto lg:mx-0 font-medium"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-12 h-16 text-lg font-black shadow-xl shadow-orange/30 w-full sm:w-auto transition-transform hover:-translate-y-1 active:scale-95">
              {t('hero_cta_primary')}
            </Button>
            <Button variant="outline" size="lg" className="border-primary border-2 text-primary rounded-full px-10 h-16 text-lg font-black w-full sm:w-auto transition-transform hover:-translate-y-1 active:scale-95" asChild>
              <Link href="#steps">{t('hero_cta_secondary')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
