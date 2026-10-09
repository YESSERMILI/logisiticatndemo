
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="steps" ref={containerRef} className="py-24 bg-white relative">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary mb-4"
          >
            {t('steps_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary/60"
          >
            {t('steps_subtitle')}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Flow Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-primary/5 -translate-x-1/2 hidden md:block" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-primary -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Parcel Head */}
          <motion.div 
            style={{ 
              top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
              y: "-50%"
            }}
            className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-10 hidden md:block"
          >
            <div className="flow-line-head" />
          </motion.div>

          <div className="space-y-24">
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
  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-8 md:gap-16 relative",
        !isEven && "md:flex-row-reverse"
      )}
    >
      {/* Circle Node */}
      <div className="absolute left-[20px] md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-primary z-20 flex items-center justify-center font-black text-primary text-sm shadow-lg">
        {step.id}
      </div>

      {/* Content Card */}
      <div className="w-full md:w-[45%] pl-16 md:pl-0">
        <div className={cn(
          "bg-white p-8 rounded-[20px] card-shadow border border-border group transition-all duration-300 hover:border-orange/30",
          !isEven ? "md:text-right" : "md:text-left"
        )}>
          <div className={cn(
            "w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors group-hover:bg-orange/10 group-hover:text-orange",
            !isEven ? "md:ml-auto" : "md:mr-auto"
          )}>
            <step.icon className="h-8 w-8" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-black text-primary mb-3">
            {t(`${step.translationKey}_title`)}
          </h3>
          <p className="text-primary/60 leading-relaxed">
            {t(`${step.translationKey}_desc`)}
          </p>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-[45%]" />
    </motion.div>
  );
}
