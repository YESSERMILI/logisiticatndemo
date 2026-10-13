
import type { Metadata } from "next";
import { Inter, Sora, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

export const metadata: Metadata = {
  title: "Logistica Tunisie — De la commande à la livraison, tout simplement.",
  description: "Solution intégrée de fulfillment, stockage et livraison pour l'e-commerce en Tunisie.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${ibmPlexArabic.variable} ${inter.variable} ${sora.variable} font-sans antialiased text-white selection:bg-[#F7931E] selection:text-[#0B2A6B]`}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
