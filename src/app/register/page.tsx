
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

export default function RegisterPage() {
  const { t, language } = useTranslation();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-[#0B2A6B] flex items-center justify-center p-6" dir={isAr ? 'rtl' : 'ltr'}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Logo className="h-12 w-auto" />
          </Link>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F7931E] to-[#1F6FDB]" />
          
          <CardHeader className="space-y-2 text-center pt-10">
            <CardTitle className={cn("text-3xl font-black text-white", isAr && "font-arabic")}>
              {t('register_title')}
            </CardTitle>
            <CardDescription className={cn("text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('register_subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4 pt-6">
            <div className="space-y-1.5">
              <Label htmlFor="name" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('register_name')}
              </Label>
              <Input id="name" placeholder="Foulen Ben Foulen" className="bg-white/5 border-white/10 text-white h-11" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="shop" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('register_shop')}
              </Label>
              <Input id="shop" placeholder="Ma Boutique TN" className="bg-white/5 border-white/10 text-white h-11" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_email')}
              </Label>
              <Input id="email" type="email" placeholder="contact@shop.tn" className="bg-white/5 border-white/10 text-white h-11" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="phone" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('register_phone')}
              </Label>
              <Input id="phone" type="tel" placeholder="+216 -- --- ---" className="bg-white/5 border-white/10 text-white h-11" />
            </div>

            <div className="space-y-1.5 pb-4">
              <Label htmlFor="password" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_password')}
              </Label>
              <Input id="password" type="password" className="bg-white/5 border-white/10 text-white h-11" />
            </div>

            <Button className="w-full h-14 text-lg font-black bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] border-none shadow-lg">
              {t('register_submit')}
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-10">
            <p className={cn("text-center text-sm text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('register_have_account')}{" "}
              <Link href="/login" className="text-[#F7931E] font-bold hover:underline">
                {t('register_login')}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
