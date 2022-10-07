import styles from "../styles/rightPanel.module.scss";
import typewriter from "typewriter-lite";

import { useRef, useEffect } from "react";

export default function RightPanel() {
  const typeRef = useRef(null);
  const stateRef = useRef(null);

  useEffect(() => {
    if (!stateRef.current) {
      typewriter({
        element: typeRef.current,
        texts_array: ["Pulmonary Fibrosis"],
      });
      stateRef.current = true;
    }
  }, []);
  return (
    <>
      <div className={styles.title}>
        <p>Lets Check whether you have</p>
        <h1 ref={typeRef}></h1>
        <p>or not!</p>
      </div>
    </>
  );
}
