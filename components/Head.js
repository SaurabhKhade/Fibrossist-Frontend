import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Web Manifest */}
      <link rel="manifest" href="/manifest.webmanifest" />

      {/* Theame Color */}
      <meta name="apple-mobile-web-app-status-bar" content="#1976d2" />
      <meta name="theme-color" content="#1976d2" />

      {/* IOS Icons */}
      <link rel="apple-touch-icon" href="/assets/icon/icon-512x512.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-384x384.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-256x256.png" />
      <link rel="apple-touch-icon" href="/assets/icon/icon-192x192.png" />

      {/* Favicons */}
      <link
        rel="shortcut icon"
        href="/assets/icon/icon-512x512.png"
        type="image/png"
      />
      <link rel="icon" type="image/x-icon" href="/assets/icon/favicon.ico" />

      {/* Details */}
      <meta
        name="author"
        content="Saurabh Khade, Ravindra Kupatkar, Malhar Dhaygude and Mahesh Kesgire"
      />
      <meta
        name="description"
        content="An AI based Pulmonary Fibrosis Detection System using the X-Ray scanned copy."
      />
      <meta
        name="keywords"
        content="saurabh, khade, ravindra, kupatkar, malhar, dhaygude, mahesh, kesgire, fibrossist, ai, deep, learning, healthcare, x-ray, detection, system, web, app, react, next, flask, aws"
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:image" content="/assets/icon/icon-512x512.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Fibrossist Logo" />
      <meta property="og:type" content="Pulmonary Fibrosis Detection System" />
      <meta property="og:title" content="Fibrossit" />
      <meta
        property="og:description"
        content="An AI based Pulmonary Fibrosis Detection System using the X-Ray scanned copy."
      />
      <meta property="og:url" content="https://fibrossist.vercel.app/" />
    </Head>
  );
}
