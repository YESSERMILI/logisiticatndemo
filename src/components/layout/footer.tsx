"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Instagram, Linkedin, MessageCircle, Globe, Send, ArrowUp, MapPin } from "lucide-react";
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
    { key: "services", links: ["stock", "prep", "exp", "cod", "returns"] },
    { key: "company", links: ["about", "coverage"] },
    { key: "help", links: ["faq", "contact", "tracking"] },
    { key: "legal", links: ["privacy", "terms", "legal"] }
  ];

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 rounded-[48px] p-8 md:p-16 mb-24 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 reveal">
          <div className="max-w-xl text-center lg:text-left rtl:lg:text-right">
            <span className="text-secondary-fixed font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Conseils Logistique</span>
            <h3 className="text-3xl font-heading font-extrabold mb-4 uppercase leading-tight">Optimisez vos flux e-commerce</h3>
            <p className="text-primary-fixed-dim font-medium">Rejoignez +1000 boutiques déjà abonnées à notre newsletter.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4">
            <Input 
              placeholder="votre@email.pro" 
              className="h-16 bg-white/5 border-white/10 rounded-2xl px-8 md:w-80 focus:ring-secondary transition-all"
            />
            <Button className="btn-primary h-16 px-10 shadow-none">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr,repeat(4,1fr)] gap-16 pb-20">
          <div className="space-y-8">
            <Logo variant="white" className="h-10" />
            <p className="text-lg text-primary-fixed-dim font-medium max-w-sm italic leading-relaxed">
              « {t('footer_tagline')} »
            </p>
            <div className="space-y-2 text-sm text-primary-fixed-dim">
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary-fixed" /> Tunis: Z.I. Charguia II</div>
                <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary-fixed" /> Sfax: Route de Gabès Km 3.5</div>
            </div>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all border border-white/5">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary-fixed mb-8">
                {t(`footer_col_${col.key}` as any)}
              </h4>
              <ul className="space-y-5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-primary-fixed-dim font-bold hover:text-white transition-colors text-sm">
                      {t(`footer_link_${link}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-primary-fixed-dim">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p>© 2026 Logistica Tunisie. {t('footer_rights')}</p>
            <div className="flex items-center gap-2 text-white">
              🇹🇳 {t('footer_tunisian')}
            </div>
          </div>

          <div className="flex items-center gap-4 p-1 bg-white/5 rounded-full border border-white/5">
            {(['fr', 'ar', 'en'] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang)} 
                className={cn(
                  "px-4 py-2 rounded-full transition-all",
                  language === lang ? "bg-secondary text-white shadow-orange" : "text-primary-fixed-dim hover:text-white"
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-secondary transition-all hover:bg-secondary group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Giant Watermark */}
        <div className="relative h-24 md:h-48 overflow-hidden pointer-events-none mt-16 opacity-5">
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-heading font-extrabold text-white select-none tracking-tighter leading-none">
            LOGISTICA
          </span>
        </div>
      </div>
    </footer>
  );
}
