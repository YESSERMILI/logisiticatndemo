"use client";

import { motion } from "framer-motion";
import { Package, Truck, Clock, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeroIsometric() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: "Commande", icon: Clock, x: 20, y: 30 },
    { label: "Préparation", icon: Package, x: 50, y: 15 },
    { label: "Expédition", icon: Truck, x: 80, y: 30 },
    { label: "Livraison", icon: MapPin, x: 50, y: 45 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central Arch Gateway Style SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 500 500" className="w-[120%] h-[120%] opacity-10">
          <circle cx="250" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Floating Cards */}
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute p-6 rounded-2xl glass-panel w-44 shadow-e2 flex flex-col items-center text-center transition-all duration-500",
            activeStep === i ? "border-orange-500 ring-4 ring-orange-500/10 scale-110 z-20" : "opacity-60 scale-95 z-10"
          )}
          style={{ 
            left: `${step.x}%`, 
            top: `${step.y}%`,
            transform: `translate(-50%, -50%)`
          }}
        >
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-3",
            activeStep === i ? "bg-orange-500 text-white" : "bg-gray-100 text-primary"
          )}>
            <step.icon className="h-6 w-6" />
          </div>
          <span className="font-bold text-primary">{step.label}</span>
          
          {activeStep === i && (
            <motion.div 
              layoutId="progress"
              className="absolute -bottom-1 left-0 h-1 bg-orange-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "linear" }}
            />
          )}
        </motion.div>
      ))}

      {/* Animated Route Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 600">
        <motion.path
          d="M 120,180 Q 300,100 480,180 Q 480,270 300,270 Q 120,270 120,180"
          fill="none"
          stroke="#FF8A1F"
          strokeWidth="2"
          strokeDasharray="8 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="opacity-30"
        />
      </svg>
    </div>
  );
}
