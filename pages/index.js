import styles from "../styles/Home.module.scss";
import FirstView from "../components/landingPage/FirstView";
import LaterView from "../components/landingPage/LaterView";
import Reviews from "../components/landingPage/Reviews";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>fibrossist</title>
      </Head>
      <FirstView />
      {LaterViewData.map((item, i) => (
        <LaterView {...item} key={i} index={i} />
      ))}
      <Reviews />
    </div>
  );
}

const LaterViewData = [
  {
    className: styles.secondView,
    imgPath: "/assets/misc/secondView.png",
    title: "What is Fibrosis?",
    text: "Pulmonary fibrosis is a group of serious lung diseases that affect the respiratory system. Pulmonary fibrosis scars and thickens lung tissue. It impacts the connecting tissue in the lung and the alveoli (air sacs inside the lungs).The lung damage gradually gets worse over time. Hard, stiff lung tissues don’t expand as well as they should, making it harder to breathe. Pulmonary fibrosis may cause shortness of breath when you do routine tasks that never seemed tiring before.",
  },
  {
    className: styles.thirdView,
    imgPath: "/assets/misc/thirdView.png",
    title: "What You Will Get From Our Platform?",
    text: "The platform is based on deep learning algorithms that can detect the presence of fibrosis in the lungs. The lung x-ray image is taken as an input and the output is the presence of fibrosis or not. The platform is designed to be user-friendly and easy to use. The platform is also designed to be scalable and can be used by doctors and patients alike. hence, the platform can be used by doctors to detect the presence of fibrosis in the lungs and can be used by patients to check the presence of fibrosis in their lungs. The platform provides user login, signup with authentication.",
  },
];
