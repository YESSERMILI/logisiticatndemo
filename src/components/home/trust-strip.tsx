"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function TrustStrip() {
  const { t } = useTranslation();

  const stats = [
    { label: t('trust_orders'), value: "50,000+", suffix: "" },
    { label: t('trust_success'), value: "98", suffix: "%" },
    { label: t('trust_coverage'), value: "24", suffix: "/24" },
    { label: t('trust_speed'), value: "< 2", suffix: "h" },
  ];

  return (
    <div className="bg-white border-y border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <p className="text-[12px] font-black uppercase tracking-widest text-gray-400">
              {t('trust_title')}
            </p>
            <div className="flex gap-12 overflow-hidden relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              <motion.div 
                className="flex gap-12 shrink-0"
                animate={{ x: [0, -100] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {/* Mock logos */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center font-bold text-gray-400">
                    LOGO {i}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center lg:text-left">
                <p className="text-3xl md:text-4xl font-bold text-primary tracking-tighter">
                  {stat.value}<span className="text-orange-500">{stat.suffix}</span>
                </p>
                <p className="text-xs font-bold text-gray-400 uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}