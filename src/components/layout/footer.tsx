
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-32 pb-16 relative overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Giant wordmark background */}
      <div className="absolute bottom-0 right-0 font-heading font-black text-[12vw] text-white/5 pointer-events-none select-none tracking-tighter leading-none translate-y-1/4">
        LOGISTICA
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter band */}
        <div className="p-8 md:p-12 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-2xl font-heading font-black uppercase tracking-wide">Conseils Logistique</h3>
            <p className="text-white/60">Optimisez votre business, recevez nos mises à jour réseau.</p>
          </div>
          <div className="flex w-full lg:w-auto gap-4">
            <input 
              type="email" 
              placeholder="votre@email.com" 
              className="flex-grow lg:w-80 h-16 bg-white/10 rounded-2xl px-6 outline-none border-2 border-transparent focus:border-secondary transition-all"
            />
            <Button className="h-16 px-10 bg-secondary hover:bg-secondary-container rounded-2xl font-heading font-black uppercase text-sm tracking-widest">
              S'inscrire
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-32">
          <div className="lg:col-span-2 space-y-10">
            <Logo className="h-14 w-auto brightness-0 invert" />
            <p className="text-2xl font-heading font-black text-white/80 max-w-sm leading-snug">
              {t('footer_tagline')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all duration-300">
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-heading font-black text-secondary uppercase tracking-[0.2em] text-xs">Solutions</h4>
            <ul className="space-y-4 text-lg font-heading font-black uppercase text-white/40">
              <li><Link href="#solutions" className="hover:text-white transition-colors">{t('service_stock')}</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">{t('service_prep')}</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">{t('service_cod')}</Link></li>
              <li><Link href="#solutions" className="hover:text-white transition-colors">{t('service_track')}</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-heading font-black text-secondary uppercase tracking-[0.2em] text-xs">Entreprise</h4>
            <ul className="space-y-4 text-lg font-heading font-black uppercase text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#commitments" className="hover:text-white transition-colors">{t('nav_commitments')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-heading font-black text-secondary uppercase tracking-[0.2em] text-xs">Support</h4>
            <ul className="space-y-4 text-lg font-heading font-black uppercase text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">Aide / FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Docs API</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Espace Client</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-heading font-black text-white/20 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Logistica Tunisie. Tous droits réservés.</p>
          <div className="flex gap-12">
            <Link href="#" className="hover:text-white transition-colors">Légal</Link>
            <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="#" className="hover:text-white transition-colors">CGV</Link>
          </div>
          <p className="flex items-center gap-3">
             Fièrement tunisien <span className="text-base">🇹🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
