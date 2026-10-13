"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Package, MapPin, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    { icon: Package, value: "+12,000", label: t("stats_deliveries") },
    { icon: MapPin, value: "24", label: t("stats_states") },
    { icon: ShieldCheck, value: "98%", label: t("stats_success") },
    { icon: Clock, value: "<24h", label: t("stats_speed") },
  ];

  return (
    <section className="bg-navy-900 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <stat.icon className="text-orange-500 mb-2" size={28} />
              <h3 className="text-3xl md:text-4xl font-black text-white font-heading tracking-tighter">
                {stat.value}
              </h3>
              <p className="text-blue-100/60 text-xs md:text-sm font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}