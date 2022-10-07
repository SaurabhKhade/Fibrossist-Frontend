import styles from "../styles/LeftPanel.module.scss";
import Avatar from "@mui/material/Avatar";

export default function LeftPanel() {
  return (
    <>
      <div className={styles.avatar}>
        <Avatar
          alt="Remy Sharp"
          style={{ width: "150px", height: "150px" }}
          src="/static/images/avatar/1.jpg"
        />
      </div>
      <div className={styles.details}>
        <p>Name</p>
        <p>: Sauabh Khade</p>
        <p>Age</p>
        <p>: 21</p>
        <p>Gender</p>
        <p>: Male</p>
        <p>Tests Conducted</p>
        <p>: 0</p>
      </div>
    </>
  );
}
