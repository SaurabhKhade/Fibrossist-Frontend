import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RecoveryEmail({ email, setEmail, handleSubmit }) {
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 2 }}>
        Next
      </Button>
    </Box>
  );
}
