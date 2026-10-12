"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export function PricingEstimator() {
  const { t } = useTranslation();
  const [volume, setVolume] = useState([50]);
  const [codPercent, setCodPercent] = useState([80]);

  // Indicative formula for the demo
  const estimateMin = Math.floor(volume[0] * 7.5);
  const estimateMax = Math.floor(volume[0] * 12);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-secondary-50 border border-secondary-100 p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Calculator className="w-64 h-64 text-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-12">
              <div>
                <p className="eyebrow">ESTIMATEUR</p>
                <h2 className="text-4xl font-bold text-primary mb-4">Simulez votre coût logistique</h2>
                <p className="text-gray-600 font-medium">Ajustez les curseurs pour obtenir une estimation immédiate de vos frais mensuels.</p>
              </div>

              <div className="space-y-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-black uppercase text-primary tracking-widest">{t('contact_form_volume')}</label>
                    <span className="text-3xl font-bold text-orange-500">{volume[0]} <span className="text-sm">colis/mois</span></span>
                  </div>
                  <Slider 
                    value={volume} 
                    onValueChange={setVolume} 
                    max={2000} 
                    step={50} 
                    className="cursor-pointer"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-sm font-black uppercase text-primary tracking-widest">Part de paiement COD</label>
                    <span className="text-3xl font-bold text-orange-500">{codPercent[0]}<span className="text-sm">%</span></span>
                  </div>
                  <Slider 
                    value={codPercent} 
                    onValueChange={setCodPercent} 
                    max={100} 
                    step={5} 
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-e3 border border-gray-100 text-center">
              <p className="text-sm font-black uppercase text-gray-400 tracking-widest mb-4">Estimation mensuelle</p>
              <div className="text-5xl md:text-6xl font-bold text-primary tracking-tighter mb-4">
                {estimateMin.toLocaleString('fr-FR')} <span className="text-2xl text-gray-300">à</span> {estimateMax.toLocaleString('fr-FR')} <span className="text-3xl font-heading text-orange-500">DT</span>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase italic mb-10">* Estimation indicative basée sur le volume sélectionné</p>
              <Button className="btn-primary w-full h-16 text-lg group">
                Recevoir mon devis détaillé
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
