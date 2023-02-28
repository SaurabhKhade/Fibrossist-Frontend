import React, { useMemo } from "react";
import Image from "next/image";
import styles from "../../styles/TestPage.module.scss";
// import Dropzone from "react-dropzone";

import { useDropzone } from "react-dropzone";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const baseStyle = {
  flexBasis: "60%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#1976d2",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
  border: "12px solid",
};

const focusedStyle = {
  borderColor: "#1976d2",
};

const acceptStyle = {
  borderColor: "#1976d2",
};

const rejectStyle = {
  borderColor: "#1976d2",
};

const test = () => {
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ accept: { "image/*": [] } });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>{file.path}</li>
  ));

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row1}>
          <div className={styles.innerContainer} {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <CardMedia
              className={styles.cardMedia}
              sx={{ width: 50, height: 50 }}
              image="/assets/test/test_x_ray_medical.png"
              title="doctor_test"
            />
            <UploadButton variant="contained"> Upload File </UploadButton>
            <p>or Drop Your Files</p>
          </div>
          <div>
            <CardMedia
              className={`${styles.cardMedia} ${styles.docImage}`}
              sx={{ width: 200, height: "100%" }}
              image="/assets/test/test_Doctor.png"
              title="doctor_test"
            />

            <TestButton> Test Now</TestButton>
          </div>
        </div>
        <div className={style.row2}></div>
      </div>
    </>
  );
};

const UploadButton = styled(Button)(() => ({
  width: "200px",
  height: "23px",
  fontSize: "10px",
  backgroundColor: "#4B56D2",
  color: "white",
}));

const TestButton = styled(Button)(() => ({
  width: "200px",
  height: "23px",
  fontSize: "10px",
  backgroundColor: "#4B56D2",
  color: "white",
}));

export default test;
