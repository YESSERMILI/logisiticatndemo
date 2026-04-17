"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { featuredQuizzes } from "@/lib/data";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "../ui/badge";
import { Star, Users, ArrowLeft, ArrowRight } from "lucide-react";
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
    easy: language === 'ar' ? 'سهل' : 'Facile',
    medium: language === 'ar' ? 'متوسط' : 'Moyen',
    hard: language === 'ar' ? 'صعب' : 'Difficile',
  }

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
        <div className="mb-8">
            <h2 className="font-heading text-3xl font-bold text-glow">{t('featured_quizzes')}</h2>
            <p className="text-muted-foreground">{t('handpicked_by_team')}</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredQuizzes.map(quiz => {
                const image = PlaceHolderImages.find(p => p.id === quiz.imageId);
                return (
                    <CarouselItem key={quiz.id} className="md:basis-1/2 lg:basis-1/4">
                       <div className="p-1">
                        <Link href={`/quiz/${quiz.id}`} passHref>
                            <Card className="glassmorphic group overflow-hidden h-full flex flex-col">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <Badge variant={getDifficultyVariant(quiz.difficulty)} className="absolute top-3 right-3">
                                        {difficultyTranslations[quiz.difficulty]}
                                    </Badge>
                                     <CardTitle className="font-heading text-lg font-bold text-white absolute bottom-3 left-4">{quiz.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 flex-grow">
                                    <p className="text-sm text-primary font-semibold">{quiz.category}</p>
                                    <p className="text-xs text-muted-foreground mt-2">By {quiz.author}</p>
                                </CardContent>
                                <CardFooter className="p-4 text-xs text-muted-foreground flex justify-between items-center border-t">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-accent" />
                                        <span>{quiz.rating}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{quiz.questionCount} Questions</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Link>
                       </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4"/>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4"/>
        </Carousel>
    </section>
  );
}
