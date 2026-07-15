"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { CheckIcon, ChevronDownIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getSubject, subjects } from "@/lib/subjects"
import { cn } from "@/lib/utils"

const sections = [
  { suffix: "", label: "Explorer" },
  { suffix: "/duel", label: "Duel" },
  { suffix: "/classement", label: "Classement" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()

  const currentSlug = pathname.split("/")[1] ?? ""
  const subject = getSubject(currentSlug)

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="shrink-0 font-heading text-lg leading-none font-bold tracking-[-0.03em] uppercase"
          >
            Taste<sup className="align-super text-[9px]">®</sup>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex min-w-0 items-center gap-1.5 border-b border-transparent pb-0.5 font-mono text-[11px] tracking-wider text-muted-foreground uppercase transition-colors outline-none hover:text-foreground focus-visible:border-ring data-[popup-open]:text-foreground">
              <span className="truncate">
                {subject ? subject.title : "Collections"}
              </span>
              <ChevronDownIcon className="size-3 shrink-0" aria-hidden />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuGroup>
                {subjects.map((s) => (
                  <DropdownMenuItem
                    key={s.slug}
                    onClick={() => router.push(`/${s.slug}`)}
                    className="font-mono text-xs tracking-wider uppercase"
                  >
                    {s.title}
                    {s.slug === subject?.slug ? (
                      <CheckIcon data-icon="inline-end" aria-hidden />
                    ) : null}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {subject ? (
          <nav className="flex items-center gap-4 font-mono sm:gap-6">
            {sections.map((section) => {
              const href = `/${subject.slug}${section.suffix}`
              const active =
                section.suffix === ""
                  ? pathname === href ||
                    (pathname.startsWith(`/${subject.slug}/`) &&
                      !sections.some(
                        (s) =>
                          s.suffix !== "" &&
                          pathname === `/${subject.slug}${s.suffix}`
                      ))
                  : pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "border-b pb-0.5 text-[11px] tracking-wider uppercase transition-colors",
                    active
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {section.label}
                </Link>
              )
            })}
          </nav>
        ) : null}
      </div>
    </header>
  )
}
