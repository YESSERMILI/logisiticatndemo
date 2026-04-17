"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import { Plus, Shield, Users } from "lucide-react";

export default function GuildsPage() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-glow">
          {t("guilds_title")}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {t("guilds_subtitle")}
        </p>
      </div>

      <Card className="max-w-4xl mx-auto glassmorphic">
        <CardContent className="p-10 text-center">
          <Shield className="h-24 w-24 text-primary mx-auto" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight">
            {t("guilds_wip_title")}
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground mx-auto">
            {t("guilds_wip_desc")}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" disabled>
              <Plus className="mr-2 h-5 w-5" />
              {t("guilds_create")}
            </Button>
            <Button size="lg" variant="outline" disabled>
              <Users className="mr-2 h-5 w-5" />
              {t("guilds_join")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
