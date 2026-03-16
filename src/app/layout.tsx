import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HazTuWeb Panama | Sitios Web Profesionales",
  description: "HazTuWeb Panama - Servicio profesional de diseño web en Panamá. Creamos sitios web modernos, rápidos y efectivos para tu negocio.",
  keywords: ["diseño web", "Panamá", "sitios web", "desarrollo web", "web design", "HazTuWeb", "páginas web"],
  authors: [{ name: "HazTuWeb Panama" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HazTuWeb Panama | Sitios Web Profesionales",
    description: "Servicio profesional de diseño web en Panamá. Creamos sitios web modernos, rápidos y efectivos para tu negocio.",
    url: "https://haztuweb.pa",
    siteName: "HazTuWeb Panama",
    type: "website",
    locale: "es_PA",
  },
  twitter: {
    card: "summary_large_image",
    title: "HazTuWeb Panama | Sitios Web Profesionales",
    description: "Servicio profesional de diseño web en Panamá. Creamos sitios web modernos, rápidos y efectivos para tu negocio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
