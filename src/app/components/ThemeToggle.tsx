import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const currentTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[color:var(--hairline-strong)] text-[color:var(--plum-ink)] hover:bg-[color:var(--ivory-2)] transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5" aria-hidden="true" />
      ) : (
        <Moon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
}
