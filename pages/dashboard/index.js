import styles from "../../styles/Dashboard.module.scss";
import Test from "../../components/test/Test";
import Head from "next/head";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Test />
    </div>
  );
}
