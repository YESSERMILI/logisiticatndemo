
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
      className="relative w-full overflow-hidden bg-sky min-h-[300px] md:min-h-[340px] lg:min-h-[420px] flex flex-col"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Illustration Container */}
      <div 
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 bg-[url('/logistica-header.svg')] bg-no-repeat bg-cover bg-[right_center]",
          isRTL && "scale-x-[-1]"
        )}
      />

      {/* White Legibility Fade */}
      <div 
        className={cn(
          "absolute inset-0 z-[1]",
          "lg:bg-gradient-to-r lg:from-[#EEF4FF]/90 lg:via-[#EEF4FF]/40 lg:to-transparent lg:w-full",
          "bg-gradient-to-b from-[#EEF4FF]/95 via-[#EEF4FF]/60 to-transparent w-full"
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
                className="text-sm font-semibold text-primary transition-colors hover:text-secondary"
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
          className="max-w-[520px] w-full text-center lg:text-left rtl:lg:text-right"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Pill */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-soft text-[13px] font-bold text-primary mb-6"
          >
            {t('hero_pill')}
          </motion.div>

          {/* H1 with Mask Reveal */}
          <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-black leading-[1.15] text-primary mb-6 overflow-hidden">
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
            className="text-base md:text-lg lg:text-[18px] text-[#5B6B82] leading-[1.5] mb-8 lg:mb-10 max-w-[480px] mx-auto lg:mx-0 font-body"
          >
            {t('hero_subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-primary rounded-full px-10 h-14 font-bold shadow-xl shadow-orange/20 w-full sm:w-auto transition-transform hover:-translate-y-0.5 active:scale-95">
              {t('hero_cta_primary')}
            </Button>
            <Button variant="outline" size="lg" className="border-primary border-2 text-primary rounded-full px-10 h-14 font-bold w-full sm:w-auto transition-transform hover:-translate-y-0.5 active:scale-95" asChild>
              <Link href="#steps">{t('hero_cta_secondary')}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Spacer for Mobile SVG Visibility */}
      <div className="lg:hidden h-[200px]" aria-hidden="true" />
    </section>
  );
}
