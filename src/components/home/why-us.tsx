"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { Zap, Shield, MapPin, Smartphone, Star, BarChart3 } from "lucide-react";

export function WhyUs() {
  const { t } = useTranslation();

  const values = [
    { icon: Zap, title: t("value_1"), desc: t("value_1_desc") },
    { icon: Shield, title: t("value_2"), desc: t("value_2_desc") },
    { icon: MapPin, title: t("value_3"), desc: t("value_3_desc") },
    { icon: Smartphone, title: t("value_4"), desc: t("value_4_desc") },
    { icon: Star, title: t("value_5"), desc: t("value_5_desc") },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight leading-tight">
                {t("why_us_title")}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                مبادئ تنظيم الخدمة كما يقدّمها تعريف Logistica Tunisie، من غير أرقام أو وعود موش مؤكّدة.
              </p>
            </div>

            <div className="grid gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-blue-100/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <val.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 text-lg">{val.title}</h3>
                    <p className="text-sm text-gray-500">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-navy-900 rounded-[32px] p-8 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="px-3 py-1 rounded-full bg-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                  Logistica Portal v3.5
                </div>
              </div>

              <div className="flex-grow space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Livraisons</p>
                    <p className="text-3xl font-black text-white">2,840</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Revenus COD</p>
                    <p className="text-3xl font-black text-orange-500">14.2k DT</p>
                  </div>
                </div>
                
                <div className="h-40 w-full bg-white/5 rounded-2xl border border-white/10 p-4 flex items-end gap-2">
                  {[40, 70, 45, 90, 65, 80, 55, 95].map((h, idx) => (
                    <motion.div
                      key={idx}
                      className="flex-1 bg-blue-600 rounded-t-sm"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: idx * 0.05, duration: 1 }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/20">
                <BarChart3 size={16} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Dashboard SaaS - Preview</span>
              </div>
            </div>
            
            {/* Pulsing Dots for Map effect */}
            <div className="absolute top-1/4 right-[20%] w-3 h-3 bg-orange-500 rounded-full animate-ping" />
            <div className="absolute bottom-1/3 left-[15%] w-2 h-2 bg-blue-500 rounded-full animate-ping" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}