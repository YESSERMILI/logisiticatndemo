import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-brand"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
