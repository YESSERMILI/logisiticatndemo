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
    <section id="steps" ref={containerRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Flow Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <path d="M-100,200 Q200,100 500,400 T1200,200" fill="none" stroke="currentColor" strokeWidth="2" className="text-secondary animate-flow" />
          <path d="M-200,600 Q400,500 800,800 T1500,600" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange animate-flow" />
        </svg>
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            NOTRE PROCESSUS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            {t('steps_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-medium"
          >
            {t('steps_subtitle')}
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main vertical line for desktop */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-primary/5 -translate-x-1/2 hidden md:block" />
          
          {/* Animated Scroll Line */}
          <motion.div 
            style={{ scaleY: smoothProgress, originY: 0 }}
            className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-secondary -translate-x-1/2 origin-top hidden md:block"
          />

          {/* Floating parcel head following the scroll */}
          <motion.div 
            style={{ 
              top: useTransform(smoothProgress, [0, 1], ["0%", "100%"]),
              y: "-50%"
            }}
            className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-30 hidden md:block"
          >
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-12 h-10 bg-orange rounded-lg shadow-xl shadow-orange/30 flex items-center justify-center border-2 border-white"
            >
              <div className="w-full h-2 bg-primary/20" />
            </motion.div>
          </motion.div>

          <div className="space-y-32">
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={cn(
        "flex flex-col md:flex-row items-center gap-12 md:gap-24 relative",
        !isEven && "md:flex-row-reverse"
      )}
    >
      {/* Circle Node with Number */}
      <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-4 border-primary z-20 flex items-center justify-center font-black text-primary text-lg shadow-2xl transition-transform hover:scale-110 duration-300">
        {step.id}
      </div>

      {/* Content Card */}
      <div className="w-full md:w-[45%] pl-16 md:pl-0">
        <motion.div 
          whileHover={{ y: -8 }}
          className={cn(
            "bg-white p-10 rounded-[32px] shadow-3xl border border-primary/5 group transition-all duration-500 hover:border-secondary/20 relative overflow-hidden",
            !isEven ? "md:text-right" : "md:text-left"
          )}
        >
          {/* Step icon with animated background */}
          <div className={cn(
            "w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mb-8 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:rotate-6",
            !isEven ? "md:ml-auto" : "md:mr-auto"
          )}>
            <step.icon className="h-10 w-10" strokeWidth={2} />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight">
            {t(`${step.translationKey}_title`)}
          </h3>
          <p className="text-muted-foreground text-[17px] leading-relaxed font-medium">
            {t(`${step.translationKey}_desc`)}
          </p>
          
          {/* Background decoration in card */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mb-12 transition-transform duration-700 group-hover:scale-150" />
        </motion.div>
      </div>

      {/* Spacer for desktop layout balance */}
      <div className="hidden md:block md:w-[45%]" />
    </motion.div>
  );
}