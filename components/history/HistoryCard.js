import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import styles from "../../styles/CardHistory.module.scss";




  
 




const HistoryCard = ({element}) => {
  //  console.log(element)
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


  return (
    <Card sx={{ }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     B
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
            {element.sr_no}
          </IconButton>
        }
        // title="Babaji Patil"
        subheader={element.age}
    />

     



      <CardMedia
        component="img"
        height="194"
        image={element.image}
        alt="X-ray"
      />
      <CardContent className={styles.CardContent}>
        <Typography variant="body2" color="text.secondary">
          Result: {element.result}
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

      

}
export default HistoryCard;
