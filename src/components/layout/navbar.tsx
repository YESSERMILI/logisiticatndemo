"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Trophy } from "lucide-react";
import { Logo } from "../logo";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageToggle } from "../language-toggle";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

const navLinks = [
  { href: "/", label: "nav_home" },
  { href: "/categories", label: "nav_categories" },
  { href: "/leaderboard", label: "nav_leaderboard" },
  { href: "/guilds", label: "nav_guilds" },
];

export function Navbar() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/30 backdrop-blur-lg">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-heading">
              3ez El Mondial
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {t(link.label as any)}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className={cn("pr-0", language === 'ar' && 'pl-0')}>
                <Link href="/" className="mr-6 flex items-center space-x-2 px-6">
                  <Trophy className="h-6 w-6 text-primary" />
                  <span className="font-bold sm:inline-block font-heading">
                    3ez El Mondial
                  </span>
                </Link>
                <div className="my-4 h-[calc(100vh-8rem)] px-6">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-foreground/80 text-foreground/80"
                      >
                        {t(link.label as any)}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="flex items-center gap-2">
            <LanguageToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">{t("nav_login")}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/register">{t("nav_register")}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
