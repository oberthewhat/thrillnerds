# ThrillNerds — React Portfolio Site

Built with Vite + React + Tailwind CSS. Hosted on Netlify via GitHub.

---

## Local Development (Windows)

### First time setup

Make sure you have [Node.js](https://nodejs.org) installed (LTS version).
Open a terminal in the project folder (or use VS Code's built-in terminal):

```bash
npm install
npm run dev
```

Site runs at **http://localhost:5173** and hot-reloads on save.

### Daily workflow

```bash
npm run dev       # start local server
```

Make changes in VS Code → browser updates instantly → push to GitHub → Netlify deploys automatically.

---

## Deploying to Netlify

Netlify reads `netlify.toml` and runs `npm run build` automatically on every push to `main`.

**First deploy:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. New site → Import from Git → GitHub → select your repo
3. Build command: `npm run build` (auto-detected from netlify.toml)
4. Publish directory: `dist` (auto-detected)
5. Deploy

Every `git push` after that deploys automatically.

---

## Things to update

### YouTube video ID
In `src/sections/Feeds.jsx`, line 2:
```js
const YOUTUBE_VIDEO_ID = 'VIDEO_ID'
```
Replace `VIDEO_ID` with the ID from your video URL.
Example: `youtube.com/watch?v=dQw4w9WgXcQ` → use `dQw4w9WgXcQ`

### Adding new photos
1. Drop the new `.jpg` into `/public/images/`
2. Add an entry to the `photos` array in `src/sections/PhotoStrip.jsx`:
```js
{ src: '/images/yourphoto.jpg', caption: 'Park Name · Description' }
```

### Contact form
The form uses **Netlify Forms** — it works automatically when deployed.
Submissions appear in your Netlify dashboard under Forms.
No backend, no third-party service, no code changes needed.

---

## Project structure

```
src/
├── App.jsx                  ← assembles all sections
├── main.jsx                 ← React entry point
├── index.css                ← global styles + CSS variables
├── components/
│   ├── Nav.jsx              ← sticky nav with mobile menu
│   ├── Footer.jsx
│   └── Lightbox.jsx         ← reusable photo lightbox
└── sections/
    ├── Hero.jsx
    ├── Feeds.jsx            ← YouTube, Spotify, Instagram
    ├── PhotoStrip.jsx       ← cinematic photo strip
    ├── Podcast.jsx          ← Coaster Chronicles
    ├── Work.jsx             ← platforms & projects grid
    └── Contact.jsx          ← Netlify Forms contact

public/
└── images/                  ← all photos and logos
```
