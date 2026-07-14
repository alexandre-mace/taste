"use client"

import * as React from "react"

import { applyDuel, getEntry, pairKey, type EloEntry } from "@/lib/elo"

const STORAGE_KEY = "taste:montres:elo"
const SCHEMA_VERSION = 1
const RECENT_PAIRS_MAX = 40

type Stored = {
  version: number
  entries: Record<string, EloEntry>
  totalDuels: number
  recentPairs: string[]
}

const EMPTY: Stored = {
  version: SCHEMA_VERSION,
  entries: {},
  totalDuels: 0,
  recentPairs: [],
}

let snapshot: Stored | null = null
const listeners = new Set<() => void>()

function load(): Stored {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return EMPTY
    const parsed = JSON.parse(raw) as Partial<Stored>
    // Pre-versioning blobs had no version field: treat them as v1.
    const version = parsed.version ?? SCHEMA_VERSION
    if (version !== SCHEMA_VERSION) return EMPTY
    return {
      version: SCHEMA_VERSION,
      entries: parsed.entries ?? {},
      totalDuels: parsed.totalDuels ?? 0,
      recentPairs: parsed.recentPairs ?? [],
    }
  } catch {
    return EMPTY
  }
}

function getSnapshot(): Stored {
  if (snapshot === null) snapshot = load()
  return snapshot
}

function getServerSnapshot(): Stored {
  return EMPTY
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener)
  // Keep tabs in sync: another tab's write invalidates our snapshot,
  // otherwise a stale snapshot here would clobber its duels on next write.
  function onStorage(event: StorageEvent) {
    if (event.key !== STORAGE_KEY && event.key !== null) return
    snapshot = load()
    listeners.forEach((l) => l())
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", onStorage)
  }
}

function setStored(next: Stored) {
  snapshot = next
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // storage full or unavailable: keep in-memory state
  }
  listeners.forEach((listener) => listener())
}

export function useRankings() {
  const state = React.useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
  const ready = React.useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

  const recordDuel = React.useCallback(
    (winnerSlug: string, loserSlug: string) => {
      const prev = getSnapshot()
      const result = applyDuel(
        getEntry(prev.entries, winnerSlug),
        getEntry(prev.entries, loserSlug)
      )
      setStored({
        version: SCHEMA_VERSION,
        entries: {
          ...prev.entries,
          [winnerSlug]: result.winner,
          [loserSlug]: result.loser,
        },
        totalDuels: prev.totalDuels + 1,
        recentPairs: [
          pairKey(winnerSlug, loserSlug),
          ...prev.recentPairs,
        ].slice(0, RECENT_PAIRS_MAX),
      })
    },
    []
  )

  const reset = React.useCallback(() => {
    setStored(EMPTY)
  }, [])

  return {
    ready,
    entries: state.entries,
    totalDuels: state.totalDuels,
    recentPairs: state.recentPairs,
    recordDuel,
    reset,
  }
}
