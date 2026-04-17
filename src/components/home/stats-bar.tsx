"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Users, BrainCircuit, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function StatsBar() {
  const { t, language } = useTranslation();

  const stats = [
    {
      icon: Users,
      value: "1,203",
      label: t("stats_players_online"),
    },
    {
      icon: BrainCircuit,
      value: "25,489",
      label: t("stats_quizzes_played"),
    },
    {
      icon: Crown,
      value: "Zied_TN",
      label: t("stats_top_player"),
    },
  ];

  return (
    <div className="bg-secondary">
      <div
        className="container mx-auto"
        dir={language === "ar" ? "rtl" : "ltr"}
      >
        <div className="grid grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-center gap-4 p-6">
              <stat.icon className="h-8 w-8 text-primary" />
              <div className="text-left">
                <p className="text-2xl font-bold font-heading">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
