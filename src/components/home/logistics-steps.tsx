"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { useRef } from "react";
import { 
  ShoppingCart, Package, CheckCircle, Box, Truck, MapPin, 
  Banknote, RefreshCcw, Headphones, LayoutDashboard,
  ArrowRight 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LogisticsSteps() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";
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
    { id: 1, icon: ShoppingCart, key: "step_1", phase: "integration" },
    { id: 2, icon: Box, key: "step_2", phase: "integration" },
    { id: 3, icon: Package, key: "step_3", phase: "logistics" },
    { id: 4, icon: CheckCircle, key: "step_4", phase: "logistics" },
    { id: 5, icon: Truck, key: "step_5", phase: "logistics" },
    { id: 6, icon: MapPin, key: "step_6", phase: "logistics" },
    { id: 7, icon: Banknote, key: "step_7", phase: "delivery" },
    { id: 8, icon: RefreshCcw, key: "step_8", phase: "delivery" },
    { id: 9, icon: Headphones, key: "step_9", phase: "support" },
    { id: 10, icon: LayoutDashboard, key: "step_10", phase: "support" },
  ];

  return (
    <section id="etapes" className="section-padding bg-white" dir={isRTL ? "rtl" : "ltr"} ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <p className="eyebrow">{t('steps_eyebrow')}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('steps_title')}</h2>
          <p className="text-lg text-gray-600 font-medium">{t('steps_subtitle')}</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Progress Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-orange-500 origin-top"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-20">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative flex items-center gap-8 md:gap-24",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content */}
                <div className="flex-1 text-left md:text-right">
                  <div className={cn(
                    "flex flex-col",
                    i % 2 === 0 ? "md:items-end" : "md:items-start"
                  )}>
                    <span className="text-orange-500 text-sm font-black mb-2 uppercase tracking-widest">
                      {t(`phase_${step.phase}` as any)}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                      {t(`${step.key}_title` as any)}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {t(`${step.key}_desc` as any)}
                    </p>
                  </div>
                </div>

                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center text-primary group-hover:border-orange-500 transition-colors shadow-e1">
                    <step.icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                </div>

                {/* Empty spacer for grid alignment */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <Button className="btn-primary">
            Commencer mon intégration
            <ArrowRight className="h-5 w-5 ml-2 rtl:mr-2 rtl:ml-0" />
          </Button>
        </div>
      </div>
    </section>
  );
}
