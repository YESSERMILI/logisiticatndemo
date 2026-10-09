"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      className="relative w-full bg-[#EEF4FF] pt-[120px] pb-12 md:py-24 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-12 lg:gap-[48px]",
          isRTL ? "lg:flex-row-reverse text-right" : "text-left"
        )}>
          {/* Left Column: Content */}
          <motion.div 
            className="flex-1 w-full text-center lg:text-left rtl:lg:text-right"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-3.5 py-2 rounded-full bg-[#FFE6D2] text-[13px] font-bold text-[#0C2A6B] mb-6 uppercase tracking-wider"
            >
              {t('hero_pill')}
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-[32px] md:text-[40px] lg:text-[56px] font-black leading-[1.1] text-[#0C2A6B] tracking-tighter mb-4"
            >
              <span className="block">{t('hero_title_1')}</span>
              <span className="block text-[#1F6FDB]">{t('hero_title_2')}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-[18px] text-[#5B6B82] leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0 font-medium"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className={cn(
                "flex flex-col sm:flex-row items-center gap-3 justify-center",
                isRTL ? "lg:justify-end" : "lg:justify-start"
              )}
            >
              <Button 
                size="lg" 
                className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-8 h-[56px] text-lg font-bold shadow-xl shadow-[#F7941D]/20 w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95"
              >
                {t('hero_cta_primary')}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-[#0C2A6B] border-2 text-[#0C2A6B] rounded-full px-8 h-[56px] text-lg font-bold w-full sm:w-auto transition-all hover:-translate-y-0.5 active:scale-95"
                asChild
              >
                <Link href="#steps">{t('hero_cta_secondary')}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration */}
          <div className="flex-1 w-full max-w-[360px] md:max-w-[400px] lg:max-w-[560px]">
            <img 
              src="/logistica-hero-right.svg" 
              alt="" 
              aria-hidden="true" 
              className={cn(
                "w-full h-auto block object-contain",
                isRTL && "transform scale-x-[-1]"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}