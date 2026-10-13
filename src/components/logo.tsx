"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Official Logo Component for Logistica Tunisie.
 * Uses the provided high-quality PNG.
 * Handles automatic color inversion for dark backgrounds.
 */
export function Logo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'white' }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image 
        src="https://i.postimg.cc/P5sfzcz0/png-1.png" 
        alt="Logistica Tunisie" 
        width={180} 
        height={60}
        priority
        className={cn(
          "h-9 w-auto transition-all duration-300", 
          variant === 'white' && "brightness-0 invert",
          "group-hover:scale-105"
        )}
      />
    </div>
  );
}

export function AppName() {
  return <Logo />;
}
