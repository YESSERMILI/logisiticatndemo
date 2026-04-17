"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";

export default function CategoriesPage() {
  const { language, t } = useTranslation();
  const [difficulty, setDifficulty] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories
    .filter((cat) => difficulty === "all" || cat.avgDifficulty === difficulty)
    .filter(
      (cat) =>
        cat.name.fr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.name.ar.includes(searchTerm)
    );
  
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
    <div
      className="container mx-auto py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-black tracking-tight lg:text-5xl text-glow">
          {t("categories_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t('categories_subtitle')}
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute rtl:right-3 ltr:left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder={t('categories_search')}
            className="rtl:pr-10 ltr:pl-10 bg-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger className="w-full md:w-[180px] bg-transparent">
            <SelectValue placeholder={t('categories_difficulty')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t('categories_all')}</SelectItem>
            <SelectItem value="easy">{difficultyTranslations.easy}</SelectItem>
            <SelectItem value="medium">{difficultyTranslations.medium}</SelectItem>
            <SelectItem value="hard">{difficultyTranslations.hard}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCategories.map((category) => (
          <Link key={category.slug} href={`/quiz/${category.slug}?difficulty=${category.avgDifficulty}`} passHref>
            <Card className="flex h-full transform-gpu flex-col justify-between text-card-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl glow-on-hover glassmorphic">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={category.icon as any} className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-bold">
                    {category.name[language]}
                  </CardTitle>
                   <p className="text-sm text-muted-foreground">
                    {category.quizCount} {t('categories_quiz_count')}
                   </p>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant={getDifficultyVariant(category.avgDifficulty)}>
                    {difficultyTranslations[category.avgDifficulty]}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
         {filteredCategories.length === 0 && (
            <div className="col-span-full text-center text-muted-foreground py-16">
                <p>{t('categories_no_results')}</p>
            </div>
         )}
      </div>
    </div>
  );
}
