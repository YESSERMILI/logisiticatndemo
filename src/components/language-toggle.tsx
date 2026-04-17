"use client";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="uppercase">{language === "ar" ? "FR" : "AR"}</span>
    </Button>
  );
}
