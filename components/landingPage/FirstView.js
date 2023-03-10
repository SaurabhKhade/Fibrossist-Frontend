import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import SignIn from "../../pages/login";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FirstView() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
              <p>Disease Detection Based on X-ray</p>
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
            <Link href={isLoggedIn ? "/dashboard" : "/login"}>
              <ExploreButton variant="contained">Start Using</ExploreButton>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/assets/misc/firstView.png"
            alt=""
            width={608}
            height={360}
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
