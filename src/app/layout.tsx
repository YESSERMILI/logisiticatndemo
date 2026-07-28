
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esports.tn × Spacenet | Partnership Proposal",
  description: "Transformer le gaming compétitif en récompenses réelles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
