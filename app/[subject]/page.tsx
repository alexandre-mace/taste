import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ExplorerGrid } from "@/components/explorer-grid"
import { Button } from "@/components/ui/button"
import { getSubject, subjects, yearRange } from "@/lib/subjects"

export function generateStaticParams() {
  return subjects.map((s) => ({ subject: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>
}): Promise<Metadata> {
  const { subject: slug } = await params
  const subject = getSubject(slug)
  if (!subject) return {}
  return {
    title: subject.title,
    description: subject.intro,
  }
}

export default async function SubjectPage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  const { subject: slug } = await params
  const subject = getSubject(slug)
  if (!subject) notFound()

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 sm:pb-24">
      <section>
        <div className="flex items-baseline justify-between gap-4 font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          <p>
            Collection {subject.ordinal} — {subject.category}
          </p>
          <p className="tabular-nums">
            {subject.items.length} {subject.itemNoun}s · {yearRange(subject)}
          </p>
        </div>
        <h1 className="mt-3 font-heading text-[clamp(3rem,11vw,10rem)] leading-[0.9] font-semibold tracking-[-0.045em] uppercase">
          {subject.title}
        </h1>
        <div className="mt-6 flex flex-col gap-6 border-t pt-6 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-10 sm:pt-8">
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subject.intro}
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button
              nativeButton={false}
              render={<Link href={`/${subject.slug}/duel`} />}
            >
              Lancer le duel
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<Link href={`/${subject.slug}/classement`} />}
            >
              Mon classement
            </Button>
          </div>
        </div>
      </section>

      <ExplorerGrid
        subject={subject.slug}
        items={subject.items}
        searchPlaceholder={subject.searchPlaceholder}
        className="mt-12 sm:mt-16"
      />
    </div>
  )
}
