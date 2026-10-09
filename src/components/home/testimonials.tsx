
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Clock, AlertTriangle, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const benefits = [
    { 
      key: "time", 
      icon: Clock, 
      color: "bg-blue-50 text-secondary border-blue-100" 
    },
    { 
      key: "errors", 
      icon: AlertTriangle, 
      color: "bg-orange-soft text-orange border-orange-200" 
    },
    { 
      key: "speed", 
      icon: Zap, 
      color: "bg-emerald-50 text-emerald-600 border-emerald-100" 
    },
  ];

  return (
    <section className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            {t('testimonials_eyebrow')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary"
          >
            {t('testimonials_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={cn(
                "relative p-10 rounded-[32px] border bg-white transition-all duration-500 group overflow-hidden",
                benefit.color
              )}
            >
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-current opacity-[0.03] -mr-16 -mt-16 rounded-full" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white shadow-sm border border-current/10 transition-transform group-hover:scale-110 duration-300">
                  <benefit.icon className="h-8 w-8" />
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-black text-primary">
                    {t(`benefit_${benefit.key}`)}
                  </h3>
                  <CheckCircle2 className="h-5 w-5 text-current opacity-60" />
                </div>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  {t(`benefit_${benefit.key}_desc`)}
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/40">
                  <span className="h-[2px] w-8 bg-current opacity-20" />
                  Résultat Attendu
                </div>
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
