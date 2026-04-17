"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/data";
import { useTranslation } from "@/hooks/use-translation";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";

export function BrowseCategories() {
  const { t, language } = useTranslation();
  const featured = categories.slice(0, 8);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-heading text-3xl font-bold text-glow">
            {t("browse_categories")}
          </h2>
          <p className="text-muted-foreground">{t('find_next_challenge')}</p>
        </div>
        <Link href="/categories" className="flex items-center gap-2 text-sm text-primary hover:underline">
          {t('view_all')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
        {featured.map((category) => (
          <Link key={category.slug} href={`/quiz/${category.slug}`} passHref>
            <div className="group flex flex-col items-center gap-3 transition-transform duration-300 ease-in-out hover:-translate-y-1">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl glassmorphic glow-on-hover transition-colors group-hover:bg-primary/20">
                <Icon name={category.icon as any} className="h-8 w-8 text-primary group-hover:text-accent" />
              </div>
              <p className="text-sm font-semibold text-center truncate w-full">
                {category.name[language]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
