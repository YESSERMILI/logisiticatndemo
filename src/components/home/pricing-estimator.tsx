"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function PricingEstimator() {
  const { t } = useTranslation();
  const [volume, setVolume] = useState([350]);
  const [weight, setWeight] = useState([1.5]);
  const [price, setPrice] = useState("7.800");
  const [hours, setHours] = useState(42);

  useEffect(() => {
    // Pricing calculation logic
    let basePrice = 8.5;
    const v = volume[0];
    const w = weight[0];

    if (v >= 200) basePrice = 7.8;
    if (v >= 1000) basePrice = 6.9;
    if (v >= 3000) basePrice = 6.2;

    const finalPrice = (basePrice + (w > 2 ? (w - 2) * 0.4 : 0)).toFixed(3);
    setPrice(finalPrice);
    setHours(Math.round(v * 0.12));
  }, [volume, weight]);

  return (
    <section id="simulateur" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <span className="eyebrow">Simulateur & Rentabilité</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-6">Calculez vos économies mensuelles</h2>
          <p className="text-lg text-on-surface-variant font-medium">Estimez précisément le coût par colis tout inclus (stockage, préparation, livraison et COD).</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 p-8 md:p-12 rounded-[32px] bg-surface-container-lowest shadow-e2 space-y-12 reveal">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black uppercase tracking-widest text-on-surface">Volume mensuel de colis</label>
                <span className="text-2xl font-black text-secondary tabular-nums">{volume[0]} colis/mois</span>
              </div>
              <Slider 
                value={volume} 
                onValueChange={setVolume} 
                min={50}
                max={5000} 
                step={50} 
                className="cursor-pointer"
              />
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black uppercase tracking-widest text-on-surface">Poids moyen par colis</label>
                <span className="text-2xl font-black text-on-surface tabular-nums">{weight[0].toFixed(1)} kg</span>
              </div>
              <Slider 
                value={weight} 
                onValueChange={setWeight} 
                max={15} 
                min={0.2}
                step={0.1} 
                className="cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
                {['Mode', 'Fragile', 'Tech'].map((type, i) => (
                  <button key={type} className={`p-4 rounded-2xl text-xs font-black uppercase tracking-widest border-2 transition-all ${i === 0 ? 'border-secondary-container bg-surface-container-low' : 'border-transparent bg-surface-container-low hover:border-outline'}`}>
                    {type}
                  </button>
                ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-8 md:p-12 rounded-[40px] bg-primary text-on-primary shadow-2xl space-y-10 reveal overflow-hidden relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-secondary-container/10 rounded-full blur-[80px] -mr-20 -mt-20"></div>
            
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-fixed">Estimation Logistica</span>
              <span className="text-[10px] font-black bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest">[Simulé]</span>
            </div>

            <div className="space-y-2 relative z-10">
              <p className="text-[11px] font-black uppercase text-primary-fixed-dim tracking-[0.2em]">Tarif estimé tout inclus par colis</p>
              <div className="flex items-baseline gap-2">
                <span className="text-6xl md:text-7xl font-heading font-extrabold text-secondary-fixed tracking-tighter tabular-nums">{price}</span>
                <span className="text-2xl font-bold text-white uppercase">DT HT</span>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10 relative z-10">
               {[
                 { l: "Temps économisé par mois", v: `${hours} heures`, c: "text-white" },
                 { l: "Baisse du taux de retour", v: "- 45 %", c: "text-emerald-400" },
                 { l: "Délai versement COD", v: "J+1 Garanti", c: "text-secondary-fixed" }
               ].map((stat, i) => (
                 <div key={i} className="flex justify-between items-center text-sm font-medium">
                    <span className="text-primary-fixed-dim">{stat.l}</span>
                    <span className={`font-bold ${stat.c}`}>{stat.v}</span>
                 </div>
               ))}
            </div>

            <Button className="btn-primary w-full h-20 text-xl group shadow-orange relative z-10">
              Recevoir mon devis détaillé
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
