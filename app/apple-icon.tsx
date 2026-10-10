import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

/**
 * Apple touch icon (iOS home screen, etc.) — same split design at higher res.
 */
export default function AppleIcon() {
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
            fontSize: 120,
            fontWeight: 300,
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
            fontSize: 120,
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
