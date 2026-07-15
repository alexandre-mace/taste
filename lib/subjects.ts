import { montres } from "@/lib/subjects/montres"
import { designInterieur } from "@/lib/subjects/design-interieur"

/** Une pièce exposée, quel que soit le sujet de la collection. */
export type Item = {
  slug: string
  /** Nom de la pièce : « Submariner », « Bauhaus »… */
  name: string
  /** Ligne en capitales du cartel : marque, origine, école… */
  maker: string
  /** Année d'apparition — ordonne le parcours chronologique. */
  year: number
  ref?: string
  tagline: string
  description: string
  /** Crédit photo affiché sur la fiche (les photos Commons restent créditées globalement). */
  photoCredit?: string
}

export type Subject = {
  slug: string
  /** Numéro de collection en chiffres romains : « I », « II »… */
  ordinal: string
  title: string
  /** Discipline affichée dans l'eyebrow : « Horlogerie »… */
  category: string
  /** Paragraphe d'introduction de l'explorateur. */
  intro: string
  /** « pièce », « style »… + genre pour les accords. */
  itemNoun: string
  itemGender: "m" | "f"
  /** « Laquelle préférez-vous ? » / « Lequel préférez-vous ? » */
  duelQuestion: string
  searchPlaceholder: string
  items: Item[]
}

/** Parcours chronologique : chaque collection se visite de la première
 * création à la plus récente, comme les salles d'un musée. */
function chronological(items: Item[]): Item[] {
  return [...items].sort(
    (a, b) => a.year - b.year || a.maker.localeCompare(b.maker)
  )
}

export const subjects: Subject[] = [montres, designInterieur].map(
  (subject) => ({ ...subject, items: chronological(subject.items) })
)

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug)
}

export function getItem(subject: Subject, slug: string): Item | undefined {
  return subject.items.find((i) => i.slug === slug)
}

export function itemImage(subjectSlug: string, itemSlug: string): string {
  return `/images/${subjectSlug}/${itemSlug}.jpg`
}

export function yearRange(subject: Subject): string {
  const years = subject.items.map((i) => i.year)
  return `${Math.min(...years)}–${Math.max(...years)}`
}

/** « 3 pièces encore jamais opposées » / « 2 styles encore jamais opposés » */
export function unseenLabel(subject: Subject, count: number): string {
  const plural = count > 1 ? "s" : ""
  const agreement = subject.itemGender === "f" ? "e" : ""
  return `${count} ${subject.itemNoun}${plural} encore jamais opposé${agreement}${plural}`
}
