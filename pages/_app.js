import "../styles/globals.scss";

import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(()=>{
  // },[])
  return (
    <>
      {router.pathname !== "/login" &&
        router.pathname !== "/signup" &&
        router.pathname !== "/recover" && <Header />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
