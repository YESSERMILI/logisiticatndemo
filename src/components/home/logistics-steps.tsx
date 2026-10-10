
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { 
  ShoppingCart, 
  Package, 
  Hand, 
  Box, 
  Truck, 
  MapPin, 
  Banknote, 
  RefreshCcw, 
  Headphones, 
  BarChart3,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
  {
    id: "phase_1",
    title: "INTÉGRATION",
    color: "bg-blue-600",
    steps: [
      { id: 1, icon: ShoppingCart, key: "step_1" },
      { id: 2, icon: Package, key: "step_2" },
    ]
  },
  {
    id: "phase_2",
    title: "LOGISTIQUE",
    color: "bg-orange",
    steps: [
      { id: 3, icon: Hand, key: "step_3" },
      { id: 4, icon: Box, key: "step_4" },
    ]
  },
  {
    id: "phase_3",
    title: "LIVRAISON",
    color: "bg-secondary",
    steps: [
      { id: 5, icon: Truck, key: "step_5" },
      { id: 6, icon: MapPin, key: "step_6" },
      { id: 7, icon: Banknote, key: "step_7" },
    ]
  },
  {
    id: "phase_4",
    title: "PILOTAGE",
    color: "bg-primary",
    steps: [
      { id: 8, icon: RefreshCcw, key: "step_8" },
      { id: 9, icon: Headphones, key: "step_9" },
      { id: 10, icon: BarChart3, key: "step_10" },
    ]
  }
];

export function LogisticsSteps() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <section id="etapes" className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-[0.3em] text-[11px] mb-3"
          >
            NOTRE MÉTHODOLOGIE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-primary tracking-tight"
          >
            {t('steps_title')}
          </motion.h2>
          <p className="mt-4 text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            {t('steps_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIdx * 0.1 }}
              className="relative"
            >
              <div className="mb-10 relative flex items-center lg:justify-start">
                <span className={cn(
                  "px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] text-white shadow-sm relative z-10",
                  phase.color
                )}>
                  {phase.title}
                </span>
                
                {phaseIdx < phases.length - 1 && (
                  <div className={cn(
                    "hidden lg:flex items-center text-primary/10 absolute top-1/2 -translate-y-1/2",
                    isRTL ? "-left-10" : "-right-10"
                  )}>
                    <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
                  </div>
                )}
              </div>

              <div className="space-y-8 relative">
                {/* Connecting line */}
                <div className={cn(
                  "absolute top-2 bottom-2 w-px bg-primary/5",
                  isRTL ? "right-[20px]" : "left-[20px]"
                )} />

                {phase.steps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-6 group">
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-xl bg-white border border-primary/10 shadow-sm flex items-center justify-center text-sm font-black text-primary group-hover:border-orange/50 transition-colors duration-300">
                      {step.id}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2.5">
                        <step.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                        <h3 className="text-[15px] font-bold text-primary leading-tight uppercase tracking-tight">
                          {t(`${step.key}_title` as any)}
                        </h3>
                      </div>
                      <p className="text-[14px] text-slate-text leading-relaxed font-medium">
                        {t(`${step.key}_desc` as any)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
