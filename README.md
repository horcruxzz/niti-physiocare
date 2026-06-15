# [CLINIC NAME] — Physiotherapy Website

A fast, mobile-friendly, **SEO-ready static website** for a physiotherapy clinic.
Built with plain HTML/CSS/JS — no build step, no dependencies. Just upload and go.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The main one-page website |
| `styles.css` | All styling (clean clinical teal/blue theme) |
| `script.js` | Mobile menu + footer year |
| `favicon.svg` | Browser tab icon (replace with your logo) |
| `404.html` | Friendly "page not found" page |
| `robots.txt` | Tells search engines they can index the site |
| `sitemap.xml` | Helps Google discover your page |

---

## ✅ Step 1 — Fill in your details (IMPORTANT)

The site ships with **placeholders in square brackets**. Find & replace every one of these
before going live. Search the whole project for `[` to catch them all.

| Placeholder | Replace with | Found in |
|-------------|-------------|----------|
| `[CLINIC NAME]` | Your clinic's name | all files |
| `[CITY]` | Your city | index.html, sitemap |
| `[STATE]` | Your state | index.html |
| `[STREET ADDRESS]` | Full street address | index.html |
| `[PIN CODE]` | Postal / PIN code | index.html |
| `[PHONE]` | Phone number (e.g. `+919876543210`) | index.html |
| `[WHATSAPP NUMBER]` | WhatsApp number, digits only with country code (e.g. `919876543210`) | index.html |
| `[EMAIL]` | Contact email | index.html |
| `[YOURDOMAIN].com` | Your real domain | index.html, robots.txt, sitemap.xml |
| `[LATITUDE]` / `[LONGITUDE]` | Map coordinates (from Google Maps) | index.html |
| `[X]+` | Real numbers (years, patients) | index.html (stats) |
| `[PATIENT NAME]` / `[AREA]` | Real testimonials | index.html |

> **Tip:** Open the folder in any free editor (VS Code, Notepad++) and use
> *Find & Replace in Files* to update everything at once.

### Also update:
- **Google Map** — replace the `<iframe src=...>` in the Contact section with your clinic's
  embed link: Google Maps → search your clinic → *Share* → *Embed a map* → copy the `src`.
- **Phone links** — `tel:[PHONE]` should use international format, e.g. `tel:+919876543210`.
- **Social/OG image** — add an image at `assets/og-image.jpg` (1200×630px) for nice link previews.

---

## ✅ Step 2 — Upload to GoDaddy

You have two common GoDaddy options:

### Option A — cPanel / Web Hosting (most common)
1. Log in to GoDaddy → **My Products** → your *Web Hosting* → **Manage** → **cPanel Admin**.
2. Open **File Manager**.
3. Go into the **`public_html`** folder (this is your website's root).
4. Click **Upload** and upload **all** the files in this folder
   (`index.html`, `styles.css`, `script.js`, `favicon.svg`, `404.html`, `robots.txt`, `sitemap.xml`,
   and the `assets` folder if you add one).
5. Make sure `index.html` sits **directly inside `public_html`** (not in a sub-folder).
6. Visit your domain — you're live! 🎉

### Option B — Website Builder
GoDaddy's *Website Builder* does not accept raw HTML uploads. If that's your plan,
switch to a **Web Hosting / cPanel** plan (Option A) to use this site.

> If your domain is registered with GoDaddy but hosted elsewhere, point your domain's
> DNS (A record / nameservers) to your host, then upload there instead.

---

## ✅ Step 3 — Turn on HTTPS (free)
In cPanel, GoDaddy usually provides a free SSL certificate. Ensure your site loads on
`https://` — Google ranks secure sites higher and browsers show a padlock.

---

## ✅ Step 4 — Boost your SEO (do this after launch)

1. **Google Business Profile** — create/claim it at [google.com/business](https://www.google.com/business).
   This is the single biggest driver of "physiotherapist near me" visibility. Add photos,
   hours, services and your website link.
2. **Google Search Console** — verify your site at
   [search.google.com/search-console](https://search.google.com/search-console) and submit
   `https://[YOURDOMAIN].com/sitemap.xml`.
3. **Collect Google reviews** — ask happy patients; replace the sample testimonials with real ones.
4. **Keep `og-image.jpg`** updated so shared links look professional on WhatsApp/Facebook.

### What's already built in for SEO ✅
- Descriptive `<title>` and meta description with location + key services
- Open Graph + Twitter cards for clean social sharing
- **Structured data (JSON-LD `Physiotherapy` schema)** — helps Google show your hours,
  address, phone and services in search
- Semantic HTML, mobile-responsive, fast (no heavy frameworks)
- `robots.txt` + `sitemap.xml`
- Accessible markup (skip link, ARIA labels, keyboard-friendly nav)

---

## Local preview
Just double-click `index.html`, or run a tiny local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
