"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'white' }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image 
        src="https://i.postimg.cc/P5sfzcz0/png-1.png" 
        alt="Logistica Logo" 
        width={175} 
        height={175}
        className={cn("h-10 w-auto transition-all", variant === 'white' && "brightness-0 invert")}
      />
      <b className={cn(
        "font-sans font-extrabold tracking-widest text-xl transition-colors", 
        variant === 'white' ? "text-white" : "text-navy-900"
      )}>
        LOGISTICA
      </b>
    </div>
  );
}

export function AppName() {
  return <Logo />;
}
