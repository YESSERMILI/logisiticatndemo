"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-[#0B2A6B] text-white pt-24 pb-12 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="absolute bottom-0 right-0 font-black text-[12vw] text-white/5 pointer-events-none select-none tracking-tighter leading-none translate-y-1/4">
        LOGISTICA
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Logo variant="white" />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Solution complète de fulfillment e-commerce en Tunisie. Logistica Tunisie est votre partenaire de croissance digitale.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#1F6FDB] transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-[#F7931E] uppercase tracking-[0.2em] text-[10px] mb-8">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#services" className="hover:text-white transition-colors">{t('t1')}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{t('t2')}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{t('t7')}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{t('t10')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#F7931E] uppercase tracking-[0.2em] text-[10px] mb-8">Entreprise</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#how" className="hover:text-white transition-colors">{t('n0')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link href="#cta" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#F7931E] uppercase tracking-[0.2em] text-[10px] mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Documentation API</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Espace Client</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mentions Légales</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Logistica Tunisie. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
             Fièrement tunisien <span className="text-base">🇹🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
