# DiskToneWeb

Official technical support page for **DiskTone** iOS app, used for App Store review and user support.

## Contents

- `index.html` — Support landing page (English)
- `privacy.html` — Privacy Policy (English)
- `assets/app-icon.png` — App icon
- `assets/styles.css` — Shared styles
- `assets/i18n.js` — Language switcher (EN / 简体 / 繁體)

## Local preview

Open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deployment

Deploy as a static site to any host (GitHub Pages, Cloudflare Pages, Vercel, etc.).

Language can be shared via URL: `?lang=zh-Hans` or `?lang=zh-Hant` (English omits the parameter).

**App Store Connect:**
- **Support URL** → deployed `index.html` URL
- **Privacy Policy URL** → deployed `privacy.html` URL

**Support email:** dengcheez@gmail.com
