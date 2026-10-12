"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Phone, Mail, MapPin, Loader2, Send, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
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
        <div className="grid lg:grid-cols-[1.4fr,1fr] gap-24 items-start">
          
          <div className="bg-white p-8 md:p-14 rounded-[48px] border border-gray-100 shadow-e3 relative reveal">
            <div className="mb-14">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase text-orange-600 tracking-widest">Étape {step} sur 3</span>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{Math.round((step / 3) * 100)}% complété</span>
              </div>
              <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden">
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
                  className="space-y-10"
                >
                  {step === 1 && (
                    <div className="space-y-10">
                      <h3 className="text-3xl font-heading font-extrabold text-primary-900 uppercase">{t('contact_step_1')}</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_name')}</Label>
                          <Input required className="h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 focus:ring-4 focus:ring-secondary-500/10 transition-all" />
                        </div>
                        <div className="space-y-3">
                          <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_phone')}</Label>
                          <div className="relative">
                            <span className="absolute left-6 top-1/2 -translate-y-1/2 font-bold text-gray-400">+216</span>
                            <Input type="tel" required className="h-14 bg-gray-50 border-gray-100 rounded-2xl pl-16 pr-6 focus:ring-4 focus:ring-secondary-500/10 transition-all" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_email')}</Label>
                        <Input type="email" className="h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 focus:ring-4 focus:ring-secondary-500/10 transition-all" />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-10">
                      <h3 className="text-3xl font-heading font-extrabold text-primary-900 uppercase">{t('contact_step_2')}</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_shop')}</Label>
                          <Input className="h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 focus:ring-4 focus:ring-secondary-500/10 transition-all" />
                        </div>
                        <div className="space-y-3">
                          <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_type')}</Label>
                          <Input placeholder="Mode, High-tech, etc." className="h-14 bg-gray-50 border-gray-100 rounded-2xl px-6 focus:ring-4 focus:ring-secondary-500/10 transition-all" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_volume')}</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {['50-100', '100-500', '500-1000', '1000+'].map(v => (
                            <button key={v} type="button" className="h-12 border-2 border-gray-100 rounded-xl text-xs font-black hover:border-orange-500 hover:text-orange-500 transition-all uppercase tracking-widest focus:bg-orange-50 focus:border-orange-500 focus:text-orange-500">
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-10">
                      <h3 className="text-3xl font-heading font-extrabold text-primary-900 uppercase">{t('contact_step_3')}</h3>
                      <div className="space-y-3">
                        <Label className="text-xs font-black text-primary-900 uppercase tracking-widest">{t('contact_form_message')}</Label>
                        <Textarea className="min-h-[160px] bg-gray-50 border-gray-100 rounded-2xl p-6 focus:ring-4 focus:ring-secondary-500/10 transition-all resize-none" />
                      </div>
                      <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 group cursor-pointer">
                        <Checkbox id="consent" required className="mt-1" />
                        <Label htmlFor="consent" className="text-xs font-medium leading-relaxed cursor-pointer text-gray-500">
                          {t('contact_form_consent')}
                        </Label>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-6 pt-4">
                    {step > 1 && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={prevStep}
                        className="h-16 px-10 rounded-full font-black border-2 border-primary-900 text-primary-900 uppercase tracking-widest text-xs hover:bg-gray-50 transition-all"
                      >
                        <ArrowLeft className="mr-3 h-5 w-5" />
                        Précédent
                      </Button>
                    )}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex-1 btn-primary h-16 text-lg shadow-orange"
                    >
                      {isSubmitting ? (
                        <Loader2 className="h-6 w-6 animate-spin" />
                      ) : step === 3 ? (
                        <>Envoyer ma demande <Send className="ml-3 h-6 w-6" /></>
                      ) : (
                        <>Continuer <ArrowRight className="ml-3 h-6 w-6" /></>
                      )}
                    </Button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <div className="w-24 h-24 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-10">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-heading font-extrabold text-primary-900 mb-6 uppercase">{t('contact_success_title')}</h3>
                  <p className="text-xl text-gray-600 mb-12 font-medium">{t('contact_success_desc')}</p>
                  <Button variant="outline" className="btn-secondary h-16 px-12" onClick={() => {setIsSuccess(false); setStep(1);}}>
                    Nouvelle demande
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-16 py-10">
            <div className="reveal">
              <h2 className="text-4xl font-heading font-extrabold text-primary-900 mb-8 uppercase leading-[1.1]">{t('contact_title')}</h2>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">{t('contact_subtitle')}</p>
            </div>

            <div className="grid gap-8">
              {[
                { icon: MessageCircle, label: t('contact_info_whatsapp'), value: "[À REMPLACER]", color: "text-emerald-500", bg: "bg-emerald-50" },
                { icon: Mail, label: t('contact_info_email'), value: "[À REMPLACER]", color: "text-blue-500", bg: "bg-blue-50" },
                { icon: Phone, label: t('contact_info_phone'), value: "[À REMPLACER]", color: "text-orange-500", bg: "bg-orange-50" },
                { icon: MapPin, label: t('contact_info_address'), value: "[À REMPLACER]", color: "text-primary-900", bg: "bg-gray-100" },
              ].map((info, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-8 p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-e2 transition-all group cursor-copy"
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110", info.bg, info.color)}>
                    <info.icon className="h-8 w-8" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em] mb-1">{info.label}</p>
                    <p className="text-xl font-heading font-extrabold text-primary-900 mt-0.5">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary-900 p-8 rounded-[32px] text-white reveal overflow-hidden relative">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-3">Support dédié</p>
                <h4 className="text-xl font-heading font-extrabold uppercase mb-4">Besoin d'une réponse immédiate ?</h4>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl h-14 font-black uppercase text-xs tracking-widest gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Chatter sur WhatsApp
                </Button>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
