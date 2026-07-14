import { cn } from "@/lib/utils"

/**
 * Museum label under a plate: mono meta line, piece name,
 * brand in spaced capitals, optional footer line.
 */
export function Cartel({
  meta,
  title,
  titleAs: TitleTag = "p",
  brand,
  footer,
  size = "base",
  className,
}: {
  meta?: string
  title: string
  titleAs?: "h2" | "h3" | "p"
  brand: string
  footer?: string
  size?: "base" | "lg"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-1 px-0.5", className)}>
      {meta ? (
        <p className="font-mono text-[10px] tracking-wider text-muted-foreground tabular-nums">
          {meta}
        </p>
      ) : null}
      <TitleTag
        className={cn(
          "font-heading leading-snug font-medium",
          size === "lg" ? "text-lg" : "text-base"
        )}
      >
        {title}
      </TitleTag>
      <p className="text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {brand}
      </p>
      {footer ? (
        <p className="mt-1 text-sm text-muted-foreground">{footer}</p>
      ) : null}
    </div>
  )
}
