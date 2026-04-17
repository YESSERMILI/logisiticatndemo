import type { Metadata } from "next";
import { Cairo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/components/providers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: "variable",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "3ez El Mondial by TT",
  description: "The official Tunisian competitive quiz platform powered by TT",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          spaceGrotesk.variable,
          cairo.variable
        )}
      >
        <Providers>
          <div className="absolute top-0 z-[-2] h-[60vh] w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(10,132,255,0.15),rgba(255,255,255,0))]"></div>
          <div className="relative flex min-h-dvh flex-col bg-transparent">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
