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
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#1F6FDB]/20 rounded-full blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -80, 0],
        y: [0, -100, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#F7931E]/10 rounded-full blur-[140px]"
    />
    <motion.div
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-[20%] right-[15%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px]"
    />
  </div>
);

export default function LoginPage() {
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
        <div className="flex justify-center mb-10">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo className="h-14 w-auto" />
          </Link>
        </div>

        <Card className="bg-white/5 border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F7931E] via-[#1F6FDB] to-[#F7931E]" />
          
          <CardHeader className="space-y-2 text-center pt-10">
            <CardTitle className={cn("text-3xl font-black text-white tracking-tight", isAr && "font-arabic")}>
              {t('login_title')}
            </CardTitle>
            <CardDescription className={cn("text-[#9FB2DE] font-medium", isAr && "font-arabic")}>
              {t('login_subtitle')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]", isAr && "font-arabic")}>
                {t('login_email')}
              </Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nom@exemple.com" 
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-2 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all placeholder:text-white/20"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className={cn("text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]", isAr && "font-arabic")}>
                  {t('login_password')}
                </Label>
                <Link href="#" className="text-[#F7931E] text-xs font-bold hover:text-white transition-colors">
                  {t('login_forgot')}
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-2 focus:ring-[#F7931E] focus:border-[#F7931E] transition-all"
              />
            </div>

            <Button className="w-full h-14 text-lg font-black bg-[#F7931E] text-[#0B2A6B] hover:bg-[#E0861A] border-none shadow-xl shadow-orange-500/10 active:scale-95 transition-transform">
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
          <Link href="/" className="text-white/40 text-[10px] font-black uppercase tracking-[0.25em] hover:text-white transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
