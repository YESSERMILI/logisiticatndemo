
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      className="relative w-full bg-[#EEF4FF] pt-[120px] pb-24 md:pb-32 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px] relative z-10">
        <div className={cn(
          "flex flex-col lg:flex-row items-center gap-16 lg:gap-[64px]",
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
              className="inline-flex items-center px-4 py-2 rounded-full bg-orange-soft text-[13px] font-bold text-primary mb-8 uppercase tracking-wider"
            >
              <span className="relative flex h-2 w-2 mr-2 rtl:ml-2 rtl:mr-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              {t('hero_pill')}
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-[36px] md:text-[48px] lg:text-[64px] font-black leading-[1.05] text-primary tracking-tighter mb-6"
            >
              <span className="block">{t('hero_title_1')}</span>
              <span className="block text-secondary">{t('hero_title_2')}</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-[20px] text-muted-foreground leading-relaxed mb-10 max-w-[520px] mx-auto lg:mx-0 font-medium"
            >
              {t('hero_subtitle')}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className={cn(
                "flex flex-col sm:flex-row items-center gap-4 justify-center",
                isRTL ? "lg:justify-start" : "lg:justify-start"
              )}
            >
              <Button 
                size="lg" 
                className="bg-orange hover:bg-orange/90 text-primary rounded-full px-10 h-[64px] text-lg font-bold shadow-2xl shadow-orange/20 w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95 group"
                asChild
              >
                <Link href="#contact">
                  {t('hero_cta_primary')}
                  <motion.span
                    animate={{ x: isRTL ? -4 : 4 }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                    className="ml-2 rtl:mr-2 rtl:ml-0 inline-block"
                  >
                    →
                  </motion.span>
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-primary border-2 text-primary hover:bg-primary hover:text-white rounded-full px-10 h-[64px] text-lg font-bold w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-95"
                asChild
              >
                <Link href="#steps">{t('hero_cta_secondary')}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: isRTL ? -50 : 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 w-full max-w-[360px] md:max-w-[480px] lg:max-w-[560px] relative"
          >
            {/* Soft decorative shadow behind image */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-[60px] transform scale-90 translate-y-10" />
            
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/logistica-hero-right.svg" 
              alt="" 
              aria-hidden="true" 
              className={cn(
                "w-full h-auto block object-contain relative z-10",
                isRTL && "transform scale-x-[-1]"
              )}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
