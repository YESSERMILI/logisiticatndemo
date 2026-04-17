"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { trendingQuizzes } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Play, TrendingUp } from "lucide-react";
import Link from "next/link";

export function TrendingNow() {
  const { t, language } = useTranslation();

  const getDifficultyVariant = (level: "easy" | "medium" | "hard") => {
    switch (level) {
        case "easy": return "default";
        case "medium": return "secondary";
        case "hard": return "destructive";
    }
  }

  const difficultyTranslations = {
    easy: t('categories_easy'),
    medium: t('categories_medium'),
    hard: t('categories_hard'),
  }

  return (
    <Card className="glassmorphic h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-bold text-glow">
          <TrendingUp className="text-primary" />
          {t("trending_now")}
        </CardTitle>
        <p className="text-muted-foreground text-sm">{t('popular_with_community')}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {trendingQuizzes.map((quiz) => (
            <li key={quiz.rank}>
              <Link href={`/quiz/${quiz.slug}?difficulty=${quiz.difficulty}`} passHref>
                <Card className="bg-card/50 hover:bg-card/80 transition-colors duration-200">
                  <CardContent className="p-3 flex items-center gap-4">
                    <div className="text-xl font-black text-muted-foreground w-6 text-center">#{quiz.rank}</div>
                    <div className="flex-grow">
                      <p className="font-bold">{quiz.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{quiz.category}</span>
                          <span>•</span>
                          <span>{quiz.points.toLocaleString()} {t('leaderboard_points')}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">⭐ {quiz.rating}</span>
                      </div>
                    </div>
                    <Badge variant={getDifficultyVariant(quiz.difficulty)} className="hidden sm:inline-flex">{difficultyTranslations[quiz.difficulty]}</Badge>
                    <Button variant="ghost" size="icon" className="rounded-full glow-on-hover">
                      <Play className="h-5 w-5 text-primary"/>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
