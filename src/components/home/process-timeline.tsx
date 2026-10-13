"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Truck } from "lucide-react";

export function ProcessTimeline() {
  const { t, language } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(smoothProgress, [0.1, 0.9], ["0%", "100%"]);
  
  const steps = [
    { key: "process_1", icon: "🔗" },
    { key: "process_2", icon: "📦" },
    { key: "process_3", icon: "🏭" },
    { key: "process_4", icon: "🛠️" },
    { key: "process_5", icon: "🏡" },
    { key: "process_6", icon: "💰" }
  ];

  return (
    <section id="process" ref={containerRef} className="py-24 bg-gray-50 overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
            {t("process_title")}
          </h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full" />
        </div>

        <div className="relative pt-12 pb-32">
          {/* Dashed Road */}
          <div className="absolute top-[60px] left-0 right-0 h-[2px] border-t-2 border-dashed border-gray-300" />
          
          {/* Traveling Truck */}
          <motion.div 
            style={{ [language === 'ar' ? 'right' : 'left']: x }} 
            className="absolute top-[32px] z-20 -translate-x-1/2"
          >
            <div className="bg-orange-500 text-white p-2.5 rounded-lg shadow-xl">
              <Truck size={24} className={language === 'ar' ? 'scale-x-[-1]' : ''} />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center space-y-6 pt-16 group">
                {/* Node */}
                <div className="w-5 h-5 rounded-full bg-white border-4 border-navy-900 z-10 transition-transform group-hover:scale-125" />
                
                <div className="space-y-2">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="font-black text-navy-900 text-lg">{t(step.key as any)}</h3>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest opacity-60">Step 0{idx + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 p-6 glassmorphic rounded-2xl flex items-start gap-4 max-w-3xl mx-auto border-l-4 border-navy-900 shadow-md">
          <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs shrink-0 italic">i</div>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            {language === 'ar' 
              ? "المراحل هنا توضّح نطاق العمليات المذكور في تعريف Logistica؛ تفاصيل التنفيذ والتوقيتات تتحدّد مع المؤسسة وما هيش وعود مسبقة."
              : "Ces étapes illustrent le périmètre opérationnel de Logistica ; les détails d'exécution et les délais sont définis avec l'entreprise et ne constituent pas des promesses préalables."}
          </p>
        </div>
      </div>
    </section>
  );
}