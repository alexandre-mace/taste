"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { WatchCard } from "@/components/watch-card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import type { Watch } from "@/lib/watches"

// Accent- and hyphen-insensitive: "jaeger lecoultre" matches Jaeger-LeCoultre.
function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[-–—]/g, " ")
    .replace(/\s+/g, " ")
}

export function ExplorerGrid({
  watches,
  className,
}: {
  watches: Watch[]
  className?: string
}) {
  const [query, setQuery] = React.useState("")

  const indexed = React.useMemo(
    () =>
      watches.map((watch, i) => ({
        watch,
        number: i + 1,
        haystack: normalize(`${watch.brand} ${watch.name} ${watch.year}`),
      })),
    [watches]
  )

  const filtered = React.useMemo(() => {
    const q = normalize(query.trim())
    if (!q) return indexed
    return indexed.filter(({ haystack }) => haystack.includes(q))
  }, [indexed, query])

  return (
    <section className={className}>
      <div className="flex items-center justify-between gap-4 border-b border-border/60 pb-4">
        <InputGroup className="flex-1 bg-card sm:max-w-xs">
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupInput
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Chercher une marque, un modèle…"
          />
        </InputGroup>
        <p className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
          {filtered.length}/{watches.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>Aucune pièce trouvée</EmptyTitle>
            <EmptyDescription>
              Aucune montre ne correspond à « {query} ». Essayez un autre nom ou
              une autre marque.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
          {filtered.map(({ watch, number }) => (
            <WatchCard key={watch.slug} watch={watch} number={number} />
          ))}
        </div>
      )}
    </section>
  )
}
