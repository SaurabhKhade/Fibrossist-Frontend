import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function FirstView() {
  return (
    <div className={styles.firstView}>
      <div>
        <h1>Adding Care to Your Life</h1>
      </div>
      <div className={styles.bottom}>
        <div>
          <div className={styles.list}>
            <div className={styles.item}>
              <p>
                <CheckCircleRoundedIcon sx={{ fontSize: 26 }} />
              </p>
              <p>Advance Care, Trusted Care</p>
            </div>
            <div className={styles.item}>
              <p>
                <CheckCircleRoundedIcon sx={{ fontSize: 26 }} />
              </p>
              <p>Disease detection based on X-ray</p>
            </div>
            <div className={styles.item}>
              <p>
                <CheckCircleRoundedIcon sx={{ fontSize: 26 }} />
              </p>
              <p>Computerized System</p>
            </div>
            <div className={styles.item}>
              <p>
                <CheckCircleRoundedIcon sx={{ fontSize: 26 }} />
              </p>
              <p>Higher Accuracy Rate</p>
            </div>
          </div>

          <div>
            <ExploreButton variant="contained">Explore More</ExploreButton>
          </div>
        </div>
        <div>
          <Image
            src="/assets/misc/firstView.png"
            alt=""
            width={600}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}

const ExploreButton = styled(Button)(() => ({
  width: "450px",
  height: "70px",
  fontSize: "20px",
}));
