# Haiku Generator Setup

This feature adds a fun interactive button that generates AI-powered haikus about your profile using Claude API.

## 🎋 What it does

- Adds a subtle "Bored? Generate a haiku about my profile 🎋" button after your profile section
- Calls Claude Haiku model to generate personalized poetry based on your profile
- Displays the result in an elegant, styled format
- Falls back to pre-written haikus if the API fails

## 🚀 Setup Options

### Option 1: Netlify (Recommended)

1. **Deploy to Netlify**
   ```bash
   # Your site is already set up for Netlify Functions
   netlify deploy
   ```

2. **Set Environment Variable**
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = your Claude API key
   - Get your API key from: https://console.anthropic.com/

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Vercel

1. **Deploy to Vercel**
   ```bash
   vercel
   ```

2. **Set Environment Variable**
   ```bash
   vercel env add ANTHROPIC_API_KEY
   ```

3. **Update API endpoint** in `content/_index.md`:
   ```javascript
   const response = await fetch('/api/generate-haiku', {
   ```

### Option 3: Local Development

1. **Install dependencies**
   ```bash
   npm install netlify-cli
   ```

2. **Create `.env` file**
   ```bash
   cp .env.example .env
   # Add your ANTHROPIC_API_KEY to .env
   ```

3. **Test locally**
   ```bash
   netlify dev
   ```

## 🎨 Styling

The haiku appears in a clean, centered design with:
- Georgia serif font for elegance
- Italic styling
- Left border accent in your theme color
- Smooth loading animation
- Responsive design

## 🔧 Customization

### Change the button text
Edit line 99 in `content/_index.md`:
```html
<button id="haiku-btn" class="haiku-button">Your custom text here 🎋</button>
```

### Modify fallback haikus
Edit the `haikus` array in the JavaScript section (lines 310-316) to add your own backup haikus.

### Adjust styling
Modify the CSS in `assets/css/extended/custom.css` starting at line 190.

## 💡 How it works

1. **Button click** → Extracts your profile info (name, role, interests, etc.)
2. **API call** → Sends context to Claude Haiku via secure backend
3. **Response** → Displays generated haiku with smooth animation
4. **Fallback** → Shows pre-written haikus if API fails

## 🔒 Security

- API key is safely stored in environment variables
- Backend function handles all API communication
- Frontend never exposes sensitive credentials
- CORS properly configured for your domain

## 📝 Notes

- The feature works immediately with fallback haikus
- Real AI generation requires API key setup
- Very lightweight - adds ~2KB to page size
- Mobile-friendly responsive design
- Disabled state prevents multiple simultaneous requests

Ready to add some poetic AI magic to your profile! 🎋✨