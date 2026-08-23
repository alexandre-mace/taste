import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { ItemFrame } from "@/components/item-frame"
import { subjectGroups, yearRange, type Subject } from "@/lib/subjects"

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
        <h1 className="font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-7xl">
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
        {subjectGroups().map((group) => (
          <CollectionRow key={group[0].slug} group={group} />
        ))}
      </section>
    </div>
  )
}

function CollectionRow({ group }: { group: Subject[] }) {
  const main = group[0]
  const covers = COVERS[main.slug] ?? main.items.slice(0, 3).map((i) => i.slug)

  return (
    <div className="group grid items-center gap-6 border-t py-8 sm:grid-cols-[1fr_auto] sm:gap-10 sm:py-10">
      <div>
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
          {main.category}
        </p>
        <Link href={`/${main.slug}`} className="outline-none">
          <h2 className="mt-2 font-heading text-4xl font-semibold tracking-[-0.03em] uppercase underline-offset-8 group-hover:underline sm:text-6xl">
            {main.title}
          </h2>
        </Link>
        <div className="mt-3 flex flex-col gap-1">
          {group.map((subject) => (
            <Link
              key={subject.slug}
              href={`/${subject.slug}`}
              className="flex w-fit items-center gap-2 font-mono text-xs text-muted-foreground tabular-nums transition-colors hover:text-foreground"
            >
              {subject.variant ? (
                <span className="tracking-[0.2em] uppercase">
                  {subject.variant} —
                </span>
              ) : null}
              {subject.items.length} {subject.itemNoun}s, {yearRange(subject)}
              <ArrowRightIcon
                className="size-3.5 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
      <Link href={`/${main.slug}`} className="flex gap-3 outline-none">
        {covers.map((slug) => (
          <ItemFrame
            key={slug}
            subject={main.slug}
            slug={slug}
            alt=""
            sizes="120px"
            className="aspect-4/5 w-20 transition-colors group-hover:border-foreground/40 sm:w-28"
          />
        ))}
      </Link>
    </div>
  )
}
