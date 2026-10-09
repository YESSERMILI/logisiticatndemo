
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
    }, 1500);
  };

  const contactInfo = [
    { icon: MessageCircle, key: "whatsapp" },
    { icon: Phone, key: "phone" },
    { icon: Mail, key: "email" },
    { icon: MapPin, key: "address" },
    { icon: Clock, key: "hours" },
  ];

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden" dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-64 -left-64 w-[600px] h-[600px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {t('contact_title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto font-medium"
          >
            {t('contact_subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "bg-white rounded-[40px] p-8 md:p-12 shadow-3xl text-primary relative",
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
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_name')}</Label>
                      <Input id="name" required className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_phone')}</Label>
                      <Input id="phone" type="tel" placeholder="+216" required className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_email')}</Label>
                      <Input id="email" type="email" className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="shop" className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_shop')}</Label>
                      <Input id="shop" className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_type')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors">
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
                    <div className="space-y-3">
                      <Label className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_volume')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-2xl border-primary/5 bg-[#F9FAFB] h-[60px] px-6 focus:bg-white transition-colors">
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

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-primary/40">{t('contact_form_message')}</Label>
                    <Textarea id="message" className="rounded-2xl border-primary/5 bg-[#F9FAFB] min-h-[140px] px-6 py-4 focus:bg-white transition-colors" />
                  </div>

                  <div className="flex items-start gap-4">
                    <Checkbox id="consent" required className="mt-1 h-5 w-5 rounded-md border-primary/20" />
                    <Label htmlFor="consent" className="text-sm font-medium leading-relaxed cursor-pointer text-muted-foreground">
                      {t('contact_form_consent')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-[64px] bg-orange hover:bg-orange/90 text-primary rounded-full font-black text-lg shadow-2xl shadow-orange/20 transition-all hover:-translate-y-1 active:scale-95 group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-6 w-6 animate-spin mr-2" />
                    ) : (
                      <Send className="h-6 w-6 mr-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                    {t('contact_form_submit')}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-10"
                >
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 bg-secondary/10 rounded-full animate-ping" />
                    <div className="relative z-10 w-full h-full bg-secondary rounded-full flex items-center justify-center shadow-3xl">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      >
                         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </motion.div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-black text-primary">{t('contact_form_success')}</h3>
                    <p className="text-muted-foreground font-medium">Votre demande a été prise en compte avec succès.</p>
                  </div>
                  <Button variant="outline" className="rounded-full px-8 h-12" onClick={() => setIsSuccess(false)}>
                    Retour au formulaire
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={info.key} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-all duration-300 group-hover:scale-110">
                    <info.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h4 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-3">
                    {info.key}
                  </h4>
                  <p className="text-lg font-bold text-white leading-relaxed">
                    {t(`contact_info_${info.key}` as any)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Decorative Flow Animation */}
            <div className="hidden lg:block relative h-32 w-full">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-1/3 h-full bg-gradient-to-r from-transparent via-secondary to-transparent"
                />
              </div>
              <motion.div 
                animate={{ x: isRTL ? ["0%", "-80%"] : ["0%", "80%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-14 bg-orange rounded-2xl flex items-center justify-center relative shadow-xl shadow-orange/20 border-2 border-white/10">
                  <div className="absolute top-1/2 left-0 w-full h-2 bg-primary/20" />
                </div>
              </motion.div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex items-center gap-6 group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-orange/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Map className="h-8 w-8 text-orange" />
              </div>
              <div>
                <p className="text-white font-black text-xl">Logistica Tunisie</p>
                <p className="text-white/50 font-medium">L'excellence logistique, à votre portée.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
