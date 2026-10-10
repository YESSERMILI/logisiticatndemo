
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
    <section id="contact" className="py-16 bg-[#050B1A] text-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[180px] pointer-events-none opacity-50" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 leading-tight"
          >
            {t('contact_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/50 max-w-2xl mx-auto font-medium"
          >
            {t('contact_subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "lg:col-span-7 bg-white rounded-[40px] p-6 md:p-10 shadow-3xl text-primary relative",
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
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_name')}</Label>
                      <Input id="name" required className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_phone')}</Label>
                      <Input id="phone" type="tel" placeholder="+216" required className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_email')}</Label>
                      <Input id="email" type="email" className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shop" className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_shop')}</Label>
                      <Input id="shop" className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_type')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="fashion">Mode & Accessoires</SelectItem>
                          <SelectItem value="beauty">Beauté & Cosmétique</SelectItem>
                          <SelectItem value="tech">High-Tech</SelectItem>
                          <SelectItem value="home">Maison & Déco</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_volume')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-primary/5 bg-[#F9FAFB] h-14 px-5 focus:bg-white transition-all shadow-sm">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="small">Moins de 100</SelectItem>
                          <SelectItem value="medium">100-500</SelectItem>
                          <SelectItem value="large">500-2000</SelectItem>
                          <SelectItem value="xlarge">Plus de 2000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary/40">{t('contact_form_message')}</Label>
                    <Textarea id="message" className="rounded-xl border-primary/5 bg-[#F9FAFB] min-h-[100px] px-5 py-4 focus:bg-white transition-all shadow-sm" />
                  </div>

                  <div className="flex items-start gap-4">
                    <Checkbox id="consent" required className="mt-1 h-5 w-5 rounded-md border-primary/20" />
                    <Label htmlFor="consent" className="text-xs font-medium leading-tight cursor-pointer text-muted-foreground">
                      {t('contact_form_consent')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-16 bg-orange hover:bg-orange/90 text-primary rounded-full font-black text-lg shadow-xl shadow-orange/20 transition-all hover:-translate-y-1 group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-6 w-6 animate-spin mr-3" />
                    ) : (
                      <Send className="h-6 w-6 mr-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                    {t('contact_form_submit')}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-8"
                >
                  <div className="relative w-32 h-32 mx-auto">
                    <div className="w-full h-full bg-secondary rounded-[32px] flex items-center justify-center shadow-xl">
                       <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-black text-primary">{t('contact_form_success')}</h3>
                    <p className="text-muted-foreground font-medium">Votre demande logistique est en route. À très vite !</p>
                  </div>
                  <Button variant="outline" className="rounded-full px-10 h-12 font-bold" onClick={() => setIsSuccess(false)}>
                    Retour au formulaire
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={info.key} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[32px] group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                    <info.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h4 className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] mb-2">
                    {info.key}
                  </h4>
                  <p className="text-base font-bold text-white leading-snug">
                    {t(`contact_info_${info.key}` as any)}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 rounded-[32px] flex items-center gap-6 group">
              <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center shrink-0">
                <Map className="h-8 w-8 text-orange" />
              </div>
              <div>
                <p className="text-white font-black text-xl mb-0.5">Logistica Tunisie</p>
                <p className="text-white/40 text-sm font-medium">L'excellence opérationnelle, à chaque étape.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

