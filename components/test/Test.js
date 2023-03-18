import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "../../styles/TestPage.module.scss";
// import Dropzone from "react-dropzone";
import axios from "axios";
import { useRouter } from "next/router";

import { useDropzone } from "react-dropzone";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import getHost from "../../host";

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

export default function Test() {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
    },
    maxFiles: 1,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  // console.log(acceptedFiles);
  const file = acceptedFiles.length == 0 ? null : acceptedFiles[0];

  async function handleUpload() {
    setDisabled(true);
    // return console.log("uploading");
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];

    if (acceptedFiles.length == 0) {
      alert("Please select a file to upload");
      setDisabled(false);
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      let response = await axios.post(`${getHost()}/detect`, formData, {
        headers: {
          token,
          "Content-Type": "multipart/form-data",
        },
      });
      // console.log(response);
      // alert(response.data.data);
      router.push(`/dashboard/result?history=${response.data.history}`);
    } catch (e) {
      if (e.response) {
        alert(e.response.data.message);
      } else {
        alert("Something went wrong");
      }
    } finally {
      setDisabled(false);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row1}>
          {disabled ? (
            <div className={styles.innerContainer} style={style}>
              {UploadArea(getInputProps, disabled, file)}
            </div>
          ) : (
            <div className={styles.innerContainer} {...getRootProps({ style })}>
              {UploadArea(getInputProps, disabled, file)}
            </div>
          )}
          <div>
            <CardMedia
              className={`${styles.cardMedia} ${styles.docImage}`}
              sx={{ width: 300, height: "100%" }}
              image="/assets/test/test_Doctor.png"
              title="doctor_test"
            />
            <TestButton onClick={handleUpload} disabled={disabled}>
              {disabled ? "Testing..." : "Test"}
            </TestButton>
          </div>
        </div>
        {/* <div className={style.row2}></div> */}
      </div>
    </>
  );
}

function UploadArea(getInputProps, disabled, file) {
  return (
    <>
      {disabled ? <></> : <input {...getInputProps()} />}
      <CardMedia
        className={styles.cardMedia}
        sx={{ width: 80, height: 80 }}
        image="/assets/test/test_x_ray_medical.png"
        title="doctor_test"
      />
      <UploadButton variant="contained" disabled={disabled}>
        Upload File
      </UploadButton>
      <p style={{ fontSize: "18px" }}>or Drop Your Files</p>
      {file ? (
        <p style={{ fontSize: "14px", margin: 0, color: "black" }}>
          Selected File: {file.path}
        </p>
      ) : (
        <></>
      )}
    </>
  );
}

const UploadButton = styled(Button)(() => ({
  width: "250px",
  height: "50px",
  fontSize: "20px",
  backgroundColor: "#1976d2",
  color: "white",
}));

const TestButton = styled(Button)(() => ({
  width: "100%",
  height: "50px",
  fontSize: "16px",
  marginTop: "10px",
  backgroundColor: "#1976d2",
  color: "white",

  "&:hover": {
    color: "white",
    backgroundColor: "#1976d2",
  },
}));

// export default test;
