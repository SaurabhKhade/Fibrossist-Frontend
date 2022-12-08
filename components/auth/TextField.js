import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function TextFieldComponent({
  label,
  id,
  sm,
  inputProps,
  changeId,
  passwordType,
}) {
  return (
    <Grid item xs={12} sm={sm ? 6 : 12}>
      <TextField
        margin="normal"
        autoComplete={id}
        name={changeId ? `${id}-2` : id}
        required
        fullWidth
        id={changeId ? `${id}-2` : id}
        label={label}
        inputProps={inputProps ? inputProps : {}}
        type={passwordType ? "password" : undefined}
      />
    </Grid>
  );
}
