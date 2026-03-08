/**
 * GenSeva AI — Proxy Server using Groq API (100% FREE)
 * Model: llama-3.3-70b (very powerful, completely free tier)
 * Get key: https://console.groq.com → sign in with Google → API Keys → Create
 */
import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors({ origin: '*' }))
app.use(express.json())

app.post('/chat', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey || apiKey === 'your_groq_key_here') {
    return res.status(500).json({ error: '❌ Add GROQ_API_KEY to your .env file. Get free key at https://console.groq.com' })
  }

  try {
    const { messages, system } = req.body

    // Build messages: system first, then conversation
    const groqMessages = [
      ...(system ? [{ role: 'system', content: system }] : []),
      ...messages.map(m => ({ role: m.role, content: m.content }))
    ]

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: groqMessages,
        max_tokens: 1000,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      console.error('Groq error:', data)
      return res.status(response.status).json({ error: data.error?.message || 'Groq API error' })
    }

    const text = data.choices?.[0]?.message?.content || ''
    console.log(`✅ Groq responded (${text.length} chars)`)

    // Return in same format frontend expects
    res.json({ content: [{ type: 'text', text }] })

  } catch (err) {
    console.error('Error:', err.message)
    res.status(500).json({ error: err.message })
  }
})

app.listen(3001, () => {
  const key = process.env.GROQ_API_KEY
  const ok  = key && key !== 'your_groq_key_here'
  console.log(`\n✅ GenSeva AI (Groq - FREE) → http://localhost:3001`)
  console.log(`   Model:   llama-3.3-70b-versatile`)
  console.log(`   API Key: ${ok ? key.slice(0,14)+'... ✅ Ready!' : '❌ Missing — add to .env'}`)
  if (!ok) console.log(`\n   👉 Get FREE key: https://console.groq.com\n`)
})
