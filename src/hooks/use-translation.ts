"use client";

import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: keyof (typeof translations)["ar"]) => {
    return translations[language][key] || key;
  };

  return { t, language };
};
