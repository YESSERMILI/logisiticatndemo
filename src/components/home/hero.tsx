
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, language } = useTranslation();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-secondary/20 text-secondary font-bold text-xs uppercase tracking-widest mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Logistique E-commerce · Tunisie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tight"
            >
              {language === 'ar' ? (
                <>من الكوموند حتى للتوصيل، <span className="text-secondary underline decoration-secondary/30 decoration-8 underline-offset-8">كل شي منظّم</span>.</>
              ) : (
                <>Votre logistique e-commerce, de la commande à la <span className="text-secondary relative">livraison<svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40" preserveAspectRatio="none" viewBox="0 0 300 12"><path d="M2 9C75 3 225 3 298 9" stroke="currentColor" strokeWidth="8" strokeLinecap="round" fill="none"/></svg></span>.</>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              {t('hero_subtitle')} Réception, stockage, expédition et reversement COD : nous gérons tout pour vous.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full h-16 px-10 text-lg font-bold shadow-xl shadow-secondary/20">
                {t('hero_cta')}
                <ArrowRight className={cn("ml-2 h-5 w-5", language === 'ar' && "rotate-180 mr-2 ml-0")} />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg border-2">
                {t('nav_workflow')}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm font-bold text-primary/60">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Dépôt sécurisé
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-primary/60">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                Reversement COD J+1
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="relative aspect-square"
            >
              {/* Illustration interactrice */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full glassmorphic rounded-[3rem] p-8 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white">
                        <Package />
                      </div>
                      <div>
                        <p className="font-bold text-sm">LT-84920</p>
                        <p className="text-xs text-muted-foreground">En préparation</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-bold text-xs">DEMO</span>
                  </div>
                  
                  <div className="space-y-6 flex-grow">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-3 w-full bg-primary/5 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-secondary"
                          initial={{ width: 0 }}
                          animate={{ width: i === 1 ? "100%" : i === 2 ? "60%" : "0%" }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Truck className="h-24 w-24 text-primary/10" />
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glassmorphic px-6 py-4 rounded-2xl shadow-2xl"
              >
                <p className="text-2xl font-black text-secondary">98%</p>
                <p className="text-xs font-bold text-muted-foreground">Taux de succès</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
