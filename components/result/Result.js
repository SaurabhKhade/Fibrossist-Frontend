import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ElderlyOutlinedIcon from "@mui/icons-material/ElderlyOutlined";
// import Button from "@muiimport CardMedia from "@mui/material/CardMedia";/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { dividerClasses } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import styles from "../../styles/result.module.scss";
import { styled } from "@mui/material/styles";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";
import getHost from "../../host";

export default function Result() {
  const router = useRouter();
  const [data, setData] = useState(null);
  useEffect(() => {
    // console.log(router.query.history22);
    // console.log(router.query);
    if (router.isReady) {
      if (!router.query.history) {
        alert("Please select a test to view the result");
        router.replace("/dashboard");
      } else {
        async function fetchData() {
          const res = await axios.get(
            `${getHost()}/history?id=${router.query.history}`
          );
          // console.log(res.data);
          setData(res.data);
        }
        fetchData();
      }
    }
  }, [router]);
  return (
    <div className={styles.container}>
      {data ? (
        <Card className={styles.card}>
          <Head>
            <title>
              You have been tested {data.isNormal ? "Negative" : "Positive"}
            </title>
          </Head>
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
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
              sx={{ width: 50, height: 300 }}
              image={`${getHost()}/${data.img_path}`}
              title="X-ray image"
            />
            <CardContent className={styles.cardContent}>
              <div className={styles.middleContent}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  className={styles.darkBlue}
                >
                  Detection Report
                </Typography>
              </div>
              <div className={styles.middleContent}>
                <DateRangeIcon />
                <Typography
                  variant="body2"
                  fontSize={17}
                  color="text.secondary"
                >
                  {data.date}
                </Typography>
              </div>
              <div className={styles.middleContent}>
                <AccessTimeIcon />
                <Typography
                  variant="body2"
                  fontSize={17}
                  color="text.secondary"
                >
                  {data.time}
                </Typography>
              </div>
              <div className={styles.middleContent}>
                <ElderlyOutlinedIcon />
                <Typography
                  variant="body2"
                  fontSize={17}
                  color="text.secondary"
                >
                  {data.age} years old
                </Typography>
              </div>
            </CardContent>
          </CardContent>
          <hr style={{ width: "97%" }} />
          <CardContent className={styles.resultSection}>
            <Typography variant="h4" className={styles.darkBlue}>
              {data.isNormal
                ? "No Fibrosis detected"
                : "You are tested positive."}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
