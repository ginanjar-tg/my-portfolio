import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {/* Add other custom fonts or global styles here if needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="../node_modules/tw-elements/dist/js/index.min.js" />
      </body>
    </Html>
  );
}