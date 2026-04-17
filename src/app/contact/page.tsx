"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { Mail } from "lucide-react";

export default function ContactPage() {
  const { t, language } = useTranslation();

  return (
    <div
      className="container mx-auto py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          {t("contact_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("contact_subtitle")}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto glassmorphic">
        <CardContent className="p-10 text-center">
          <Mail className="h-24 w-24 text-primary mx-auto" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            {t("contact_wip_title")}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground mx-auto">
            {t("contact_wip_desc")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
