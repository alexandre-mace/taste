import { describe, expect, it } from "vitest"

import {
  applyDuel,
  expectedScore,
  formatRecord,
  getEntry,
  initialEntry,
  INITIAL_RATING,
  pairKey,
  pickPair,
} from "@/lib/elo"

describe("expectedScore", () => {
  it("vaut 0,5 entre deux cotes égales", () => {
    expect(expectedScore(1000, 1000)).toBeCloseTo(0.5)
  })

  it("favorise la cote la plus haute, symétriquement", () => {
    const strong = expectedScore(1200, 1000)
    const weak = expectedScore(1000, 1200)
    expect(strong).toBeGreaterThan(0.5)
    expect(strong + weak).toBeCloseTo(1)
  })
})

describe("applyDuel", () => {
  it("transfère des points du perdant vers le gagnant, symétriquement", () => {
    const { winner, loser } = applyDuel(initialEntry(), initialEntry())
    expect(winner.rating).toBe(INITIAL_RATING + 16)
    expect(loser.rating).toBe(INITIAL_RATING - 16)
    expect(winner.rating + loser.rating).toBe(INITIAL_RATING * 2)
  })

  it("compte les combats et les victoires", () => {
    const { winner, loser } = applyDuel(initialEntry(), initialEntry())
    expect(winner.battles).toBe(1)
    expect(winner.wins).toBe(1)
    expect(loser.battles).toBe(1)
    expect(loser.wins).toBe(0)
  })

  it("récompense peu une victoire attendue, beaucoup une surprise", () => {
    const favori = { rating: 1400, battles: 10, wins: 9 }
    const outsider = { rating: 1000, battles: 10, wins: 1 }
    const attendu = applyDuel(favori, outsider)
    const surprise = applyDuel(outsider, favori)
    const gainAttendu = attendu.winner.rating - favori.rating
    const gainSurprise = surprise.winner.rating - outsider.rating
    expect(gainSurprise).toBeGreaterThan(gainAttendu)
    expect(gainAttendu).toBeGreaterThanOrEqual(1)
  })

  it("ne mute pas les entrées d'origine", () => {
    const a = initialEntry()
    const b = initialEntry()
    applyDuel(a, b)
    expect(a).toEqual(initialEntry())
    expect(b).toEqual(initialEntry())
  })
})

describe("pairKey", () => {
  it("est indépendante de l'ordre", () => {
    expect(pairKey("a", "b")).toBe(pairKey("b", "a"))
  })
})

describe("getEntry", () => {
  it("retourne une entrée vierge pour un slug inconnu", () => {
    expect(getEntry({}, "inconnu")).toEqual(initialEntry())
  })

  it("retourne l'entrée existante sinon", () => {
    const entry = { rating: 1234, battles: 5, wins: 3 }
    expect(getEntry({ x: entry }, "x")).toBe(entry)
  })
})

describe("formatRecord", () => {
  it("affiche victoires et défaites", () => {
    expect(formatRecord({ rating: 1000, battles: 5, wins: 3 })).toBe("3V 2D")
  })
})

describe("pickPair", () => {
  const slugs = Array.from({ length: 12 }, (_, i) => `item-${i}`)

  it("retourne null s'il y a moins de deux items", () => {
    expect(pickPair([], {}, [], 0)).toBeNull()
    expect(pickPair(["seul"], {}, [], 0)).toBeNull()
  })

  it("retourne deux slugs valides et distincts", () => {
    for (let duel = 0; duel < 50; duel++) {
      const pair = pickPair(slugs, {}, [], duel)!
      expect(pair).toHaveLength(2)
      expect(pair[0]).not.toBe(pair[1])
      expect(slugs).toContain(pair[0])
      expect(slugs).toContain(pair[1])
    }
  })

  it("est déterministe pour un état donné", () => {
    const entries = { "item-3": { rating: 1100, battles: 4, wins: 3 } }
    const recent = [pairKey("item-1", "item-2")]
    const a = pickPair(slugs, entries, recent, 7)
    const b = pickPair(slugs, entries, recent, 7)
    expect(a).toEqual(b)
  })

  it("change de paire quand l'état change", () => {
    const seen = new Set<string>()
    for (let duel = 0; duel < 20; duel++) {
      const pair = pickPair(slugs, {}, [`fake|${duel}`], duel)!
      seen.add(pairKey(pair[0], pair[1]))
    }
    // Au moins quelques paires différentes sur 20 tirages.
    expect(seen.size).toBeGreaterThan(5)
  })

  it("évite les paires récentes quand c'est possible", () => {
    const trio = ["a", "b", "c"]
    for (let duel = 0; duel < 30; duel++) {
      const recent = [pairKey("a", "b")]
      const pair = pickPair(trio, {}, recent, duel)!
      expect(pairKey(pair[0], pair[1])).not.toBe(pairKey("a", "b"))
    }
  })

  it("retombe sur une paire récente plutôt que d'échouer", () => {
    // Avec 2 items, l'unique paire possible est aussi la plus récente.
    const duo = ["a", "b"]
    const recent = [pairKey("a", "b")]
    const pair = pickPair(duo, {}, recent, 0)!
    expect(pairKey(pair[0], pair[1])).toBe(pairKey("a", "b"))
  })

  it("privilégie les items les moins vus en duel", () => {
    // Le premier item est tiré parmi les 12 moins vus. Sur une grande
    // collection (30 items dont 28 déjà très joués), les items les plus
    // joués ne doivent jamais sortir en premier, et les deux items
    // vierges doivent apparaître régulièrement.
    const many = Array.from({ length: 30 }, (_, i) => `item-${i}`)
    const entries = Object.fromEntries(
      many
        .slice(2)
        .map((s, i) => [
          s,
          { rating: INITIAL_RATING, battles: 5 + (i % 3), wins: 2 },
        ])
    )
    const overplayed = new Set(
      many.slice(2).filter((s) => (entries[s]?.battles ?? 0) > 5)
    )
    let freshHits = 0
    for (let duel = 0; duel < 40; duel++) {
      const pair = pickPair(many, entries, [], duel)!
      if (pair.includes("item-0") || pair.includes("item-1")) freshHits++
      // Le premier item vient du pool des 12 moins joués : une paire ne
      // peut jamais réunir deux items sur-joués (6-7 combats).
      expect(overplayed.has(pair[0]) && overplayed.has(pair[1])).toBe(false)
    }
    expect(freshHits).toBeGreaterThan(0)
  })
})
