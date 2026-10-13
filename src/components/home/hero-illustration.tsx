"use client";

import { motion } from "framer-motion";
import { Package, Truck, MapPin, CheckCircle2, Clock, Box } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Dashed Route Line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 500 500">
        <motion.path
          d="M 50,400 Q 150,400 250,250 T 450,100"
          fill="none"
          stroke="#0B2A6B"
          strokeWidth="3"
          strokeDasharray="8 12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Main Box - Logo Colors */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 flex items-center justify-center z-10"
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
          <path d="M50 85L10 65V30L50 50V85Z" fill="#0B2A6B" />
          <path d="M50 50L10 30L50 10L90 30L50 50Z" fill="#1F6FDB" />
          <path d="M50 85L90 65V30L50 50V85Z" fill="#F7931E" />
        </svg>
      </motion.div>

      {/* Floating Status Cards */}
      <motion.div
        className="absolute top-1/4 right-0 glassmorphic p-4 rounded-xl flex items-center gap-3 z-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase">Livraison</p>
          <p className="text-sm font-bold text-navy-900">Livré avec succès ✓</p>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-0 glassmorphic p-4 rounded-xl flex items-center gap-3 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
          <Clock size={24} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase">Status</p>
          <p className="text-sm font-bold text-navy-900">En préparation...</p>
        </div>
      </motion.div>

      {/* Truck Animation */}
      <motion.div
        className="absolute z-30"
        animate={{
          x: ["10%", "80%", "10%"],
          y: ["80%", "20%", "80%"],
          scaleX: [1, 1, -1, -1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="bg-navy-900 text-white p-2 rounded-lg shadow-xl relative">
          <Truck size={24} />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full animate-ping" />
        </div>
      </motion.div>

      {/* Location Pin */}
      <motion.div
        className="absolute top-[15%] right-[10%] text-orange-500 z-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <MapPin size={32} fill="currentColor" fillOpacity={0.2} />
      </motion.div>
    </div>
  );
}