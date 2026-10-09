
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

  return (
    <section className="relative w-full bg-[#EEF4FF] overflow-hidden pt-32 pb-16 md:pb-24">
      {/* Interactive Background triangular glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-orange/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 text-[#F7941D] text-[13px] font-bold mb-8 shadow-sm border border-orange/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              {t("hero_pill")}
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-[64px] font-black leading-[1.1] text-[#0C2A6B] mb-8">
              {t("hero_title_1")}<br />
              <span className="text-[#1F6FDB]">{t("hero_title_2")}</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#5B6B82] max-w-xl mb-12 font-medium leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="bg-[#F7941D] hover:bg-[#F7941D]/90 text-[#0C2A6B] rounded-full px-12 h-[64px] text-xl font-black shadow-2xl shadow-orange/30 transition-all hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"
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
                className="bg-white/50 backdrop-blur-sm border-[#0C2A6B]/20 border-2 text-[#0C2A6B] hover:bg-[#0C2A6B] hover:text-white rounded-full px-10 h-[64px] text-lg font-bold transition-all hover:-translate-y-1 active:scale-95 group shadow-lg w-full sm:w-auto"
                asChild
              >
                <Link href="#steps" className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current" />
                  {t("hero_cta_secondary")}
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Animated SVG Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className={cn(
              "relative rounded-[40px] overflow-hidden shadow-3xl bg-white/40 backdrop-blur-md border border-white/50 p-4",
              isRTL && "transform scale-x-[-1]"
            )}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 420" width="100%" role="img" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <clipPath id="wipe-hero">
                    <rect x="1030" y="176" width="460" height="76" />
                  </clipPath>
                  <style>
                    {`
                      .hero-tri { transform-box: fill-box; transform-origin: center; animation: heroTri 3s ease-in-out infinite alternate; }
                      @keyframes heroTri { from { transform: translate(0,0); } to { transform: translate(0, 10px); } }
                      .hero-route { stroke-dasharray: 1; stroke-dashoffset: 1; animation: heroDraw 2s ease-in-out forwards; }
                      @keyframes heroDraw { to { stroke-dashoffset: 0; } }
                      .hero-node { animation: heroPop 0.5s cubic-bezier(.2,.8,.2,1) both; transform-box: fill-box; transform-origin: center; }
                      @keyframes heroPop { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: none; } }
                      .hero-ring { fill: none; stroke: #f7931e; stroke-width: 3; opacity: 0; transform-box: fill-box; transform-origin: center; animation: heroPing 7s ease-out infinite; }
                      @keyframes heroPing { 0% { opacity: .8; transform: scale(1); } 12% { opacity: 0; transform: scale(2.8); } 100% { opacity: 0; transform: scale(2.8); } }
                    `}
                  </style>
                </defs>

                {/* LOGO ASSEMBLY PART */}
                <g transform="translate(-100, 0)">
                  <g transform="scale(1.2)">
                    <path className="hero-tri" style={{ animationDelay: '0.1s' }} d="M 827.5,279.3 L 1002,192 L 888.6,192 Z" fill="#0b2a6b"/>
                    <path className="hero-tri" style={{ animationDelay: '0.3s' }} d="M 888.6,192 L 1002,192 L 827.5,104.7 Z" fill="#1f6fdb"/>
                    <path className="hero-tri" style={{ animationDelay: '0.5s' }} d="M 827.5,279.3 L 888.6,192 L 827.5,192 Z" fill="#f7931e"/>
                  </g>
                </g>

                {/* ROUTE */}
                <path className="hero-route" pathLength="1" d="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"
                      fill="none" stroke="#1f6fdb" strokeOpacity="0.2" strokeWidth="4" strokeLinecap="round"/>

                <g>
                  {[
                    { cx: 800, cy: 290, delay: '3.3s', pDelay: '1.4s', label: 'Commande' },
                    { cx: 960, cy: 200, delay: '5.3s', pDelay: '1.8s', label: 'Préparation' },
                    { cx: 1130, cy: 280, delay: '7.3s', pDelay: '2.2s', label: 'Expédition' },
                    { cx: 1300, cy: 190, delay: '9.3s', pDelay: '2.6s', label: 'Livraison' }
                  ].map((n, i) => (
                    <g key={i}>
                      <circle className="hero-ring" cx={n.cx} cy={n.cy} r="10" style={{ animationDelay: n.delay }} />
                      <circle className="hero-node" cx={n.cx} cy={n.cy} r="10" fill="#fff" stroke="#0b2a6b" strokeWidth="4" style={{ animationDelay: n.pDelay }} />
                      <text x={n.cx} y={n.cy + (i % 2 === 0 ? 35 : -25)} fontSize="14" fontWeight="700" fill="#0b2a6b" textAnchor="middle" style={{ animation: 'heroPop 0.5s both', animationDelay: n.pDelay }}>
                        {n.label}
                      </text>
                    </g>
                  ))}
                </g>

                {/* MOVING PARCEL */}
                <g>
                  <g>
                    <rect x="-12" y="-12" width="24" height="24" rx="6" fill="#f7931e" stroke="#fff" strokeWidth="2.5"/>
                    <path d="M-12,-2 H12 M0,-12 V-2" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  </g>
                  <animateMotion dur="7s" begin="3.3s" repeatCount="indefinite" calcMode="linear"
                                 path="M800,290 C880,290 880,200 960,200 C1040,200 1050,280 1130,280 C1210,280 1220,190 1300,190"/>
                </g>
              </svg>
            </div>
            
            {/* Visual connector to next section */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
            >
              <div className="w-1 h-16 bg-gradient-to-b from-secondary/50 to-transparent rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
