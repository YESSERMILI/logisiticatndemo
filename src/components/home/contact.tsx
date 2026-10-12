"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Phone, Mail, MapPin, Loader2, Send, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const { t, language } = useTranslation();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding bg-white" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-20 items-start">
          
          <div className="glass-panel p-8 md:p-12 rounded-[40px]">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase text-orange-500 tracking-widest">Étape {step} sur 3</span>
                <span className="text-xs font-bold text-gray-400">{Math.round((step / 3) * 100)}% complété</span>
              </div>
              <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-orange-500" 
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  {step === 1 && (
                    <div className="space-y-8">
                      <h3 className="text-3xl font-bold text-primary">{t('contact_step_1')}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_name')}</Label>
                          <Input required className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_phone')}</Label>
                          <Input type="tel" required className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_email')}</Label>
                        <Input type="email" className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-8">
                      <h3 className="text-3xl font-bold text-primary">{t('contact_step_2')}</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_shop')}</Label>
                          <Input className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_type')}</Label>
                          <Input className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_volume')}</Label>
                        <Input className="h-14 bg-gray-50 border-gray-200 rounded-xl px-6 focus:ring-secondary-500" />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-8">
                      <h3 className="text-3xl font-bold text-primary">{t('contact_step_3')}</h3>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-primary uppercase tracking-wider">{t('contact_form_message')}</Label>
                        <Textarea className="min-h-[150px] bg-gray-50 border-gray-200 rounded-xl p-6 focus:ring-secondary-500" />
                      </div>
                      <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <Checkbox id="consent" required className="mt-1" />
                        <Label htmlFor="consent" className="text-xs font-medium leading-relaxed cursor-pointer text-gray-600">
                          {t('contact_form_consent')}
                        </Label>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-6">
                    {step > 1 && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                        className="h-14 px-8 rounded-full font-bold border-2"
                      >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Précédent
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 btn-primary text-lg"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : step === 3 ? (
                        <>Envoyer ma demande <Send className="ml-2 h-5 w-5" /></>
                      ) : (
                        <>Continuer <ArrowRight className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-24 h-24 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
                  </div>
                  <h3 className="text-4xl font-bold text-primary mb-4">{t('contact_success_title')}</h3>
                  <p className="text-xl text-gray-600 mb-10">{t('contact_success_desc')}</p>
                  <Button variant="outline" className="btn-secondary h-14 px-12" onClick={() => {setIsSuccess(false); setStep(1);}}>
                    Nouvelle demande
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">{t('contact_title')}</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">{t('contact_subtitle')}</p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: MessageCircle, label: t('contact_info_whatsapp'), value: "[À REMPLACER]", color: "text-emerald-500", bg: "bg-emerald-50" },
                { icon: Mail, label: t('contact_info_email'), value: "[À REMPLACER]", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Phone, label: t('contact_info_phone'), value: "[À REMPLACER]", color: "text-orange-500", bg: "bg-orange-50" },
                { icon: MapPin, label: t('contact_info_address'), value: "[À REMPLACER]", color: "text-primary", bg: "bg-gray-100" },
              ].map((info, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-e2 transition-all group">
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", info.bg, info.color)}>
                    <info.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{info.label}</p>
                    <p className="text-lg font-bold text-primary mt-0.5">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
