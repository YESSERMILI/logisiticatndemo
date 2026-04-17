"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AppName } from "../logo";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Link from "next/link";

export function Hero() {
  const { t, language } = useTranslation();
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-stadium");

  return (
    <section
      className="relative h-[60vh] min-h-[500px] w-full text-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent" />

      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        <AppName className="text-primary-foreground" />

        <p className="mt-4 max-w-xl font-heading text-lg text-primary-foreground/80 md:text-xl">
          {t("hero_subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-bold">
            <Link href="/categories">
              {t("hero_cta_play")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold bg-transparent text-white hover:bg-white hover:text-black">
            <Link href="/register">
              {t("hero_cta_create_account")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
