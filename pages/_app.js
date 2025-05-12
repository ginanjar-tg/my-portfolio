import "../styles/globals.css";
import { useEffect } from "react";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize tw-elements
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
    
    // Check for dark mode preference on initial load
    // This helps prevent flash of unstyled content
    if (typeof window !== 'undefined') {
      const darkModePreference = localStorage.getItem('darkMode');
      if (darkModePreference === 'true') {
        document.documentElement.classList.add('dark');
      } else if (darkModePreference === null) {
        // Check system preference if no saved preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('darkMode', 'true');
        }
      }
    }
  }, []);

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
