
'use client';

import { motion } from "framer-motion";

export default function TunisiaMap({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full aspect-[290/440] max-w-[320px] mx-auto ${className}`} dir="ltr">
      <svg viewBox="0 0 290 440" className="w-full h-full drop-shadow-[0_0_15px_rgba(31,111,219,0.2)]">
        {/* Simplified Tunisia Outline */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M83.29 46.65L96.9 33.24L113.91 28.57L133.35 23.91L144.04 27.41L160.08 31.49L166.4 46.06L174.66 54.81L194.1 50.15L200.9 39.07L203.82 51.89L190.21 69.39L179.52 78.13L172.23 95.62L181.46 111.36L190.7 114.86L201.88 130.6L206.25 146.92L194.1 162.66L186.81 176.07L164.94 194.73L155.22 206.39L152.79 220.96L174.66 236.71L191.67 234.37L203.82 247.2L225.69 266.44L184.38 334.65L160.08 381.29L126.06 436.67L109.05 381.29L101.76 346.31L77.46 311.33L60.45 276.35L45.87 253.03L31.29 223.88L31.29 212.22L48.3 194.73L65.31 174.32L70.17 151.01L65.31 127.69L75.03 104.36L70.17 83.96L75.03 66.47Z"
          fill="none"
          stroke="#1F6FDB"
          strokeWidth="1.5"
        />

        {/* Connection Rays from Tunis */}
        <g opacity="0.4">
          {[
            "M159 54 L144 27", // Bizerte
            "M159 54 L186 75", // Nabeul
            "M159 54 L181 111", // Sousse
            "M159 54 L187 174", // Sfax
            "M159 54 L155 225", // Gabes
            "M159 54 L172 280", // Tataouine
            "M159 54 L87 91",  // Le Kef
            "M159 54 L91 192", // Gafsa
          ].map((path, i) => (
            <motion.path
              key={i}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 1 }}
              d={path}
              fill="none"
              stroke="#F7931E"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          ))}
        </g>

        {/* City Nodes */}
        {[
          { name: "Tunis", x: 159, y: 54, main: true },
          { name: "Bizerte", x: 144, y: 27 },
          { name: "Nabeul", x: 186, y: 75 },
          { name: "Sousse", x: 181, y: 111 },
          { name: "Sfax", x: 187, y: 174 },
          { name: "Gabès", x: 155, y: 225 },
          { name: "Tataouine", x: 172, y: 280 },
          { name: "Le Kef", x: 87, y: 91 },
          { name: "Gafsa", x: 91, y: 192 },
        ].map((city, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.1 }}
          >
            {city.main && (
              <circle cx={city.x} cy={city.y} r="8" fill="#F7931E" fillOpacity="0.2">
                <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
              </circle>
            )}
            <circle cx={city.x} cy={city.y} r={city.main ? "4" : "2.5"} fill="#F7931E" />
            <text
              x={city.x + 8}
              y={city.y + 4}
              fill="white"
              fontSize="10"
              fontWeight={city.main ? "bold" : "normal"}
              className="pointer-events-none select-none"
            >
              {city.name}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
