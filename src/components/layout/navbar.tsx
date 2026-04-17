"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, LogOut, User, Flame, Trophy } from "lucide-react";
import { Logo } from "../logo";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageToggle } from "../language-toggle";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "nav_home" },
  { href: "/categories", label: "nav_categories" },
  { href: "/leaderboard", label: "nav_leaderboard" },
  { href: "/guilds", label: "nav_guilds" },
];

export function Navbar() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const userAvatar = PlaceHolderImages.find(p => p.id === 'avatar-1');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="hidden md:flex md:flex-1">
          <Link href="/" className="me-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-muted-foreground font-medium"
              >
                {t(link.label as any)}
              </Link>
            ))}
          </nav>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={language === 'ar' ? 'right' : 'left'} className={cn("p-0")}>
            <div className="p-6">
                <Link href="/" className="flex items-center space-x-2">
                <Logo />
                </Link>
            </div>
            <div className="h-[calc(100vh-8rem)] p-6 pt-0">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg transition-colors hover:text-foreground text-muted-foreground"
                  >
                    {t(link.label as any)}
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 md:hidden items-center justify-center">
            <Logo />
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
           <div className="hidden sm:flex items-center">
              <Button asChild className="font-bold glow-on-hover">
                 <Link href="/create">{t('create_quiz')}</Link>
              </Button>
           </div>
          <div className="flex items-center gap-2 border-border ps-2 sm:ps-4 sm:border-s sm:ms-2">
              <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold">
                  <Trophy className="h-4 w-4 text-accent"/>
                  <span>15,750</span>
              </div>
               <div className="flex items-center gap-1 rounded-lg bg-secondary px-2 py-1.5 text-sm font-semibold">
                  <Flame className="h-4 w-4 text-orange-400"/>
                  <span>7</span>
              </div>
          </div>
          
          <LanguageToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  {userAvatar && <AvatarImage src={userAvatar.imageUrl} />}
                  <AvatarFallback>Z</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Zied_TN</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    zied.tn@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="cursor-pointer">
                    <Link href="/profile">
                        <User className="me-2 h-4 w-4" />
                        <span>{t('nav_profile')}</span>
                    </Link>
                </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LogOut className="me-2 h-4 w-4" />
                <span>{t('nav_logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
