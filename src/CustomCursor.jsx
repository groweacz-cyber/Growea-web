import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [hidden, setHidden] = useState(true)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Na dotykových zařízeních kurzor vůbec nezapínáme
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    document.body.classList.add('custom-cursor-active')

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setHidden(false)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }
    }

    // Kroužek plynule "dobíhá" za tečkou
    const animate = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`
      }
      requestAnimationFrame(animate)
    }
    const raf = requestAnimationFrame(animate)

    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    // Hover nad klikatelnými prvky
    const onOver = (e) => {
      if (e.target.closest('button, a, input, textarea, .card, .ref-card, .domain-tags span')) {
        setHovering(true)
      }
    }
    const onOut = (e) => {
      if (e.target.closest('button, a, input, textarea, .card, .ref-card, .domain-tags span')) {
        setHovering(false)
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className={`cursor-dot ${hidden ? 'cursor-hidden' : ''}`}
      ></div>
      <div
        ref={ringRef}
        className={`cursor-ring ${hidden ? 'cursor-hidden' : ''} ${
          hovering ? 'cursor-ring-hover' : ''
        }`}
      ></div>
    </>
  )
}
