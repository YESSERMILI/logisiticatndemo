
"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { ClosingCTA } from "@/components/home/closing-cta";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <LogisticsSteps />
        <DashboardShowcase />
        <Commitments />
        <ClosingCTA />
      </main>

      <Footer />
    </div>
  );
}
