"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Truck } from "lucide-react";
import { useRef } from "react";

export function Process() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(pathProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    { title: t("process_1"), desc: t("process_1_desc") },
    { title: t("process_2"), desc: t("process_2_desc") },
    { title: t("process_3"), desc: t("process_3_desc") },
    { title: t("process_4"), desc: t("process_4_desc") },
    { title: t("process_5"), desc: t("process_5_desc") },
    { title: t("process_6"), desc: t("process_6_desc") },
  ];

  return (
    <section id="workflow" ref={sectionRef} className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight">
            {t("process_title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            من أول خطوة، حتى آخر مرحلة — مسار واضح، ورؤية منظّمة للعمليات.
          </p>
        </div>

        <div className="relative pt-12 pb-32">
          {/* Dashed Line */}
          <div className="absolute top-[48px] left-0 right-0 h-[2px] border-t-2 border-dashed border-gray-200" />
          
          {/* Animated Truck */}
          <motion.div 
            style={{ left: x }} 
            className="absolute top-[32px] z-20 -translate-x-1/2"
          >
            <div className="bg-orange-500 text-white p-2 rounded-lg shadow-lg">
              <Truck size={20} />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center space-y-4 pt-12"
              >
                <div className="w-4 h-4 rounded-full bg-white border-4 border-navy-900 z-10" />
                <div>
                  <h3 className="font-black text-navy-900 text-base mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-tight">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 p-6 glassmorphic rounded-2xl flex items-start gap-4 max-w-3xl mx-auto">
          <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold text-xs shrink-0">i</div>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            المراحل هنا توضّح نطاق العمليات المذكور في تعريف Logistica؛ تفاصيل التنفيذ والتوقيتات تتحدّد مع المؤسسة وما هيش وعود مسبقة.
          </p>
        </div>
      </div>
    </section>
  );
}