import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Ahoj! Jsem AI asistent Growea. S čím vám můžu poradit? 👋' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMsg = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      })
      const data = await res.json()
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }])
      } else {
        setMessages([...newMessages, {
          role: 'assistant',
          content: 'Omlouvám se, něco se pokazilo. Napište nám prosím na groweacz@gmail.com.',
        }])
      }
    } catch {
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'Omlouvám se, něco se pokazilo. Napište nám prosím na groweacz@gmail.com.',
      }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <button
        className={`chat-toggle ${open ? 'chat-toggle-open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="AI chat"
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">G</div>
              <div>
                <div className="chat-title">Growea AI</div>
                <div className="chat-status">
                  <span className="chat-status-dot"></span>
                  Online
                </div>
              </div>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg-${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg-assistant chat-typing">
                <span></span><span></span><span></span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chat-input-wrap">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              placeholder="Napište zprávu..."
              disabled={loading}
            />
            <button
              className="chat-send"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Odeslat"
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
