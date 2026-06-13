import { useState, useEffect } from "react"
import { Analytics } from "@vercel/analytics/react"
import logo from "../logo.png.png"
import "./index.css"
import ChatWidget from "./ChatWidget"
import CookieConsent from "./CookieConsent"
import Reveal from "./Reveal"
import WelcomeBot from "./WelcomeBot"
import LanguageSwitcher from "./LanguageSwitcher"
import CountUp from "./CountUp"
import CustomCursor from "./CustomCursor"
import AuditTool from "./AuditTool"

export default function App() {
  const [analyticsOn, setAnalyticsOn] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [auditOpen, setAuditOpen] = useState(false)
  const [openPillar, setOpenPillar] = useState(null)
  const [showTop, setShowTop] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const togglePillar = (id) => {
    setOpenPillar(openPillar === id ? null : id)
  }

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="app">
      <CustomCursor />
      {/* BACKGROUND */}
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>

      {/* AURORA MESH */}
      <div className="aurora">
        <div className="aurora-blob aurora-1"></div>
        <div className="aurora-blob aurora-2"></div>
        <div className="aurora-blob aurora-3"></div>
        <div className="aurora-blob aurora-4"></div>
      </div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-wrap">
          <img src={logo} className="logo" alt="Growea logo" />
          <div>
            <div className="logo-title">GROWEA</div>
            <div className="logo-sub">SOCIAL MARKETING • AI SOFTWARE</div>
          </div>
        </div>

<button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

<nav className={`nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <button onClick={() => { scrollTo("services"); setMobileMenuOpen(false) }}>Social marketing</button>
          <button onClick={() => { scrollTo("services"); setMobileMenuOpen(false) }}>AI software</button>
          <button onClick={() => { scrollTo("domains"); setMobileMenuOpen(false) }}>AI domény</button>
          <button onClick={() => { scrollTo("why"); setMobileMenuOpen(false) }}>Proč Growea</button>
          <button onClick={() => { scrollTo("contact"); setMobileMenuOpen(false) }}>Kontakt</button>
          <button className="nav-audit" onClick={() => { setAuditOpen(true); setMobileMenuOpen(false) }}>
            <span className="nav-audit-badge">Zkus mě zdarma</span>
            AI audit
          </button>
        </nav>
        <LanguageSwitcher />
      </header>

      {/* HERO */}
      <section className="hero" id="hero">
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
            Spojujeme komplexní marketing, moderní software a umělou
            inteligenci pro měřitelné výsledky a dlouhodobý růst.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo("services")}>
              Naše služby
            </button>
            <button className="btn-secondary" onClick={() => scrollTo("contact")}>
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
            <img src={logo} alt="Growea — AI marketing a software" />
          </div>
        </div>
      </section>

      {/* REFERENCES — posunuto nahoru */}
      <Reveal>
        <section className="references" id="references">
          <div className="section-sub">REFERENCE</div>
          <h2>Důvěřují nám projekty jako např.:</h2>

          <div className="ref-grid">
            <div className="ref-card">
              <h3>Kimchihero.cz</h3>
              <p>Komplexní řízení e-commerce a marketingu.</p>
              <div className="ref-highlight">
                <CountUp end={50} prefix="+" suffix=" % YTY" />
              </div>
            </div>

            <div className="ref-card">
              <h3>Vondrášek s.r.o.</h3>
              <p>Google reklamy, web, e-commerce.</p>
              <div className="ref-highlight">
                <CountUp end={120} prefix="+" suffix=" % YTY" />
              </div>
            </div>

            <div className="ref-card">
              <h3>Czech Wellness</h3>
              <p>Weby, sociální skupiny, digitální obsah.</p>
              <div className="ref-highlight">
                <CountUp end={128} prefix="+" suffix=" % YTY" />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* SERVICES — tři pilíře s akordeonem */}
      <Reveal>
        <section id="services" className="services-section">
          <div className="section-sub">NAŠE SLUŽBY</div>
          <h2>Tři pilíře, na kterých stavíme</h2>
          <p className="services-lead">
            Klikněte na pilíř a rozbalte detail služeb.
          </p>

          <div className="pillars">
            {/* PILÍŘ 1 */}
            <div className={`pillar ${openPillar === 1 ? "open" : ""}`}>
              <button
                className="pillar-head"
                onClick={() => togglePillar(1)}
                aria-expanded={openPillar === 1}
              >
                <div className="pillar-head-text">
                  <h3>Komplexní social marketing</h3>
                  <span className="pillar-tagline">
                    Reklama, obsah a značka, které přinášejí zákazníky.
                  </span>
                </div>
                <span className="pillar-toggle">
                  {openPillar === 1 ? "−" : "+"}
                </span>
              </button>

              <div className="pillar-body">
                <div className="pillar-block">
                  <h4>Social &amp; výkon</h4>
                  <ul>
                    <li>Meta, Meta Ads, Google Ads</li>
                    <li>TikTok, IG, YouTube</li>
                    <li>E-booky, videa, grafika</li>
                    <li>AI agenti pro vyšší výkon</li>
                  </ul>
                </div>

                <div className="pillar-block">
                  <h4>Branding</h4>
                  <p>
                    Chcete, aby firma působila moderně a posouvala se kupředu?
                    Dáme jí jednotný, nadčasový vzhled.
                  </p>
                  <ul>
                    <li>Firemní identita</li>
                    <li>Brand manuál</li>
                    <li>Jednotný vizuální styl a marketingové materiály</li>
                  </ul>
                </div>

                <div className="pillar-block">
                  <h4>Online marketing</h4>
                  <p>
                    Chcete víc zákazníků a být víc vidět? Nastavíme efektivní
                    reklamu na míru.
                  </p>
                  <ul>
                    <li>PPC kampaně</li>
                    <li>Linkbuildingové strategie</li>
                    <li>Přehled odkazového portfolia</li>
                    <li>V.I.P. poradenství</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PILÍŘ 2 */}
            <div className={`pillar ${openPillar === 2 ? "open" : ""}`}>
              <button
                className="pillar-head"
                onClick={() => togglePillar(2)}
                aria-expanded={openPillar === 2}
              >
                <div className="pillar-head-text">
                  <h3>Vývoj AI aplikací a SW</h3>
                  <span className="pillar-tagline">
                    Software a weby, které řeší reálné problémy.
                  </span>
                </div>
                <span className="pillar-toggle">
                  {openPillar === 2 ? "−" : "+"}
                </span>
              </button>

              <div className="pillar-body">
                <div className="pillar-block">
                  <h4>AI aplikace na míru</h4>
                  <p>Vyvíjíme software pro obory:</p>
                  <ul>
                    <li>Zdravotnictví</li>
                    <li>Logistika</li>
                    <li>Průmysl</li>
                    <li>Obchod</li>
                  </ul>
                </div>

                <div className="pillar-block">
                  <h4>Webové stránky</h4>
                  <p>
                    Chcete web, který dělá skvělý první dojem a vydělává?
                  </p>
                  <ul>
                    <li>Moderní a nadčasový design</li>
                    <li>Skvělá dohledatelnost ve vyhledávačích</li>
                    <li>100% spolehlivost</li>
                    <li>Skvělá prezentace firmy</li>
                  </ul>
                </div>
                
               <div className="pillar-block">
                  <h4>AI asistenti, agenti a chatboti</h4>
                  <p>
                    Vytvoříme AI asistenta na míru, který zná vaši firmu a
                    obsluhuje zákazníky 24/7 — odpovídá na dotazy, doporučuje
                    produkty a sbírá poptávky, i když zrovna spíte.
                  </p>
                </div>
              </div>
            </div>

            {/* PILÍŘ 3 */}
            <div className={`pillar ${openPillar === 3 ? "open" : ""}`}>
              <button
                className="pillar-head"
                onClick={() => togglePillar(3)}
                aria-expanded={openPillar === 3}
              >
                <div className="pillar-head-text">
                  <h3>Prémiové AI domény</h3>
                  <span className="pillar-tagline">
                    Exkluzivní digitální aktiva pro budoucí značky a projekty.
                  </span>
                </div>
                <span className="pillar-toggle">
                  {openPillar === 3 ? "−" : "+"}
                </span>
              </button>

              <div className="pillar-body">
                <div className="pillar-block">
                  <p>
                    AI doména je značka i adresa zároveň — krátká,
                    zapamatovatelná, postavená na trendu AI. Držíme omezené
                    portfolio prémiových domén s potenciálem pro startupy,
                    projekty a investice (2027–2030).
                  </p>
                  <p className="pillar-note">
                    Jak nákup probíhá: ozvete se → ověříme dostupnost →
                    bezpečný převod.
                  </p>
                  <button
                    className="btn-secondary pillar-cta"
                    onClick={() => scrollTo("domains")}
                  >
                    Zobrazit portfolio domén
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* AI AUDIT MODAL */}
      {auditOpen && (
        <div className="audit-overlay" onClick={() => setAuditOpen(false)}>
          <div className="audit-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="audit-modal-close"
              onClick={() => setAuditOpen(false)}
              aria-label="Zavřít"
            >
              ✕
            </button>

            <div className="section-sub">AI AUDIT ZDARMA</div>

            <h2 className="audit-modal-title">
              Získejte AI mini-audit vašeho marketingu
            </h2>

            <p className="audit-intro">
              Vyplňte tři údaje a naše AI vám během chvíle připraví konkrétní
              tipy, jak zlepšit váš marketing. Zdarma a nezávazně.
            </p>

<AuditTool onClose={() => setAuditOpen(false)} />
          </div>
        </div>
      )}

      {/* DOMAINS */}
      <Reveal>
        <section className="domains" id="domains">
          <div className="domains-left">
            <div className="section-sub">AI DOMÉNY 2027–2030</div>
            <h2>Prémiové AI domény budoucnosti</h2>
            <p>
              Exkluzivní AI digitální aktiva pro startupy, projekty a značky.
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

      {/* WHY GROWEA — 6 hodnot */}
      <Reveal>
        <section className="why" id="why">
<div className="section-sub">PROČ GROWEA</div>

          <div className="founder-intro">
            <h2 className="founder-heading">
              Spojujeme marketing s umělou inteligencí.
            </h2>
            <p>
              Kromě vývoje AI softwaru a nabídky prémiových AI domén se
              specializujeme především na komplexní sociální marketing. Naše
              výhoda? Propojení osvědčených marketingových postupů s
              nejmodernějšími AI technologiemi a strojovým učením — pro vyšší
              výkon a měřitelné výsledky.
            </p>
            <div className="founder-photo">
              <img src="/vaclav.jpg" alt="Václav Kodéš — zakladatel Growea" />
            </div>
          </div>

          <h2>Na čem nám záleží</h2>

          <div className="why-grid">
            <div className="why-card">
              <h4>Spokojenost klientů na prvním místě</h4>
              <p>
                Vztahy stavíme na rovnocenném partnerství a přátelském přístupu.
              </p>
            </div>
            <div className="why-card">
              <h4>Individuální řešení na míru</h4>
              <p>Každé řešení reflektuje to, co opravdu potřebujete.</p>
            </div>
            <div className="why-card">
              <h4>Spolupráce s nejlepšími</h4>
              <p>Pracujeme jen s lidmi ztotožněnými s naším posláním.</p>
            </div>
            <div className="why-card">
              <h4>Maximální péče o zákazníky</h4>
              <p>Služby tvoříme podle vašich potřeb a stále je inovujeme.</p>
            </div>
            <div className="why-card">
              <h4>Komplexní řešení</h4>
              <p>Navrhneme marketingovou strategii nejen pro online svět.</p>
            </div>
            <div className="why-card">
              <h4>Smysl pro detail</h4>
              <p>Každou práci začínáme důkladnou rešerší.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* TECHNOLOGIES */}
      <Reveal>
        <section className="tech" id="tech">
          <div className="section-sub">TECHNOLOGIE</div>
          <h2>Technologie, se kterými pracujeme</h2>

          <div className="tech-grid">
            <span>OpenAI</span>
            <span>Anthropic</span>
            <span>Google</span>
            <span>Meta</span>
            <span>Microsoft</span>
            <span>GitHub</span>
            <span>Firebase</span>
            <span>Vercel</span>
            <span>Make</span>
            <span>n8n</span>
            <span>Canva</span>
          </div>
        </section>
      </Reveal>

      {/* INSPIRATION */}
      <Reveal>
        <section className="inspiration" id="inspiration">
          <div className="section-sub">KDO NÁS INSPIRUJE</div>
          <h2>Učíme se od nejlepších</h2>

          <div className="insp-grid">
            <div className="insp-card">
              <h4>Brock</h4>
              <p>IG organika a dosahy</p>
            </div>
            <div className="insp-card">
              <h4>Theriot</h4>
              <p>Struktura účtu a škálování</p>
            </div>
            <div className="insp-card">
              <h4>Denney</h4>
              <p>Analýza a strategie kreativ</p>
            </div>
            <div className="insp-card">
              <h4>Hormozi</h4>
              <p>Nabídky a money models</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CONTACT */}
      <Reveal>
        <section className="contact" id="contact">
          <div>
            <h2>Připraveni posunout váš projekt dál?</h2>
            <p>Ozvěte se nám a společně najdeme nejlepší řešení.</p>
          </div>

          <div className="contact-box">
            <form
              action="https://formspree.io/f/xnjwryel"
              method="POST"
              className="contact-form"
            >
              <input type="text" name="name" placeholder="Vaše jméno" required />
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
              <button type="submit" className="btn-primary">
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
            <span className="footer-tag">AI Marketing &amp; Software</span>
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

      {/* SCROLL TO TOP */}
      <button
        className={`scroll-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Nahoru"
      >
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </button>
      <ChatWidget open={chatOpen} setOpen={setChatOpen} />
      <WelcomeBot onOpenChat={() => setChatOpen(true)} />
      <CookieConsent onConsentChange={setAnalyticsOn} />
      {analyticsOn && <Analytics />}
    </div>
  )
}
