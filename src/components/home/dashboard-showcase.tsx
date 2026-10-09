
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
  MoreVertical,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Clock,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const kpis = [
    { icon: Package, key: "dashboard_kpi_1", value: 1248, suffix: "", trend: "+12%" },
    { icon: TrendingUp, key: "dashboard_kpi_2", value: 98.5, suffix: "%", trend: "+0.5%" },
    { icon: Truck, key: "dashboard_kpi_3", value: 342, suffix: "", trend: "-2%" },
    { icon: RotateCcw, key: "dashboard_kpi_4", value: 12, suffix: "", trend: "-5%" },
    { icon: Wallet, key: "dashboard_kpi_5", value: 45000, suffix: " DT", trend: "+18%" },
  ];

  return (
    <section id="dashboard" className="py-32 bg-[#020817] text-white overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Deep Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[140px] opacity-20 pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Live Infrastructure</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight"
          >
            {t('dashboard_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-xl max-w-2xl mx-auto font-medium"
          >
            Une visibilité totale sur votre chaîne logistique, de l'entrepôt au dernier kilomètre.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main KPIs Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {kpis.map((kpi, index) => (
              <KPIItem key={kpi.key} kpi={kpi} index={index} t={t} />
            ))}
          </div>

          {/* Complex Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] bg-[#0A101F]/80 backdrop-blur-3xl group"
          >
            <div className="absolute inset-0 flex">
              {/* Enhanced Sidebar */}
              <div className="w-16 md:w-24 border-r border-white/5 flex flex-col items-center py-10 gap-10 bg-white/[0.02]">
                <div className="w-12 h-12 bg-gradient-to-br from-orange to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange/20 cursor-pointer hover:scale-110 transition-transform">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col gap-8">
                  {[Box, Truck, Map, Wallet, BarChart3, Settings].map((Icon, i) => (
                    <div key={i} className={cn(
                      "p-3 rounded-xl transition-all cursor-pointer group/icon",
                      i === 0 ? "bg-white/10 text-white" : "text-white/20 hover:text-white/60 hover:bg-white/5"
                    )}>
                      <Icon className="h-6 w-6" />
                    </div>
                  ))}
                </div>
                <div className="mt-auto pb-4">
                   <div className="w-10 h-10 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center text-secondary font-black text-xs">
                     JD
                   </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col">
                {/* Enhanced Topbar */}
                <div className="h-20 border-b border-white/5 px-10 flex items-center justify-between bg-white/[0.01]">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 bg-white/5 px-5 py-2.5 rounded-2xl border border-white/5 w-80 group/search focus-within:border-secondary/40 transition-all">
                      <Search className="h-4 w-4 text-white/20 group-focus-within/search:text-secondary" />
                      <div className="h-3 w-40 bg-white/10 rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-black uppercase tracking-widest">
                      Système Opérationnel
                    </div>
                    <div className="relative cursor-pointer">
                      <Bell className="h-6 w-6 text-white/40 hover:text-white transition-colors" />
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange rounded-full flex items-center justify-center text-[9px] font-black text-primary border-2 border-[#0A101F]">3</span>
                    </div>
                    <div className="h-8 w-px bg-white/10" />
                    <div className="flex items-center gap-4 group cursor-pointer">
                      <div className="text-right hidden sm:block">
                        <p className="text-sm font-black text-white group-hover:text-secondary transition-colors">Admin Store</p>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Compte Pro</p>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-secondary to-blue-400 p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-[14px] bg-[#0A101F] flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Dashboard Grid */}
                <div className="flex-1 p-10 grid grid-cols-12 gap-8 overflow-hidden">
                  
                  {/* LEFT COLUMN: Main Chart & Stats */}
                  <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                    
                    {/* Shipment Volume Area Chart Simulation */}
                    <div className="flex-1 bg-white/[0.03] rounded-[32px] p-8 border border-white/5 relative overflow-hidden group/chart flex flex-col">
                      <div className="flex items-center justify-between mb-10">
                        <div>
                          <h4 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-2">Volume d'expéditions</h4>
                          <div className="flex items-baseline gap-3">
                            <span className="text-4xl font-black">2,842</span>
                            <span className="text-xs text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-md">+14.2% ce mois</span>
                          </div>
                        </div>
                        <div className="flex gap-3 bg-white/5 p-1 rounded-xl border border-white/5">
                          {['Jour', 'Semaine', 'Mois'].map((t) => (
                            <button key={t} className={cn(
                              "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                              t === 'Semaine' ? "bg-secondary text-white shadow-lg" : "text-white/30 hover:text-white"
                            )}>{t}</button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Animated Area Chart Mockup */}
                      <div className="flex-1 flex items-end gap-3 relative min-h-[200px]">
                        {[35, 55, 42, 78, 50, 92, 65, 82, 58, 95, 70, 100, 85, 90].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                            className="flex-1 bg-gradient-to-t from-secondary/5 via-secondary/20 to-secondary/80 rounded-t-xl group-hover/chart:via-secondary/40 transition-all relative"
                          >
                            {i === 11 && (
                              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange rounded-full shadow-[0_0_20px_#f7941d] z-10" />
                            )}
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/chart:opacity-100 transition-opacity rounded-t-xl" />
                          </motion.div>
                        ))}
                        
                        {/* Legend / Overlay */}
                        <div className="absolute top-0 right-0 flex flex-col gap-2">
                           <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-secondary" />
                             <span className="text-[10px] text-white/40 font-bold uppercase">Livraisons réussies</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-orange" />
                             <span className="text-[10px] text-white/40 font-bold uppercase">En transit</span>
                           </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center pt-6 border-t border-white/5">
                        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
                          <span key={day} className="text-[10px] font-black text-white/20 uppercase tracking-widest">{day}</span>
                        ))}
                      </div>
                    </div>

                    {/* Secondary Metrics: Inventory & Carrier */}
                    <div className="grid grid-cols-2 gap-8">
                       <div className="bg-white/[0.03] rounded-[32px] p-6 border border-white/5 flex items-center justify-between group/inv">
                          <div className="flex flex-col gap-1">
                            <h5 className="text-[10px] font-black text-white/30 uppercase tracking-widest">Santé Stock</h5>
                            <p className="text-2xl font-black">94% <span className="text-[10px] text-emerald-400">OK</span></p>
                            <p className="text-[10px] text-white/20 font-medium">842 SKUs actifs</p>
                          </div>
                          <div className="relative w-16 h-16">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" className="text-white/5" />
                              <motion.circle 
                                cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="6" fill="transparent" 
                                strokeDasharray={175.9}
                                initial={{ strokeDashoffset: 175.9 }}
                                whileInView={{ strokeDashoffset: 175.9 * 0.06 }}
                                transition={{ duration: 2, delay: 0.5 }}
                                className="text-secondary" 
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <ShieldCheck className="h-4 w-4 text-secondary" />
                            </div>
                          </div>
                       </div>
                       <div className="bg-white/[0.03] rounded-[32px] p-6 border border-white/5 flex items-center justify-between group/inv">
                          <div className="flex flex-col gap-1">
                            <h5 className="text-[10px] font-black text-white/30 uppercase tracking-widest">Délai Moyen</h5>
                            <p className="text-2xl font-black">28.4 <span className="text-[10px] text-white/40">Heures</span></p>
                            <p className="text-[10px] text-white/20 font-medium">Sur toute la Tunisie</p>
                          </div>
                          <div className="w-12 h-12 rounded-2xl bg-orange/10 flex items-center justify-center text-orange group-hover/inv:rotate-12 transition-transform">
                             <Zap className="h-6 w-6 fill-current" />
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: Sidebar Widgets */}
                  <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
                    
                    {/* Live Activity Feed */}
                    <div className="flex-1 bg-white/[0.03] rounded-[32px] p-8 border border-white/5 flex flex-col overflow-hidden">
                      <div className="flex items-center justify-between mb-8">
                        <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em]">Dernières Expéditions</h4>
                        <button className="text-[10px] font-black text-secondary uppercase tracking-widest hover:underline">Voir Tout</button>
                      </div>
                      
                      <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {[
                          { id: 'LT-TN84291', status: 'Livré', time: '14:28', city: 'Sfax', color: 'bg-emerald-400' },
                          { id: 'LT-TN73105', status: 'En transit', time: '14:15', city: 'Bizerte', color: 'bg-secondary' },
                          { id: 'LT-TN90522', status: 'Préparation', time: '13:58', city: 'Tunis', color: 'bg-orange' },
                          { id: 'LT-TN66481', status: 'Ramassage', time: '13:42', city: 'Sousse', color: 'bg-amber-400' },
                          { id: 'LT-TN55219', status: 'Livré', time: '13:20', city: 'Nabeul', color: 'bg-emerald-400' }
                        ].map((act, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-center justify-between group/row"
                          >
                            <div className="flex items-center gap-4">
                              <div className={cn("w-2 h-2 rounded-full", act.color, act.status === 'En transit' && "animate-pulse")} />
                              <div>
                                <div className="text-xs font-black group-hover/row:text-secondary transition-colors">{act.id}</div>
                                <div className="text-[10px] text-white/20 font-bold uppercase">{act.city} • {act.time}</div>
                              </div>
                            </div>
                            <div className={cn("px-2.5 py-1 rounded-md text-[9px] font-black uppercase tracking-widest", 
                              act.status === 'Livré' ? "bg-emerald-500/10 text-emerald-400" : "bg-white/5 text-white/40"
                            )}>
                              {act.status}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                            <Clock className="h-5 w-5 text-white/30" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">Prochaine mise à jour</p>
                            <p className="text-xs font-bold text-white/30">Synchronisation dans 04:52m</p>
                         </div>
                      </div>
                    </div>

                    {/* Regional Map Snapshot Placeholder */}
                    <div className="h-48 bg-white/[0.03] rounded-[32px] border border-white/5 p-6 relative overflow-hidden group/map">
                       <h4 className="text-[11px] font-black text-white/40 uppercase tracking-[0.2em] relative z-10">Couverture Régionale</h4>
                       
                       {/* Abstract Map Background Simulation */}
                       <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Map className="w-full h-full scale-150 transform -rotate-12" />
                       </div>

                       <div className="mt-4 flex flex-col gap-3 relative z-10">
                          {[
                            { label: 'Tunis', val: '85%' },
                            { label: 'Sfax', val: '64%' },
                            { label: 'Sahel', val: '72%' }
                          ].map(reg => (
                            <div key={reg.label} className="flex items-center gap-4">
                               <span className="text-[10px] font-bold text-white/40 w-10 uppercase">{reg.label}</span>
                               <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: reg.val }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    className="h-full bg-secondary rounded-full" 
                                  />
                               </div>
                               <span className="text-[10px] font-black text-white/60">{reg.val}</span>
                            </div>
                          ))}
                       </div>
                       
                       <Button variant="ghost" size="sm" className="absolute bottom-4 right-4 text-[9px] h-7 px-3 bg-white/5 hover:bg-white/10 rounded-lg text-white/60 font-black uppercase tracking-widest">
                          Détails <ExternalLink className="ml-2 h-3 w-3" />
                       </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass Glare Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05]" />
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

  const isPositive = kpi.trend.startsWith('+');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 rounded-[32px] text-center group hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-2 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-all duration-500 group-hover:rotate-6">
          <kpi.icon className="h-7 w-7 text-secondary transition-transform group-hover:scale-110" />
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <p className="text-3xl font-black tabular-nums">
            {count.toLocaleString()}{kpi.suffix}
          </p>
        </div>
        
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">{t(kpi.key)}</p>
        
        <div className={cn(
          "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black",
          isPositive ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
        )}>
          {kpi.trend}
          <TrendingUp className={cn("h-3 w-3", !isPositive && "transform rotate-90")} />
        </div>
      </div>
    </motion.div>
  );
}
