import { useState, useEffect, useRef } from 'react'
import botAvatar from '../growea-ai.png.png'

const greetings = [
  { lang: 'cs', text: 'Ahoj! Vítejte na Growea 👋' },
  { lang: 'en', text: 'Hello! Welcome to Growea 👋' },
  { lang: 'de', text: 'Hallo! Willkommen bei Growea 👋' },
]

// Co robot řekne nahlas
const voiceGreeting = 'Dobrý den, vítejte na Growea. Co pro vás můžu udělat?'

export default function WelcomeBot({ onOpenChat }) {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)
  const [showCta, setShowCta] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const [muted, setMuted] = useState(false)
  const hasSpokenRef = useRef(false)

  // Objeví se 1,5 s po načtení webu
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(t)
  }, [])

  // Střídá jazyky v bublině
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

  // Hlasový pozdrav — spustí se při prvním pohybu/kliku/scrollu návštěvníka
  useEffect(() => {
    if (!visible) return

    const speak = () => {
      if (hasSpokenRef.current || muted) return
      if (!('speechSynthesis' in window)) return
      hasSpokenRef.current = true

      const utterance = new SpeechSynthesisUtterance(voiceGreeting)
      utterance.lang = 'cs-CZ'
      utterance.rate = 1
      utterance.pitch = 1.1

      // Zkus najít český hlas
      const voices = window.speechSynthesis.getVoices()
      const czVoice = voices.find((v) => v.lang.startsWith('cs'))
      if (czVoice) utterance.voice = czVoice

      utterance.onstart = () => setSpeaking(true)
      utterance.onend = () => setSpeaking(false)

      window.speechSynthesis.speak(utterance)

      // Po promluvení odeber listenery
      removeListeners()
    }

    const removeListeners = () => {
      window.removeEventListener('mousemove', speak)
      window.removeEventListener('click', speak)
      window.removeEventListener('scroll', speak)
      window.removeEventListener('keydown', speak)
      window.removeEventListener('touchstart', speak)
    }

    window.addEventListener('mousemove', speak)
    window.addEventListener('click', speak)
    window.addEventListener('scroll', speak)
    window.addEventListener('keydown', speak)
    window.addEventListener('touchstart', speak)

    return removeListeners
  }, [visible, muted])

  // Zastav řeč, když robota zavřeme
  const handleDismiss = () => {
    window.speechSynthesis?.cancel()
    setSpeaking(false)
    setDismissed(true)
  }

  const toggleMute = () => {
    if (!muted) {
      window.speechSynthesis?.cancel()
      setSpeaking(false)
    }
    setMuted(!muted)
  }

  if (!visible || dismissed) return null

  return (
    <div className="welcome-bot">
      <button
        className="welcome-bot-close"
        onClick={handleDismiss}
        aria-label="Zavřít"
      >
        ✕
      </button>

      <img
        src={botAvatar}
        className={`welcome-bot-avatar ${speaking ? 'is-speaking' : ''}`}
        alt="Growea AI asistentka"
      />

      <div className="welcome-bot-bubble">
        <div className="welcome-bot-text" key={index}>
          {greetings[index].text}
        </div>

        {showCta && (
          <div className="welcome-bot-actions">
            <button
              className="welcome-bot-cta"
              onClick={() => {
                window.speechSynthesis?.cancel()
                onOpenChat()
                setDismissed(true)
              }}
            >
              Pojďme si popovídat →
            </button>
            <button
              className="welcome-bot-mute"
              onClick={toggleMute}
              aria-label={muted ? 'Zapnout zvuk' : 'Vypnout zvuk'}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
