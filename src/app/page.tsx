"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { WhyUs } from "@/components/home/why-us";
import { FAQ } from "@/components/home/faq";
import { ClosingCTA } from "@/components/home/closing-cta";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { useLanguage } from "@/contexts/language-context";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();

  useEffect(() => {
    // Initial Loader duration
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-navy-900 flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="relative mb-8">
              <Logo className="brightness-0 invert h-16 w-auto" />
              <motion.div 
                className="absolute -bottom-4 left-0 h-1 bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "linear" }}
              />
            </div>
            <p className="text-blue-100/40 font-bold text-xs uppercase tracking-[0.3em] font-sans">
              {language === 'ar' ? "نحضّرولك التجربة..." : "Préparation de l'expérience..."}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen selection:bg-orange-500/30">
        <Navbar />
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <WhyUs />
        <FAQ />
        <ClosingCTA />
      </main>
    </>
  );
}