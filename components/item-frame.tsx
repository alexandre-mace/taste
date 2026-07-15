import Image from "next/image"

import { cn } from "@/lib/utils"
import { itemImage } from "@/lib/subjects"

/**
 * Framed plate — the site's visual signature: hairline border,
 * card background, image filling a fixed aspect box.
 */
export function ItemFrame({
  subject,
  slug,
  alt,
  sizes,
  fit = "cover",
  preload,
  className,
  imageClassName,
}: {
  subject: string
  slug: string
  alt: string
  sizes: string
  fit?: "cover" | "contain"
  preload?: boolean
  className?: string
  imageClassName?: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border bg-card",
        className
      )}
    >
      <Image
        src={itemImage(subject, slug)}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className={cn(
          fit === "cover" ? "object-cover" : "object-contain",
          imageClassName
        )}
      />
    </div>
  )
}
