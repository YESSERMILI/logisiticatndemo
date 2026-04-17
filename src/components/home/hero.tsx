"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { AppName } from "../logo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { t, language } = useTranslation();

  return (
    <section
      className="relative h-[60vh] min-h-[500px] w-full"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center">
        <AppName className="text-foreground" />

        <p className="mt-4 max-w-xl font-heading text-lg text-muted-foreground md:text-xl">
          {t("hero_subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="font-bold glow-on-hover">
            <Link href="/categories">
              {t("hero_cta_play")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-bold border-primary/50 bg-transparent text-primary-foreground hover:bg-primary hover:text-primary-foreground">
            <Link href="/register">
              {t("hero_cta_create_account")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
