
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Package, TrendingUp, Wallet, Box, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState("orders");

  const kpis = [
    { icon: Package, label: t('db_kpi1'), value: "142", trend: "+18%", color: "text-[#1F6FDB]" },
    { icon: TrendingUp, label: t('db_kpi2'), value: "98.4 %", trend: "Objectif SLA", color: "text-emerald-400" },
    { icon: Wallet, label: t('db_kpi3'), value: "8 450 DT", trend: "Virement J+1", color: "#F7931E" },
    { icon: Box, label: t('db_kpi4'), value: "3 SKUs", trend: "Réappro suggéré", color: "text-amber-400" },
  ];

  const tabs = [
    { id: "orders", label: t('db_tab1') },
    { id: "stocks", label: t('db_tab2') },
    { id: "finance", label: t('db_tab3') },
    { id: "kpis", label: t('db_tab4') }
  ];

  const features = [t('db_feature1'), t('db_feature2'), t('db_feature3')];

  return (
    <section id="dashboard" className="py-24 bg-[#0B2A6B] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1F6FDB]/10 rounded-full blur-[160px] opacity-40 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white/10 text-[#F7931E] font-black text-xs uppercase tracking-widest rounded-full mb-4">
            Dashboard
          </span>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6",
            language === 'ar' && "font-arabic"
          )}>
            {t('db_title')}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] text-lg font-medium",
            language === 'ar' && "font-arabic"
          )}>
            {t('db_desc')}
          </p>
        </div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 5 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full rounded-[32px] bg-[#081E4E] border border-white/10 shadow-2xl overflow-hidden p-6 md:p-10 space-y-8"
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between pb-8 border-b border-white/5 gap-6">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="font-bold text-xs tracking-widest text-[#9FB2DE]/40 uppercase">Logistica Portal v3.4</span>
            </div>
            <div className="inline-flex bg-white/5 p-1 rounded-2xl">
              {tabs.map((tab) => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                    activeTab === tab.id ? "bg-[#F7931E] text-[#0B2A6B]" : "text-[#9FB2DE] hover:text-white"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {kpis.map((kpi, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
                <span className="text-[10px] font-black uppercase text-[#9FB2DE]/40 tracking-widest block">{kpi.label}</span>
                <span className={cn("text-2xl md:text-3xl font-bold block", kpi.color === '#F7931E' ? 'text-[#F7931E]' : kpi.color)}>{kpi.value}</span>
                <span className="text-[10px] font-bold text-white/20 block">{kpi.trend}</span>
              </div>
            ))}
          </div>

          {/* Chart Simulation */}
          <div className="p-8 rounded-3xl bg-black/20 border border-white/5 space-y-6">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
              <span className="text-white flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#F7931E]" />
                {t('db_chart_title')}
              </span>
              <span className="text-[#9FB2DE]/20 hidden sm:inline">[Données simulées]</span>
            </div>
            <div className="h-48 w-full relative pt-4">
               <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 120">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" x2="1">
                      <stop offset="0%" stopColor="#F7931E" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1F6FDB" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,100 Q 50,80 100,85 T 200,50 T 300,70 T 400,30 T 500,20 T 600,10 L 600,120 L 0,120 Z" fill="url(#g1)" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    d="M 0,100 Q 50,80 100,85 T 200,50 T 300,70 T 400,30 T 500,20 T 600,10" 
                    stroke="#F7931E" strokeWidth="4" strokeLinecap="round" 
                  />
               </svg>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-widest text-[#9FB2DE]/40">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#F7931E]/20 flex items-center justify-center text-[#F7931E]">
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
