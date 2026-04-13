import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }
    const onDown = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1.8)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(0.7)'
    }
    const onUp = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px'
        ringRef.current.style.top  = ringPos.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor" style={{ position:'fixed',top:0,left:0,pointerEvents:'none',zIndex:9999 }}>
        <div className="cursor-dot" style={{ transition:'transform 0.15s' }} />
      </div>
      <div ref={ringRef} className="cursor" style={{ position:'fixed',top:0,left:0,pointerEvents:'none',zIndex:9998 }}>
        <div className="cursor-ring" />
      </div>
    </>
  )
}
