
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const { t, language } = useTranslation();
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-logistics');

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-sky-tint flex items-center">
      {/* Background Decorative Circles */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, -30, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 60, 0] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-48 -right-24 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
      />

      <div className="container px-4 md:px-8 mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left rtl:lg:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-orange-soft text-primary text-sm font-bold mb-6"
          >
            {t('hero_pill')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-7xl font-black text-primary leading-[1.1] mb-6"
          >
            {t('hero_title_1')}<br />
            <span className="text-secondary relative">
              {t('hero_title_2')}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-orange rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-primary/70 mb-10 max-w-xl mx-auto lg:mx-0"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-orange hover:bg-orange/90 text-white rounded-full px-10 h-14 font-bold group shadow-xl shadow-orange/20 w-full sm:w-auto">
              {t('hero_cta_primary')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary rounded-full px-10 h-14 font-bold w-full sm:w-auto" asChild>
              <Link href="#steps">{t('hero_cta_secondary')}</Link>
            </Button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">100k+</span>
              <span className="text-sm text-primary/60">{t('stats_orders')}</span>
            </div>
            <div className="w-px h-10 bg-primary/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">98%</span>
              <span className="text-sm text-primary/60">{t('stats_delivery')}</span>
            </div>
            <div className="w-px h-10 bg-primary/10 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-primary">&lt; 5m</span>
              <span className="text-sm text-primary/60">{t('stats_time')}</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative aspect-square lg:aspect-4/3 w-full"
        >
          {heroImage && (
            <div className="relative w-full h-full rounded-[40px] overflow-hidden card-shadow">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          )}
          
          {/* Floating Micro-animation Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl card-shadow flex items-center gap-4 border border-border"
          >
            <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange">
              <Play className="fill-orange h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-primary/40 uppercase tracking-tighter">Status</p>
              <p className="text-sm font-bold text-primary">Colis en route...</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
