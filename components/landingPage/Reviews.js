import { useState } from "react";
import styles from "../../styles/Home.module.scss";
import Review from "./Review";
import Slider from "./Slider";

export default function Reviews() {
  const [loadedPair, setLoadedPair] = useState(0);

  function getReviews() {
    const reviews = [];
    reviews.push(<Review {...data[loadedPair * 2]} key="first" />);
    reviews.push(<Review {...data[loadedPair * 2 + 1]} key="second" />);
    return reviews;
  }

  return (
    <div className={styles.reviews}>
      <p className={styles.title}>Reviews</p>
      <div className={styles.wrapper}>
        <div className={styles.box}>{getReviews()}</div>
      </div>
      <Slider
        page={loadedPair}
        setPage={setLoadedPair}
        count={data.length / 2}
      />
    </div>
  );
}

const data = [
  {
    id: "uid1",
    name: "Amol Khairwad",
    age: "22",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
  {
    id: "uid2",
    name: "Kunal Kalebag",
    age: "27",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
  {
    id: "uid3",
    name: "Omkar Shirote",
    age: "21",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
  {
    id: "uid4",
    name: "Rushikesh Barsing",
    age: "25",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
  {
    id: "uid5",
    name: "Malhar Dhaygude",
    age: "27",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
  {
    id: "uid6",
    name: "Saurabh Khade",
    age: "23",
    review:
      "Fibrossist did a great job with my first ever health exam. this platform explained everything to me in a very clear manner. great accuracy as compared to others.",
  },
];
