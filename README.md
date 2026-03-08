# GenSeva AI 🇮🇳 — Setup Guide

## ⚡ Get Running in 3 Minutes (FREE)

### Step 1 — Get FREE Groq API Key (2 min)
1. Go to → **https://console.groq.com**
2. Click **"Sign in"** → use your **Google account** (no credit card!)
3. Left menu → **"API Keys"**
4. Click **"Create API Key"** → name it anything → click Create
5. **Copy the key** (starts with `gsk_...`)

### Step 2 — Paste into .env
Open `genseva-app\.env` and replace:
```
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 3 — Install & Run

**Terminal 1:**
```bash
npm install
node server.js
```
You should see:
```
✅ GenSeva AI (Groq - FREE) → http://localhost:3001
   Model:   llama-3.3-70b-versatile
   API Key: gsk_xxxxxxxxxx... ✅ Ready!
```

**Terminal 2:**
```bash
npm run dev
```

Open **http://localhost:5173** 🎉

---

## ❓ Errors & Fixes

| Error | Fix |
|---|---|
| `ECONNREFUSED` | Run `node server.js` in Terminal 1 first |
| `Add GROQ_API_KEY` | Open .env and paste your Groq key |
| `Invalid API Key` | Re-copy key from https://console.groq.com |

---

## Why Groq instead of AWS Bedrock?
Your AWS key (`AKIAT...`) is a **temporary IAM key** that expires and needs a session token.
Groq is 100% free with no expiry — perfect for hackathon demos.
