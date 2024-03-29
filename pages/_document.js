import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

// import 'tw-elements';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="../node_modules/tw-elements/dist/js/index.min.js" />
      </body>
    </Html>
  );
}
