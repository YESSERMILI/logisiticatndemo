
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
    color: "from-blue-600 to-blue-400",
    steps: [
      { id: 1, icon: ShoppingCart, key: "step_1" },
      { id: 2, icon: Package, key: "step_2" },
    ]
  },
  {
    id: "phase_2",
    title: "LOGISTIQUE",
    color: "from-orange to-amber-500",
    steps: [
      { id: 3, icon: Hand, key: "step_3" },
      { id: 4, icon: Box, key: "step_4" },
    ]
  },
  {
    id: "phase_3",
    title: "LIVRAISON",
    color: "from-secondary to-blue-500",
    steps: [
      { id: 5, icon: Truck, key: "step_5" },
      { id: 6, icon: MapPin, key: "step_6" },
      { id: 7, icon: Banknote, key: "step_7" },
    ]
  },
  {
    id: "phase_4",
    title: "PILOTAGE",
    color: "from-primary to-indigo-700",
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
    <section id="steps" className="py-20 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-3"
          >
            NOTRE MÉTHODOLOGIE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight"
          >
            {t('steps_title')}
          </motion.h2>
          <p className="mt-3 text-base text-muted-foreground font-medium max-w-xl mx-auto">
            {t('steps_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIdx * 0.1 }}
              className="relative"
            >
              {/* Phase Header Row with Arrow */}
              <div className="mb-8 flex items-center justify-between lg:justify-start lg:gap-4">
                <span className={cn(
                  "px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] text-white shadow-md bg-gradient-to-r",
                  phase.color
                )}>
                  {phase.title}
                </span>
                
                {/* Horizontal Connector Arrow (Desktop Only) */}
                {phaseIdx < phases.length - 1 && (
                  <div className="hidden lg:flex items-center text-primary/10 absolute -right-8 top-[14px]">
                    <ArrowRight className={cn("h-5 w-5", isRTL && "rotate-180")} />
                  </div>
                )}
              </div>

              {/* Steps Vertical Timeline */}
              <div className="space-y-8 relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[20px] rtl:left-auto rtl:right-[20px] top-2 bottom-2 w-px bg-primary/5" />

                {phase.steps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-5 group">
                    {/* Number Badge */}
                    <div className="relative z-10 shrink-0 w-10 h-10 rounded-xl bg-white border border-primary/10 shadow-sm flex items-center justify-center text-sm font-extrabold text-primary group-hover:border-orange/50 transition-colors duration-300">
                      {step.id}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <step.icon className="h-4 w-4 text-orange" strokeWidth={2.5} />
                        <h3 className="text-[14px] font-extrabold text-primary leading-tight uppercase tracking-tight">
                          {t(`${step.key}_title` as any)}
                        </h3>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                        {t(`${step.key}_desc` as any)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Process Marker */}
        <div className="mt-16 pt-8 border-t border-primary/5 flex flex-col items-center">
          <div className="flex items-center gap-4 text-[10px] font-bold text-primary/20 uppercase tracking-[0.5em]">
            <span>Analyse</span>
            <div className="w-8 h-px bg-primary/10" />
            <span>Flux</span>
            <div className="w-8 h-px bg-primary/10" />
            <span>Livré</span>
          </div>
        </div>
      </div>
    </section>
  );
}
