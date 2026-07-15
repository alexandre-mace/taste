import Link from "next/link"

import { Cartel } from "@/components/cartel"
import { ItemFrame } from "@/components/item-frame"
import { cn } from "@/lib/utils"
import type { Item } from "@/lib/subjects"

export function ItemCard({
  subject,
  item,
  number,
  plateAspect = "aspect-4/5",
}: {
  subject: string
  item: Item
  number: number
  plateAspect?: string
}) {
  return (
    <Link
      href={`/${subject}/${item.slug}`}
      className="group flex flex-col gap-3 outline-none"
    >
      <ItemFrame
        subject={subject}
        slug={item.slug}
        alt={`${item.maker} ${item.name}`}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 270px"
        className={cn(
          plateAspect,
          "transition-colors group-hover:border-foreground/40 group-focus-visible:border-ring group-focus-visible:ring-3 group-focus-visible:ring-ring/50"
        )}
        imageClassName="transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <Cartel
        meta={`N° ${String(number).padStart(2, "0")} · ${item.year}`}
        title={item.name}
        titleAs="h3"
        brand={item.maker}
      />
    </Link>
  )
}
