
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { BarChart3, TrendingUp, Package, Truck, RotateCcw, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: "1,248" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: "98.5%" },
    { icon: Truck, key: "dashboard_kpi_3", value: "342" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: "12" },
    { icon: Wallet, key: "dashboard_kpi_5", value: "45k DT" },
  ];

  return (
    <section id="dashboard" className="py-24 bg-primary text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] opacity-30" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm"
          >
            <BarChart3 className="h-10 w-10 text-secondary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {t('dashboard_title')}
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Mockup Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[24px] text-center group hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-xl"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                  <kpi.icon className="h-6 w-6 text-secondary transition-transform group-hover:scale-110" />
                </div>
                <p className="text-3xl font-black mb-2">{kpi.value}</p>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.1em]">{t(kpi.key)}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[16/9] w-full rounded-[32px] overflow-hidden border border-white/10 shadow-3xl bg-white/5 backdrop-blur-md group"
          >
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-32 h-6 bg-white/10 rounded-full animate-pulse" />
                  <div className="w-48 h-6 bg-white/10 rounded-full animate-pulse opacity-50" />
                </div>
                <div className="w-10 h-10 bg-orange rounded-full shadow-lg shadow-orange/20" />
              </div>
              <div className="grid grid-cols-4 gap-8 h-full">
                <div className="col-span-4 lg:col-span-3 bg-white/5 rounded-[24px] p-8 border border-white/5">
                  <div className="flex justify-between items-end h-full gap-4">
                    {[40, 70, 45, 90, 65, 80, 55, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.05, ease: "circOut" }}
                        className="flex-1 bg-secondary/30 rounded-t-lg group-hover:bg-secondary/50 transition-colors"
                      />
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex flex-col gap-6">
                  <div className="flex-1 bg-white/5 rounded-[24px] border border-white/5 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-[24px] border border-white/5 flex flex-col gap-3 p-6 justify-center">
                    <div className="w-full h-2 bg-white/10 rounded-full" />
                    <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                    <div className="w-4/5 h-2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
