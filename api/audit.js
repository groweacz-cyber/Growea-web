export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { obor, cil, kanaly } = req.body || {}

  if (!obor || !cil) {
    return res.status(400).json({ error: 'Chybí údaje' })
  }

  const prompt = `Jsi marketingový expert ze společnosti Growea. Proveď stručný, konkrétní marketingový mini-audit pro tohoto klienta:

- Obor podnikání: ${obor}
- Hlavní cíl: ${cil}
- Kde nyní inzeruje / propaguje se: ${kanaly || 'neuvedeno'}

Vrať odpověď v tomto formátu:
1. Krátké zhodnocení situace (2 věty)
2. Tři konkrétní doporučení (každé 1-2 věty, prakticky použitelná)
3. Jedna věta, co by mohlo přinést rychlý výsledek

Piš česky, věcně, bez omáček. Maximálně 180 slov. Na konci nedávej žádný pozdrav ani podpis.`

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 600,
        temperature: 0.7,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Groq error:', data)
      return res.status(500).json({ error: 'AI service error' })
    }

    const result = data.choices?.[0]?.message?.content
    return res.status(200).json({ result })
  } catch (error) {
    console.error('Handler error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}
