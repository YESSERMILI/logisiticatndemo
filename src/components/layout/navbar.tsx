"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Gem, Flame, User, Trophy, LogOut } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
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
          <SheetContent side="left" className={cn("pr-0", language === 'ar' && 'pl-0')}>
            <Link href="/" className="mr-6 flex items-center space-x-2 px-6">
              <Logo />
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


        <div className="flex flex-1 items-center justify-end gap-4">
           <div className="hidden sm:flex items-center gap-2">
              <Button asChild className="font-bold">
                 <Link href="/create">{t('create_quiz')}</Link>
              </Button>
           </div>
          <div className="flex items-center gap-2 border-r border-border pr-4 mr-2">
              <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold">
                  <Trophy className="h-4 w-4 text-accent"/>
                  <span>15,750</span>
              </div>
               <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm font-semibold">
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
                  <AvatarFallback>A</AvatarFallback>
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
               <Link href="/profile">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>{t('nav_profile')}</span>
                  </DropdownMenuItem>
               </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>{t('nav_logout')}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
