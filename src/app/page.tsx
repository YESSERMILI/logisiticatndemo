
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

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LogisticsSteps />
        <DashboardShowcase />
        <Commitments />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
