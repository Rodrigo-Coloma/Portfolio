import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/**
 * Browser tab favicon — split design: dark plane and mint accent, matching the dashboard.
 * Left half: dark plane. Right half: mint accent.
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
            background: '#0a0f0e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3ee6b4',
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
            background: '#3ee6b4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#062a20',
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
