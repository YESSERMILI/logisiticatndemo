"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Box, Package, Truck, Banknote, RotateCcw, Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoServices() {
  const { t } = useTranslation();

  const services = [
    { title: t('service_stock'), icon: Box, size: "col-span-2 row-span-2", color: "bg-blue-50 text-blue-500", illustration: "boxes" },
    { title: t('service_prep'), icon: Package, size: "col-span-1 row-span-1", color: "bg-orange-100 text-orange-600", illustration: "tape" },
    { title: t('service_shipping'), icon: Truck, size: "col-span-1 row-span-2", color: "bg-primary-900 text-white", illustration: "map" },
    { title: t('service_cod'), icon: Banknote, size: "col-span-1 row-span-1", color: "bg-emerald-50 text-emerald-600", illustration: "coins" },
    { title: t('service_returns'), icon: RotateCcw, size: "col-span-1 row-span-1", color: "bg-red-50 text-red-600", illustration: "loop" },
    { title: t('service_whatsapp'), icon: Headphones, size: "col-span-1 row-span-1", color: "bg-gray-900 text-white", illustration: "chat" },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-24 reveal">
          <p className="eyebrow">{t('service_stock').split(' ')[0]}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 uppercase leading-tight">{t('services_title')}</h2>
          <p className="text-lg text-gray-600 font-medium">{t('services_purpose')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-8 h-[1000px] md:h-[720px]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn(
                "rounded-[40px] p-10 flex flex-col justify-between group cursor-pointer transition-all duration-500",
                s.size,
                s.color,
                "shadow-e1 hover:shadow-e3 border border-gray-100 relative overflow-hidden"
              )}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center relative z-10 transition-transform group-hover:scale-110">
                <s.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-extrabold mb-4 uppercase leading-tight">{s.title}</h3>
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">{t('service_learn_more')}</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              {/* Decorative background element per service */}
              <div className="absolute -bottom-10 -right-10 opacity-5 transition-transform group-hover:scale-125 duration-700">
                <s.icon className="w-64 h-64" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
