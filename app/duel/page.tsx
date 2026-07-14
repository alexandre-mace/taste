"use client"

import * as React from "react"
import Link from "next/link"

import { BezelProgress } from "@/components/bezel-progress"
import { Cartel } from "@/components/cartel"
import { PageHeader } from "@/components/page-header"
import { WatchFrame } from "@/components/watch-frame"
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
import { cn } from "@/lib/utils"
import { watches, type Watch } from "@/lib/watches"

const TARGET_DUELS = 60
const FLASH_MS = 420

const slugs = watches.map((w) => w.slug)
const bySlug = new Map(watches.map((w) => [w.slug, w]))

type Flash = { pair: [Watch, Watch]; chosen: string }

export default function DuelPage() {
  const { ready, entries, totalDuels, recentPairs, recordDuel } = useRankings()
  // During the win flash the previous pair stays on screen while the
  // duel is already recorded in the store.
  const [flash, setFlash] = React.useState<Flash | null>(null)
  const flashRef = React.useRef(false)
  const timerRef = React.useRef<number | null>(null)

  // Pure derivation: pickPair is deterministic for a given store state,
  // so the pair only changes when a duel is recorded.
  const nextPair = React.useMemo<[Watch, Watch] | null>(() => {
    if (!ready) return null
    const picked = pickPair(slugs, entries, recentPairs, totalDuels)
    if (!picked) return null
    return [bySlug.get(picked[0])!, bySlug.get(picked[1])!]
  }, [ready, entries, recentPairs, totalDuels])

  const pair = flash?.pair ?? nextPair
  const chosen = flash?.chosen ?? null

  const choose = React.useCallback(
    (winner: Watch, currentPair: [Watch, Watch]) => {
      // Synchronous ref guard: two near-simultaneous key presses share the
      // same render's closure, so state alone cannot prevent a double record.
      if (flashRef.current) return
      flashRef.current = true
      const loser = currentPair.find((w) => w.slug !== winner.slug)!
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
        <PageHeader eyebrow="Le duel" title="Laquelle préférez-vous ?">
          <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            Cliquez sur votre préférée, ou utilisez
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
              render={<Link href="/classement" />}
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
            watch={pair[0]}
            state={stateFor(pair[0], chosen)}
            onChoose={() => choose(pair[0], pair)}
          />
          <div className="flex items-center justify-center">
            <span className="font-heading text-sm tracking-[0.3em] text-muted-foreground uppercase">
              vs
            </span>
          </div>
          <DuelCard
            watch={pair[1]}
            state={stateFor(pair[1], chosen)}
            onChoose={() => choose(pair[1], pair)}
          />
        </div>
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground">
        {totalDuels} duel{totalDuels > 1 ? "s" : ""} joué
        {totalDuels > 1 ? "s" : ""} ·{" "}
        <Link
          href="/classement"
          className="underline underline-offset-4 hover:text-foreground"
        >
          voir mon classement
        </Link>
      </p>
    </div>
  )
}

type CardState = "idle" | "won" | "lost"

function stateFor(watch: Watch, chosen: string | null): CardState {
  if (chosen === null) return "idle"
  return chosen === watch.slug ? "won" : "lost"
}

function DuelCard({
  watch,
  state,
  onChoose,
}: {
  watch: Watch
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
      <WatchFrame
        slug={watch.slug}
        alt={`${watch.brand} ${watch.name}`}
        sizes="(max-width: 640px) 100vw, 460px"
        preload
        className={cn(
          "aspect-square w-full transition-colors sm:aspect-3/4",
          state === "idle" &&
            "group-hover:border-foreground/40 group-focus-visible:border-ring group-focus-visible:ring-3 group-focus-visible:ring-ring/50",
          state === "won" && "border-foreground ring-3 ring-foreground/25"
        )}
      />
      <Cartel
        meta={String(watch.year)}
        title={watch.name}
        titleAs="h2"
        size="lg"
        brand={watch.brand}
        footer={watch.tagline}
      />
    </button>
  )
}
