import { useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import logo from "../logo.png.png"
import "./index.css"
import ChatWidget from "./ChatWidget"
import CookieConsent from "./CookieConsent"
import Reveal from "./Reveal"

export default function App() {
  const [analyticsOn, setAnalyticsOn] = useState(false)
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* NAVBAR */}
      <header className="navbar">

        <div className="logo-wrap">
          <img
            src={logo}
            className="logo"
          />

          <div>
            <div className="logo-title">
              GROWEA
            </div>

            <div className="logo-sub">
              SOCIAL MARKETING • AI SOFTWARE
            </div>
          </div>
        </div>

        <nav className="nav">

          <button onClick={() => scrollTo("hero")}>
            O nás
          </button>

          <button onClick={() => scrollTo("services")}>
            Social marketing
          </button>

          <button onClick={() => scrollTo("tech")}>
            AI software
          </button>

          <button onClick={() => scrollTo("domains")}>
            AI domény
          </button>

          <button onClick={() => scrollTo("contact")}>
            Kontakt
          </button>

        </nav>

      </header>

      {/* HERO */}
      <section
        className="hero"
        id="hero"
      >

        <div className="hero-left">

          <div className="hero-status">
            <span className="status-dot"></span>
            Aktuálně přijímáme nové projekty
          </div>

          <div className="hero-badge">
            AI • MARKETING • SOFTWARE • DOMAINS
          </div>

          <h1>
            Budujeme růst
            <br />
            pomocí <span>AI.</span>
          </h1>

          <p>
            Spojujeme komplexní marketing,
            moderní software a umělou inteligenci
            pro měřitelné výsledky a dlouhodobý růst.
          </p>

          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() => scrollTo("services")}
            >
              Naše služby
            </button>

            <button
              className="btn-secondary"
              onClick={() => scrollTo("contact")}
            >
              Kontaktujte nás
            </button>

          </div>

          <div className="hero-contact">
            <span>📧 groweacz@gmail.com</span>
            <span>📞 +420 607 463 288</span>
          </div>

        </div>

        <div className="hero-right">

          <div className="sphere hero-visual">
            <img src={logo} />
          </div>

        </div>

      </section>

      {/* SERVICES */}
      <Reveal>
      <section
        id="services"
        className="services-section"
      >

        <div className="section-sub">
          NAŠE SLUŽBY
        </div>

        <h2>
          Co pro vás můžeme udělat
        </h2>

        <div className="services-grid">

          <div className="card">

            <h3>
              Komplexní
              <br />
              social marketing
            </h3>

            <ul>
              <li>Meta, Meta Ads, Google Ads</li>
              <li>TikTok, IG, YouTube</li>
              <li>E-booky, videa, grafika</li>
              <li>AI agenti pro vyšší výkon</li>
            </ul>

          </div>

          <div className="card">

            <h3>
              Vývoj AI aplikací
              <br />
              a SW
            </h3>

            <ul>
              <li>Zdravotnictví</li>
              <li>Logistika</li>
              <li>Průmysl</li>
              <li>Obchod</li>
            </ul>

          </div>

          <div className="card">

            <h3>
              Prodej
              <br />
              AI domén
            </h3>

            <ul>
              <li>Prémiové AI domény</li>
              <li>Projekty 2027–2030</li>
              <li>Brand potenciál</li>
              <li>Omezené portfolio</li>
            </ul>

          </div>

        </div>

      </section>
      </Reveal>

      {/* REFERENCES */}
      <Reveal>
      <section
        className="references"
        id="references"
      >

        <div className="section-sub">
          REFERENCE
        </div>

        <h2>
          Důvěřují nám projekty,
          které rostou
        </h2>

        <div className="ref-grid">

          <div className="ref-card">

            <h3>Kimchihero.cz</h3>

            <p>
              Komplexní řízení e-commerce
              a marketingu.
            </p>

            <div className="ref-highlight">
              +50 % YTY
            </div>

          </div>

          <div className="ref-card">

            <h3>
              Autodoprava Vondrášek
            </h3>

            <p>
              Google reklamy, web,
              e-commerce.
            </p>

          </div>

          <div className="ref-card">

            <h3>czfkk.cz</h3>

            <p>
              Weby, sociální skupiny,
              digitální obsah.
            </p>

          </div>

        </div>

      </section>
      </Reveal>

      {/* DOMAINS */}
      <Reveal>
      <section
        className="domains"
        id="domains"
      >

        <div className="domains-left">

          <div className="section-sub">
            AI DOMÉNY 2027–2030
          </div>

          <h2>
            Prémiové AI domény
            budoucnosti
          </h2>

          <p>
            Exkluzivní AI digitální
            aktiva pro startupy,
            projekty a značky.
          </p>

        </div>

        <div className="domain-tags">
          <span>neuroflow.ai</span>
          <span>futurelogic.ai</span>
          <span>smartmind.cz</span>
          <span>adaptiveai.app</span>
        </div>

      </section>
      </Reveal>

      {/* TECHNOLOGIES */}
      <Reveal>
      <section
        className="tech"
        id="tech"
      >

        <div className="section-sub">
          TECHNOLOGIE
        </div>

        <h2>
          Technologie,
          se kterými pracujeme
        </h2>

        <div className="tech-grid">
          <span>OpenAI</span>
          <span>Anthropic</span>
          <span>Google</span>
          <span>Meta</span>
          <span>Vercel</span>
        </div>

      </section>
      </Reveal>

      {/* CONTACT */}
      <Reveal>
      <section
        className="contact"
        id="contact"
      >

        <div>

          <h2>
            Připraveni posunout
            váš projekt dál?
          </h2>

          <p>
            Ozvěte se nám a společně
            najdeme nejlepší řešení.
          </p>

        </div>

        <div className="contact-box">

          <form
            action="https://formspree.io/f/xnjwryel"
            method="POST"
            className="contact-form"
          >

            <input
              type="text"
              name="name"
              placeholder="Vaše jméno"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Váš email"
              required
            />

            <textarea
              name="message"
              placeholder="Vaše zpráva"
              rows="6"
              required
            ></textarea>

            <button
              type="submit"
              className="btn-primary"
            >
              Odeslat zprávu
            </button>

          </form>

        </div>

      </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">
            <span className="footer-logo">GROWEA</span>
            <span className="footer-tag">
              AI Marketing & Software
            </span>
          </div>

          <div className="footer-contact">
            <span>groweacz@gmail.com</span>
            <span>+420 607 463 288</span>
          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} Growea. Všechna práva vyhrazena.
          </div>

        </div>

      </footer>

      <ChatWidget />
      <CookieConsent onConsentChange={setAnalyticsOn} />
      {analyticsOn && <Analytics />}

    </div>
  )
}
