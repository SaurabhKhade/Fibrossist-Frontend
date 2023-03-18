import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta
        name="description"
        content="An AI based Fibrossist Detection System using the X-Ray scanned copy."
      />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="apple-mobile-web-app-status-bar" content="#1976d2" />
      <meta name="theme-color" content="#1976d2" />

      <link rel="apple-touch-icon" href="/assets/icon/icon-512x512.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-384x384.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-256x256.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-192x192.png" />
      <meta name="apple-mobile-web-app-status-bar" content="#1976d2" />
      <link
        rel="shortcut icon"
        href="/assets/icon/icon-512x512.png"
        type="image/png"
      />
      <link rel="icon" type="image/x-icon" href="/assets/icon/favicon.ico" />
    </Head>
  );
}
