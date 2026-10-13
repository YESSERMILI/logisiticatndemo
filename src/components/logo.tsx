"use client";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
      >
        {/* Left Facet - Navy */}
        <path d="M50 80L15 60V25L50 45V80Z" fill="#0B2A6B" />
        {/* Top Facet - Blue */}
        <path d="M50 45L15 25L50 5L85 25L50 45Z" fill="#1F6FDB" />
        {/* Inner Facet - Orange */}
        <path d="M50 80L85 60V25L50 45V80Z" fill="#F7931E" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-heading font-black text-navy-900 text-lg md:text-xl tracking-tighter uppercase">
          Logistica
        </span>
        <span className="font-sans font-bold text-[8px] md:text-[10px] text-gray-500 tracking-[0.2em] uppercase">
          Tunisie
        </span>
      </div>
    </div>
  );
}