import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  themeColor: "#3586FF",
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ontheboard.tech'),
  title: {
    default: "On The Board | Agence de Développement Web & Mobile en France",
    template: "%s | On The Board"
  },
  description: "Agence digitale spécialisée dans la création de sites web, le développement d'applications web & mobile, et l'intégration d'IA. Expertise en sites vitrines, e-commerce et solutions sur mesure.",
  keywords: [
    "création site web",
    "développement web",
    "agence digitale",
    "application web",
    "site vitrine",
    "e-commerce",
    "développement mobile",
    "intégration IA",
    "agence web France",
    "création site internet"
  ],
  authors: [{ name: "On The Board" }],
  creator: "On The Board",
  publisher: "On The Board",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "On The Board | Agence de Développement Web & Mobile en France",
    description: "Agence digitale spécialisée dans la création de sites web, le développement d'applications web & mobile, et l'intégration d'IA. Expertise en sites vitrines, e-commerce et solutions sur mesure.",
    url: 'https://ontheboard.tech',
    siteName: 'On The Board',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On The Board | Agence de Développement Web & Mobile en France',
    description: 'Agence digitale spécialisée dans la création de sites web, le développement d\'applications web & mobile, et l\'intégration d\'IA.',
    creator: '@ontheboard',
  },
  verification: {
    google: '2-XkXnYnVTEp-HwB5TNVjajJvIRmxPF53NbKdZ2veI8',
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" hrefLang="fr" href="https://ontheboard.tech" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-42BEHLJ0KT"/>
      <Analytics/>
    </html>
  );
}
