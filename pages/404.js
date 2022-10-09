import { useEffect, useRef } from "react";
import Script from "next/script";
import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
        />
        <link rel="stylesheet" type="text/css" href="/css/main.css" />
      </Head>
      <div id="board" className="container">
        <div className="copy border">
          <h3 className="style-404">404</h3>
          <p className="style-404">OOPS! PAGE NOT FOUND</p>
        </div>
        <Script src="/js/main.js" strategy="afterInteractive" />
      </div>
    </>
  );
}
