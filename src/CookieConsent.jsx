import { useState, useEffect } from 'react'

export default function CookieConsent({ onConsentChange }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('growea-cookie-consent')
    if (saved === 'accepted') {
      onConsentChange(true)
    } else if (saved === 'rejected') {
      onConsentChange(false)
    } else {
      setVisible(true)
    }
  }, [onConsentChange])

  const accept = () => {
    localStorage.setItem('growea-cookie-consent', 'accepted')
    onConsentChange(true)
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('growea-cookie-consent', 'rejected')
    onConsentChange(false)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-bar">
      <div className="cookie-content">
        <p className="cookie-text">
          Tento web používá cookies pro anonymní měření návštěvnosti.
          Pomáhá nám to web vylepšovat. Můžete je přijmout, nebo odmítnout —
          web bude fungovat tak jako tak.
        </p>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-reject" onClick={reject}>
            Odmítnout
          </button>
          <button className="cookie-btn cookie-btn-accept" onClick={accept}>
            Přijmout
          </button>
        </div>
      </div>
    </div>
  )
}
