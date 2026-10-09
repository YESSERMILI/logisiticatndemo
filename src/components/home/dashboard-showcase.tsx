
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { BarChart3, TrendingUp, Package, Truck, RotateCcw, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: 1248, suffix: "" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: 98.5, suffix: "%" },
    { icon: Truck, key: "dashboard_kpi_3", value: 342, suffix: "" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: 12, suffix: "" },
    { icon: Wallet, key: "dashboard_kpi_5", value: 45000, suffix: " DT" },
  ];

  return (
    <section id="dashboard" className="py-24 bg-primary text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Decorative assembly triangles inspired by logo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] opacity-30" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-md shadow-2xl"
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
              <KPIItem key={kpi.key} kpi={kpi} index={index} t={t} />
            ))}
          </div>

          {/* Main Visual Mockup with growth animation */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[16/9] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-white/5 backdrop-blur-xl group"
          >
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-32 h-6 bg-white/10 rounded-full animate-pulse" />
                  <div className="w-48 h-6 bg-white/10 rounded-full animate-pulse opacity-50" />
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-8 h-full">
                <div className="col-span-4 lg:col-span-3 bg-white/5 rounded-[32px] p-10 border border-white/5 relative overflow-hidden">
                  <div className="flex justify-between items-end h-full gap-4 relative z-10">
                    {[40, 70, 45, 90, 65, 80, 55, 85, 60, 95, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 bg-gradient-to-t from-secondary/40 to-secondary rounded-t-xl group-hover:from-secondary/60 group-hover:to-secondary transition-all"
                      />
                    ))}
                  </div>
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between p-10 opacity-10">
                    {[1, 2, 3, 4].map(line => <div key={line} className="w-full h-px bg-white" />)}
                  </div>
                </div>
                
                <div className="hidden lg:flex flex-col gap-6">
                  <div className="flex-1 bg-white/5 rounded-[32px] border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 border-4 border-secondary/20 border-t-secondary rounded-full mb-4" 
                    />
                    <div className="w-2/3 h-2 bg-white/10 rounded-full mb-2" />
                    <div className="w-1/2 h-2 bg-white/5 rounded-full" />
                  </div>
                  <div className="flex-1 bg-white/5 rounded-[32px] border border-white/5 flex flex-col gap-4 p-8 justify-center">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-orange" />
                        <div className="flex-1 h-2 bg-white/10 rounded-full" />
                      </div>
                    ))}
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

function KPIItem({ kpi, index, t }: any) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = kpi.value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [kpi.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] text-center group hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all duration-500 group-hover:rotate-12">
        <kpi.icon className="h-7 w-7 text-secondary transition-transform group-hover:scale-110" />
      </div>
      <p className="text-3xl font-black mb-2 tabular-nums">
        {count.toLocaleString()}{kpi.suffix}
      </p>
      <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em]">{t(kpi.key)}</p>
    </motion.div>
  );
}
