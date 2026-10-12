
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { 
  ShoppingCart, Box, Package, Truck, MapPin, 
  Banknote, RefreshCw, Headphones, LayoutDashboard,
  ArrowRight, Store, PackageOpen, Layers, CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function LogisticsSteps() {
  const { t } = useTranslation();

  const steps = [
    { id: 1, icon: RefreshCw, key: "step_1", phase: "Intégration", time: "J-0" },
    { id: 2, icon: PackageOpen, key: "step_2", phase: "Intégration", time: "Réception" },
    { id: 3, icon: Layers, key: "step_3", phase: "Stockage", time: "Entreposage" },
    { id: 4, icon: ShoppingCart, key: "step_4", phase: "Stockage", time: "Automatique" },
    { id: 5, icon: Package, key: "step_5", phase: "Distribution", time: "< 2h" },
    { id: 6, icon: MapPin, key: "step_6", phase: "Distribution", time: "Tri Hub" },
    { id: 7, icon: Truck, key: "step_7", phase: "Distribution", time: "24h / 48h" },
    { id: 8, icon: Banknote, key: "step_8", phase: "Trésorerie", time: "En espèces" },
    { id: 9, icon: CheckCircle2, key: "step_9", phase: "Trésorerie", time: "J+1" },
    { id: 10, icon: LayoutDashboard, key: "step_10", phase: "Trésorerie", time: "Pilotage" },
  ];

  return (
    <section id="steps" className="py-24 bg-surface-container-lowest">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
          <div className="max-w-2xl space-y-4">
            <span className="eyebrow">Notre Méthodologie</span>
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-on-surface uppercase">Nos 10 étapes logistiques intégrées</h2>
            <p className="text-lg text-on-surface-variant font-medium">Un processus standardisé, automatisé et traçable étape par étape.</p>
          </div>
          <div className="flex flex-wrap gap-2">
             {['Intégration', 'Stockage', 'Distribution', 'Trésorerie'].map((p, i) => (
               <span key={i} className={cn(
                 "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                 i === 2 ? 'bg-secondary-container text-on-secondary shadow-sm' : 'bg-surface-container text-on-surface-variant'
               )}>{p}</span>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-[24px] bg-surface-container-low hover:bg-surface-container transition-all group border border-transparent hover:border-secondary-container/20 cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-xl bg-primary text-on-primary font-bold text-xs flex items-center justify-center group-hover:bg-secondary transition-colors">{step.id < 10 ? `0${step.id}` : step.id}</span>
                <span className="text-[10px] font-black text-secondary tracking-widest uppercase">{step.time}</span>
              </div>
              <step.icon className="h-7 w-7 text-secondary-container mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h4 className="text-on-surface font-bold uppercase tracking-tight text-lg mb-2">{t(`${step.key}_title` as any)}</h4>
              <p className="text-on-surface-variant text-sm font-medium leading-relaxed">{t(`${step.key}_desc` as any)}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center reveal">
           <Button className="btn-primary h-16 px-12 text-lg shadow-orange rounded-full bg-secondary-container text-on-secondary font-bold">
              Démarrer mon intégration
              <ArrowRight className="h-6 w-6 ml-2" />
           </Button>
        </div>
      </div>
    </section>
  );
}
