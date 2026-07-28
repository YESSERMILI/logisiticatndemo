
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { featuredQuizzes } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { Star, Users, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";

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
    <section dir={language === "ar" ? "rtl" : "ltr"} className="relative">
        <div className="mb-12">
            <h2 className="text-4xl font-black text-glow tracking-tight">{t('featured_quizzes')}</h2>
            <p className="text-lg text-muted-foreground mt-2">{t('handpicked_by_team')}</p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            direction: language === "ar" ? "rtl" : "ltr",
          }}
          className="w-full relative px-4"
        >
          <CarouselContent className="-ml-6">
            {featuredQuizzes.map(quiz => {
                const image = PlaceHolderImages.find(p => p.id === quiz.imageId);
                return (
                    <CarouselItem key={quiz.id} className="md:basis-1/2 lg:basis-1/3 pl-6 pb-4">
                       <div className="h-full">
                        <Link href={`/quiz/${quiz.id}?difficulty=${quiz.difficulty}`} passHref>
                            <Card className="glassmorphic group overflow-hidden h-full flex flex-col glow-on-hover border-primary/20 hover:border-primary/40 transition-all duration-300 transform-gpu hover:-translate-y-1">
                                <CardHeader className="p-0 relative h-56">
                                    {image && (
                                        <Image 
                                            src={image.imageUrl}
                                            alt={quiz.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                                    <Badge variant={getDifficultyVariant(quiz.difficulty)} className="absolute top-4 right-4 shadow-lg backdrop-blur-md">
                                        {difficultyTranslations[quiz.difficulty]}
                                    </Badge>
                                     <CardTitle className="text-2xl font-black text-white absolute bottom-4 left-6 right-6 line-clamp-2">
                                        {quiz.title}
                                     </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6 flex-grow">
                                    <p className="text-sm text-primary font-bold uppercase tracking-wider">{quiz.category}</p>
                                    <p className="text-sm text-muted-foreground mt-3 flex items-center gap-2">
                                        {t('featured_by')} <span className="text-foreground font-semibold">{quiz.author}</span>
                                    </p>
                                </CardContent>
                                <CardFooter className="p-6 pt-0 text-sm text-muted-foreground flex justify-between items-center border-t border-primary/10">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-accent fill-accent" />
                                        <span className="font-bold text-foreground">{quiz.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5" />
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
          
          <div className="absolute -top-16 rtl:left-4 ltr:right-4 flex gap-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 glassmorphic border-primary/30 text-primary hover:bg-primary hover:text-white" />
            <CarouselNext className="static translate-y-0 h-10 w-10 glassmorphic border-primary/30 text-primary hover:bg-primary hover:text-white" />
          </div>
        </Carousel>
    </section>
  );
}
