
"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Phone, Mail, MapPin, Clock, Loader2, Send, Map } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { t, language } = useTranslation();
  const isRTL = language === "ar";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const contactInfo = [
    { icon: MessageCircle, key: "whatsapp" },
    { icon: Phone, key: "phone" },
    { icon: Mail, key: "email" },
    { icon: MapPin, key: "address" },
    { icon: Clock, key: "hours" },
  ];

  return (
    <section id="contact" className="py-24 bg-[#050B1A] text-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 leading-tight"
          >
            {t('contact_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-medium"
          >
            {t('contact_subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "bg-white rounded-[48px] p-8 md:p-14 shadow-3xl text-primary relative",
              isRTL ? "lg:order-1" : "lg:order-0"
            )}
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_name')}</Label>
                      <Input id="name" required className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_phone')}</Label>
                      <Input id="phone" type="tel" placeholder="+216" required className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_email')}</Label>
                      <Input id="email" type="email" className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-4">
                      <Label htmlFor="shop" className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_shop')}</Label>
                      <Input id="shop" className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <Label className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_type')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-primary/10">
                          <SelectItem value="fashion">Mode & Accessoires</SelectItem>
                          <SelectItem value="beauty">Beauté & Cosmétique</SelectItem>
                          <SelectItem value="tech">High-Tech</SelectItem>
                          <SelectItem value="home">Maison & Déco</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <Label className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_volume')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[64px] px-6 focus:bg-white transition-all shadow-sm">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-primary/10">
                          <SelectItem value="small">Moins de 100</SelectItem>
                          <SelectItem value="medium">100-500</SelectItem>
                          <SelectItem value="large">500-2000</SelectItem>
                          <SelectItem value="xlarge">Plus de 2000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-primary/30">{t('contact_form_message')}</Label>
                    <Textarea id="message" className="rounded-2xl border-primary/5 bg-[#F9FAFB] min-h-[160px] px-6 py-6 focus:bg-white transition-all shadow-sm" />
                  </div>

                  <div className="flex items-start gap-5">
                    <Checkbox id="consent" required className="mt-1 h-6 w-6 rounded-lg border-primary/20 transition-all data-[state=checked]:bg-secondary" />
                    <Label htmlFor="consent" className="text-sm font-medium leading-relaxed cursor-pointer text-muted-foreground">
                      {t('contact_form_consent')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-[72px] bg-orange hover:bg-orange/90 text-primary rounded-full font-black text-xl shadow-2xl shadow-orange/30 transition-all hover:-translate-y-1 active:scale-95 group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-7 w-7 animate-spin mr-3" />
                    ) : (
                      <Send className="h-7 w-7 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                    {t('contact_form_submit')}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center space-y-12"
                >
                  <div className="relative w-48 h-48 mx-auto">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-secondary/10 rounded-full" 
                    />
                    <div className="relative z-10 w-full h-full bg-secondary rounded-[40px] flex items-center justify-center shadow-3xl border-4 border-white/20">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                      >
                         <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-4xl font-black text-primary">{t('contact_form_success')}</h3>
                    <p className="text-lg text-muted-foreground font-medium">Votre demande logistique est en route. À très vite !</p>
                  </div>
                  <Button variant="outline" className="rounded-full px-12 h-14 font-bold border-primary/20 hover:bg-primary/5" onClick={() => setIsSuccess(false)}>
                    Retour au formulaire
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details & Animated Flow */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={info.key} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] group hover:bg-white/10 transition-all duration-500 shadow-2xl"
                >
                  <div className="w-16 h-16 bg-secondary/20 rounded-[20px] flex items-center justify-center mb-8 group-hover:bg-secondary/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <info.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4">
                    {info.key}
                  </h4>
                  <p className="text-xl font-bold text-white leading-relaxed">
                    {t(`contact_info_${info.key}` as any)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Final Flow Animation: Delivery point */}
            <div className="hidden lg:block relative h-40 w-full rounded-[40px] bg-white/5 border border-white/10 overflow-hidden group">
              <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/5">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                />
              </div>
              <motion.div 
                animate={{ x: isRTL ? ["0%", "-85%"] : ["0%", "85%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 px-10"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-14 bg-orange rounded-2xl flex items-center justify-center relative shadow-2xl shadow-orange/40 border-2 border-white/20">
                    <div className="absolute top-1/2 left-0 w-full h-2 bg-primary/20" />
                  </div>
                  <div className="text-secondary font-black tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    DESTINATION: VOUS
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-10 rounded-[40px] flex items-center gap-8 group hover:border-orange/30 transition-all duration-500">
              <div className="w-20 h-20 bg-orange/20 rounded-[24px] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                <Map className="h-10 w-10 text-orange" />
              </div>
              <div>
                <p className="text-white font-black text-2xl mb-1">Logistica Tunisie</p>
                <p className="text-white/40 font-medium">L'excellence opérationnelle, à chaque étape.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
