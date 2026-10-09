
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
    <section id="steps" className="py-32 bg-white relative overflow-hidden">
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/5 text-primary border border-primary/10 text-xs font-black uppercase tracking-[0.3em] mb-8"
          >
            {t('steps_title')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight"
          >
            {t('steps_subtitle')}
          </motion.h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
            Une infrastructure robuste au service de votre croissance e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {phases.map((phase, phaseIdx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: phaseIdx * 0.1, duration: 0.7 }}
              className="relative group"
            >
              {/* Vertical connector line between phases (on mobile/tablet) */}
              <div className="h-full bg-[#F8FAFF] rounded-[48px] p-10 border border-primary/5 transition-all duration-500 hover:shadow-3xl hover:shadow-primary/5 hover:-translate-y-2 relative overflow-hidden">
                
                {/* Phase Header */}
                <div className="mb-12">
                  <span className={cn(
                    "text-[11px] font-black tracking-[0.3em] px-5 py-2 rounded-full text-white bg-gradient-to-r shadow-lg inline-block",
                    phase.color
                  )}>
                    {phase.title}
                  </span>
                </div>

                {/* Steps List */}
                <div className="space-y-12 relative">
                  {phase.steps.map((step, stepIdx) => (
                    <div key={step.id} className="relative flex items-start gap-6">
                      {/* Step Number & Connector */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-2xl bg-white border-2 border-primary/10 flex items-center justify-center text-sm font-black text-primary shadow-sm z-10 group-hover:border-orange/30 transition-colors">
                          {step.id}
                        </div>
                        {stepIdx < phase.steps.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-primary/10 to-transparent mt-2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-orange/5 rounded-lg">
                            <step.icon className="h-5 w-5 text-orange" strokeWidth={2.5} />
                          </div>
                          <h3 className="text-base font-black text-primary leading-tight uppercase tracking-tight">
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

                {/* Decorative Element */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 opacity-5 pointer-events-none transform translate-x-8 -translate-y-8",
                  "bg-gradient-to-br rounded-full",
                  phase.color
                )} />

                {/* Next Phase Indicator (Desktop only) */}
                {phaseIdx < phases.length - 1 && (
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl z-20 border border-primary/5">
                    <ArrowRight className={cn(
                      "h-6 w-6 text-orange",
                      isRTL && "rotate-180"
                    )} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="mt-24 flex flex-col items-center gap-6">
            <div className="flex items-center gap-6 text-[10px] font-black text-primary/20 uppercase tracking-[0.4em]">
                <span>Stratégie</span>
                <div className="w-16 h-px bg-primary/10" />
                <span>Exécution</span>
                <div className="w-16 h-px bg-primary/10" />
                <span>Succès</span>
            </div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" 
            />
        </div>
      </div>
    </section>
  );
}

