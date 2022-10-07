import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.left}>
          <LeftPanel />
        </div>
        <div className={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
