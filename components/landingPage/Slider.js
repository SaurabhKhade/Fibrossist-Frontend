import styles from "../../styles/Home.module.scss";

import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useEffect } from "react";

export default function Slider({ page, setPage, count }) {
  let indicatorStyle = {
    width: `${100 / count}%`,
    left: `${(100 * page) / count}%`,
  };
  //   useEffect(() => {
  //     indicatorStyle.left = `${(100 * page) / count}%`;
  //   }, [page]);

  function handleClick(dir) {
    setPage((old) => {
      let val = old + dir;
      if (val == count) return 0;
      if (val == -1) return count - 1;
      return val;
    });
  }

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.innerSliderWrapper}>
        <ArrowBackIosRoundedIcon
          className={styles.icon}
          sx={{ color: "#002d62" }}
          onClick={() => handleClick(-1)}
        />
        <div className={styles.slider}>
          <div className={styles.indicator} style={indicatorStyle}></div>
        </div>
        <ArrowForwardIosRoundedIcon
          className={styles.icon}
          sx={{ color: "#002d62" }}
          onClick={() => handleClick(1)}
        />
      </div>
    </div>
  );
}
