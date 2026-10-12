"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Instagram, Linkedin, MessageCircle, Globe, Send, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function Footer() {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();
  const isRTL = language === "ar";

  const columns = [
    {
      key: "services",
      links: ["stock", "prep", "exp", "cod", "returns"]
    },
    {
      key: "company",
      links: ["about", "coverage"]
    },
    {
      key: "help",
      links: ["faq", "contact", "tracking"]
    },
    {
      key: "legal",
      links: ["privacy", "terms", "legal"]
    }
  ];

  return (
    <footer className="bg-primary-900 text-white pt-32 pb-12 overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 rounded-[48px] p-8 md:p-20 mb-32 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-16 reveal">
          <div className="max-w-xl text-center lg:text-left rtl:lg:text-right">
            <p className="text-orange-500 font-black uppercase tracking-[0.2em] text-xs mb-4">{t('footer_newsletter')}</p>
            <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-6 uppercase leading-tight">Recevez nos conseils logistique pour e-commerçants</h3>
            <p className="text-gray-400 font-medium text-lg">Rejoignez +1000 boutiques en ligne déjà abonnées.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4 group">
            <Input 
              placeholder="Votre email professionnel" 
              className="h-16 bg-white/5 border-white/20 rounded-full px-8 md:w-96 focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
            <Button className="btn-primary h-16 px-10 shadow-none">
              S'abonner
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr,repeat(4,1fr)] gap-16 pb-24">
          <div className="space-y-10">
            <Logo variant="white" className="h-10" />
            <p className="text-xl text-gray-400 font-medium max-w-sm italic leading-relaxed">
              « {t('footer_tagline')} »
            </p>
            <div className="flex gap-5">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all border border-white/10 group">
                  <Icon className="h-6 w-6 transition-transform group-hover:rotate-6" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-orange-500 mb-10">
                {t(`footer_col_${col.key}` as any)}
              </h4>
              <ul className="space-y-6">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 font-bold hover:text-white transition-colors flex items-center group">
                      <span className="w-0 h-0.5 bg-orange-500 transition-all group-hover:w-3 mr-0 group-hover:mr-2" />
                      {t(`footer_link_${link}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col md:flex-row items-center gap-10 text-sm text-gray-500 font-black uppercase tracking-widest">
            <p>© 2026 Logistica Tunisie. {t('footer_rights')}</p>
            <div className="flex items-center gap-4 text-white">
              <span className="text-2xl">🇹🇳</span>
              {t('footer_tunisian')}
            </div>
          </div>

          <div className="flex items-center gap-3 p-1.5 bg-white/5 rounded-full border border-white/10">
            <Globe className="h-4 w-4 text-gray-500 ml-4 mr-2" />
            {(['fr', 'ar', 'en'] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang)} 
                className={cn(
                  "px-5 py-2.5 rounded-full text-[10px] font-black uppercase transition-all tracking-widest",
                  language === lang ? "bg-orange-500 text-white shadow-orange" : "text-gray-500 hover:text-white"
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center hover:border-orange-500 transition-all hover:bg-orange-500 group"
          >
            <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Giant Background Wordmark */}
        <div className="relative h-28 md:h-56 overflow-hidden pointer-events-none mt-24 opacity-10">
          <motion.span 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[18vw] font-heading font-extrabold text-white select-none tracking-tighter"
          >
            LOGISTICA
          </motion.span>
        </div>
      </div>

      {/* Decorative route line across footer */}
      <div className="absolute top-0 left-0 w-full h-1 overflow-hidden opacity-20">
        <div className="w-[200%] h-full bg-route-pattern animate-marquee" />
      </div>
    </footer>
  );
}
