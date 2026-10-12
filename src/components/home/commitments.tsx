"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Zap, ShieldCheck, Globe, Monitor, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Commitments() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const items = [
    { icon: Zap, key: "speed" },
    { icon: ShieldCheck, key: "reliability" },
    { icon: Globe, key: "proximity" },
    { icon: Monitor, key: "digital" },
    { icon: Star, key: "tunisian" },
  ];

  return (
    <section id="engagements" className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            {t('commitments_eyebrow')}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase"
          >
            {t('commitments_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                "bg-white p-8 rounded-[28px] border border-primary/5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/10 flex flex-col items-center text-center",
              )}
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6">
                <item.icon className="h-8 w-8" strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 leading-tight uppercase">
                {t(`commitments_${item.key}` as any)}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {t(`commitments_${item.key}_desc` as any)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
