"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { 
  ShoppingCart, Box, Target, FileCheck, Truck, 
  MapPin, Wallet, RefreshCw, Headset, LayoutDashboard,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const { t, language } = useTranslation();

  const services = [
    { id: "01", icon: ShoppingCart, color: "#1F6FDB" },
    { id: "02", icon: Box, color: "#10B981" },
    { id: "03", icon: Target, color: "#F7931E" },
    { id: "04", icon: FileCheck, color: "#A855F7" },
    { id: "05", icon: Truck, color: "#14B8A6" },
    { id: "06", icon: MapPin, color: "#EC4899" },
    { id: "07", icon: Wallet, color: "#F59E0B" },
    { id: "08", icon: RefreshCw, color: "#F43F5E" },
    { id: "09", icon: Headset, color: "#6366F1" },
    { id: "10", icon: LayoutDashboard, color: "#06B6D4" },
  ];

  return (
    <section id="services" className="py-24 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 font-black text-xs uppercase tracking-widest shadow-sm">
            {t("services_sub")}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tight">
            {t("services_title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl border border-gray-100 hover:shadow-2xl transition-all group bg-white relative overflow-hidden"
            >
              <div className="space-y-6 relative z-10">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:text-white"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = service.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = `${service.color}15`}
                >
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="font-black text-navy-900 text-lg leading-tight mb-1">
                    {t(`service_${parseInt(service.id)}_t` as any)}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    {t(`service_${parseInt(service.id)}_f` as any)}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {t(`service_${parseInt(service.id)}_d` as any)}
                  </p>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} className="text-gray-300" />
              </div>
              
              <span className="absolute -bottom-4 -right-4 text-8xl font-black text-navy-900/5 select-none pointer-events-none">
                {service.id}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}