import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Validate from "../functions/validator";
import Copyright from "../components/auth/Copyright";
import Alert from "../components/auth/Alert";
import TextField from "../components/auth/TextField";
import Select from "../components/auth/Select";
import SWAL from "../components/auth/SWAL";

const theme = createTheme();

export default function SignUp() {
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const timeoutID = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const form = new FormData(event.currentTarget);
    try {
      const data = {
        name: Validate.name(form.get("given-name")),
        surname: Validate.name(form.get("family-name"), "Surname"),
        age: Validate.age(form.get("age")),
        email: Validate.email(form.get("email")),
        password: Validate.password(form.get("new-password")),
        confirmPassword: Validate.match(
          form.get("new-password"),
          form.get("new-password-2")
        ),
        gender: form.get("gender"),
      };
      // console.log(data);
      try {
        const response = await axios({
          method: "post",
          url: "http://localhost:5000/signup",
          data,
        });
        // console.log(response.data.message);
        SWAL("Success", response.data.message, "success", () => {
          router.push("/login");
        });
      } catch (error) {
        SWAL("Error", error.response.data.message, "error");
        // console.log(error.response.data);
      }
    } catch (e) {
      setErrorMessage(e);
      setErrorOpen(true);
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
        setErrorOpen(false);
      }, 3000);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Alert open={errorOpen} message={errorMessage} setOpen={setErrorOpen} />
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <TextField label="First Name" id="given-name" sm />
              <TextField label="Last Name" id="family-name" sm />
              <TextField
                label="Age"
                id="age"
                inputProps={{ inputMode: "numeric", pattern: "[0-9]+" }}
                sm
              />
              <Select id="gender" />
              <TextField label="Email Address" id="email" />
              <TextField label="Password" id="new-password" passwordType />
              <TextField
                label="Confirm Password"
                id="new-password"
                changeId
                passwordType
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disabled}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
