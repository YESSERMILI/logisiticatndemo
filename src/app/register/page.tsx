"use client";

import { AppName } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-transparent px-4 py-12">
      <Card className="w-full max-w-sm glassmorphic">
        <CardHeader className="text-center space-y-4 p-6">
          <div className="mx-auto">
            <AppName />
          </div>
          <div className="space-y-1">
            <CardTitle className="font-heading text-2xl">
              {t("register_title")}
            </CardTitle>
            <CardDescription>{t("register_subtitle")}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 p-6">
          <div className="grid gap-2">
            <Label htmlFor="username">{t("register_username")}</Label>
            <Input
              id="username"
              placeholder="YourPlayerName"
              required
              className="bg-transparent"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">{t("login_email")}</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-transparent"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">{t("login_password")}</Label>
            <Input id="password" type="password" required className="bg-transparent" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col p-6">
          <Button className="w-full">{t("register_create_account")}</Button>
          <div className="mt-4 text-center text-sm">
            {t("register_has_account")}{" "}
            <Link href="/login" className="underline">
              {t("register_signin")}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
