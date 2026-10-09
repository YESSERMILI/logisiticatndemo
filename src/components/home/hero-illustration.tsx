
"use client";

import React from "react";
import { useLanguage } from "@/contexts/language-context";

export function HeroIllustration() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#EEF4FF]">
      <svg
        viewBox="0 0 1440 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <title>Logistica Tunisie - Illustration Animée</title>
        <desc>Illustration montrant le flux logistique avec arches, colis et ligne de flux.</desc>
        
        <g transform={isRTL ? "scale(-1, 1) translate(-1440, 0)" : ""}>
          {/* Atmosphere: Breathing Halo */}
          <circle cx="1150" cy="220" r="180" fill="#DCE9FF">
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.05;1"
              dur="6s"
              repeatCount="indefinite"
              additive="sum"
              keyTimes="0;0.5;1"
            />
          </circle>

          {/* Clouds */}
          <g opacity="0.6">
            <path d="M150 60 Q175 40 200 60 T250 60 T275 80 T200 80 T150 60" fill="white">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="1440 0" dur="70s" repeatCount="indefinite" />
            </path>
            <path d="M900 40 Q925 20 950 40 T1000 40 T1025 60 T950 60 T900 40" fill="white">
              <animateTransform attributeName="transform" type="translate" from="0 0" to="1440 0" dur="80s" repeatCount="indefinite" />
            </path>
          </g>
          
          {/* Twinkling Dots */}
          <circle cx="400" cy="100" r="2" fill="#1F6FDB" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="150" r="2" fill="#1F6FDB" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite" />
          </circle>

          {/* Base Line */}
          <line x1="0" y1="368" x2="1440" y2="368" stroke="#F7941D" strokeWidth="16" strokeLinecap="round" />

          {/* Arches (Gateway Shapes) - x placement based on 1440 width */}
          {/* Small Arch */}
          <g transform="translate(750, 368) scale(0.6) translate(-100, -240)" opacity="0.55">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="8" fill="#F7941D">
              <animate attributeName="r" values="8;14;8" dur="3.3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Medium Arch */}
          <g transform="translate(950, 368) scale(0.85) translate(-100, -240)" opacity="0.8">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="8" fill="#F7941D">
              <animate attributeName="r" values="8;14;8" dur="3.3s" begin="1.1s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Large Arch */}
          <g transform="translate(1200, 368) scale(1.2) translate(-100, -240)">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="8" fill="#F7941D">
              <animate attributeName="r" values="8;14;8" dur="3.3s" begin="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Destination Pin */}
            <g transform="translate(100, -45)">
              <animateTransform attributeName="transform" type="translate" values="0,0; 0,-7; 0,0" dur="3s" repeatCount="indefinite" />
              <path d="M0 0 C-12 -18 -18 -24 -18 -36 A18 18 0 1 1 18 -36 C18 -24 12 -18 0 0Z" fill="#F7941D" />
              <circle cx="0" cy="-36" r="6" fill="white" />
            </g>
          </g>

          {/* Flow Line */}
          <path d="M50 300 Q400 50 800 250 T1350 150" stroke="#0C2A6B" strokeWidth="3" strokeDasharray="1 10" strokeLinecap="round" opacity="0.28" fill="none" />
          <circle r="8" fill="#F7941D">
            <animateMotion path="M50 300 Q400 50 800 250 T1350 150" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Parcels */}
          {[0, 3.66, 7.33].map((delay, i) => (
            <g key={i}>
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-100 320"
                to="1540 320"
                dur="11s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <g>
                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="2s" repeatCount="indefinite" />
                <rect width="56" height="48" rx="4" fill="#1F6FDB" />
                <rect x="0" y="18" width="56" height="12" fill="#F7941D" />
              </g>
            </g>
          ))}

          {/* Delivered Badge */}
          <g transform="translate(1380, 200)">
            <animate attributeName="opacity" values="0;1;1;0" dur="5.5s" repeatCount="indefinite" />
            <circle r="30" fill="#1F6FDB" />
            <path d="M-12 0 L-4 8 L12 -8" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>
        </g>

        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              svg * {
                animation: none !important;
                transition: none !important;
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
}
