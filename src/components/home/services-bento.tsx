
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { 
  Box, Package, Truck, Banknote, RotateCcw, 
  Headphones, ArrowRight, Zap, X, CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BentoServices() {
  const { t, language } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const services = [
    { 
      id: 0,
      title: language === 'ar' ? "إنت ركّز في البيع، وإحنا نتكفّلوا بالباقي" : "Concentrez-vous sur la vente, on gère le reste", 
      icon: Zap, 
      size: "md:col-span-2 md:row-span-2", 
      color: "bg-[#F7931E] text-[#0B2A6B]", 
      desc: language === 'ar' ? "Logistica تهز عليك حمل الستوك والتحضير والتوصيل باش إنتي تخدم على تكبير البيزنس متاعك." : "Logistica prend en charge le stock, la préparation et la livraison pour que vous puissiez vous concentrer sur votre croissance.",
      details: {
        intro: language === 'ar' 
          ? "Logistica تعاونك تنظّم العمليات اللوجستية متاع مشروعك، من استقبال السلعة وتخزينها لتحضير الكوموندات وتنسيق التوصيل، باش إنت تركّز على البيع وتطوير البيزنس متاعك."
          : "Logistica vous aide à organiser les opérations logistiques de votre projet, de la réception des marchandises au stockage, en passant par la préparation des commandes et la coordination des livraisons.",
        how: language === 'ar' ? [
          "نستقبلو السلعة حسب الإجراءات المتّفق عليها.",
          "ننظّمو الستوك ونتابعو المنتجات المتوفّرة.",
          "نحضّرو الكوموندات حسب الطلبات المسجّلة.",
          "نجهّزو الكولي للإرسال.",
          "نتابعو مراحل التوصيل حسب الخدمات المتاحة.",
          "نوفّرولك متابعة أوضح لعملياتك حسب الإمكانيات المتوفّرة."
        ] : [
          "Réception des marchandises selon les procédures convenues.",
          "Organisation du stock et suivi des produits disponibles.",
          "Préparation des commandes selon les demandes enregistrées.",
          "Préparation des colis pour l'expédition.",
          "Suivi des étapes de livraison selon les services disponibles.",
          "Mise à disposition d'un suivi clair de vos opérations."
        ],
        benefits: language === 'ar' ? [
          "وقت أكثر للبيع.",
          "تنظيم أحسن للستوك والكوموندات.",
          "متابعة أسهل للعمليات اليومية.",
          "خدمة لوجستية منظّمة حسب احتياجات مشروعك."
        ] : [
          "Plus de temps pour vendre.",
          "Meilleure organisation du stock et des commandes.",
          "Suivi plus facile des opérations quotidiennes.",
          "Service logistique structuré selon vos besoins."
        ]
      }
    },
    { 
      id: 1,
      title: language === 'ar' ? "تحضير وتغليف الكوموندات" : "Préparation et emballage", 
      icon: Package, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "تغليف احترافي وسريع يخرّج الكولي متاعك في وقت قياسي." : "Picking rigoureux et emballage pro avant expédition immédiate.",
      details: {
        intro: language === 'ar'
          ? "كل كوموند تتجهّز حسب المنتجات المطلوبة، مع عناية بالتجميع والتغليف قبل إرسالها للحريف."
          : "Chaque commande est préparée selon les produits demandés, avec un soin particulier apporté au regroupement et à l'emballage avant l'envoi au client.",
        how: language === 'ar' ? [
          "تحديد المنتجات المطلوبة.",
          "جمع المنتجات من الستوك (Picking).",
          "التثبّت من محتوى الكوموند حسب المعلومات المتاحة.",
          "تغليف وتجهيز الكولي (Packing).",
          "تحضير الكولي للإرسال.",
          "متابعة وضعية الكوموند حسب مراحل الخدمة."
        ] : [
          "Identification des produits demandés.",
          "Collecte des produits du stock (Picking).",
          "Vérification du contenu de la commande.",
          "Emballage et préparation du colis (Packing).",
          "Préparation pour l'expédition.",
          "Suivi du statut de la commande selon les étapes."
        ],
        benefits: language === 'ar' ? [
          "تحضير أكثر تنظيماً.",
          "تقليل التشتّت في معالجة الكوموندات.",
          "تغليف مناسب قبل الإرسال.",
          "وضوح أكبر في مراحل تجهيز الطلبات."
        ] : [
          "Préparation structurée.",
          "Réduction de la dispersion dans le traitement.",
          "Emballage adapté avant l'envoi.",
          "Clarté totale sur les étapes de préparation."
        ]
      }
    },
    { 
      id: 2,
      title: language === 'ar' ? "التوصيل للحرفاء في تونس" : "Livraison clients en Tunisie", 
      icon: Truck, 
      size: "md:col-span-1 md:row-span-2", 
      color: "bg-[#1F6FDB] text-white", 
      desc: language === 'ar' ? "شبكة توصيل تغطي تونس كاملة من بنزرت لبنقردان في أقل من 48 ساعة." : "Livraison express sur tout le territoire tunisien avec suivi temps réel.",
      details: {
        intro: language === 'ar'
          ? "نعاونك تنظّم إرسال الكولي للحرفاء في مختلف مناطق تونس حسب شبكة التغطية المتاحة وآجال التوصيل المتّفق عليها."
          : "Nous vous aidons à organiser l'envoi des colis aux clients dans les différentes régions de Tunisie selon le réseau de couverture et les délais convenus.",
        how: language === 'ar' ? [
          "تجهيز الكولي للتوصيل.",
          "تنظيم عملية الإرسال.",
          "متابعة حالة الكولي حسب المعلومات المتاحة.",
          "توضيح وضعية الكولي اللي ما تمّش تسليمها.",
          "متابعة الإجراءات اللازمة حسب الحالة."
        ] : [
          "Préparation du colis pour la livraison.",
          "Organisation du processus d'expédition.",
          "Suivi du statut du colis en temps réel.",
          "Clarification du statut des colis non livrés.",
          "Suivi des mesures nécessaires selon le cas."
        ],
        benefits: language === 'ar' ? [
          "متابعة أوضح لعمليات التوصيل.",
          "تنظيم أحسن للكوموندات الخارجة.",
          "معلومات تساعدك تجاوب حرفاءك.",
          "رؤية أوضح على وضعية الكولي."
        ] : [
          "Suivi clair des opérations de livraison.",
          "Meilleure organisation des commandes sortantes.",
          "Informations pour répondre à vos clients.",
          "Visibilité accrue sur l'état des colis."
        ]
      }
    },
    { 
      id: 3,
      title: language === 'ar' ? "متابعة خلاصات الكوموندات" : "Suivi des encaissements COD", 
      icon: Banknote, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "رجوع فلوسك (COD) في وقتها وبكل دقة ومن غير تكسير راس." : "Versement automatisé de vos encaissements dès le lendemain.",
      details: {
        intro: language === 'ar'
          ? "تابع وضعية الكوموندات اللي تخلّصت عند التسليم (COD)، ونظّم معلومات مستحقّاتك باش تكون عندك رؤية أوضح على العمليات المالية المرتبطة بالتوصيل."
          : "Suivez le statut des commandes payées à la livraison (COD) et organisez vos créances pour avoir une vision claire des opérations financières liées au transport.",
        how: language === 'ar' ? [
          "متابعة الكوموندات المعنيّة بالـ COD.",
          "تنظيم معلومات المبالغ المستخلصة.",
          "متابعة وضعية المستحقّات والتحويلات حسب البيانات المتاحة.",
          "مراجعة العمليات اللي تستحق متابعة.",
          "توفير معلومات أوضح على وضعية الخلاصات."
        ] : [
          "Suivi des commandes concernées par le COD.",
          "Organisation des informations sur les montants collectés.",
          "Suivi du statut des créances et des virements.",
          "Révision des opérations nécessitant un suivi.",
          "Informations claires sur l'état des paiements."
        ],
        benefits: language === 'ar' ? [
          "متابعة أسهل للمستحقّات.",
          "تنظيم أحسن للمعلومات المالية.",
          "وضوح أكبر في وضعية العمليات.",
          "سهولة مراجعة الخلاصات المرتبطة بالكوموندات."
        ] : [
          "Suivi simplifié des créances.",
          "Meilleure organisation des données financières.",
          "Clarté accrue sur le statut des opérations.",
          "Révision facile des paiements liés aux commandes."
        ]
      }
    },
    { 
      id: 4,
      title: language === 'ar' ? "متابعة الكولي المرجوعة" : "Gestion des retours", 
      icon: RotateCcw, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "إدارة المرجوعات والتبديل بكل سلاسة باش تحافظ على ثقة كليوناتك." : "Gestion simplifiée des retours pour garantir la satisfaction client.",
      details: {
        intro: language === 'ar'
          ? "نتابعو وضعية الكولي اللي ما تمّش تسليمها، وننظّمو إجراءات الإرجاع حسب أسباب الرجوع وشروط الخدمة المتّفق عليها."
          : "Nous suivons le statut des colis non livrés et organisons les procédures de retour selon les motifs et les conditions de service convenues.",
        how: language === 'ar' ? [
          "متابعة حالة الكولي المرجوعة.",
          "تحديد وضعية الإرجاع حسب المعلومات المتاحة.",
          "تنظيم رجوع المنتجات حسب الإجراءات المعتمدة.",
          "تحديث معلومات الكوموند وقت تتوفّر معطيات جديدة.",
          "تنسيق الخطوات التالية مع التاجر حسب الحالة."
        ] : [
          "Suivi de l'état des colis retournés.",
          "Détermination du statut de retour selon les données.",
          "Organisation du retour des produits selon les procédures.",
          "Mise à jour des infos commande en temps réel.",
          "Coordination des prochaines étapes avec le marchand."
        ],
        benefits: language === 'ar' ? [
          "وضوح أكبر في وضعية الكولي المرجوعة.",
          "متابعة أسهل للمنتجات الراجعة.",
          "تنظيم أحسن للستوك.",
          "فهم أفضل للمشاكل المتكرّرة في التوصيل."
        ] : [
          "Clarté sur le statut des colis retournés.",
          "Suivi simplifié des produits de retour.",
          "Meilleure organisation du stock.",
          "Compréhension des problèmes de livraison récurrents."
        ]
      }
    },
    { 
      id: 5,
      title: language === 'ar' ? "مرافقة ومتابعة لنشاطك" : "Accompagnement et suivi", 
      icon: Headphones, 
      size: "md:col-span-1 md:row-span-1", 
      color: "bg-white/5 text-white border-white/10", 
      desc: language === 'ar' ? "إكاونت مانجر معاك خطوة بخطوة باش يجاوب على كل استفساراتك." : "Un Account Manager dédié disponible sur WhatsApp pour vous accompagner.",
      details: {
        intro: language === 'ar'
          ? "نعاونك تفهم مراحل الخدمة وتتابع استفساراتك المرتبطة بالعمليات اللوجستية عبر قنوات التواصل المتاحة."
          : "Nous vous aidons à comprendre les étapes du service et à suivre vos demandes liées aux opérations logistiques via les canaux disponibles.",
        how: language === 'ar' ? [
          "توضيح إجراءات بداية التعامل.",
          "الإجابة على الاستفسارات المرتبطة بالخدمات.",
          "المساعدة في متابعة وضعية الكوموندات حسب المعلومات المتاحة.",
          "توجيهك بخصوص إجراءات الستوك والتحضير والتوصيل.",
          "متابعة الاستفسارات التشغيلية عبر قنوات التواصل المعتمدة."
        ] : [
          "Clarification des procédures de démarrage.",
          "Réponse aux demandes liées aux services.",
          "Aide au suivi du statut des commandes.",
          "Orientation sur le stock, la préparation et la livraison.",
          "Suivi des demandes opérationnelles via les canaux dédiés."
        ],
        benefits: language === 'ar' ? [
          "فهم أوضح لمراحل الخدمة.",
          "تواصل أسهل بخصوص العمليات.",
          "متابعة أفضل للاستفسارات.",
          "تنظيم أحسن للخدمة اليومية."
        ] : [
          "Compréhension claire des étapes du service.",
          "Communication simplifiée sur les opérations.",
          "Meilleur suivi des demandes.",
          "Organisation optimisée du service quotidien."
        ]
      }
    },
  ];

  const activeService = selectedId !== null ? services.find(s => s.id === selectedId) : null;

  return (
    <section id="services" className="py-24 bg-[#0B2A6B]" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#F7931E] font-black text-xs uppercase tracking-[0.2em]">{t('n1')}</span>
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-white mt-4 mb-6 uppercase tracking-tight",
            language === 'ar' && "font-arabic"
          )}>
            {language === 'ar' ? "كل ما يحتاجه مشروعك" : "Tout ce dont votre boutique a besoin"}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] text-lg font-medium",
            language === 'ar' && "font-arabic"
          )}>
            {language === 'ar' ? "لوجستيك متكاملة مصممة خصيصاً للتجارة الإلكترونية في تونس." : "Des services modulaires ou clé en main créés spécifiquement pour le commerce électronique tunisien."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
          {services.map((s) => (
            <motion.div
              key={s.id}
              onClick={() => setSelectedId(selectedId === s.id ? null : s.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: s.id * 0.1 }}
              className={cn(
                "rounded-[32px] p-8 flex flex-col justify-between group cursor-pointer transition-all duration-500 border relative overflow-hidden",
                s.size,
                s.color,
                s.color.includes('bg-white/5') ? "border-white/5 hover:bg-white/10" : "border-transparent shadow-2xl",
                selectedId === s.id && "ring-4 ring-[#F7931E]/40 border-[#F7931E]"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center relative z-10 transition-transform group-hover:scale-110",
                s.color.includes('bg-[#F7931E]') ? "bg-[#0B2A6B]/10 text-[#0B2A6B]" : "bg-white/10 text-white"
              )}>
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              
              <div className="relative z-10 mt-12">
                <h3 className={cn(
                  "text-xl font-bold mb-3 uppercase tracking-tight leading-tight",
                  language === 'ar' && "font-arabic text-2xl"
                )}>{s.title}</h3>
                <p className={cn(
                  "text-sm font-medium leading-relaxed opacity-80",
                  language === 'ar' && "font-arabic"
                )}>{s.desc}</p>
              </div>

              {/* Decorative background icon */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.05] transition-transform group-hover:scale-125 duration-700 pointer-events-none">
                <s.icon className="w-48 h-48" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shared Details Panel */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-12 overflow-hidden"
            >
              <div className="bg-[#081E4E] border border-white/10 rounded-[40px] p-8 md:p-12 relative">
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-8 rtl:left-8 ltr:right-8 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:bg-[#F7931E] hover:text-[#0B2A6B] transition-all z-20"
                >
                  <X size={24} />
                </button>

                <div className="max-w-5xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7931E]/10 text-[#F7931E] flex items-center justify-center">
                      <activeService.icon size={24} />
                    </div>
                    <h3 className={cn("text-2xl md:text-4xl font-black text-white uppercase tracking-tight", language === 'ar' && "font-arabic")}>
                      {activeService.title}
                    </h3>
                  </div>

                  <p className={cn("text-lg text-[#9FB2DE] leading-relaxed mb-12 max-w-3xl", language === 'ar' && "font-arabic")}>
                    {activeService.details.intro}
                  </p>

                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h4 className={cn("text-[#F7931E] font-black uppercase text-sm tracking-widest flex items-center gap-2", language === 'ar' && "font-arabic")}>
                        <div className="w-1 h-4 bg-[#F7931E] rounded-full" />
                        {language === 'ar' ? "كيفاش نخدمو؟" : "Comment ça marche ?"}
                      </h4>
                      <ul className="space-y-4">
                        {activeService.details.how.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 group-hover:bg-[#F7931E] transition-colors" />
                            <span className={cn("text-white/70 text-sm md:text-base leading-relaxed", language === 'ar' && "font-arabic")}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <h4 className={cn("text-emerald-400 font-black uppercase text-sm tracking-widest flex items-center gap-2", language === 'ar' && "font-arabic")}>
                        <div className="w-1 h-4 bg-emerald-400 rounded-full" />
                        {language === 'ar' ? "شنوة تربح؟" : "Qu'est-ce que vous y gagnez ?"}
                      </h4>
                      <ul className="space-y-4">
                        {activeService.details.benefits.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-emerald-400/20 transition-all">
                            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                            <span className={cn("text-white/80 font-bold text-sm md:text-base", language === 'ar' && "font-arabic")}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

