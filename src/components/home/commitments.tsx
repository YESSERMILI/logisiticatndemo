
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, MapPin, Monitor, Star } from "lucide-react";

export function Commitments() {
  const { t, language } = useTranslation();

  const items = [
    { icon: Zap, title: t('commitment_speed'), desc: t('commitment_speed_desc') },
    { icon: ShieldCheck, title: t('commitment_reliability'), desc: t('commitment_reliability_desc') },
    { icon: MapPin, title: t('commitment_proximity'), desc: t('commitment_proximity_desc') },
    { icon: Monitor, title: t('commitment_digital'), desc: t('commitment_digital_desc') },
    { icon: Star, title: t('commitment_identity'), desc: t('commitment_identity_desc') },
  ];

  return (
    <section id="commitments" className="py-24 bg-surface-container-low" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">{t('nav_commitments')}</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <item.icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
