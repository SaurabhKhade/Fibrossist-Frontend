import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "../styles/UserCard.module.scss";

export default function UserCard() {
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
          alt="Saurabh Khade"
          src="/static/images/avatar/2.jpg"
        />
      </div>
      <h1 className={styles.boldText}>
        Saurabh Khade <span className={styles.normalText}>22</span>
      </h1>
      <h2 className={styles.normalText}>Kolhpur</h2>
      <div className={styles.socialContainer}>
        <div className={styles.data}>
          <h1 className={styles.boldText}>0</h1>
          <h2 className={styles.smallerText}>Tests</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>0</h1>
          <h2 className={styles.smallerText}>Positive</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>0</h1>
          <h2 className={styles.smallerText}>Negative</h2>
        </div>
      </div>
    </div>
  );
}
