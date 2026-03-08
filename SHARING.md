# 🚀 How to Share Your GenSeva AI Prototype

## ⚡ Fastest Option: Vercel (5 minutes)

Your app is already configured for Vercel serverless deployment!

### Step 1: Deploy
```bash
# Install Vercel CLI (one-time)
npm i -g vercel

# Deploy from your project folder
cd GenSeva-Modified/genseva-app
vercel
```

### Step 2: Add API Key
1. Go to https://vercel.com/dashboard
2. Select your project
3. Settings → Environment Variables
4. Add:
   - **Name:** `GROQ_API_KEY`
   - **Value:** Your Groq API key (starts with `gsk_...`)
5. Redeploy: `vercel --prod`

### Step 3: Share
You'll get a URL like: `https://genseva-ai.vercel.app`

✅ **Done!** Share this URL with anyone.

---

## 🎯 Alternative Options

### Option 2: Netlify
```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod
```
Add `GROQ_API_KEY` in Netlify dashboard → Site Settings → Environment Variables

---

### Option 3: Railway.app (Easiest Full-Stack)
1. Go to https://railway.app
2. "New Project" → "Deploy from GitHub"
3. Connect your repo
4. Add `GROQ_API_KEY` in Variables
5. Get instant URL

**Pros:** Handles backend automatically, free tier available

---

### Option 4: Render.com (Free Tier)
**For Backend:**
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repo
4. Settings:
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add Environment Variable: `GROQ_API_KEY`

**For Frontend:**
1. New → Static Site
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

### Option 5: Ngrok (Instant Local Sharing)
**Best for:** Quick demos without deployment

```bash
# Terminal 1: Start app
npm start

# Terminal 2: Expose to internet
npx ngrok http 5173
```

Share the ngrok URL (e.g., `https://abc123.ngrok-free.app`)

⚠️ **Note:** URL changes each time you restart ngrok

---

## 📱 For Demo/Presentation

### Record a Video Demo
1. Use OBS Studio or Loom
2. Show key features:
   - Voice interaction
   - Multilingual support
   - Scheme recommendations
   - Eligibility checking
3. Upload to YouTube/Vimeo

### Create Screenshots
1. Use browser DevTools (F12) → Device Toolbar
2. Test on mobile view
3. Capture key screens
4. Add to README or presentation

---

## 🔒 Security Checklist Before Sharing

✅ **Remove sensitive data:**
```bash
# Check .env is in .gitignore
cat .gitignore | grep .env
```

✅ **Don't commit API keys:**
- Never push `.env` to GitHub
- Use environment variables on hosting platform

✅ **Test in incognito mode:**
- Ensure app works without your local setup

---

## 🎬 Quick Demo Script

When sharing, highlight:

1. **Problem:** Citizens struggle to access government schemes
2. **Solution:** Voice-first, multilingual AI assistant
3. **Demo:**
   - Select language (Hindi/English)
   - Ask about schemes
   - Check eligibility
   - Get step-by-step guidance
4. **Tech:** React + Vite + Groq AI (free tier)

---

## 📊 Deployment Comparison

| Platform | Setup Time | Backend Support | Free Tier | Best For |
|----------|-----------|-----------------|-----------|----------|
| **Vercel** | 5 min | Serverless only | Yes | Quick demos |
| **Netlify** | 5 min | Serverless only | Yes | Static sites |
| **Railway** | 10 min | Full support | Yes (limited) | Full-stack apps |
| **Render** | 15 min | Full support | Yes | Production apps |
| **Ngrok** | 1 min | Full support | Yes | Local demos |

---

## 🐛 Troubleshooting

**"API key not found" error:**
- Add `GROQ_API_KEY` in platform's environment variables
- Redeploy after adding

**"Failed to fetch" error:**
- Check if backend is deployed (for Render/Railway)
- Verify CORS settings
- Check browser console for errors

**Build fails on Vercel:**
- Already fixed! Check `vite.config.js` and `vercel.json`
- Run `npm run build` locally to test

---

## 🎉 Recommended: Vercel + GitHub

**Best workflow:**
1. Push code to GitHub
2. Connect GitHub to Vercel
3. Auto-deploy on every push
4. Share permanent URL

```bash
# One-time setup
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_URL
git push -u origin main

# Then on Vercel dashboard:
# Import Project → Select GitHub repo → Deploy
```

---

## 📧 Share Package

Create a shareable package:

```bash
# Create deployment-ready package
npm run build
zip -r genseva-demo.zip dist/ package.json vercel.json
```

Include:
- `dist/` folder (built app)
- `package.json`
- `vercel.json`
- `DEPLOYMENT.md`
- `.env.example` (without actual keys)

---

## 🌐 Custom Domain (Optional)

After deploying to Vercel/Netlify:
1. Buy domain from Namecheap/GoDaddy
2. Add domain in platform settings
3. Update DNS records
4. Get `https://genseva.ai` instead of `https://genseva-ai.vercel.app`

---

**Need help?** Check DEPLOYMENT.md for detailed technical setup.