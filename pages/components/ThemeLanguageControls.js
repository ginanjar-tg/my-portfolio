import { useState, useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

export default function ThemeLanguageControls({ className }) {
  const [mounted, setMounted] = useState(false); // hydration fix
  useEffect(() => { setMounted(true); }, []);
  const { language, darkMode, toggleDarkMode, changeLanguage, t } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".theme-language-controls")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`theme-language-controls flex items-center gap-2 ${className || ''}`}>
      {/* Language Switcher */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-1 bg-card-bg border border-card-border rounded-lg px-3 py-2 text-text-color hover:bg-bg-secondary transition-colors"
        >
          <span className="font-medium">
            {language === "en" ? "EN" : language === "id" ? "ID" : "ZH"}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-full right-0 mt-1 bg-card-bg border border-card-border rounded-lg shadow-lg overflow-hidden w-40">
            <button
              onClick={() => {
                changeLanguage("en");
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-bg-secondary transition-colors ${
                language === "en" ? "bg-primary-color/10 text-primary-color" : "text-text-color"
              }`}
            >
              English
            </button>
            <button
              onClick={() => {
                changeLanguage("id");
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-bg-secondary transition-colors ${
                language === "id" ? "bg-primary-color/10 text-primary-color" : "text-text-color"
              }`}
            >
              Indonesia
            </button>
            <button
              onClick={() => {
                changeLanguage("zh");
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-bg-secondary transition-colors ${
                language === "zh" ? "bg-primary-color/10 text-primary-color" : "text-text-color"
              }`}
            >
              中文 (简体)
            </button>
          </div>
        )}
      </div>

      {/* Dark Mode Toggle */}
      {mounted && (
        <button
          onClick={toggleDarkMode}
          className="bg-card-bg border border-card-border rounded-lg p-2 text-text-color hover:bg-bg-secondary transition-colors"
          aria-label={darkMode ? t("lightMode") : t("darkMode")}
        >
          {darkMode ? (
            // Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
