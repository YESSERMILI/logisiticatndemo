
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Clock, AlertTriangle, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const benefits = [
    { 
      key: "time", 
      icon: Clock, 
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      key: "errors", 
      icon: AlertTriangle, 
      color: "bg-orange-100 text-orange" 
    },
    { 
      key: "speed", 
      icon: Zap, 
      color: "bg-green-100 text-green-600" 
    },
  ];

  return (
    <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <p className="text-orange font-bold uppercase tracking-widest text-sm mb-2">
            {t('testimonials_eyebrow')}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-primary">
            {t('testimonials_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[24px] border border-border bg-white card-shadow hover:border-orange/30 transition-all group"
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
                benefit.color
              )}>
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">
                {t(`benefit_${benefit.key}`)}
              </h3>
              <p className="text-primary/60 leading-relaxed">
                {t(`benefit_${benefit.key}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
