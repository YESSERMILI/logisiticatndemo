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
  ExternalLink,
  DollarSign,
  AlertCircle,
  CheckCircle2
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

// Data for the main performance chart
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
  { name: 'Logistica Fleet', value: 45, color: '#1F6FDB' },
  { name: 'Aramex', value: 30, color: '#F7941D' },
  { name: 'First Delivery', value: 25, color: '#0C2A6B' },
];

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: 1248, trend: "+12%", color: "text-blue-500" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: 98.5, suffix: "%", trend: "+0.5%", color: "text-emerald-500" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: 12, trend: "-5%", color: "text-red-500" },
    { icon: Wallet, key: "dashboard_kpi_5", value: 45280, suffix: " DT", trend: "+18%", color: "text-orange" },
  ];

  return (
    <section id="dashboard" className="py-32 bg-[#020817] text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Deep Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Système Cloud Live</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
          >
            {t('dashboard_title')}
          </motion.h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-medium">
            Une interface unique pour piloter vos stocks, vos livraisons et vos flux financiers en toute simplicité.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-[48px] overflow-hidden border border-white/10 bg-[#0A101F]/70 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] flex"
          >
            {/* Sidebar - Desktop Only */}
            <div className="hidden lg:flex w-24 border-r border-white/5 flex-col items-center py-10 gap-10 bg-black/20 custom-scrollbar overflow-y-auto">
              <div className="w-12 h-12 bg-orange rounded-2xl flex items-center justify-center shadow-lg shadow-orange/20 shrink-0">
                <Box className="h-6 w-6 text-[#0C2A6B]" />
              </div>
              <div className="flex flex-col gap-6">
                {[LayoutDashboard, Package, Truck, Map, Wallet, BarChart3, Settings].map((Icon, i) => (
                  <div key={i} className={cn(
                    "p-3 rounded-xl transition-all cursor-pointer group",
                    i === 0 ? "bg-white/10 text-white" : "text-white/20 hover:text-white/60 hover:bg-white/5"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                ))}
              </div>
              <div className="mt-auto shrink-0">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20 text-xs font-bold">JD</div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Top Navigation Bar */}
              <div className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-black/10 shrink-0">
                <div className="flex items-center gap-4 flex-1">
                  <div className="max-w-md w-full relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/20" />
                    <div className="h-10 bg-white/5 rounded-xl border border-white/5 pl-12 flex items-center text-white/20 text-xs font-medium">
                      Rechercher une commande (ex: LT-7281)...
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-black uppercase text-emerald-400">
                    Services OK
                  </div>
                  <div className="relative cursor-pointer">
                    <Bell className="h-5 w-5 text-white/40 hover:text-white transition-colors" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full flex items-center justify-center text-[9px] font-black text-[#0C2A6B] border-2 border-[#0A101F]">3</span>
                  </div>
                  <div className="flex items-center gap-3 pl-4 border-l border-white/5">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-black">Mon Magasin Pro</p>
                      <p className="text-[10px] text-white/30 font-bold">Client Gold</p>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-secondary to-blue-500 p-0.5 shadow-xl">
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
                      <p className="text-2xl font-black tracking-tight mb-1">
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
                    <div className="flex items-center justify-between mb-10">
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
                              contentStyle={{backgroundColor: '#0A101F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}
                              itemStyle={{fontSize: '11px', fontWeight: 900, textTransform: 'uppercase'}}
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
                              stroke="#F7941D" 
                              strokeWidth={3} 
                              strokeDasharray="5 5"
                              fill="transparent" 
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
                      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 blur-2xl" />
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
                      
                      <div className="mt-10 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Optimisation IA active</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-relaxed">
                          La flotte <span className="text-white">Logistica</span> a été privilégiée pour les zones de <span className="text-secondary">Grand Tunis</span> afin d'assurer J+1.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Interactive Row */}
                <div className="grid grid-cols-12 gap-8 pb-8">
                   {/* Cash Flow Tracking (COD) */}
                   <div className="col-span-12 lg:col-span-7 bg-white/[0.03] rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
                      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-orange/5 rounded-full blur-[80px] pointer-events-none" />
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-widest text-white/30">Gestion des Fonds (COD)</h3>
                          <p className="text-xs text-white/20">Suivi des encaissements à la livraison</p>
                        </div>
                        <DollarSign className="h-6 w-6 text-orange opacity-40" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                        <div>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">Encaissé (Aujourd'hui)</p>
                          <p className="text-4xl font-black text-orange tabular-nums">
                            {mounted ? (14285).toLocaleString('fr-FR') : '---'} <span className="text-sm font-bold text-white/40">DT</span>
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                             <TrendingUp className="h-3 w-3 text-emerald-400" />
                             <span className="text-[10px] font-bold text-emerald-400">+22% vs hier</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-[10px] font-black text-white/30 uppercase tracking-widest mb-1">En attente de versement</p>
                          <p className="text-4xl font-black text-white tabular-nums">
                            {mounted ? (32910).toLocaleString('fr-FR') : '---'} <span className="text-sm font-bold text-white/40">DT</span>
                          </p>
                          <p className="text-[10px] font-bold text-white/20 mt-2 uppercase">Prochain virement : <span className="text-secondary">Mardi 24 Mars</span></p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                          <span>Progression Objectif Hebdomadaire</span>
                          <span>82%</span>
                        </div>
                        <div className="h-4 bg-white/5 rounded-full p-1 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '82%' }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-orange to-amber-500 rounded-full shadow-[0_0_15px_rgba(247,148,29,0.2)]" 
                          />
                        </div>
                      </div>
                   </div>

                   {/* Live Delivery Feed */}
                   <div className="col-span-12 lg:col-span-5 bg-white/[0.03] rounded-3xl p-8 border border-white/5 flex flex-col">
                      <div className="flex items-center justify-between mb-10">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/30">Derniers Événements</h3>
                        <Button variant="ghost" size="sm" className="h-8 text-[10px] font-black uppercase tracking-widest text-secondary hover:bg-secondary/10">Exporter</Button>
                      </div>
                      <div className="space-y-6 flex-1">
                        {[
                          { id: 'LT-TN84291', status: 'Livré', time: '14:28', city: 'Sfax', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                          { id: 'LT-TN73105', status: 'En transit', time: '14:15', city: 'Bizerte', icon: Truck, color: 'text-secondary', bg: 'bg-secondary/10' },
                          { id: 'LT-TN90522', status: 'Tri en cours', time: '13:58', city: 'Tunis', icon: Package, color: 'text-orange', bg: 'bg-orange/10' },
                          { id: 'LT-TN66481', status: 'Alerte Stock', time: '13:42', city: 'Entrepôt', icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/10' },
                        ].map((item, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center justify-between group cursor-default"
                          >
                            <div className="flex items-center gap-4">
                              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", item.bg, item.color)}>
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-[11px] font-black group-hover:text-secondary transition-colors uppercase tracking-tight">{item.id}</p>
                                <p className="text-[10px] text-white/20 font-bold uppercase">{item.city} • {item.time}</p>
                              </div>
                            </div>
                            <div className={cn("px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest", item.bg, item.color)}>
                              {item.status}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full mt-10 rounded-2xl border-white/5 hover:bg-white/5 text-[10px] font-black uppercase tracking-widest h-12">
                        Accéder au tracking avancé
                      </Button>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ecosystem Partners - Subtle grayscale loop */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-20 grayscale pointer-events-none">
            {['Shopify', 'WooCommerce', 'Magento', 'PrestaShop', 'Facebook Ads', 'TikTok Shop', 'Aramex', 'Logistica'].map((brand) => (
              <span key={brand} className="text-xl font-black tracking-tighter italic whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}