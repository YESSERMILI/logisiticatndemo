import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Loader } from "@/components/loader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Logistica Tunisie - Logistique e-commerce de la commande à la livraison",
  description: "Solution complète de logistique e-commerce en Tunisie. Stockage, préparation, expédition et suivi en temps réel.",
  openGraph: {
    title: "Logistica Tunisie - Logistique e-commerce",
    description: "De la commande à la livraison, tout simplement.",
    images: ["https://i.postimg.cc/P5sfzcz0/png-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistica Tunisie - Logistique e-commerce",
    description: "De la commande à la livraison, tout simplement.",
    images: ["https://i.postimg.cc/P5sfzcz0/png-1.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=DM+Mono:wght@500&display=swap" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Loader />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
