"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroIllustration() {
  const [activeNode, setActiveNode] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!svgRef.current) return;
      const time = (svgRef.current.getCurrentTime() % 8) / 8;
      
      if (time < 0.25) setActiveNode(0);
      else if (time < 0.5) setActiveNode(1);
      else if (time < 0.75) setActiveNode(2);
      else setActiveNode(3);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { label: "COMMANDE", x: "10.7%", y: "77.3%" },
    { label: "PRÉPARATION", x: "30.4%", y: "63.6%" },
    { label: "EXPÉDITION", x: "69.6%", y: "38.2%" },
    { label: "LIVRAISON", x: "89.3%", y: "22.7%" },
  ];

  return (
    <div className="relative w-full aspect-[560/440]">
      {/* Visual background decor */}
      <div className="absolute inset-0 bg-route-pattern opacity-10 rounded-3xl" />
      
      <svg 
        ref={svgRef}
        viewBox="0 0 560 440" 
        className="w-full h-full drop-shadow-2xl"
        role="img" 
        aria-label="Un camion Logistica suit la route de la commande à la livraison"
      >
        {/* Sky / City Silhouette Decor */}
        <g opacity="0.1">
          <path d="M0 380 h560 v60 h-560z" fill="#07163F" />
          <path d="M50 380 v-40 h30 v40z M120 380 v-60 h40 v60z M300 380 v-30 h50 v30z M450 380 v-50 h40 v50z" fill="#07163F" />
        </g>

        {/* Dotted Route */}
        <path 
          id="route" 
          d="M60 340 C160 340 180 220 280 220 C380 220 400 120 500 100"
          fill="none" 
          stroke="#9DB7F5" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeDasharray="2 11"
        />

        {/* Orange Progress Line */}
        <path 
          d="M60 340 C160 340 180 220 280 220 C380 220 400 120 500 100" 
          pathLength="1"
          fill="none" 
          stroke="#FF8A1F" 
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

        {/* Truck Animation */}
        <g id="truck">
          <animateMotion 
            dur="8s" 
            repeatCount="indefinite" 
            rotate="auto"
          >
            <mpath href="#route"/>
          </animateMotion>
          
          {/* Truck Body */}
          <rect x="-24" y="-18" width="30" height="21" rx="3" fill="#2563EB"/>
          <rect x="-24" y="-9" width="30" height="3.5" fill="#FF8A1F"/>
          <path d="M8 -12 h10 l7 8 v7 h-17z" fill="#0B2A7A"/>
          <path d="M12 -9 h5 l4 5 h-9z" fill="#BFD4FF"/>
          
          {/* Wheels */}
          <g transform="translate(-12 6)">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".7s" repeatCount="indefinite"/>
              <circle r="5" fill="#07163F"/>
              <circle r="2" fill="#fff"/>
            </g>
          </g>
          <g transform="translate(14 6)">
            <g>
              <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur=".7s" repeatCount="indefinite"/>
              <circle r="5" fill="#07163F"/>
              <circle r="2" fill="#fff"/>
            </g>
          </g>
        </g>
      </svg>

      {/* Overlay Cards */}
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
            "glass-panel px-4 py-2 rounded-xl text-[10px] font-black text-center min-w-[96px]",
            activeNode === i ? "border-orange-500 shadow-orange" : "border-white/20"
          )}>
            <div className={cn(
              "w-1.5 h-1.5 rounded-full mx-auto mb-1",
              activeNode === i ? "bg-orange-500 animate-pulse" : "bg-primary-900/20"
            )} />
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}
