
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  const faqs = [
    {
      q: isAr ? "قداش تتكلف الخدمة بالضبط ؟" : "Combien coûte exactement le service ?",
      a: isAr ? "التسعيرة تتبدل حسب قداش تخرج من كولي في الشهر. عنا أثمنة تنافسية تلم كل شي: stockage، تحضير الكولي، والتوصيل. كلمنا توة نعطيوك عرض سعر (Devis) مفصل ومدروس لمشروعك." : "Nos tarifs sont dégressifs en fonction de votre volume mensuel de commandes. Ils incluent le stockage, la préparation et la livraison. Contactez-nous pour obtenir un devis personnalisé."
    },
    {
      q: isAr ? "كيفاش نربط السيت متاعي مع Logistica ؟" : "Comment intégrer mon site avec Logistica ?",
      a: isAr ? "الربط ساهل برشا وعنا Connecteurs حاضرين لـ Shopify و WooCommerce. وإذا عندك منصة خاصة، نوفرولك API REST كاملة باش تربط في فيسع وبأقل مجهود تقني." : "L'intégration est simplifiée grâce à nos connecteurs natifs pour Shopify et WooCommerce. Pour les plateformes sur mesure, nous mettons à votre disposition une API REST complète."
    },
    {
      q: isAr ? "خلاصي (COD) وقتاش يوصلني ؟" : "Quand est-ce que je reçois mes paiements (COD) ?",
      a: isAr ? "خلاصك يوصلك في ظرف J+1، يعني نهار بعد ما يتسلم الكولي للحريف. تنجم تتبع فلوسك مليم بمليم في الداشبورد متاعك في الوقت الحقيقي وبكل شفافية." : "Vos reversements sont effectués à J+1 après la livraison effective du colis. Vous pouvez suivre chaque transaction en temps réel via votre tableau de bord."
    },
    {
      q: isAr ? "كيفاش تعملو مع المرجوعات (Retours) ؟" : "Comment gérez-vous les retours ?",
      a: isAr ? "المرجوعات تتخدم كل يوم. نفحصو السلعة مليح قبل ما نرجعوها للستوك باش نضمنوا سلامتها، وإنتي تتبع الحالة متاعها لحظة بلحظة من حسابك." : "Les retours sont traités quotidiennement. Nous inspectons rigoureusement chaque article avant de le réintégrer au stock, et vous suivez l'état de chaque retour en temps réel."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0B2A6B]">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto border border-white/10"
          >
            <HelpCircle className="text-[#F7931E]" size={40} />
          </motion.div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.3]",
            isAr && "font-arabic"
          )}>
            {t("n3")}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] max-w-xl mx-auto leading-relaxed",
            isAr && "font-arabic"
          )}>
            {isAr ? "كل شي تحب تعرفو على خدماتنا اللوجستية باش تطور بيزنسك وتخدم متهني" : "Tout ce que vous devez savoir sur nos solutions logistiques pour faire décoller votre business."}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AccordionItem value={`item-${idx}`} className="bg-white/5 border border-white/10 rounded-2xl px-6 overflow-hidden hover:bg-white/[0.07] transition-colors border-none">
                <AccordionTrigger className={cn(
                  "text-left font-bold text-white py-6 hover:no-underline text-lg leading-snug",
                  isAr && "text-right font-arabic"
                )}>
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className={cn(
                  "text-[#9FB2DE] pb-6 leading-relaxed text-base",
                  isAr && "text-right font-arabic"
                )}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
