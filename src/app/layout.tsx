import type { Metadata } from "next";
import { Inter, Sora, Tajawal, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-heading" });
const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-arabic" 
});

export const metadata: Metadata = {
  title: "Logistica Tunisie — De la commande à la livraison",
  description: "Solution intégrée d'entreposage, de distribution et de gestion COD conçue pour l'e-commerce tunisien.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} ${tajawal.variable} font-sans`}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}