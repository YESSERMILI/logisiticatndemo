"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dailyQuests } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Flame } from "lucide-react";

export function DailyQuests() {
  const { t, language } = useTranslation();

  return (
    <Card className="glassmorphic h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-heading text-xl text-glow">
          <Flame className="text-accent" />
          {t('daily_quests')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {dailyQuests.map((quest) => (
          <div key={quest.id}>
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{quest.title}</p>
              <p className="text-sm font-bold text-accent">+{quest.reward} XP</p>
            </div>
            <div className="flex items-center gap-3">
              <Progress value={(quest.progress / quest.goal) * 100} className="h-2" />
              <span className="text-xs text-muted-foreground">{quest.progress}/{quest.goal}</span>
            </div>
          </div>
        ))}
        <Button variant="outline" className="w-full mt-4">
          {t('view_all_quests')}
        </Button>
      </CardContent>
    </Card>
  );
}
