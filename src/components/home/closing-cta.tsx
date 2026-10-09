
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { MessageCircle } from "lucide-react";

export function ClosingCTA() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container px-4 md:px-8 mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8"
        >
          {t('cta_closing_title')}
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-12 h-16 text-lg font-black shadow-2xl shadow-orange/30 group">
            {t('cta_closing_button')}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-3"
            >
              🚀
            </motion.div>
          </Button>
        </motion.div>

        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a 
            href="https://wa.me/21600000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform hover:scale-110 active:scale-95"
          >
            <MessageCircle className="h-8 w-8 text-white fill-white" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
