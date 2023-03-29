import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/HistoryPage.module.scss";
import HistoryCard from "./HistoryCard";
// import Dropzone from "react-dropzone";
import axios from "axios";
import { useRouter } from "next/router";
import getHost from "../../host";

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    if (!token) {
      return (() => {
        router.push("/login");
      })();
    }

    async function apiCall() {
      try {
        let { data } = await axios.get(`${getHost()}/history`, {
          headers: {
            token,
          },
        });
        setData(data);
      } catch (e) {
        // console.log(e);
        alert("Something went wrong");
      }
    }
    apiCall();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {data.map((element, i) => (
          // {console.log(element)}
          <div className={styles.cardsContainer} key={i}>
            <HistoryCard element={element} index={i} />
          </div>
        ))}
      </div>
    </>
  );
}
