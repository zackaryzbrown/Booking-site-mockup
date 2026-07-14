import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
  { path: "/book", label: "Schedule" },
];

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
            aria-label="A Child's Perspective, return to home"
          >
            <img
              src={logo}
              alt=""
              role="presentation"
              className="w-14 h-14 object-contain transition-transform group-hover:scale-105"
            />
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
            aria-label="Primary navigation"
          >
            {navItems.slice(0, -1).map((item) => {
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
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 w-1.5 h-1.5 rounded-full bg-[color:var(--mauve)]"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/book"
              className={`pill-btn pill-btn--primary text-[0.92rem] py-2.5 px-5 ml-2 ${
                isActive("/book") ? "ring-2 ring-[color:var(--mauve)]" : ""
              }`}
              aria-current={isActive("/book") ? "page" : undefined}
            >
              Schedule
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[color:var(--hairline-strong)] text-[color:var(--plum-ink)] hover:bg-[color:var(--ivory-2)] transition-colors"
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
            >
              {open ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="md:hidden pb-6 pt-2"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-3 rounded-2xl text-[1.05rem] ${
                    isActive(item.path)
                      ? "bg-white text-[color:var(--plum-ink)] font-medium"
                      : "text-[color:var(--ink-soft)] hover:bg-white/60"
                  }`}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
