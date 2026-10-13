"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[600px] mx-auto">
      <svg viewBox="0 0 800 420" className="w-full h-full" fill="none">
        {/* Ground Line */}
        <line x1="0" y1="340" x2="800" y2="340" stroke="#E4E7EC" strokeWidth="2" strokeDasharray="8 8" />
        
        {/* Animated Dashed Route Dot */}
        <motion.circle
          cx="0" cy="340" r="4" fill="#F7931E"
          animate={{ cx: [0, 800] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Isometric Box Center */}
        <g transform="translate(320, 180) scale(1.5)">
          <motion.path 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            fill="#1F6FDB" d="M87,18 L152,55 L87,92 L22,55 Z" 
          />
          <motion.path 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            fill="#0B2A6B" d="M22,55 L87,92 L87,162 L22,125 Z" 
          />
          <motion.path 
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            fill="#F7931E" d="M152,55 L87,92 L87,162 L152,125 Z" 
          />
        </g>

        {/* 3 Parcels dropping */}
        {[2.2, 2.6, 3.0].map((delay, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: -70 }}
            animate={{ 
              opacity: [0, 1, 1, 1, 0],
              y: [-70, 0, 0, 0, 0],
              scale: [1, 0.9, 1.1, 1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, delay }}
            transform={`translate(${380 + (i * 25)}, 160)`}
          >
            <rect width="20" height="20" fill={i % 2 === 0 ? "#1F6FDB" : "#F7931E"} rx="2" />
          </motion.g>
        ))}

        {/* Truck Group */}
        <motion.g
          animate={{
            x: [-260, 150, 150, 150, 900]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            times: [0, 0.18, 0.3, 0.75, 1],
            ease: "easeInOut"
          }}
          transform="translate(0, 270)"
        >
          {/* Truck Body */}
          <rect width="140" height="60" fill="#1F6FDB" rx="10" />
          <path d="M140,20 L170,20 L170,60 L140,60 Z" fill="#0B2A6B" />
          
          {/* Wheels */}
          <motion.circle 
            cx="35" cy="65" r="14" fill="#0B2A6B"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <circle cx="35" cy="65" r="6" fill="#F7931E" />
          
          <motion.circle 
            cx="105" cy="65" r="14" fill="#0B2A6B"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <circle cx="105" cy="65" r="6" fill="#F7931E" />
        </motion.g>

        {/* Pin drop */}
        <motion.path
          d="M400,260 L410,285 L390,285 Z"
          fill="#E91E63"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1.2, 1, 0],
            y: [-20, -20, 0, 0, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, times: [0, 0.58, 0.64, 0.9, 1] }}
        />
      </svg>
      
      {/* Floating Status Cards (HTML) */}
      <motion.div
        className="absolute top-10 left-10 glassmorphic px-4 py-2 rounded-xl text-xs font-bold text-navy-900 border-l-4 border-blue-600 shadow-lg"
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.1, 0.4, 0.5] }}
      >
        Commande reçue ✓
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 glassmorphic px-4 py-2 rounded-xl text-xs font-bold text-green-600 border-l-4 border-green-500 shadow-lg"
        animate={{ opacity: [0, 0, 1, 0], y: [10, 10, 0, -10] }}
        transition={{ duration: 6, repeat: Infinity, times: [0, 0.6, 0.8, 0.9] }}
      >
        Colis livré ✓
      </motion.div>
    </div>
  );
}