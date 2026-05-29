import { Link } from "react-router";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[color:var(--plum-ink)] text-[color:var(--ivory)] overflow-hidden">
      <div className="blob" style={{ width: 520, height: 520, top: -160, right: -120, background: "var(--mauve)" }} />
      <div className="blob" style={{ width: 420, height: 420, bottom: -160, left: -120, background: "var(--sage)", opacity: 0.35 }} />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-12 lg:gap-16">
          <div>
            <p className="eyebrow text-[color:var(--mauve-soft)]">A Child&apos;s Perspective</p>
            <h2 className="font-display text-[2.4rem] sm:text-[3rem] leading-[1.04] mt-3 text-[color:var(--ivory)]">
              Steady,{" "}
              <span className="italic-serif text-[color:var(--mauve-soft)]">tender</span>
              <br />
              support for the
              <br />
              hardest days.
            </h2>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--ivory mt-8"
            >
              Request an appointment
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-[color:var(--mauve-soft)] mb-5">Explore</h3>
            <ul className="space-y-3 text-[0.98rem]">
              <li><Link to="/" className="hover:text-[color:var(--mauve-soft)] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[color:var(--mauve-soft)] transition-colors">About Jenny &amp; Courtney</Link></li>
              <li><Link to="/services" className="hover:text-[color:var(--mauve-soft)] transition-colors">Services &amp; Fees</Link></li>
              <li><Link to="/contact" className="hover:text-[color:var(--mauve-soft)] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-[color:var(--mauve-soft)] mb-5">Get in touch</h3>
            <ul className="space-y-4 text-[0.98rem]">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 text-[color:var(--mauve-soft)]" aria-hidden />
                <a
                  href="mailto:info@achildsperspective.com"
                  className="hover:text-[color:var(--mauve-soft)] transition-colors"
                >
                  info@achildsperspective.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-[color:var(--mauve-soft)]" aria-hidden />
                <span className="text-[color:var(--ivory)]/90">
                  Telehealth across Colorado
                  <br />
                  <span className="text-[color:var(--ivory)]/60">Serving children, teens &amp; families</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[0.82rem] text-[color:var(--ivory)]/60">
          <p>© {new Date().getFullYear()} A Child&apos;s Perspective. All rights reserved.</p>
          <p className="italic-serif text-[color:var(--mauve-soft)]">
            Made with care, for families navigating medical experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
