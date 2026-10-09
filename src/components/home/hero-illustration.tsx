
"use client";

import React from "react";
import { useLanguage } from "@/contexts/language-context";

export function HeroIllustration() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[40px] bg-[#EEF4FF] card-shadow">
      {/* Desktop Version (1440x420 aspect ratio simulated) */}
      <svg
        viewBox="0 0 1440 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
        className="hidden md:block w-full h-full"
        aria-labelledby="svg-title svg-desc"
      >
        <title id="svg-title">Logistica Tunisie - Illustration Logistique</title>
        <desc id="svg-desc">Illustration animée montrant le flux logistique, des entrepôts aux colis en livraison.</desc>
        
        <g transform={isRTL ? "scale(-1, 1) translate(-1440, 0)" : ""}>
          {/* Atmosphere: Breathing Halo */}
          <circle cx="1100" cy="220" r="180" fill="#DCE9FF">
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

          {/* Drifting Clouds */}
          <path d="M150 80 Q170 60 190 80 T230 80 T250 100 T190 100 T150 80" fill="white" opacity="0.8">
            <animate attributeName="d" values="M150 80...;M1400 80..." dur="70s" repeatCount="indefinite" />
          </path>
          
          {/* Base Line */}
          <line x1="0" y1="368" x2="1440" y2="368" stroke="#F7941D" strokeWidth="16" strokeLinecap="round" />

          {/* Three Arches (Gateway Shapes) */}
          {/* Small Arch (0.6x) */}
          <g transform="translate(600, 368) scale(0.6) translate(-100, -240)" opacity="0.55">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="12" fill="#F7941D">
              <animate attributeName="r" values="12;20;12" dur="3.3s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Medium Arch (0.85x) */}
          <g transform="translate(850, 368) scale(0.85) translate(-100, -240)" opacity="0.8">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="12" fill="#F7941D">
              <animate attributeName="r" values="12;20;12" dur="3.3s" begin="1.1s" repeatCount="indefinite" />
            </circle>
          </g>

          {/* Large Arch (1.2x) */}
          <g transform="translate(1150, 368) scale(1.2) translate(-100, -240)">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="12" fill="#F7941D">
              <animate attributeName="r" values="12;20;12" dur="3.3s" begin="2.2s" repeatCount="indefinite" />
            </circle>
            {/* Destination Pin */}
            <g transform="translate(100, -40)">
              <animateTransform attributeName="transform" type="translate" values="100,-40; 100,-47; 100,-40" dur="3s" repeatCount="indefinite" additive="sum" />
              <path d="M0 0 C-10 -15 -15 -20 -15 -30 A15 15 0 1 1 15 -30 C15 -20 10 -15 0 0Z" fill="#F7941D" />
              <circle cx="0" cy="-30" r="5" fill="white" />
            </g>
          </g>

          {/* Flow Line: Dotted Path */}
          <path d="M100 300 Q400 100 800 300 T1300 300" stroke="#0C2A6B" strokeWidth="4" strokeDasharray="1 12" strokeLinecap="round" opacity="0.28" fill="none" />
          <circle r="8" fill="#F7941D">
            <animateMotion path="M100 300 Q400 100 800 300 T1300 300" dur="9s" repeatCount="indefinite" />
          </circle>

          {/* Parcels moving along the base line */}
          {[0, 3.66, 7.33].map((delay, i) => (
            <g key={i} transform="translate(-100, 320)">
              <animateTransform
                attributeName="transform"
                type="translate"
                from="-100 320"
                to="1540 320"
                dur="11s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <rect width="56" height="48" rx="4" fill="#1F6FDB">
                <animateTransform
                   attributeName="transform"
                   type="translate"
                   values="0 0; 0 -3; 0 0"
                   dur="2s"
                   repeatCount="indefinite"
                />
              </rect>
              <rect x="0" y="18" width="56" height="12" fill="#F7941D">
                <animateTransform
                   attributeName="transform"
                   type="translate"
                   values="0 0; 0 -3; 0 0"
                   dur="2s"
                   repeatCount="indefinite"
                />
              </rect>
            </g>
          ))}

          {/* Delivered Badge (Pops at end) */}
          <g transform="translate(1350, 300)" opacity="0">
            <animate attributeName="opacity" values="0;1;1;0" dur="5.5s" repeatCount="indefinite" />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0.2;1.15;1"
              dur="0.5s"
              begin="4.5s"
              fill="freeze"
            />
            <circle r="30" fill="#1F6FDB" />
            <path d="M-12 0 L-4 8 L12 -8" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Mobile Version (390x300) */}
      <svg
        viewBox="0 0 390 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="block md:hidden w-full h-full"
      >
        <g transform={isRTL ? "scale(-1, 1) translate(-390, 0)" : ""}>
          <line x1="0" y1="260" x2="390" y2="260" stroke="#F7941D" strokeWidth="12" strokeLinecap="round" />
          
          {/* One Large Arch */}
          <g transform="translate(195, 260) scale(1) translate(-100, -240)">
            <path d="M0 240 V35 A35 35 0 0 1 35 0 H165 A35 35 0 0 1 200 35 V240" fill="#0C2A6B" />
            <circle cx="100" cy="35" r="10" fill="#F7941D">
              <animate attributeName="r" values="10;15;10" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Pin */}
            <g transform="translate(100, -35)">
               <path d="M0 0 C-8 -12 -12 -16 -12 -24 A12 12 0 1 1 12 -24 C12 -16 8 -12 0 0Z" fill="#F7941D" />
            </g>
          </g>

          {/* One Parcel */}
          <g transform="translate(-60, 225)">
            <animateTransform
              attributeName="transform"
              type="translate"
              from="-60 225"
              to="450 225"
              dur="8s"
              repeatCount="indefinite"
            />
            <rect width="40" height="35" rx="4" fill="#1F6FDB" />
            <rect x="0" y="14" width="40" height="7" fill="#F7941D" />
          </g>
        </g>
      </svg>
    </div>
  );
}
