"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Box, Package, Truck, Banknote, RotateCcw, Headphones, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoServices() {
  const { t } = useTranslation();

  const services = [
    { title: "Stockage Multi-Hubs", icon: Box, size: "md:col-span-2 md:row-span-2", color: "bg-surface-container-lowest text-on-surface", desc: "Nos entrepôts modernes de Tunis, Sousse et Sfax sécurisent vos marchandises 24h/24." },
    { title: "Préparation sous 2h", icon: Package, size: "md:col-span-1 md:row-span-1", color: "bg-surface-container-lowest text-on-surface", desc: "Picking rigoureux et emballage pro avant expédition." },
    { title: "Expédition 24h/48h", icon: Truck, size: "md:col-span-1 md:row-span-2", color: "bg-primary text-on-primary", desc: "Livraison express sur les 24 gouvernorats." },
    { title: "COD Garanti J+1", icon: Banknote, size: "md:col-span-1 md:row-span-1", color: "bg-secondary-container text-on-secondary shadow-orange", desc: "Versement automatisé de vos encaissements." },
    { title: "Retours & Échanges", icon: RotateCcw, size: "md:col-span-1 md:row-span-1", color: "bg-surface-container-lowest text-on-surface", desc: "Gestion sans friction pour vos clients." },
    { title: "Support WhatsApp", icon: Headphones, size: "md:col-span-1 md:row-span-1", color: "bg-surface-container-lowest text-on-surface", desc: "Un Account Manager dédié à votre écoute." },
  ];

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="eyebrow">Catalogue d'Offres</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 uppercase">Tout ce dont votre boutique a besoin</h2>
          <p className="text-lg text-on-surface-variant font-medium">Des services modulaires ou clé en main créés spécifiquement pour le commerce électronique tunisien.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-[32px] p-8 flex flex-col justify-between group cursor-default transition-all duration-500",
                s.size,
                s.color,
                "shadow-e1 border border-surface-container-high/60 relative overflow-hidden"
              )}
            >
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 transition-transform group-hover:scale-110", s.color.includes('primary') ? 'bg-white/10' : 'bg-surface-container text-secondary')}>
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              
              <div className="relative z-10 mt-12">
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight leading-tight">{s.title}</h3>
                <p className="text-sm opacity-80 font-medium leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
                  En savoir plus <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>

              {/* Decorative background icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] transition-transform group-hover:scale-125 duration-700 pointer-events-none">
                <s.icon className="w-48 h-48" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
