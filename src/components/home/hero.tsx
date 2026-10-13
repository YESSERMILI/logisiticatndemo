"use client";

import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroIllustration } from "./hero-illustration";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-[10px] md:text-xs uppercase tracking-wider">
              {t("hero_eyebrow")}
            </div>

            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-black text-navy-900 leading-[1.1]",
              language === 'ar' ? "font-arabic" : "font-heading"
            )}>
              {t("hero_title")} <br />
              <span className="text-gradient-orange">{t("hero_title_accent")}</span>
            </h1>

            <p className={cn(
              "text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed",
              language === 'ar' && "font-arabic"
            )}>
              {t("hero_sub")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-orange h-14 px-10 text-lg rounded-full shadow-orange group">
                {t("hero_cta_primary")}
                <ArrowRight className={cn("transition-transform group-hover:translate-x-1", language === 'ar' ? "mr-2 rotate-180" : "ml-2")} size={20} />
              </Button>
              <Button variant="outline" className="h-14 px-10 text-lg border-2 border-blue-600 text-blue-600 rounded-full bg-transparent hover:bg-blue-100">
                {t("hero_cta_secondary")}
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 text-xs font-bold text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                {language === 'ar' ? "توصيل لكامل الولايات" : "24 gouvernorats"}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                COD & Reversement
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                Dashboard SaaS
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
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