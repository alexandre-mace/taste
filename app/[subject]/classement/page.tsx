import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ClassementView } from "@/components/classement-view"
import { getSubject, subjects } from "@/lib/subjects"

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
  return { title: `Classement — ${subject.title}` }
}

export default async function ClassementPage({
  params,
}: {
  params: Promise<{ subject: string }>
}) {
  const { subject: slug } = await params
  if (!getSubject(slug)) notFound()
  return <ClassementView subjectSlug={slug} />
}
