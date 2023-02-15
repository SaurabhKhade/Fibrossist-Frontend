import styles from "../../styles/Home.module.scss";
import Image from "next/image";

export default function Review({ id, name, age, review }) {
  return (
    <div className={styles.review}>
      <div className={styles.user}>
        <div className={styles.image}>
          <Image
            src={`/assets/profiles/${id}/pic.png`}
            alt=""
            width={85}
            height={85}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{name}</p>
          <p className={styles.age}>{age}</p>
        </div>
      </div>
      <div className={styles.text}>
        <p>{review}</p>
      </div>
    </div>
  );
}
