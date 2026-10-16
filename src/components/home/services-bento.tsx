
"use client";

import { useTranslation } from "@/hooks/use-translation";
import { 
  Box, Package, Truck, Banknote, RotateCcw, 
  Headphones, Zap, X, CheckCircle2 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ServiceDetail {
  intro: string;
  how: string[];
  benefits: string[];
}

interface Service {
  id: number;
  title: string;
  icon: any;
  desc: string;
  color: string;
  details: ServiceDetail;
}

export function BentoServices() {
  const { t, language } = useTranslation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const isAr = language === 'ar';

  const services: Service[] = [
    { 
      id: 0,
      title: isAr ? "إنت ركّز في البيع، وإحنا نتكفّلوا بالباقي" : "Vendez sereinement, on gère le reste", 
      icon: Zap, 
      color: "bg-[#F7931E] text-[#0B2A6B]", 
      desc: isAr ? "Logistica تهز عليك حمل الستوك والتحضير والتوصيل." : "Logistica prend en charge le stock, la préparation et la livraison.",
      details: {
        intro: isAr 
          ? "Logistica تعاونك تنظّم العمليات اللوجستية متاع مشروعك، من استقبال السلعة وتخزينها لتحضير الكوموندات وتنسيق التوصيل، باش إنت تركّز على البيع وتطوير البيزنس متاعك."
          : "Logistica vous aide à organiser les opérations logistiques de votre projet, de la réception au stockage et à la livraison, pour que vous puissiez vous concentrer sur vos ventes.",
        how: isAr ? [
          "نستقبلو السلعة حسب الإجراءات المتّفق عليها.",
          "ننظّمو الستوك ونتابعو المنتجات المتوفّرة.",
          "نحضّرو الكوموندات حسب الطلبات المسجّلة.",
          "نجهّزو الكولي للإرسال.",
          "نتابعو مراحل التوصيل حسب الخدمات المتاحة."
        ] : [
          "Réception des marchandises selon les procédures.",
          "Organisation du stock et suivi en temps réel.",
          "Préparation des commandes selon les demandes.",
          "Emballage et préparation pour l'expédition.",
          "Suivi des étapes de livraison."
        ],
        benefits: isAr ? [
          "وقت أكثر للبيع.",
          "تنظيم أحسن للستوك والكوموندات.",
          "متابعة أسهل للعمليات اليومية."
        ] : [
          "Plus de temps pour vendre.",
          "Meilleure organisation des stocks.",
          "Suivi simplifié des opérations."
        ]
      }
    },
    { 
      id: 1,
      title: isAr ? "تحضير وتغليف الكوموندات" : "Préparation et emballage", 
      icon: Package, 
      color: "bg-white/5 text-white border-white/10", 
      desc: isAr ? "تغليف احترافي وسريع يخرّج الكولي متاعك في وقت قياسي." : "Picking rigoureux et emballage pro avant expédition immédiate.",
      details: {
        intro: isAr
          ? "كل كوموند تتجهّز حسب المنتجات المطلوبة، مع عناية بالتجميع والتغليف قبل إرسالها للحريف."
          : "Chaque commande est préparée avec soin, du picking à l'emballage final, garantissant une expérience client premium.",
        how: isAr ? [
          "تحديد المنتجات المطلوبة.",
          "جمع المنتجات من الستوك (Picking).",
          "التثبّت من محتوى الكوموند.",
          "تغليف وتجهيز الكولي (Packing).",
          "متابعة وضعية الكوموند."
        ] : [
          "Identification des produits requis.",
          "Collecte optimisée en entrepôt (Picking).",
          "Contrôle qualité de la commande.",
          "Emballage sécurisé (Packing).",
          "Mise à jour du statut en temps réel."
        ],
        benefits: isAr ? [
          "تحضير أكثر تنظيماً.",
          "تقليل التشتّت في معالجة الكوموندات.",
          "تغليف مناسب قبل الإرسال."
        ] : [
          "Préparation structurée.",
          "Réduction drastique des erreurs.",
          "Image de marque renforcée via l'emballage."
        ]
      }
    },
    { 
      id: 2,
      title: isAr ? "التوصيل للحرفاء في تونس" : "Livraison clients en Tunisie", 
      icon: Truck, 
      color: "bg-[#1F6FDB] text-white", 
      desc: isAr ? "شبكة توصيل تغطي 24 ولاية في أقل من 48 ساعة." : "Livraison express sur tout le territoire avec suivi temps réel.",
      details: {
        intro: isAr
          ? "نعاونك تنظّم إرسال الكولي للحرفاء في مختلف مناطق تونس حسب شبكة التغطية المتاحة وآجال التوصيل المتّفق عليها."
          : "Nous orchestrons l'envoi de vos colis vers vos clients sur toute la Tunisie grâce à un réseau logistique performant.",
        how: isAr ? [
          "تجهيز الكولي للتوصيل.",
          "تنظيم عملية الإرسال.",
          "متابعة حالة الكولي حسب المعلومات المتاحة.",
          "توضيح وضعية الكولي اللي ما تمّش تسليمها."
        ] : [
          "Préparation des manifestes de transport.",
          "Expédition vers les centres de tri.",
          "Suivi du dernier kilomètre.",
          "Gestion proactive des non-livrés."
        ],
        benefits: isAr ? [
          "متابعة أوضح لعمليات التوصيل.",
          "تنظيم أحسن للكوموندات الخارجة.",
          "رؤية أوضح على وضعية الكولي."
        ] : [
          "Visibilité totale sur les flux sortants.",
          "Réduction des délais de livraison.",
          "Amélioration du taux de satisfaction client."
        ]
      }
    },
    { 
      id: 3,
      title: isAr ? "متابعة خلاصات الـ COD" : "Suivi des encaissements COD", 
      icon: Banknote, 
      color: "bg-white/5 text-white border-white/10", 
      desc: isAr ? "رجوع فلوسك في وقتها وبكل دقة ومن غير تكسير راس." : "Versement automatisé de vos encaissements dès le lendemain.",
      details: {
        intro: isAr
          ? "تابع وضعية الكوموندات اللي تخلّصت عند التسليم (COD)، ونظّم معلومات مستحقّاتك باش تكون عندك رؤية أوضح على العمليات المالية."
          : "Suivez vos encaissements Cash on Delivery avec précision et optimisez votre flux de trésorerie.",
        how: isAr ? [
          "متابعة الكوموندات المعنيّة بالـ COD.",
          "تنظيم معلومات المبالغ المستخلصة.",
          "متابعة وضعية المستحقّات والتحويلات.",
          "توفير معلومات أوضح على وضعية الخلاصات."
        ] : [
          "Réconciliation automatique des commandes livrées.",
          "Consolidation des montants perçus.",
          "Suivi des virements bancaires.",
          "Rapports financiers détaillés."
        ],
        benefits: isAr ? [
          "متابعة أسهل للمستحقّات.",
          "تنظيم أحسن للمعلومات المالية.",
          "سهولة مراجعة الخلاصات."
        ] : [
          "Trésorerie plus saine.",
          "Comptabilité simplifiée.",
          "Transparence totale sur les fonds collectés."
        ]
      }
    },
    { 
      id: 4,
      title: isAr ? "إدارة الـ Retours" : "Gestion des retours", 
      icon: RotateCcw, 
      color: "bg-white/5 text-white border-white/10", 
      desc: isAr ? "إدارة المرجوعات والتبديل بكل سلاسة وبصورة منظمة." : "Gestion simplifiée des retours pour une logistique circulaire fluide.",
      details: {
        intro: isAr
          ? "نتابعو وضعية الكولي اللي ما تمّش تسليمها، وننظّمو إجراءات الإرجاع حسب أسباب الرجوع وشروط الخدمة المتّفق عليها."
          : "Nous gérons les colis non livrés et organisons les procédures de retour selon les motifs et conditions établies.",
        how: isAr ? [
          "متابعة حالة الكولي المرجوعة.",
          "تحديد وضعية الإرجاع حسب المعلومات.",
          "تنظيم رجوع المنتجات للستوك.",
          "تحديث معلومات الكوموند دورياً."
        ] : [
          "Tracking des colis en retour.",
          "Analyse des motifs d'échec de livraison.",
          "Réintégration propre en stock ou renvoi.",
          "Mise à jour immédiate du WMS."
        ],
        benefits: isAr ? [
          "وضوح أكبر في وضعية الكولي المرجوعة.",
          "متابعة أسهل للمنتجات الراجعة.",
          "فهم أفضل للمشاكل المتكرّرة."
        ] : [
          "Clarté sur le taux de retour.",
          "Optimisation des stocks dormants.",
          "Réduction des pertes opérationnelles."
        ]
      }
    },
    { 
      id: 5,
      title: isAr ? "المرافقة والمتابعة" : "Support et Accompagnement", 
      icon: Headphones, 
      color: "bg-white/5 text-white border-white/10", 
      desc: isAr ? "إكاونت مانجر معاك خطوة بخطوة باش يجاوب على كل استفساراتك." : "Un Account Manager dédié disponible pour piloter votre activité.",
      details: {
        intro: isAr
          ? "نعاونك تفهم مراحل الخدمة وتتابع استفساراتك المرتبطة بالعمليات اللوجستية عبر قنوات التواصل المتاحة."
          : "Nous vous accompagnons au quotidien pour fluidifier votre logistique et répondre à vos besoins spécifiques.",
        how: isAr ? [
          "توضيح إجراءات بداية التعامل.",
          "الإجابة على الاستفسارات المرتبطة بالخدمات.",
          "المساعدة في متابعة وضعية الكوموندات.",
          "متابعة الاستفسارات التشغيلية يومياً."
        ] : [
          "Aide à l'onboarding et intégration.",
          "Réponse prioritaire aux requêtes SAV.",
          "Support opérationnel multicanal.",
          "Conseils d'optimisation logistique."
        ],
        benefits: isAr ? [
          "فهم أوضح لمراحل الخدمة.",
          "تواصل أسهل بخصوص العمليات.",
          "متابعة أفضل للاستفسارات."
        ] : [
          "Relation de confiance durable.",
          "Réactivité face aux imprévus.",
          "Partenaire de croissance dédié."
        ]
      }
    },
  ];

  const handleToggle = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const DetailsPanel = ({ service }: { service: Service }) => (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="col-span-full overflow-hidden"
    >
      <div className="bg-[#081E4E] border-2 border-[#1F6FDB]/30 rounded-[32px] p-8 md:p-12 my-6 relative shadow-2xl">
        <button 
          onClick={() => setSelectedId(null)}
          className="absolute top-6 rtl:left-6 ltr:right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white/40 hover:text-white z-20"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 rounded-2xl bg-[#1F6FDB]/20 text-[#1F6FDB] flex items-center justify-center">
             <service.icon size={24} />
           </div>
           <h3 className={cn("text-2xl md:text-3xl font-black text-white uppercase", isAr && "font-arabic")}>
             {service.title}
           </h3>
        </div>

        <p className={cn("text-lg text-slate-300 leading-relaxed mb-10 max-w-4xl", isAr && "font-arabic")}>
          {service.details.intro}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className={cn("text-sm font-black text-[#F7931E] uppercase tracking-[0.2em] flex items-center gap-3", isAr && "font-arabic")}>
              <div className="w-1 h-4 bg-[#F7931E] rounded-full" />
              {isAr ? "كيفاش نخدمو؟" : "Fonctionnement"}
            </h4>
            <ul className="space-y-4">
              {service.details.how.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#1F6FDB] shrink-0" />
                  <span className={cn("text-slate-400 text-sm md:text-base font-medium", isAr && "font-arabic")}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className={cn("text-sm font-black text-emerald-400 uppercase tracking-[0.2em] flex items-center gap-3", isAr && "font-arabic")}>
              <div className="w-1 h-4 bg-emerald-400 rounded-full" />
              {isAr ? "شنوة تربح؟" : "Vos Avantages"}
            </h4>
            <div className="grid gap-3">
              {service.details.benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5 transition-colors hover:bg-white/10">
                   <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                   <span className={cn("text-white font-bold text-sm md:text-base", isAr && "font-arabic")}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="services" className="py-24 bg-[#0B2A6B]" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#F7931E] font-black text-[10px] uppercase tracking-[0.25em]">{t('n1')}</span>
          <h2 className={cn(
            "text-4xl md:text-6xl font-bold text-white mt-4 mb-6 uppercase tracking-tight",
            isAr && "font-arabic"
          )}>
            {isAr ? "كل ما يحتاجه مشروعك" : "Tout pour votre boutique"}
          </h2>
          <p className={cn(
            "text-[#9FB2DE] text-lg font-medium",
            isAr && "font-arabic"
          )}>
            {isAr ? "حلول لوجستية متكاملة مصممة خصيصاً للتجارة الإلكترونية في تونس." : "Une plateforme logistique unifiée, de l'entrepôt à la porte de votre client."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const isRowEnd = (idx + 1) % (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1) === 0 || idx === services.length - 1;
            const currentSelectedRow = selectedId !== null ? Math.floor(selectedId / (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) : -1;
            const currentRow = Math.floor(idx / (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1));
            
            return (
              <div key={s.id} className="contents">
                <ServiceCard 
                  service={s} 
                  isActive={selectedId === s.id} 
                  onClick={() => handleToggle(s.id)} 
                  isAr={isAr}
                />
                
                {isRowEnd && selectedId !== null && currentSelectedRow === currentRow && (
                  <DetailsPanel service={services[selectedId]} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isActive, onClick, isAr }: { service: Service, isActive: boolean, onClick: () => void, isAr: boolean }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      whileHover={{ y: isActive ? 0 : -5 }}
      className={cn(
        "rounded-[32px] p-8 flex flex-col group cursor-pointer transition-all duration-300 border relative overflow-hidden h-full min-h-[220px]",
        service.color,
        service.color.includes('bg-white/5') ? "border-white/5 hover:bg-white/10" : "border-transparent",
        isActive && "ring-4 ring-[#1F6FDB]/40 border-[#1F6FDB] z-10"
      )}
    >
      <div className="flex items-center justify-between mb-8 relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-2xl flex items-center justify-center relative transition-transform group-hover:scale-110",
          service.color.includes('text-[#0B2A6B]') ? "bg-[#0B2A6B]/10" : "bg-white/10"
        )}>
          <service.icon className="h-6 w-6" strokeWidth={2.5} />
        </div>
        {isActive && <CheckCircle2 className="text-current opacity-40 h-6 w-6" />}
      </div>
      
      <div className="relative z-10 mt-auto">
        <h3 className={cn(
          "font-black text-xl mb-3 uppercase tracking-tight leading-tight",
          isAr && "font-arabic"
        )}>{service.title}</h3>
        <p className={cn(
          "text-sm font-medium leading-relaxed opacity-70",
          isAr && "font-arabic"
        )}>{service.desc}</p>
      </div>

      <div className="absolute -bottom-10 -right-10 opacity-[0.03] transition-transform group-hover:scale-125 duration-700 pointer-events-none">
        <service.icon className="w-48 h-48" />
      </div>
    </motion.div>
  );
}
