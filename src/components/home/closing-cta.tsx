"use client";

import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { motion } from "framer-motion";
import { MessageCircle, Send, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export function ClosingCTA() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <footer className="bg-navy-900 pt-24 pb-12 relative overflow-hidden">
      {/* Background Motif */}
      <div className="absolute bottom-0 right-0 font-black text-white/5 text-[15vw] pointer-events-none select-none tracking-widest leading-none translate-y-1/3">
        LOGISTICA
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-16 mb-24 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              {t("footer_tagline")}
            </h2>
            <p className="text-blue-100/60 text-lg max-w-2xl mx-auto">
              {t("hero_sub")}
            </p>
          </motion.div>

          <Button className="btn-orange h-16 px-12 text-xl rounded-full shadow-2xl shadow-orange-500/20 group">
            {t("footer_cta")}
            <MessageCircle className={language === 'ar' ? "mr-3" : "ml-3"} />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo className="brightness-0 invert h-10 w-auto" />
            <p className="text-blue-100/40 text-sm leading-relaxed max-w-xs">
              Solution complète de fulfillment e-commerce en Tunisie. De la commande à la livraison, tout simplement.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-orange-500 rounded-full" />
              {t("nav_services")}
            </h4>
            <ul className="space-y-4 text-blue-100/60 text-sm">
              <li>{t("service_1_title")}</li>
              <li>{t("service_2_title")}</li>
              <li>{t("service_7_title")}</li>
              <li>{t("service_10_title")}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-orange-500 rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4 text-blue-100/60 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-orange-500" />
                Tunis, Sousse, Sfax
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-orange-500" />
                +216 71 000 000
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-orange-500" />
                contact@logistica.tn
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-orange-500 rounded-full" />
              {t("nav_faq")}
            </h4>
            <ul className="space-y-4 text-blue-100/60 text-sm">
              <li>{language === 'ar' ? "شحال التكلفة؟" : "Combien ça coûte ?"}</li>
              <li>{language === 'ar' ? "كيفاش نربط سيتي؟" : "Intégration ?"}</li>
              <li>{language === 'ar' ? "الريتور كيفاش؟" : "Retours ?"}</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/20 text-xs font-bold uppercase tracking-widest">
            {t("footer_copyright")}
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-orange-500 hover:text-white transition-all">
              <Send size={18} />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-orange-500 hover:text-white transition-all">
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/21600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-16 h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={32} fill="white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse" />
      </motion.a>
    </footer>
  );
}