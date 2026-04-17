"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { featuredQuizzes } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { Star, Users } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
    easy: t('categories_easy'),
    medium: t('categories_medium'),
    hard: t('categories_hard'),
  }

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="mb-8">
            <h2 className="text-3xl font-black text-glow">{t('featured_quizzes')}</h2>
            <p className="text-muted-foreground">{t('handpicked_by_team')}</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: language === "ar" ? "rtl" : "ltr",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {featuredQuizzes.map(quiz => {
                const image = PlaceHolderImages.find(p => p.id === quiz.imageId);
                return (
                    <CarouselItem key={quiz.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                       <div className="p-1">
                        <Link href={`/quiz/${quiz.id}?difficulty=${quiz.difficulty}`} passHref>
                            <Card className="glassmorphic group overflow-hidden h-full flex flex-col glow-on-hover">
                                <CardHeader className="p-0 relative h-48">
                                    {image && (
                                        <Image 
                                            src={image.imageUrl}
                                            alt={quiz.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <Badge variant={getDifficultyVariant(quiz.difficulty)} className="absolute top-3 right-3">
                                        {difficultyTranslations[quiz.difficulty]}
                                    </Badge>
                                     <CardTitle className="text-xl font-bold text-white absolute bottom-3 left-4 right-4">{quiz.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                    <p className="text-sm text-primary font-semibold">{quiz.category}</p>

                                    <p className="text-xs text-muted-foreground mt-2">{t('featured_by')} {quiz.author}</p>
                                </CardContent>
                                <CardFooter className="p-4 text-xs text-muted-foreground flex justify-between items-center border-t">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-accent" />
                                        <span>{quiz.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{quiz.questionCount} {t('featured_questions')}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                       </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 ltr:left-2 rtl:right-2 z-10 h-10 w-10 rounded-full bg-card/50 hover:bg-card border border-primary/20 text-primary hover:text-accent hidden md:flex" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2 z-10 h-10 w-10 rounded-full bg-card/50 hover:bg-card border border-primary/20 text-primary hover:text-accent hidden md:flex" />
        </Carousel>
    </section>
  );
}
