
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { BarChart3, TrendingUp, Package, Truck, RotateCcw, Wallet } from "lucide-react";

export function DashboardShowcase() {
  const { t } = useTranslation();

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: "1,248" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: "98.5%" },
    { icon: Truck, key: "dashboard_kpi_3", value: "342" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: "12" },
    { icon: Wallet, key: "dashboard_kpi_5", value: "45k DT" },
  ];

  return (
    <section id="dashboard" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/10 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <BarChart3 className="h-8 w-8 text-secondary" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">{t('dashboard_title')}</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Mockup Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[20px] text-center group hover:bg-white/10 transition-colors"
              >
                <kpi.icon className="h-6 w-6 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-3xl font-black mb-1">{kpi.value}</p>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">{t(kpi.key)}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative aspect-video w-full rounded-[30px] overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            <div className="absolute inset-0 p-8 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-32 h-8 bg-white/10 rounded-full" />
                  <div className="w-48 h-8 bg-white/10 rounded-full" />
                </div>
                <div className="w-8 h-8 bg-orange rounded-full" />
              </div>
              <div className="grid grid-cols-4 gap-8 h-full">
                <div className="col-span-3 bg-white/5 rounded-2xl p-6">
                  <div className="flex justify-between items-end h-full gap-4">
                    {[40, 70, 45, 90, 65, 80, 50, 85, 60, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                        className="flex-1 bg-secondary/40 rounded-t-md"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex-1 bg-white/5 rounded-2xl" />
                  <div className="flex-1 bg-white/5 rounded-2xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
