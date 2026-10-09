
"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { Testimonials } from "@/components/home/testimonials";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        <RevealSection>
          <LogisticsSteps />
        </RevealSection>
        
        <RevealSection>
          <DashboardShowcase />
        </RevealSection>
        
        <RevealSection>
          <Commitments />
        </RevealSection>
        
        <RevealSection>
          <Testimonials />
        </RevealSection>
        
        <RevealSection>
          <FAQ />
        </RevealSection>
        
        <RevealSection>
          <ContactSection />
        </RevealSection>
      </main>
      <Footer />
    </div>
  );
}

function RevealSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
