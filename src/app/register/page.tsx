
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
      className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#1F6FDB] opacity-20 rounded-full blur-[120px]"
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
      className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#F7931E] opacity-10 rounded-full blur-[140px]"
    />
  </div>
);

export default function RegisterPage() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="h-screen w-full bg-[#0B2A6B] flex flex-col items-center justify-center p-4 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <BackgroundShapes />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10 flex flex-col gap-4"
      >
        <div className="flex justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
          <CardHeader className="space-y-1 text-center pt-5 pb-1">
            <CardTitle className={cn("text-2xl font-black text-white tracking-tight", isAr && "font-arabic text-3xl")}>
              {t('register_title')}
            </CardTitle>
            <CardDescription className={cn("text-[#9FB2DE] font-medium text-xs", isAr && "font-arabic")}>
              {t('register_subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-3 pt-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="name" className={cn("text-white/70 text-[8px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                  {t('register_name')}
                </Label>
                <Input id="name" placeholder="Nom" className="bg-white/5 border-white/10 text-white h-10 text-sm focus:ring-[#F7931E] transition-all" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="shop" className={cn("text-white/70 text-[8px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                  {t('register_shop')}
                </Label>
                <Input id="shop" placeholder="Boutique" className="bg-white/5 border-white/10 text-white h-10 text-sm focus:ring-[#F7931E] transition-all" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className={cn("text-white/70 text-[8px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_email')}
              </Label>
              <Input id="email" type="email" placeholder="contact@shop.tn" className="bg-white/5 border-white/10 text-white h-10 text-sm focus:ring-[#F7931E] transition-all" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className={cn("text-white/70 text-[8px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('register_phone')}
              </Label>
              <Input id="phone" type="tel" placeholder="+216 -- --- ---" className="bg-white/5 border-white/10 text-white h-10 text-sm focus:ring-[#F7931E] transition-all" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className={cn("text-white/70 text-[8px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_password')}
              </Label>
              <Input id="password" type="password" className="bg-white/5 border-white/10 text-white h-10 text-sm focus:ring-[#F7931E] transition-all" />
            </div>

            <Button className="w-full h-12 text-lg font-black bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] border-none shadow-xl active:scale-95 transition-transform mt-2">
              {t('register_submit')}
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-3 pb-5">
            <p className={cn("text-center text-xs text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('register_have_account')}{" "}
              <Link href="/login" className="text-[#F7931E] font-bold hover:underline">
                {t('register_login')}
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-white/40 text-[9px] font-black uppercase tracking-[0.25em] hover:text-white transition-colors">
            ← {isAr ? "الرجوع للرئيسية" : "Retour à l'accueil"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
