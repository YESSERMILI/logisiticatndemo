"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { Bot, PenSquare } from "lucide-react";

export default function CreatePage() {
  const { t, language } = useTranslation();

  return (
    <div
      className="container mx-auto py-8"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          {t("create_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("create_subtitle")}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto glassmorphic">
        <CardContent className="p-10 text-center">
          <PenSquare className="h-24 w-24 text-primary mx-auto" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            {t("create_wip_title")}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground mx-auto">
            {t("create_wip_desc")}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" disabled>
              <Bot className="mr-2 h-5 w-5" />
              {t("ai_assistant")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
