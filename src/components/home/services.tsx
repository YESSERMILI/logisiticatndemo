
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { 
  Warehouse, 
  PackageSearch, 
  Box, 
  Truck, 
  Navigation, 
  Wallet, 
  RotateCcw 
} from "lucide-react";

export function Services() {
  const { t, language } = useTranslation();

  const services = [
    { icon: Warehouse, title: t('service_stock'), color: "bg-blue-50 text-blue-600" },
    { icon: PackageSearch, title: t('service_prep'), color: "bg-orange-50 text-orange-600" },
    { icon: Box, title: t('service_pack'), color: "bg-emerald-50 text-emerald-600" },
    { icon: Truck, title: t('service_ship'), color: "bg-indigo-50 text-indigo-600" },
    { icon: Navigation, title: t('service_track'), color: "bg-purple-50 text-purple-600" },
    { icon: Wallet, title: t('service_cod'), color: "bg-amber-50 text-amber-600" },
    { icon: RotateCcw, title: t('service_returns'), color: "bg-rose-50 text-red-600" },
  ];

  return (
    <section id="solutions" className="py-24 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary mb-6"
          >
            {language === 'ar' ? "خدماتنا اللوجستية" : "Nos domaines d'intervention"}
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            Une approche structurée pour couvrir chaque étape de votre chaîne logistique.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                {service.title}
              </h3>
            </motion.div>
          ))}
          
          <div className="col-span-2 md:col-span-3 lg:col-span-1 p-8 rounded-[2rem] bg-primary text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{language === 'ar' ? "أكثر من مجرد توصيل" : "Plus qu'un simple livreur."}</h3>
            <p className="text-white/60 text-sm">
              Logistica est votre partenaire stratégique en Tunisie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
