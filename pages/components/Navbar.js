import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import ThemeLanguageControls from "./ThemeLanguageControls";

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "projects", key: "projects" },
  { id: "resume", key: "resume" },
  { id: "contact", key: "contact" },
];

export default function Navbar() {
  const { t } = useAppContext();
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm text-ink">
          <span className="text-lime">g.</span>tg
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`font-mono text-xs tracking-wide transition-colors ${
                active === id ? "text-lime" : "text-muted hover:text-ink"
              }`}
            >
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeLanguageControls />
          <button
            className="text-ink md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-line bg-canvas px-6 py-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map(({ id, key }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`font-mono text-sm ${active === id ? "text-lime" : "text-muted"}`}
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
