export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(80,120,255,0.25), #050505 50%)",
        color: "white",
        fontFamily: "Arial",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px 60px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
          position: "sticky",
          top: 0,
          background: "rgba(5,5,5,0.7)",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
  src="/ChatGPT Image 8. 5. 2026 23_30_01.png"
            alt="Growea"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
            }}
          />

          <div>
            <div
              style={{
                fontSize: "26px",
                fontWeight: "bold",
                letterSpacing: "3px",
              }}
            >
              GROWEA
            </div>

            <div style={{ color: "#777", fontSize: "12px" }}>
              growea.eu
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            color: "#aaa",
            fontSize: "15px",
          }}
        >
          <span>O nás</span>
          <span>Social Marketing</span>
          <span>AI Software</span>
          <span>AI Domény</span>
          <span>Kontakt</span>
        </div>
      </div>

      {/* HERO */}
      <div
        style={{
          padding: "120px 60px 80px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid rgba(120,120,255,0.3)",
            borderRadius: "999px",
            background: "rgba(120,120,255,0.08)",
            color: "#9dc1ff",
            marginBottom: "30px",
          }}
        >
          AI • Marketing • Software • Digital Assets
        </div>

        <h1
          style={{
            fontSize: "92px",
            lineHeight: "0.95",
            maxWidth: "950px",
            marginBottom: "30px",
            fontWeight: 900,
          }}
        >
          Building
          <br />
          <span
            style={{
              background:
                "linear-gradient(to right,#6ee7ff,#8b5cf6,#6ee7ff)",
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
            fontSize: "24px",
            lineHeight: "1.7",
            marginBottom: "50px",
          }}
        >
          Moderní AI studio zaměřené na komplexní social marketing,
          vývoj AI aplikací, software systémů a prémiových AI domén.
        </p>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          <button
            style={{
              padding: "18px 34px",
              borderRadius: "18px",
              border: "none",
              background:
                "linear-gradient(to right,#4fd1ff,#6d5cff)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 0 40px rgba(90,120,255,0.35)",
            }}
          >
            Kontaktujte nás
          </button>

          <button
            style={{
              padding: "18px 34px",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.1)",
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

      {/* SERVICES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          padding: "40px 60px 120px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {[
          {
            title: "Komplexní Social Marketing",
            text:
              "Meta Ads, Google Ads, TikTok, YouTube, IG, FB skupiny, e-booky, videa a AI řízené marketingové systémy.",
          },
          {
            title: "Vývoj AI aplikací a SW",
            text:
              "Moderní AI software pro zdravotnictví, logistiku, průmysl a další odvětví.",
          },
          {
            title: "Prodej AI domén",
            text:
              "Prémiové AI domény a digitální aktiva pro roky 2027–2030.",
          },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              padding: "40px",
              borderRadius: "32px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 50px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                color: "#6ee7ff",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              0{i + 1}
            </div>

            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#999",
                lineHeight: "1.8",
                fontSize: "17px",
              }}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* REFERENCES */}
      <div
        style={{
          padding: "0 60px 120px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "58px",
            marginBottom: "50px",
          }}
        >
          Reference
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
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
                "Google reklamy, tvorba interaktivního webu a e-commerce systémy.",
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
                padding: "36px",
                borderRadius: "30px",
                background: "#0a0a0a",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {ref.name}
              </h3>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.8",
                }}
              >
                {ref.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          padding: "60px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "#666",
        }}
      >
        <div style={{ fontSize: "28px", marginBottom: "20px" }}>
          GROWEA
        </div>

        <div style={{ lineHeight: "2" }}>
          groweacz@gmail.com
          <br />
          +420 607 463 288
        </div>
      </div>
    </div>
  )
}
