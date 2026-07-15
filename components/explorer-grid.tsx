"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { ItemCard } from "@/components/item-card"
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
import type { Item } from "@/lib/subjects"

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
  subject,
  items,
  searchPlaceholder,
  className,
}: {
  subject: string
  items: Item[]
  searchPlaceholder: string
  className?: string
}) {
  const [query, setQuery] = React.useState("")

  const indexed = React.useMemo(
    () =>
      items.map((item, i) => ({
        item,
        number: i + 1,
        haystack: normalize(`${item.maker} ${item.name} ${item.year}`),
      })),
    [items]
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
            placeholder={searchPlaceholder}
          />
        </InputGroup>
        <p className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
          {filtered.length}/{items.length}
        </p>
      </div>

      {filtered.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyTitle>Rien ne correspond</EmptyTitle>
            <EmptyDescription>
              Aucune pièce ne correspond à « {query} ». Essayez un autre nom.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
          {filtered.map(({ item, number }) => (
            <ItemCard
              key={item.slug}
              subject={subject}
              item={item}
              number={number}
            />
          ))}
        </div>
      )}
    </section>
  )
}
