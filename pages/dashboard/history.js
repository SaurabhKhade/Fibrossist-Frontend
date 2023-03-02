import styles from "../../styles/Dashboard.module.scss";
import History from "../../components/history/History";
import Head from "next/head";
export default function ResultPage() {
  return (
    <>
      <Head>
        <title>Test History</title>
      </Head>
      <History />
    </>
  );
}
