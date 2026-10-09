
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Zap, ShieldCheck, Globe, Monitor, Star } from "lucide-react";

export function Commitments() {
  const { t } = useTranslation();

  const items = [
    { icon: Zap, key: "speed", color: "text-orange" },
    { icon: ShieldCheck, key: "reliability", color: "text-secondary" },
    { icon: Globe, key: "proximity", color: "text-blue-600" },
    { icon: Monitor, key: "digital", color: "text-purple-600" },
    { icon: Star, key: "tunisian", color: "text-red-600" },
  ];

  return (
    <section id="engagements" className="py-24 bg-sky-tint">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">{t('commitments_title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[24px] card-shadow border border-border group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center ${item.color} mb-6 transition-transform group-hover:scale-110`}>
                  <item.icon className="h-8 w-8" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black text-primary mb-2">
                  {t(`commitments_${item.key}`)}
                </h3>
                <p className="text-sm text-primary/60">
                  {t(`commitments_${item.key}_desc`)}
                </p>
                
                {/* Visual Accent for Tunisian Pride */}
                {item.key === 'tunisian' && (
                  <div className="mt-4 flex gap-1">
                    <div className="w-1 h-1 bg-red-600 rounded-full" />
                    <div className="w-1 h-1 bg-red-600 rounded-full" />
                    <div className="w-1 h-1 bg-red-600 rounded-full" />
                  </div>
                )}
              </div>
              
              {/* Bottom Line on Hover */}
              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="absolute bottom-0 left-0 h-1 bg-orange"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
