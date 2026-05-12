import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#020617" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
