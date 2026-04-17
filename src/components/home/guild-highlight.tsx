"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight, Bot, PenSquare, Users, BarChart } from "lucide-react";
import Link from "next/link";

export function CreateOwnQuiz() {
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
  ]

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"} className="py-16">
      <Card className="glassmorphic overflow-hidden">
        <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
                <CardHeader className="p-0">
                    <CardTitle className="font-heading text-4xl font-bold text-glow">{t('create_your_own_quiz')}</CardTitle>
                    <CardDescription className="mt-4 text-lg">{t('create_your_own_quiz_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 mt-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="font-bold glow-on-hover">
                           <Link href="/create" className="flex items-center">
                             {t('start_creating')} <ArrowRight className="ml-2 h-5 w-5" />
                           </Link>
                        </Button>
                         <Button size="lg" variant="outline" className="font-bold">
                           {t('learn_more')}
                        </Button>
                    </div>
                </CardContent>
            </div>
            <div className="p-8 md:p-12 bg-card/50">
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
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
      </Card>
    </section>
  );
}
