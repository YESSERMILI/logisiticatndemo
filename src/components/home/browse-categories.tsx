"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/data";
import { Icon } from "@/components/ui/icon";

export function BrowseCategories() {
  const { t, language } = useTranslation();
  const featured = categories.slice(0, 8);

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-glow">
            {t("browse_categories")}
          </h2>
          <p className="text-muted-foreground">{t('find_next_challenge')}</p>
        </div>
        <Link href="/categories" className="flex items-center gap-2 text-sm text-primary hover:underline">
          {t('view_all')} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
        {featured.map((category) => (
          <Link key={category.slug} href={`/quiz/${category.slug}`} passHref>
            <div className="group flex flex-col items-center gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl glassmorphic glow-on-hover transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/50">
                <Icon name={category.icon as any} className="h-10 w-10 text-primary transition-colors group-hover:text-accent" />
              </div>
              <p className="text-base font-semibold text-center truncate w-full">
                {category.name[language]}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
