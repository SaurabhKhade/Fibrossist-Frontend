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
import axios from "axios";

import Validate from "../functions/validator";
import Copyright from "../components/signup/Copyright";
import Alert from "../components/signup/Alert";
import TextField from "../components/signup/TextField";
import Select from "../components/signup/Select";

const theme = createTheme();

export default function SignUp() {
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const timeoutID = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    try {
      const data = {
        name: Validate.name(form.get("name")),
        surname: Validate.name(form.get("surname"), "Surname"),
        age: Validate.age(form.get("age")),
        email: Validate.email(form.get("email")),
        password: Validate.password(form.get("password")),
        confirmPassword: Validate.match(
          form.get("password"),
          form.get("confirm-password")
        ),
        gender: form.get("gender"),
      };

      try {
        const response = await axios.post("http://localhost:5000/signup", data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } catch (e) {
      setErrorMessage(e);
      setErrorOpen(true);
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
        setErrorOpen(false);
      }, 3000);
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
              <Select />
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
