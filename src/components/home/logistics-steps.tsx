
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
    color: "from-blue-500 to-cyan-400",
    steps: [
      { id: 1, icon: ShoppingCart, key: "step_1" },
      { id: 2, icon: Package, key: "step_2" },
    ]
  },
  {
    id: "phase_2",
    title: "LOGISTIQUE",
    color: "from-orange to-amber-400",
    steps: [
      { id: 3, icon: Hand, key: "step_3" },
      { id: 4, icon: Box, key: "step_4" },
    ]
  },
  {
    id: "phase_3",
    title: "LIVRAISON",
    color: "from-secondary to-blue-400",
    steps: [
      { id: 5, icon: Truck, key: "step_5" },
      { id: 6, icon: MapPin, key: "step_6" },
      { id: 7, icon: Banknote, key: "step_7" },
    ]
  },
  {
    id: "phase_4",
    title: "PILOTAGE",
    color: "from-primary to-indigo-500",
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
    <section id="steps" className="py-24 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            {t('steps_title')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary mb-4 tracking-tight"
          >
            {t('steps_subtitle')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIdx * 0.1 }}
              className="relative group"
            >
              <div className="h-full bg-[#F8FAFF] rounded-[32px] p-8 border border-primary/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                {/* Phase Header */}
                <div className="flex items-center justify-between mb-8">
                  <span className={cn(
                    "text-[10px] font-black tracking-[0.3em] px-3 py-1 rounded-full text-white bg-gradient-to-r shadow-lg",
                    phase.color
                  )}>
                    {phase.title}
                  </span>
                  <div className="h-px flex-1 bg-primary/5 mx-4 hidden group-last:hidden lg:block" />
                  {phaseIdx < phases.length - 1 && (
                    <ArrowRight className={cn(
                      "h-4 w-4 text-primary/20 hidden lg:block",
                      isRTL && "rotate-180"
                    )} />
                  )}
                </div>

                {/* Steps List */}
                <div className="space-y-8">
                  {phase.steps.map((step, stepIdx) => (
                    <div key={step.id} className="relative flex items-start gap-4">
                      {/* Step Number & Connector */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-8 h-8 rounded-full bg-white border-2 border-primary/10 flex items-center justify-center text-xs font-black text-primary shadow-sm z-10">
                          {step.id}
                        </div>
                        {stepIdx < phase.steps.length - 1 && (
                          <div className="w-0.5 h-12 bg-gradient-to-b from-primary/10 to-transparent mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <step.icon className="h-4 w-4 text-orange" strokeWidth={2.5} />
                          <h3 className="text-sm font-black text-primary leading-none uppercase tracking-tight">
                            {t(`${step.key}_title` as any)}
                          </h3>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                          {t(`${step.key}_desc` as any)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Bottom Bar */}
                <div className={cn(
                  "absolute bottom-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r opacity-20 transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
                  phase.color
                )} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Progress Indicator */}
        <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-4 text-xs font-bold text-primary/30 uppercase tracking-[0.2em]">
                <span>Logistique</span>
                <div className="w-12 h-px bg-primary/10" />
                <span>Transport</span>
                <div className="w-12 h-px bg-primary/10" />
                <span>Satisfaction</span>
            </div>
        </div>
      </div>
    </section>
  );
}
