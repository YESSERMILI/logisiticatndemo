
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useTranslation } from "@/hooks/use-translation";
import { LanguageToggle } from "@/components/language-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const logo = PlaceHolderImages.find(p => p.id === 'logistica-logo');
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: t('nav_steps'), href: "#steps" },
    { name: t('nav_dashboard'), href: "#dashboard" },
    { name: t('nav_commitments'), href: "#engagements" },
  ];

  return (
    <nav className="glass-nav h-20">
      <div className="container flex h-full items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          {logo && (
            <div className="relative h-10 w-40 md:h-12 md:w-48">
              <Image
                src={logo.imageUrl}
                alt="Logistica Tunisie"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          )}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-primary/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-6 w-px bg-border mx-2" />
          <LanguageToggle />
          <Button className="bg-orange hover:bg-orange/90 text-white rounded-full px-8 shadow-lg shadow-orange/20">
            {t('nav_contact')}
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-primary"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b lg:hidden z-40 p-6 flex flex-col gap-6 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-primary"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-orange text-white w-full rounded-full py-6">
              {t('nav_contact')}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
