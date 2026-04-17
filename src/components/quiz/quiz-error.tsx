"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export function QuizError() {
  const { t, language } = useTranslation();
  return (
    <div
      className="container mx-auto max-w-2xl py-12"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <Alert
        variant="destructive"
        className="glassmorphic border-destructive/50"
      >
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>{t("quiz_error_title")}</AlertTitle>
        <AlertDescription>{t("quiz_error_desc")}</AlertDescription>
      </Alert>
      <div className="mt-6 text-center">
        <Button asChild>
          <Link href="/categories">{t("quiz_back_to_categories")}</Link>
        </Button>
      </div>
    </div>
  );
}
