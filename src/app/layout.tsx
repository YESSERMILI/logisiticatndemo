
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
});

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-heading"
});

export const metadata: Metadata = {
  title: "Logistica Tunisie | De la commande à la livraison, tout simplement.",
  description: "Solution complète de logistique e-commerce en Tunisie. Stockage, préparation, expédition et suivi en temps réel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
