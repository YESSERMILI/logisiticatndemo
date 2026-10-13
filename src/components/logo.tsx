"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg 
        viewBox="0 0 40 40" 
        className="h-full aspect-square"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 10C5 7.23858 7.23858 5 10 5H30C32.7614 5 35 7.23858 35 10V30C35 32.7614 32.7614 35 30 35H10C7.23858 35 5 32.7614 5 30V10Z" fill="#07163F"/>
        <path d="M12 15H28V25H12V15Z" fill="#2563EB"/>
        <path d="M12 18H28V22H12V18Z" fill="#FF8A1F"/>
        <path d="M10 10V30" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black text-[#07163F] tracking-tighter uppercase">Logistica</span>
        <span className="text-[0.6rem] font-bold text-muted-foreground tracking-[0.3em] uppercase opacity-60">Tunisie</span>
      </div>
    </div>
  );
}