import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "../../styles/UserCard.module.scss";

export default function UserCard() {
  const data = {
    name: "Babaji Patil",
    pic: "/assets/babaji.jpg",
    city: "Kudal",
    age: 21,
    tests: 9,
    negative: 8,
    positive: 1,
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <Avatar
          sx={{
            width: 100,
            height: 100,
            border: "3px solid #fff",
            backgroundColor: "#37c9d0",
          }}
          alt={data.name}
          src={data.pic}
        />
      </div>
      <h1 className={styles.boldText}>
        {data.name} <span className={styles.normalText}>{data.age}</span>
      </h1>
      <h2 className={styles.normalText}>{data.city}</h2>
      <div className={styles.socialContainer}>
        <div className={styles.data}>
          <h1 className={styles.boldText}>{data.tests}</h1>
          <h2 className={styles.smallerText}>Tests</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>{data.positive}</h1>
          <h2 className={styles.smallerText}>Positive</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>{data.negative}</h1>
          <h2 className={styles.smallerText}>Negative</h2>
        </div>
      </div>
    </div>
  );
}
