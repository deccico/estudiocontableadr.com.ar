# estudiocontableadr.com.ar

Website for Estudio Contable ADR: a single static page in Spanish (es-AR) with no build step and no dependencies.
It replaces https://sites.google.com/view/estudiocontableadr.

## Structure

```
index.html              The whole site: copy, meta/Open Graph tags, schema.org JSON-LD, inline SVG icons
404.html                Not-found page (served automatically by Cloudflare Pages / GitHub Pages)
assets/css/styles.css   All styles; colors and fonts are tokens at the top (:root)
assets/js/main.js       Mobile menu, header border on scroll, floating WhatsApp button, footer year
assets/fonts/           Self-hosted Newsreader + IBM Plex Sans (SIL OFL 1.1, licenses alongside)
assets/img/             logo.svg, favicon.svg + PNG fallbacks, og-image.png (link preview, 1200x630)
robots.txt, sitemap.xml
```

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Editing

- **Text:** edit `index.html` directly. Contact links (WhatsApp, email, form, Instagram) appear several times; search for the URL to change them all.
- **Colors and fonts:** change the CSS variables at the top of `assets/css/styles.css`.
- **Link preview image:** `assets/img/og-image.png`. If you change the name or tagline, regenerate it (1200x630 PNG).
- **Domain:** `https://estudiocontableadr.com.ar/` is hard-coded in the canonical, Open Graph and JSON-LD tags in `index.html`, and in `robots.txt` and `sitemap.xml`.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. In Cloudflare Pages, create a project from the repo. Set no build command and `/` as the output directory.
3. Add `estudiocontableadr.com.ar` as a custom domain. For a `.com.ar` domain, delegate its nameservers to Cloudflare at NIC Argentina first.
4. Optional: use Cloudflare Email Routing to forward `contacto@estudiocontableadr.com.ar` to the existing Gmail inbox.

GitHub Pages also works: serve from the repo root and add a `CNAME` file containing the domain.

## After launch

- Submit `sitemap.xml` in Google Search Console.
- Create or claim the Google Business Profile (the Google Maps listing) and link it to the site.
- Point the Instagram bio and WhatsApp Business profile to the new URL.
- Replace the Google Sites page with a link to the new site, or unpublish it.
