"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { BentoServices } from "@/components/home/services-bento";
import { PricingEstimator } from "@/components/home/pricing-estimator";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow" id="main">
        <Hero />
        
        <TrustStrip />
        
        <RevealSection id="services">
          <BentoServices />
        </RevealSection>
        
        <RevealSection id="etapes">
          <LogisticsSteps />
        </RevealSection>
        
        <RevealSection id="tableau-de-bord">
          <DashboardShowcase />
        </RevealSection>

        <RevealSection id="pricing">
          <PricingEstimator />
        </RevealSection>
        
        <RevealSection id="commitments">
          <Commitments />
        </RevealSection>

        <RevealSection id="couverture">
          <section className="section-padding bg-gray-50 text-center">
            <div className="container mx-auto px-4">
              <p className="eyebrow">DISTRIBUTION NATIONALE</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">Couverture Géographique</h2>
              <div className="max-w-4xl mx-auto p-12 border-2 border-dashed border-secondary-100 rounded-[28px] bg-white shadow-e1">
                <p className="text-gray-600 text-lg italic">Carte interactive de la Tunisie en cours d'intégration [À CONFIRMER]</p>
                <div className="mt-8 grid md:grid-cols-3 gap-6 text-left">
                  <div className="p-6 bg-secondary-50 rounded-xl">
                    <p className="text-primary font-bold text-lg">Grand Tunis</p>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Délai : 24h</p>
                  </div>
                  <div className="p-6 bg-secondary-50 rounded-xl">
                    <p className="text-primary font-bold text-lg">Villes Côtières</p>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Délai : 48h</p>
                  </div>
                  <div className="p-6 bg-secondary-50 rounded-xl">
                    <p className="text-primary font-bold text-lg">Reste de la Tunisie</p>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Délai : 72h</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>
        
        <RevealSection id="faq">
          <FAQ />
        </RevealSection>
        
        <RevealSection id="contact">
          <ContactSection />
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}

function RevealSection({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
