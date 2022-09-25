import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {


useEffect(() => {
const use = async () => {
  (await import('tw-elements')).default;
    };
    use();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
