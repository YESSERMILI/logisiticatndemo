"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Zap, 
  Target, 
  Trophy, 
  TrendingUp, 
  MousePointer2, 
  Keyboard, 
  Headphones, 
  Gamepad2, 
  Gift, 
  AlertCircle, 
  CheckCircle2, 
  Link as LinkIcon, 
  Mail, 
  Cpu,
  Layers,
  ShoppingBag
} from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

// --- Components ---

const SectionContainer = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`min-h-screen py-24 px-6 md:px-12 flex flex-col justify-center relative ${className}`}>
    <div className="max-w-7xl mx-auto w-full">
      {children}
    </div>
  </section>
);

const Reveal = ({ children, width = "100%" }: { children: React.ReactNode; width?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  const esportsLogo = PlaceHolderImages.find(p => p.id === 'main-logo')?.imageUrl || "";
  const spacenetLogo = PlaceHolderImages.find(p => p.id === 'spacenet-logo')?.imageUrl || "";

  return (
    <SectionContainer className="grid-background flex flex-col items-center justify-start min-h-screen pt-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center items-center mb-24"
      >
         <div className="flex items-center gap-10 md:gap-14">
           {/* Visual balance: Esports logo is wide, so we give it slightly more height context */}
           <Image 
              src={esportsLogo} 
              alt="Esports.tn" 
              width={260} 
              height={100} 
              className="object-contain h-16 w-auto" 
           />
           <div className="h-10 w-[1px] bg-white/20"></div>
           <Image 
              src={spacenetLogo} 
              alt="Spacenet" 
              width={200} 
              height={100} 
              className="object-contain h-16 w-auto" 
           />
         </div>
      </motion.div>

      <div className="text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-primary/20 bg-primary/5 text-primary text-[13px] font-semibold tracking-tight mb-8">
            Partnership Proposal 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[1.05] mb-12 tracking-tight">
            Transformer le <span className="text-primary glow-text-cyan">gaming</span> <br />
            en récompenses <br />
            <span className="text-secondary drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">réelles</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 font-normal leading-relaxed opacity-70">
            Proposition de collaboration stratégique entre Esports.tn et Spacenet : Intégration API Stock & Partenariat Fournisseur pour l'écosystème compétitif tunisien.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12 text-[12px] font-medium tracking-normal text-muted-foreground">
             <div className="flex flex-col items-center gap-1.5">
                <span className="opacity-50">Préparé pour</span>
                <span className="text-foreground font-bold">Spacenet</span>
             </div>
             <div className="hidden md:block h-5 w-[1px] bg-white/10"></div>
             <div className="flex flex-col items-center gap-1.5">
                <span className="opacity-50">Préparé par</span>
                <span className="text-foreground font-bold">Esports.tn</span>
             </div>
             <div className="hidden md:block h-5 w-[1px] bg-white/10"></div>
             <div className="flex flex-col items-center gap-1.5">
                <span className="opacity-50">Date</span>
                <span className="text-foreground font-bold">Juillet 2026</span>
             </div>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

const WhoAreWe = () => {
  return (
    <SectionContainer id="about">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl opacity-50"></div>
           <div className="relative glassmorphic rounded-3xl p-10 space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Gamepad2 size={32} />
                </div>
                <h3 className="text-3xl font-bold tracking-tight">L'Écosystème Esports.tn</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 text-secondary"><CheckCircle2 size={20} /></div>
                  <p className="text-muted-foreground text-lg leading-relaxed">Plateforme leader en Tunisie transformant les performances gaming en récompenses concrètes.</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: Target, label: "Kills", color: "text-primary" },
                    { icon: Trophy, label: "Victoires", color: "text-yellow-400" },
                    { icon: Zap, label: "Objectifs", color: "text-secondary" },
                    { icon: TrendingUp, label: "Global", color: "text-accent" }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
                      <item.icon className={`mx-auto mb-3 ${item.color}`} size={24} />
                      <span className="block text-[12px] font-bold text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.2] tracking-tight">
              Une nouvelle façon de <span className="text-primary">récompenser</span> les joueurs
            </h2>
            <div className="space-y-12">
               <div className="flex flex-col gap-8 relative">
                  <div className="absolute left-[21px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
                  
                  {[
                    { label: "Joueur", desc: "Le gamer rejoint la plateforme" },
                    { label: "Match Compétitif", desc: "Session de jeu analysée en temps réel" },
                    { label: "Statistiques validées", desc: "Traitement des données de performance" },
                    { label: "Coins générés", desc: "Crédit immédiat sur le compte joueur" },
                    { label: "Récompenses Spacenet", desc: "Livraison de produits gaming premium" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-8 relative z-10 group">
                      <div className="w-11 h-11 rounded-full bg-[#050816] border-2 border-primary flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,229,255,0.2)] group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-xl tracking-tight mb-1">{step.label}</h4>
                        <p className="text-muted-foreground text-base">{step.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
};

const HowItWorks = () => {
  const cards = [
    { title: "Jouer", icon: Gamepad2, color: "text-primary", desc: "Le joueur participe à des matchs compétitifs sur ses jeux favoris." },
    { title: "Gagner", icon: Trophy, color: "text-secondary", desc: "Les performances génèrent automatiquement des coins basés sur le skill." },
    { title: "Échanger", icon: ShoppingBag, color: "text-accent", desc: "Les coins deviennent des produits gaming de haute qualité." },
    { title: "Recevoir", icon: Gift, color: "text-yellow-400", desc: "Le produit est livré directement au joueur partout en Tunisie." }
  ];

  return (
    <SectionContainer className="bg-white/[0.01]">
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Comment ça fonctionne ?</h2>
        <p className="text-muted-foreground text-lg">Une boucle d'engagement simple et puissante pour le gamer.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glassmorphic p-10 rounded-3xl text-center group cursor-default"
          >
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${card.color} group-hover:scale-110 transition-transform shadow-inner`}>
              <card.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-5 tracking-tight">{card.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-base">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-24 grid grid-cols-3 md:grid-cols-6 gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500 max-w-4xl mx-auto">
         {[
           { icon: MousePointer2, label: "Souris" },
           { icon: Keyboard, label: "Claviers" },
           { icon: Headphones, label: "Casques" },
           { icon: Layers, label: "Chaises" },
           { icon: Gamepad2, label: "Consoles" },
           { icon: Gift, label: "Cartes" }
         ].map((item, i) => (
           <div key={i} className="flex flex-col items-center gap-3">
              <item.icon size={28} />
              <span className="text-[11px] font-bold tracking-tight">{item.label}</span>
           </div>
         ))}
      </div>
    </SectionContainer>
  );
};

const Problematic = () => {
  return (
    <SectionContainer>
       <div className="grid lg:grid-cols-2 gap-20 items-center">
         <div>
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">Notre problématique <span className="text-destructive">actuelle</span></h2>
            <div className="space-y-5">
              {[
                "Gestion manuelle des produits",
                "Stocks non synchronisés",
                "Risque de rupture après achat",
                "Temps opérationnel élevé"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-destructive/5 border border-destructive/10 text-destructive/80">
                   <AlertCircle size={24} />
                   <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
         </div>
         <div className="relative">
            <div className="glassmorphic p-10 rounded-[2rem] border-destructive/20">
               <h4 className="text-center font-bold mb-10 text-[12px] text-muted-foreground">Workflow Manuel (Inefficace)</h4>
               <div className="flex flex-col items-center gap-7">
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-semibold">Magasins</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-semibold">Recherche manuelle</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-semibold">Ajout produit</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-semibold">Vérification stock</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-5 rounded-xl bg-destructive/80 text-white font-black w-full text-center shadow-lg">Catalogue Fragmenté</div>
               </div>
            </div>
         </div>
       </div>
    </SectionContainer>
  );
};

const Solution = () => {
  return (
    <SectionContainer className="overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">La Solution <span className="text-primary">API</span></h2>
        <p className="text-muted-foreground text-lg">Connecter Esports.tn directement à l'inventaire Spacenet.</p>
      </div>

      <div className="relative mb-32 max-w-2xl mx-auto">
         <div className="flex flex-col items-center space-y-16">
            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black text-primary border-primary/30 shadow-[0_0_40px_rgba(0,229,255,0.15)] text-lg uppercase tracking-tight">
               SPACENET STOCK API
            </div>
            
            <div className="relative h-28 w-1 flex items-center justify-center">
               <div className="absolute inset-0 bg-primary/10 blur-xl"></div>
               <div className="h-full w-[2px] bg-gradient-to-b from-primary to-secondary relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_rgba(0,229,255,0.8)]"
                  />
               </div>
            </div>

            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black border-white/10 text-lg uppercase tracking-tight">
               ESPORTS.TN PLATFORM
            </div>

            <div className="relative h-28 w-1 flex items-center justify-center">
               <div className="h-full w-[2px] bg-gradient-to-b from-secondary to-accent relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                    className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-secondary rounded-full shadow-[0_0_15px_rgba(0,255,136,0.8)]"
                  />
               </div>
            </div>

            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black text-secondary border-secondary/30 shadow-[0_0_40px_rgba(0,255,136,0.1)] text-lg uppercase tracking-tight">
               PLAYER REWARD STORE
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {[
          { title: "Stock en temps réel", desc: "Les produits disponibles sont synchronisés automatiquement via l'API.", icon: Zap },
          { title: "Suppression automatique", desc: "Les ruptures de stock disparaissent instantanément du catalogue.", icon: AlertCircle },
          { title: "Déduction automatique", desc: "Chaque échange de coins met à jour l'inventaire Spacenet.", icon: Cpu }
        ].map((item, i) => (
          <div key={i} className="glassmorphic p-10 rounded-[2rem] hover:bg-white/5 transition-colors">
             <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 shadow-inner">
                <item.icon size={32} />
             </div>
             <h4 className="text-2xl font-bold mb-5 tracking-tight">{item.title}</h4>
             <p className="text-muted-foreground leading-relaxed text-base">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

const WinWin = () => {
  return (
    <SectionContainer className="bg-white/[0.005]">
       <div className="text-center mb-24">
         <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Collaboration <span className="text-accent">Gagnant-Gagnant</span></h2>
       </div>
       
       <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
             <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center text-primary font-black text-xl">S</div>
                <h3 className="text-3xl font-black tracking-tight uppercase">Pour Spacenet</h3>
             </div>
             <div className="grid gap-6">
                {[
                  "Nouveau canal de vente gaming ciblé",
                  "Accès à une communauté jeune et engagée",
                  "Commandes récurrentes et automatisées",
                  "Visibilité premium auprès des gamers tunisiens"
                ].map((item, i) => (
                  <div key={i} className="glassmorphic p-7 rounded-2xl border-l-4 border-l-primary flex items-center gap-6 hover:translate-x-2 transition-transform">
                     <TrendingUp className="text-primary flex-shrink-0" size={24} />
                     <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-10">
             <div className="flex items-center gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary font-black text-xl">E</div>
                <h3 className="text-3xl font-black tracking-tight uppercase">Pour Esports.tn</h3>
             </div>
             <div className="grid gap-6">
                {[
                  "Catalogue automatisé et fiable",
                  "Données de stock synchronisées",
                  "Expérience utilisateur haut de gamme",
                  "Croissance scalable sans friction"
                ].map((item, i) => (
                  <div key={i} className="glassmorphic p-7 rounded-2xl border-l-4 border-l-secondary flex items-center gap-6 hover:translate-x-2 transition-transform">
                     <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                     <span className="font-bold text-lg">{item}</span>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </SectionContainer>
  );
};

const Roadmap = () => {
  return (
    <SectionContainer>
       <div className="text-center mb-24">
         <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Roadmap Partenariat</h2>
       </div>

       <div className="relative pt-16">
          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-white/5"></div>
          
          <div className="grid md:grid-cols-4 gap-16 relative z-10">
             {[
               { phase: "Phase 1", title: "Validation", desc: "Présentation & validation du partenariat stratégique." },
               { phase: "Phase 2", title: "Connexion API", desc: "Développement et tests de l'intégration technique." },
               { phase: "Phase 3", title: "Tests Catalogue", desc: "Vérification des données et synchronisation." },
               { phase: "Phase 4", title: "Lancement", desc: "Déploiement officiel et communication conjointe." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-8 h-8 rounded-full bg-primary mb-10 shadow-[0_0_20px_rgba(0,229,255,0.5)] relative">
                     <div className="absolute -inset-3 border border-primary/20 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-primary font-black text-[12px] mb-3 uppercase tracking-tight">{item.phase}</h4>
                  <h5 className="text-2xl font-bold mb-5 tracking-tight">{item.title}</h5>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </SectionContainer>
  );
};

const FinalCTA = () => {
  const esportsLogo = PlaceHolderImages.find(p => p.id === 'main-logo')?.imageUrl || "";
  const spacenetLogo = PlaceHolderImages.find(p => p.id === 'spacenet-logo')?.imageUrl || "";

  return (
    <SectionContainer className="relative overflow-hidden text-center min-h-[85vh]">
       <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/esports/1920/1080" 
            alt="Esports Arena" 
            fill 
            className="object-cover opacity-10 grayscale"
            data-ai-hint="esports arena"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/90 to-transparent"></div>
       </div>

       <div className="relative z-10 space-y-16">
          <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto tracking-tight">
            Construisons ensemble le <span className="text-primary">futur</span> du gaming tunisien
          </h2>
          
          <div className="flex flex-col items-center gap-10">
             <div className="flex items-center gap-12 mb-10">
                <Image src={esportsLogo} alt="Esports.tn" width={260} height={100} className="object-contain h-16 w-auto" />
                <div className="h-12 w-[1px] bg-white/20"></div>
                <Image src={spacenetLogo} alt="Spacenet" width={200} height={100} className="object-contain h-16 w-auto" />
             </div>
             
             <div className="glassmorphic p-10 rounded-[2.5rem] max-w-lg w-full border-primary/20 shadow-2xl">
                <div className="flex items-center justify-center gap-5 mb-5 text-primary">
                   <Mail size={28} />
                   <span className="font-bold text-xl tracking-tight">ala.yacoub@digmaco.com</span>
                </div>
                <p className="text-muted-foreground text-[12px] uppercase tracking-tight font-black">Contact Stratégique</p>
             </div>
          </div>
       </div>
    </SectionContainer>
  );
};

// --- Page Wrapper ---

export default function PartnershipPage() {
  const containerRef = useRef(null);
  
  return (
    <main ref={containerRef} className="bg-[#050816] selection:bg-primary selection:text-background font-sans">
      <Hero />
      <WhoAreWe />
      <HowItWorks />
      <Problematic />
      <Solution />
      <WinWin />
      
      <SectionContainer>
        <div className="glassmorphic p-16 rounded-[3rem] text-center border-primary/20 relative overflow-hidden max-w-5xl mx-auto shadow-inner">
          <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
             <LinkIcon size={300} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">Notre Proposition Commerciale</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left max-w-3xl mx-auto mb-16">
            {[
              "Accès API Stock Spacenet",
              "Synchronisation temps réel",
              "Déduction automatique des quantités",
              "Remise fournisseur négociée",
              "Suivi technique dédié"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <CheckCircle2 size={20} />
                 </div>
                 <span className="text-xl font-medium tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <Roadmap />
      <FinalCTA />
      
      <footer className="py-16 border-t border-white/5 text-center text-muted-foreground text-[11px] uppercase tracking-widest font-medium opacity-50">
         © 2026 Esports.tn × Spacenet | All Rights Reserved
      </footer>
    </main>
  );
}