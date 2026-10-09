
"use client";

import { Hero } from "@/components/home/hero";
import { LogisticsSteps } from "@/components/home/logistics-steps";
import { DashboardShowcase } from "@/components/home/dashboard-showcase";
import { Commitments } from "@/components/home/commitments";
import { ClosingCTA } from "@/components/home/closing-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
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
