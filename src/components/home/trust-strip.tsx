
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TrustStrip() {
  const { t } = useTranslation();

  const stats = [
    { label: t('trust_orders'), value: 50000, suffix: "+", confirm: true },
    { label: t('trust_success'), value: 98, suffix: "%", confirm: false },
    { label: t('trust_coverage'), value: 24, suffix: "", confirm: false },
    { label: t('trust_speed'), value: 2, prefix: "< ", suffix: "h", confirm: true },
  ];

  return (
    <div className="bg-white border-y border-gray-100 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr,1.6fr] gap-20 items-center">
          
          <div className="flex flex-col gap-8 reveal">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-orange-600">
              {t('trust_title')}
            </p>
            <div className="flex gap-16 overflow-hidden relative opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-700">
              <motion.div 
                className="flex gap-16 shrink-0"
                animate={{ x: [0, -100] }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {/* Mock logos */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-10 w-32 bg-gray-100 rounded-xl flex items-center justify-center font-heading font-extrabold text-gray-400 text-xs tracking-widest uppercase">
                    Client {i}
                  </div>
                ))}
                {/* Duplicate for infinite marquee */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={`dup-${i}`} className="h-10 w-32 bg-gray-100 rounded-xl flex items-center justify-center font-heading font-extrabold text-gray-400 text-xs tracking-widest uppercase">
                    Client {i}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <StatCounter key={i} stat={stat} index={i} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCounter({ stat, index }: any) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 1400;
      const start = performance.now();
      
      const animate = (now: number) => {
        const k = Math.min(1, (now - start) / duration);
        const e = 1 - Math.pow(1 - k, 3); // Ease out cubic
        setCount(Math.round(stat.value * e));
        if (k < 1) requestAnimationFrame(animate);
      };
      
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(animate);
          setHasAnimated(true);
        }
      }, { threshold: 0.5 });

      const el = document.getElementById(`stat-${index}`);
      if (el) observer.observe(el);
      return () => observer.disconnect();
    }
  }, [stat.value, index, hasAnimated]);

  return (
    <div id={`stat-${index}`} className="text-center lg:text-left reveal" style={{ transitionDelay: `${index * 100}ms` }}>
      <p className="text-4xl md:text-5xl font-heading font-extrabold text-primary-900 tracking-tighter mb-2 tabular-nums">
        {stat.prefix}{count.toLocaleString('fr-FR')}<span className="text-orange-500">{stat.suffix}</span>
      </p>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
        {stat.label}
        {stat.confirm && (
          <span className="text-[8px] font-bold text-orange-400/50">[À CONFIRMER]</span>
        )}
      </p>
    </div>
  );
}
