import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/**
 * Browser tab favicon — split design mirroring the Source / Preview homepage.
 * Left half: source pane (paper). Right half: preview pane (amber accent).
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
        }}
      >
        {/* Left — professional */}
        <div
          style={{
            width: '50%',
            height: '100%',
            background: '#f4f1ea',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#2a2723',
            fontSize: 22,
            fontWeight: 400,
            fontFamily: 'monospace',
            letterSpacing: '-0.04em',
          }}
        >
          r
        </div>

        {/* Right — IDE */}
        <div
          style={{
            width: '50%',
            height: '100%',
            background: '#b45309',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#faf8f3',
            fontSize: 22,
            fontWeight: 800,
            fontFamily: 'monospace',
            letterSpacing: '-0.05em',
          }}
        >
          c
        </div>
      </div>
    ),
    { ...size },
  )
}
