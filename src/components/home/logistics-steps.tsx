"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { useRef } from "react";
import { 
  ShoppingCart, Box, Package, Truck, MapPin, 
  Banknote, RefreshCcw, Headphones, LayoutDashboard,
  ArrowRight, Store
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LogisticsSteps() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const steps = [
    { id: 1, icon: Store, key: "step_1", phase: "integration", color: "text-blue-500" },
    { id: 2, icon: Box, key: "step_2", phase: "integration", color: "text-blue-500" },
    { id: 3, icon: ShoppingCart, key: "step_3", phase: "logistics", color: "text-primary-700" },
    { id: 4, icon: Package, key: "step_4", phase: "logistics", color: "text-primary-700" },
    { id: 5, icon: Truck, key: "step_5", phase: "logistics", color: "text-primary-700" },
    { id: 6, icon: MapPin, key: "step_6", phase: "logistics", color: "text-primary-700" },
    { id: 7, icon: Banknote, key: "step_7", phase: "delivery", color: "text-orange-500" },
    { id: 8, icon: RefreshCcw, key: "step_8", phase: "delivery", color: "text-orange-500" },
    { id: 9, icon: Headphones, key: "step_9", phase: "support", color: "text-success" },
    { id: 10, icon: LayoutDashboard, key: "step_10", phase: "support", color: "text-success" },
  ];

  return (
    <section id="etapes" className="section-padding bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24 reveal">
          <p className="eyebrow">{t('steps_eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 uppercase">{t('steps_title')}</h2>
          <p className="text-lg text-gray-600 font-medium">{t('steps_purpose')}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-orange-500 origin-top"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-32">
            {steps.map((step, i) => (
              <StepItem 
                key={step.id} 
                step={step} 
                index={i} 
                t={t} 
              />
            ))}
          </div>
        </div>

        <div className="mt-32 text-center reveal">
          <Button className="btn-primary">
            Démarrer mon intégration
            <ArrowRight className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
          </Button>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, t }: any) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative flex items-center gap-8 md:gap-24",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      {/* Content */}
      <div className={cn(
        "flex-1 text-left",
        isEven ? "md:text-right" : "md:text-left"
      )}>
        <div className={cn(
          "flex flex-col",
          isEven ? "md:items-end" : "md:items-start"
        )}>
          <span className={cn("text-xs font-black mb-3 uppercase tracking-[0.2em]", step.color)}>
            {t(`phase_${step.phase}` as any)}
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-900 mb-4 uppercase">
            <span className="text-orange-500 mr-2">{step.id}.</span>
            {t(`${step.key}_title` as any)}
          </h3>
          <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
            {t(`${step.key}_desc` as any)}
          </p>
        </div>
      </div>

      {/* Node Circle */}
      <div className="relative z-10 shrink-0">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-white border-2 border-gray-100 flex items-center justify-center text-primary-900 shadow-e2 group-hover:border-orange-500 transition-colors">
          <step.icon className={cn("h-5 w-5 md:h-7 md:w-7", step.color)} strokeWidth={1.5} />
        </div>
        {/* Pulsing ring for active-look node */}
        <div className="absolute inset-0 ring-pulse rounded-2xl bg-orange-500/20" />
      </div>

      {/* Empty spacer for grid alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}
