# Production readiness checklist

Tracking the pre-launch hardening pass for **a-childs-perspective.com**.
Everything below the "Waiting for client approval" section requires the
client's sign-off before it is safe to build.

---

## Completed automatically (this branch: `launch-hardening`)

### Visual placeholder removal

- [x] Removed the temporary `J` / `C` initial-only placeholder cards on
      the Home page and replaced them with the approved Jenny and
      Courtney headshots in a subtly overlapping editorial composition.
- [x] Fixed factual mismatch on Home: Courtney's credentials now read
      `CCLS, M.Ed. · Co-founder` (matching the About / Book pages).
- [x] No `TODO` / `FIXME` / lorem-ipsum / `href="#"` placeholder links
      remain in the production code. Root-level `TODO.md` is a design
      task list and is not shipped to the site.

### Homepage hero

- [x] Kept the approved plum hero card, headline, supporting copy, and
      "practice philosophy" quote.
- [x] Featured the approved transparent kite `Logo.png` as an intact
      focal element inside the hero visual (no distortion, no
      recoloring, no internal artwork changes).
- [x] Added a restrained dashed guide-path echoing the kite string as a
      separate decorative element (not part of the logo artwork).
- [x] No AI-generated people, stock photos, fake families, hospital
      imagery, medical devices, or new claims added.

### SEO infrastructure

- [x] `public/robots.txt` allows all public pages, blocks the service
      worker and PWA manifest URLs, points at the production sitemap.
- [x] `public/sitemap.xml` with the five public routes and the
      production origin.
- [x] `usePageMeta` hook (`src/app/utils/usePageMeta.ts`) sets unique
      `<title>`, `<meta name="description">`, and `<link rel="canonical">`
      per route, plus Open Graph / Twitter title + description updates.
- [x] `index.html` carries brand-safe defaults (title, description,
      canonical, OG, Twitter card, theme color, apple-touch-icon,
      512×512 icon).

### 404 page

- [x] Branded `NotFound` component with H1 "This page couldn't be
      found." (client-approved phrasing), Home + Request-an-Appointment + Contact links, restrained kite logo, mobile layout, and a
      transient `<meta name="robots" content="noindex, follow">`.

### Open Graph image

- [x] `public/og-image.png` — 2400×1260 (retina 1.9:1), ivory background,
      plum typography, approved kite logo, brand name and
      "Child Life Support · Colorado" locale line. No unapproved
      taglines, no photographs.
- [x] Twitter `summary_large_image` card metadata added.
- [x] Source used to regenerate the image lives in
      [`scripts/og-image/`](../scripts/og-image/README.md).

### Favicon / app icons

- [x] `public/Logo.png` shipped (the previous `/Logo.png` reference in
      `index.html` and the PWA manifest was pointing at a non-existent
      file — this is now fixed).
- [x] `<link rel="icon" type="image/png" sizes="512x512" href="/Logo.png">`
      added to `index.html`.
- [x] `apple-touch-icon` continues to reference `/Logo.png`.
- [x] PWA manifest now declares `purpose: "any"` and
      `purpose: "maskable"` separately to satisfy Chrome's stricter
      maskable-icon check.

### Accessibility

- [x] Existing skip-link, keyboard-operable mobile nav, aria-current
      indicators, and route-change focus management preserved.
- [x] `NotFound` uses semantic `<h1>` with an `aria-labelledby`
      referencing it, and both large decorative blobs and the logo are
      marked `aria-hidden` / `role="presentation"`.
- [x] Provider portrait cards on Home now use meaningful alt text
      (`"Jenny, Certified Child Life Specialist"` /
      `"Courtney, Certified Child Life Specialist"`) rather than
      placeholder text.

### Responsive

- [x] Provider portrait cards on Home constrain to a `max-w-[520px]`
      container on small screens so they don't dominate the layout.
- [x] `NotFound` renders correctly at 320 px and above.
- [x] All existing responsive patterns preserved.

### Performance

- [x] `src/assets/courtney.jpg` re-encoded from 6720×4480 / 7.3 MB down
      to 1600×1066 / 319 KB (~23× reduction) at sips quality 82. Jenny's
      headshot was already reasonable (548 KB / 1083×1627) and is
      unchanged.
- [x] Provider images continue to use `ImageWithFallback` with explicit
      `width` / `height` and `loading="lazy"` (Home is below the fold on
      mobile because the hero visual is hidden on `< lg`).
- [x] The kite logo in the Home hero has explicit `width` / `height`
      attributes to prevent CLS.

---

## Manual technical checks (before launch)

- [ ] Test the contact form end-to-end (currently a client-only "thank
      you" toast — the client has not yet approved an email delivery
      backend).
- [ ] Test both SimplePractice provider URLs in an incognito window:
  - Jenny: `https://achildsperspective-jm.clientsecure.me/`
  - Courtney: `https://achildsperspective-cb.clientsecure.me`
- [ ] DNS: verify `www.a-childs-perspective.com` and
      `a-childs-perspective.com` redirect consistently (no loops), and
      that `http://` upgrades to `https://`.
