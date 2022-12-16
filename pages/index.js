import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import LeftPanel from "../components/home/LeftPanel";
import RightPanel from "../components/home/Content";
import Doughnut from "../components/home/Doughnut";
import Fibrosis from "../components/home/Fibrosis";
import Title from "../components/home/Title";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.bg}></div>
          {/* <Doughnut /> */}
          <Title />
        </div>
      </div>
    </div>
  );
}
