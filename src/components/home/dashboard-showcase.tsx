"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Package, TrendingUp, Wallet, Box, CheckCircle2, 
  LayoutDashboard, Bell, Search
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardShowcase() {
  const { t, language } = useTranslation();
  const [activeTab, setActiveTab] = useState("orders");

  const kpis = [
    { icon: Package, label: t('db_kpi1'), value: "142", trend: "+18%", color: "text-[#1F6FDB]", bg: "bg-[#1F6FDB]/10" },
    { icon: TrendingUp, label: t('db_kpi2'), value: "98.4 %", trend: "Objectif SLA", color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { icon: Wallet, label: t('db_kpi3'), value: "8 450 DT", trend: "Virement J+1", color: "text-[#F7931E]", bg: "bg-[#F7931E]/10" },
    { icon: Box, label: t('db_kpi4'), value: "3 SKUs", trend: "Réappro suggéré", color: "text-amber-400", bg: "bg-amber-400/10" },
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
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1F6FDB]/10 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F7931E]/5 rounded-full blur-[100px] opacity-30 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-[#F7931E] font-black text-[10px] uppercase tracking-[0.2em] rounded-full mb-6"
          >
            Logistica Portal v4.0
          </motion.span>
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.25]",
            language === 'ar' && "font-arabic"
          )}>
            {t('db_title')}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] text-lg font-medium leading-[1.6] max-w-2xl mx-auto",
            language === 'ar' && "font-arabic"
          )}>
            {t('db_desc')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full rounded-[40px] bg-[#081E4E]/80 backdrop-blur-xl border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F]" />
              </div>
              <div className="hidden md:flex items-center gap-3 px-4 py-1.5 bg-white/5 rounded-lg border border-white/5">
                <LayoutDashboard className="w-4 h-4 text-[#F7931E]" />
                <span className="font-bold text-[10px] tracking-widest text-[#9FB2DE]/60 uppercase">Tableau de bord</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                {tabs.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all",
                      activeTab === tab.id ? "bg-[#F7931E] text-[#0B2A6B] shadow-lg" : "text-[#9FB2DE] hover:text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                <Bell className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {kpis.map((kpi, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex justify-between items-start">
                    <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", kpi.bg, kpi.color)}>
                      <kpi.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{kpi.trend}</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase text-[#9FB2DE]/40 tracking-widest block mb-1">{kpi.label}</span>
                    <span className="text-2xl md:text-3xl font-black block tabular-nums text-white">{kpi.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-8 rounded-[32px] bg-black/20 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1F6FDB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="space-y-1">
                  <h4 className="text-white font-bold flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-[#F7931E]" />
                    {t('db_chart_title')}
                  </h4>
                  <p className="text-[10px] text-[#9FB2DE]/40 font-bold uppercase tracking-widest">Performances hebdomadaires</p>
                </div>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#F7931E]" />
                     <span className="text-[10px] font-bold text-[#9FB2DE]/60 uppercase">Livrés</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#1F6FDB]" />
                     <span className="text-[10px] font-bold text-[#9FB2DE]/60 uppercase">En cours</span>
                   </div>
                </div>
              </div>

              <div className="h-64 w-full relative pt-4">
                 <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 600 160">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#F7931E" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#F7931E" stopOpacity="0" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {[0, 40, 80, 120, 160].map((y) => (
                      <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
                    ))}

                    <path 
                      d="M 0,140 Q 50,110 100,120 T 200,70 T 300,90 T 400,40 T 500,30 T 600,10 L 600,160 L 0,160 Z" 
                      fill="url(#chartGradient)" 
                    />

                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2.5, ease: "easeInOut" }}
                      d="M 0,140 Q 50,110 100,120 T 200,70 T 300,90 T 400,40 T 500,30 T 600,10" 
                      stroke="#F7931E" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                      fill="none"
                      filter="url(#glow)"
                    />

                    <motion.path 
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
                      d="M 0,150 Q 60,130 120,140 T 240,100 T 360,110 T 480,80 T 600,60" 
                      stroke="#1F6FDB" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeDasharray="8 8"
                      fill="none"
                      opacity="0.5"
                    />

                    {[
                      {x: 100, y: 120}, {x: 300, y: 90}, {x: 500, y: 30}
                    ].map((dot, i) => (
                      <motion.g 
                        key={i} 
                        initial={{ opacity: 0, scale: 0 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        transition={{ delay: 1.5 + (i * 0.2) }}
                      >
                        <circle cx={dot.x} cy={dot.y} r="8" fill="#F7931E" fillOpacity="0.2" />
                        <circle cx={dot.x} cy={dot.y} r="4" fill="#F7931E" />
                      </motion.g>
                    ))}
                 </svg>
              </div>
              
              <div className="flex justify-between mt-6 px-2 text-[9px] font-black text-[#9FB2DE]/30 uppercase tracking-[0.3em]">
                <span>Lun</span><span>Mar</span><span>Mer</span><span>Jeu</span><span>Ven</span><span>Sam</span><span>Dim</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-6">
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#F7931E] transition-colors group-hover:bg-[#F7931E]/20">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9FB2DE]/60 group-hover:text-white transition-colors">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
