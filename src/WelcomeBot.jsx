import { useState, useEffect } from 'react'
import botAvatar from '../growea-ai.png.png'

const greetings = [
  { lang: 'cs', text: 'Ahoj! Vítejte na Growea 👋' },
  { lang: 'en', text: 'Hello! Welcome to Growea 👋' },
  { lang: 'de', text: 'Hallo! Willkommen bei Growea 👋' },
]

export default function WelcomeBot({ onOpenChat }) {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [showCta, setShowCta] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible) return
    if (index < greetings.length - 1) {
      const t = setTimeout(() => setIndex(index + 1), 2200)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => setShowCta(true), 1500)
      return () => clearTimeout(t)
    }
  }, [visible, index])

  if (!visible || dismissed) return null

  return (
    <div className="welcome-bot">
      <button
        className="welcome-bot-close"
        onClick={() => setDismissed(true)}
        aria-label="Zavřít"
      >
        ✕
      </button>

      <img src={botAvatar} className="welcome-bot-avatar" alt="Growea AI" />

      <div className="welcome-bot-bubble">
        <div className="welcome-bot-text" key={index}>
          {greetings[index].text}
        </div>

        {showCta && (
          <button
            className="welcome-bot-cta"
            onClick={() => {
              onOpenChat()
              setDismissed(true)
            }}
          >
            Pojďme si popovídat →
          </button>
        )}
      </div>
    </div>
  )
}
