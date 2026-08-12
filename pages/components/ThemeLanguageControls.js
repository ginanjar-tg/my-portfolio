import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const languages = [
  { code: "en", name: "English" },
  { code: "id", name: "Indonesia" },
  { code: "zh", name: "中文 (简体)" },
];

export default function ThemeLanguageControls() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, changeLanguage } = useAppContext();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".lang-switcher")) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const label = mounted ? language.toUpperCase() : "EN";

  return (
    <div className="lang-switcher relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 font-mono text-xs text-ink transition-colors hover:border-lime/60"
        aria-label="Change language"
        aria-expanded={open}
      >
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-lg border border-line bg-surface shadow-xl">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setOpen(false);
              }}
              className={`block w-full px-4 py-2 text-left font-mono text-xs transition-colors ${
                language === lang.code
                  ? "bg-lime/10 text-lime"
                  : "text-muted hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
