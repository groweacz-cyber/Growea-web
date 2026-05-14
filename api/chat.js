export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { messages } = req.body || {}

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid messages' })
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 500,
        temperature: 0.7,
        messages: [
          {
            role: 'system',
            content: `Jsi přátelský AI asistent společnosti Growea. 
Growea je česká firma zaměřená na:
- AI marketing (Meta Ads, Google Ads, TikTok, IG, YouTube, AI agenti)
- Vývoj AI softwaru (zdravotnictví, logistika, průmysl, obchod)
- Prodej prémiových AI domén (projekty 2027–2030)

Kontakt:
- Email: groweacz@gmail.com
- Telefon: +420 607 463 288

Odpovídej stručně, vstřícně a vždy v češtině. Pokud návštěvník chce konkrétní nabídku nebo cenu, doporuč mu napsat email nebo zavolat. Buď struční — max 3-4 věty.`,
          },
          ...messages,
        ],
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Groq error:', data)
      return res.status(500).json({ error: 'AI service error' })
    }

    const reply = data.choices?.[0]?.message?.content
    return res.status(200).json({ reply })
  } catch (error) {
    console.error('Handler error:', error)
    return res.status(500).json({ error: 'Server error' })
  }
}
