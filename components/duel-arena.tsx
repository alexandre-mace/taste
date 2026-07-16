"use client"

import * as React from "react"
import Link from "next/link"

import { BezelProgress } from "@/components/bezel-progress"
import { Cartel } from "@/components/cartel"
import { ItemFrame } from "@/components/item-frame"
import { PageHeader } from "@/components/page-header"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Skeleton } from "@/components/ui/skeleton"
import { useRankings } from "@/hooks/use-rankings"
import { pickPair } from "@/lib/elo"
import {
  getSubject,
  subjectLabel,
  type Item,
  type Subject,
} from "@/lib/subjects"
import { cn } from "@/lib/utils"

const TARGET_DUELS = 60
const FLASH_MS = 420

type Flash = { pair: [Item, Item]; chosen: string }

export function DuelArena({ subjectSlug }: { subjectSlug: string }) {
  const subject = getSubject(subjectSlug)!
  const { ready, entries, totalDuels, recentPairs, recordDuel } =
    useRankings(subjectSlug)
  // During the win flash the previous pair stays on screen while the
  // duel is already recorded in the store.
  const [flash, setFlash] = React.useState<Flash | null>(null)
  const flashRef = React.useRef(false)
  const timerRef = React.useRef<number | null>(null)

  const { slugs, bySlug } = React.useMemo(() => {
    return {
      slugs: subject.items.map((i) => i.slug),
      bySlug: new Map(subject.items.map((i) => [i.slug, i])),
    }
  }, [subject])

  // Pure derivation: pickPair is deterministic for a given store state,
  // so the pair only changes when a duel is recorded.
  const nextPair = React.useMemo<[Item, Item] | null>(() => {
    if (!ready) return null
    const picked = pickPair(slugs, entries, recentPairs, totalDuels)
    if (!picked) return null
    return [bySlug.get(picked[0])!, bySlug.get(picked[1])!]
  }, [ready, entries, recentPairs, totalDuels, slugs, bySlug])

  const pair = flash?.pair ?? nextPair
  const chosen = flash?.chosen ?? null

  const choose = React.useCallback(
    (winner: Item, currentPair: [Item, Item]) => {
      // Synchronous ref guard: two near-simultaneous key presses share the
      // same render's closure, so state alone cannot prevent a double record.
      if (flashRef.current) return
      flashRef.current = true
      const loser = currentPair.find((i) => i.slug !== winner.slug)!
      setFlash({ pair: currentPair, chosen: winner.slug })
      recordDuel(winner.slug, loser.slug)
      timerRef.current = window.setTimeout(() => {
        flashRef.current = false
        setFlash(null)
      }, FLASH_MS)
    },
    [recordDuel]
  )

  React.useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (!pair || flash) return
      if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return
      if (event.key === "ArrowLeft") choose(pair[0], pair)
      if (event.key === "ArrowRight") choose(pair[1], pair)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [pair, flash, choose])

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex items-start justify-between gap-6">
        <PageHeader
          eyebrow={`Le duel — ${subjectLabel(subject)}`}
          title={subject.duelQuestion}
        >
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            Cliquez sur votre choix, ou utilisez
            <KbdGroup>
              <Kbd>←</Kbd>
              <Kbd>→</Kbd>
            </KbdGroup>
            . Chaque duel affine votre classement.
          </p>
        </PageHeader>
        <BezelProgress value={totalDuels} max={TARGET_DUELS} label="duels" />
      </div>

      {totalDuels >= TARGET_DUELS ? (
        <Alert className="mt-8">
          <AlertTitle>Un tour de cadran complet</AlertTitle>
          <AlertDescription>
            Votre classement est maintenant fiable. Continuez pour
            l&apos;affiner encore.
          </AlertDescription>
          <AlertAction>
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={<Link href={`/${subject.slug}/classement`} />}
            >
              Voir le classement
            </Button>
          </AlertAction>
        </Alert>
      ) : null}

      {!ready || !pair ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
          <Skeleton className="aspect-square rounded-none sm:aspect-3/4" />
          <span className="hidden w-10 sm:block" aria-hidden />
          <Skeleton className="aspect-square rounded-none sm:aspect-3/4" />
        </div>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch sm:gap-6">
          <DuelCard
            subject={subject}
            item={pair[0]}
            state={stateFor(pair[0], chosen)}
            onChoose={() => choose(pair[0], pair)}
          />
          <div className="flex items-center justify-center">
            <span className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase">
              vs
            </span>
          </div>
          <DuelCard
            subject={subject}
            item={pair[1]}
            state={stateFor(pair[1], chosen)}
            onChoose={() => choose(pair[1], pair)}
          />
        </div>
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {totalDuels} duel{totalDuels > 1 ? "s" : ""} joué
        {totalDuels > 1 ? "s" : ""} ·{" "}
        <Link
          href={`/${subject.slug}/classement`}
          className="underline underline-offset-4 hover:text-foreground"
        >
          voir mon classement
        </Link>
      </p>
    </div>
  )
}

type CardState = "idle" | "won" | "lost"

function stateFor(item: Item, chosen: string | null): CardState {
  if (chosen === null) return "idle"
  return chosen === item.slug ? "won" : "lost"
}

function DuelCard({
  subject,
  item,
  state,
  onChoose,
}: {
  subject: Subject
  item: Item
  state: CardState
  onChoose: () => void
}) {
  return (
    <button
      type="button"
      onClick={onChoose}
      className={cn(
        "group flex flex-col gap-3 text-left transition-opacity duration-300 outline-none",
        state === "lost" && "opacity-35"
      )}
    >
      <ItemFrame
        subject={subject.slug}
        slug={item.slug}
        alt={`${item.maker} ${item.name}`}
        sizes="(max-width: 640px) 100vw, 460px"
        preload
        className={cn(
          cn("w-full transition-colors", subject.plateAspect),
          state === "idle" &&
            "group-hover:border-foreground/40 group-focus-visible:border-ring group-focus-visible:ring-3 group-focus-visible:ring-ring/50",
          state === "won" && "border-foreground ring-3 ring-foreground/25"
        )}
      />
      <Cartel
        meta={String(item.year)}
        title={item.name}
        titleAs="h2"
        size="lg"
        brand={item.maker}
        footer={item.tagline}
      />
    </button>
  )
}
