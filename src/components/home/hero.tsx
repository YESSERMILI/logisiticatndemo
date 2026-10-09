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
    <section className="relative w-full bg-[#EEF4FF] overflow-hidden pt-32 pb-16 md:pb-24">
      {/* Background Decorative assembly triangles (inspired by logo) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-primary rotate-12" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-1/2 -right-20 w-96 h-96 bg-secondary -rotate-12" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          
          {/* Tagline & Title */}
          <motion.div 
            className="relative z-10 max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-soft text-primary text-[13px] font-bold mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              {t("hero_pill")}
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black leading-[1.05] text-[#0C2A6B] mb-8">
              {t("hero_title_1")}<br />
              <span className="text-[#1F6FDB]">{t("hero_title_2")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#5B6B82] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button
                size="lg"
                className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-12 h-[64px] text-xl font-black shadow-2xl shadow-orange/30 transition-all hover:-translate-y-1 active:scale-95 group"
                asChild
              >
                <Link href="#contact" className="flex items-center gap-3">
                  {t("hero_cta_primary")}
                  <ArrowRight className={cn("h-6 w-6 transition-transform group-hover:translate-x-1", isRTL && "rotate-180 group-hover:-translate-x-1")} />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="bg-white/50 backdrop-blur-sm border-[#0C2A6B] border-2 text-[#0C2A6B] hover:bg-[#0C2A6B] hover:text-white rounded-full px-10 h-[64px] text-lg font-bold transition-all hover:-translate-y-1 active:scale-95 group shadow-lg"
                asChild
              >
                <Link href="#steps" className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current" />
                  {t("hero_cta_secondary")}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Master SVG Illustration */}
          <motion.div 
            className="w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className={cn("relative rounded-[40px] overflow-hidden shadow-3xl bg-white/40 backdrop-blur-sm border border-white/50", isRTL && "transform scale-x-[-1]")}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 1440 420" 
                width="100%" 
                className="block w-full h-auto"
                role="img" 
                aria-labelledby="t d"
              >
                <title id="t">Logistica Tunisie Animation</title>
                <defs>
                  <style>
                    {`
                      .route-main { stroke-dasharray: 10 10; stroke-dashoffset: 0; animation: flow-main 10s linear infinite; }
                      @keyframes flow-main { to { stroke-dashoffset: -100; } }
                      .node-main { animation: pop-node 0.5s cubic-bezier(.2,.8,.2,1) both; transform-box: fill-box; transform-origin: center; }
                      @keyframes pop-node { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: none; } }
                      .label-main { animation: fade-up 0.6s ease-out both; }
                      @keyframes fade-up { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
                      .ring-main { fill: none; stroke: ${orangeColor}; stroke-width: 3; opacity: 0; transform-box: fill-box; transform-origin: center; animation: pulse-ring 7s ease-out infinite; }
                      @keyframes pulse-ring { 0% { opacity: .8; transform: scale(1); } 12% { opacity: 0; transform: scale(2.8); } 100% { opacity: 0; transform: scale(2.8); } }
                    `}
                  </style>
                </defs>

                {/* Main Path */}
                <path 
                  className="route-main" 
                  d="M140,290 C340,290 340,200 540,200 C740,200 750,280 930,280 C1110,280 1120,190 1300,190"
                  fill="none" 
                  stroke={blueColor} 
                  strokeOpacity="0.15" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                />

                {/* Interactive Nodes */}
                <g>
                  {[
                    { cx: 140, cy: 290, delay: "0s", label: "Commande", lDelay: "0.5s", nDelay: "0.3s" },
                    { cx: 540, cy: 200, delay: "2.1s", label: "Préparation", lDelay: "2.6s", nDelay: "2.4s" },
                    { cx: 930, cy: 280, delay: "4.2s", label: "Expédition", lDelay: "4.7s", nDelay: "4.5s" },
                    { cx: 1300, cy: 190, delay: "6.3s", label: "Livraison", lDelay: "6.8s", nDelay: "6.6s", special: true }
                  ].map((node, i) => (
                    <g key={i}>
                      <circle className="ring-main" cx={node.cx} cy={node.cy} r="12" style={{ animationDelay: node.delay }} />
                      <circle 
                        className="node-main" 
                        cx={node.cx} 
                        cy={node.cy} 
                        r="10" 
                        fill={node.special ? orangeColor : "#fff"} 
                        stroke={navyColor} 
                        strokeWidth="4" 
                        style={{ animationDelay: node.nDelay }} 
                      />
                      <text 
                        className={cn("label-main", isRTL && "transform scale-x-[-1]")}
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
                    repeatCount="indefinite" 
                    calcMode="linear"
                    path="M140,290 C340,290 340,200 540,200 C740,200 750,280 930,280 C1110,280 1120,190 1300,190"
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