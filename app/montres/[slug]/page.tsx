import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { WatchFrame } from "@/components/watch-frame"
import { Separator } from "@/components/ui/separator"
import { getWatch, watches } from "@/lib/watches"

export function generateStaticParams() {
  return watches.map((w) => ({ slug: w.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const watch = getWatch(slug)
  if (!watch) return {}
  return {
    title: `${watch.brand} ${watch.name}`,
    description: watch.tagline,
  }
}

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const watch = getWatch(slug)
  if (!watch) notFound()

  const index = watches.findIndex((w) => w.slug === watch.slug)
  const prev = watches[(index - 1 + watches.length) % watches.length]
  const next = watches[(index + 1) % watches.length]
  const number = index + 1

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon className="size-4" aria-hidden />
        La collection
      </Link>

      <article className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <figure className="flex flex-col gap-3">
          <WatchFrame
            slug={watch.slug}
            alt={`${watch.brand} ${watch.name}`}
            fit="contain"
            preload
            sizes="(max-width: 1024px) 100vw, 560px"
            className="aspect-4/5"
            imageClassName="p-6"
          />
          <figcaption className="px-0.5 font-mono text-[10px] tracking-wider text-muted-foreground tabular-nums">
            N° {String(number).padStart(2, "0")} / {watches.length} · Collection
            Montres
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase">
            {watch.brand}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] uppercase sm:text-5xl">
            {watch.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
            <span>{watch.year}</span>
            {watch.ref ? <span>Réf. {watch.ref}</span> : null}
          </div>
          <p className="mt-6 text-xl font-medium">{watch.tagline}</p>
          <div className="mt-3 h-px w-12 bg-foreground" aria-hidden />
          <p className="mt-6 text-[17px] leading-relaxed text-foreground/90">
            {watch.description}
          </p>

          <Separator className="mt-10" />
          <nav
            className="flex items-center justify-between gap-4 pt-5 text-sm"
            aria-label="Pièces voisines"
          >
            <Link
              href={`/montres/${prev.slug}`}
              className="group inline-flex min-w-0 items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeftIcon className="size-4 shrink-0" aria-hidden />
              <span className="truncate">
                {prev.brand} {prev.name}
              </span>
            </Link>
            <Link
              href={`/montres/${next.slug}`}
              className="group inline-flex min-w-0 items-center gap-1.5 text-right text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="truncate">
                {next.brand} {next.name}
              </span>
              <ArrowRightIcon className="size-4 shrink-0" aria-hidden />
            </Link>
          </nav>
        </div>
      </article>
    </div>
  )
}
