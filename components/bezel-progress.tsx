"use client"

/**
 * Circular progress styled like a dive-watch bezel: 60 tick marks,
 * the elapsed portion filled solid, a triangle marker at zero.
 */
export function BezelProgress({
  value,
  max,
  size = 72,
  label,
}: {
  value: number
  max: number
  size?: number
  label?: string
}) {
  const ticks = 60
  const filled = Math.min(ticks, Math.round((value / max) * ticks))
  const center = size / 2
  const outer = size / 2 - 2
  const inner = outer - 7

  return (
    <div
      className="relative inline-flex items-center justify-center"
      role="img"
      aria-label={`${value} duels sur ${max}`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={outer - 3.5}
          fill="none"
          stroke="var(--border)"
          strokeWidth={1}
        />
        {Array.from({ length: ticks }, (_, i) => {
          const angle = (i / ticks) * 2 * Math.PI - Math.PI / 2
          const isFilled = i < filled
          const isQuarter = i % 15 === 0
          const r1 = isQuarter ? inner - 2 : inner
          // Fixed precision: float trig differs between server and client,
          // which would cause hydration mismatches.
          const x1 = (center + r1 * Math.cos(angle)).toFixed(2)
          const y1 = (center + r1 * Math.sin(angle)).toFixed(2)
          const x2 = (center + outer * Math.cos(angle)).toFixed(2)
          const y2 = (center + outer * Math.sin(angle)).toFixed(2)
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isFilled ? "var(--foreground)" : "var(--border)"}
              strokeWidth={isQuarter ? 2 : 1}
              strokeLinecap="round"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-sm font-medium tabular-nums">
          {value}
        </span>
        {label ? (
          <span className="text-[9px] tracking-widest text-muted-foreground uppercase">
            {label}
          </span>
        ) : null}
      </div>
    </div>
  )
}
