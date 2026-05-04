/**
 * Hand-drawn-feel SVG primitives for the analog × digital aesthetic.
 *
 * The "hand-drawn" effect comes from quadratic-bezier control points that
 * pull the strokes slightly off-grid — never perfectly straight lines, axis
 * baselines that wobble, varying stroke-opacity. No external library.
 */

type CommonProps = {
  color?:     string
  className?: string
  width?:     number | string
}

/* ─── Pencil-style arrow ────────────────────────────────────── */
type Direction = 'right' | 'down-right' | 'down' | 'down-left' | 'left' | 'up-right'

const ARROW_ROTATIONS: Record<Direction, number> = {
  right:        0,
  'down-right': 35,
  down:         90,
  'down-left':  135,
  left:         180,
  'up-right':   -25,
}

export function SketchArrow({
  direction = 'right',
  color     = '#574726',
  className = '',
  width     = 90,
}: CommonProps & { direction?: Direction }) {
  return (
    <svg
      viewBox="0 0 100 30"
      width={width}
      className={className}
      aria-hidden="true"
      style={{
        transform:       `rotate(${ARROW_ROTATIONS[direction]}deg)`,
        transformOrigin: 'center',
        overflow:        'visible',
      }}
    >
      {/* Shaft — slightly wobbly */}
      <path
        d="M 4 16 Q 28 12, 56 17 T 90 14"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.75"
      />
      {/* Arrowhead — two slightly imperfect strokes */}
      <path
        d="M 84 8 Q 90 11.5, 95 14.5"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <path
        d="M 84 22 Q 90 18.5, 95 14.8"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
    </svg>
  )
}

/* ─── Hand-sketched line chart (improvement curve) ──────────── */
export function SketchLineChart({
  color     = '#574726',
  className = '',
  width     = 90,
  label     = '+5%',
}: CommonProps & { label?: string }) {
  return (
    <svg
      viewBox="0 0 100 60"
      width={width}
      className={className}
      aria-hidden="true"
    >
      {/* Axis — wobbly lines, not perfect */}
      <path
        d="M 10 6 Q 9.6 28 10.2 50 L 92 50.4"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />

      {/* Baseline trend (dashed, lower) */}
      <path
        d="M 14 42 Q 30 38, 46 34 Q 62 30, 80 28"
        fill="none"
        stroke={color}
        strokeWidth="0.9"
        strokeOpacity="0.4"
        strokeDasharray="2.2 2"
        strokeLinecap="round"
      />

      {/* Improved trend (solid, higher) */}
      <path
        d="M 14 36 Q 30 28, 46 22 Q 62 14, 82 8"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />

      {/* Tiny annotation */}
      {label && (
        <text
          x="56"
          y="14"
          fontSize="7"
          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
          fill={color}
          fillOpacity="0.65"
        >
          {label}
        </text>
      )}
    </svg>
  )
}

/* ─── Hand-sketched scatter plot ─────────────────────────────── */
const SCATTER_DOTS: [number, number][] = [
  [18, 56], [24, 48], [28, 44], [33, 40], [38, 38],
  [42, 32], [46, 34], [50, 28], [55, 26], [58, 23],
  [62, 21], [66, 18], [70, 22], [74, 16], [78, 14],
  [82, 12], [86, 10],
  // a few outliers for character
  [22, 50], [44, 26], [60, 30], [76, 22],
]

export function SketchScatter({
  color     = '#574726',
  className = '',
  width     = 110,
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 100 70"
      width={width}
      className={className}
      aria-hidden="true"
    >
      {/* Axis */}
      <path
        d="M 8 6 Q 7.6 32 8.2 60 L 94 60.3"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />

      {/* Dots */}
      {SCATTER_DOTS.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={1.4}
          fill={color}
          fillOpacity={0.55}
        />
      ))}

      {/* Hand-drawn trend line through scatter (dashed) */}
      <path
        d="M 14 50 Q 36 36, 60 22 Q 76 14, 90 8"
        fill="none"
        stroke={color}
        strokeWidth="0.9"
        strokeOpacity="0.45"
        strokeDasharray="3 2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ─── Hand-sketched bell curve (normal distribution) ──────────── */
export function SketchBellCurve({
  color     = '#574726',
  className = '',
  width     = 100,
}: CommonProps) {
  return (
    <svg
      viewBox="0 0 100 50"
      width={width}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M 6 42 Q 8 41 12 40 Q 22 38, 32 30 Q 42 16, 50 8 Q 58 16, 68 30 Q 78 38, 88 40 Q 92 41 94 42"
        fill="none"
        stroke={color}
        strokeWidth="1.4"
        strokeOpacity="0.7"
        strokeLinecap="round"
      />
      <path
        d="M 4 43 L 96 43.3"
        fill="none"
        stroke={color}
        strokeWidth="0.9"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
      {/* Mean tick */}
      <path
        d="M 50 43 L 50 47"
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
      />
    </svg>
  )
}
