import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, DM_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Loader } from "@/components/loader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
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
      <body className={`${inter.variable} ${jakarta.variable} ${dmMono.variable} font-sans antialiased`}>
        <Loader />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
