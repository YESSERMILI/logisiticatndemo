
"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { Commitments } from "@/components/home/commitments";
import { BentoServices } from "@/components/home/services-bento";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { PricingEstimator } from "@/components/home/pricing-estimator";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Testimonials } from "@/components/home/testimonials";
import { motion, useScroll, useSpring } from "framer-motion";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-surface overflow-x-hidden">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-secondary-container origin-left z-[2000]" 
        style={{ scaleX }} 
      />
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Hero />
        <TrustStrip />
        
        <section className="py-24 bg-surface-container-low/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <span className="eyebrow">Notre Mission</span>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-on-surface mb-6 uppercase">Libérer les e-commerçants de la logistique</h2>
              <p className="text-lg text-on-surface-variant font-medium leading-relaxed">
                Derrière chaque commande, il y a un colis à préparer, une livraison à suivre, de l'argent à encaisser. Nous prenons tout cela en charge pour que vous gardiez votre énergie pour votre marque.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {['Simple', 'Fiable', 'Fièrement Tunisien'].map(pill => (
                  <span key={pill} className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface font-bold text-xs shadow-sm">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LogisticsSteps />
        <BentoServices />
        <DashboardShowcase />
        <PricingEstimator />
        <Commitments />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
