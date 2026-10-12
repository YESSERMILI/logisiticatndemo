"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Box, Package, Truck, Banknote, RotateCcw, Headphones, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoServices() {
  const { t } = useTranslation();

  const services = [
    { title: t('service_stock'), icon: Box, size: "col-span-2 row-span-2", color: "bg-blue-50 text-secondary-500" },
    { title: t('service_prep'), icon: Package, size: "col-span-1 row-span-1", color: "bg-orange-50 text-orange-500" },
    { title: t('service_shipping'), icon: Truck, size: "col-span-1 row-span-2", color: "bg-primary text-white" },
    { title: t('service_cod'), icon: Banknote, size: "col-span-1 row-span-1", color: "bg-emerald-50 text-emerald-500" },
    { title: t('service_returns'), icon: RotateCcw, size: "col-span-1 row-span-1", color: "bg-red-50 text-red-500" },
    { title: t('service_whatsapp'), icon: Headphones, size: "col-span-1 row-span-1", color: "bg-gray-900 text-white" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow">NOTRE OFFRE</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('services_title')}</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6 h-[800px] md:h-[600px]">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className={cn(
                "rounded-3xl p-8 flex flex-col justify-between group cursor-pointer transition-all",
                s.size,
                s.color,
                "shadow-e1 hover:shadow-e2 border border-gray-100"
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs font-bold uppercase tracking-wider">{t('service_learn_more')}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
