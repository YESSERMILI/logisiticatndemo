
"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";

  const navyColor = "#0b2a6b";
  const blueColor = "#1f6fdb";
  const orangeColor = "#f7931e";

  return (
    <section className="relative w-full bg-[#EEF4FF] overflow-hidden pt-32 pb-16 md:pb-32">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            className={cn("relative z-10", isRTL ? "text-right order-1 lg:order-2" : "text-left order-1")}
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFE6D2] text-[#0C2A6B] text-[13px] font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              {t("hero_pill")}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] text-[#0C2A6B] mb-6">
              {t("hero_title_1")}{" "}
              <span className="text-[#1F6FDB]">{t("hero_title_2")}</span>
            </h1>

            <p className="text-lg md:text-xl text-[#5B6B82] max-w-[520px] mb-10 font-medium leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className={cn("flex flex-col sm:flex-row items-center gap-4", isRTL && "sm:flex-row-reverse justify-end")}>
              <Button
                size="lg"
                className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-10 h-[56px] text-lg font-bold shadow-xl shadow-orange/20 w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-[0.97] group"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-2">
                  {t("hero_cta_primary")}
                  <ArrowRight className={cn("h-5 w-5 transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-[#0C2A6B] border-2 text-[#0C2A6B] hover:bg-[#0C2A6B] hover:text-white rounded-full px-10 h-[56px] text-lg font-bold w-full sm:w-auto transition-all hover:-translate-y-1 active:scale-[0.97] group"
                asChild
              >
                <Link href="#steps" className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current" />
                  {t("hero_cta_secondary")}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Illustration */}
          <motion.div 
            className={cn("relative flex justify-center lg:justify-end", isRTL ? "order-2 lg:order-1" : "order-2")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className={cn("w-full max-w-[560px] aspect-[640/520] transform-gpu", isRTL && "scale-x-[-1]")}>
              <svg 
                viewBox="750 150 650 300" 
                width="100%" 
                height="100%" 
                preserveAspectRatio="xMidYMid meet"
                className="overflow-visible"
              >
                <defs>
                  <style>
                    {`
                      .route-anim { stroke-dasharray: 1; stroke-dashoffset: 1; animation: draw-path 2s ease-in-out forwards; }
                      @keyframes draw-path { to { stroke-dashoffset: 0; } }
                      .node-anim { animation: pop-node 0.5s cubic-bezier(.2,.8,.2,1) both; transform-box: fill-box; transform-origin: center; }
                      @keyframes pop-node { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: none; } }
                      .label-anim { animation: fade-up 0.6s ease-out both; }
                      @keyframes fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
                      .ring-anim { fill: none; stroke: ${orangeColor}; stroke-width: 3; opacity: 0; transform-box: fill-box; transform-origin: center; animation: pulse-ring 7s ease-out infinite; }
                      @keyframes pulse-ring { 0% { opacity: .8; transform: scale(1); } 12% { opacity: 0; transform: scale(2.8); } 100% { opacity: 0; transform: scale(2.8); } }
                    `}
                  </style>
                </defs>

                {/* Animated Path */}
                <path 
                  className="route-anim" 
                  pathLength="1" 
                  d="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"
                  fill="none" 
                  stroke={blueColor} 
                  strokeOpacity="0.2" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />

                {/* Nodes & Rings */}
                <g>
                  {[
                    { cx: 800, cy: 290, delay: "3.3s", label: "Commande", lDelay: "1.6s", nDelay: "1.4s" },
                    { cx: 960, cy: 200, delay: "5.28s", label: "Préparation", lDelay: "2.0s", nDelay: "1.8s" },
                    { cx: 1130, cy: 280, delay: "7.27s", label: "Expédition", lDelay: "2.4s", nDelay: "2.2s" },
                    { cx: 1300, cy: 190, delay: "9.25s", label: "Livraison", lDelay: "2.8s", nDelay: "2.6s", special: true }
                  ].map((node, i) => (
                    <g key={i}>
                      <circle className="ring-anim" cx={node.cx} cy={node.cy} r="12" style={{ animationDelay: node.delay }} />
                      <circle 
                        className="node-anim" 
                        cx={node.cx} 
                        cy={node.cy} 
                        r="10" 
                        fill={node.special ? orangeColor : "#fff"} 
                        stroke={navyColor} 
                        strokeWidth="4" 
                        style={{ animationDelay: node.nDelay }} 
                      />
                      <text 
                        className="label-anim" 
                        x={node.cx} 
                        y={node.cy + (i % 2 === 0 ? 38 : -28)} 
                        fontSize="14" 
                        fontWeight="700" 
                        fill={navyColor} 
                        textAnchor="middle"
                        style={{ animationDelay: node.lDelay }}
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </g>

                {/* Moving Parcel */}
                <g>
                  <g>
                    <rect x="-12" y="-12" width="24" height="24" rx="6" fill={orangeColor} stroke="#fff" strokeWidth="2.5" />
                    <path d="M-12,-2 H12 M0,-12 V-2" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </g>
                  <animateMotion 
                    dur="7s" 
                    begin="3.3s" 
                    repeatCount="indefinite" 
                    calcMode="linear"
                    keyPoints="0;1;1" 
                    keyTimes="0;0.85;1"
                    path="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

