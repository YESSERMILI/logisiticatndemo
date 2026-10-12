
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X, ArrowRight, Package, Box, Truck, Banknote, RotateCcw, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/logo";

export function Navbar() {
  const { t, language } = useTranslation();
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const isRTL = language === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { title: t('service_stock'), icon: Box, desc: "Stockage sécurisé et inventaire." },
    { title: t('service_prep'), icon: Package, desc: "Picking et packing professionnel." },
    { title: t('service_shipping'), icon: Truck, desc: "Livraison rapide partout en Tunisie." },
    { title: t('service_cod'), icon: Banknote, desc: "Gestion rigoureuse de vos encaissements." },
    { title: t('service_returns'), icon: RotateCcw, desc: "Traitement rapide des retours." },
    { title: t('service_whatsapp'), icon: Headphones, desc: "Support dédié 6j/7." },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[1001] bg-primary text-white text-[11px] font-bold h-10 flex items-center justify-center tracking-wider overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          {t('announcement_text')}
        </motion.p>
      </div>

      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-[1000] transition-all duration-300",
          scrolled 
            ? "bg-white/80 backdrop-blur-xl h-16 border-b border-gray-200 shadow-e1" 
            : "bg-transparent h-20"
        )}
      >
        <div className="container mx-auto h-full px-4 flex items-center justify-between gap-8">
          <Link href="/" className="shrink-0">
            <Logo className={cn("h-8 transition-all", scrolled ? "scale-90" : "scale-100")} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-[14px] font-semibold text-primary hover:text-secondary-500 transition-colors">
                {t('nav_services')}
                <ChevronDown className={cn("h-4 w-4 transition-transform", activeMenu === 'services' && "rotate-180")} />
              </button>

              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-[640px] bg-white rounded-2xl shadow-e3 border border-gray-200 p-8 mt-1 overflow-hidden"
                  >
                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                      {services.map((s, i) => (
                        <Link 
                          key={i} 
                          href="#" 
                          className="group/item flex items-start gap-4 p-3 rounded-xl hover:bg-secondary-50 transition-all"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-primary group-hover/item:bg-white group-hover/item:text-secondary-500 transition-colors">
                            <s.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[14px] font-bold text-primary">{s.title}</p>
                            <p className="text-[12px] text-gray-600 mt-1">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#etapes" className="px-4 py-2 text-[14px] font-semibold text-primary hover:text-secondary-500 transition-colors">
              {t('nav_how_it_works')}
            </Link>
            <Link href="#dashboard" className="px-4 py-2 text-[14px] font-semibold text-primary hover:text-secondary-500 transition-colors">
              {t('nav_dashboard')}
            </Link>
            <Link href="#couverture" className="px-4 py-2 text-[14px] font-semibold text-primary hover:text-secondary-500 transition-colors">
              {t('nav_coverage')}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
              {(['fr', 'ar', 'en'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase transition-all",
                    language === lang ? "bg-white text-primary shadow-e1" : "text-gray-400 hover:text-primary"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Link href="#tracking" className="text-[14px] font-bold text-primary hover:underline underline-offset-4">
              {t('nav_track')}
            </Link>
            <Button className="btn-primary h-11 px-6 shadow-none">
              {t('nav_quote')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Burger */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-primary"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[1100] bg-primary text-white p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <Logo variant="white" className="h-8" />
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-8 w-8" />
                </button>
              </div>
              
              <nav className="flex flex-col gap-8 text-2xl font-bold">
                <Link href="#" onClick={() => setIsOpen(false)}>{t('nav_services')}</Link>
                <Link href="#etapes" onClick={() => setIsOpen(false)}>{t('nav_how_it_works')}</Link>
                <Link href="#dashboard" onClick={() => setIsOpen(false)}>{t('nav_dashboard')}</Link>
                <Link href="#couverture" onClick={() => setIsOpen(false)}>{t('nav_coverage')}</Link>
                <Link href="#faq" onClick={() => setIsOpen(false)}>{t('nav_faq')}</Link>
              </nav>

              <div className="mt-auto pt-8 border-t border-white/10 flex flex-col gap-6">
                <Button className="btn-primary w-full h-14 text-lg">
                  {t('nav_quote')}
                </Button>
                <div className="flex justify-center gap-6">
                  {(['fr', 'ar', 'en'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={cn(
                        "text-sm font-bold uppercase",
                        language === lang ? "text-orange-500" : "text-white/60"
                      )}
                    >
                      {lang === 'fr' ? 'Français' : lang === 'ar' ? 'العربية' : 'English'}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
