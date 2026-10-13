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

export function FAQ() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const faqs = [
    {
      q: language === 'ar' ? "شحال التكلفة؟" : "Combien ça coûte ?",
      a: language === 'ar' ? "تسعيرة حسب الڤوليم، ابعثلنا ونعطيوك ديڤي مفصّل." : "Tarification flexible selon le volume. Contactez-nous pour un devis personnalisé."
    },
    {
      q: language === 'ar' ? "كيفاش نربط سيتي؟" : "Comment l'intégrer ?",
      a: language === 'ar' ? "API ولا WooCommerce/Shopify plugin, ساهلة." : "Plug-and-play avec WooCommerce, Shopify ou via notre API REST."
    },
    {
      q: language === 'ar' ? "متى ترجعلي فلوس ال COD؟" : "Quand recevrai-je mon COD ?",
      a: language === 'ar' ? "رابروشمان أسبوعي واضح ومضبوط." : "Reversement structuré à J+1 ou selon le cycle convenu."
    },
    {
      q: language === 'ar' ? "تخدمو في ولايتي؟" : "Livrez-vous dans ma ville ?",
      a: language === 'ar' ? "24 ولاية، والمدن الكبرى <24h." : "Nous couvrons les 24 gouvernorats, avec des délais <24h sur les grandes villes."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <HelpCircle className="mx-auto text-orange-500" size={48} />
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 tracking-tight">
            {t("nav_faq")}
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AccordionItem value={`item-${idx}`} className="bg-white border border-gray-100 rounded-2xl px-6">
                <AccordionTrigger className="text-left font-bold text-navy-900 py-6 hover:no-underline hover:text-blue-600">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-6 leading-relaxed">
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