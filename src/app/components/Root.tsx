import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useRef } from "react";

export function Root() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Focus management: move focus to main content on route change
  useEffect(() => {
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[9999] focus:top-4 focus:left-4 focus:px-6 focus:py-3 focus:rounded-full focus:bg-[color:var(--plum)] focus:text-[color:var(--ivory)] focus:font-medium focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Header />

      <main
        id="main-content"
        className="flex-1"
        ref={mainRef}
        tabIndex={-1}
        style={{ outline: "none" }}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
