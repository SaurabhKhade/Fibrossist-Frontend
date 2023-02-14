import "../styles/globals.scss";

import Header from "../components/Header";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(()=>{
  // },[])
  return (
    <>
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
