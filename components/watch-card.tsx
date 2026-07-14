import Link from "next/link"

import { Cartel } from "@/components/cartel"
import { WatchFrame } from "@/components/watch-frame"
import type { Watch } from "@/lib/watches"

export function WatchCard({ watch, number }: { watch: Watch; number: number }) {
  return (
    <Link
      href={`/montres/${watch.slug}`}
      className="group flex flex-col gap-3 outline-none"
    >
      <WatchFrame
        slug={watch.slug}
        alt={`${watch.brand} ${watch.name}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 270px"
        className="aspect-4/5 transition-colors group-hover:border-foreground/40 group-focus-visible:border-ring group-focus-visible:ring-3 group-focus-visible:ring-ring/50"
        imageClassName="transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <Cartel
        meta={`N° ${String(number).padStart(2, "0")} · ${watch.year}`}
        title={watch.name}
        titleAs="h3"
        brand={watch.brand}
      />
    </Link>
  )
}
