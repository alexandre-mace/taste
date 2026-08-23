export type EloEntry = {
  rating: number
  battles: number
  wins: number
}

export const INITIAL_RATING = 1000
const K_FACTOR = 32

export function initialEntry(): EloEntry {
  return { rating: INITIAL_RATING, battles: 0, wins: 0 }
}

export function expectedScore(rating: number, opponent: number): number {
  return 1 / (1 + 10 ** ((opponent - rating) / 400))
}

export function applyDuel(
  winner: EloEntry,
  loser: EloEntry
): { winner: EloEntry; loser: EloEntry } {
  const expected = expectedScore(winner.rating, loser.rating)
  const delta = Math.round(K_FACTOR * (1 - expected))
  return {
    winner: {
      rating: winner.rating + delta,
      battles: winner.battles + 1,
      wins: winner.wins + 1,
    },
    loser: {
      rating: loser.rating - delta,
      battles: loser.battles + 1,
      wins: loser.wins,
    },
  }
}

export function pairKey(a: string, b: string): string {
  return [a, b].sort().join("|")
}

/** Single source of truth for "missing slug = fresh entry". */
export function getEntry(
  entries: Record<string, EloEntry>,
  slug: string
): EloEntry {
  return entries[slug] ?? initialEntry()
}

/** "3V 1D", format d'affichage commun des victoires/défaites. */
export function formatRecord(entry: EloEntry): string {
  return `${entry.wins}V ${entry.battles - entry.wins}D`
}

/** Deterministic PRNG so pair picking stays a pure function of the state. */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(value: string): number {
  let h = 2166136261
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/**
 * Picks the next duel pair: favors the least-battled watches so coverage
 * stays even, then prefers opponents with close ratings, avoiding pairs
 * seen recently. Deterministic for a given state, so it can be derived
 * during render.
 */
export function pickPair(
  slugs: string[],
  entries: Record<string, EloEntry>,
  recentPairs: string[],
  totalDuels: number
): [string, string] | null {
  if (slugs.length < 2) return null

  const random = mulberry32(
    hashString(`${totalDuels}:${recentPairs[0] ?? "start"}`)
  )
  const get = (slug: string) => getEntry(entries, slug)

  const jitter = new Map(slugs.map((s) => [s, random()]))
  const byBattles = [...slugs].sort(
    (a, b) => get(a).battles - get(b).battles || jitter.get(a)! - jitter.get(b)!
  )
  const pool = byBattles.slice(0, Math.min(12, slugs.length))
  const first = pool[Math.floor(random() * pool.length)]

  const candidates = slugs
    .filter((s) => s !== first)
    .filter((s) => !recentPairs.includes(pairKey(first, s)))
  const eligible =
    candidates.length > 0 ? candidates : slugs.filter((s) => s !== first)

  const firstRating = get(first).rating
  const noise = new Map(eligible.map((s) => [s, random() * 120]))
  const sorted = [...eligible].sort((a, b) => {
    const da = Math.abs(get(a).rating - firstRating) + noise.get(a)!
    const db = Math.abs(get(b).rating - firstRating) + noise.get(b)!
    return da - db
  })
  const second = sorted[Math.floor(random() * Math.min(8, sorted.length))]

  return random() < 0.5 ? [first, second] : [second, first]
}
