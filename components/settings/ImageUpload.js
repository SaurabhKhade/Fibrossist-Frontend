import styles from "../../styles/settings.module.scss";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

export default function ImageUpload({ src }) {
  const [isChanged, setIsChanged] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();
  // console.log("sec", imgSrc);

  function handleChange(e) {
    // console.log(e.target.files[0]);
    let file = e.target.files[0];
    if (!file) return;
    setFile(file);
    let reader = new FileReader();
    reader.onload = (e) => {
      // console.log(e);
      setImgSrc(e.target.result);
    };
    reader.readAsDataURL(file);
    setIsChanged(true);
  }

  async function handleUpload() {
    setIsUploading(true);
    const formData = new FormData();
    formData.append("profile", file);
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];

    if (!token) return router.push("/login");

    try {
      await axios.post(
        "http://localhost:5000/settings/update_profile",
        formData,
        {
          headers: {
            token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Profile picture updated");
      window.location.reload();
      // console.log(response.data);
    } catch {
      alert("Something went wrong");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className={styles.imageUpload}>
      <p>Upload Profile Pictue</p>
      <div className={styles.img}>
        <TextField
          variant="outlined"
          inputProps={{
            type: "file",
            accept: "image/*",
          }}
          onChange={handleChange}
        />
      </div>
      <div className={styles.preview}>
        <div className={styles.imageCover}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgSrc ? imgSrc : src} alt="" />
        </div>
      </div>
      {isChanged && (
        <div className={styles.btn}>
          <Button
            variant="contained"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      )}
    </div>
  );
}
