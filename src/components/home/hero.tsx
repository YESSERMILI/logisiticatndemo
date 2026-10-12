"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-blue-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-16 items-center">
          
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow"
            >
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2 rtl:ml-2 rtl:mr-0" />
              {t('hero_eyebrow')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-900 leading-[1.1] tracking-tight uppercase"
            >
              Votre logistique <br className="hidden md:block" />
              e-commerce, de la commande à la <br className="hidden md:block" />
              <span className="relative inline-block text-orange-500">
                livraison.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" fill="none" preserveAspectRatio="none" viewBox="0 0 300 12">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
            >
              {t('hero_subtitle')}
            </motion.p>

            <p className="mt-4 text-sm font-bold text-orange-600 flex items-center gap-2">
              <span className="h-4 w-4 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="h-1.5 w-1.5 bg-orange-500 rounded-full" />
              </span>
              {t('hero_purpose')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Button className="btn-primary text-lg px-10 h-16 group">
                {t('hero_cta_primary')}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary h-16 px-10 text-lg">
                {t('hero_cta_secondary')}
              </Button>
            </motion.div>

            {/* Tracking Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 max-w-md"
            >
              <div className="glass-panel p-2 rounded-2xl flex items-center gap-2 group focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
                <div className="w-10 h-10 flex items-center justify-center text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
                <input 
                  type="text" 
                  placeholder={t('hero_track_placeholder')} 
                  className="flex-1 bg-transparent border-none outline-none font-bold text-primary-900 placeholder:text-gray-400"
                />
                <Button className="bg-primary-900 text-white hover:bg-primary-700 rounded-xl h-12 px-6 font-bold">
                  {t('hero_track_btn')}
                </Button>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase text-gray-400 flex items-center gap-2 tracking-widest">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                {t('hero_trust')}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
