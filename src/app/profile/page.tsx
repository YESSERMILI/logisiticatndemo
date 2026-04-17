"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, BarChart2, Edit, Shield, Trophy } from "lucide-react";

export default function ProfilePage() {
  const { t } = useTranslation();
  const user = {
    name: "Zied_TN",
    avatar: "avatar-1",
    points: 12580,
    rank: 1,
  };
  const avatarImage = PlaceHolderImages.find((p) => p.id === user.avatar);

  const achievements = [
    { icon: Trophy, name: "Football Expert", color: "text-yellow-500" },
    { icon: Award, name: "Tunisia Master", color: "text-red-500" },
    { icon: BarChart2, name: "Top 10 Weekly", color: "text-primary" },
    { icon: Shield, name: "Carthage Eagle", color: "text-blue-400" },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          {t("profile_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("profile_subtitle")}
        </p>
      </div>

      <Card className="mx-auto max-w-3xl glassmorphic">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="relative">
              <Avatar className="h-32 w-32 border-4 border-primary">
                {avatarImage && <AvatarImage src={avatarImage.imageUrl} />}
                <AvatarFallback className="text-4xl">Z</AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full"
              >
                <Edit className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="font-heading text-3xl font-bold">{user.name}</h1>
              <div className="mt-4 flex flex-wrap justify-center gap-6 sm:justify-start">
                <div>
                  <p className="text-sm text-muted-foreground">{t("profile_rank")}</p>
                  <p className="font-heading text-2xl font-bold text-primary">
                    #{user.rank}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("profile_points")}</p>
                  <p className="font-heading text-2xl font-bold text-primary">
                    {user.points.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mx-auto mt-8 max-w-3xl glassmorphic">
        <CardHeader>
          <CardTitle className="font-heading text-glow">{t("profile_achievements")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {achievements.map((ach, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-primary/20 bg-card/50 p-4 text-center"
              >
                <ach.icon className={`h-10 w-10 ${ach.color}`} />
                <p className="mt-2 font-semibold">{ach.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mx-auto mt-8 max-w-3xl glassmorphic">
        <CardHeader>
          <CardTitle className="font-heading">{t("profile_quiz_history")}</CardTitle>
        </CardHeader>
        <CardContent className="text-center text-muted-foreground pt-6">
          <p>{t("profile_quiz_history_desc")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
