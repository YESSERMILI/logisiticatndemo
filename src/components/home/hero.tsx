
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CheckCircle2, Radar } from "lucide-react";
import { motion } from "framer-motion";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  return (
    <section className="relative pt-44 pb-20 overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="uppercase font-bold tracking-wider text-secondary">Logistique E-commerce · Tunisie</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-on-surface leading-[1.1] tracking-tight uppercase"
            >
              Votre logistique <br className="hidden md:block" />
              e-commerce, de la commande à la <br className="hidden md:block" />
              <span className="relative inline-block text-on-surface">
                livraison.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 300 12">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="5" strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed max-w-xl"
            >
              Stockage ultra-sécurisé, préparation sous 2h, expédition express sur les 24 gouvernorats et versement COD à J+1.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button className="btn-primary text-lg px-10 h-16 group shadow-orange">
                Demander un devis immédiat
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary h-16 px-10 text-lg border-primary">
                Voir nos 10 étapes
              </Button>
            </motion.div>

            {/* Tracking Widget (Interactive Glass Box) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl"
            >
              <div className="p-6 rounded-3xl bg-surface-container-lowest shadow-e3 space-y-4 border border-surface-container-high/60">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-on-surface text-sm flex items-center gap-2 uppercase tracking-widest">
                    <Radar className="h-4 w-4 text-secondary" />
                    Module de Traçabilité en Direct
                  </span>
                  <span className="text-[10px] font-black bg-surface-container px-2.5 py-1 rounded text-outline uppercase tracking-widest">
                    [Simulation Live]
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-outline" />
                    <input 
                      type="text" 
                      placeholder="Numéro de bordereau (ex: TN-84920-LOG)" 
                      className="w-full pl-11 pr-4 py-3.5 bg-surface-container-low rounded-xl text-sm font-bold text-on-surface placeholder-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary-container transition-all"
                    />
                  </div>
                  <Button className="bg-primary hover:bg-on-surface text-on-primary rounded-xl h-auto py-3.5 px-8 font-black uppercase text-xs tracking-widest shadow-sm">
                    Suivre
                  </Button>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-black uppercase text-outline flex items-center gap-2 tracking-widest">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                DÉJÀ UTILISÉ PAR +50 BOUTIQUES [À CONFIRMER]
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-primary rounded-[48px] p-1 shadow-2xl relative group overflow-hidden">
               <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
