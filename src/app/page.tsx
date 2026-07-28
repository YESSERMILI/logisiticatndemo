
"use client";

import React from "react";
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

const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      {children}
    </div>
  );
};

// --- Sections ---

const Hero = () => {
  const esportsLogo = PlaceHolderImages.find(p => p.id === 'main-logo')?.imageUrl || "";
  const spacenetLogo = PlaceHolderImages.find(p => p.id === 'spacenet-logo')?.imageUrl || "";

  return (
    <SectionContainer className="grid-background flex flex-col items-center justify-start min-h-screen pt-12">
      <div className="w-full flex justify-center items-center mb-32">
         <div className="flex items-center gap-12 bg-black/40 px-12 py-6 rounded-full border border-white/5 backdrop-blur-md">
           <Image 
              src={esportsLogo} 
              alt="Esports.tn" 
              width={800} 
              height={300} 
              className="object-contain h-64 w-auto" 
           />
           <div className="h-16 w-[1px] bg-white/10 mx-4"></div>
           <Image 
              src={spacenetLogo} 
              alt="Spacenet" 
              width={600} 
              height={300} 
              className="object-contain h-32 w-auto" 
           />
         </div>
      </div>

      <div className="text-center max-w-5xl mx-auto">
        <div>
          <span className="inline-block py-1.5 px-4 rounded-md border border-white/10 bg-white/5 text-white/60 text-xs font-semibold tracking-normal mb-8 uppercase">
            Partnership Proposal 2026
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-[1.05] mb-12 tracking-tighter">
            Transformer le <span className="text-primary">gaming</span> <br />
            en récompenses <br />
            <span className="text-secondary">réelles</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-20 font-medium leading-relaxed opacity-80">
            Proposition de collaboration stratégique entre Esports.tn et Spacenet : Intégration API Stock & Partenariat Fournisseur pour l'écosystème compétitif tunisien.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-8 mt-20 pt-10 border-t border-white/5 text-xs font-bold uppercase text-muted-foreground tracking-widest">
             <div className="flex flex-col items-center md:items-start gap-1">
                <span className="opacity-40 text-[10px]">Préparé pour</span>
                <span className="text-foreground text-sm">Spacenet</span>
             </div>
             <div className="flex flex-col items-center md:items-start gap-1">
                <span className="opacity-40 text-[10px]">Préparé par</span>
                <span className="text-foreground text-sm">Esports.tn</span>
             </div>
             <div className="flex flex-col items-center md:items-start gap-1">
                <span className="opacity-40 text-[10px]">Date</span>
                <span className="text-foreground text-sm">Juillet 2026</span>
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
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1 relative">
           <div className="relative glassmorphic rounded-3xl p-10 space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Gamepad2 size={32} />
                </div>
                <h3 className="text-3xl font-black tracking-tight">L'Écosystème Esports.tn</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 text-secondary"><CheckCircle2 size={20} /></div>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">Plateforme leader en Tunisie transformant les performances gaming en récompenses concrètes.</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: Target, label: "Kills", color: "text-primary" },
                    { icon: Trophy, label: "Victoires", color: "text-yellow-400" },
                    { icon: Zap, label: "Objectifs", color: "text-secondary" },
                    { icon: TrendingUp, label: "Global", color: "text-accent" }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/5 text-center transition-colors">
                      <item.icon className={`mx-auto mb-3 ${item.color}`} size={24} />
                      <span className="block text-[11px] font-black text-muted-foreground uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-black mb-10 leading-[1.2] tracking-tighter">
              Une nouvelle façon de <span className="text-primary">récompenser</span> les joueurs
            </h2>
            <div className="space-y-12">
               <div className="flex flex-col gap-12 relative">
                  {[
                    { label: "Joueur", desc: "Le gamer rejoint la plateforme" },
                    { label: "Match Compétitif", desc: "Session de jeu analysée en temps réel" },
                    { label: "Statistiques validées", desc: "Traitement des données de performance" },
                    { label: "Coins générés", desc: "Crédit immédiat sur le compte joueur" },
                    { label: "Récompenses Spacenet", desc: "Livraison de produits gaming premium" }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-10 relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-black text-xl text-primary">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-black text-2xl tracking-tight mb-1">{step.label}</h4>
                        <p className="text-muted-foreground/80 text-lg font-medium">{step.desc}</p>
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
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Comment ça fonctionne ?</h2>
        <p className="text-muted-foreground text-lg font-medium">Une boucle d'engagement simple et puissante pour le gamer.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="glassmorphic p-10 rounded-3xl text-center group cursor-default"
          >
            <div className={`w-20 h-20 mx-auto rounded-2xl bg-white/5 flex items-center justify-center mb-8 ${card.color} shadow-inner`}>
              <card.icon size={40} />
            </div>
            <h3 className="text-2xl font-black mb-5 tracking-tight">{card.title}</h3>
            <p className="text-muted-foreground font-medium leading-relaxed text-base">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-24 grid grid-cols-3 md:grid-cols-6 gap-8 opacity-40 max-w-4xl mx-auto">
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
              <span className="text-[11px] font-black tracking-widest uppercase">{item.label}</span>
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
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black mb-12 tracking-tighter leading-[1.1] uppercase">
              Notre problématique <br />
              <span className="text-destructive drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">actuelle</span>
            </h2>
            <div className="space-y-5">
              {[
                "Gestion manuelle des produits",
                "Stocks non synchronisés",
                "Risque de rupture après achat",
                "Temps opérationnel élevé"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-2xl bg-destructive/5 border border-destructive/10 text-destructive/80">
                   <AlertCircle size={24} />
                   <span className="font-black text-lg">{item}</span>
                </div>
              ))}
            </div>
         </div>
         <div className="relative">
            <div className="glassmorphic p-10 rounded-[2rem] border-destructive/20">
               <h4 className="text-center font-black mb-10 text-[11px] text-muted-foreground uppercase tracking-widest">Workflow Manuel (Inefficace)</h4>
               <div className="flex flex-col items-center gap-7">
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-bold">Magasins</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-bold">Recherche manuelle</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-bold">Ajout produit</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-4 rounded-xl bg-white/5 border border-white/5 w-full text-center font-bold">Vérification stock</div>
                  <div className="text-muted-foreground/30">↓</div>
                  <div className="px-8 py-5 rounded-xl bg-destructive/80 text-white font-black w-full text-center uppercase tracking-tight">Catalogue Fragmenté</div>
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
      <div className="text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">La Solution <span className="text-primary">API</span></h2>
        <p className="text-muted-foreground text-lg font-medium">Connecter Esports.tn directement à l'inventaire Spacenet.</p>
      </div>

      <div className="relative mb-32 max-w-2xl mx-auto">
         <div className="flex flex-col items-center space-y-16">
            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black text-primary border-primary/30 text-lg uppercase tracking-widest">
               SPACENET STOCK API
            </div>
            
            <div className="relative h-28 w-1 flex items-center justify-center">
               <div className="h-full w-[2px] bg-gradient-to-b from-primary to-secondary relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-sm" />
               </div>
            </div>

            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black border-white/10 text-lg uppercase tracking-widest">
               ESPORTS.TN PLATFORM
            </div>

            <div className="relative h-28 w-1 flex items-center justify-center">
               <div className="h-full w-[2px] bg-gradient-to-b from-secondary to-accent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-sm" />
               </div>
            </div>

            <div className="glassmorphic px-10 py-6 rounded-2xl w-full text-center font-black text-secondary border-secondary/30 text-lg uppercase tracking-widest">
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
             <h4 className="text-2xl font-black mb-5 tracking-tight">{item.title}</h4>
             <p className="text-muted-foreground font-medium leading-relaxed text-base">{item.desc}</p>
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
         <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Collaboration <span className="text-accent">Gagnant-Gagnant</span></h2>
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
                  <div key={i} className="glassmorphic p-7 rounded-2xl border-l-4 border-l-primary flex items-center gap-6 transition-transform">
                     <TrendingUp className="text-primary flex-shrink-0" size={24} />
                     <span className="font-black text-lg">{item}</span>
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
                  <div key={i} className="glassmorphic p-7 rounded-2xl border-l-4 border-l-secondary flex items-center gap-6 transition-transform">
                     <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                     <span className="font-black text-lg">{item}</span>
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
         <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Roadmap Partenariat</h2>
       </div>

       <div className="relative pt-16">
          <div className="hidden md:block absolute top-[80px] left-0 right-0 h-[2px] bg-white/5"></div>
          
          <div className="grid md:grid-cols-4 gap-16 relative z-10">
             {[
               { phase: "Phase 1", title: "Validation", desc: "Présentation & validation du partenariat stratégique." },
               { phase: "Phase 2", title: "Connexion API", desc: "Développement et tests de l'intégration technique." },
               { phase: "Phase 3", title: "Catalogue", desc: "Vérification des données et synchronisation." },
               { phase: "Phase 4", title: "Lancement", desc: "Déploiement officiel et communication conjointe." }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-8 h-8 rounded-full bg-primary mb-10 relative">
                  </div>
                  <h4 className="text-primary font-black text-[12px] mb-3 uppercase tracking-widest">{item.phase}</h4>
                  <h5 className="text-2xl font-black mb-5 tracking-tight">{item.title}</h5>
                  <p className="text-muted-foreground font-medium text-base leading-relaxed">{item.desc}</p>
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
          <h2 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl mx-auto tracking-tighter">
            Construisons ensemble le <span className="text-primary">futur</span> du gaming tunisien
          </h2>
          
          <div className="flex flex-col items-center gap-10">
             <div className="flex items-center gap-8 md:gap-12 mb-10">
                <Image 
                  src={esportsLogo} 
                  alt="Esports.tn" 
                  width={800} 
                  height={300} 
                  className="object-contain h-72 w-auto" 
                />
                <div className="h-10 w-[1px] bg-white/20 mx-4"></div>
                <Image src={spacenetLogo} alt="Spacenet" width={400} height={200} className="object-contain h-24 w-auto" />
             </div>
             
             <div className="glassmorphic p-10 rounded-[2.5rem] max-w-lg w-full border-primary/20">
                <div className="flex items-center justify-center gap-5 mb-5 text-primary">
                   <Mail size={28} />
                   <span className="font-black text-lg md:text-2xl tracking-tight">ala.yacoub@digmaco.com</span>
                </div>
                <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-black">Contact Stratégique</p>
             </div>
          </div>
       </div>
    </SectionContainer>
  );
};

// --- Page Wrapper ---

export default function PartnershipPage() {
  return (
    <main className="bg-[#050816] selection:bg-primary selection:text-background font-sans text-white">
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
          <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter">Notre Proposition Commerciale</h2>
          <div className="grid md:grid-cols-2 gap-10 text-left max-w-3xl mx-auto mb-16">
            {[
              "Accès API Stock Spacenet",
              "Synchronisation temps réel",
              "Déduction automatique des quantités",
              "Remise fournisseur négociée",
              "Suivi technique dédié"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors">
                    <CheckCircle2 size={20} />
                 </div>
                 <span className="text-lg md:text-xl font-black tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <Roadmap />
      <FinalCTA />
      
      <footer className="py-16 border-t border-white/5 text-center text-muted-foreground text-[11px] uppercase tracking-widest font-black opacity-50">
         © 2026 Esports.tn × Spacenet | All Rights Reserved
      </footer>
    </main>
  );
}
