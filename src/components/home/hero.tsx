"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { ArrowRight, History, Play } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { categories } from "@/lib/data";
import { Icon } from "../ui/icon";

export function Hero() {
  const { t, language } = useTranslation();
  const heroCategories = categories.slice(0, 4);

  return (
    <section
      className="container mx-auto py-16 md:py-24"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-start">
          <p className="font-semibold text-primary">{t('the_living_library')}</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-black tracking-tighter">
            {t('hero_greeting')}{' '}{t('hero_alex')}
          </h1>
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            {t('hero_subtitle_extended')}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Button size="lg" className="font-bold glow-on-hover w-full sm:w-auto">
              <Play className="me-2 h-5 w-5" />
              {t("continue_playing")}
            </Button>
            <Button size="lg" variant="outline" className="font-bold w-full sm:w-auto" asChild>
              <Link href="/categories">
                {t("explore_quizzes")}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <Link href="/quiz/modern-tunisian-history?difficulty=medium">
            <Card className="mt-8 text-start glassmorphic transition-all duration-300 hover:border-primary/60 hover:-translate-y-1 glow-on-hover">
              <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
                          <History className="h-6 w-6 text-primary"/>
                      </div>
                      <div>
                          <p className="text-sm text-muted-foreground">{t('continue_where_you_left_off')}</p>
                          <p className="font-bold">{t('last_played_quiz')}</p>
                      </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
            {heroCategories.map((category) => (
                 <Link key={category.slug} href={`/quiz/${category.slug}?difficulty=${category.avgDifficulty}`} passHref>
                    <Card className="glassmorphic group aspect-square flex flex-col items-center justify-center gap-3 text-center p-4 glow-on-hover transition-all duration-300 hover:-translate-y-2 hover:bg-primary/10">
                        <Icon name={category.icon as any} className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                        <p className="font-bold text-lg">{category.name[language]}</p>
                    </Card>
                 </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
