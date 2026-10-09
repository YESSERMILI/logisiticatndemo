"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export function Navbar() {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {logo && (
            <div className="relative h-10 w-32">
              <Image
                src={logo.imageUrl}
                alt="Logistica Tunisie"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
        </Link>
        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">Nos Services</Link>
          <Link href="#engagements" className="text-sm font-medium transition-colors hover:text-primary">Nos Engagements</Link>
          <Button className="bg-primary hover:bg-primary/90">Espace Client</Button>
        </div>
      </div>
    </nav>
  );
}