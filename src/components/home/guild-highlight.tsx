"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { guilds } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Users, Shield } from "lucide-react";
import Link from "next/link";

export function GuildHighlight() {
  const { t, language } = useTranslation();

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="rounded-xl bg-secondary p-8">
        <div className="flex flex-col items-center text-center">
          <Shield className="h-12 w-12 text-primary" />
          <h2 className="mt-4 font-heading text-3xl font-bold">
            {t("guild_highlight_title")}
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            {t("guild_highlight_subtitle")}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {guilds.map((guild) => {
            const logoImage = PlaceHolderImages.find(p => p.id === guild.logo);
            return (
              <Card key={guild.name} className="bg-card">
                <CardHeader className="flex-row items-center gap-4">
                  {logoImage && (
                    <Image
                      src={logoImage.imageUrl}
                      alt={`${guild.name} logo`}
                      width={48}
                      height={48}
                      className="rounded-lg"
                      data-ai-hint={logoImage.imageHint}
                    />
                  )}
                  <div>
                    <CardTitle>{guild.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      {guild.memberCount} {language === "ar" ? "عضو" : "membres"}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-primary">
                    {guild.points.toLocaleString()} {t("leaderboard_points")}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="font-bold">
            <Link href="/guilds">{t("guild_highlight_cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
