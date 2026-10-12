
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Package, Truck, UserCheck, PackageOpen } from "lucide-react";

export function HeroIllustration() {
  const [activeNode, setActiveNode] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!svgRef.current) return;
      const time = (Date.now() % 8000) / 8000;
      
      if (time < 0.25) setActiveNode(0);
      else if (time < 0.5) setActiveNode(1);
      else if (time < 0.75) setActiveNode(2);
      else setActiveNode(3);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { label: "COMMANDE", x: "10.7%", y: "77.3%", icon: Package },
    { label: "PRÉPARATION", x: "30.4%", y: "63.6%", icon: PackageOpen },
    { label: "EXPÉDITION", x: "69.6%", y: "38.2%", icon: Truck },
    { label: "LIVRAISON", x: "89.3%", y: "22.7%", icon: UserCheck },
  ];

  return (
    <div className="relative w-full aspect-[560/440] bg-[#07163F] rounded-[40px] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 560 440">
           <g className="animate-float-slow" style={{ opacity: 0.6 }}>
             <path d="M40 80 Q60 60 80 80 T120 80" fill="white" />
             <path d="M400 120 Q420 100 440 120 T480 120" fill="white" />
           </g>
           <path d="M0 440 L0 380 L40 380 L40 340 L80 340 L80 360 L140 360 L140 320 L200 320 L200 350 L260 350 L260 310 L340 310 L340 350 L420 350 L420 330 L500 330 L500 380 L560 380 L560 440 Z" fill="#131b2e" />
           <circle cx="280" cy="220" r="150" fill="white" fillOpacity="0.05" />
        </svg>
      </div>

      <svg 
        ref={svgRef}
        viewBox="0 0 560 440" 
        className="w-full h-full"
        role="img" 
        aria-label="Un camion Logistica suit la route de la commande à la livraison"
      >
        <path 
          id="route" 
          d="M60 340 C160 340 180 220 280 220 C380 220 400 120 500 100"
          fill="none" 
          stroke="#9DB7F5" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeDasharray="2 11"
          opacity="0.3"
        />

        <path 
          d="M60 340 C160 340 180 220 280 220 C380 220 400 120 500 100" 
          pathLength="1"
          fill="none" 
          stroke="#fd761a" 
          strokeWidth="4.5" 
          strokeLinecap="round" 
          strokeDasharray="1 1" 
          strokeDashoffset="1"
        >
          <animate 
            attributeName="stroke-dashoffset" 
            values="1;0;0" 
            keyTimes="0;.96;1" 
            dur="8s" 
            repeatCount="indefinite"
          />
        </path>

        <g id="truck">
          <animateMotion 
            dur="8s" 
            repeatCount="indefinite" 
            rotate="auto"
          >
            <mpath href="#route"/>
          </animateMotion>
          
          <rect x="-24" y="-18" width="34" height="22" rx="4" fill="#2563EB"/>
          <rect x="-24" y="-8" width="34" height="3" fill="#fd761a"/>
          <path d="M10 -14 h12 l8 10 v8 h-20z" fill="#0B2A7A"/>
          <path d="M14 -10 h6 l5 6 h-11z" fill="#BFD4FF"/>
          
          <g transform="translate(-10 6)">
            <g className="animate-spin-slow">
              <circle r="6" fill="#07163F" stroke="white" strokeWidth="1"/>
              <path d="M-4 0 h8 M0 -4 v8" stroke="white" strokeWidth="0.5" />
            </g>
          </g>
          <g transform="translate(18 6)">
            <g className="animate-spin-slow">
              <circle r="6" fill="#07163F" stroke="white" strokeWidth="1"/>
              <path d="M-4 0 h8 M0 -4 v8" stroke="white" strokeWidth="0.5" />
            </g>
          </g>
        </g>
      </svg>

      {nodes.map((node, i) => (
        <div 
          key={i}
          className={cn(
            "absolute transform -translate-x-1/2 transition-all duration-500",
            activeNode === i ? "-translate-y-[135%] scale-105 opacity-100 z-20" : "-translate-y-[125%] scale-95 opacity-60 z-10"
          )}
          style={{ left: node.x, top: node.y }}
        >
          <div className={cn(
            "glass-card px-4 py-2.5 rounded-2xl text-[10px] font-black text-center min-w-[110px] border-2 bg-white/10 backdrop-blur-md",
            activeNode === i ? "border-secondary shadow-orange" : "border-white/10"
          )}>
            <div className={cn(
              "w-2 h-2 rounded-full mx-auto mb-1",
              activeNode === i ? "bg-secondary animate-pulse" : "bg-white/20"
            )} />
            <span className="text-white uppercase tracking-widest">{node.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
