import Link from "next/link"

import { ExplorerGrid } from "@/components/explorer-grid"
import { Button } from "@/components/ui/button"
import { watches } from "@/lib/watches"

export default function Page() {
  const years = watches.map((w) => w.year)
  const range = `${Math.min(...years)}–${Math.max(...years)}`

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24">
      <section>
        <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          <p>Collection I — Horlogerie</p>
          <p className="tabular-nums">
            {watches.length} pièces · {range}
          </p>
        </div>
        <h1 className="mt-3 font-heading text-[clamp(4.5rem,15vw,13rem)] leading-[0.85] font-semibold tracking-[-0.045em] uppercase">
          Montres
        </h1>
        <div className="mt-6 flex flex-col gap-6 border-t pt-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pt-8">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Les montres qui ont écrit l&apos;histoire, exposées par ordre
            chronologique — de l&apos;atelier d&apos;Abraham-Louis Breguet à
            l&apos;Apple Watch. Parcourez la collection, puis départagez les
            pièces en duel pour révéler votre goût.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button nativeButton={false} render={<Link href="/duel" />}>
              Lancer le duel
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href="/classement" />}
            >
              Mon classement
            </Button>
          </div>
        </div>
      </section>

      <ExplorerGrid watches={watches} className="mt-12 sm:mt-16" />
    </div>
  )
}
