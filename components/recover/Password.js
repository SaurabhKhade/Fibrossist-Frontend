import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Validate from "../../functions/validator";
import SWAL from "../auth/SWAL";

export default function RecoveryEmail({ handleSubmit }) {
  function onSubmit(event) {
    try {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const data = {
        password: Validate.password(form.get("password")),
        confirmPassword: Validate.match(
          form.get("confirm-password"),
          form.get("password")
        ),
        otp: form.get("otp"),
      };
      handleSubmit(data);
    } catch (error) {
      console.log(error);
      SWAL("Error", error, "error");
    }
  }
  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="otp"
        label="OTP"
        name="otp"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]+" }}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        id="password"
        label="New Password"
        name="password"
        autoComplete="new-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        type="password"
        id="confirm-password"
        label="Confirm Password"
        name="confirm-password"
        autoComplete="new-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
