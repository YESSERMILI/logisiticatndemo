"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Package, TrendingUp, RotateCcw, Wallet, Search, 
  Bell, User, LayoutDashboard, Box, Truck, Map, ArrowUpRight, CheckCircle2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState("orders");
  const isRTL = language === "ar";

  const tabs = [
    { id: "orders", label: t('dashboard_tab_orders'), icon: LayoutDashboard },
    { id: "stock", label: t('dashboard_tab_stock'), icon: Box },
    { id: "cod", label: t('dashboard_tab_cod'), icon: Wallet },
    { id: "kpi", label: t('dashboard_tab_kpi'), icon: TrendingUp },
  ];

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: 120, trend: "+5%", color: "text-blue-500" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: 98, suffix: "%", trend: "+0.5%", color: "text-emerald-500" },
    { icon: RotateCcw, key: "dashboard_kpi_3", value: 4, trend: "-2%", color: "text-red-500" },
    { icon: Wallet, key: "dashboard_kpi_4", value: "5,400", suffix: " DT", trend: "+10%", color: "text-orange-500" },
  ];

  return (
    <section id="dashboard" className="section-padding bg-primary text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-500/10 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow bg-white/10 text-orange-500 border border-white/10"
          >
            {t('dashboard_eyebrow')}
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('dashboard_title')}</h2>
          <p className="text-gray-400 text-lg md:text-xl font-medium">{t('dashboard_subtitle')}</p>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all",
                activeTab === tab.id 
                  ? "bg-white text-primary shadow-e2" 
                  : "text-white/40 hover:text-white hover:bg-white/5"
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Browser Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto rounded-[32px] overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
        >
          {/* Header Bar */}
          <div className="h-14 bg-white/5 border-b border-white/5 px-6 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
              <div className="w-3 h-3 rounded-full bg-green-500/20" />
            </div>
            <div className="flex items-center gap-4 text-white/20">
              <Search className="h-4 w-4" />
              <div className="h-8 w-48 bg-white/5 rounded-lg" />
              <Bell className="h-4 w-4" />
              <div className="h-8 w-8 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Internal View */}
          <div className="p-8 space-y-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {kpis.map((kpi, idx) => (
                  <div key={idx} className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center", kpi.color)}>
                        <kpi.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-white/5 text-emerald-400">
                        {kpi.trend}
                      </span>
                    </div>
                    <p className="text-2xl font-bold tracking-tight mb-1 font-mono">
                      {kpi.value}{kpi.suffix}
                    </p>
                    <p className="text-[10px] font-black text-white/30 uppercase tracking-widest">{t(kpi.key as any)}</p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Visual Chart Placeholder */}
            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 h-64 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 50, 95, 60, 85, 75, 90].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-secondary-500/40 rounded-t-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {['Suivi des commandes', 'Encaissements COD', 'Indicateurs de performance'].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="font-bold text-gray-400">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}