"use client";

import Link from "next/link";
import { Logo } from "../logo";
import { useTranslation } from "@/hooks/use-translation";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const { t, language } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];
  
  const footerLinks = {
    navigation: [
      { href: "/categories", label: t('nav_categories') },
      { href: "/leaderboard", label: t('nav_leaderboard') },
      { href: "/guilds", label: t('nav_guilds') },
    ],
    legal: [
        { href: "/privacy", label: t('footer_privacy') },
        { href: "/terms", label: t('footer_terms') },
        { href: "/contact", label: t('footer_contact') },
    ],
  };


  return (
    <footer className="w-full mt-24 border-t border-border/40 bg-background/80" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-start col-span-1 md:col-span-2">
          <Logo className="text-foreground" />
          <p className="text-sm text-muted-foreground max-w-sm">{t("footer_motto")}</p>
        </div>
        
        <div className="text-center md:text-start">
            <h3 className="font-bold mb-4">{t('footer_navigation')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {footerLinks.navigation.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        
        <div className="text-center md:text-start">
            <h3 className="font-bold mb-4">{t('footer_legal')}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                {footerLinks.legal.map(link => (
                    <li key={link.href}>
                        <Link href={link.href} className="hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-border/40">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} 3ez El Mondial. {t('footer_rights')}
        </p>
        <div className="flex items-center gap-4">
            {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    <link.icon className="h-5 w-5" />
                </Link>
            ))}
        </div>
      </div>
    </footer>
  );
}
