import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ARGENGOAL | Experiencias Internacionales de Fútbol en Argentina",
  description:
    "Llevamos clubes, academias y jugadores jóvenes de todo el mundo a Argentina para entrenar en clubes profesionales, jugar partidos amistosos y vivir la cultura del fútbol argentino.",
  keywords: "fútbol, Argentina, Rosario, experiencias internacionales, entrenamiento profesional, academias, clubes",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicon/favicon.ico" },
    ],
  },
  manifest: "/favicon/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://argengoal.com",
    siteName: "ARGENGOAL",
    title: "ARGENGOAL | Experiencias Internacionales de Fútbol en Argentina",
    description: "Llevamos clubes, academias y jugadores jóvenes de todo el mundo a Argentina para entrenar en clubes profesionales, jugar partidos amistosos y vivir la cultura del fútbol argentino.",
    images: [
      {
        url: "/logo-dark.png",
        width: 1200,
        height: 630,
        alt: "ARGENGOAL - Experiencias de Fútbol en Argentina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARGENGOAL | Experiencias Internacionales de Fútbol en Argentina",
    description: "Llevamos clubes, academias y jugadores jóvenes de todo el mundo a Argentina para entrenar en clubes profesionales, jugar partidos amistosos y vivir la cultura del fútbol argentino.",
    images: ["/logo-dark.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#62b3e5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
