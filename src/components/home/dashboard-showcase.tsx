
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  Truck, 
  RotateCcw, 
  Wallet, 
  Search, 
  Bell, 
  User,
  LayoutDashboard,
  Box,
  Map,
  Settings,
  MoreVertical,
  ArrowUpRight
} from "lucide-react";
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
      {/* Background Deep Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] opacity-30" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-md"
          >
            <BarChart3 className="h-8 w-8 text-secondary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          >
            {t('dashboard_title')}
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main KPIs Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {kpis.map((kpi, index) => (
              <KPIItem key={kpi.key} kpi={kpi} index={index} t={t} />
            ))}
          </div>

          {/* Complex Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/10] md:aspect-[16/8] w-full rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-white/5 backdrop-blur-xl group"
          >
            <div className="absolute inset-0 flex">
              {/* Sidebar Simulation */}
              <div className="w-16 md:w-20 border-r border-white/10 flex flex-col items-center py-8 gap-8">
                <div className="w-10 h-10 bg-orange rounded-xl flex items-center justify-center shadow-lg shadow-orange/20">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                </div>
                {[Box, Truck, Map, Wallet, Settings].map((Icon, i) => (
                  <div key={i} className="text-white/20 hover:text-white/60 transition-colors cursor-pointer">
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col">
                {/* Topbar Simulation */}
                <div className="h-16 md:h-20 border-b border-white/10 px-8 flex items-center justify-between">
                  <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/5 w-64">
                    <Search className="h-4 w-4 text-white/30" />
                    <div className="h-3 w-32 bg-white/10 rounded-full" />
                  </div>
                  <div className="flex items-center gap-6">
                    <Bell className="h-5 w-5 text-white/40" />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/40 border border-white/10 flex items-center justify-center">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="hidden md:block">
                        <div className="h-2.5 w-16 bg-white/60 rounded-full mb-1" />
                        <div className="h-2 w-10 bg-white/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 p-6 md:p-8 grid grid-cols-12 gap-6 overflow-hidden">
                  {/* Chart Widget */}
                  <div className="col-span-12 lg:col-span-8 bg-white/5 rounded-3xl p-6 border border-white/5 relative overflow-hidden flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="text-sm font-bold text-white/80 uppercase tracking-widest mb-1">Volume d'expéditions</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black">+14.2%</span>
                          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">LIVE</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {['J', 'S', 'M'].map((t) => (
                          <div key={t} className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all", t === 'S' ? "bg-secondary text-white" : "bg-white/5 text-white/40")}>{t}</div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex items-end gap-3 relative">
                      {[40, 60, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                          className="flex-1 bg-gradient-to-t from-secondary/40 via-secondary to-secondary/80 rounded-t-lg group-hover:via-secondary/60 transition-all relative"
                        >
                          {i === 11 && (
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange rounded-full shadow-[0_0_10px_#f7941d]" />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-5 pointer-events-none">
                      {[1, 2, 3, 4].map(line => <div key={line} className="w-full h-px bg-white" />)}
                    </div>
                  </div>

                  {/* Sidebar Widgets Column */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    {/* Stock Widget */}
                    <div className="flex-1 bg-white/5 rounded-3xl p-6 border border-white/5 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest">État des stocks</h4>
                        <ArrowUpRight className="h-4 w-4 text-orange" />
                      </div>
                      <div className="space-y-4">
                        {[
                          { label: 'Beauté', val: 85, color: 'bg-secondary' },
                          { label: 'High-Tech', val: 32, color: 'bg-orange' },
                          { label: 'Maison', val: 64, color: 'bg-white/20' }
                        ].map((s, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-[10px] font-bold mb-1.5 uppercase tracking-tighter">
                              <span>{s.label}</span>
                              <span className="text-white/40">{s.val}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.val}%` }}
                                transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                                className={cn("h-full rounded-full", s.color)} 
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent Activities */}
                    <div className="flex-1 bg-white/5 rounded-3xl p-6 border border-white/5 overflow-hidden">
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">Derniers Colis</h4>
                      <div className="space-y-4">
                        {[
                          { id: 'LT-842', status: 'Livré', time: 'Il y a 2 min' },
                          { id: 'LT-731', status: 'En transit', time: 'Il y a 14 min' },
                          { id: 'LT-905', status: 'Préparation', time: 'Il y a 28 min' }
                        ].map((act, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={cn("w-2 h-2 rounded-full", act.status === 'Livré' ? "bg-emerald-500" : act.status === 'En transit' ? "bg-secondary" : "bg-orange")} />
                              <div>
                                <div className="text-[11px] font-bold">{act.id}</div>
                                <div className="text-[9px] text-white/30 uppercase">{act.time}</div>
                              </div>
                            </div>
                            <MoreVertical className="h-3 w-3 text-white/20" />
                          </div>
                        ))}
                      </div>
                    </div>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl text-center group hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 shadow-2xl relative overflow-hidden"
    >
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-500 group-hover:rotate-6">
        <kpi.icon className="h-6 w-6 text-secondary transition-transform group-hover:scale-110" />
      </div>
      <p className="text-2xl font-black mb-1 tabular-nums">
        {count.toLocaleString()}{kpi.suffix}
      </p>
      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.1em]">{t(kpi.key)}</p>
    </motion.div>
  );
}
