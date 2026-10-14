
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

export default function LoginPage() {
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
              {t('login_title')}
            </CardTitle>
            <CardDescription className={cn("text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('login_subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email" className={cn("text-white/70 text-xs font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                {t('login_email')}
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nom@exemple.com" 
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-[#F7931E] focus:border-[#F7931E]"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className={cn("text-white/70 text-xs font-bold uppercase tracking-widest", isAr && "font-arabic")}>
                  {t('login_password')}
                </Label>
                <Link href="#" className="text-[#F7931E] text-xs font-bold hover:underline">
                  {t('login_forgot')}
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-[#F7931E] focus:border-[#F7931E]"
              />
            </div>

            <Button className="w-full h-14 text-lg font-black bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] border-none shadow-lg">
              {t('login_submit')}
            </Button>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4 pb-10">
            <div className="flex items-center gap-4 w-full">
              <div className="h-px bg-white/10 flex-1" />
              <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Ou</span>
              <div className="h-px bg-white/10 flex-1" />
            </div>
            
            <p className={cn("text-center text-sm text-[#9FB2DE]", isAr && "font-arabic")}>
              {t('login_no_account')}{" "}
              <Link href="/register" className="text-[#F7931E] font-bold hover:underline">
                {t('login_register')}
              </Link>
            </p>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-white/40 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
