export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      fontFamily: 'Arial',
      padding: '60px'
    }}>
      <h1 style={{
        fontSize: '72px',
        marginBottom: '20px',
        background: 'linear-gradient(to right,#4fd1ff,#8b5cf6)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}>
        GROWEA
      </h1>

      <p style={{
        fontSize: '24px',
        color: '#999',
        maxWidth: '700px',
        lineHeight: '1.6'
      }}>
        Budujeme AI-powered digitální růst pomocí social marketingu,
        AI aplikací a prémiových AI domén.
      </p>

      <div style={{
        marginTop: '50px',
        display: 'flex',
        gap: '20px'
      }}>
        <button style={{
          padding: '16px 32px',
          background: '#6d5cff',
          border: 'none',
          borderRadius: '14px',
          color: 'white',
          fontSize: '18px'
        }}>
          Kontaktujte nás
        </button>

        <button style={{
          padding: '16px 32px',
          background: 'transparent',
          border: '1px solid #333',
          borderRadius: '14px',
          color: 'white',
          fontSize: '18px'
        }}>
          AI Domény
        </button>
      </div>

      <div style={{
        marginTop: '80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
        gap: '20px'
      }}>
        <div style={{
          padding: '30px',
          border: '1px solid #222',
          borderRadius: '24px',
          background: '#0a0a0a'
        }}>
          <h2>Komplexní social marketing</h2>
          <p style={{color:'#999'}}>
            Meta Ads, Google Ads, TikTok, IG, YT, obsah a AI systémy.
          </p>
        </div>

        <div style={{
          padding: '30px',
          border: '1px solid #222',
          borderRadius: '24px',
          background: '#0a0a0a'
        }}>
          <h2>Vývoj AI aplikací</h2>
          <p style={{color:'#999'}}>
            AI software pro zdravotnictví, logistiku a průmysl.
          </p>
        </div>

        <div style={{
          padding: '30px',
          border: '1px solid #222',
          borderRadius: '24px',
          background: '#0a0a0a'
        }}>
          <h2>AI domény</h2>
          <p style={{color:'#999'}}>
            Prémiové AI domény pro roky 2027–2030.
          </p>
        </div>
      </div>

      <div style={{
        marginTop: '100px',
        color: '#666'
      }}>
        groweacz@gmail.com<br />
        +420 607 463 288
      </div>
    </div>
  )
}
