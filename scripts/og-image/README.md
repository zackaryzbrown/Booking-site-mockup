# OG image generator

This folder holds a source HTML page used to render the site's Open Graph
image (`public/og-image.png`, 2400×1260, retina 1200×630).

The image is a static asset — it is _not_ generated at build time. Rebuild
it only when the brand copy, colors, or logo change:

1. Copy `../../public/Logo.png` next to this `index.html` (the HTML
   references `./Logo.png` locally).
2. Open `scripts/og-image/index.html` in Chrome at exactly 1200×630
   (DevTools → device toolbar → responsive → 1200×630).
3. Screenshot the viewport and save as `public/og-image.png`.
4. Remove the copied `Logo.png` from this folder (do not commit it).

Do **not** deploy `scripts/og-image/` — it is a dev-only artifact and is
excluded from the Vite build because it lives outside `public/` and
`src/`.
