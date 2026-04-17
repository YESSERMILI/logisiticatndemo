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
    easy: language === 'ar' ? 'سهل' : 'Facile',
    medium: language === 'ar' ? 'متوسط' : 'Moyen',
    hard: language === 'ar' ? 'صعب' : 'Difficile',
  }

  return (
    <div
      className="container mx-auto py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-8 text-center">
        <h1 className="font-heading text-4xl font-bold tracking-tight lg:text-5xl">
          {t("nav_categories")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {language === 'ar' ? 'اختر موضوعًا واختبر معلوماتك.' : 'Choisissez un sujet et testez vos connaissances.'}
        </p>
      </div>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder={language === 'ar' ? "ابحث عن فئة..." : "Rechercher une catégorie..."}
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={difficulty} onValueChange={setDifficulty}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder={language === 'ar' ? "الصعوبة" : "Difficulté"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{language === 'ar' ? "الكل" : "Toutes"}</SelectItem>
            <SelectItem value="easy">{difficultyTranslations.easy}</SelectItem>
            <SelectItem value="medium">{difficultyTranslations.medium}</SelectItem>
            <SelectItem value="hard">{difficultyTranslations.hard}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCategories.map((category) => (
          <Link key={category.slug} href={`/quiz/${category.slug}`} passHref>
            <Card className="flex h-full transform-gpu flex-col justify-between bg-card text-card-foreground transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl glow-on-hover">
              <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-xl font-bold font-heading">
                    {category.name[language]}
                  </CardTitle>
                   <p className="text-sm text-muted-foreground">
                    {category.quizCount} {language === 'ar' ? 'اختبار' : 'quiz'}
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
                <p>{language === 'ar' ? 'لم يتم العثور على فئات تطابق بحثك.' : 'Aucune catégorie ne correspond à votre recherche.'}</p>
            </div>
         )}
      </div>
    </div>
  );
}
