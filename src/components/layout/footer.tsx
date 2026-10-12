
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  const { t, language } = useTranslation();

  return (
    <footer className="bg-white border-t border-primary/5 pt-20 pb-10" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Logo className="h-12 w-auto mb-6" />
            <p className="text-lg font-semibold text-primary max-w-sm mb-8">
              {t('footer_tagline')}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="#solutions" className="hover:text-secondary">{t('service_stock')}</Link></li>
              <li><Link href="#solutions" className="hover:text-secondary">{t('service_prep')}</Link></li>
              <li><Link href="#solutions" className="hover:text-secondary">{t('service_cod')}</Link></li>
              <li><Link href="#solutions" className="hover:text-secondary">{t('service_track')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Entreprise</h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground">
              <li><Link href="#" className="hover:text-secondary">À propos</Link></li>
              <li><Link href="#commitments" className="hover:text-secondary">{t('nav_commitments')}</Link></li>
              <li><Link href="#" className="hover:text-secondary">Carrières</Link></li>
              <li><Link href="#" className="hover:text-secondary">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Logistica Tunisie. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#">Légal</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
