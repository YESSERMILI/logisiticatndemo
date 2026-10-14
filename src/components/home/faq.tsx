
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
      q: isAr ? "شحال تتكلف الخدمة بالظبط ؟" : "Comment est calculée la tarification ?",
      a: isAr ? "التسعيرة تعتمد على حجم الطلبات الشهرية (Volume). نوفر أثمنة تنافسية تشمل التخزين، التحضير والتوصيل. اتصل بنا للحصول على عرض سعر مفصل." : "Notre tarification est dégressive selon votre volume mensuel. Elle inclut le stockage, le picking, l'emballage et la livraison avec recouvrement."
    },
    {
      q: isAr ? "كيفاش نربط المتجر متاعي مع Logistica ؟" : "Comment intégrer mon site e-commerce ?",
      a: isAr ? "نوفر ربط تقني سهل (Plug-and-play) مع Shopify و WooCommerce، بالإضافة إلى API مفتوحة للمنصات الخاصة." : "Nous proposons des connecteurs natifs pour Shopify et WooCommerce, ainsi qu'une API REST complète pour les solutions sur mesure."
    },
    {
      q: isAr ? "وقتاش يرجعلي الكاش (COD) متاعي ؟" : "Quels sont les délais de versement du COD ?",
      a: isAr ? "نحن نضمن تحويل مستحقاتك في ظرف J+1 بعد تأكيد التوصيل، مع متابعة دقيقة لكل مليم في الداشبورد الخاص بك." : "Nous effectuons les reversements à J+1 après livraison. Vous pouvez suivre l'état de votre trésorerie en temps réel sur votre dashboard."
    },
    {
      q: isAr ? "كيفاش يتم التعامل مع المرجوعات (Retours) ؟" : "Comment gérez-vous les retours et échanges ?",
      a: isAr ? "المرجوعات تتم إدارتها بسرعة وبشكل آلي. يتم إرجاع المنتج للمخزن بعد فحصه، وتحديث الحالة فوراً في حسابك." : "Les retours sont traités quotidiennement. Chaque produit est inspecté avant d'être réintégré au stock ou renvoyé, selon vos instructions."
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
            "text-4xl md:text-5xl font-black text-white tracking-tight",
            isAr && "font-arabic"
          )}>
            {t("nav_faq")}
          </h2>
          <p className="text-[#9FB2DE] max-w-xl mx-auto">
            {isAr ? "كل ما تريد معرفته عن خدماتنا اللوجستية" : "Toutes les réponses à vos questions techniques et opérationnelles."}
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
                  "text-left font-bold text-white py-6 hover:no-underline text-lg",
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
