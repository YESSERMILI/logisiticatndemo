import type { Metadata } from "next";
import { Tajawal, Inter, Sora } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/language-context";
import { Toaster } from "@/components/ui/toaster";

const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["400", "500", "700", "800"],
  variable: "--font-arabic" 
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading"
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
      <body className={`${tajawal.variable} ${inter.variable} ${sora.variable} font-sans antialiased text-white selection:bg-[#F7931E] selection:text-[#0B2A6B]`}>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
