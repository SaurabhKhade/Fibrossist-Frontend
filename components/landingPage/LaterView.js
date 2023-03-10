import styles from "../../styles/Home.module.scss";
import Image from "next/image";

export default function SecondView({ className, imgPath, title, text, index }) {
  return (
    <div className={`${styles.laterView} ${className}`} id={`view-${index}`}>
      <div className={styles.image}>
        <Image src={imgPath} alt="" width={700} height={700} />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
