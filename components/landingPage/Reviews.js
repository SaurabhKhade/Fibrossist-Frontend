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
      "Fibrossist did a great job with my first ever health test. This provide better test results. Great Platform. Easy to use. One can really trust this platform.",
  },
  {
    id: "uid2",
    name: "Kunal Kalebag",
    age: "27",
    review:
      "Easy health checkup. I got my health checkup done in just 5 minutes. I got my results in just 2 minutes. I am very happy with the quick results.",
  },
  {
    id: "uid3",
    name: "Omkar Shirote",
    age: "21",
    review:
      "The platform is really cool. Really needed this kind of platform. Do check it out. ",
  },
  {
    id: "uid4",
    name: "Rushikesh Barsing",
    age: "25",
    review: "GREAT PLATFORM. Better to use.",
  },
  {
    id: "uid5",
    name: "Malhar Dhaygude",
    age: "27",
    review: "Nice platform, really helped me out.",
  },
  {
    id: "uid6",
    name: "Saurabh Khade",
    age: "23",
    review: "Good to go with.",
  },
];
