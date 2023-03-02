// import React, { useMemo, useState } from "react";
import * as React from 'react';
import Image from "next/image";
import styles from "../../styles/HistoryPage.module.scss";
import HistoryCard from "./HistoryCard"
// import Dropzone from "react-dropzone";
import axios from "axios";










const history = () => {
   const data = [
      {
            sr_no : 1,
            age : "22 years",
            image : "/assets/test/test_Doctor.png",
            result : "Positive",
            date : "22-02-2023",
            time : "12:00 AM"
          },
      {
     sr_no : 2,
     age : "22 years",
     image : "/assets/test/test_Doctor.png",
     result : "Positive",
     date : "22-02-2023",
     time : "12:00 AM"
   },
   {
      sr_no : 3,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 4,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 5,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 6,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 7,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 8,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 9,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    },
    {
      sr_no : 10,
      age : "22 years",
      image : "/assets/test/test_Doctor.png",
      result : "Positive",
      date : "22-02-2023",
      time : "12:00 AM"
    }


]



 return(
       <>
          <div className={styles.container}>
            {data.map((element) => (
                  // {console.log(element)}
                  <div className={styles.cardsContainer}>
                  <HistoryCard element={element}/>
                  </div>
            ))}
          </div>
       </>
 );

      

}
export default history;
