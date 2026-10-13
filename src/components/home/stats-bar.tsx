"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Package, MapPin, ShieldCheck, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Counter({ value, label, icon: Icon }: { value: string, label: string, icon: any }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g,''));

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center space-y-2 p-6"
    >
      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-orange-500 mb-2">
        <Icon size={28} />
      </div>
      <h3 className="text-3xl md:text-5xl font-black text-white font-heading tracking-tighter tabular-nums">
        {value.includes('+') ? `+${count.toLocaleString()}` : value.includes('%') ? `${count}%` : value.includes('<') ? `<${count}h` : count}
      </h3>
      <p className="text-blue-100/60 text-xs md:text-sm font-bold uppercase tracking-[0.15em]">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsBar() {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-900 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1F6FDB_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 rtl:divide-x-reverse">
          <Counter icon={Package} value="+12000" label={t("stats_l1")} />
          <Counter icon={MapPin} value="24" label={t("stats_l2")} />
          <Counter icon={ShieldCheck} value="98%" label={t("stats_l3")} />
          <Counter icon={Clock} value="<24h" label={t("stats_l4")} />
        </div>
      </div>
    </section>
  );
}