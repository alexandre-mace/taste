import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { ItemGallery } from "@/components/item-gallery"
import { Separator } from "@/components/ui/separator"
import { getItem, getSubject, subjects } from "@/lib/subjects"

export function generateStaticParams() {
  return subjects.flatMap((s) =>
    s.items.map((i) => ({ subject: s.slug, slug: i.slug }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; slug: string }>
}): Promise<Metadata> {
  const { subject: subjectSlug, slug } = await params
  const subject = getSubject(subjectSlug)
  const item = subject ? getItem(subject, slug) : undefined
  if (!subject || !item) return {}
  return {
    title: `${item.maker} ${item.name}`,
    description: item.tagline,
  }
}

export default async function ItemPage({
  params,
}: {
  params: Promise<{ subject: string; slug: string }>
}) {
  const { subject: subjectSlug, slug } = await params
  const subject = getSubject(subjectSlug)
  if (!subject) notFound()
  const item = getItem(subject, slug)
  if (!item) notFound()

  const items = subject.items
  const index = items.findIndex((i) => i.slug === item.slug)
  const prev = items[(index - 1 + items.length) % items.length]
  const next = items[(index + 1) % items.length]
  const number = index + 1

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href={`/${subject.slug}`}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" aria-hidden />
        La collection
      </Link>

      <article className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="flex flex-col gap-3">
          <ItemGallery
            subject={subject.slug}
            item={item}
            alt={`${item.maker} ${item.name}`}
            fit={subject.detailFit}
            plateAspect={subject.plateAspect}
          />
          <figcaption className="flex flex-wrap justify-between gap-x-4 gap-y-1 px-0.5 font-mono text-[10px] tracking-wider text-muted-foreground tabular-nums">
            <span>
              N° {String(number).padStart(2, "0")} / {items.length}, Collection{" "}
              {subject.title}
            </span>
            {item.photoCredit ? <span>Photo : {item.photoCredit}</span> : null}
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            {item.maker}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] uppercase sm:text-5xl">
            {item.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            <span>{item.year}</span>
            {item.ref ? <span>Réf. {item.ref}</span> : null}
          </div>
          <p className="mt-6 text-xl font-medium">{item.tagline}</p>
          <div className="mt-3 h-px w-12 bg-foreground" aria-hidden />
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/90">
            {item.description}
          </p>

          <Separator className="mt-10" />
          <nav
            className="flex items-center justify-between gap-4 pt-5 text-sm"
            aria-label="Pièces voisines"
          >
            <Link
              href={`/${subject.slug}/${prev.slug}`}
              className="group inline-flex min-w-0 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeftIcon className="size-4 shrink-0" aria-hidden />
              <span className="truncate">{prev.name}</span>
            </Link>
            <Link
              href={`/${subject.slug}/${next.slug}`}
              className="group inline-flex min-w-0 items-center gap-1.5 text-right text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="truncate">{next.name}</span>
              <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
            </Link>
          </nav>
        </div>
      </article>
    </div>
  )
}
