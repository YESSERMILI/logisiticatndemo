"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";

export function FeaturedCategories() {
  const { t, language } = useTranslation();
  const featured = categories.slice(0, 5);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <h2 className="mb-6 font-heading text-3xl font-bold text-glow">
        {t("featured_categories_title")}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {featured.map((category) => (
          <Link key={category.slug} href={`/quiz/${category.slug}`} passHref>
            <Card className="flex h-full transform-gpu flex-col justify-between text-card-foreground transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg glow-on-hover bg-card/30 backdrop-blur-lg border-primary/20">
              <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-bold">
                  {category.name[language]}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {category.quizCount} {language === 'ar' ? 'اختبار' : 'quiz'}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
        <Link href="/categories" passHref>
            <Card className="flex h-full transform-gpu flex-col items-center justify-center text-primary transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg glow-on-hover bg-primary/10 hover:bg-primary/20 backdrop-blur-lg border-primary/20">
                <p className="text-lg font-bold">
                    {language === 'ar' ? 'المزيد' : 'Voir plus'}
                </p>
            </Card>
        </Link>
      </div>
    </section>
  );
}
