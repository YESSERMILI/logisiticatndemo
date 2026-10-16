
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { 
  ShoppingCart, Box, Package, Truck, MapPin, 
  Banknote, RefreshCw, Headphones, LayoutDashboard,
  ArrowRight, PackageOpen, Layers, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LogisticsSteps() {
  const { t, language } = useTranslation();

  const steps = [
    { id: 1, icon: RefreshCw, key: "step_1", phase: "Intégration", time: "J-0" },
    { id: 2, icon: PackageOpen, key: "step_2", phase: "Intégration", time: "Réception" },
    { id: 3, icon: Layers, key: "step_3", phase: "Stockage", time: "Entreposage" },
    { id: 4, icon: ShoppingCart, key: "step_4", phase: "Stockage", time: "Automatique" },
    { id: 5, icon: Package, key: "step_5", phase: "Distribution", time: "< 2h" },
    { id: 6, icon: MapPin, key: "step_6", phase: "Distribution", time: "Tri Hub" },
    { id: 7, icon: Truck, key: "step_7", phase: "Distribution", time: "24h / 48h" },
    { id: 8, icon: Banknote, key: "step_8", phase: "Trésorerie", time: "COD" },
    { id: 9, icon: CheckCircle2, key: "step_9", phase: "Trésorerie", time: "J+1" },
    { id: 10, icon: LayoutDashboard, key: "step_10", phase: "Trésorerie", time: "SaaS" },
  ];

  return (
    <section id="steps" className="py-24 bg-[#040D26]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">Logistique Intégrée</span>
            <h2 className={cn(
              "text-3xl md:text-5xl font-bold text-white uppercase tracking-tight",
              language === 'ar' && "font-arabic"
            )}>
              {language === 'ar' ? "10 مراحل باش توصل لزبونك" : "Notre flux opérationnel en 10 étapes"}
            </h2>
            <p className={cn(
              "text-lg text-slate-400 font-medium",
              language === 'ar' && "font-arabic"
            )}>
              Un processus standardisé, automatisé et traçable de bout en bout.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
             {['Intégration', 'Stockage', 'Distribution', 'Finance'].map((p, i) => (
               <span key={i} className={cn(
                 "px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10",
                 i === 0 ? 'bg-[#F7931E] text-[#0B2A6B] border-transparent' : 'bg-white/5 text-slate-400'
               )}>{p}</span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-[24px] bg-[#0B2A6B]/30 border border-white/5 hover:border-[#1F6FDB]/30 transition-all group cursor-default relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="w-7 h-7 rounded-lg bg-white/5 text-[#F7931E] font-black text-xs flex items-center justify-center border border-white/5">{step.id}</span>
                <span className="text-[9px] font-black text-slate-500 tracking-widest uppercase">{step.time}</span>
              </div>
              <step.icon className="h-7 w-7 text-white/40 mb-4 group-hover:text-[#F7931E] transition-colors" strokeWidth={1.5} />
              <h4 className={cn(
                "text-white font-bold uppercase tracking-tight text-base mb-2 group-hover:text-white transition-colors",
                language === 'ar' && "font-arabic"
              )}>{t(`${step.key}_title` as any)}</h4>
              <p className={cn(
                "text-slate-500 text-xs font-medium leading-relaxed group-hover:text-slate-400 transition-colors",
                language === 'ar' && "font-arabic"
              )}>{t(`${step.key}_desc` as any)}</p>
              <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <step.icon size={100} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <Button className="bg-[#F7931E] text-[#0B2A6B] h-16 px-12 text-lg rounded-sm font-black shadow-2xl shadow-orange-500/10 hover:bg-[#E0861A] transition-all" asChild>
              <Link href="/register">
                {t('n4')}
                <ArrowRight className="h-6 w-6 ml-3" />
              </Link>
           </Button>
        </div>
      </div>
    </section>
  );
}
