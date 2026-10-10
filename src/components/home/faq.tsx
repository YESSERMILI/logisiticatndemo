
"use client";

import { useTranslation } from "@/hooks/use-translation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FAQ() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const faqs = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="faq" className="py-24 bg-[#EEF4FF]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column (Sticky) */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <HelpCircle className="h-8 w-8 text-secondary" />
              </div>
              <p className="text-orange font-bold uppercase tracking-[0.2em] text-sm mb-4">
                {t('faq_eyebrow')}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight uppercase">
                {t('faq_title')}
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-md leading-relaxed font-medium">
                {t('faq_whatsapp_text')}
              </p>
              <Button 
                size="lg"
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full h-[60px] px-10 font-bold shadow-xl shadow-[#25D366]/20 transition-all hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="mr-3 rtl:ml-3 rtl:mr-0 h-6 w-6" />
                {t('faq_whatsapp_btn')}
              </Button>
            </motion.div>
          </div>

          {/* Right Column (Accordion) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl shadow-primary/5 border border-white"
          >
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-4">
              {faqs.map((num) => (
                <AccordionItem 
                  key={num} 
                  value={`item-${num}`} 
                  className="border-b border-primary/5 last:border-0 pb-2"
                >
                  <AccordionTrigger className="text-lg font-bold text-primary hover:text-secondary text-left rtl:text-right transition-all no-underline hover:no-underline py-6 [&[data-state=open]>svg]:rotate-180">
                    {t(`faq_q${num}` as any)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-[16px] pb-6 font-medium">
                    {t(`faq_a${num}` as any)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((num) => ({
              "@type": "Question",
              "name": t(`faq_q${num}` as any),
              "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faq_a${num}` as any)
              }
            }))
          })
        }}
      />
    </section>
  );
}
