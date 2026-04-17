"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  const { t, language } = useTranslation();

  return (
    <div
      className="container mx-auto py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-black tracking-tight lg:text-5xl text-glow">
          {t("terms_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("terms_subtitle")}
        </p>
      </div>
      <Card className="max-w-4xl mx-auto glassmorphic">
        <CardHeader>
          <CardTitle>{t("terms_title")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6 text-muted-foreground leading-relaxed">
          <p>{t("terms_content_1")}</p>
          <p>{t("terms_content_2")}</p>
          <p>{t("terms_content_3")}</p>
        </CardContent>
      </Card>
    </div>
  );
}
