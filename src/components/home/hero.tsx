
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isRTL = language === "ar";

  const trustPoints = [
    t("hero_trust_cod"),
    t("hero_trust_returns"),
    t("hero_trust_support"),
  ];

  return (
    <section className="lgh-hero pt-24 md:pt-32" dir={isRTL ? "rtl" : "ltr"}>
      <div className="lgh-wrap">
        
        {/* Left Column: Brand & Content */}
        <div className="lgh-brand">
          
          {/* Pills */}
          <div className={cn(
            "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-2",
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

          {/* Headline */}
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-bold text-primary max-w-[600px]",
            isRTL && "font-heading"
          )}>
            {t("hero_title_1")}
            <span className="text-orange">{t("hero_title_2")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-text max-w-[580px] leading-relaxed mt-4">
            {t("hero_subtitle")}
          </p>

          {/* Buttons */}
          <div className={cn(
            "flex flex-col sm:flex-row items-center gap-4 mt-8",
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
            "grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-primary/5 pt-8 mt-12 w-full",
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
        </div>

        {/* Right Column: Route Visual */}
        <svg className={cn("lgh-route", isRTL && "scale-x-[-1]")} viewBox="730 130 620 230" role="img" aria-label="Parcours : Commande, Préparation, Expédition, Livraison">
          <path className="lgh-line" pathLength="1" d="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"
                fill="none" stroke="#bcd3f5" strokeWidth={4} strokeLinecap="round"/>
          <circle className="lgh-ring lgh-r1" cx="800"  cy="290" r="10"/>
          <circle className="lgh-ring lgh-r2" cx="960"  cy="200" r="10"/>
          <circle className="lgh-ring lgh-r3" cx="1130" cy="280" r="10"/>
          <circle className="lgh-ring lgh-r4" cx="1300" cy="190" r="10"/>
          <circle className="lgh-node lgh-n1" cx="800"  cy="290" r="10" fill="#fff" stroke="#0b2a6b" strokeWidth={4}/>
          <circle className="lgh-node lgh-n2" cx="960"  cy="200" r="10" fill="#fff" stroke="#0b2a6b" strokeWidth={4}/>
          <circle className="lgh-node lgh-n3" cx="1130" cy="280" r="10" fill="#fff" stroke="#0b2a6b" strokeWidth={4}/>
          <circle className="lgh-node lgh-n4" cx="1300" cy="190" r="10" fill="#f7931e" stroke="#0b2a6b" strokeWidth={4}/>
          <text className={cn("lgh-lab lgh-l1", isRTL && "scale-x-[-1]")} x="800"  y="328">Commande</text>
          <text className={cn("lgh-lab lgh-l2", isRTL && "scale-x-[-1]")} x="960"  y="170">Préparation</text>
          <text className={cn("lgh-lab lgh-l3", isRTL && "scale-x-[-1]")} x="1130" y="318">Expédition</text>
          <text className={cn("lgh-lab lgh-l4", isRTL && "scale-x-[-1]")} x="1300" y="160">Livraison</text>
          <g>
            <rect x="-12" y="-12" width="24" height="24" rx="6" fill="#f7931e" stroke="#fff" strokeWidth={2.5}/>
            <path d="M-12,-2 H12 M0,-12 V-2" stroke="#fff" strokeWidth={2.5} fill="none" strokeLinecap="round"/>
            <animateMotion dur="7s" begin="3.3s" repeatCount="indefinite" calcMode="linear"
                           keyPoints="0;1;1" keyTimes="0;0.85;1"
                           path="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"/>
          </g>
        </svg>

      </div>
    </section>
  );
}
