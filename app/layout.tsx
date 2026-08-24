import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"

import "./globals.css"
import { MadeWithLove } from "@/components/made-with-love"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@/lib/utils"



export const metadata: Metadata = {
  title: {
    default: "Taste, le musée personnel du goût",
    template: "%s - Taste",
  },
  description:
    "Des collections d'icônes (montres, design d'intérieur…) à explorer et départager en duel pour révéler votre goût.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text x='50%' y='50%' style='dominant-baseline:central;text-anchor:middle;font-size:90px;'>🖼️</text></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        "antialiased",
        "font-sans",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <footer className="border-t">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 font-mono text-[11px] tracking-wider text-muted-foreground uppercase sm:px-6">
              <p>Taste©2026</p>
              <p>Photos : crédits par pièce</p>
            </div>
          </footer>
          <MadeWithLove className="mt-0 pb-6" />
      </body>
    </html>
  )
}
