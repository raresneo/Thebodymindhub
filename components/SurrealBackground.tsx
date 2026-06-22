const blobs = [
  { w: 750, h: 700, top: -250, left: -300, dur: 26, delay: 0,  alpha: 0.09 },
  { w: 550, h: 600, top: 250,  left: null, right: -250, dur: 32, delay: 10, alpha: 0.07 },
  { w: 480, h: 440, top: 750,  left: 80,  dur: 22, delay: 16, alpha: 0.08 },
  { w: 380, h: 360, top: 480,  left: 480, dur: 28, delay: 6,  alpha: 0.05 },
]

export function SurrealBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {blobs.map((b, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: b.w,
            height: b.h,
            top: b.top,
            left: b.left ?? undefined,
            right: b.right ?? undefined,
            background: `radial-gradient(circle, rgba(200,168,75,${b.alpha}) 0%, rgba(200,168,75,0.015) 45%, transparent 70%)`,
            animation: `blob-morph ${b.dur}s ease-in-out infinite, glow-pulse ${Math.round(b.dur * 0.55)}s ease-in-out infinite`,
            animationDelay: `${b.delay}s, ${b.delay + 3}s`,
            filter: 'blur(72px)',
            willChange: 'border-radius, opacity',
          }}
        />
      ))}
    </div>
  )
}
