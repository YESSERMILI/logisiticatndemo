"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Package, 
  Hand, 
  Box, 
  Truck, 
  MapPin, 
  Banknote, 
  RefreshCcw, 
  Headphones, 
  BarChart3,
  Zap,
  ShieldCheck,
  Globe,
  Monitor,
  Star
} from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-logistics');

  const steps = [
    {
      title: "Réception de la commande",
      desc: "Depuis votre site web, marketplace ou réseaux sociaux.",
      icon: ShoppingCart,
    },
    {
      title: "Gestion du stock",
      desc: "Vérification des stocks et suivi en temps réel.",
      icon: Package,
    },
    {
      title: "Picking (Préparation)",
      desc: "Récupération des articles commandés avec soin.",
      icon: Hand,
    },
    {
      title: "Packing (Emballage)",
      desc: "Emballage sécurisé et étiquetage.",
      icon: Box,
    },
    {
      title: "Expédition",
      desc: "Remise au transporteur et suivi du colis.",
      icon: Truck,
    },
    {
      title: "Suivi de livraison",
      desc: "Notifications au client et tracking en temps réel.",
      icon: MapPin,
    },
    {
      title: "Cash on Delivery (COD)",
      desc: "Gestion des encaissements et rapprochement.",
      icon: Banknote,
    },
    {
      title: "Retours & échanges",
      desc: "Gestion simple et rapide des retours.",
      icon: RefreshCcw,
    },
    {
      title: "Service client",
      desc: "Une équipe dédiée à vos clients.",
      icon: Headphones,
    },
    {
      title: "Tableau de bord",
      desc: "Commandes, stock, livraisons, retours, KPI en temps réel.",
      icon: BarChart3,
    },
  ];

  const engagements = [
    { title: "Rapidité", desc: "Des délais maîtrisés", icon: Zap },
    { title: "Fiabilité", desc: "Une chaîne sécurisée", icon: ShieldCheck },
    { title: "Proximité", desc: "Partout en Tunisie", icon: Globe },
    { title: "Digitalisation", desc: "Une expérience simple et moderne", icon: Monitor },
    { title: "Fièrement tunisien", desc: "Expertise locale", icon: Star },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary py-20 text-white lg:py-32">
          <div className="container grid items-center gap-12 lg:grid-cols-2">
            <div className="z-10 space-y-8 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                Logistica Tunisie
              </h1>
              <p className="text-xl font-medium opacity-90 sm:text-2xl">
                « De la commande à la livraison, tout simplement. »
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                  Démarrer maintenant
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  En savoir plus
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              {heroImage && (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={heroImage.imageUrl}
                    alt="Logistics warehouse"
                    fill
                    className="object-cover"
                    data-ai-hint={heroImage.imageHint}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="absolute right-0 top-0 -z-0 h-full w-1/3 translate-x-1/2 bg-secondary/20 blur-3xl" />
        </section>

        {/* Process Section */}
        <section id="services" className="bg-background py-20 lg:py-32">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-primary sm:text-5xl">Nos 10 étapes logistiques</h2>
              <p className="mt-4 text-muted-foreground">Une gestion complète de votre flux e-commerce</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <Card key={index} className="group overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <span className="mb-1 text-xs font-bold text-accent">ÉTAPE {index + 1}</span>
                    <h3 className="mb-2 text-sm font-bold leading-tight">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Commitments Section */}
        <section id="engagements" className="bg-muted/50 py-20 lg:py-32">
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold text-primary sm:text-5xl">Nos engagements</h2>
              <p className="mt-4 text-muted-foreground">Les valeurs qui font notre force</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {engagements.map((item, index) => (
                <div key={index} className="flex flex-col items-center max-w-[200px] text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md text-secondary">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-20 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Prêt à simplifier votre logistique ?</h2>
            <p className="mt-4 text-lg opacity-90">Rejoignez Logistica Tunisie et boostez vos ventes en ligne.</p>
            <Button size="lg" className="mt-8 bg-white text-secondary hover:bg-white/90">
              Contactez-nous aujourd'hui
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}