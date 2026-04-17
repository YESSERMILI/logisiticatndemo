"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Gift } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function DailyChallenge() {
  const { t, language } = useTranslation();

  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const difference = endOfDay.getTime() - now.getTime();

    let timeLeft = {
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2,"0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2,"0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section dir={language === "ar" ? "rtl" : "ltr"}>
      <Card className="bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="flex items-center justify-between font-heading text-xl">
            {t("daily_challenge_title")}
            <Clock className="h-5 w-5 text-muted-foreground" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center text-center">
          <div className="my-4 flex items-center justify-center gap-2">
            <Gift className="h-12 w-12 text-accent" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">
                {t("daily_challenge_reward_prefix")}
              </p>
              <p className="font-heading text-2xl font-bold">1Go</p>
              <p className="text-sm text-muted-foreground">
                {t("daily_challenge_reward_suffix")}
              </p>
            </div>
          </div>
          <div className="my-4 w-full rounded-lg bg-secondary p-4">
            <p className="mb-2 text-sm text-muted-foreground">
              {t("daily_challenge_ends_in")}
            </p>
            <div className="flex justify-center gap-2 font-mono text-3xl font-bold text-primary">
              <div>{timeLeft.hours}</div>
              <span>:</span>
              <div>{timeLeft.minutes}</div>
              <span>:</span>
              <div>{timeLeft.seconds}</div>
            </div>
          </div>
          <Button className="w-full font-bold">
            ابدأ التحدي
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
