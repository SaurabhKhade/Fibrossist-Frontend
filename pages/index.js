import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/Content";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
