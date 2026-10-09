
"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { Facebook, Instagram, Linkedin, MessageCircle, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

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
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <Logo variant="white" />
            </Link>
            <p className="text-lg text-white/50 max-w-sm italic">
              « {t('footer_tagline')} »
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange hover:border-orange transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          {columns.map((col) => (
            <div key={col.key}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">
                {t(`footer_col_${col.key}` as any)}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link 
                      href={link === 'contact' ? '#contact' : link === 'faq' ? '#faq' : '#'} 
                      className="text-sm font-medium text-white/40 hover:text-orange transition-colors"
                    >
                      {t(`footer_link_${link}` as any)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/30 font-medium">
            <p>© 2026 Logistica Tunisie. {t('footer_rights')}</p>
            <div className="flex items-center gap-2 text-white/60">
              <span className="text-red-500">🇹🇳</span>
              {t('footer_tunisian')}
              <div className="flex gap-1 ml-1">
                <div className="w-2 h-2 rounded-full bg-red-600" />
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-4 bg-white/5 rounded-full p-1 border border-white/10">
            <Globe className="h-4 w-4 text-white/40 ml-3" />
            <button 
              onClick={() => setLanguage('fr')} 
              className={cn("px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all", language === 'fr' ? "bg-orange text-primary" : "text-white/40 hover:text-white")}
            >
              FR
            </button>
            <button 
              onClick={() => setLanguage('ar')} 
              className={cn("px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all", language === 'ar' ? "bg-orange text-primary" : "text-white/40 hover:text-white")}
            >
              AR
            </button>
            <button 
              onClick={() => setLanguage('en' as any)} 
              className={cn("px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-all", language === 'en' ? "bg-orange text-primary" : "text-white/40 hover:text-white")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
