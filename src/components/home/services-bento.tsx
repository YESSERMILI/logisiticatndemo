
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Box, Package, Truck, Banknote, RotateCcw, Headphones, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoServices() {
  const { t, language } = useTranslation();

  const services = [
    { 
      title: language === 'ar' ? "ارتاح وركّز في بيوعك" : "Fulfillment Complet", 
      icon: Zap, 
      size: "md:col-span-2 md:row-span-2", 
      color: "bg-[#F7931E] text-[#0B2A6B]", 
      desc: language === 'ar' ? "Logistica تهز عليك حمل الستوك والتحضير والتوصيل باش إنتي تخدم على تكبير البيزنس متاعك." : "Déléguez toute votre logistique et concentrez-vous uniquement sur vos ventes et votre croissance." 
    },
    { 
      title: language === 'ar' ? "تحضير الكوموند" : "Préparation sous 2h", 
      icon: Package, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "تغليف احترافي وسريع يخرّج الكولي متاعك في وقت قياسي." : "Picking rigoureux et emballage pro avant expédition immédiate." 
    },
    { 
      title: language === 'ar' ? "توصيل لـ 24 ولاية" : "Expédition 24h/48h", 
      icon: Truck, 
      size: "md:col-span-1 md:row-span-2", 
      color: "bg-[#1F6FDB] text-white", 
      desc: language === 'ar' ? "شبكة توصيل تغطي تونس كاملة من بنزرت لبنقردان في أقل من 48 ساعة." : "Livraison express sur tout le territoire tunisien avec suivi temps réel." 
    },
    { 
      title: language === 'ar' ? "خلاصك J+1 مضمون" : "COD Garanti J+1", 
      icon: Banknote, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "رجوع فلوسك (COD) في وقتها وبكل دقة ومن غير تكسير راس." : "Versement automatisé de vos encaissements dès le lendemain." 
    },
    { 
      title: language === 'ar' ? "ريتور ساهل" : "Retours & Échanges", 
      icon: RotateCcw, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "إدارة المرجوعات والتبديل بكل سلاسة باش تحافظ على ثقة كليوناتك." : "Gestion simplifiée des retours pour garantir la satisfaction client." 
    },
    { 
      title: language === 'ar' ? "دعم واتساب" : "Support Dédié", 
      icon: Headphones, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "إكاونت مانجر معاك خطوة بخطوة باش يجاوب على كل استفساراتك." : "Un Account Manager dédié disponible sur WhatsApp pour vous accompagner." 
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0B2A6B]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">{t('n1')}</span>
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-white mt-4 mb-6 uppercase tracking-tight",
            language === 'ar' && "font-arabic"
          )}>
            {language === 'ar' ? "كل ما يحتاجه مشروعك" : "Tout ce dont votre boutique a besoin"}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] text-lg font-medium",
            language === 'ar' && "font-arabic"
          )}>
            {language === 'ar' ? "حلول لوجستية متكاملة مصممة خصيصاً للتجارة الإلكترونية في تونس." : "Des services modulaires ou clé en main créés spécifiquement pour le commerce électronique tunisien."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "rounded-[32px] p-8 flex flex-col justify-between group cursor-default transition-all duration-500 border border-white/5 relative overflow-hidden",
                s.size,
                s.color,
                s.color.includes('bg-white/5') ? "hover:bg-white/10" : "shadow-2xl"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 transition-transform group-hover:scale-110",
                s.color.includes('bg-[#F7931E]') ? "bg-[#0B2A6B]/10 text-[#0B2A6B]" : "bg-white/10 text-white"
              )}>
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              
              <div className="relative z-10 mt-12">
                <h3 className={cn(
                  "text-xl font-bold mb-3 uppercase tracking-tight leading-tight",
                  language === 'ar' && "font-arabic text-2xl"
                )}>{s.title}</h3>
                <p className={cn(
                  "text-sm font-medium leading-relaxed mb-6 opacity-80",
                  language === 'ar' && "font-arabic"
                )}>{s.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity">
                  {language === 'ar' ? "اكتشف المزيد" : "En savoir plus"} <ArrowRight className={cn("h-3.5 w-3.5", language === 'ar' && "rotate-180")} />
                </div>
              </div>

              {/* Decorative background icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.05] transition-transform group-hover:scale-125 duration-700 pointer-events-none">
                <s.icon className="w-48 h-48" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
