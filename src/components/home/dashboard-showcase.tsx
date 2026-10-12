"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Package, TrendingUp, RotateCcw, Wallet, Search, 
  Bell, LayoutDashboard, Box, CheckCircle2, ShowChart, ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState("orders");

  const kpis = [
    { icon: Package, label: "Expéditions Aujourd'hui", value: "142", trend: "+18%", color: "text-secondary-container" },
    { icon: TrendingUp, label: "Taux de Succès Livraison", value: "98.4 %", trend: "Objectif SLA", color: "text-emerald-400" },
    { icon: Wallet, label: "COD Collecté en Attente", value: "8 450 DT", trend: "Virement J+1", color: "text-secondary-fixed" },
    { icon: Box, label: "Alerte Stock Seuil", value: "3 SKUs", trend: "Réappro suggéré", color: "text-amber-400" },
  ];

  return (
    <section id="dashboard" className="py-24 bg-primary text-on-primary overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-container/10 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal">
          <span className="eyebrow bg-white/10 text-secondary-fixed border-transparent">Console Marchand en Direct</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 text-white">Pilotez vos opérations depuis un seul écran</h2>
          <p className="text-primary-fixed-dim text-lg font-medium">Stocks, livraisons et flux financiers en toute simplicité.</p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full rounded-[32px] bg-slate-900 border border-slate-700/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden p-6 md:p-10 space-y-8"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-slate-800 gap-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-bold text-sm tracking-widest text-slate-400 uppercase">Logistica Portal v3.4</span>
            </div>
            <div className="inline-flex bg-slate-800 p-1 rounded-2xl">
              {['Commandes', 'Stocks', 'Finance', 'KPIs'].map((tab, i) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={cn(
                    "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    activeTab === tab.toLowerCase() ? "bg-secondary text-white shadow-orange" : "text-slate-500 hover:text-white"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 space-y-2">
                <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block">{kpi.label}</span>
                <span className={cn("text-2xl md:text-3xl font-heading font-extrabold block", kpi.color)}>{kpi.value}</span>
                <span className="text-[10px] font-bold text-slate-400 block">{kpi.trend}</span>
              </div>
            ))}
          </div>

          {/* Chart Simulation */}
          <div className="p-8 rounded-3xl bg-slate-800/30 border border-slate-700/30 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
              <span className="text-white flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-secondary" />
                Performance des livraisons (7 derniers jours)
              </span>
              <span className="text-slate-500">[Données réelles simulées]</span>
            </div>
            <div className="h-48 w-full relative pt-4">
               <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 120">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fd761a" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#fd761a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,100 Q 50,80 100,85 T 200,50 T 300,70 T 400,30 T 500,20 T 600,10 L 600,120 L 0,120 Z" fill="url(#g1)" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M 0,100 Q 50,80 100,85 T 200,50 T 300,70 T 400,30 T 500,20 T 600,10" 
                    stroke="#fd761a" strokeWidth="4" strokeLinecap="round" 
                  />
               </svg>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-widest text-slate-400">
          {['Suivi des commandes', 'Encaissements COD', 'Indicateurs de performance'].map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
