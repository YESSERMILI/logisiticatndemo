"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BackgroundShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, -100, 0],
        y: [0, -50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1F6FDB]/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, 80, 0],
        y: [0, 100, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F7931E]/10 rounded-full blur-[140px]"
    />
  </div>
);

export default function RegisterPage() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="h-screen w-full bg-[#0B2A6B] flex items-center justify-center p-6 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <BackgroundShapes />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex justify-center mb-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo className="h-12 w-auto" />
          </Link>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F7931E] via-[#1F6FDB] to-[#F7931E]" />
          
          <CardHeader className="space-y-1 text-center pt-8">
            <CardTitle className={cn("text-2xl font-black text-white tracking-tight", isAr && "font-arabic")}>
              {t('register_title')}
            </CardTitle>
            <CardDescription className={cn("text-[#9FB2DE] font-medium text-sm", isAr && "font-arabic")}>
              {t('register_subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name" className={cn("text-white/70 text-[9px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                  {t('register_name')}
                </Label>
                <Input id="name" placeholder="Prénom Nom" className="bg-white/5 border-white/10 text-white h-11 focus:ring-[#F7931E] transition-all" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="shop" className={cn("text-white/70 text-[9px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                  {t('register_shop')}
                </Label>
                <Input id="shop" placeholder="Boutique TN" className="bg-white/5 border-white/10 text-white h-11 focus:ring-[#F7931E] transition-all" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className={cn("text-white/70 text-[9px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_email')}
              </Label>
              <Input id="email" type="email" placeholder="contact@shop.tn" className="bg-white/5 border-white/10 text-white h-11 focus:ring-[#F7931E] transition-all" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className={cn("text-white/70 text-[9px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('register_phone')}
              </Label>
              <Input id="phone" type="tel" placeholder="+216 -- --- ---" className="bg-white/5 border-white/10 text-white h-11 focus:ring-[#F7931E] transition-all" />
            </div>

            <div className="space-y-1.5 pb-2">
              <Label htmlFor="password" className={cn("text-white/70 text-[9px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_password')}
              </Label>
              <Input id="password" type="password" className="bg-white/5 border-white/10 text-white h-11 focus:ring-[#F7931E] transition-all" />
            </div>

            <Button className="w-full h-14 text-lg font-black bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] border-none shadow-xl active:scale-95 transition-transform">
              {t('register_submit')}
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-8">
            <p className={cn("text-center text-sm text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('register_have_account')}{" "}
              <Link href="/login" className="text-[#F7931E] font-bold hover:underline">
                {t('register_login')}
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/" className="text-white/40 text-[10px] font-black uppercase tracking-[0.25em] hover:text-white transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
