import { useEffect } from "react";

/**
 * Production origin used for canonical URLs and Open Graph metadata.
 * Kept in one place so preview/local builds don't accidentally emit
 * the wrong canonical.
 */
export const SITE_ORIGIN = "https://a-childs-perspective.com";
export const SITE_NAME = "A Child's Perspective";

export type PageMeta = {
  /** Page-specific title, will be suffixed with the site name. */
  title: string;
  /** Meta description (~150-160 chars). */
  description: string;
  /**
   * Path portion of the canonical URL, e.g. "/about". Defaults to the
   * current location.pathname when omitted.
   */
  path?: string;
};

function upsertMeta(
  selector: string,
  create: () => HTMLElement,
  apply: (el: HTMLElement) => void,
) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
}

/**
 * Client-side per-route metadata updater.
 *
 * This is an SPA (Vite + React Router). Crawlers that execute JavaScript
 * (Googlebot, Bingbot) will see the updated tags. The `index.html`
 * defaults provide the initial paint metadata for social scrapers and
 * non-JS crawlers on the home route.
 */
export function usePageMeta({ title, description, path }: PageMeta) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    const canonicalPath = path ?? window.location.pathname;
    const canonicalUrl = `${SITE_ORIGIN}${canonicalPath}`;

    document.title = fullTitle;

    // <meta name="description">
    upsertMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
      (m) => m.setAttribute("content", description),
    );

    // <link rel="canonical">
    upsertMeta(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement("link");
        l.setAttribute("rel", "canonical");
        return l;
      },
      (l) => l.setAttribute("href", canonicalUrl),
    );

    // Open Graph
    const ogTags: Array<[string, string]> = [
      ["og:title", fullTitle],
      ["og:description", description],
      ["og:url", canonicalUrl],
    ];
    for (const [property, content] of ogTags) {
      upsertMeta(
        `meta[property="${property}"]`,
        () => {
          const m = document.createElement("meta");
          m.setAttribute("property", property);
          return m;
        },
        (m) => m.setAttribute("content", content),
      );
    }

    // Twitter
    const twTags: Array<[string, string]> = [
      ["twitter:title", fullTitle],
      ["twitter:description", description],
    ];
    for (const [name, content] of twTags) {
      upsertMeta(
        `meta[name="${name}"]`,
        () => {
          const m = document.createElement("meta");
          m.setAttribute("name", name);
          return m;
        },
        (m) => m.setAttribute("content", content),
      );
    }
  }, [title, description, path]);
}
