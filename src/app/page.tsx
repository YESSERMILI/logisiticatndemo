"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { TrustStrip } from "@/components/home/trust-strip";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { FAQ } from "@/components/home/faq";
import { ContactSection } from "@/components/home/contact";
import { Footer } from "@/components/layout/footer";
import { BentoServices } from "@/components/home/services-bento";
import { PricingEstimator } from "@/components/home/pricing-estimator";
import { motion, useScroll, useSpring } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Reveal animation intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-orange-500 origin-left z-[2000]" style={{ scaleX }} />
      
      <Navbar />
      
      <main className="flex-grow" id="main">
        {/* S3. Hero */}
        <Hero />
        
        {/* S4. Trust Strip */}
        <TrustStrip />
        
        {/* S5. Mission (Embedded in Page) */}
        <section className="section-padding bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="reveal">
                <p className="eyebrow">NOTRE MISSION</p>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-900 mb-8 uppercase leading-tight">
                  Libérer les e-commerçants tunisiens de la logistique.
                </h2>
                <p className="text-xl text-gray-600 font-medium mb-10 leading-relaxed">
                  Derrière chaque commande, il y a un colis à préparer, une livraison à suivre, de l'argent à encaisser. Nous prenons tout cela en charge, avec une équipe locale et un outil simple, pour que vous gardiez votre énergie pour votre croissance.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Simple', 'Fiable', 'Fièrement tunisien'].map(pill => (
                    <span key={pill} className="px-6 py-3 bg-blue-50 text-blue-500 rounded-2xl font-black uppercase text-[10px] tracking-widest border border-blue-100">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative reveal" style={{ transitionDelay: '200ms' }}>
                 <div className="bg-blue-50 rounded-[48px] p-12 aspect-square flex items-center justify-center border border-blue-100">
                    <svg viewBox="0 0 400 400" className="w-full h-full max-w-[320px]">
                        <path id="mission-route" d="M50 300 Q100 300 150 200 Q200 100 350 100" fill="none" stroke="#9DB7F5" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 10" />
                        <circle r="30" cx="50" cy="300" fill="#07163F" opacity="0.1" />
                        <circle r="40" cx="200" cy="200" fill="#FF8A1F" className="animate-pulse-slow" opacity="0.1" />
                        <circle r="30" cx="350" cy="100" fill="#07163F" opacity="0.1" />
                        {/* Traveling parcel */}
                        <g>
                          <animateMotion dur="6s" repeatCount="indefinite" path="M50 300 Q100 300 150 200 Q200 100 350 100" />
                          <rect x="-12" y="-12" width="24" height="24" rx="4" fill="#2563EB" />
                          <rect x="-12" y="-2" width="24" height="4" fill="#FF8A1F" />
                        </g>
                    </svg>
                 </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* S7. The 10 logistics steps */}
        <LogisticsSteps />
        
        {/* S8. Services Bento Grid */}
        <BentoServices />
        
        {/* S9. Dashboard Showcase */}
        <DashboardShowcase />

        {/* S13. Pricing Estimator */}
        <PricingEstimator />
        
        {/* S11. Our commitments */}
        <Commitments />

        {/* S12. Geographic Coverage */}
        <section id="couverture" className="section-padding bg-gray-50 text-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto mb-20 reveal">
                <p className="eyebrow">DISTRIBUTION NATIONALE</p>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-8 uppercase">Couverture Géographique</h2>
                <p className="text-lg text-gray-600 font-medium">Nous livrons dans tous les gouvernorats de Tunisie [À CONFIRMER]</p>
              </div>
              <div className="max-w-5xl mx-auto p-12 md:p-20 border-2 border-dashed border-blue-200 rounded-[56px] bg-white shadow-e2 reveal">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="aspect-[3/4] bg-blue-50 rounded-3xl flex items-center justify-center border border-blue-100">
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">Carte interactive en cours d'intégration</p>
                   </div>
                   <div className="space-y-8 text-left">
                      <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 group hover:border-blue-500 transition-all">
                        <p className="text-primary-900 font-heading font-extrabold text-2xl uppercase">Grand Tunis</p>
                        <p className="text-blue-500 font-black uppercase text-[10px] tracking-widest mt-2">Délai : 24h Garanti</p>
                      </div>
                      <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 group hover:border-blue-500 transition-all">
                        <p className="text-primary-900 font-heading font-extrabold text-2xl uppercase">Villes Côtières</p>
                        <p className="text-blue-500 font-black uppercase text-[10px] tracking-widest mt-2">Délai : 48h</p>
                      </div>
                      <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 group hover:border-blue-500 transition-all">
                        <p className="text-primary-900 font-heading font-extrabold text-2xl uppercase">Reste de la Tunisie</p>
                        <p className="text-blue-500 font-black uppercase text-[10px] tracking-widest mt-2">Délai : 72h</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
        </section>
        
        {/* S18. FAQ */}
        <FAQ />
        
        {/* S20. Contact Form */}
        <ContactSection />
      </main>
      
      {/* Floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-[1000] hidden md:block">
        <a 
          href="https://wa.me/21600000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-transform hover:scale-110 active:scale-95 group relative"
        >
          <MessageCircle className="h-8 w-8 text-white fill-white" />
          <div className="absolute right-full mr-4 bg-white px-4 py-2 rounded-xl text-primary-900 font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
            Une question ? Écrivez-nous
          </div>
        </a>
      </div>

      <Footer />
    </div>
  );
}
