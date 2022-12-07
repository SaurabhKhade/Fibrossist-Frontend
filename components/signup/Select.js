import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectComponent() {
  return (
    <Grid item xs={12} sm={6}>
      <FormControl fullWidth>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          name="gender"
          labelId="gender-label"
          id="gender"
          defaultValue=""
          label="Gender"
          required
        >
          <MenuItem value="M">Male</MenuItem>
          <MenuItem value="F">Female</MenuItem>
          <MenuItem value="O">Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
}
