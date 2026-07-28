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
  ArrowRight, 
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
    <SectionContainer className="grid-background flex items-center">
      <div className="absolute top-10 left-10 flex items-center gap-6 z-20 bg-background/40 backdrop-blur-md p-3 rounded-xl border border-white/10">
         <Image src={esportsLogo} alt="Esports.tn" width={50} height={50} className="drop-shadow-[0_0_8px_rgba(0,229,255,0.4)]" />
         <div className="h-8 w-[1px] bg-white/20"></div>
         <Image src={spacenetLogo} alt="Spacenet" width={120} height={40} className="object-contain" />
      </div>

      <div className="relative z-10 text-center lg:text-left mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] mb-6 uppercase">
            Partnership Proposal 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
            Transformer le <span className="text-primary glow-text-cyan">gaming</span> en récompenses <span className="text-secondary">réelles</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed">
            Proposition de collaboration stratégique entre Esports.tn et Spacenet : Intégration API Stock & Partenariat Fournisseur pour l'écosystème compétitif tunisien.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:glow-cyan transition-all transform hover:-translate-y-1">
              Découvrir la proposition
            </button>
            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 font-bold rounded-lg transition-all">
              Nous contacter
            </button>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 lg:mt-0 lg:absolute lg:right-12 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[500px]">
        <div className="glassmorphic p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Cpu size={120} />
          </div>
          <div className="space-y-4 relative z-10 text-sm">
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-muted-foreground">Préparé pour :</span>
              <span className="font-bold">Spacenet Tunisie</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-muted-foreground">Préparé par :</span>
              <span className="font-bold">Esports.tn</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="text-muted-foreground">Date :</span>
              <span className="font-bold">Juillet 2026</span>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const WhoAreWe = () => {
  return (
    <SectionContainer id="about">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-50"></div>
           <div className="relative glassmorphic rounded-3xl p-10 space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <Gamepad2 size={32} />
                </div>
                <h3 className="text-3xl font-bold">L'Écosystème Esports.tn</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-secondary"><CheckCircle2 size={20} /></div>
                  <p className="text-muted-foreground">Plateforme leader en Tunisie transformant les performances gaming en récompenses concrètes.</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <Target className="mx-auto mb-2 text-primary" />
                    <span className="block text-xs uppercase tracking-tighter text-muted-foreground">🎯 Kills</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <Trophy className="mx-auto mb-2 text-yellow-400" />
                    <span className="block text-xs uppercase tracking-tighter text-muted-foreground">🏆 Victoires</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <Zap className="mx-auto mb-2 text-secondary" />
                    <span className="block text-xs uppercase tracking-tighter text-muted-foreground">⚡ Objectifs</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <TrendingUp className="mx-auto mb-2 text-accent" />
                    <span className="block text-xs uppercase tracking-tighter text-muted-foreground">📈 Global</span>
                  </div>
                </div>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Une nouvelle façon de <span className="text-primary">récompenser</span> les joueurs
            </h2>
            <div className="space-y-12">
               <div className="flex flex-col gap-6 relative">
                  <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent"></div>
                  
                  {[
                    { label: "Joueur", desc: "Le gamer rejoint la plateforme" },
                    { label: "Match League of Legends", desc: "Session de jeu compétitive" },
                    { label: "Statistiques analysées", desc: "Traitement des données en temps réel" },
                    { label: "Coins gagnés", desc: "Crédit immédiat sur le compte" },
                    { label: "Récompenses physiques", desc: "Livraison de produits gaming" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-6 relative z-10 group">
                      <div className="w-10 h-10 rounded-full bg-[#050816] border-2 border-primary flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{step.label}</h4>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
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
    <SectionContainer className="bg-white/[0.02]">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Comment ça fonctionne ?</h2>
        <p className="text-muted-foreground">Une boucle d'engagement simple et puissante pour le gamer.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glassmorphic p-8 rounded-2xl text-center group cursor-default"
          >
            <div className={`w-16 h-16 mx-auto rounded-xl bg-white/5 flex items-center justify-center mb-6 ${card.color} group-hover:scale-110 transition-transform`}>
              <card.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 grid grid-cols-3 md:grid-cols-5 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
         <div className="flex flex-col items-center gap-2"><MousePointer2 /> <span className="text-[10px] uppercase font-bold">Souris</span></div>
         <div className="flex flex-col items-center gap-2"><Keyboard /> <span className="text-[10px] uppercase font-bold">Claviers</span></div>
         <div className="flex flex-col items-center gap-2"><Headphones /> <span className="text-[10px] uppercase font-bold">Casques</span></div>
         <div className="flex flex-col items-center gap-2"><Layers /> <span className="text-[10px] uppercase font-bold">Chaises</span></div>
         <div className="flex flex-col items-center gap-2"><Gift /> <span className="text-[10px] uppercase font-bold">Cartes</span></div>
      </div>
    </SectionContainer>
  );
};

const Problematic = () => {
  return (
    <SectionContainer>
       <div className="grid lg:grid-cols-2 gap-16 items-center">
         <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Notre problématique <span className="text-destructive">actuelle</span></h2>
            <div className="space-y-4">
              {[
                "Gestion manuelle des produits",
                "Stocks non synchronisés",
                "Risque de rupture après achat",
                "Temps opérationnel élevé"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/20 text-destructive">
                   <AlertCircle size={20} />
                   <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
         </div>
         <div className="relative">
            <div className="glassmorphic p-8 rounded-3xl border-destructive/30">
               <h4 className="text-center font-bold mb-8 uppercase tracking-widest text-muted-foreground">Workflow Manuel (Inefficace)</h4>
               <div className="flex flex-col items-center gap-6">
                  <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 w-full text-center">Magasins</div>
                  <div className="text-muted-foreground">↓</div>
                  <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 w-full text-center">Recherche manuelle</div>
                  <div className="text-muted-foreground">↓</div>
                  <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 w-full text-center">Ajout produit</div>
                  <div className="text-muted-foreground">↓</div>
                  <div className="px-6 py-3 rounded-lg bg-white/5 border border-white/10 w-full text-center">Vérification stock</div>
                  <div className="text-muted-foreground">↓</div>
                  <div className="px-6 py-3 rounded-lg bg-destructive text-background font-black w-full text-center">Catalogue</div>
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
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl pointer-events-none"></div>
      
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black mb-4">La Solution <span className="text-primary">API</span></h2>
        <p className="text-muted-foreground">Connecter Esports.tn directement à l'inventaire Spacenet.</p>
      </div>

      <div className="relative mb-24 max-w-2xl mx-auto">
         <div className="flex flex-col items-center space-y-12">
            <div className="glassmorphic p-6 rounded-2xl w-full text-center font-black tracking-widest text-primary border-primary/50 shadow-[0_0_30px_rgba(0,229,255,0.2)]">
               SPACENET STOCK API
            </div>
            
            <div className="relative h-24 w-1 flex items-center justify-center">
               <div className="absolute inset-0 bg-primary/20 blur-md"></div>
               <div className="h-full w-[2px] bg-primary relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-cyan"
                  />
               </div>
            </div>

            <div className="glassmorphic p-6 rounded-2xl w-full text-center font-black tracking-widest border-white/20">
               ESPORTS.TN PLATFORM
            </div>

            <div className="relative h-24 w-1 flex items-center justify-center">
               <div className="h-full w-[2px] bg-secondary relative">
                  <motion.div 
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full glow-green"
                  />
               </div>
            </div>

            <div className="glassmorphic p-6 rounded-2xl w-full text-center font-black tracking-widest text-secondary border-secondary/50 shadow-[0_0_30px_rgba(0,255,136,0.15)]">
               PLAYER REWARD STORE
            </div>
         </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Stock en temps réel", desc: "Les produits disponibles sont synchronisés automatiquement.", icon: Zap },
          { title: "Suppression automatique", desc: "Les ruptures de stock disparaissent instantanément du catalogue.", icon: AlertCircle },
          { title: "Déduction automatique", desc: "Chaque échange de coins met à jour l'inventaire Spacenet.", icon: Cpu }
        ].map((item, i) => (
          <div key={i} className="glassmorphic p-8 rounded-2xl">
             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <item.icon size={24} />
             </div>
             <h4 className="text-xl font-bold mb-4">{item.title}</h4>
             <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

const WinWin = () => {
  return (
    <SectionContainer className="bg-white/[0.01]">
       <div className="text-center mb-20">
         <h2 className="text-4xl md:text-5xl font-black mb-4">Collaboration <span className="text-accent">Gagnant-Gagnant</span></h2>
       </div>
       
       <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black">S</div>
                <h3 className="text-2xl font-bold font-orbitron tracking-wider">Pour Spacenet</h3>
             </div>
             <div className="grid gap-4">
                {[
                  "Nouveau canal de vente gaming ciblé",
                  "Accès à une communauté jeune et engagée",
                  "Commandes récurrentes et automatisées",
                  "Visibilité premium auprès des gamers tunisiens"
                ].map((item, i) => (
                  <div key={i} className="glassmorphic p-6 rounded-xl border-l-4 border-l-primary flex items-center gap-4">
                     <TrendingUp className="text-primary" size={20} />
                     <span className="font-bold">{item}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="space-y-8">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-black">E</div>
                <h3 className="text-2xl font-bold font-orbitron tracking-wider">Pour Esports.tn</h3>
             </div>
             <div className="grid gap-4">
                {[
                  "Catalogue automatisé et fiable",
                  "Données de stock synchronisées",
                  "Expérience utilisateur haut de gamme",
                  "Croissance scalable sans friction"
                ].map((item, i) => (
                  <div key={i} className="glassmorphic p-6 rounded-xl border-l-4 border-l-secondary flex items-center gap-4">
                     <CheckCircle2 className="text-secondary" size={20} />
                     <span className="font-bold">{item}</span>
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
       <div className="text-center mb-20">
         <h2 className="text-4xl md:text-5xl font-black mb-4">Roadmap Partenariat</h2>
       </div>

       <div className="relative pt-12">
          <div className="hidden md:block absolute top-[68px] left-0 right-0 h-[2px] bg-white/10"></div>
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
             {[
               { phase: "Phase 1", title: "Validation", desc: "Présentation & validation du partenariat stratégique." },
               { phase: "Phase 2", title: "Connexion API", desc: "Développement et tests de l'intégration technique." },
               { phase: "Phase 3", title: "Tests Catalogue", desc: "Vérification des données et synchronisation." },
               { phase: "Phase 4", title: "Lancement", desc: "Déploiement officiel et communication conjointe." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-6 h-6 rounded-full bg-primary mb-8 glow-cyan relative">
                     <div className="absolute -inset-2 border border-primary/30 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-primary font-bold text-sm mb-2 uppercase tracking-widest">{item.phase}</h4>
                  <h5 className="text-xl font-bold mb-4">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
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
    <SectionContainer className="relative overflow-hidden text-center min-h-[80vh]">
       <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/esports/1920/1080" 
            alt="Esports Arena" 
            fill 
            className="object-cover opacity-20 grayscale"
            data-ai-hint="esports arena"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/80 to-transparent"></div>
       </div>

       <div className="relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-4xl mx-auto">
            Construisons ensemble le <span className="text-primary">futur</span> du gaming tunisien
          </h2>
          
          <div className="flex flex-col items-center gap-6">
             <div className="flex items-center gap-12 mb-8 bg-white/5 p-8 rounded-3xl backdrop-blur-xl border border-white/10">
                <Image src={esportsLogo} alt="Esports.tn" width={100} height={100} className="drop-shadow-lg" />
                <span className="text-4xl font-light text-white/20">×</span>
                <Image src={spacenetLogo} alt="Spacenet" width={180} height={60} className="object-contain" />
             </div>
             
             <div className="glassmorphic p-8 rounded-3xl max-w-md w-full border-primary/20">
                <div className="flex items-center justify-center gap-4 mb-4 text-primary">
                   <Mail size={24} />
                   <span className="font-bold text-lg">ala44yacoub@gmail.com</span>
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">Contact Strategique</p>
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
    <main ref={containerRef} className="bg-[#050816] selection:bg-primary selection:text-background">
      <Hero />
      <WhoAreWe />
      <HowItWorks />
      <Problematic />
      <Solution />
      <WinWin />
      
      <SectionContainer>
        <div className="glassmorphic p-12 rounded-[2rem] text-center border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
             <LinkIcon size={200} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Notre Proposition</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-12">
            {[
              "Accès API Stock Spacenet",
              "Synchronisation temps réel",
              "Déduction automatique des quantités",
              "Remise fournisseur négociée",
              "Suivi technique dédié"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                 <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={16} />
                 </div>
                 <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
          <button className="px-12 py-5 bg-white text-background font-black rounded-xl hover:scale-105 transition-transform flex items-center gap-4 mx-auto">
             VALIDER LE PARTENARIAT <ArrowRight />
          </button>
        </div>
      </SectionContainer>

      <Roadmap />
      <FinalCTA />
      
      <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-xs uppercase tracking-[0.3em]">
         © 2026 Esports.tn × Spacenet | All Rights Reserved
      </footer>
    </main>
  );
}