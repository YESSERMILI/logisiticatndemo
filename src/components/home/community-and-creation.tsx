"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight, Bot, PenSquare, Users, BarChart } from "lucide-react";
import Link from "next/link";
import { FriendsActivity } from "./leaderboard-preview";

export function CommunityAndCreationSection() {
  const { t, language } = useTranslation();

  const featuresCol1 = [
    {
      title: t('quiz_types'),
      description: t('quiz_types_desc'),
      icon: PenSquare
    },
    {
      title: t('collaboration'),
      description: t('collaboration_desc'),
      icon: Users
    }
  ];

  const featuresCol2 = [
    {
      title: t('ai_assistant'),
      description: t('ai_assistant_desc'),
      icon: Bot
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
              <h2 className="font-heading text-4xl font-bold text-glow">{t('create_your_own_quiz')}</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-md">{t('create_your_own_quiz_desc')}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="font-bold glow-on-hover">
                     <Link href="/create" className="flex items-center">
                       {t('start_creating')} <ArrowRight className="ml-2 h-5 w-5" />
                     </Link>
                  </Button>
                   <Button size="lg" variant="outline" className="font-bold">
                     {t('learn_more')}
                  </Button>
              </div>
          </div>
          <div className="p-8 md:p-12 bg-card/50 flex flex-col gap-8">
            <FriendsActivity />
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              <div className="space-y-8">
                {featuresCol2.map((feature, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-6 w-6 text-primary" />
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-8">
                {featuresCol1.map((feature, index) => (
                    <div key={index}>
                      <div className="flex items-center gap-3">
                        <feature.icon className="h-6 w-6 text-primary" />
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
