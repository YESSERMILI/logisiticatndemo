"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PricingEstimator() {
  const { t } = useTranslation();
  const [volume, setVolume] = useState([150]);
  const [codPercent, setCodPercent] = useState([85]);

  // Indicative formula for Logistica V3
  const baseRate = 7.5;
  const codRate = 0.015; // 1.5% COD fee logic
  const estimateMin = Math.floor(volume[0] * baseRate);
  const estimateMax = Math.floor(volume[0] * (baseRate + 4));

  return (
    <section id="tarifs" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-secondary-50 border border-secondary-100 p-8 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Calculator className="w-80 h-80 text-primary-900" />
          </div>

          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-20 items-center relative z-10">
            <div className="space-y-12">
              <div className="reveal">
                <p className="eyebrow">ESTIMATEUR LIVE</p>
                <h2 className="text-4xl font-heading font-extrabold text-primary-900 mb-6 uppercase">{t('pricing_title')}</h2>
                <p className="text-gray-600 font-medium text-lg">{t('pricing_purpose')}</p>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-black uppercase text-primary-900 tracking-widest">{t('pricing_orders')}</label>
                    <span className="text-4xl font-heading font-extrabold text-orange-500 tabular-nums">
                      {volume[0]} <span className="text-sm font-bold text-gray-400">/MOIS</span>
                    </span>
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
                  <div className="flex justify-between items-end">
                    <label className="text-xs font-black uppercase text-primary-900 tracking-widest">{t('pricing_cod_share')}</label>
                    <span className="text-4xl font-heading font-extrabold text-orange-500 tabular-nums">{codPercent[0]}%</span>
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

            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-e3 border border-gray-100 text-center relative reveal">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-900 text-white text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em]">
                ESTIMATION INDICATIVE
              </div>
              
              <p className="text-sm font-black uppercase text-gray-400 tracking-widest mb-6">{t('pricing_result')}</p>
              
              <div className="text-6xl md:text-7xl font-heading font-extrabold text-primary-900 tracking-tighter mb-6 tabular-nums">
                {estimateMin.toLocaleString('fr-FR')} <span className="text-3xl text-gray-200">à</span> {estimateMax.toLocaleString('fr-FR')}
                <span className="text-3xl font-bold text-orange-500 ml-2">DT</span>
              </div>
              
              <p className="text-[11px] font-bold text-gray-400 uppercase italic mb-12">
                * Basé sur un poids moyen de 2kg par colis
              </p>
              
              <Button className="btn-primary w-full h-20 text-xl group shadow-orange">
                {t('pricing_cta')}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
