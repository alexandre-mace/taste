import { cn } from "@/lib/utils"

/** Studio page header: mono eyebrow, bold grotesque title, muted subtitle. */
export function PageHeader({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string
  title: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={className}>
      <p className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
        {eyebrow}
      </p>
      <h1
        className={cn(
          "mt-3 font-heading text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
        )}
      >
        {title}
      </h1>
      {children}
    </div>
  )
}
