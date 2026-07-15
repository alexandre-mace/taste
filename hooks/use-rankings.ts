"use client"

import * as React from "react"

import { applyDuel, getEntry, pairKey, type EloEntry } from "@/lib/elo"

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

// Un store par sujet, indexé par clé localStorage.
const snapshots = new Map<string, Stored>()
const listeners = new Set<() => void>()

function storageKey(subjectSlug: string): string {
  return `taste:${subjectSlug}:elo`
}

function load(key: string): Stored {
  try {
    const raw = window.localStorage.getItem(key)
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

function getSnapshotFor(key: string): Stored {
  let snapshot = snapshots.get(key)
  if (!snapshot) {
    snapshot = load(key)
    snapshots.set(key, snapshot)
  }
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
    if (event.key === null) {
      snapshots.clear()
    } else if (snapshots.has(event.key)) {
      snapshots.set(event.key, load(event.key))
    } else {
      return
    }
    listeners.forEach((l) => l())
  }
  window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener("storage", onStorage)
  }
}

function setStored(key: string, next: Stored) {
  snapshots.set(key, next)
  try {
    window.localStorage.setItem(key, JSON.stringify(next))
  } catch {
    // storage full or unavailable: keep in-memory state
  }
  listeners.forEach((listener) => listener())
}

export function useRankings(subjectSlug: string) {
  const key = storageKey(subjectSlug)

  const getSnapshot = React.useCallback(() => getSnapshotFor(key), [key])
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
      const prev = getSnapshotFor(key)
      const result = applyDuel(
        getEntry(prev.entries, winnerSlug),
        getEntry(prev.entries, loserSlug)
      )
      setStored(key, {
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
    [key]
  )

  const reset = React.useCallback(() => {
    setStored(key, EMPTY)
  }, [key])

  return {
    ready,
    entries: state.entries,
    totalDuels: state.totalDuels,
    recentPairs: state.recentPairs,
    recordDuel,
    reset,
  }
}
