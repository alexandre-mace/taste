"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { itemImages, type Item } from "@/lib/subjects"

/**
 * Plate + thumbnails: the framed main photo, with a strip of small
 * plates to switch views when the piece has several photos.
 */
export function ItemGallery({
  subject,
  item,
  alt,
  fit = "contain",
  plateAspect = "aspect-4/5",
}: {
  subject: string
  item: Item
  alt: string
  fit?: "contain" | "cover"
  plateAspect?: string
}) {
  const photos = itemImages(subject, item)
  const [current, setCurrent] = React.useState(0)

  return (
    <div className="flex flex-col gap-3">
      <div
        className={cn(
          plateAspect,
          "relative overflow-hidden border border-border bg-card"
        )}
      >
        <Image
          key={photos[current]}
          src={photos[current]}
          alt={alt}
          fill
          preload
          sizes="(max-width: 1024px) 100vw, 560px"
          className={cn(
            fit === "contain" ? "object-contain p-6" : "object-cover"
          )}
        />
      </div>
      {photos.length > 1 ? (
        <div className="flex gap-2">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Photo ${i + 1}`}
              aria-current={i === current}
              className={cn(
                "relative aspect-square w-16 overflow-hidden border transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:w-20",
                i === current
                  ? "border-foreground"
                  : "border-border opacity-60 hover:opacity-100"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
