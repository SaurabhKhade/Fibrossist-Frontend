import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import LeftPanel from "../components/Home/LeftPanel";
import RightPanel from "../components/Home/Content";
import Doughnut from "../components/Home/Doughnut";
import Fibrosis from "../components/Home/Fibrosis";
import Title from "../components/Home/Title";

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
