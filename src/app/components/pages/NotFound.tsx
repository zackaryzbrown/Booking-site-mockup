import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Home as HomeIcon, Mail } from "lucide-react";
import logo from "../../../assets/Logo.png";
import { SITE_NAME } from "../../utils/usePageMeta";

/**
 * Branded 404 page.
 *
 * NOTE: this is a client-rendered SPA, so unknown routes are delivered
 * with an HTTP 200 status by the static host and then this component
 * renders in-browser. See docs/SEARCH_CONSOLE_SETUP.md for the AWS
 * Amplify rewrite/HTTP-status guidance.
 */
export function NotFound() {
  useEffect(() => {
    document.title = `Page not found | ${SITE_NAME}`;

    // Signal to crawlers that this specific view should not be indexed.
    let robots = document.head.querySelector<HTMLMetaElement>(
      'meta[name="robots"]',
    );
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex, follow");

    return () => {
      // Remove the noindex directive on unmount so navigation to a real
      // page doesn't leave the tag behind.
      robots?.parentElement?.removeChild(robots);
    };
  }, []);

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-12 py-16 sm:py-20"
      aria-labelledby="notfound-heading"
    >
      <div
        className="blob"
        style={{
          width: 460,
          height: 460,
          top: -140,
          left: -140,
          background: "var(--mauve-soft)",
        }}
        aria-hidden
      />
      <div
        className="blob"
        style={{
          width: 360,
          height: 360,
          bottom: -140,
          right: -140,
          background: "var(--sage-soft)",
          opacity: 0.55,
        }}
        aria-hidden
      />

      <div className="relative text-center max-w-[620px]">
        <img
          src={logo}
          alt=""
          role="presentation"
          width={72}
          height={72}
          className="mx-auto w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90"
        />

        <p className="eyebrow mt-6">Error 404</p>

        <h1
          id="notfound-heading"
          className="font-display mt-3 text-[2rem] sm:text-[2.6rem] leading-[1.1] text-[color:var(--plum-ink)]"
        >
          This page couldn&apos;t be{" "}
          <span className="italic-serif text-[color:var(--plum)]">found.</span>
        </h1>

        <p className="mt-5 text-[color:var(--ink-soft)] text-fluid leading-relaxed">
          The page you were looking for may have moved, or the link may be
          incorrect. Let&apos;s get you back to somewhere familiar.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="pill-btn pill-btn--primary">
            <HomeIcon className="w-4 h-4" aria-hidden />
            Return home
          </Link>
          <Link to="/book" className="pill-btn pill-btn--ghost">
            Request an appointment
            <ArrowUpRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>

        <p className="mt-8 text-[0.9rem] text-[color:var(--ink-soft)]">
          Need help?{" "}
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[color:var(--plum)] hover:text-[color:var(--plum-2)] underline underline-offset-2"
          >
            <Mail className="w-3.5 h-3.5" aria-hidden />
            Contact us
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
