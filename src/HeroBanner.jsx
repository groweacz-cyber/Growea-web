import { useState, useEffect } from 'react'
import banner1 from '../banner-1.png'
import banner2 from '../banner-2.png'
import banner3 from '../banner-3.png'

const banners = [banner1, banner2, banner3]

export default function HeroBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % banners.length)
    }, 4500)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="hero-banner">
      {banners.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="Growea AI Visibility"
          className={`hero-banner-img ${i === index ? 'active' : ''}`}
        />
      ))}

      <div className="hero-banner-dots">
        {banners.map((_, i) => (
          <button
            key={i}
            className={`hero-banner-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Zobrazit banner ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
