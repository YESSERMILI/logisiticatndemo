"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
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
  ArrowUpRight,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';

const performanceData = [
  { name: 'Lun', value: 420, returns: 22 },
  { name: 'Mar', value: 380, returns: 18 },
  { name: 'Mer', value: 520, returns: 25 },
  { name: 'Jeu', value: 490, returns: 12 },
  { name: 'Ven', value: 680, returns: 32 },
  { name: 'Sam', value: 610, returns: 20 },
  { name: 'Dim', value: 750, returns: 15 },
];

const carrierData = [
  { name: 'Flotte Logistica', value: 45, color: '#1F6FDB' },
  { name: 'Partenaire A', value: 30, color: '#F7941D' },
  { name: 'Partenaire B', value: 25, color: '#0C2A6B' },
];

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: 120, trend: "+5%", color: "text-blue-500" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: 98, suffix: "%", trend: "+0.5%", color: "text-emerald-500" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: 4, trend: "-2%", color: "text-red-500" },
    { icon: Wallet, key: "dashboard_kpi_5", value: 5400, suffix: " DT", trend: "+10%", color: "text-orange" },
  ];

  return (
    <section id="dashboard" className="py-32 bg-[#061233] text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      
      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-white"
          >
            {t('dashboard_title')}
          </motion.h2>
          <p className="text-[#b6c3e0] text-xl max-w-2xl mx-auto font-medium mb-12">
            Une interface unique pour piloter vos stocks, vos livraisons et vos flux financiers en toute simplicité.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-[#b6c3e0]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange" />
              <span className="font-semibold">Suivi des commandes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange" />
              <span className="font-semibold">Encaissements COD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange" />
              <span className="font-semibold">Indicateurs de performance (KPI)</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[48px] overflow-hidden border border-white/10 bg-[#0A101F]/70 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] flex flex-col md:flex-row"
          >
            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:flex w-24 border-r border-white/5 flex-col items-center py-10 gap-10 bg-black/20 shrink-0">
              <div className="w-12 h-12 bg-orange rounded-2xl flex items-center justify-center shadow-lg shadow-orange/20 shrink-0">
                <Box className="h-6 w-6 text-[#0C2A6B]" />
              </div>
              <div className="flex flex-col gap-6">
                {[LayoutDashboard, Package, Truck, Map, Wallet, BarChart3].map((Icon, i) => (
                  <div key={i} className={cn(
                    "p-3 rounded-xl transition-all cursor-pointer group",
                    i === 0 ? "bg-white/10 text-white" : "text-white/20 hover:text-white/60 hover:bg-white/5"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top Navigation Bar */}
              <div className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-black/10 shrink-0">
                <div className="flex items-center gap-4 flex-1">
                  <div className="max-w-md w-full relative hidden sm:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                    <div className="h-10 bg-white/5 rounded-xl border border-white/5 pl-12 flex items-center text-white/20 text-xs font-medium">
                      Rechercher une commande...
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 ml-4">
                    <Info className="h-3 w-3 text-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/60">{t('dashboard_illustrative')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="relative cursor-pointer">
                    <Bell className="h-5 w-5 text-white/40 hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full flex items-center justify-center text-[9px] font-black text-[#0C2A6B] border-2 border-[#0A101F]">3</span>
                  </div>
                  <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-black">Ma Boutique</p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-secondary to-blue-500 p-0.5">
                      <div className="w-full h-full rounded-[14px] bg-[#0A101F] flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Internal Content */}
              <div className="p-8 space-y-8 overflow-y-auto max-h-[720px] custom-scrollbar">
                {/* Horizontal KPIs Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {kpis.map((kpi, idx) => (
                    <div key={idx} className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 group hover:bg-white/[0.05] transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div className={cn("w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center", kpi.color)}>
                          <kpi.icon className="h-5 w-5" />
                        </div>
                        <span className={cn(
                          "text-[10px] font-black px-2 py-0.5 rounded-md",
                          kpi.trend.startsWith('+') ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                        )}>{kpi.trend}</span>
                      </div>
                      <p className="text-2xl font-black tracking-tight mb-1 font-mono">
                        {mounted ? kpi.value.toLocaleString('fr-FR') : '---'}
                        {mounted && kpi.suffix}
                      </p>
                      <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.1em]">{t(kpi.key)}</p>
                    </div>
                  ))}
                </div>

                {/* Primary Data Row */}
                <div className="grid grid-cols-12 gap-8">
                  {/* Main Visual: Performance Chart */}
                  <div className="col-span-12 lg:col-span-8 bg-white/[0.03] rounded-3xl p-8 border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
                      <div>
                        <h3 className="text-lg font-black flex items-center gap-2">
                          Performance des Livraisons
                          <ArrowUpRight className="h-4 w-4 text-secondary" />
                        </h3>
                        <p className="text-xs text-white/30 font-medium">Analyse comparative des flux sur 7 jours</p>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/40">
                          <div className="w-2.5 h-2.5 rounded-full bg-secondary" /> Expéditions
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-white/40">
                          <div className="w-2.5 h-2.5 rounded-full bg-orange" /> Retours
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-[300px] w-full">
                      {mounted && (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={performanceData}>
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1F6FDB" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#1F6FDB" stopOpacity={0}/>
                              </linearGradient>
                              <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#F7931E" stopOpacity={0.2}/>
                                <stop offset="95%" stopColor="#F7931E" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                            <XAxis 
                              dataKey="name" 
                              axisLine={false} 
                              tickLine={false} 
                              tick={{fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 800}}
                              dy={15}
                            />
                            <YAxis hide />
                            <Tooltip 
                              contentStyle={{backgroundColor: '#0A101F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px'}}
                              itemStyle={{fontSize: '11px', fontWeight: 900}}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="#1F6FDB" 
                              strokeWidth={4} 
                              fillOpacity={1} 
                              fill="url(#colorValue)" 
                              animationDuration={2000}
                            />
                            <Area 
                              type="monotone" 
                              dataKey="returns" 
                              stroke="#F7931E" 
                              strokeWidth={3} 
                              fillOpacity={1}
                              fill="url(#colorReturns)"
                              animationDuration={2500}
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </div>

                  {/* Sidebar Widgets: Carrier & Alerts */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    {/* Carrier Dispatch Widget */}
                    <div className="bg-white/[0.03] rounded-3xl p-8 border border-white/5 flex-1 relative overflow-hidden">
                      <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-8">Routage Transporteurs</h3>
                      <div className="space-y-6">
                        {carrierData.map((c, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-[11px] font-black mb-2 uppercase">
                              <span className="text-white/60">{c.name}</span>
                              <span className="text-white">{c.value}%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${c.value}%` }}
                                transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                                className="h-full rounded-full" 
                                style={{ backgroundColor: c.color }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-10 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                        <div className="flex items-center gap-3 mb-2">
                          <AlertCircle className="h-4 w-4 text-red-400" />
                          <p className="text-[10px] font-black text-red-400 uppercase tracking-widest">Alerte Stock</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">
                          Attention : stock bas sur <span className="text-white">3 références</span> (Produit A, B, C).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Row */}
                <div className="grid grid-cols-12 gap-8 pb-8">
                   {/* Cash Flow Tracking (COD) */}
                   <div className="col-span-12 lg:col-span-7 bg-white/[0.03] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-widest text-white/30">Gestion des Fonds (COD)</h3>
                        </div>
                        <DollarSign className="h-6 w-6 text-orange opacity-40" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <div>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Encaissé</p>
                          <p className="text-4xl font-black text-orange tabular-nums font-mono">
                            1 428 <span className="text-sm font-bold text-white/40">DT</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">En attente</p>
                          <p className="text-4xl font-black text-white tabular-nums font-mono">
                            3 291 <span className="text-sm font-bold text-white/40">DT</span>
                          </p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                          <span>Objectif Hebdomadaire</span>
                          <span>82%</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '82%' }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-orange to-amber-500 rounded-full" 
                          />
                        </div>
                      </div>
                   </div>

                   {/* Live Delivery Feed */}
                   <div className="col-span-12 lg:col-span-5 bg-white/[0.03] rounded-3xl p-8 border border-white/5 flex flex-col">
                      <div className="flex items-center justify-between mb-10">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/30">Derniers Événements</h3>
                      </div>
                      <div className="space-y-6 flex-1">
                        {[
                          { id: 'LT-84291', status: 'Livré', time: '14:28', city: 'Sfax', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                          { id: 'LT-73105', status: 'En transit', time: '14:15', city: 'Bizerte', icon: Truck, color: 'text-secondary', bg: 'bg-secondary/10' },
                          { id: 'LT-90522', status: 'Tri en cours', time: '13:58', city: 'Tunis', icon: Package, color: 'text-orange', bg: 'bg-orange/10' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", item.bg, item.color)}>
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black uppercase">{item.id}</p>
                                <p className="text-[10px] text-white/20 font-bold uppercase">{item.city} • {item.time}</p>
                              </div>
                            </div>
                            <div className={cn("px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest", item.bg, item.color)}>
                              {item.status}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-10 rounded-full bg-orange hover:bg-orange/90 text-primary font-black uppercase tracking-widest h-12 border-none">
                        {t('dashboard_cta' as any)}
                      </Button>
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