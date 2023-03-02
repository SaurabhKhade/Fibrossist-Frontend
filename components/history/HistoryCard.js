import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import styles from "../../styles/CardHistory.module.scss";

const HistoryCard = ({ element, index }) => {
  return (
    <Card>
      <CardHeader
        action={<IconButton aria-label="settings">{index + 1}</IconButton>}
        subheader={`${element.age} years`}
      />

      <CardMedia
        component="img"
        height="194"
        image={element.img_path}
        alt="X-ray"
      />
      <CardContent className={styles.CardContent}>
        <Typography variant="body2" color="text.secondary">
          Result: {element.isNormal ? "Negative" : "Positive"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date : {element.date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Time : {element.time}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default HistoryCard;
