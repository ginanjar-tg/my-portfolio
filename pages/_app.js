import "../styles/globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { AppProvider } from "../context/AppContext";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}

export default MyApp;
