
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  BarChart3 
} from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, icon: ShoppingCart, translationKey: "step_1" },
  { id: 2, icon: Package, translationKey: "step_2" },
  { id: 3, icon: Hand, translationKey: "step_3" },
  { id: 4, icon: Box, translationKey: "step_4" },
  { id: 5, icon: Truck, translationKey: "step_5" },
  { id: 6, icon: MapPin, translationKey: "step_6" },
  { id: 7, icon: Banknote, translationKey: "step_7" },
  { id: 8, icon: RefreshCcw, translationKey: "step_8" },
  { id: 9, icon: Headphones, translationKey: "step_9" },
  { id: 10, icon: BarChart3, translationKey: "step_10" },
];

export function LogisticsSteps() {
  const { t, language } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="steps" ref={containerRef} className="py-32 bg-[#F8FAFF] relative overflow-hidden">
      {/* Background Decorative Number */}
      <div className="absolute top-20 left-10 text-[300px] font-black text-primary/[0.02] select-none pointer-events-none leading-none">
        10
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 text-orange border border-orange/20 text-xs font-black uppercase tracking-[0.2em] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
            {t('steps_title')}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight"
          >
            {t('steps_subtitle')}
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Vertical Connector (The "Conveyor Belt") */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-2 md:w-3 bg-primary/5 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY: pathLength, originY: 0 }}
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange via-secondary to-primary rounded-full shadow-[0_0_15px_rgba(247,148,29,0.5)]"
            />
          </div>

          <div className="space-y-24 md:space-y-40">
            {steps.map((step, index) => (
              <StepItem 
                key={step.id} 
                step={step} 
                index={index} 
                t={t} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, t, isEven }: any) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [isEven ? -50 : 50, 0]
  );

  return (
    <div 
      ref={itemRef}
      className={cn(
        "flex flex-col md:flex-row items-center gap-10 md:gap-20 relative",
        !isEven && "md:flex-row-reverse"
      )}
    >
      {/* Node / Marker */}
      <motion.div 
        style={{ scale }}
        className="absolute left-[30px] md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 bg-white border-4 border-primary rounded-2xl shadow-xl"
              whileInView={{ rotate: 45 }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 text-xl md:text-2xl font-black text-primary">
                {step.id}
            </span>
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div 
        style={{ opacity, scale, x }}
        className="w-full md:w-[45%] pl-20 md:pl-0"
      >
        <div className={cn(
          "bg-white p-8 md:p-12 rounded-[40px] shadow-3xl border border-primary/5 relative overflow-hidden group transition-all duration-500 hover:shadow-orange/10 hover:border-orange/20",
          !isEven ? "md:text-right" : "md:text-left"
        )}>
          {/* Giant Number Overlay */}
          <div className={cn(
            "absolute top-0 text-[120px] font-black text-primary/[0.03] select-none pointer-events-none transition-all duration-700 group-hover:text-orange/5",
            !isEven ? "left-4" : "right-4"
          )}>
            {step.id < 10 ? `0${step.id}` : step.id}
          </div>

          <div className={cn(
            "relative z-10 flex flex-col",
            !isEven ? "md:items-end" : "md:items-start"
          )}>
            {/* Icon Box */}
            <div className={cn(
              "w-16 h-16 md:w-20 md:h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-orange group-hover:text-white group-hover:rotate-12",
            )}>
              <step.icon className="h-8 w-8 md:h-10 md:w-10" strokeWidth={2.5} />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight font-brand group-hover:text-orange transition-colors">
              {t(`${step.translationKey}_title`)}
            </h3>
            
            <p className="text-muted-foreground text-lg leading-relaxed font-medium font-sans">
              {t(`${step.translationKey}_desc`)}
            </p>

            {/* Visual Action Indicator */}
            <div className={cn(
              "mt-8 h-1 w-12 bg-primary/10 rounded-full overflow-hidden group-hover:bg-orange/20 transition-colors",
              !isEven ? "md:ml-auto" : "md:mr-auto"
            )}>
              <motion.div 
                className="h-full bg-orange w-1/3"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for desktop layout balance */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
}

