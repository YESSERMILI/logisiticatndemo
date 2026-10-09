
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Zap, ShieldCheck, Globe, Monitor, Star } from "lucide-react";

export function Commitments() {
  const { t } = useTranslation();

  const items = [
    { icon: Zap, key: "speed", color: "text-orange", bg: "bg-orange/5" },
    { icon: ShieldCheck, key: "reliability", color: "text-secondary", bg: "bg-secondary/5" },
    { icon: Globe, key: "proximity", color: "text-blue-600", bg: "bg-blue-600/5" },
    { icon: Monitor, key: "digital", color: "text-purple-600", bg: "bg-purple-600/5" },
    { icon: Star, key: "tunisian", color: "text-red-600", bg: "bg-red-600/5" },
  ];

  return (
    <section id="engagements" className="py-32 bg-[#F8FAFF] relative overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-[100px] -mr-48 -mb-48" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4"
          >
            NOTRE VALEUR AJOUTÉE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            {t('commitments_title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="bg-white p-10 rounded-[32px] shadow-3xl border border-primary/5 group relative overflow-hidden transition-all duration-500 hover:border-primary/20"
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 ${item.bg} rounded-[24px] flex items-center justify-center ${item.color} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="h-10 w-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-4">
                  {t(`commitments_${item.key}`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {t(`commitments_${item.key}_desc`)}
                </p>
                
                {item.key === 'tunisian' && (
                  <div className="mt-8 flex gap-2">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-red-600 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-red-600 rounded-full" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-red-600 rounded-full" />
                  </div>
                )}
              </div>
              
              {/* Bottom accent line */}
              <motion.div 
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
                className={`absolute bottom-0 left-0 h-2 ${item.key === 'speed' ? 'bg-orange' : 'bg-secondary'}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
