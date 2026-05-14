import { useEffect } from 'react'

export default function LanguageSwitcher() {
  useEffect(() => {
    // Zabráníme dvojímu vložení skriptu
    if (document.getElementById('google-translate-script')) return

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'cs',
          includedLanguages: 'cs,en,de',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      )
    }

    const script = document.createElement('script')
    script.id = 'google-translate-script'
    script.src =
      '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    document.body.appendChild(script)
  }, [])

  return <div id="google_translate_element" className="lang-switcher"></div>
}
