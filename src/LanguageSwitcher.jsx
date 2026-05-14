import { useEffect, useState } from 'react'

const languages = [
  { code: 'cs', label: 'CZ', flag: '🇨🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
]

export default function LanguageSwitcher() {
  const [active, setActive] = useState('cs')

  useEffect(() => {
    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'cs',
          includedLanguages: 'cs,en,de',
          autoDisplay: false,
        },
        'google_translate_hidden'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    document.body.appendChild(script)
  }, [])

  const changeLanguage = (code) => {
    setActive(code)

    // Najde skrytý Google select a nastaví jazyk
    const trySwitch = (attempts = 0) => {
      const select = document.querySelector('.goog-te-combo')
      if (select) {
        select.value = code
        select.dispatchEvent(new Event('change'))
      } else if (attempts < 20) {
        // Google widget se ještě nenačetl, zkus to za chvíli
        setTimeout(() => trySwitch(attempts + 1), 200)
      }
    }
    trySwitch()
  }

  return (
    <>
      <div id="google_translate_hidden" style={{ display: 'none' }}></div>

      <div className="lang-switcher">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-btn ${active === lang.code ? 'lang-btn-active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
            aria-label={lang.label}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span className="lang-label">{lang.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
