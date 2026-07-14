"use client"

import * as React from "react"
import Link from "next/link"

import { Cartel } from "@/components/cartel"
import { PageHeader } from "@/components/page-header"
import { WatchFrame } from "@/components/watch-frame"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { Skeleton } from "@/components/ui/skeleton"
import { useRankings } from "@/hooks/use-rankings"
import { formatRecord, getEntry, type EloEntry } from "@/lib/elo"
import { cn } from "@/lib/utils"
import { watches, type Watch } from "@/lib/watches"

export default function ClassementPage() {
  const { ready, entries, totalDuels, reset } = useRankings()

  const ranked = React.useMemo(() => {
    return watches
      .map((watch) => ({ watch, entry: getEntry(entries, watch.slug) }))
      .filter(({ entry }) => entry.battles > 0)
      .sort((a, b) => b.entry.rating - a.entry.rating)
  }, [entries])

  const unseen = watches.length - ranked.length

  if (!ready) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <Skeleton className="h-10 w-72" />
        <Skeleton className="mt-3 h-4 w-48" />
      </div>
    )
  }

  if (ranked.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Empty>
          <EmptyHeader>
            <EmptyTitle className="font-heading text-2xl font-semibold tracking-tight">
              Votre classement est encore vierge
            </EmptyTitle>
            <EmptyDescription className="text-base">
              Jouez quelques duels pour révéler vos montres préférées.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button nativeButton={false} render={<Link href="/duel" />}>
              Lancer le premier duel
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    )
  }

  const podium = ranked.slice(0, 3)
  const rest = ranked.slice(3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <PageHeader eyebrow="Accrochage personnel" title="Votre classement">
          <p className="mt-3 text-sm text-muted-foreground">
            Établi sur {totalDuels} duel{totalDuels > 1 ? "s" : ""}
            {unseen > 0
              ? ` · ${unseen} pièce${unseen > 1 ? "s" : ""} encore jamais opposée${unseen > 1 ? "s" : ""}`
              : " · toutes les pièces ont été opposées"}
          </p>
        </PageHeader>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<Link href="/duel" />}
          >
            Continuer les duels
          </Button>
          <AlertDialog>
            <AlertDialogTrigger
              render={
                <Button variant="ghost" size="sm">
                  Tout recommencer
                </Button>
              }
            />
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Remettre le classement à zéro ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Tous vos duels et le classement qui en découle seront
                  définitivement effacés.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction onClick={reset}>
                  Tout effacer
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-3">
        {podium.map(({ watch, entry }, i) => (
          <PodiumCard
            key={watch.slug}
            watch={watch}
            entry={entry}
            rank={i + 1}
          />
        ))}
      </div>

      {rest.length > 0 ? (
        <ol className="mt-12 border-t border-border/60">
          {rest.map(({ watch, entry }, i) => (
            <li key={watch.slug} className="border-b border-border/60">
              <Link
                href={`/montres/${watch.slug}`}
                className="flex items-center gap-4 py-3 transition-colors hover:bg-card"
              >
                <span className="w-8 shrink-0 text-right font-mono text-sm text-muted-foreground tabular-nums">
                  {String(i + 4).padStart(2, "0")}
                </span>
                <WatchFrame
                  slug={watch.slug}
                  alt=""
                  sizes="44px"
                  className="size-11 shrink-0 border-border/60"
                />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                    {watch.brand}
                  </span>
                  <span className="truncate font-heading font-medium">
                    {watch.name}
                  </span>
                </span>
                <span className="hidden font-mono text-xs text-muted-foreground sm:block">
                  {formatRecord(entry)}
                </span>
                <span className="w-14 shrink-0 text-right font-mono text-sm tabular-nums">
                  {entry.rating}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  )
}

function PodiumCard({
  watch,
  entry,
  rank,
}: {
  watch: Watch
  entry: EloEntry
  rank: number
}) {
  return (
    <Link
      href={`/montres/${watch.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 outline-none",
        rank === 1 && "sm:order-2",
        rank === 2 && "sm:order-1",
        rank === 3 && "sm:order-3"
      )}
    >
      <Badge
        className="absolute top-3 left-3 z-10 font-mono tabular-nums"
        variant={rank === 1 ? "default" : "secondary"}
      >
        {rank}
      </Badge>
      <WatchFrame
        slug={watch.slug}
        alt={`${watch.brand} ${watch.name}`}
        sizes="(max-width: 640px) 100vw, 290px"
        className={cn(
          "aspect-4/5 transition-colors",
          rank === 1 ? "border-foreground" : "group-hover:border-foreground/40"
        )}
        imageClassName="transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <Cartel
        meta={`${entry.rating} pts · ${formatRecord(entry)}`}
        title={watch.name}
        size="lg"
        brand={watch.brand}
      />
    </Link>
  )
}
