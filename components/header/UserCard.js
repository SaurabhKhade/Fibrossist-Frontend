import React from "react";
import Avatar from "@mui/material/Avatar";
import styles from "../../styles/UserCard.module.scss";

export default function UserCard({ data }) {
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
          alt={data.details.name + " " + data.details.surname}
          src={
            data.profile.exists
              ? `http://localhost:5000/${data.profile.path}`
              : ""
          }
        />
      </div>
      <h1 className={styles.boldText}>
        {data.details.name + " " + data.details.surname}{" "}
        <span className={styles.normalText}>{data.details.age}</span>
      </h1>
      <h2 className={styles.normalText}>{data.details.email}</h2>
      <div className={styles.socialContainer}>
        <div className={styles.data}>
          <h1 className={styles.boldText}>
            {parseInt(data.stats.positive + data.stats.negative).toString()}
          </h1>
          <h2 className={styles.smallerText}>Tests</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>
            {parseInt(data.stats.positive).toString()}
          </h1>
          <h2 className={styles.smallerText}>Positive</h2>
        </div>
        <div className={styles.data}>
          <h1 className={styles.boldText}>
            {parseInt(data.stats.negative).toString()}
          </h1>
          <h2 className={styles.smallerText}>Negative</h2>
        </div>
      </div>
    </div>
  );
}
