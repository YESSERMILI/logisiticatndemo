"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow" id="main">
        <Hero />
        
        <RevealSection id="etapes">
          <LogisticsSteps />
        </RevealSection>
        
        <RevealSection id="tableau-de-bord">
          <DashboardShowcase />
        </RevealSection>
        
        <RevealSection id="services">
          <Commitments />
        </RevealSection>

        <RevealSection id="couverture">
          <section className="py-24 bg-white text-center">
            <div className="container">
              <h2 className="text-4xl font-black mb-8">Couverture Géographique</h2>
              <div className="p-12 border-2 border-dashed border-blue-100 rounded-[28px] bg-blue-50/30">
                <p className="text-slate text-lg italic">Section Carte de la Tunisie [À CONFIRMER]</p>
                <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 italic">
                  À renseigner
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
