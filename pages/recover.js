import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Copyright from "../components/auth/Copyright";
import axios from "axios";
import SWAL from "../components/auth/SWAL";
import { useRouter } from "next/router";
import Email from "../components/recover/Email";
import Password from "../components/recover/Password";
import Head from "next/head";

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [emailForm, setEmailForm] = useState(true);
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [passwordDisabled, setPasswordDisabled] = useState(false);

  const router = useRouter();

  async function validateEmail(event) {
    event.preventDefault();
    setEmailDisabled(true);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/recover/send_otp",
        data: { email },
      });
      console.log(response);
      SWAL(
        "Success",
        "We have sent you an OTP to your email. Please check your email and verify your account.",
        "success",
        () => {
          setEmailForm(false);
        }
      );
    } catch (error) {
      SWAL("Error", error.response.data.message, "error");
    } finally {
      setEmailDisabled(false);
    }
  }

  async function finalSubmit(data) {
    console.log({ email, ...data });
    setPasswordDisabled(true);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/recover/verify_otp",
        data: { email, ...data },
      });
      SWAL(
        "Success",
        "Your account has been recovered successfully. Please login with your new password.",
        "success",
        () => {
          router.push("/login");
        }
      );
    } catch (error) {
      SWAL("Error", error.response.data.message, "error");
    } finally {
      setPasswordDisabled(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Recover Account</title>
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Recover Account
          </Typography>
          {emailForm ? (
            <Email
              email={email}
              setEmail={setEmail}
              handleSubmit={validateEmail}
              disabled={emailDisabled}
            />
          ) : (
            <Password handleSubmit={finalSubmit} disabled={passwordDisabled} />
          )}
          <Grid container>
            <Link href="/login" variant="body2">
              {"Back to Login"}
            </Link>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

function setCookie(name, value, days) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
