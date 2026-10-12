import type { Metadata } from "next";
import { Sora, Inter, IBM_Plex_Sans_Arabic, DM_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LOGISTICA TUNISIE - Logistique e-commerce simplifiée",
  description: "Solution complète de logistique e-commerce en Tunisie. De la commande à la livraison, tout simplement.",
  openGraph: {
    title: "LOGISTICA TUNISIE - Logistique e-commerce",
    description: "Stockage, préparation, expédition et suivi en temps réel pour boutiques en ligne.",
    images: ["https://i.postimg.cc/P5sfzcz0/png-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${ibmPlexArabic.variable} ${dmMono.variable} ${plusJakarta.variable} font-sans antialiased text-gray-900`}>
        <Providers>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}