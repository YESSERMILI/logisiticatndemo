"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { leaderboardUsers } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Crown, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LeaderboardPage() {
  const { language, t } = useTranslation();

  const getRankIndicator = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-400" />;
    if (rank === 2) return <Crown className="h-5 w-5 text-slate-400" />;
    if (rank === 3) return <Crown className="h-5 w-5 text-orange-400" />;
    return rank;
  };

  const renderTable = (data: typeof leaderboardUsers) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px] text-center">{language === "ar" ? "الترتيب" : "Rang"}</TableHead>
          <TableHead>{language === "ar" ? "اللاعب" : "Joueur"}</TableHead>
          <TableHead className="text-right">{language === "ar" ? "النقاط" : "Points"}</TableHead>
          <TableHead className="hidden text-right md:table-cell">{language === "ar" ? "سلسلة" : "Série"}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((user) => {
          const avatarImage = PlaceHolderImages.find((p) => p.id === user.avatar);
          return (
            <TableRow key={user.rank} className={user.rank <=3 ? "bg-secondary/50" : ""}>
              <TableCell className="text-center font-bold">{getRankIndicator(user.rank)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar>
                    {avatarImage && <AvatarImage src={avatarImage.imageUrl} />}
                    <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{user.username}</span>
                </div>
              </TableCell>
              <TableCell className="text-right font-semibold text-primary">
                {user.points.toLocaleString()}
              </TableCell>
              <TableCell className="hidden text-right text-muted-foreground md:table-cell">
                <div className="flex items-center justify-end gap-1">
                  <span>{user.streak}</span>
                  <span>🔥</span>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );

  return (
    <div className="container mx-auto py-8" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          {t("nav_leaderboard")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {language === "ar" ? "من هو بطل عز المونديال؟" : "Qui est le champion de 3ez El Mondial?"}
        </p>
      </div>
      
      <Card className="mb-8 glassmorphic">
        <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
                <Star className="text-accent" />
                {language === "ar" ? "جوائز TT" : "Récompenses TT"}
            </CardTitle>
            <CardDescription>
                {language === "ar" ? "أفضل 10 لاعبين كل أسبوع يفوزون بباقات إنترنت مجانية!" : "Le Top 10 de chaque semaine gagne des forfaits internet gratuits!"}
            </CardDescription>
        </CardHeader>
      </Card>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="daily">{language === "ar" ? "يومي" : "Journalier"}</TabsTrigger>
          <TabsTrigger value="weekly">{language === "ar" ? "أسبوعي" : "Hebdomadaire"}</TabsTrigger>
          <TabsTrigger value="all-time">{language === "ar" ? "إجمالي" : "Total"}</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
            <Card className="glassmorphic"><CardContent className="p-0">{renderTable(leaderboardUsers)}</CardContent></Card>
        </TabsContent>
        <TabsContent value="weekly">
            <Card className="glassmorphic"><CardContent className="p-0">{renderTable(leaderboardUsers)}</CardContent></Card>
        </TabsContent>
        <TabsContent value="all-time">
            <Card className="glassmorphic"><CardContent className="p-0">{renderTable(leaderboardUsers)}</CardContent></Card>
        </TabsContent>
      </Tabs>
      
      <div className="sticky bottom-0 mt-8 py-4 bg-background/80 backdrop-blur-lg">
          <Card className="border-accent shadow-lg glassmorphic">
              <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-lg">2,345</span>
                    <div>
                        <p className="font-bold">{t("profile_rank")}</p>
                        <p className="text-sm text-muted-foreground">{t("leaderboard_you")}</p>
                    </div>
                  </div>
                  <p className="font-bold text-primary text-lg">1,250 {t('leaderboard_points')}</p>
              </CardContent>
          </Card>
      </div>

    </div>
  );
}
