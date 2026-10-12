"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Instagram, Linkedin, MessageCircle, Globe, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="bg-white/5 rounded-[40px] p-8 md:p-16 mb-24 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-md text-center lg:text-left rtl:lg:text-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('footer_newsletter_title')}</h3>
            <p className="text-gray-400 font-medium">Rejoignez +1000 e-commerçants abonnés.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4">
            <Input 
              placeholder="Votre email" 
              className="h-14 bg-white/5 border-white/20 rounded-full px-8 md:w-80 focus:ring-orange-500"
            />
            <Button className="btn-primary h-14 shadow-none">
              S'abonner
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr,repeat(4,1fr)] gap-12 pb-24">
          <div className="space-y-8">
            <Logo variant="white" className="h-10" />
            <p className="text-xl text-gray-400 font-medium max-w-sm italic">
              « {t('footer_tagline')} »
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all border border-white/10">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.key}>
              <h4 className="text-[12px] font-black uppercase tracking-widest text-secondary-500 mb-8">
                {t(`footer_col_${col.key}` as any)}
              </h4>
              <ul className="space-y-6">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 font-bold hover:text-orange-500 transition-colors">
                      {t(`footer_link_${link}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-sm text-gray-500 font-bold">
            <p>© 2026 Logistica Tunisie. {t('footer_rights')}</p>
            <div className="flex items-center gap-3 text-white">
              <span className="text-xl">🇹🇳</span>
              {t('footer_tunisian')}
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 bg-white/5 rounded-full border border-white/10">
            <Globe className="h-4 w-4 text-gray-500 ml-3 mr-1" />
            {(['fr', 'ar', 'en'] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => setLanguage(lang)} 
                className={cn(
                  "px-4 py-2 rounded-full text-[10px] font-black uppercase transition-all",
                  language === lang ? "bg-orange-500 text-white" : "text-gray-500 hover:text-white"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Giant Background Wordmark */}
        <div className="relative h-20 md:h-40 overflow-hidden pointer-events-none mt-20">
          <span className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 text-[15vw] font-black text-white/[0.03] select-none tracking-tighter">
            LOGISTICA
          </span>
        </div>
      </div>
    </footer>
  );
}
