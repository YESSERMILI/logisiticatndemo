
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <footer className="bg-[#0B2A6B] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Background Watermark */}
      <div className="absolute bottom-0 right-0 font-black text-[15vw] text-white/[0.03] pointer-events-none select-none tracking-tighter leading-none translate-y-1/4 uppercase">
        Logistica
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Logo className="h-12 w-auto" />
            <p className={cn(
              "text-white/50 text-sm leading-relaxed max-w-xs",
              isAr && "font-arabic"
            )}>
              {isAr 
                ? "حلول لوجستية متكاملة مصممة خصيصاً للتجارة الإلكترونية في تونس. من التخزين إلى التوصيل، بكل بساطة."
                : "Solution complète de fulfillment e-commerce en Tunisie. De la commande à la livraison, tout simplement."}
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F7931E] hover:text-[#0B2A6B] transition-all duration-300">
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={cn(
              "font-bold text-[#F7931E] uppercase tracking-wider text-xs mb-8",
              isAr && "font-arabic text-sm"
            )}>Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#preparation" className="hover:text-white transition-colors">Fulfillment</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{isAr ? "التخزين الذكي" : "Stockage Intelligent"}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{isAr ? "التوصيل السريع" : "Dernier Kilomètre"}</Link></li>
              <li><Link href="#dashboard" className="hover:text-white transition-colors">SaaS Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={cn(
              "font-bold text-[#F7931E] uppercase tracking-wider text-xs mb-8",
              isAr && "font-arabic text-sm"
            )}>{isAr ? "الشركة" : "Entreprise"}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/40">
              <li><Link href="#" className="hover:text-white transition-colors">{isAr ? "من نحن" : "À propos"}</Link></li>
              <li><Link href="#coverage" className="hover:text-white transition-colors">{t('n6')}</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">{isAr ? "فرص عمل" : "Carrières"}</Link></li>
              <li><Link href="#faq" className="hover:text-white transition-colors">{t('n3')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={cn(
              "font-bold text-[#F7931E] uppercase tracking-wider text-xs mb-8",
              isAr && "font-arabic text-sm"
            )}>Contact</h4>
            <ul className="space-y-5 text-sm font-medium text-white/40">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#F7931E] shrink-0" />
                <span>Tunis, Sousse, Sfax</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#F7931E] shrink-0" />
                <span dir="ltr">+216 99 201 552</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#F7931E] shrink-0" />
                <span>contact@logistica.tn</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Logistica Tunisie. {isAr ? "جميع الحقوق محفوظة" : "Tous droits réservés."}</p>
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
             <p className="flex items-center gap-2 border-l border-white/10 pl-6">
                Fièrement tunisien <span className="text-base grayscale hover:grayscale-0 transition-all cursor-default">🇹🇳</span>
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
