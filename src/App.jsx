export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top, rgba(80,120,255,0.25), #040404 45%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        style={{
          position: "fixed",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(120,80,255,0.18), transparent 70%)",
          top: "-300px",
          right: "-250px",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 60px",
          background: "rgba(5,5,5,0.72)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <img
            src="/ChatGPT Image 8. 5. 2026 23_30_01.png"
            alt="Growea"
            style={{
              width: "72px",
              height: "72px",
              objectFit: "contain",
            }}
          />

          <div>
            <div
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                letterSpacing: "4px",
              }}
            >
              GROWEA
            </div>

            <div
              style={{
                color: "#777",
                marginTop: "4px",
              }}
            >
              growea.eu
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "38px",
            color: "#aaa",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          <span onClick={() => scrollTo("about")}>O nás</span>
          <span onClick={() => scrollTo("services")}>
            Social Marketing
          </span>
          <span onClick={() => scrollTo("software")}>
            AI Software
          </span>
          <span onClick={() => scrollTo("domains")}>
            AI Domény
          </span>
          <span onClick={() => scrollTo("contact")}>
            Kontakt
          </span>
        </div>
      </div>

      {/* HERO */}
      <section
        id="hero"
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 60px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ maxWidth: "1100px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "12px 22px",
              borderRadius: "999px",
              border: "1px solid rgba(120,120,255,0.25)",
              background: "rgba(120,120,255,0.08)",
              color: "#9dc1ff",
              marginBottom: "36px",
              fontSize: "15px",
            }}
          >
            AI • Marketing • Software • Digital Assets
          </div>

          <h1
            style={{
              fontSize: "110px",
              lineHeight: "0.92",
              marginBottom: "36px",
              fontWeight: 900,
              letterSpacing: "-4px",
            }}
          >
            Building
            <br />
            <span
              style={{
                background:
                  "linear-gradient(to right,#66d9ff,#8b5cf6,#66d9ff)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              AI-powered
            </span>
            <br />
            digital growth.
          </h1>

          <p
            style={{
              maxWidth: "760px",
              color: "#999",
              fontSize: "25px",
              lineHeight: "1.7",
              marginBottom: "50px",
            }}
          >
            Moderní AI studio zaměřené na komplexní social marketing,
            vývoj AI aplikací, software systémů a prémiových AI domén.
          </p>

          <div
            style={{
              display: "flex",
              gap: "22px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("contact")}
              style={{
                padding: "18px 36px",
                borderRadius: "18px",
                border: "none",
                background:
                  "linear-gradient(to right,#4fd1ff,#6d5cff)",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow:
                  "0 0 40px rgba(90,120,255,0.35)",
              }}
            >
              Kontaktujte nás
            </button>

            <button
              onClick={() => scrollTo("domains")}
              style={{
                padding: "18px 36px",
                borderRadius: "18px",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
                color: "white",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              AI Domény
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "120px 60px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "62px",
            marginBottom: "40px",
          }}
        >
          O nás
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "2",
            fontSize: "20px",
            maxWidth: "1000px",
          }}
        >
          Growea propojuje AI technologie, marketing,
          software a digitální infrastrukturu do jednoho
          moderního ekosystému. Naše AI agenti pomáhají
          zvyšovat výkon reklam, automatizovat procesy
          a vytvářet efektivní digitální systémy pro firmy
          budoucnosti.
        </p>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "40px 60px 140px",
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "62px",
            marginBottom: "70px",
          }}
        >
          Služby
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Komplexní Social Marketing",
              text:
                "Meta Ads, Google Ads, TikTok, IG, YouTube, FB skupiny, e-booky, videa, grafika a AI marketingové systémy.",
            },
            {
              title: "Vývoj AI aplikací a SW",
              text:
                "Moderní AI software pro zdravotnictví, logistiku, průmysl, obchod a další odvětví.",
            },
            {
              title: "AI Domény",
              text:
                "Prémiové AI domény a digitální aktiva pro roky 2027–2030.",
            },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                padding: "42px",
                borderRadius: "34px",
                background:
                  "rgba(255,255,255,0.04)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(18px)",
                boxShadow:
                  "0 0 60px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  color: "#7dd3fc",
                  marginBottom: "24px",
                  fontWeight: "bold",
                }}
              >
                0{i + 1}
              </div>

              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "24px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REFERENCES */}
      <section
        id="software"
        style={{
          padding: "0 60px 140px",
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "62px",
            marginBottom: "70px",
          }}
        >
          Reference
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              name: "Kimchihero.cz",
              text:
                "Komplexní řízení e-commerce a marketingu. Meziroční růst +50 % YTY.",
            },
            {
              name: "Autodoprava Vondrášek",
              text:
                "Google reklamy, tvorba interaktivního webu a e-commerce systémů.",
            },
            {
              name: "czfkk.cz",
              text:
                "Weby, sociální skupiny, digitální obsah a online infrastruktura.",
            },
          ].map((ref, i) => (
            <div
              key={i}
              style={{
                padding: "38px",
                borderRadius: "32px",
                background: "#0a0a0a",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "24px",
                }}
              >
                {ref.name}
              </h3>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.9",
                  fontSize: "17px",
                }}
              >
                {ref.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAINS */}
      <section
        id="domains"
        style={{
          padding: "0 60px 140px",
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "70px",
            borderRadius: "40px",
            background:
              "linear-gradient(135deg, rgba(70,90,255,0.18), rgba(130,80,255,0.12))",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "62px",
              marginBottom: "30px",
            }}
          >
            AI Domény
          </h2>

          <p
            style={{
              color: "#aaa",
              maxWidth: "850px",
              lineHeight: "2",
              fontSize: "20px",
            }}
          >
            Prémiové AI domény představují digitální aktiva
            budoucnosti. Growea se zaměřuje na strategické
            AI názvy a domény s potenciálem pro roky 2027–2030.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          padding: "0 60px 140px",
          maxWidth: "1450px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "70px",
            borderRadius: "40px",
            background: "#090909",
            border:
              "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "62px",
              marginBottom: "40px",
            }}
          >
            Kontakt
          </h2>

          <div
            style={{
              color: "#aaa",
              fontSize: "22px",
              lineHeight: "2.2",
            }}
          >
            📧 groweacz@gmail.com
            <br />
            📞 +420 607 463 288
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          padding: "50px 60px",
          color: "#666",
          textAlign: "center",
        }}
      >
        © 2026 GROWEA — AI Marketing • Software • Growth
      </footer>
    </div>
  )
}
