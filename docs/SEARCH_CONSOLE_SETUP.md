# Google Search Console setup

Prep tasks for enrolling **a-childs-perspective.com** in Google Search
Console. These steps are technical only — no fake tokens or account
setup have been performed on the client's behalf.

---

## Verified technical prerequisites (already done in code)

- Production canonical origin: `https://a-childs-perspective.com`
- Sitemap: `https://a-childs-perspective.com/sitemap.xml`
- Robots: `https://a-childs-perspective.com/robots.txt`
- Every public route sets its own `<title>`, `<meta name="description">`,
  and `<link rel="canonical">` via the `usePageMeta` hook (see
  [`src/app/utils/usePageMeta.ts`](../src/app/utils/usePageMeta.ts)).
- The 404 route sets `<meta name="robots" content="noindex, follow">`
  while it is visible.
- No `noindex` directives are emitted from any indexable route.

---

## SPA / HTTP-status caveat (AWS Amplify)

The site is a client-rendered Vite + React Router SPA. On AWS Amplify
the SPA rewrite serves `index.html` (HTTP **200**) for every path,
including truly non-existent URLs, and the client-side `NotFound`
component then renders. This is standard behavior for SPAs.

Impact for Search Console:

- Google's rendering pipeline executes JavaScript, so it will see the
  `<meta name="robots" content="noindex, follow">` we emit on unknown
  paths and will decline to index them.
- However, Search Console's URL Inspection tool will report the URL
  status as `200` rather than `404`. This is expected and safe.
- If a "soft 404" report ever appears in Search Console for a page that
  should exist, verify the route is present in
  [`src/app/routes.tsx`](../src/app/routes.tsx) and in
  [`public/sitemap.xml`](../public/sitemap.xml).

---

## Manual steps for the account owner

1. **Add a Domain property** for `a-childs-perspective.com` in Google
   Search Console. A Domain property covers `www` and non-`www`, plus
   `http` and `https`.
2. **Copy the DNS TXT verification value** shown by Google. Do **not**
   commit this token to the repository — it is unique per account.
3. **Add the TXT record** to the active DNS provider for
   `a-childs-perspective.com`. If the domain is registered through
   Route 53 (typical for AWS setups), add the TXT record in the hosted
   zone. Propagation is usually a few minutes.
4. **Verify the property** in Search Console.
5. **Submit the sitemap URL:**
   `https://a-childs-perspective.com/sitemap.xml`
6. **Request indexing** for the primary pages:
   - `https://a-childs-perspective.com/`
   - `https://a-childs-perspective.com/about`
   - `https://a-childs-perspective.com/services`
   - `https://a-childs-perspective.com/contact`
   - `https://a-childs-perspective.com/book`
7. **Add the client** (owner of the practice) as a permanent **Owner**
   of the property under _Settings → Users and permissions_.
8. **Keep the developer** as an additional user (Owner or Full user is
   fine) rather than the sole owner, so the property is not orphaned if
   the developer relationship ends.

---

## Post-verification smoke tests

Run these once the DNS records are in place:

- `curl -sI https://a-childs-perspective.com/robots.txt` → **200**
  with `Content-Type: text/plain`.
- `curl -sI https://a-childs-perspective.com/sitemap.xml` → **200**
  with `Content-Type: application/xml` or `text/xml`.
- `curl -sI https://a-childs-perspective.com/og-image.png` → **200**
  with `Content-Type: image/png`.
- `curl -sI https://www.a-childs-perspective.com/` → **301** or **308**
  redirect to the non-`www` (or vice versa, consistent with the
  canonical). No redirect loops.
- Visit
  [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)
  and
  [Twitter Card Validator (X)](https://cards-dev.twitter.com/validator)
  with the production URL — confirm the OG image and description
  render correctly.

---

## What is intentionally not automated

- Verification tokens (require Google account access).
- DNS record creation (requires DNS provider access).
- Ownership transfers (require Google account confirmation).
