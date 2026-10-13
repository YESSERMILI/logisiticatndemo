"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { ShoppingCart, Box, Target, FileCheck, Truck, MapPin, Wallet, RefreshCw, Headset, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function Services() {
  const { t } = useTranslation();

  const services = [
    { id: 1, icon: ShoppingCart, color: "bg-blue-100 text-blue-600", step: "#3B82F6" },
    { id: 2, icon: Box, color: "bg-green-100 text-green-600", step: "#10B981" },
    { id: 3, icon: Target, color: "bg-orange-100 text-orange-600", step: "#F97316" },
    { id: 4, icon: FileCheck, color: "bg-purple-100 text-purple-600", step: "#A855F7" },
    { id: 5, icon: Truck, color: "bg-teal-100 text-teal-600", step: "#14B8A6" },
    { id: 6, icon: MapPin, color: "bg-pink-100 text-pink-600", step: "#EC4899" },
    { id: 7, icon: Wallet, color: "bg-amber-100 text-amber-600", step: "#F59E0B" },
    { id: 8, icon: RefreshCw, color: "bg-rose-100 text-rose-600", step: "#F43F5E" },
    { id: 9, icon: Headset, color: "bg-indigo-100 text-indigo-600", step: "#6366F1" },
    { id: 10, icon: LayoutDashboard, color: "bg-cyan-100 text-cyan-600", step: "#06B6D4" },
  ];

  return (
    <section id="solutions" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-500 font-bold text-xs uppercase tracking-widest">
            {t("services_title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight">
            كل مرحلة عندها بلاصتها.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all group cursor-default h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:bg-opacity-100", service.color)}>
                  <service.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-base md:text-lg">
                    {t(`service_${service.id}_title` as any)}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {t(`service_${service.id}_sub` as any)}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {t(`service_${service.id}_desc` as any)}
                  </p>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-black text-navy-900/20">#{service.id}</span>
                <div className="w-6 h-1 rounded-full bg-orange-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}