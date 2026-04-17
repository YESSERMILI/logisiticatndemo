"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { leaderboardUsers } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Crown } from "lucide-react";

export function LeaderboardPreview() {
  const { t, language } = useTranslation();

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-yellow-400";
    if (rank === 2) return "text-slate-400";
    if (rank === 3) return "text-orange-400";
    return "text-muted-foreground";
  };
  
  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="font-heading text-xl">
            {t("leaderboard_preview_title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {leaderboardUsers.map((user) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === user.avatar);
              return (
                <li key={user.rank} className="flex items-center gap-4">
                  <div className={`flex w-6 items-center justify-center font-bold ${getRankColor(user.rank)}`}>
                    {user.rank === 1 ? <Crown className="h-5 w-5"/> : user.rank}
                  </div>
                  <Avatar className="h-10 w-10">
                    {avatarImage && <AvatarImage src={avatarImage.imageUrl} alt={user.username} data-ai-hint={avatarImage.imageHint} />}
                    <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{user.username}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.points.toLocaleString()} {t("leaderboard_points")}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    🔥 {user.streak}
                  </div>
                </li>
              );
            })}
          </ul>
          <Button asChild variant="outline" className="mt-6 w-full font-bold">
            <Link href="/leaderboard">{t("leaderboard_preview_cta")}</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
