"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Explorer" },
  { href: "/duel", label: "Duel" },
  { href: "/classement", label: "Classement" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="font-heading text-lg leading-none font-bold tracking-[-0.03em] uppercase"
        >
          Taste<sup className="align-super text-[9px]">®</sup>
        </Link>
        <nav className="flex items-center gap-4 font-mono sm:gap-6">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/" || pathname.startsWith("/montres")
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "border-b pb-0.5 text-[11px] tracking-wider uppercase transition-colors",
                  active
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
