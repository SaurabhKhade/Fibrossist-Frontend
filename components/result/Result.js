import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// import Button from "@muiimport CardMedia from "@mui/material/CardMedia";/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { dividerClasses } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import styles from "../../styles/result.module.scss";
import { styled } from "@mui/material/styles";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const result = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            className={styles.darkBlue}
          >
            Report
          </Typography>
          <hr />
        </CardContent>
        <CardContent className={styles.report}>
          <CardMedia
            className={styles.cardMedia}
            sx={{ width: 120, height: 200 }}
            image="/assets/result/resultPageImage.png"
            title="green iguana"
          />
          <CardContent className={styles.cardContent}>
            <div className={styles.middleContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className={styles.darkBlue}
              >
                Fibrossis Detection
              </Typography>
            </div>
            <div className={styles.middleContent}>
              <DateRangeIcon />
              <Typography variant="body2" color="text.secondary">
                23-12-2022 to 23-12-2023
              </Typography>
            </div>
            <div className={styles.middleContent}>
              <AccessTimeIcon />
              <Typography variant="body2" color="text.secondary">
                10:00 am to 10.30 am
              </Typography>
            </div>
          </CardContent>
          <CardContent>
            <CardActions className={styles.cardAction}>
              {/* <Button size="small">Save</Button> */}
              <Button variant="contained">Close</Button>
            </CardActions>
          </CardContent>
        </CardContent>
        <hr style={{ width: "97%" }} />
        <CardContent className={styles.resultSection}>
          <Typography variant="h4" className={styles.darkBlue}>
            You are tested positive.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default result;
