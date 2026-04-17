"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, Bot, PenSquare, Users, BarChart } from "lucide-react";
import Link from "next/link";
import { FriendsActivity } from "./leaderboard-preview";

export function CommunityAndCreationSection() {
  const { t, language } = useTranslation();

  const features = [
    {
      title: t('quiz_types'),
      description: t('quiz_types_desc'),
      icon: PenSquare
    },
    {
      title: t('ai_assistant'),
      description: t('ai_assistant_desc'),
      icon: Bot
    },
    {
      title: t('collaboration'),
      description: t('collaboration_desc'),
      icon: Users
    },
    {
      title: t('analytics'),
      description: t('analytics_desc'),
      icon: BarChart
    }
  ];

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="py-16">
      <Card className="glassmorphic overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-start">
              <h2 className="text-4xl font-black text-glow">{t('community_hub_title')}</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">{t('community_hub_desc')}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="font-bold glow-on-hover" asChild>
                     <Link href="/guilds" className="flex items-center">
                       {t('explore_guilds')} <ArrowRight className="ms-2 h-5 w-5" />
                     </Link>
                  </Button>
                   <Button size="lg" variant="outline" className="font-bold" asChild>
                     <Link href="/leaderboard">
                        {t('view_leaderboard')}
                     </Link>
                  </Button>
              </div>
          </div>
          <div className="p-8 md:p-12 bg-card/50 flex flex-col gap-8">
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
             <FriendsActivity />
          </div>
        </div>
      </Card>
    </section>
  );
}
