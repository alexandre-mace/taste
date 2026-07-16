import { montres } from "@/lib/subjects/montres"
import { montresFemme } from "@/lib/subjects/montres-femme"
import { designInterieur } from "@/lib/subjects/design-interieur"
import { chaises } from "@/lib/subjects/chaises"
import { voitures } from "@/lib/subjects/voitures"

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
  /**
   * Nombre de photos disponibles (défaut 1). Les fichiers suivent la
   * convention <slug>.jpg, <slug>-2.jpg, <slug>-3.jpg…
   */
  photoCount?: number
}

export type Subject = {
  slug: string
  title: string
  /**
   * Variante d'une même collection (« Homme », « Femme »…) : les sujets
   * qui partagent un même `title` sont présentés comme une seule aile
   * du musée, avec un commutateur entre leurs variantes.
   */
  variant?: string
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
  /** Cadrage de la photo sur la fiche : objet détouré → contain, scène → cover. */
  detailFit: "contain" | "cover"
  /** Classe d'aspect des cadres (grille, duel, fiche) : "aspect-4/5", "aspect-4/3"… */
  plateAspect: string
  items: Item[]
}

/** Parcours chronologique : chaque collection se visite de la première
 * création à la plus récente, comme les salles d'un musée. */
function chronological(items: Item[]): Item[] {
  return [...items].sort(
    (a, b) => a.year - b.year || a.maker.localeCompare(b.maker)
  )
}

export const subjects: Subject[] = [
  montres,
  montresFemme,
  designInterieur,
  chaises,
  voitures,
].map((subject) => ({ ...subject, items: chronological(subject.items) }))

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug)
}

/** « Montres · Femme » dans les menus, « Montres » pour les sujets sans variante. */
export function subjectLabel(subject: Subject): string {
  return subject.variant
    ? `${subject.title} · ${subject.variant}`
    : subject.title
}

/** Les autres variantes de la même collection (même `title`). */
export function subjectVariants(subject: Subject): Subject[] {
  return subjects.filter((s) => s.title === subject.title)
}

/** Collections regroupées par titre, pour l'accueil. */
export function subjectGroups(): Subject[][] {
  const groups = new Map<string, Subject[]>()
  for (const subject of subjects) {
    const group = groups.get(subject.title) ?? []
    group.push(subject)
    groups.set(subject.title, group)
  }
  return [...groups.values()]
}

export function getItem(subject: Subject, slug: string): Item | undefined {
  return subject.items.find((i) => i.slug === slug)
}

export function itemImage(subjectSlug: string, itemSlug: string): string {
  return `/images/${subjectSlug}/${itemSlug}.jpg`
}

/** Toutes les photos d'une pièce : <slug>.jpg, <slug>-2.jpg, <slug>-3.jpg… */
export function itemImages(subjectSlug: string, item: Item): string[] {
  const count = item.photoCount ?? 1
  return Array.from({ length: count }, (_, i) =>
    i === 0
      ? itemImage(subjectSlug, item.slug)
      : `/images/${subjectSlug}/${item.slug}-${i + 1}.jpg`
  )
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
