import styles from "../styles/Footer.module.scss";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import SWAL from "../components/auth/SWAL";

// import PersonIcon from "@mui/icons-material/Person";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TextField from "@mui/material/TextField";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Left />
      <Right />
    </footer>
  );
}

function Left() {
  return (
    <div className={styles.left}>
      <div className={styles.leftTop}>
        <div>
          <MedicalServicesIcon
            sx={{ color: "white", height: "80px", width: "80px" }}
          />
        </div>
        <div>
          {/* <p>Fibrossist, The Fibrosis Detector</p> */}
          <p>Fibrosis Disease Detection</p>
          {/* <p>The Futures Bright, The Futures Help</p> */}
          <p>The Future&apos;s Bright, The Future&apos;s Help</p>
        </div>
      </div>
      <hr />
      <div className={styles.leftBottom}>
        <div className={styles.innerLeft}>
          <p className={styles.title}>Applications</p>
          <p>Disease detection based on scanned X-Ray</p>
          <p>Computerized System</p>
          <p>Higher accuracy rate</p>
        </div>
        <div className={styles.innerRight}>
          <p className={styles.title}>Quick Contact</p>
          <div>
            <CallIcon sx={{ color: "white" }} /> <p>+91 9876543210</p>
          </div>
          <div>
            <EmailIcon sx={{ color: "white" }} /> <p>fibrossist@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];

    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/contact",
        headers: {
          "Content-Type": "application/json",
          token,
        },
        data,
      });
      SWAL(
        "Your Contact has been saved!",
        "We will get back to you soon.",
        "success"
      );
    } catch (error) {
      SWAL("Error", "Error occured while saving details!", "error");
    }
  }

  return (
    <div className={styles.right}>
      <p className={styles.title}>Request For Callback</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.label}>
          <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
          <p>Full Name</p>
        </div>
        <InputField
          variant="outlined"
          inputProps={{
            style: {
              height: "15px",
            },
          }}
          required
          placeholder="Enter your name here"
          value={data.name}
          onChange={(e) =>
            setData((data) => ({ ...data, name: e.target.value }))
          }
        />
        <div className={styles.label}>
          <EmailOutlinedIcon sx={{ color: "white" }} />
          <p>Email</p>
        </div>
        <InputField
          variant="outlined"
          required
          inputProps={{
            style: {
              height: "15px",
            },
            type: "email",
          }}
          placeholder="Enter your email here"
          value={data.email}
          onChange={(e) =>
            setData((data) => ({ ...data, email: e.target.value }))
          }
        />
        <div className={styles.label}>
          <CallIcon sx={{ color: "white" }} />
          <p>Contact</p>
        </div>
        <InputField
          inputProps={{
            style: {
              height: "15px",
            },
            type: "tel",
            pattern: "[0-9]{10}",
          }}
          required
          variant="outlined"
          placeholder="10 digit contact number"
          value={data.contact}
          onChange={(e) =>
            setData((data) => ({ ...data, contact: e.target.value }))
          }
        />
        <SubmitButton
          variant="contained"
          //   sx={{ width: "100px", marginLeft: "auto", marginTop: "15px" }}
          type="submit"
        >
          Send
        </SubmitButton>
      </form>
    </div>
  );
}

const SubmitButton = styled(Button)(() => ({
  color: "black",
  backgroundColor: "#FEFEFE",
  width: "100px",
  marginTop: "25px",
  marginLeft: "auto",
  textTransform: "capitalized",
  "&:hover": {
    backgroundColor: "#FEFEFE",
  },
  "&::placeholder": {
    fontFamily: "Poppins",
    color: "#999999",
    fontSize: "16px",
    fontWeight: 400,
  },
}));

const InputField = styled(TextField)(() => ({
  backgroundColor: "#FEFEFE",
  borderRadius: "5px",
  width: "250px",
}));
