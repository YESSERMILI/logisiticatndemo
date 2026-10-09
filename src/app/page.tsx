
"use client";

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