- [ ] Deploy `launch-hardening` to an Amplify preview branch and confirm
      the preview does **not** claim `a-childs-perspective.com` as
      canonical — because canonicals are emitted from constants, the
      preview will _also_ emit the production canonical, which is
      correct for a plain preview but should be reviewed before adding
      any preview-only content.
- [ ] Confirm email delivery to `help@achildsperspective.com` is
      monitored (mailbox exists, replies are read, etc.).
- [ ] Verify Search Console setup per
      [`docs/SEARCH_CONSOLE_SETUP.md`](./SEARCH_CONSOLE_SETUP.md).
- [ ] Verify social preview via Meta Sharing Debugger + Twitter Card
      Validator.
- [ ] Confirm AWS Amplify has a SPA rewrite rule
      (`</^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|xml|json|webmanifest|svg|webp)$)([^.]+$)/>`
      to `/index.html` with HTTP 200) so client routes work on refresh
      — this is standard for any React Router SPA on Amplify.
- [ ] Confirm AWS Amplify serves `robots.txt`, `sitemap.xml`,
      `og-image.png`, and `Logo.png` from `/` (they are shipped from
      `public/` and copied to `dist/` by Vite — verify in the deployed
      build output).

---

## AWS Amplify environment changes

None required for this branch. **No secrets or environment variables
were introduced.** The SimplePractice booking URLs, the support email
address, and the site origin are non-secret and remain hard-coded (they
already were before this branch).

If the client later approves an email-delivery integration or analytics,
those will need Amplify environment variables and are intentionally not
scaffolded here.

---

## Waiting for client approval (do NOT ship until confirmed)

Business / policy items — client has not yet approved:

- [ ] **Pricing** — the Services page fee table (`$85` individual,
      `$45` group, "Free" intro call) is currently displayed but has
      not been re-confirmed for launch. Leave as-is only if the client
      has re-approved these exact prices.
- [ ] **Session durations** — currently 50-minute individual sessions
      and 1-hour groups.
- [ ] **Insurance language** — Services page currently states "No
      insurance billing currently, payment is collected at time of
      service through our secure client portal." Client to re-confirm.
- [ ] **Cancellation / no-show policy** — not currently on the site.
- [ ] **Telehealth coverage claims** — Home, About, Contact, and Footer
      all say "Telehealth across Colorado" / "Serving Colorado families."
      Confirm this is the exact geographic claim the client wants.
- [ ] **In-person availability** — About page says "In-person by
      arrangement" and "partner with local providers for select
      in-person work." Confirm.
- [ ] **Provider service differences** — the Book page currently shows
      two providers as effectively interchangeable with a "Not sure who
      to choose? Contact us" fallback. Confirm this is intended.
- [ ] **Service-first vs provider-first booking** — currently
      provider-first (`/book` lists providers, each linking to their own
      SimplePractice URL). Confirm.
- [ ] **Emergency / crisis language** — the contact form's
      confirmation copy currently says "If your family needs urgent
      medical attention, please call 911 or contact your medical
      provider." Confirm wording is acceptable.
- [ ] **Licensing disclosures** — Jenny is described as a "Licensed
      Professional Counselor (Ohio)" on About. Confirm this is safe to
      publish given the practice operates in Colorado.

Legal / compliance items — client has not yet approved:

- [ ] Privacy Policy (page not yet created — intentionally not stubbed).
- [ ] Terms of Use (page not yet created — intentionally not stubbed).
- [ ] Accessibility legal statement (not yet created).
- [ ] Notice of Privacy Practices / HIPAA disclosures. The site
      currently uses the phrases "HIPAA-compliant client portal" and
      "HIPAA-secure" — the client should verify these claims match the
      SimplePractice tier they are on.
- [ ] Testimonials — none currently on the site (kept intentionally
      absent until client approval).

Marketing / analytics — client has not yet approved:

- [ ] Google Analytics, GA4, or any analytics.
- [ ] Meta / Google Ads pixels.
- [ ] Cookie consent banner (not currently required because no
      analytics or tracking is loaded).
- [ ] Structured data (`Organization`, `MedicalBusiness`, `FAQPage`,
      etc.) — intentionally not added because it would encode
      unconfirmed business details.
- [ ] New clinical or medical claims of any kind.

---

## Known residual risks

- The site is a client-side SPA. Non-Google/Bing crawlers that do not
  execute JavaScript will only see the defaults in `index.html`. This is
  fine for the current small set of pages and Google's rendering
  pipeline, but if the client later needs richer social previews per
  page (e.g. a distinct OG image per service), the recommended path is
  to introduce a build-time prerender (e.g. `vite-plugin-ssr` or a
  simple static prerender script). Not urgent for launch.
- The Vite PWA workbox `runtimeCaching` includes a stale pattern
  `/^https:\/\/localhost:\d+\//` that only matches local dev; harmless
  in production but should be updated to the production origin when the
  client wants offline caching of navigational responses.
- The temporary Vite / Figma-Make banner in `postcss.config.mjs`,
  `ATTRIBUTIONS.md`, and the shadcn UI folder are intentionally left
  untouched.

---

_Last updated by the `launch-hardening` branch. Do not deploy without
explicit client approval._
