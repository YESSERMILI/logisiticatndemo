
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
import { placeholders } from "@/config/placeholders";

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
    { icon: MessageCircle, key: "whatsapp", value: placeholders.contact.whatsapp },
    { icon: Phone, key: "phone", value: placeholders.contact.phone },
    { icon: Mail, key: "email", value: placeholders.contact.email },
    { icon: MapPin, key: "address", value: placeholders.contact.address },
  ];

  return (
    <section id="contact" className="py-24 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container px-4 md:px-8 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-primary mb-4 leading-tight uppercase"
          >
            {t('contact_title')}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="text-lg text-slate-text max-w-2xl font-medium">
              {t('contact_subtitle')}
            </p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-secondary border border-blue-100 text-xs font-bold italic">
              {t('contact_response_delay')}{placeholders.meta.responseDelay}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-16 items-start">
          {/* Form Card (60%) */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 bg-white rounded-[28px] p-8 border border-primary/5 shadow-sm"
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
                      <Label htmlFor="name" className="text-sm font-bold text-primary">{t('contact_form_name')}</Label>
                      <Input id="name" required className="rounded-xl border-slate-300 h-14 px-5 focus:ring-secondary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-bold text-primary">{t('contact_form_phone')}</Label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">+216</span>
                        <Input id="phone" type="tel" placeholder="00 000 000" required className="rounded-xl border-slate-300 h-14 pl-14 focus:ring-secondary transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-bold text-primary">{t('contact_form_email')}</Label>
                      <Input id="email" type="email" className="rounded-xl border-slate-300 h-14 px-5 focus:ring-secondary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shop" className="text-sm font-bold text-primary">{t('contact_form_shop')}</Label>
                      <Input id="shop" className="rounded-xl border-slate-300 h-14 px-5 focus:ring-secondary transition-all" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-primary">{t('contact_form_type')}</Label>
                      <Select required>
                        <SelectTrigger className="rounded-xl border-slate-300 h-14 px-5 focus:ring-secondary transition-all">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="fashion">Mode & Accessoires</SelectItem>
                          <SelectItem value="beauty">Beauté & Cosmétique</SelectItem>
                          <SelectItem value="tech">High-Tech & Électronique</SelectItem>
                          <SelectItem value="home">Maison & Déco</SelectItem>
                          <SelectItem value="food">Alimentaire</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-bold text-primary">{t('contact_form_volume')}</Label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-slate-300 h-14 px-5 focus:ring-secondary transition-all">
                          <SelectValue placeholder="Choisir..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl">
                          <SelectItem value="small">Moins de 50</SelectItem>
                          <SelectItem value="medium">50 - 200</SelectItem>
                          <SelectItem value="large">200 - 500</SelectItem>
                          <SelectItem value="xlarge">Plus de 500</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-bold text-primary">{t('contact_form_message')}</Label>
                    <Textarea id="message" className="rounded-xl border-slate-300 min-h-[120px] px-5 py-4 focus:ring-secondary transition-all" />
                  </div>

                  <div className="flex items-start gap-4">
                    <Checkbox id="consent" required className="mt-1 h-5 w-5 rounded-md border-slate-300" />
                    <Label htmlFor="consent" className="text-xs font-medium leading-tight cursor-pointer text-slate-text">
                      {t('contact_form_consent')}
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-14 bg-orange hover:bg-orange/90 text-primary rounded-full font-bold text-lg shadow-lg shadow-orange/20 transition-all hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-6 w-6 animate-spin mr-3" />
                    ) : (
                      <Send className="h-5 w-5 mr-3" />
                    )}
                    {t('contact_form_submit')}
                  </Button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-primary">{t('contact_form_success')}</h3>
                    <p className="text-slate-text font-medium">{t('contact_form_success_desc')}</p>
                  </div>
                  <Button variant="outline" className="rounded-full px-8 h-12 font-bold" onClick={() => setIsSuccess(false)}>
                    Retour au formulaire
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Details (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div 
                  key={info.key} 
                  className="bg-blue-50 border border-blue-100 p-6 rounded-2xl group hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-[10px] font-black text-slate-text uppercase tracking-widest mb-1">
                    {t(`contact_info_${info.key}` as any)}
                  </h4>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white text-blue-600 border border-blue-100 italic">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-navy-950 p-8 rounded-2xl text-white flex items-center gap-6 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 -mr-16 -mt-16 rounded-full blur-2xl" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="h-8 w-8 text-orange" />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">{t('contact_info_hours')}</h4>
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/10 italic">
                  {placeholders.contact.hours}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary to-blue-500 p-8 rounded-2xl text-white flex items-center gap-6 group">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                <Map className="h-8 w-8" />
              </div>
              <div>
                <p className="font-black text-xl mb-0.5">Logistica Tunisie</p>
                <p className="text-white/80 text-sm font-medium italic opacity-70">Opérations optimisées.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
