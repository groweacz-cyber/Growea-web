import { useState } from 'react'

export default function AuditTool() {
  const [obor, setObor] = useState('')
  const [cil, setCil] = useState('')
  const [kanaly, setKanaly] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const runAudit = async () => {
    if (!obor.trim() || !cil.trim() || loading) return

    setLoading(true)
    setResult('')
    setError('')

    try {
      const res = await fetch('/api/audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          obor: obor.trim(),
          cil: cil.trim(),
          kanaly: kanaly.trim(),
        }),
      })
      const data = await res.json()
      if (data.result) {
        setResult(data.result)
      } else {
        setError('Něco se pokazilo. Zkuste to prosím znovu, nebo nám napište na groweacz@gmail.com.')
      }
    } catch {
      setError('Něco se pokazilo. Zkuste to prosím znovu, nebo nám napište na groweacz@gmail.com.')
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setResult('')
    setError('')
    setObor('')
    setCil('')
    setKanaly('')
  }

  return (
    <div className="audit-box">
      {!result && (
        <>
          <div className="audit-fields">
            <div className="audit-field">
              <label>Obor podnikání</label>
              <input
                type="text"
                value={obor}
                onChange={(e) => setObor(e.target.value)}
                placeholder="Např. kavárna, e-shop s oblečením, autoservis…"
                disabled={loading}
              />
            </div>

            <div className="audit-field">
              <label>Hlavní cíl</label>
              <input
                type="text"
                value={cil}
                onChange={(e) => setCil(e.target.value)}
                placeholder="Např. víc zákazníků, vyšší prodeje, známější značka…"
                disabled={loading}
              />
            </div>

            <div className="audit-field">
              <label>Kde teď inzerujete <span className="audit-optional">(nepovinné)</span></label>
              <input
                type="text"
                value={kanaly}
                onChange={(e) => setKanaly(e.target.value)}
                placeholder="Např. Facebook, Instagram, nikde zatím…"
                disabled={loading}
              />
            </div>
          </div>

          <button
            className="btn-primary audit-submit"
            onClick={runAudit}
            disabled={loading || !obor.trim() || !cil.trim()}
          >
            {loading ? 'Analyzuji…' : 'Spustit AI audit →'}
          </button>

          {loading && (
            <div className="audit-loading">
              <span></span><span></span><span></span>
            </div>
          )}

          {error && <div className="audit-error">{error}</div>}
        </>
      )}

      {result && (
        <div className="audit-result">
          <div className="audit-result-label">
            ✦ Váš AI mini-audit
          </div>
          <div className="audit-result-text">{result}</div>
          <div className="audit-result-cta">
            <p>Chcete to probrat podrobněji a získat konkrétní plán?</p>
            <div className="audit-result-actions">
              <a href="mailto:groweacz@gmail.com" className="btn-primary">
                Ozvat se Growea
              </a>
              <button className="btn-secondary" onClick={reset}>
                Nový audit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
