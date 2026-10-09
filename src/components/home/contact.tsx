
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
import { MessageCircle, Phone, Mail, MapPin, Clock, Loader2, Send } from "lucide-react";
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
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container px-4 md:px-8 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-lg text-white/60">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Form Card */}
          <div className={cn(
            "bg-white rounded-[32px] p-8 md:p-10 card-shadow text-primary",
            isRTL ? "lg:order-1" : "lg:order-0"
          )}>
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
                      <Label htmlFor="name">{t('contact_form_name')}</Label>
                      <Input id="name" required className="rounded-xl border-primary/10 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('contact_form_phone')}</Label>
                      <Input id="phone" type="tel" placeholder="+216" required className="rounded-xl border-primary/10 h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('contact_form_email')}</Label>
                      <Input id="email" type="email" className="rounded-xl border-primary/10 h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shop">{t('contact_form_shop')}</Label>
                      <Input id="shop" className="rounded-xl border-primary/10 h-12" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>{t('contact_form_type')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-primary/10 h-12">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fashion">Mode & Accessoires</SelectItem>
                          <SelectItem value="beauty">Beauté & Cosmétique</SelectItem>
                          <SelectItem value="tech">High-Tech</SelectItem>
                          <SelectItem value="home">Maison & Déco</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>{t('contact_form_volume')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-primary/10 h-12">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Moins de 100</SelectItem>
                          <SelectItem value="medium">100-500</SelectItem>
                          <SelectItem value="large">500-2000</SelectItem>
                          <SelectItem value="xlarge">Plus de 2000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t('contact_form_message')}</Label>
                    <Textarea id="message" className="rounded-xl border-primary/10 min-h-[120px]" />
                  </div>

                  <div className="flex items-start space-x-3 space-x-reverse">
                    <Checkbox id="consent" required className="mt-1" />
                    <Label htmlFor="consent" className="text-sm font-medium leading-tight cursor-pointer">
                      {t('contact_form_consent')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-orange hover:bg-orange/90 text-white rounded-full font-bold text-lg"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                    ) : (
                      <Send className="h-5 w-5 mr-2" />
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
                    {/* Simplified Success Animation */}
                    <div className="absolute inset-0 bg-secondary/10 rounded-full animate-ping" />
                    <div className="relative z-10 w-full h-full bg-secondary rounded-full flex items-center justify-center">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </motion.div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-primary">{t('contact_form_success')}</h3>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Details */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info) => (
                <div key={info.key} className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-[24px] group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">
                    {info.key}
                  </h4>
                  <p className="font-bold text-white">
                    {t(`contact_info_${info.key}` as any)}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative Line with Parcel */}
            <div className="hidden lg:block relative h-24 w-full">
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10" />
              <motion.div 
                animate={{ x: ["0%", "80%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -translate-y-1/2"
              >
                <div className="w-12 h-10 bg-orange rounded-md flex items-center justify-center relative">
                  <div className="absolute top-1/2 left-0 w-full h-2 bg-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
