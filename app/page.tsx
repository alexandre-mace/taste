import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ItemFrame } from "@/components/item-frame"
import { subjects, yearRange, type Subject } from "@/lib/subjects"

// Pièces mises en vitrine sur la page d'accueil, par collection.
const COVERS: Record<string, string[]> = {
  montres: ["patek-philippe-nautilus", "cartier-tank", "casio-g-shock"],
  "design-interieur": ["bauhaus", "art-deco", "memphis"],
  chaises: ["thonet-14", "eames-lounge", "panton"],
  voitures: ["citroen-ds", "porsche-911", "coccinelle"],
}

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24">
      <section className="max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          Un musée personnel du goût
        </p>
        <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-7xl">
          Explorez les icônes.
          <br />
          Révélez votre goût.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Chaque collection expose les pièces qui ont écrit l&apos;histoire
          d&apos;une discipline, en parcours chronologique. Explorez-les, puis
          départagez-les en duel : votre classement se dessine, duel après duel.
        </p>
      </section>

      <section className="mt-14 sm:mt-20">
        {subjects.map((subject) => (
          <CollectionRow key={subject.slug} subject={subject} />
        ))}
      </section>
    </div>
  )
}

function CollectionRow({ subject }: { subject: Subject }) {
  const covers =
    COVERS[subject.slug] ?? subject.items.slice(0, 3).map((i) => i.slug)

  return (
    <Link
      href={`/${subject.slug}`}
      className="group grid items-center gap-6 border-t py-8 outline-none sm:grid-cols-[1fr_auto] sm:gap-10 sm:py-10"
    >
      <div>
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          {subject.category}
        </p>
        <h2 className="mt-2 font-heading text-4xl font-semibold tracking-[-0.03em] uppercase underline-offset-8 group-hover:underline sm:text-6xl">
          {subject.title}
        </h2>
        <p className="mt-3 flex items-center gap-2 font-mono text-xs text-muted-foreground tabular-nums">
          {subject.items.length} {subject.itemNoun}s · {yearRange(subject)}
          <ArrowRightIcon
            className="size-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </p>
      </div>
      <div className="flex gap-3">
        {covers.map((slug) => (
          <ItemFrame
            key={slug}
            subject={subject.slug}
            slug={slug}
            alt=""
            sizes="120px"
            className="aspect-4/5 w-20 transition-colors group-hover:border-foreground/40 sm:w-28"
          />
        ))}
      </div>
    </Link>
  )
}
