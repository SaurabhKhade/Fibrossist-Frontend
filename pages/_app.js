import "../styles/globals.scss";

import Header from "../components/header/Header";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Head from "../components/Head";
// import { useEffect } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head />
      {/*<Script src="/js/sw.installer.js" />*/}
      {router.pathname !== "/login" &&
        router.pathname !== "/signup" &&
        router.pathname !== "/recover" && <Header />}
      <div className="page">
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  );
}

export default MyApp;
