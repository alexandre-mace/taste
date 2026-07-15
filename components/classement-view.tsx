"use client"

import * as React from "react"
import Link from "next/link"

import { Cartel } from "@/components/cartel"
import { ItemFrame } from "@/components/item-frame"
import { PageHeader } from "@/components/page-header"
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
import {
  getSubject,
  unseenLabel,
  type Item,
  type Subject,
} from "@/lib/subjects"
import { cn } from "@/lib/utils"

export function ClassementView({ subjectSlug }: { subjectSlug: string }) {
  const subject = getSubject(subjectSlug)!
  const { ready, entries, totalDuels, reset } = useRankings(subjectSlug)

  const ranked = React.useMemo(() => {
    return subject.items
      .map((item) => ({ item, entry: getEntry(entries, item.slug) }))
      .filter(({ entry }) => entry.battles > 0)
      .sort((a, b) => b.entry.rating - a.entry.rating)
  }, [entries, subject])

  const unseen = subject.items.length - ranked.length
  const allSeen =
    subject.itemGender === "f"
      ? `toutes les ${subject.itemNoun}s ont été opposées`
      : `tous les ${subject.itemNoun}s ont été opposés`

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
              Jouez quelques duels pour révéler vos préférences.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              nativeButton={false}
              render={<Link href={`/${subject.slug}/duel`} />}
            >
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
        <PageHeader
          eyebrow={`Accrochage personnel — ${subject.title}`}
          title="Votre classement"
        >
          <p className="mt-3 text-sm text-muted-foreground">
            Établi sur {totalDuels} duel{totalDuels > 1 ? "s" : ""} ·{" "}
            {unseen > 0 ? unseenLabel(subject, unseen) : allSeen}
          </p>
        </PageHeader>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<Link href={`/${subject.slug}/duel`} />}
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
                  Tous vos duels de la collection {subject.title} et le
                  classement qui en découle seront définitivement effacés.
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
        {podium.map(({ item, entry }, i) => (
          <PodiumCard
            key={item.slug}
            subject={subject}
            item={item}
            entry={entry}
            rank={i + 1}
          />
        ))}
      </div>

      {rest.length > 0 ? (
        <ol className="mt-12 border-t border-border/60">
          {rest.map(({ item, entry }, i) => (
            <li key={item.slug} className="border-b border-border/60">
              <Link
                href={`/${subject.slug}/${item.slug}`}
                className="flex items-center gap-4 py-3 transition-colors hover:bg-card"
              >
                <span className="w-8 shrink-0 text-right font-mono text-sm text-muted-foreground tabular-nums">
                  {String(i + 4).padStart(2, "0")}
                </span>
                <ItemFrame
                  subject={subject.slug}
                  slug={item.slug}
                  alt=""
                  sizes="44px"
                  className="size-11 shrink-0 border-border/60"
                />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase">
                    {item.maker}
                  </span>
                  <span className="truncate font-heading font-medium">
                    {item.name}
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
  subject,
  item,
  entry,
  rank,
}: {
  subject: Subject
  item: Item
  entry: EloEntry
  rank: number
}) {
  return (
    <Link
      href={`/${subject.slug}/${item.slug}`}
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
      <ItemFrame
        subject={subject.slug}
        slug={item.slug}
        alt={`${item.maker} ${item.name}`}
        sizes="(max-width: 640px) 100vw, 290px"
        className={cn(
          subject.plateAspect,
          "transition-colors",
          rank === 1 ? "border-foreground" : "group-hover:border-foreground/40"
        )}
        imageClassName="transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <Cartel
        meta={`${entry.rating} pts · ${formatRecord(entry)}`}
        title={item.name}
        size="lg"
        brand={item.maker}
      />
    </Link>
  )
}
