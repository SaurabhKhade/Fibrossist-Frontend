import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";

export default function AlertComponent({ open, message, setOpen }) {
  return (
    <Collapse in={open}>
      <Alert
        severity="error"
        sx={{ position: "absolute", left: "50px", top: "50px", zIndex: 1 }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
}
