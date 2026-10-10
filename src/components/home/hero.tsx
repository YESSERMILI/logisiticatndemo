"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const trustPoints = [
    t("hero_trust_cod"),
    t("hero_trust_returns"),
    t("hero_trust_support"),
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-16">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -mr-64 -mt-64 pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#0B2A6B 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} 
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8",
              isRTL && "flex-row-reverse"
            )}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              <span className="text-[12px] font-bold text-primary tracking-label uppercase">
                {t("hero_pill")}
              </span>
            </div>

            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold mb-6 text-primary",
              isRTL && "font-heading"
            )}>
              {t("hero_title_1")}
              <span className="text-orange">{t("hero_title_2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-text mb-10 max-w-[580px] leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className={cn(
              "flex flex-col sm:flex-row items-center gap-4 mb-10",
              isRTL && "sm:flex-row-reverse"
            )}>
              <Button className="btn-primary w-full sm:w-auto h-14 px-10 text-lg" asChild>
                <Link href="#contact" className="flex items-center gap-2">
                  {t("hero_cta_primary")}
                  <ArrowRight size={20} className={cn(isRTL && "rotate-180")} />
                </Link>
              </Button>
              <Button className="btn-secondary w-full sm:w-auto h-14 px-10 text-lg" asChild>
                <Link href="#steps">{t("hero_cta_secondary")}</Link>
              </Button>
            </div>

            {/* Trust Points */}
            <div className={cn(
              "grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-primary/5 pt-8",
              isRTL && "text-right"
            )}>
              {trustPoints.map((point, i) => (
                <div key={i} className={cn(
                  "flex items-center gap-2 text-sm font-semibold text-primary/70",
                  isRTL && "flex-row-reverse"
                )}>
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual (Animated Morphing Logo placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* The existing morphing animation component or SVG placeholder */}
            <div className="relative aspect-square w-full max-w-[540px] mx-auto flex items-center justify-center">
               {/* 
                  Note: Reuse the HeroIllustration logic but inside this clean container.
                  I will simplify the SVG for this layout.
               */}
               <HeroVisualAnimation isRTL={isRTL} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slim Tagline Strip */}
      <div className="mt-16 bg-blue-50 py-4 border-y border-blue-100">
        <div className="container flex justify-center">
          <p className="text-sm font-bold tracking-[0.2em] text-primary/40 uppercase text-center">
            Logistica Tunisie — {t("footer_tagline")}
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroVisualAnimation({ isRTL }: { isRTL: boolean }) {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={cn("w-full h-full drop-shadow-2xl", isRTL && "scale-x-[-1]")}
    >
      {/* Route Line */}
      <path 
        d="M 50 350 C 150 350, 150 150, 250 150 C 350 150, 350 350, 450 350" 
        fill="none" 
        stroke="#1f6fdb" 
        strokeWidth="3" 
        strokeDasharray="8 8"
        className="opacity-20"
      />
      
      {/* Animated Stops */}
      {[
        { x: 50, y: 350, label: "Commande" },
        { x: 180, y: 220, label: "Préparation" },
        { x: 320, y: 220, label: "Expédition" },
        { x: 450, y: 350, label: "Livraison" }
      ].map((stop, i) => (
        <g key={i}>
          <circle cx={stop.x} cy={stop.y} r="8" fill="white" stroke="#0B2A6B" strokeWidth="3" />
          <text 
            x={stop.x} y={stop.y + 30} 
            textAnchor="middle" 
            className={cn("fill-primary font-bold text-[14px]", isRTL && "scale-x-[-1]")}
          >
            {stop.label}
          </text>
        </g>
      ))}

      {/* Morphing Element (Simplified representation) */}
      <motion.g
        animate={{
          x: [0, 130, 270, 400],
          y: [0, -130, -130, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <rect x="35" y="335" width="30" height="30" rx="6" fill="#F7931E" className="shadow-lg" />
      </motion.g>
    </svg>
  );
}
