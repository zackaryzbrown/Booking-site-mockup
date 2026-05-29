import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";

export function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="blob" style={{ width: 460, height: 460, top: -120, left: -120, background: "var(--mauve-soft)" }} />
      <div className="blob" style={{ width: 360, height: 360, bottom: -120, right: -120, background: "var(--sage-soft)", opacity: 0.55 }} />

      <div className="relative text-center px-6 max-w-[640px]">
        <p
          className="font-display italic text-[7rem] sm:text-[10rem] leading-none text-[color:var(--plum)]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
        >
          404
        </p>
        <h1 className="font-display mt-4 text-[2rem] sm:text-[2.6rem]">
          This page seems to have <span className="italic-serif">wandered off.</span>
        </h1>
        <p className="mt-5 text-[color:var(--ink-soft)]">
          Let&apos;s get you back to somewhere familiar.
        </p>
        <Link to="/" className="pill-btn pill-btn--primary mt-8">
          Take me home
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
