import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/HistoryPage.module.scss";
import HistoryCard from "./HistoryCard";
// import Dropzone from "react-dropzone";
import axios from "axios";
import { useRouter } from "next/router";

export default function History() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    async function apiCall() {
      try {
        let { data } = await axios.get("http://localhost:5000/history", {
          headers: {
            token,
          },
        });
        setData(data);
      } catch (e) {
        console.log(e);
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
