
"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            {logo && (
              <div className="relative h-12 w-48 brightness-0 invert">
                <Image
                  src={logo.imageUrl}
                  alt="Logistica Tunisie"
                  fill
                  className="object-contain object-left"
                />
              </div>
            )}
            <p className="text-lg text-white/60 italic max-w-sm">
              « {t('footer_tagline')} »
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">{t('nav_steps')}</h3>
            <ul className="space-y-4 text-sm text-white/40 font-bold uppercase tracking-tighter">
              <li><Link href="#steps" className="hover:text-orange transition-colors">Logistique</Link></li>
              <li><Link href="#steps" className="hover:text-orange transition-colors">Entreposage</Link></li>
              <li><Link href="#steps" className="hover:text-orange transition-colors">Transport</Link></li>
              <li><Link href="#steps" className="hover:text-orange transition-colors">Technologie</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/40 font-bold uppercase tracking-tighter">
              <li className="flex items-center gap-2">
                <span className="text-red-600">🇹🇳</span> {t('commitments_tunisian')}
              </li>
              <li>Tunis, Tunisie</li>
              <li>contact@logistica.tn</li>
              <li>+216 71 000 000</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-white/20 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Logistica Tunisie. {t('footer_rights')}</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
            <Link href="/terms" className="hover:text-white transition-colors">CGU</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
