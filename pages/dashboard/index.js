import styles from "../../styles/Dashboard.module.scss";
import Test from "../../components/test/Test";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Test />
    </div>
  );
}
