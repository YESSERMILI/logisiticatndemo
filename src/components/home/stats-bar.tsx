"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { featuredQuizzes } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { Star, Users } from "lucide-react";
import Link from "next/link";

export function FeaturedQuizzes() {
  const { t, language } = useTranslation();

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
    <section dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="mb-6">
            <h2 className="font-heading text-3xl font-bold text-glow">{t('featured_quizzes')}</h2>
            <p className="text-muted-foreground">{t('handpicked_by_team')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredQuizzes.map(quiz => {
                const image = PlaceHolderImages.find(p => p.id === quiz.imageId);
                return (
                    <Link key={quiz.id} href={`/quiz/${quiz.id}`} passHref>
                        <Card className="glassmorphic group overflow-hidden h-full flex flex-col">
                            <CardHeader className="p-0 relative h-40">
                                {image && (
                                    <Image 
                                        src={image.imageUrl}
                                        alt={quiz.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                                <Badge variant={getDifficultyVariant(quiz.difficulty)} className="absolute top-3 right-3">
                                    {difficultyTranslations[quiz.difficulty]}
                                </Badge>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow flex flex-col">
                                <p className="text-sm text-primary font-semibold">{quiz.category}</p>
                                <CardTitle className="font-heading text-lg font-bold mt-1 flex-grow">{quiz.title}</CardTitle>
                                <p className="text-xs text-muted-foreground mt-2">By {quiz.author}</p>
                            </CardContent>
                            <CardFooter className="p-4 text-xs text-muted-foreground flex justify-between items-center">
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-accent" />
                                    <span>{quiz.rating}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{quiz.questionCount}</span>
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                )
            })}
        </div>
    </section>
  );
}
