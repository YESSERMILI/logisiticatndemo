
import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans, Readex_Pro, DM_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const readexPro = Readex_Pro({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["300", "400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "LOGISTICA TUNISIE - Logistique e-commerce simplifiée",
  description: "Solution complète de logistique e-commerce en Tunisie. De la commande à la livraison, tout simplement.",
  openGraph: {
    title: "LOGISTICA TUNISIE - Logistique e-commerce",
    description: "Stockage, préparation, expédition et suivi en temps réel pour boutiques en ligne.",
    images: ["https://i.postimg.cc/P5sfzcz0/png-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOGISTICA TUNISIE - Logistique e-commerce",
    description: "Stockage, préparation, expédition et suivi en temps réel pour boutiques en ligne.",
    images: ["https://i.postimg.cc/P5sfzcz0/png-1.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${sora.variable} ${readexPro.variable} ${dmMono.variable} font-sans antialiased text-gray-900`}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
