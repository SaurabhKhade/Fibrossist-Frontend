import styles from "../../styles/LeftPanel.module.scss";
import Avatar from "@mui/material/Avatar";

export default function LeftPanel() {
  return (
    <div className={styles.panel}>
      {/* <div className={styles.box}>
        <p>Dashboard</p>
        <p>Get all insights about your previous tests.</p>
      </div> */}
      <div className={styles.box}>
        <p>What is Fibrosis?</p>
        <p>Brief information about Fibrosis, its types and its symptoms.</p>
      </div>
      <div className={styles.box}>
        <p>How to use?</p>
        <p>Steps to use the website and its features.</p>
      </div>
    </div>
  );
}
