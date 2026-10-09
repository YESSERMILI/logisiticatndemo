
"use client";

import { useTranslation } from "@/hooks/use-translation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FAQ() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const faqs = [1, 2, 3, 4, 5, 6, 7];

  return (
    <section id="faq" className="py-24 bg-sky" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className={isRTL ? "text-right" : "text-left"}>
            <p className="text-orange font-bold uppercase tracking-widest text-sm mb-2">
              {t('faq_eyebrow')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              {t('faq_title')}
            </h2>
            <p className="text-lg text-primary/60 mb-8 max-w-md">
              {t('faq_whatsapp_text')}
            </p>
            <Button className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full h-14 px-8 font-bold">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('faq_whatsapp_btn')}
            </Button>
          </div>

          {/* Right Column (Accordion) */}
          <div className="bg-white p-8 rounded-[32px] card-shadow">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((num) => (
                <AccordionItem key={num} value={`item-${num}`} className="border-b border-primary/5 py-2">
                  <AccordionTrigger className="text-lg font-bold text-primary hover:text-orange text-left rtl:text-right">
                    {t(`faq_q${num}` as any)}
                  </AccordionTrigger>
                  <AccordionContent className="text-primary/60 leading-relaxed pt-2">
                    {t(`faq_a${num}` as any)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
