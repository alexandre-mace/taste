import type { Metadata } from "next"
import { Archivo, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Taste — Le musée personnel du goût",
    template: "%s — Taste",
  },
  description:
    "Des collections d'icônes (montres, design d'intérieur…) à explorer et départager en duel pour révéler votre goût.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
        archivo.variable,
        fontMono.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 font-mono text-[11px] tracking-wider text-muted-foreground uppercase sm:px-6">
              <p>Taste©2026</p>
              <p>Photos : Wikimedia Commons &amp; Flickr</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
