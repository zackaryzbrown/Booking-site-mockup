import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
];

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--ivory)]/85 border-b border-[color:var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="A Child's Perspective, home"
          >
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[color:var(--plum)] text-[color:var(--ivory)] font-display text-[1.05rem] italic shadow-[0_6px_16px_-6px_rgba(74,30,58,0.6)] transition-transform group-hover:rotate-[-6deg]"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
              }}
            >
              acp
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.15rem] text-[color:var(--plum-ink)] tracking-tight">
                A Child&apos;s Perspective
              </span>
              <span className="eyebrow text-[0.62rem] mt-1">
                Child Life Support · Colorado
              </span>
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-[0.95rem] rounded-full transition-colors ${
                    active
                      ? "text-[color:var(--plum-ink)]"
                      : "text-[color:var(--ink-soft)] hover:text-[color:var(--plum-ink)]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[color:var(--mauve)]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn pill-btn--primary text-[0.92rem] py-3 px-5"
            >
              Request an appointment
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[color:var(--hairline-strong)] text-[color:var(--plum-ink)]"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div id="mobile-nav" className="md:hidden pb-6 pt-2">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-3 rounded-2xl text-[1.05rem] ${
                    isActive(item.path)
                      ? "bg-white text-[color:var(--plum-ink)]"
                      : "text-[color:var(--ink-soft)] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--primary mt-3 self-start"
              >
                Request an appointment
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
