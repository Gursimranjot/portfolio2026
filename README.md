# Portfolio — React + Netlify

A designer/developer portfolio with GitHub-powered articles, theme switching, and a CMS-like config system.

## Quick Start

```bash
npm install
npm run dev
```

## Customise Your Content

All content lives in **one file**: `src/data/config.js`

- Edit `siteConfig` → name, bio, links, skills, stats
- Edit `projects` array → add/remove work
- Edit `articles` array → register new articles

## Publishing Articles (GitHub as CMS)

1. Create a GitHub repo with an `articles/` folder
2. Open `src/pages/ArticleDetail.jsx` and set `GITHUB_RAW_BASE` to your repo URL
3. Write `.md` files in `articles/` — filename must match the `slug` in config
4. Push → article is live instantly, no rebuild needed

During local dev, articles are served from `public/articles/`.

## Themes

Three built-in themes: **Dark** (◐), **Light** (○), **Neon** (●)

Add your own in `src/index.css` and `src/hooks/useTheme.jsx`.

## Deploy to Netlify

1. Push to GitHub
2. Connect repo in Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

`netlify.toml` handles SPA routing automatically.

## Mobile Menu

The hamburger menu appears automatically on screens ≤ 768px. It slides in from the right with staggered link animations and closes on navigation or back-tap.

## Selling to Clients

Each client gets their own `config.js` content + GitHub repo for articles + Netlify deploy. The codebase stays the same. Reusable in under an hour per client.
